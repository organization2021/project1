document.getElementById("age-verification").onclick = function() {
    myFunction();
}
function myFunction() {
  var checkBox = document.getElementById("age-verification");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}