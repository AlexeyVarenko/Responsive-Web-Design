/*Step 32
Now you need to size these elements down. Give your span[class~="sr-only"] selector a width and height property set to 1px.*/


span[class~="sr-only"] {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
  }