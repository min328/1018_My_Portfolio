$(function(){

    /* index.html 스크롤 애니메이션 */
    let slideNum = 1;
    let distance = 0;

    $("main#indexMain").on("wheel", function(event) {
        let wheel = event.originalEvent.wheelDelta;
        if(wheel > 0 && slideNum > 0 && distance > 0) {
            /* 휠이 위로 움직였을 때 */
            $("div#temp").css("background-color", "red");
            slideNum--;
            distance -= 720;
            console.log("슬라이드 : " + slideNum);
            console.log("거리값 : " + distance);
            $("html").animate({"scrollTop" : distance}, 500);
        } else if (wheel < 0 && distance < 1440) {
            /* 휠이 아래로 움직였을 때 */
            $("div#temp").css("background-color", "blue");
            slideNum++;
            distance += 720;
            console.log("슬라이드 : " + slideNum);
            console.log("거리값 : " + distance);
            $("html").animate({"scrollTop" : distance}, 500);
        }
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