$(function(){
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
});