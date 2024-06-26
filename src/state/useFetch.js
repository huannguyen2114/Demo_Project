import { readCollection } from "../firebase/firestore";
const { useState, useEffect } = require("react");

function useFetch(collection) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData(collection) {
      setLoading(true);
      try {
        const response = await readCollection(collection);
        setData(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData(collection);
  }, [collection]);

  return { data, loading, error };
}

export default useFetch;
