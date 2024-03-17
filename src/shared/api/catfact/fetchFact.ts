const url = "https://catfact.ninja/fact";

export interface CatFactResponse {
  fact: string;
  length: number;
}

export const getCatFact = async ({
  signal,
}: {
  signal: AbortSignal;
}): Promise<CatFactResponse> => {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error("Network Error");
  }
  return response.json();
};
