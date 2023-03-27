
        setTimeout(function () {
            $('#preloader').fadeOut();
            $('.preloader_img').delay(10).fadeOut('slow');
        }, 1000);
    
        $("#preloader").animate({
            'opacity': '0'
        }, 6000, function () {
            setTimeout(function () {
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300000);
        });

        var loader = document.getElementById("preloader");

        window.addEventListener("load", function () {
            loader.style.display = "none";
            10000;
        });