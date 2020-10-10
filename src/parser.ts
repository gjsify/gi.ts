import { parseString, convertableToString } from "xml2js";
import { promisify as $ } from "util";
import { GirXML } from "./xml";

// Promisify xml2js' parseString
const parseStringAsync = async <T>(str) => await $<convertableToString, T>(parseString)(str);

export async function parseGir(contents: string) {
    return await parseStringAsync<GirXML>(contents);
}