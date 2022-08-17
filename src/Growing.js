import { useState, useEffect } from "react";

const Growing = () => {
  const [contagem, setContagem] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setContagem(contagem + 1);
    }, 2000)
  },[contagem]);

  return (
    <h1>{contagem}</h1>
  );
}

export default Growing;
