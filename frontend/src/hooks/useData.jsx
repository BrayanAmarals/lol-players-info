import { useEffect, useState } from "react";

export function useData() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    function dataRequest() {
      fetch("http://localhost:5000/bootcamp")
        .then((res) => res.json())
        .then((res) => {
          setMessage(res);
        });
    }
    dataRequest();
  }, []);

  return message;
}
