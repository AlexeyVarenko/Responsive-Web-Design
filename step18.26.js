/*Step 26
Now you need to call the renderSongs function and pass in userData?.songs in order to finally display the songs in the UI.

Optional chaining (?.) helps prevent errors when accessing nested properties that might be null or undefined. For example:

Example Code
const user = {
  name: "Quincy",
  address: {
    city: "San Francisco",
    state: "CA",
    country: "USA",
  },
};

// Accessing nested properties without optional chaining
const state = user.address.state; // CA

// Accessing a non-existent nested property with optional chaining
const zipCode = user.address?.zipCode; // Returns undefined instead of throwing an error
Call the renderSongs function with the songs property of userData. This will render the songs in the playlist.*/



renderSongs(userData?.songs)