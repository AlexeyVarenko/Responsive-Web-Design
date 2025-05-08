/*Step 27
If you try entering the message free money, you'll notice it doesn't match your expression! This is because \s doesn't match the beginning or end of the text.

To match the beginning of the text, you can use the ^ anchor. This asserts that your pattern match starts at the beginning of the full string.

Replace your first \s character with a non-capturing group that matches \s or ^.*/



const freeRegex = /(?:\s|^)fr[e3][e3] m[o0]n[e3]y\s/i;