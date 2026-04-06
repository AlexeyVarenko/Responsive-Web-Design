/*Step 46
The next step is to find the correct user in the users array.

Start by creating a constant called user and assign it users.find(). The find method should have a callback function with a parameter of user.

Inside the callback function of the find method, implicitly return the result of checking if user.id is strictly equal to poster.user_id.*/


const avatars = (posters, users) => {
  return posters.map((poster) => {
    const user=users.find(user=>user.id===poster.user_id);
  });
};