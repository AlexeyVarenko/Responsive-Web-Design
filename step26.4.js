/*Step 4
Set the className of the label element to "label", and set the textContent to the name parameter.*/



window.onload = () => {
  const container = document.getElementById("container");
  const createLabel = (name) => {
    const label = document.createElement("div");
    label.className="label";
    label.textContent=name;

  }
}