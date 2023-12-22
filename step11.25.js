/*Step 25
That didn't work, because the variables you declared in .bb1 do not cascade to the .bb2 and .bb3 sibling elements. That's just how CSS works. Because of this, variables are often declared in the :root selector. This is the highest level selector in CSS; putting your variables there will make them usable everywhere. Add the :root selector to the top of your stylesheet, and move all your variable declarations there.*/


:root{
    --building-color1: #aa80ff;
    --building-color2: #66cc99;
    --building-color3: #cc6699;
  }
  * {
    border: 1px solid black;
    box-sizing: border-box;
  }
  
  body {
    height: 100vh;
    margin: 0;
    overflow: hidden;
  }
  
  .background-buildings {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
  }
  
  .bb1 {
    width: 10%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }