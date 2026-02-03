/*Step 112
You will need to add two more checkpoint detection rules to the checkpointDetectionRules array.

The first rule should check if the player's x position minus the player's width is less than or equal to the checkpoint's x position minus the checkpoint's width plus the player's width multiplied by 0.9. This will ensure that the player is close enough to the checkpoint to claim it.

The second rule should check if index is strictly equal to 0 or if the previous checkpoint(checkpoints[index - 1].claimed) is true. This will ensure that the player can only claim the first checkpoint or a checkpoint that has already been claimed.*/

player.position.x-player.width<=checkpoint.position.x-checkpoint.width+player.width*0.9,
      index === 0||checkpoints[index - 1].claimed===true,