/*Step 54
localStorage offers methods for saving, retrieving, and deleting items. The items you save can be of any JavaScript data type.

For instance, the setItem() method is used to save an item, and the getItem() method retrieves the item. To delete a specific item, you can utilize the removeItem() method, or if you want to delete all items in the storage, you can use clear().

Here's how you can save an item:

Example Code
localStorage.setItem("key", value); // value could be string, number, or any other data type
A myTaskArr array has been provided for you. Use the setItem() method to save it with a key of data.

After that, open your browser console and go to the Applications tab, select Local Storage, and the freeCodeCamp domain you see.*/


localStorage.setItem("data", myTaskArr);