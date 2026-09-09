import { useEffect, useState } from 'react';

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * Generic data-fetching hook.
 * Handles useState + useEffect + fetch in one reusable place,
 * so pages don't need to repeat the same fetch logic.
 */
export function useFetch<T>(url: string | null): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) {
      setData(null);
      setLoading(false);
      setError(null);
      return;
    }

    let isCancelled = false;
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url as string, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const json = (await response.json()) as T;

        if (!isCancelled) {
          setData(json);
        }
      } catch (err) {
        if (!isCancelled && (err as Error).name !== 'AbortError') {
          setError((err as Error).message ?? 'Something went wrong');
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isCancelled = true;
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}
