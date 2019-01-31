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
