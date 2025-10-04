import { useEffect, useRef, useState } from "react";
import Item from "./Item.tsx";

const bigData = new Uint8Array(100_000_000);

function App() {
  const bigDataRef = useRef<Uint8Array<ArrayBuffer> | null>(null);

  const [visible, setVisible] = useState<boolean>(false);
  const [, setNop] = useState<boolean>(false);

  useEffect(() => {
    if (visible) {
      bigDataRef.current = bigData;
      setNop((prev) => !prev); // force re-render
    }
  }, [visible]);

  return (
    <>
      <button onClick={() => setVisible((prev) => !prev)}>Go</button>
      {visible &&
        Array.from({ length: 100 }).map((_, index) => (
          <Item key={index} data={{ buffer: bigDataRef.current }} />
        ))}
    </>
  );
}

export default App;
