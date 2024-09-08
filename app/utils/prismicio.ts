// app/utils/prismicio.ts
import { createClient, getRepositoryEndpoint } from "@prismicio/client";
import { AllDocumentTypes } from "types.generated";

export const repoName = "c4cneu";
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN;
export const endpoint = getRepositoryEndpoint(repoName);

export const getPrismicClient = () => {
  return createClient<AllDocumentTypes>(repoName, {
    accessToken,
  });
};
