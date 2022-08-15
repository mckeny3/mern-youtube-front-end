import { useEffect, useState } from "react";

export function useAsync(func, deps = []) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(null);

  useEffect(() => {
    setLoading(true);
    func
      .then((result) => {
        setValue(result);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, deps);

  return { error, loading, value };
}

export const useAsyncOnDemand = async (func, run = false) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(null);
  if (run === false) return;
  setLoading(true);
  return func
    .then((result) => {
      setValue(result);
      setError(null);
      setLoading(false);
      run = false;
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
      run = false;
    });
};
