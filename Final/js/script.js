//home-page
$(function(){
    $(".navbar-toggler").blur(function(event){
        var screenWidth = window.innerWidth;
        if (screenWidth<=768) {
            $("#navbarNav").collapse('hide');
        }
    });
});
$(function(){
    $("#join").click(function(event){
        window.location.href = "./join.html";
    })
});
//join-page 
$("#success-page .backtohome").click(function(event){
    window.location.href = "./home.html";
})
//successjoin-page
$("#join-page .backtohome").click(function(event){
    window.location.href = "./home.html";
})

//contact-page
$(function(){
    function footerPosition(){
        $("footer").removeClass("fixed-bottom");
        var contentHeight = document.body.scrollHeight,
            winHeight = window.innerHeight;
        if(!(contentHeight > winHeight)){
            $("footer").addClass("fixed-bottom");
        }
    }
    footerPosition();
    $(window).resize(footerPosition);
});
$(function(){
    $("#join2").click(function(event){
        window.location.href = "./join.html";
    })
});
$(function(){
    $("#start").click(function(event){
        window.location.href = "./food.html";
    })
});