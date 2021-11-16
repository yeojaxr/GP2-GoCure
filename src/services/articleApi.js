import { useState, useRef, useEffect } from "react";
import axios from "axios";

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

// Error Cannot Fetch Data
export function useFetchVideo() {
  const [video, setVideo] = useState(null);

  async function fetchData() {
    let response = await axios
      .get(
        `https://618bd026ded7fb0017bb9232.mockapi.io/youtube`
      );
    let data = await response.data
      setVideo(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { video }
}
