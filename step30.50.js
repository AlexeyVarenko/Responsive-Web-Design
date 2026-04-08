/*Step 50
Lastly, you will need to return the image for the user avatar.

Start by adding a return followed by a set of template literals. Inside the template literals, add an img element.

Inside the img tag, add a src attribute with the value of ${userAvatarUrl}. For the alt attribute, add a value of ${user.name}.*/



return `<img src="${userAvatarUrl}" alt="${user.name}">`;