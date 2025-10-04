// this needs to be nested, when Uint8Array is used directly in props it's working fine
interface Data {
  buffer: Uint8Array<ArrayBuffer> | null;
}

function Item({ data }: { data: Data }) {
  return <div>{data.buffer?.length}</div>;
}

export default Item;
