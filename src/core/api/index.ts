import axios from "axios";

interface RequestOptions {
  headers?: Record<string, string>;
}

export async function apiGet<T>(url: string, options?: RequestOptions): Promise<T> {
  const { data } = await axios.get<T>(url, {
    headers: {
      Accept: "application/json",
      ...options?.headers,
    },
  });

  return data;
}

export async function apiPost<T>(
  url: string,
  body?: unknown,
  options?: RequestOptions
): Promise<T> {
  const { data } = await axios.post<T>(url, body, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  return data;
}
