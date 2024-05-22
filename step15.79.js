/*Step 79
The equality operator can lead to some strange behavior in JavaScript. For example, "0" == 0 is true, even though one is a string and one is a number.

The strict equality operator === is used to check if two values are equal and share the same type. As a general rule, this is the equality operator you should always use. With the strict equality operator, "0" === 0 becomes false, because while they might have the same value of zero, they are not of the same type.

Update your done == count condition to use the strict equality operator.*/


if (done === count) {

}