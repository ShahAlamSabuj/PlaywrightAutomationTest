$(".searchform").on("submit", function() {
    $("#success-subscribe").removeClass('hide');

    setTimeout(function(){
        $("#success-subscribe").addClass('hide');
        document.getElementById("susbscribe_email").value = '';
     }, 1500);
    return false;
});