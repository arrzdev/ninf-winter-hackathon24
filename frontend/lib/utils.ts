import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const truncateText = (text: string, limit: number) => {
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

export const storeColorMap: { [key: string]: string } = {
  "continente": "text-[#E40517]",
  "auchan": "text-[#FF0015]",
  "pingo-doce": "text-[#7EC340]",
  "el-corte-ingles": "text-[#008C2E]",
  "minipreco": "text-[#005098]"
}