$(function(){

    /* 챗봇 버튼 클릭*/
    $("div#chatbotBtn").click(function(){
        $(this).children("div#chatAlarm").hide();
        $(this).css({
            "width" : "0"
            ,"height" : "0"
            ,"transition" : "0.5s"
        });
        $("div#chatMessage").delay(500).slideDown();
    });
    
    /* 챗본 close버튼 클릭 */
    $("div#chatMessage button#msgClose").click(function(){
        $("div#chatMessage").slideUp();
        $("div#chatbotBtn").css({
            "width" : "60px"
            ,"height" : "60px"
            ,"transition" : "0.5s"
        });
        $("div#chatbotBtn").children("div#chatAlarm").show();
    });
    
    /* 헤더 lnb 메뉴 - 검색 아이콘 클릭 */

    $("nav#headerLnb ul li:last-child").click(function(ignore){
        ignore.preventDefault(); // 앵커 기능 막기

    });
});