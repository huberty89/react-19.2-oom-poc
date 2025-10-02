import Item from "./Item.tsx";

const bigData = new Uint8Array(100_000_000);

function App() {
  return (
    <>
      {Array.from({ length: 100 }).map((_, index) => (
        <Item key={index} data={{ buffer: bigData }} />
      ))}
    </>
  );
}

export default App;
