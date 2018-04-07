$(document).ready(function(){
    $("#showHideContent").click(function () {
        if ($("#navmenu").is(":hidden")) {
            $("#navmenu").show("fast");
        } else {
            $("#navmenu").hide("fast");
        }
        return false;
    });
});