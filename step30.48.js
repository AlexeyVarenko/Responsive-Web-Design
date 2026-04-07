/*Step 48
To customize the avatar's size, you can set it to a value of 30.

Start by creating a constant called avatar. Then assign it the result of using the replace method on user.avatar_template.

For the replace method, use /{size}/ for the first argument and the number 30 for the second argument.*/


if (user) {
      const avatar=user.avatar_template.replace(/{size}/,30)
    }