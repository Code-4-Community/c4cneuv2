import { asText } from "@prismicio/client";
import { RichTextField } from "@prismicio/types";

const seperator = "-";
const joiner = " ";

export const linkGen = (txt?: string) =>
  txt?.split(joiner).join(seperator) ?? "";
export const prismicLinkGen = (txt: RichTextField) => linkGen(asText(txt));
export const resolveParams = (str?: string): string =>
  str?.split(seperator).join(joiner).toLowerCase() ?? "";
