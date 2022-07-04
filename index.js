let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";

for (items of buttons) {
  //   console.log(items);
  items.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log("hello", buttonText);

    // if (buttonText == "X") {
    //   buttonText = "*";
    //   screenValue += buttonText;
    //   screen.value = screenValue;
    //   console.log(" hy", screen.Value);}
    if (buttonText == "c") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
