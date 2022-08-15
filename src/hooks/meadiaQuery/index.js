import { useEffect, useState } from "react";

export const useMediaQuery = (q) => {
  const [query, setQuery] = useState(false);
  const mq = window.matchMedia(q);

  useEffect(() => {
    const handleChange = (e) => {
      setQuery(e.matches);
    };
    mq.addEventListener("change", handleChange);

    return () => {
      mq.removeEventListener("change", handleChange);
    };
  }, [query]);

  return query;
};
