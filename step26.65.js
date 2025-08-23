/*Step 65
Object values do not have to be primitive types, like a string or a number. They can also be functions.

Give your infixToFunction object a + property. That property should be a function that takes an x and y parameter and implicitly returns the sum of those two parameters.

Because + is not alphanumeric, you'll need to wrap it in quotes for your property.*/



const infixToFunction = {
"+":(x,y)=> x+y,
}