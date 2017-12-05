$(function()
    {
        $('#openfile').change(function(e){
            var fileName = e.target.files[0].name;
            $.getJSON('/', {
              excelfile: fileName
            });
            alert('The file "' + fileName +  '" has been selected.');
        });
        // Get the modal
        $(".btn-detect").click(function(){
          $(".modal").modal('show');
          
          var heading = $("#newsheading").val();
          var body = $("#newsbody").val();
          var modalvalue = "<h3>" + heading + "</3>" + "<p>" + body + "</p>";
          $(".modal").html(modalvalue);
          
        });


});

