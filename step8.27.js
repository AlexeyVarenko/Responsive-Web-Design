/*Step 27
Within the tbody, add a tr with the class set to total. In that, add a th with the text Total Net Worth, and wrap Net Worth in a span with the class set to sr-only.

Then add three td elements, giving the third a class set to current, and giving each the following text: $-171, $136, $334.*/


<table>
<caption>Net Worth</caption>
<thead>
  <tr>
  <td></td>
  <th><span class="sr-only">2019</span></th>
  <th><span class="sr-only">2020</span></th>
  <th><span class="sr-only">2021</span></th>
  </tr>
</thead>
<tbody>
  <tr class="total">
    <th>Total <span class="sr-only">Net Worth</span></th>
  
  <td>$-171</td>
  <td>$136</td>
  <td class="current">$334</td>
  </tr>
</tbody>
</table>