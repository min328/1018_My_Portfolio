$(function(){

    $("div#temporaryNotice button").click(function(){
        $("div#temporaryNotice").hide();
    });

    $("button#loginBtn").click(function(){
        let userId = $("input#userId").val();
        let userPass = $("input#userPass").val();

        if(userId == "1234" && userPass == "1234") {
            window.location.href = "/mypage/mypage.html";
        } else {
            alert("아이디와 비밀번호를 확인해주세요.");
        }
    });

    $("button#joinBtn").click(function(){
        window.location.href = "/join/join.html";
    });
});