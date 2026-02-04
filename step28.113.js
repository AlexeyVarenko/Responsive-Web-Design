/*Step 113
Next, add an if statement that checks if every rule in the checkpointDetectionRules array is true.

Make sure to use the every method for this.*/


 checkpoints.forEach((checkpoint, index, checkpoints) => {
    const checkpointDetectionRules = [
      player.position.x >= checkpoint.position.x,
      player.position.y >= checkpoint.position.y,
      player.position.y + player.height <=
        checkpoint.position.y + checkpoint.height,
      isCheckpointCollisionDetectionActive,
      player.position.x - player.width <=
        checkpoint.position.x - checkpoint.width + player.width * 0.9,
      index === 0 || checkpoints[index - 1].claimed === true,
    ];
      if(checkpointDetectionRules.every((rule)=>rule)){
        
      }
  });