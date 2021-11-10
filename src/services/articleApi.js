import { useState, useRef, useEffect } from "react";

export default function useFetchArticle() {
  const isMounted = useRef(false);
  const [article, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    isMounted.current = true;
    async function init() {
      try {
        const response = await fetch(
          "https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&categoryId=20"
        );
        if (response.ok) {
          const json = await response.json();
          const data = json.Result.Resources.Resource;
          setData(data);
        } else {
          throw response;
        }
      } catch (e) {
        setError(e);
      }
    }
    init();
  }, []);

  return { article, error };
}
