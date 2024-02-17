
export const truncateText = (text:string, limit:number) => {
  if (text.length > limit) {
    return `${text.slice(0, limit).trim()}...`;
  }
  return text;
}

export const capitalizeText = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const bufferToB64 = (buffer: ArrayBuffer) => {
  return Buffer.from(buffer).toString("base64");
}