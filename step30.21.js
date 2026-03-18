/*Step 21
In the fourth td element, add an embedded expression that contains the views variable. This will display the number of views the post has.*/


 return `
    <tr>
      <td>
        <p class="post-title">${title}</p>
      </td>
      <td></td>
      <td>${posts_count - 1}</td>
      <td>
      ${views}
      </td>
      <td></td>
    </tr>`;
  }).join("");
};