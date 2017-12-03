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
                    var filename = document.getElementById('openfile').files[0];
                    document.getElementById('#filepath').value = filename;
                     var fileReader = new FileReader();
                    fileReader.onload = function(fileLoadedEvent)
                    {
                        var textFromFileLoaded = fileLoadedEvent.target.result;
                        document.getElementById("file_content").value = textFromFileLoaded;
                    };

                    try{
                         fileReader.readAsText(fileToLoad, "UTF-8");
                    }
                    catch(err){
                        alert("Please choose some file...")
                    }

}
//modal

// Get the modal
$(".btn-detect").click(function(){
  $(".modal").modal('show');
});
