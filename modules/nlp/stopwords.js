const stopwords = new Set([
"a", "aby", "aj", "ale", "anebo", "ani", "aniz", "ano", "asi", "avsak", "az", "ba", "bez", "bude", "budem", "budes", "by", "byl", "byla", "byli", "bylo", "byt", "ci", "clanek", "clanku", "clanky", "co", "com", "coz", "cz", "dalsi", "design", "do", "email", "ho", "i", "jak", "jake", "jako", "je", "jeho", "jej", "jeji", "jejich", "jen", "jeste", "jenz", "ji", "jine", "jiz", "jsem", "jses", "jsi", "jsme", "jsou", "jste", "k", "kam", "kde", "kdo", "kdyz", "ke", "ktera", "ktere", "kteri", "kterou", "ktery", "ku", "ma", "mate", "me", "mezi", "mi", "mit", "mne", "mnou", "muj", "muze", "my", "na", "nad", "nam", "napiste", "nas", "nasi", "ne", "nebo", "nebot", "necht", "nejsou", "není", "neni", "net", "nez", "ni", "nic", "nove", "novy", "nybrz", "o", "od", "ode", "on", "org", "pak", "po", "pod", "podle", "pokud", "pouze", "prave", "pred", "pres", "pri", "pro", "proc", "proto", "protoze", "prvni", "pta", "re", "s", "se", "si", "sice", "spol", "strana", "sve", "svuj", "svych", "svym", "svymi", "ta", "tak", "take", "takze", "tamhle", "tato", "tedy", "tema", "te", "ten", "teto", "tim ", "timto", "tipy", "to", "tohle", "toho", "tohoto", "tom", "tomto", "tomuto", "totiz", "tu", "tudiz", "tuto", "tvuj", "ty", "tyto", "u", "uz", "v", "vam", "vas", "vase", "ve", "vedle", "vice", "vsak", "vsechen", "vy", "vzdyt", "z", "za", "zda", "zde", "ze", "zpet", "zpravy", "ses", "tim"]);

module.exports = stopwords;

// Removed Stopwords
// =================
// dnes, tento
