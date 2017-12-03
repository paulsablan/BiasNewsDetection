$(function()
    {
        $('#openfile').on('click',function ()
        {
            var filePath = $(this).val();
            $('#test').val() = filePath;
        });


        // Get the modal
        $(".btn-detect").click(function(){
          $(".modal").modal('show');
        });


});

