/*Step 49
Next, you will construct the userAvatarUrl.

Start by creating a constant called userAvatarUrl. Then use a ternary operator to check if avatar starts with "/user_avatar/".

If so, use the concat method to concatenate avatar to avatarUrl. Otherwise return avatar.

This will ensure the avatar URL is correctly formed whether it's a relative or absolute URL.*/



const userAvatarUrl = avatar.startsWith("/user_avatar/")
        ? avatarUrl.concat(avatar)
        : avatar;