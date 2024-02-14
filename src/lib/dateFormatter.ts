/**
 * 日付データにフォーマットを適用する
 * 例：
 * slash: "2000/01/01"
 * kanji: "2000年1月1日"
 * hyphen: "2000-01-01"
 */
type options = {
    format?: "kanji" | "slash" | "hyphen"
};

/**
 * Overload
 */
// 文字列(例："2000-01-01")から文字列を生成するオーバーロード
export function dateFormatter(
  input: string | undefined, options?: options): string;
// Date型から文字列を生成するオーバーロード
export function dateFormatter(
  input: Date | undefined, options?: options): string;

// 実装
export function dateFormatter(
  input: string | Date | undefined,
  options?: options,
) {
  if (!input) return ""; // undefined対策
  const date = typeof input === "string" ? new Date(input) : input;
  return dateFormatterFromDate(date, options);
}

/**
 * Date型からオプションで指定した形式の文字列を生成する
 */
function dateFormatterFromDate( date: Date, options?: options) {
  // 年、月、日を取得
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月は0から始まるため、1を加える
  const day = date.getDate();
  const monthText = String(month).padStart(2, "0");
  const dayText = String(day).padStart(2, "0");

  let formattedDate = "";
  switch (options?.format) {
    case "slash":
      formattedDate = date.toLocaleDateString(
        "ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" });
      break;

    case "hyphen":
      formattedDate = `${year}-${monthText}-${dayText}`;
      break;

    default: // "kanji"
      formattedDate = `${year}年${month}月${day}日`;
      break;
  }
  return formattedDate;
}