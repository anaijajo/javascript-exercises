// const removeFromArray = function(wordArray, ...removedWords) {
//     for (let i = 0; i < wordArray.length; i++) {
//         let index;
//         if (removedWords) {
//             index = wordArray.indexOf(removedWords);
//             wordArray.splice(index);
//         }
//      }
//     return [wordArray];
//     };
// Options: calculate position within an array and remove  using splice.

const removeFromArray = function(words, ...remove) {
    return Array.from(words).filter(word => !remove.includes(word));
}

// Do not edit below this line
module.exports = removeFromArray;
