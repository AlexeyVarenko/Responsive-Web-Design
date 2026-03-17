/*Step 20
Keep the second td element empty because you will add content to it later on.

In the third td element, add the following embedded expression: ${posts_count - 1}.

This will display the number of replies to the topic.*/


return `
    <tr>
      <td>
        <p class="post-title">${title}</p>
      </td>
      <td></td>
      <td>
      ${posts_count - 1}
      </td>
      <td></td>
      <td></td>
    </tr>`;