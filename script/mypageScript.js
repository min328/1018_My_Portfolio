$(function(){

    /* my page - order 탭버튼 구현 */
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

    /* my page - order, input date 처리 */
        // default : date1, date2 모두 현재 날짜 기준으로 설정
        let now = new Date().toISOString().substr(0,10);
        $("div.dateOptions input").val(now);

});