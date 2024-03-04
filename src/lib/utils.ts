import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import constants from "../constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function combine(
  uppercase: boolean,
  lowercase: boolean,
  numbers: boolean,
  spacial: boolean
): string {
  const actualString = new Array();
  actualString.push(lowercase ? constants.constantAlphabet : "");
  actualString.push(uppercase ? constants.constantAlphabet.toUpperCase() : "");
  actualString.push(numbers ? constants.constantNumber : "");
  actualString.push(spacial ? constants.constantSpacial : "");

  return actualString.join("").trim();
}

export function generateRandomString(
  lenghtOfString: number,
  actualString: string
) {
  const generate = new Array();
  for (let i = 1; i <= lenghtOfString; i++) {
    const randomNumber = Math.floor(Math.random() * actualString.length);
    generate.push(actualString.charAt(randomNumber));
  }
  return generate.join("").trim();
}
