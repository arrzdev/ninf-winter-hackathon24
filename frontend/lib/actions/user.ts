"use server"
import db from "@/lib/database/connect";
import { User } from "@prisma/client";

import { getSession } from "@/lib/actions/auth";
import { IBackendError, IFileMeta } from "@/lib/types";
import { uploadFile } from "@/lib/services/file.upload";
import { revalidatePath } from "next/cache";

export const getUser = async ():Promise<User | false> => {
  const userSession = await getSession();
  if (!userSession) return false;

  // get the user

  try {
    const user = await db.user.findUnique({
      where: {
        id: userSession.userId,
      }
    })

    if (user) return user;
    return false;
  }
  catch (error) {
    return false;
  }
}

export const updateAvatar = async (file: IFileMeta): Promise<true | IBackendError> => {
  const userSession = await getSession();
  if (!userSession) return {
    status: "error",
    message: "You don't have permission to do that"
  }

  // check if the file is an image
  if (!file.mimeType.startsWith("image")) return {
    status: "error",
    message: "File must be an image"
  }

  //check if the file is not bigger than 8mb
  if (file.size > 8) return {
    status: "error",
    message: "File must be smaller than 8mb"
  }

  // upload file
  const fileId = await uploadFile(file, userSession.userId);
  if (!fileId) return {
    status: "error",
    message: "Failed to upload avatar"
  }

  //update user avatar
  const avatarUpdated = await db.user.update({
    where: {
      id: userSession.userId
    },
    data: {
      avatarId: fileId
    }
  });

  if (!avatarUpdated) return {
    status: "error",
    message: "Failed to update avatar"
  }

  //revalidate profile page
  revalidatePath("/profile")

  return true;
}
