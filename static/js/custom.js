$(function()
    {
        $('#openfile').change(function(e){
            var fileName = e.target.files[0].name;
            
            $.getJSON('/', {
              excelfile: fileName
            });
            
            e.preventDefault();

            $.ajax ({
              url: "/getdata/" + fileName,
              success: function(data) {
                console.log(data);
                document.getElementById('newshead').value = data.headline;
                document.getElementById('newsbody').value = data.body;
                
              }
            });

           /* $SCRIPT_ROOT = {{ request.script_root|tojson|safe }};
                  (function(){
                      $.getJSON(
                          $SCRIPT_ROOT+"/", // Your AJAX route here
                          function(data) {
                             data.result;
                             data.headline;
                             data.body;
                          }
                      );
                      setTimeout(arguments.callee, 10000);
            })();*/
        });
        // Get the modal
        $("#btndetect").click(function(){
          var result = "";
          var heading = document.getElementById("newshead").value;
          var body = document.getElementById("newsbody").value;
          var modalvalue = "<h3>" + heading + "</h3>" + "<br>" + body ;
          
          $.getJSON('/', {
              newsheadline: heading,
              newsbody: body
          });
         
          $.ajax ({
              url: "/gettext/" + heading + "/" + body,
              success: function(data) {
                console.log(data.result);
                console.log(data.headline);
                console.log(data.body);
                document.getElementById('modalbody').innerHTML = "The result is <strong>" + data.result + "</strong> <h3>" + data.headline + "</h3>" + "<br>" + data.body ;
                
              }
            });
            
        });


});
