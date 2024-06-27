const inputval = document.querySelector("#filter-water");
const btn = document.querySelector("#calc");
const outputText = document.querySelector("#output");
const outval = document.querySelector("#outval");

/*
document.onload(() => {
  outval.innerHTML = "";
  outputText.innerHTML = "";
});
*/

btn.addEventListener("click", () => {
  outval.innerHTML = "";
  outputText.innerHTML = "";
  console.log(inputval.value);
  if (inputval.value === undefined) {
    outputText.innerHTML = "Please enter a numeric value";
  } else if (inputval.value <= 0) {
    outputText.innerHTML = "Please enter a non zero value";
  } else {
    console.log(inputval.value * 3);
    outputText.innerHTML = `output:Liter ${inputval.value * 3}`;
  }

  //document.getElementById("#output").  .style.display = "inline-block";
});

//btn.click();
