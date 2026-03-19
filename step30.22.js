/*Step 22
To display data in the Activity column, you need to use the bumped_at property of each topic, which is a timestamp in the ISO 8601 format. You need to process this data before you can show how much time has passed since a topic had any activity.

Create a new timeAgo function with a time parameter.

Inside your timeAgo function, create two variables named currentTime and lastPost and set them to new Date() and new Date(time) respectively.

lastPost will be the date of the last activity on a topic, and currentTime represents the current date and time.*/


const timeAgo=time=>{
  const currentTime = new Date();
  const lastPost= new Date(time);
}
