// SLIDER
function updateTextInput(val) {
          document.getElementById('resultVal').value=val; 
          if(val==1){
            $("<style type='text/css'>#result::-webkit-slider-thumb{background-color:rgba(255,0,0, 0.75)}</style>").appendTo($("head"));
          }
          if(val==-1){
            $("<style type='text/css'>#result::-webkit-slider-thumb{background-color:rgba(0,0,255, 0.75)}</style>").appendTo($("head"));
          }
          if(val==0){
            $("<style type='text/css'>#result::-webkit-slider-thumb{background-color:rgba(238,130,238, 0.75)}</style>").appendTo($("head"));
          }
}
//read excel data
function readFile(){ 
                    var filename = document.getElementById('#openfile').value;
                   

}
//modal

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
