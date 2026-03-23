/*Step 24
To display the time since the last post, call the timeAgo function and pass in the bumped_at variable for the argument. Place this function call inside the last td element.

Once you make those changes, scroll across the table to see the new values displayed in the Activity column.*/



return `
    <tr>
      <td>
        <p class="post-title">${title}</p>
      </td>
      <td></td>
      <td>${posts_count - 1}</td>
      <td>${views}</td>
      <td>
      ${timeAgo(bumped_at)}
      </td>
    </tr>`;
  }).join("");
  };