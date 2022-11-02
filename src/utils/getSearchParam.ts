export default function getSearchParam(
  params: URLSearchParams,
  key: string,
  defaultValue: string
) {
  return params.has(key) ? params.get(key)! : defaultValue;
}
