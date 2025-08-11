export function getFirstNWords(str, wordCount) {
  const words = str.trim().split(/\s+/); // split by any whitespace
  return words.slice(0, wordCount).join(" ");
}
// Output: "React makes it painless"
