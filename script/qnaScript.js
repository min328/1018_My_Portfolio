$(function(){


    /* 문의글 목록 생성하기 */
    let qnaSet = [];
    /* 답변여부(0 - 미답변, 1 - 답변완료), 상품명, 문의제목, 작성자, 작성날짜(, [판매자답변내용, 답변날짜]) 순으로 */
    qnaSet[0] = [0, "상품명", "문의제목", "작성자이름", "2021-11-03", "answer yet"];
    qnaSet[1] = [1, "상품명2", "문의제목2", "작성자이름2", "2021-11-04", ["판매자답변내용", "2021-11-04"]];

    for(i=0; i<qnaSet.length; i++) {
        let hasAnswer = qnaSet[i][0];
        let productName = qnaSet[i][1];
        let q_title = qnaSet[i][2];
        let q_writer = qnaSet[i][3];
        let q_date = qnaSet[i][4];
        let answerContents = qnaSet[i][5];

        
    }
    /* 문의글에 이미지가 첨부되지 않은 경우 처리 */
    let imgBox = "div.row_content div.imgBox";
    let img = "div.row_content div.imgBox img";
    if($(img).attr("src") == "") {
        $(imgBox).html("none");
    }

    /* 내 Q&A만 보기 */
    $("div#seeMyQnaBtn").click(function(){
        if($(this).hasClass("off") == true) {
            /* on인 상태로 */
            $(this).css({"color":"#fff", "background-color":"#66DE93", "transition":"0.5s"});
            $(this).text("on");
            $(this).removeClass("off");
            $(this).addClass("on");
        } else {
            /* off인 상태로 */
            $(this).css({"color":"#000", "background-color":"#fff", "transition":"0.5s"});
            $(this).text("off");
            $(this).removeClass("on");
            $(this).addClass("off");
        }
    });

    /* 페이징 번호 클릭 */
    $("button.pageNum").click(function(){
        $("button.pageNum").removeClass("selected");
        $(this).addClass("selected");
    });


});