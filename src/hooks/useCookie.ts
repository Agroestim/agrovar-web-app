export function useCookie() {
  const cookies = document.cookie.split(";");
  const mapping: Map<string, string> = new Map();

  cookies.map((cookie) => {
    const values = cookie.split("=");
    mapping.set(values[0], values[1]);
  });

  return mapping;
}
