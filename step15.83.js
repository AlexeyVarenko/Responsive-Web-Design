/*Step 83
Since you have moved the comparison into the while condition, you can remove your entire if statement.*/


while (done !== count) {
    done++;
    rows.push(padRow(done, count));
    
  }