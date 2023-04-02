export function formatNum(num: number | undefined) {
  if (num !== undefined) {
    return num.toLocaleString();
  }
}
