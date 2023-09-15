/*Step 57
To align the input boxes with each other, create a new ruleset that targets all input and label elements within an .info element and set the display property to inline-block.

Also, align the label element's text to the right./


.info input {
  width: 50%;
  text-align: left;
}

.info label {
  width: 10%;
  min-width: 55px;
}

.info > label, .info > input{
  display: inline-block;
  text-align: right;
}