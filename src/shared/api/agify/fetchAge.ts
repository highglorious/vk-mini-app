const url = "https://api.agify.io/?name=";
//const url = "https://dummyjson.com/users/search?q=";

export interface AgeByNameResponse {
  count: number;
  name: string;
  age: number;
}

// export interface AgeByNameResponse {
//   users: string[];
//   total: number;
//   skip: number;
//   limit: number;
// }
export const getAgeByName = async (
  name: string,
  {
    signal,
  }: {
    signal: AbortSignal;
  }
): Promise<AgeByNameResponse> => {
  const response = await fetch(url + name, { signal });
  if (!response.ok) {
    throw new Error("Network Error");
  }
  return response.json();
};
