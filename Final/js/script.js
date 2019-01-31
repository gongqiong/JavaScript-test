/**home-page */
//hide the toggler
$(function(){
    $(".navbar-toggler").blur(function(event){
        var screenWidth = window.innerWidth;
        if (screenWidth<=768) {
            $("#navbarNav").collapse('hide');
        }
    });
});
//link to join page
$(function(){
    $("#join,#join2").click(function(event){
        window.location.href = "./join.html";
    })
});
//link to food page
$(function(){
    $("#start").click(function(event){
        window.location.href = "./food.html";
    })
});
/**join-page */
$("#success-page .backtohome").click(function(event){
    window.location.href = "./home.html";
})
/**successjoin-page */
$("#join-page .backtohome").click(function(event){
    window.location.href = "./home.html";
})


/**food page */

/**events page */

/**contact-page */

/******footer******/
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
