/*Step 173
Looking at your "kill monster" object, "button functions" currently has three goTown variables. Replace the third one with easterEgg - this is how a player will access the hidden feature of the game. Do not change the "button text".

With this, your RPG game is complete! You can now play around - can you defeat the dragon?*/a


{
    name: "kill monster",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [goTown, goTown, easterEgg],
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  },