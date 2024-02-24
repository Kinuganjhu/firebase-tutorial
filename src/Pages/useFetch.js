import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      fetch(url)
        .then(response => response.json())
        .then(data => setData(data));
    } catch (error) {
      alert(`${error.name}: ${error.message}`);
    }
  }, [url]);

  return [data];
}
