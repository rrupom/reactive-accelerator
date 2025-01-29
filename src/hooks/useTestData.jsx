import { useEffect, useState } from "react";
import { fetchTestResults } from "../utils/fetchTestResults";

export function useTestData(query, page) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    let ignore = false;
    fetchTestResults(query, page).then((json) => {
      if (!ignore) {
        setResults(json);
      }
    });

    return () => {
      ignore = true;
    };
  }, [query, [page]]);

  return results;
}
