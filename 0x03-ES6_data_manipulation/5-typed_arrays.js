export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const Buffer = new ArrayBuffer(length);
  const Int8 = new Int8Array(Buffer, 0, length);
  Int8.set([value], position);
  return new DataView(Buffer);
}
