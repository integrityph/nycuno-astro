const BASE_URL = import.meta.env.BASE_URL;

export function asset(path: string) {
  return `${BASE_URL}${path.replace(/^\/+/, "")}`;
}

export function pageUrl(path: string) {
  return `${BASE_URL}${path.replace(/^\/+/, "")}`;
}