/*Step 111
Add another boolean expression that checks if the player's position.y is greater than or equal to the checkpoint's position.y.

Below that statement, add another boolean expression that checks if the player's position.y plus the player's height is less than or equal to the checkpoint's position.y plus the checkpoint's height.

Below that statement, add the isCheckpointCollisionDetectionActive variable.*/



checkpoints.forEach((checkpoint, index, checkpoints) => {
    const checkpointDetectionRules =[
      player.position.x >= checkpoint.position.x,
      player.position.y >= checkpoint.position.y,
      player.position.y +player.height<=checkpoint.position.y+checkpoint.height,
      isCheckpointCollisionDetectionActive,

    ]
  });