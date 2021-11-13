$(function(){

    /* 회원구분 radio 선택 */
    $("input.userType").click(function(){
        $("input.userType").prop("checked", false);
        $(this).prop("checked", true);
    });

    /* 성별구분 radio 선택 */
    $("input.genderType").click(function(){
        $("input.genderType").prop("checked", false);
        $(this).prop("checked", true);
    });

    /* 음/양력 radio 선택 */
    $("input.birthType").click(function(){
        $("input.birthType").prop("checked", false);
        $(this).prop("checked", true);
    });

    /* 이메일 선택 */
    $("select#emailAddress").change(function(){
        let selectedEmail = $(this).val();
        
        if(selectedEmail == "self") {
            $("input#email2").val("");
            $("input#email2").prop("readonly", false);
        } else {
            $("input#email2").prop("readonly", true);
            $("input#email2").val(selectedEmail);
        }
    });

    /* 회원약관 전체동의 선택 */
    $("input#agreeAll").click(function(){
        /* 모두 동의를 클릭 한 경우 */
        if($(this).prop("checked") == true) {
            $("div#agreementArea input[type=checkbox]").prop("checked", true);
        } else if($(this).prop("checked") == false) {
            /* 모두 동의를 해제한 경우 */
            $("div#agreementArea input[type=checkbox]").prop("checked", false);
        }
    });

    /* 주소 검색 레이어 팝업 열기 */
    $("button#searchAddressBtn").click(function(){
        $("div#searchAddress").show();
    });
    
    /* 주소 검색 레이어 팝업 닫기 */
    $("div#searchAddress button#closeBtn").click(function(){
        $("div#searchAddress").hide();
    });

    /* 주소 검색 레이어 탭 버튼 */
    $("div#addressTab > div").click(function(){
        $("div#addressTab > div").removeClass("selected");
        $(this).addClass("selected");
    });

    $("button#joinCompleteBtn").click(function(){
        window.location.href = "join_completed.html";
    });
});