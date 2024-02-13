/**
 * 日付データにフォーマットを適用する
 * @param dateString 例："2000-01-01"
 * @returns          例："2000/01/01"
 */
export function dateFormatter(dateString: string | undefined) {
  if (!dateString) return undefined
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString(
    "ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" });
  return formattedDate;
}