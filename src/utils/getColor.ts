import { defaultColor } from "../constants/defaultColor";

export default function getColor(params: URLSearchParams, key: string) {
  return params.has(key) ? params.get(key)! : '#' + defaultColor[key];
}