/*Step 26
Your regex should match whole words, not partial words. That is, you do not want to match hands-free money management.

To do this, start by checking for spaces before and after your pattern. You can do this by using the meta character \s, which will match spaces, tabs, and line breaks.*/



const freeRegex = /\sfr[e3][e3] m[o0]n[e3]y\s/i;