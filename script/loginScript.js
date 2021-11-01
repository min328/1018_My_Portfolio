$(function(){

    $("div#temporaryNotice button").click(function(){
        $("div#temporaryNotice").hide();
    });

    /* 로그인 버튼 클릭 */
    $("button#loginBtn").click(function(){
        let userId = $("input#userId").val();
        let userPass = $("input#userPass").val();

        if(userId == "1234" && userPass == "1234") {
            window.location.href = "/mypage/mypage.html";
        } else {
            alert("아이디와 비밀번호를 확인해주세요.");
        }
    });

    /* 회원가입 버튼 클릭 */
    $("button#joinBtn").click(function(){
        window.location.href = "/join/join.html";
    });

    /* 찾기 div, 취소 버튼 */
    $("div.hideBtn").click(function(){
        $(this).parent("div.findArea").fadeOut(500);
    });

    /* 인증방식 라디오 버튼 */
    $("div#findId input[type=radio]").click(function(){
        let how_to = $(this).attr("id");
        let byEmail = "<input type=\"text\">";
        let byPhone = "<input type=\"text\" class=\"phone\"> - <input type=\"text\" class=\"phone\"> - <input type=\"text\" class=\"phone\">";

        $("div#findId input[type=radio").prop("checked", false);

        $(this).prop("checked", true);
        if(how_to == "IdByEmail") {
            $("div#IdBy div.col1").text("이메일로 찾기");
            $("div#IdBy div.col2").html(byEmail);
        } else if (how_to == "IdByPhone") {
            $("div#IdBy div.col1").text("휴대폰번호로 찾기");
            $("div#IdBy div.col2").html(byPhone);
        }
    });

    /* 아이디 찾기, 비밀번호 찾기, 주문확인 li 클릭시 레이어div show */
    $("div#searchArea ul li a").click(function(){
        let whatToFind = $(this).attr("data-link");
        whatToFind = "div#" + whatToFind
        $(whatToFind).fadeIn(500);
    });
});