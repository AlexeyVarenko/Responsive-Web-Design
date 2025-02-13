/*Step 62
You also want a deleted task to be removed from local storage. For this, you don't need the removeItem() or clear() methods. Since you already use splice() to remove the deleted task from taskData, all you need to do now is save taskData to local storage again.

Use setItem() to save the taskData array again. Pass in data as the key and ensure that taskData is stringified before saving.*/



localStorage.setItem("data", JSON.stringify(taskData));