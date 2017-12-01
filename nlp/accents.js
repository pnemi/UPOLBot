
// const AccentsRdemovalMap = {
//   "á":  "a",
//   "č":  "c",
//   "ď":  "d",
//   "é":  "e",
//   "ě":  "e",
//   "í":  "i",
//   "ň":  "n",
//   "ó":  "o",
//   "š":  "s",
//   "ť":  "t",
//   "ú":  "u",
//   "ů":  "u",
//   "ý":  "y",
//   "ř":  "r",
//   "ž":  "z"
// };


const AccentsRemovalRules = [
  { base : "a", letters : "á" },
  { base : "c", letters : "č" },
  { base : "d", letters : "ď" },
  { base : "e", letters : "éě" },
  { base : "i", letters : "í" },
  { base : "n", letters : "ň" },
  { base : "o", letters : "ó" },
  { base : "s", letters : "š" },
  { base : "t", letters : "ť" },
  { base : "u", letters : "úů" },
  { base : "y", letters : "ý" },
  { base : "r", letters : "ř" },
  { base : "z", letters : "ž" }
];

// O(1) lookup
const AccentsRemovalMap = new Map();

// converts rule { base : "e", letters : "éě" }
// to map key value pairs {"é" => "e"} and {"ě" => "e"}
for (let rule of AccentsRemovalRules) {
  for (let letter of rule.letters) {
    // AccentsRemovalMap.set(letter.toUpperCase(), rule.base.toUpperCase()); // uppercased variant
    AccentsRemovalMap.set(letter, rule.base);
  }
}

exports.removeAccents = word => {
  let result = Array(word.length);
  for (let i in word) {
    let letter = word[i];
    if (AccentsRemovalMap.has(letter)) {
      result[i] = AccentsRemovalMap.get(letter); // replace
    } else {
      result[i] = letter;
    }
  }
  return result.join("");
};
