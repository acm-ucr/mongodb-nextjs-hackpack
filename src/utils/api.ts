type apiGet = {
  url: string;
  method: string;
  body: object;
};

type apiResponse = {
  status: number;
  data: any;
};

export const api = async ({
  url,
  method,
  body,
}: apiGet): Promise<apiResponse> => {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return { status: response.status, data };
};
