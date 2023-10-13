/*Step 47
Rather than having to constantly double-check you are not overwriting your earlier properties, you can use the !important keyword to ensure these properties are always applied, regardless of order or specificity.

Give each property in your span[class~="sr-only"] selector an !important keyword. Do not change any of the values.*/


span[class~="sr-only"] {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    width: 1px !important;
    position: absolute !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
    margin: -1px !important;
  }