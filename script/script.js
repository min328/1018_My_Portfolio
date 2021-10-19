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
            휠 반응에 따라 움직이는 거리는 720px로 고정한다.
            div.mainContent height == 720px 
        */
        let distance = 720;
        if($("html").is(":animated")) { return false; }

        let wheel = event.originalEvent.wheelDeltaY;
        /* wheelDeltaY가 음수이면 아래로, 양수이면 위로 휠이 이동 */
        if(wheel < 0) {
            /* 휠이 아래로 움직였을 때 */
            $("div#temp").css("background-color", "blue");
            $("div#temp span").text("down");

            /* slideIdx = 0, ScrollTop = 0 */
            /* slideIdx = 1, ScrollTop = 720 */
            /* slideIdx = 2, ScrollTop = 1440 */

            /* slideIdx = 0, slideIdx++, slideIdx(1)*distance(720) ==> slideIdx = 1의 scrollTop으로 이동 ==> 즉 2번째 메인 슬라이드로 이동 */
            /* slideIdx = 1, slideIdx++, slideIdx(2)*distance(720) ==> slideIdx = 2의 scrollTop으로 이동 ==> 즉 2번째 메인 슬라이드로 이동 */
            /* slideIdx = lastIdx(3)이 되면 아래로 움직이지 않음 */
            if(slideIdx == lastIdx) { return false; }


            slideIdx++;
            distance = distance * slideIdx;
            $("html").animate({"scrollTop" : distance}, 500);
            
            // console.log("slideIdx = " + slideIdx + ", ScrollTop = " + distance);
            
        } else if (wheel > 0) {
            /* 휠이 위로 움직였을 때 */
            $("div#temp").css("background-color", "red");
            $("div#temp span").text("up");
            
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
            
            // console.log("slideIdx = " + slideIdx + ", ScrollTop = " + distance);
        }

        /* slide 번호 변경 css */
        $("div#imageIndicator li").css("font-weight", "normal");
        $("div#imageIndicator li").eq(slideIdx).css("font-weight", "bold");
    });

    /* product.html 상품페이지에서 tab 버튼 클릭 시 페이지 탑 이동 */
    // $(window).scroll(function(){
    //     $("div#test").text($(window).scrollTop());
    // });
    $("main#productMain div.tab div.tab1").click(function(){
        $("html").animate(
            { "scrollTop" : "37"}
            , 500
        );
    });

    $("main#productMain div.tab div.tab2").click(function(){
        $("html").animate(
            { "scrollTop" : "2035"}
            , 500
        );
    });

    $("main#productMain div.tab div.tab3").click(function(){
        $("html").animate(
            { "scrollTop" : "2700"}
            , 500
        );
    });

    $("main#productMain div.tab div.tab4").click(function(){
        $("html").animate(
            { "scrollTop" : "2985"}
            , 500
        );
    });

    /* product.html qnaWriteBtn클릭시 문의사항 작성페이지로 이동 */
    $("main#productMain button#qnaWriteBtn").click(function(){
        window.location.href = "product_qna.html";
    });
});