$(function(){

    window.addEventListener("wheel", function(event){
        event.preventDefault();
    }, {passive : false});

    let slideIdx = 0;
    let startIdx = 0;
    let lastIdx = $("main#indexMain div.mainContent").length; /* lastIdx = 2 */
    
    /* 페이지 refresh 했을 때, 무조건 top 0로 */
    $("html").animate({"scrollTop" : "0"}, 10);
    
    /* 휠 작동시 이벤트 */
    $(window).on("wheel", function(event) {
        /* 
            휠 반응에 따라 움직이는 거리는 721px로 고정한다.
            div.mainContent height == 721px 
        */
        let distance = 721;
        if($("html").is(":animated")) { return false; }

        let wheel = event.originalEvent.wheelDeltaY;
        /* wheelDeltaY가 음수이면 아래로, 양수이면 위로 휠이 이동 */
        if(wheel < 0) {
            /* 휠이 아래로 움직였을 때 */

            /* slideIdx = 0, ScrollTop = 0 */
            /* slideIdx = 1, ScrollTop = 720 */
            /* slideIdx = 2, ScrollTop = 1440 */

            /* slideIdx = 0, slideIdx++, slideIdx(1)*distance(720) ==> slideIdx = 1의 scrollTop으로 이동 ==> 즉 2번째 메인 슬라이드로 이동 */
            /* slideIdx = 1, slideIdx++, slideIdx(2)*distance(720) ==> slideIdx = 2의 scrollTop으로 이동 ==> 즉 2번째 메인 슬라이드로 이동 */
            /* slideIdx = lastIdx(5)이 되면 아래로 움직이지 않음 */
            if(slideIdx == lastIdx) { 
                return false;
            }

            slideIdx++;
            distance = distance * slideIdx;
            $("html").animate({"scrollTop" : distance}, 500);
            // console.log("slideIdx = " + slideIdx + ", ScrollTop = " + distance);
            
        } else if (wheel > 0) {
            /* 휠이 위로 움직였을 때 */

            /* slideIdx = 0, ScrollTop = 0 */
            /* slideIdx = 1, ScrollTop = 720 */
            /* slideIdx = 2, ScrollTop = 1440 */

            /* slideIdx = 2, slideIdx--, slideIdx(1)*distance(720) ==> slideIdx = 1의 scrollTop으로 이동 ==> 즉 2번째 메인 슬라이드로 이동 */
            /* slideIdx = 1, slideIdx--, slideIdx(0)*distance(720) ==> slideIdx = 0의 scrollTop으로 이동 ==> 즉 1번째 메인 슬라이드로 이동 */
            /* slideIdx = startIdx(0) 이 되면 아래로 움직이지 않음 */
            if(slideIdx == startIdx) { return false; }

            slideIdx--;
            distance = distance * slideIdx;
            $("html").animate({"scrollTop" : distance}, 500);
        }

        /* slide 번호 변경 css */
        $("div#imageIndicator li").css("font-weight", "normal");
        $("div#imageIndicator li").eq(slideIdx).css("font-weight", "bold");

        /* index.html 스크롤 슬라이드 변화에 따른 header css 변경 */
        if(slideIdx == 0) {
            $("div#headerLogo a").css({"color" : "#fff" , "transition" : "0.5s"});
            $("nav#headerGnb a").css({"color" : "#fff" , "transition" : "0.5s"});
            $("nav#headerLnb i").css({"color" : "#333" , "transition" : "0.5s"});
            $("div#imageIndicator li").css({"color" : "#333" , "transition" : "0.5s"});
            
        } else if (slideIdx%2 == 1) {
            $("div#headerLogo a").css({"color" : "#000" , "transition" : "0.5s"});
            $("nav#headerGnb a").css({"color" : "#000" , "transition" : "0.5s"});
            $("nav#headerLnb i").css({"color" : "#fff" , "transition" : "0.5s"});
            $("div#imageIndicator li").eq(slideIdx).css({"color" : "#fff" , "transition" : "0.5s"});

        } else if (slideIdx%2 == 0) {
            $("div#headerLogo a").css({"color" : "#fff" , "transition" : "0.5s"});
            $("nav#headerGnb a").css({"color" : "#fff" , "transition" : "0.5s"});
            $("nav#headerLnb i").css({"color" : "#333" , "transition" : "0.5s"});
            $("div#imageIndicator li").css({"color" : "#333" , "transition" : "0.5s"});
        }
    });

    /* index.html 슬라이드 indicator 클릭시 해당 슬라이트 scrollTop으로 이동 */
    $("div#imageIndicator ul li").click(function(){
        let idx = $(this).text();
        idx = idx.charAt(1);
        idx = Number(idx) -1;
        let move = 721;
        move = move * idx;

        /* slide 번호 변경 css */
        $("div#imageIndicator li").css("font-weight", "normal");
        $("div#imageIndicator li").eq(idx).css("font-weight", "bold");

        /* index.html 스크롤 슬라이드 변화에 따른 header css 변경 */
        if(idx == 0) {
            $("div#headerLogo a").css({"color" : "#fff" , "transition" : "0.5s"});
            $("nav#headerGnb a").css({"color" : "#fff" , "transition" : "0.5s"});
            $("nav#headerLnb i").css({"color" : "#333" , "transition" : "0.5s"});
            $("div#imageIndicator li").css({"color" : "#333" , "transition" : "0.5s"});
            $("html").animate({"scrollTop" : move}, 500);

        } else if (idx%2 == 1) {
            $("div#headerLogo a").css({"color" : "#000" , "transition" : "0.5s"});
            $("nav#headerGnb a").css({"color" : "#000" , "transition" : "0.5s"});
            $("nav#headerLnb i").css({"color" : "#fff" , "transition" : "0.5s"});
            $("div#imageIndicator li").eq(idx).css({"color" : "#fff" , "transition" : "0.5s"});
            $("html").animate({"scrollTop" : move}, 500);

        } else if (idx%2 == 0) {
            $("div#headerLogo a").css({"color" : "#fff" , "transition" : "0.5s"});
            $("nav#headerGnb a").css({"color" : "#fff" , "transition" : "0.5s"});
            $("nav#headerLnb i").css({"color" : "#333" , "transition" : "0.5s"});
            $("div#imageIndicator li").css({"color" : "#333" , "transition" : "0.5s"});
            $("html").animate({"scrollTop" : move}, 500);
        } 

        slideIdx = idx; /* slideIdx(스크롤 이벤트랑, 슬라이드 인디케이터 이벤트 함께 쓰는 전역변수) 설정해줘야지 스크롤 이벤트시 충돌 없음 */
    });

    /* 챗봇 close 버튼 */
    $("div#chatbotBtn").click(function(){
        $(this).children("div#chatAlarm").hide();
        $(this).css({
            "width" : "0"
            ,"height" : "0"
            ,"transition" : "0.5s"
        });
        $("div#chatMessage").delay(500).slideDown();
    });
    
    $("div#chatMessage button#msgClose").click(function(){
        $("div#chatMessage").slideUp();
        $("div#chatbotBtn").css({
            "width" : "60px"
            ,"height" : "60px"
            ,"transition" : "0.5s"
        });
        $("div#chatbotBtn").children("div#chatAlarm").show();
    });
    
});