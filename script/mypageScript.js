$(function(){
    $("main#myOrderMain div#tabArea button#showOrdersBtn").click(function(){
        $("main#myOrderMain div#tabArea button").removeClass("tab_selected");
        $(this).addClass("tab_selected");
        $("main#myOrderMain div#orderListOptions").show();
        $("main#myOrderMain div#otherListOptions").hide();
    });
    $("main#myOrderMain div#tabArea button#showOthersBtn").click(function(){
        $("main#myOrderMain div#tabArea button").removeClass("tab_selected");
        $(this).addClass("tab_selected");
        $("main#myOrderMain div#orderListOptions").hide();
        $("main#myOrderMain div#otherListOptions").show();
        $("main#myOrderMain div#otherListOptions").css("display", "flex");
    });
});