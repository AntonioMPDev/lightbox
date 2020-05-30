    
        $(document).ready(function(){

        
            $(".img-selec").click(function(){

                var imgId = this.id;
                var imgIdSRC = $('#'+imgId).attr("src");
                $('#lightbox img').attr("src", imgIdSRC);
                $('#lightbox').css('display', 'block');
                
            });

            $("#close-img").click(function(){
                $('#lightbox').css('display', 'none');
            })
    
          });