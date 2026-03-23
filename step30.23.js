/*Step 23
For your timeAgo function, you will want to calculate the difference between the current time and the time of the last activity on a topic. This will allow you to display how much time has passed since a topic had any activity.

Complete the timeAgo function that meets the following requirements:

If the amount of minutes that have passed is less than 60, return the string "xm ago". x will represent the minutes.
If the amount of hours that have passed is less than 24, return the string "xh ago". x will represent the hours.
Otherwise, return the string "xd ago". x will represent the days.
Here are some equations that will help you calculate the time difference:

minutes = Math.floor((currentTime - lastPost) / 60000);
hours = Math.floor((currentTime - lastPost) / 3600000);
days = Math.floor((currentTime - lastPost) / 86400000);*/



const timeAgo = (time) => {
  const currentTime = new Date();
  const lastPost = new Date(time);

  const timeDifference = currentTime - lastPost;
  const msPerMinute = 1000 * 60;

  const minutesAgo = Math.floor(timeDifference / msPerMinute);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  }

  if (hoursAgo < 24) {
    return `${hoursAgo}h ago`;
  }

  return `${daysAgo}d ago`;
};