# Answers to "Basic Node Operations"

.1) Run the commands sort, wc and uniq on the commands.js file. Explain how they work and what the output was.

* `sort`: takes the contents of our text file and sorts them alphabetically and numerically
  * `sort commands.js` returned our file sorted alphabetically, starting with white space and the most indented lines and ending with lines without indents.
* `wc`: short for word count. Generates statistics from our file: new line count, word count and byte count.
  * `wc commands.js` returned statistics from our file: 54 lines, 131 words, 1613 bytes.
  * `54     131    1613 commands.js`
* `uniq`: takes content of our file and removes adjacent duplicate lines
  * There weren't any adjacent duplicate lines in our file so the output was simply the contents of the file.
  * To test the function, I later added some extra blank lines and duplicate comments and they were removed as expected when running `uniq`.
.2) Using the pipe (|) connect at least two commands and run it on commands.js. Explain what the output was and why the specific data was outputted.

* `sort commands.js | uniq | wc`
* The output of the above string was `41 101 1317`
* My piped command begins by sorting commands.js using `sort`. As explained above this returns the contents sorted alphabetically, starting with white space and the most indented lines and ending with lines without indents. Then, this is passed over to `uniq` via `|` to collapse all duplicate files. On the original version of commands.js, this would have a minimal effect, but since all lines are sorted, the amount of adjacent duplicate files is increased. Finally, we take our `uniq` output and pipe it to wc for a line, word and byte count. The resulting output is the total count of unique and sorted lines, remaining words and the size of the output in bytes. Also worth noting is the fact that our last `wc` does not return the name of our file. This is because `wc` was only passed the output of `uniq` which is a large string of words, not a discrete file.

.6) Given a string, reverse the order of characters in each word within a sentence while maintaining the original word order and whitespace and return the string. To improve your problem-solving experience, use the suggested functions to solve the problem.
``` Javascript
function reverseString(inputString) {
    let splitString = inputString.split(' ');
    let reversedInput = [];

    splitString.forEach(element => {
        let word = element.split('');
        let reverseWord = word.reverse().join('');  
        reversedInput.push(reverseWord);
    })


    return reversedInput.join(' ');
 }

 reverseString("My Name Is Carlos and I study at Bloc")
```