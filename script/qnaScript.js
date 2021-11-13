$(function(){


    /* 문의글 목록 생성하기 */
    let qnaSet = [];
    /* 공개여부(0 - 비공개, 1 - 공개), 상품명, 문의제목, 작성자, 작성날짜, 문의내용, ( -1:답변 없음 or[판매자답변내용, 답변날짜]) 순으로 */
    qnaSet[0] = [1, "product_1", "문의제목1", "작성자이름", "2021-11-06", "문의내용", -1];
    qnaSet[1] = [1, "product_2", "문의제목2", "작성자이름2", "2021-11-06", "문의내용", -1];
    qnaSet[2] = [0, "product_3", "문의제목3", "작성자이름3", "2021-11-06", "문의내용", -1];
    qnaSet[3] = [1, "product_4", "문의제목4", "작성자이름4", "2021-11-05", "문의내용", ["판매자답변내용", "2021-11-04"]];
    qnaSet[4] = [1, "product_4", "문의제목5", "작성자이름5", "2021-11-04", "문의내용", ["판매자답변내용", "2021-11-04"]];
    qnaSet[5] = [0, "product_5", "문의제목6", "작성자이름6", "2021-11-03", "문의내용", ["판매자답변내용", "2021-11-04"]];
    qnaSet[6] = [0, "product_7", "문의제목7", "작성자이름7", "2021-11-03", "문의내용", ["판매자답변내용", "2021-11-04"]];
    qnaSet[7] = [1, "product_2", "문의제목8", "작성자이름8", "2021-11-02", "문의내용", ["판매자답변내용", "2021-11-04"]];
    qnaSet[8] = [1, "product_1", "문의제목9", "작성자이름9", "2021-11-01", "문의내용", ["판매자답변내용", "2021-11-04"]];
    qnaSet[9] = [0, "product_8", "문의제목10", "작성자이름10", "2021-11-01", "문의내용", ["판매자답변내용", "2021-11-04"]];

    for(i=0; i<qnaSet.length; i++) {
        let isPublic = qnaSet[i][0];
        let productName = qnaSet[i][1];
        let productImg = productName + ".jpg";

        if(productName == "product_1") {
            productName = "진영 '햇'단감 1.5kg";
        } else if (productName == "product_2") {
            productName = "청송 부사 사과 1kg";
        } else if (productName == "product_3") {
            productName = "제주 당도선별 GAP 감귤 2kg"; 
        } else if (productName == "product_4") {
            productName = "전남 고흥 프리미엄 석류 생과 2.5kg";
        } else if (productName == "product_5") {
            productName = "강원도 고랭지 알타리무 2kg";
        } else if (productName == "product_6") {
            productName = "전북 순창 유기농 블루베리 500g (냉동)";
        } else if (productName == "product_7") {
            productName = "양평 로메인 상추 1kg";
        } else if (productName == "product_8") {
            productName = "해남 대서감자 5kg";
        } 

        let q_title = qnaSet[i][2];
        if(isPublic == 0) {
            q_title = "비밀글입니다.";
            q_title += "<i class=\"fas fa-lock\"></i>"
        }

        let q_writer = qnaSet[i][3];
        let q_date = qnaSet[i][4];
        let q_content = qnaSet[i][5];
        let answerContents = qnaSet[i][6];
        let a_content = answerContents[0];
        let a_date = answerContents[1];
        let appendInput = "";

        if(answerContents == -1) {
            appendInput = "<div class=\"row_content flex unanswered\">"
                            + "<div class=\"col1\">미답변</div>"
                                + "<div class=\"col2 flex\">"
                                    + "<div class=\"imgBox\">"
                                        + "<img src=\"/images/" + productImg + "\" alt=\"\">"
                                    + "</div>"
                                    + "<div>"
                                        + "<p class=\"productName\">" + productName + "</p>"
                                        + "<p class=\"inquiryTitle\">" + q_title + "</p>"
                                    + "</div>"
                                + "</div>"
                                + "<div class=\"col3\">" + q_writer + "</div>"
                                + "<div class=\"col4\">" + q_date + "</div>"
                            + "</div>"
                            + "<div class=\"row_prev_q_answer\">"
                            + "<div class=\"flex inquiryContent\">"
                                + "<div class=\"col1\"></div>"
                                + "<div class=\"col2\">" + q_content + "</div>"
                            + "</div>"
                        + "</div>";

        } else {
            appendInput = "<div class=\"row_content flex answered\">"
                            + "<div class=\"col1\">답변완료</div>"
                                + "<div class=\"col2 flex\">"
                                    + "<div class=\"imgBox\">"
                                        + "<img src=\"/images/" + productImg + "\" alt=\"\">"
                                    + "</div>"
                                    + "<div>"
                                        + "<p class=\"productName\">" + productName + "</p>"
                                        + "<p class=\"inquiryTitle\">" + q_title + "</p>"
                                    + "</div>"
                                + "</div>"
                                + "<div class=\"col3\">" + q_writer + "</div>"
                                + "<div class=\"col4\">" + q_date + "</div>"
                            + "</div>"
                            + "<div class=\"row_prev_q_answer\">"
                                + "<div class=\"flex inquiryContent\">"
                                    + "<div class=\"col1\"></div>"
                                    + "<div class=\"col2 answered\">" + q_content + "</div>"
                                + "</div>"
                                + "<div class=\"flex answerContent\">"
                                    + "<div class=\"col1\"></div>"
                                    + "<div class=\"col2\">"
                                        + "<span class=\"answerBadge\">답변</span>"
                                        + "<p>" + a_content + "</p>"
                                    + "</div>"
                                    + "<div class=\"col3\">판매자</div>"
                                    + "<div class=\"col4\">" + a_date + "</div>"
                                + "</div>"
                            + "</div>";
        }
        $("div#qnaListTbl").append(appendInput);
    }

    /* 문의 제목을 클릭하면 답변내용 오픈 */
    $("div.row_content p.inquiryTitle").click(function(){

        /* 1. 문의내역 공개유무 파악 */
        if($(this).children("i").hasClass("fa-lock") == true) {
            alert("비공개 문의내역은 작성자만 확인 할 수 있습니다.");
        } else {
            /* 2. 모든 답변내용에 closed 클래스를 추가한다. */
            $("div.row_prev_q_answer").addClass("closed");

                /* 4. 클릭한 문의내역의 답변내용은 closed 클래스를 지워준다. */
                /* 이때, 같은 문의내역을 클릭 했을 때 toggle 기능으로 슬라이드 업 다운을 구현*/
                $(this).parent().parent().parent().next("div.row_prev_q_answer").slideToggle(300).removeClass("closed");
                /* 5. 다른 문의내역의 답변은 모두 슬라이드 업 한다. */
                $("div.closed").slideUp(300);
        }

    });

    /* 문의내역 상품명 클릭시 해당 상품 상세 페이지로 이동 */
    $("div.row_content p.productName").click(function(){
        let url = $(this).parent().prev().children("img").attr("src");

        if ( url.substring(8, 17) != "product_1") {
            alert("운영하지 않는 상세페이지 입니다.");
            return false;
        } else {
            url = "/shop/" + url.substring(8, 17) + ".html";
            window.location.href = url;
        }
    });

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

    /* 답변상태별로 리스트 불러오기 */
    $("div#isAnswered select").change(function(){
        let answerCondition = $(this).val();
        
        /* 미답변 */
        if(answerCondition == -1) {
            $("div.answered").hide();
            $("div.unanswered").show();
            
        /* 답변완료 */
        } else if(answerCondition == 1) {
            $("div.unanswered").hide();
            $("div.answered").show();
        
        /* 답변상태 */
        } else {
            $("div.row_content").show();
        }
    });

    /* 페이징 번호 클릭 */
    $("button.pageNum").click(function(){
        $("button.pageNum").removeClass("selected");
        $(this).addClass("selected");
    });


});