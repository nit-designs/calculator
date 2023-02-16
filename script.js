function clicking(e)
{   
   // button value 
   const val = e.innerText;
   const parent = document.querySelector("#display");

   if (val === "=") {
       // evaluate expression and set result as input field value
       const result = eval(parent.value);
       parent.value = result !== undefined ? result : '';
       
   } else if (val === "C") {
    // clear the input field
    parent.value = '';
    } else {
       // append the button value to input field
       parent.value += val; 
   }
}
// add event listener for keydown event
window.addEventListener("keydown", function(event) {
    parent = document.querySelector("#display");
    let key = event.key;
    let operators  =["+", "-", "*", "/"];

    if (key >= "0" && key <= "9") {
        parent.value += key;
      } else if (operators.includes(key)) {
        parent.value += key;
      } else if (key === "Enter") {
        const res = eval(parent.value);
        parent.value = res !== undefined ? res: '';
      } else if (key === "Escape") {
        parent.value = "";
      }
      else if(key >= 'a' && key<='z')
      {
        alert("Only numbers are allowed")
      }
    
});