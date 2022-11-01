export default function getRandomHex(length: number = 3) {
  const randomHex = new Uint8Array(length);
  crypto.getRandomValues(randomHex);
  return Buffer.from(randomHex).toString("hex");
}
