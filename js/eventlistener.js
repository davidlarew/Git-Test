const inputEl = document.querySelector("input");
// Add your event listener here

inputEl.addEventListener("keyup", function(){
                  let inputValue = '';     
 inputValue = Document.getElementsByTagName("input")[0].value = "hello whirld";
  //prevent.default();
  console.log(inputValue)
                        });


function fixLength() {
  // Your code here

}

const inputEl = document.querySelector("input");
inputEl.addEventListener("keyup", fixLength);

function fixLength() {
if (inputEl.value.length > 12) {
    inputEl.value = inputEl.value.slice(0, 12);
  }
}