/*Step 28
You still aren't matching free money yet, because you need to match the end of the string as well.

Like the ^ anchor, you can use the $ anchor to match the end of the string.

Update your regular expression to match either the end of the string or a space, like you did for the beginning of the string.*/



const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;