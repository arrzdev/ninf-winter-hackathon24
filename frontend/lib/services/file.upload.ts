// "use server";
import db from "@/lib/database/connect";

import { IFileMeta } from "@/lib/types";
import { File } from "@prisma/client";

export const uploadFile = async (file: IFileMeta, uploadedBy: string): Promise<false | string> => {
  const CHUNK_SIZE = 15;
  const MAX_FILE_SIZE = 100;

  if (file.size > MAX_FILE_SIZE) return false;

  //divide the buffer into chunks
  const nChunks = Math.ceil(file.size / CHUNK_SIZE);

  //get how many caracters can be stored in a chunk
  const nCaracters = file.b64Buffer.length / nChunks;

  let fileDocument: File;

  // make the creation of the file and the segments atomic
  try {
    // return the file id
    return await db.$transaction(async (tx) => {
      //create the file
      fileDocument = await tx.file.create({
        data: {
          name: file.name,
          mimeType: file.mimeType,
          size: file.size,
          uploadedById: uploadedBy,
        }
      })
  
      //check if file was created
      if (!fileDocument) throw new Error("Failed to create file");
  
      //upload each chunk
      for (let i = 0; i < nChunks; i++) {
        //get the current chunk
        const chunk = file.b64Buffer.slice(i * nCaracters, (i + 1) * nCaracters);
  
        //create segment 
        const newSegment = await tx.fileSegment.create({
          data: {
            fileId: fileDocument.id,
            b64BufferSegment: chunk,
          }
        })
  
        //check if segment was uploaded
        if (!newSegment) throw new Error("Failed to upload file segment");
      }

      return fileDocument.id;      
    })
  } catch (error) {
    // TODO: add real error logging here
    console.log(error);
    return false;
  }
}

export const getFile = async (fileId: string) => {
  // get the file
  const file = await db.file.findUnique({
    where: {
      id: fileId
    }
  })

  // check if file exists
  if (!file) return false;

  // get the file segments
  const fileSegments = await db.fileSegment.findMany({
    where: {
      fileId
    }
  })

  // check if file segments exist
  if (!fileSegments) return false;

  // get the file buffer
  const fileBuffer = fileSegments.reduce((acc, cur) => acc + cur.b64BufferSegment, "");

  // return the file
  return {
    ...file,
    b64Buffer: fileBuffer
  }
}