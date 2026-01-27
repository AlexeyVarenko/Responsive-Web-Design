/*Step 101
The next step is to create a list of new checkpoint instances using the CheckPoint class.

Start by creating a new const variable called checkpoints and assign it checkpointPositions.map().

For the map callback function, pass in checkpoint for the parameter and implicitly return the creation of a new CheckPoint instance with the checkpoint.x, checkpoint.y and checkpoint.z values passed in as arguments.*/


const checkpoints=checkpointPositions.map((checkpoint)=>new CheckPoint(checkpoint.x, checkpoint.y, checkpoint.z));