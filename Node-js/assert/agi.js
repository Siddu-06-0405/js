// /a/ is the pattern that matches the lowercase letter "a".
// g is the global flag, which means the regular expression will search for all occurrences of "a" in the string, not just the first one.
// i is the case-insensitive flag, which means the regular expression will match both lowercase "a" and uppercase "A".

var text  = "Allu Arjun AAA"
const matches = text.match(/a/gi);

console.log(matches);
newText = text.replace(/a/gi,'O');
console.log(newText); // Output: "Ollo Orjun OOO"