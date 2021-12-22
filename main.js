

// create a variable for all the input value to be displayed in the output screen/input box
const outPutScreen = document.getElementById("output-screen");

//create a function that display the numbers when clicked
function display(num) {
 outPutScreen.value += num;
}


//when user clicks equal button, it will print the value , will alert invalid if pressed 2 symbols at the same time. eg */ 
function Calculate() {
 try {
  outPutScreen.value = eval(outPutScreen.value);
 }
 catch (err) {
  alert("invalid")
 }

}

// when user press clear, it will empty the input box
function Clear() {
 outPutScreen.value = "";
}

//when user press the del button it will remove/slice the value in the input box  by 1
function del() {
 outPutScreen.value = outPutScreen.value.slice(0, -1)
}