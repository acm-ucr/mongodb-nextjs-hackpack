interface apiGet {
  url: string;
  method: string;
  body: object;
}

interface Response {
  status: number;
  data: any;
}

export const api = async ({ url, method, body }: apiGet): Promise<Response> => {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return { status: response.status, data };
};
