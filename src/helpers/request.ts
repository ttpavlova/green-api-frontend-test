export const request = async (url: string, options: RequestInit = {}) => {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });

  if (!response.ok) {
    const result = await response.json();

    throw new Error(`HTTP ${response.status}: ${result}`);
  }

  const result = await response.json();

  return result;
};
