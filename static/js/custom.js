$(function()
    {
        $('#openfile').on('click',function ()
        {
            var filePath = $(this).val();
            $('#test').val() = filePath;
        });


        $('#openfile').change(function(e){
            var fileName = e.target.files[0].name;
            alert('The file "' + fileName +  '" has been selected.');
            document.getElementById('#testnew').value = filename
        });
        // Get the modal
        $(".btn-detect").click(function(){
          $(".modal").modal('show');
        });


});

