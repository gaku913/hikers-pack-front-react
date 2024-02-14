/**
 * 日付データにフォーマットを適用する
 * @param dateString 例："2000-01-01"
 * @returns          例："2000/01/01", "2000年1月1日"
 */
type options = {
    format?: "kanji" | "slash"
};


export function dateFormatter(
  dateString: string | undefined,
  options: options = { format: "slash" },
) {
  if (!dateString) return undefined

  // 日付文字列をDateオブジェクトに変換
  const date = new Date(dateString);

  // 年、月、日を取得
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月は0から始まるため、1を加える
  const day = date.getDate();

  let formattedDate = dateString;
  switch (options?.format) {
    case "slash":
      formattedDate = date.toLocaleDateString(
        "ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" });
      break;

    case "kanji":
      formattedDate = `${year}年${month}月${day}日`;
      break;
  }
  return formattedDate;
}