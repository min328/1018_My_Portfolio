$(function(){

    /* 페이지 초기 로딩시, 가격 천단위 콤마 처리 */
    let basicPrice = $("p#basicPrice").text();
    basicPrice = Number(basicPrice);
    basicPrice = basicPrice.toLocaleString();
    $("p#basicPrice").text(basicPrice);

    let discountedPrice = $("p#discountedPrice span").text();
    discountedPrice = Number(discountedPrice);
    discountedPrice = discountedPrice.toLocaleString();
    $("p#discountedPrice span").text(discountedPrice);

    /* 총 상품금액의 수량1의 기본 값을 discountedPrice에서 받아 넣음 */
    let nowTotal = discountedPrice;
    $("span#productTotalRes").text(nowTotal);

    /* 상품후기 목록 불러오기 */
    let reviewSet = [];
    /* 제목, 작성자, 작성날짜, 조회수(int), 별점(int), 내용, 이미지 순으로 */
    reviewSet[0] = ["감 상태가 최상입니다.", "이수지", "2021-11-9", 233, 4, "껍질째 먹는 저희 집에서 안심하고 먹을 수 있는 감이었습니다. 좋은 상품 잘 받았습니다~", "/images/product1/persimmon3.jpg"];
    reviewSet[1] = ["추천합니다!", "박미래", "2021-11-10", 99, 5, "지인이 추천해서 시켜봤는데 무른거 없이 상태가 다 너무 좋았습니다. 크기도 고르고요~~ 다음에 또 시키겠습니다! 감사합니다.", null];
    reviewSet[2] = ["감이 아주 잘 익어서 왔어요~", "이가람", "2020-11-10", 105, 5, "생김새도 이쁘고 당도도 아주 좋아서 맛있게 잘 먹었습니다! ^^ ", "/images/product1/persimmon12.jpg"];

    for(i=0; i<reviewSet.length; i++) {
        let title = reviewSet[i][0];
        let customer = reviewSet[i][1];
        customer = customer.substr(0,1) + "**";
        let date = reviewSet[i][2];
        let count = reviewSet[i][3];
        let evaluation = reviewSet[i][4];
        let evalIcon ="";
        for(j=0; j<evaluation; j++) {
            evalIcon += "<i class=\"fas fa-star\"></i>"
            console.log(evalIcon);
        }
        let customerReview = reviewSet[i][5];
        let reviewImage = reviewSet[i][6];
        
        if (reviewImage == null) {
            let reviewContainer = "<tbody>"
                                + "<tr>"
                                + "<td class=\"title\">" + title + "</td>"
                                + "<td class=\"customer\">" + customer+ "</td>"
                                + "<td class=\"date\">" + date + "</td>"
                                + "<td class=\"count\">" + count + "</td>"
                                + "<td class=\"evaluation\">" + evalIcon + "</td>"
                                + "</tr>"
                                + "<tr>"
                                + "<td class=\"customerReview\" colspan=\"5\">"
                                + "<p>" + customerReview + "</p>"
                                + "</td>"
                                + "</tr>"
                                + "</tbody>"
                                $("table#reviewList").append(reviewContainer);
                                
        } else {
            let reviewContainer = "<tbody>"
                                + "<tr>"
                                + "<td class=\"title\">" + title + "</td>"
                                + "<td class=\"customer\">" + customer+ "</td>"
                                + "<td class=\"date\">" + date + "</td>"
                                + "<td class=\"count\">" + count + "</td>"
                                + "<td class=\"evaluation\">" + evalIcon + "</td>"
                                + "</tr>"
                                + "<tr>"
                                + "<td class=\"customerReview\" colspan=\"5\">"
                                + "<p>" + customerReview + "</p>"
                                + "<img src=\"" + reviewImage + "\" alt=\"\">"
                                + "</td>"
                                + "</tr>"
                                + "</tbody>"
                                $("table#reviewList").append(reviewContainer);
        }
    }

    /* 상품문의 불러오기 */
    let qnaSet = [];
    /* 제목, 작성자, 작성날짜, 조회수(int) 순으로 */
    qnaSet[0] = ["배송예정일은 언제 입니까?", "김영희", "2021-10-27", 2];
    qnaSet[1] = ["배송예정일은 언제 입니까?", "이준수", "2021-10-27", 3];
    qnaSet[2] = ["배송예정일은 언제 입니까?", "박하나", "2021-10-26", 5];
    qnaSet[3] = ["배송예정일은 언제 입니까?", "오주연", "2021-10-25", 3];
    qnaSet[4] = ["배송예정일은 언제 입니까?", "이정민", "2021-10-25", 5];

    for(i=0; i<qnaSet.length; i++) {
        let title = qnaSet[i][0];
        let customer = qnaSet[i][1];
        customer = customer.substr(0,1) + "**";
        let date = qnaSet[i][2];
        let count = qnaSet[i][3];

        let qnaContainer = "<tr>"
                        + "<td class=\"title\"><i class=\"fas fa-lock\"></i>" + title + "<span class=\"reply\">[1]</span></td>"
                        + "<td class=\"customer\">" + customer +"</td>"
                        + "<td class=\"date\">" + date + "</td>"
                        + "<td class=\"count\">" + count + "</td>"
                        + "</tr>"
        $("table#qnaList tbody").append(qnaContainer);
    }
  
    /* buyOption 수량 + 추가 버튼 */
    $("div#productCounter button#addBtn").click(function(){
        let currentCount = $(this).siblings("input#productCount").val();

        /* 구매수량 변경 */
        if(currentCount > 4) {
            alert("1인당 사전예약이 가능한 최대 갯수는 5개 입니다.");
            return false;
        } else {
            currentCount = Number(currentCount) + 1;
            currentCount += ''; /* string으로 변환 */
            $(this).siblings("input#productCount").val(currentCount);

            /* 천단위 콤마 제거 */
            discountedPrice = discountedPrice.replace(/\,/g, '');
            nowTotal = Number(discountedPrice) * Number(currentCount);
            /* 다시 천단위 콤마 추가 */
            nowTotal = nowTotal.toLocaleString();
            $("span#productTotalRes").text(nowTotal);
            /* 중량변경 */
            let nowWeight = 1.5 * Number(currentCount);
            $("span#productTotalWeight").text(nowWeight);
        }
    });
    
    /* buyOption 수량 - 빼기 버튼 */
    $("div#productCounter button#subBtn").click(function(){
        let currentCount = $(this).siblings("input#productCount").val();
        
        /* 구매수량 변경 */
        if(currentCount <= 1) {
            alert("최소 구매 갯수는 1개 입니다.");
            return false;
        } else {
            currentCount = Number(currentCount) - 1;
            currentCount += '';
            $(this).siblings("input#productCount").val(currentCount);

            /* 천단위 콤마 제거 */
            discountedPrice = discountedPrice.replace(/\,/g, '');
            nowTotal = Number(discountedPrice) * Number(currentCount);
            /* 다시 천단위 콤마 추가 */
            nowTotal = nowTotal.toLocaleString();
            $("span#productTotalRes").text(nowTotal);
            /* 중량변경 */
            let nowWeight = 1.5 * Number(currentCount);
            $("span#productTotalWeight").text(nowWeight);
        }
    });

    /* button#reviewWriteBtn */
    $("button#reviewWriteBtn").click(function(){
        alert("회원에게만 글쓰기 권한이 있습니다.");
        window.location.href = "/login/login.html";
    });
    
    /* 상품상세페이지 탭버튼 스크롤 기능 - 브라우저 사이즈에 따라서 상대적 위치가 달라지므로 offset top으로 탭을 클릭 할 때마다 불러와서 움직이도록*/
    /* 상세정보 탭 */
    $("div.tab div.tab1").click(function(){
        $("html").animate(
            { "scrollTop" : "37"}
            , 500
        );
    });

    /* 사용후기 탭 */
    $("div.tab div.tab2").click(function(){
        let divReview = $("div#review").offset().top;
        $("html").animate(
            { "scrollTop" : (divReview - 60)}
            , 500
            );
        });
        
        /* 문의 탭 */
        $("div.tab div.tab3").click(function(){
        let divQna = $("div#qna").offset().top;
        $("html").animate(
            { "scrollTop" : (divQna - 60)}
            , 500
            );
        });
        
        /* 구매안내 탭 */
        $("div.tab div.tab4").click(function(){
        let divBuyInfo = $("div#buyInfo").offset().top;
        $("html").animate(
            { "scrollTop" : (divBuyInfo - 60)}
            , 500
        );
    });

    /* product.html qnaWriteBtn 클릭시 문의사항 작성페이지로 이동 */
    $("main#productMain button#qnaWriteBtn").click(function(){
        window.location.href = "product_qna.html";
    });

    /* product_qna.html 상품상세보기 버튼 */
    $("main#qnaMain button#seeProduct").click(function(){
        let htmlfile = $(this).siblings("p.title").attr("data-code");
        window.location.href = htmlfile + ".html";
    });

    /* product_qna.html 상품정보선택 버튼 - 팝업창 생성 */
    $("main#qnaMain button#findProduct").click(function(){
        window.open("popUp_search.html", "searchProduct", "width=600, height=400, top=0, left=0");
    });

    /* product_qna.html 목록버튼 - 상품리뷰 목록 페이지로 이동 */
    $("main#qnaMain button#toReviewList").click(function(){
        window.location.href = "product_review.html";
    });

    /* product_qna.html 취소버튼 - 이전버튼 이동 */
    $("main#qnaMain button#cancleBtn").click(function(){
        window.history.go(-1);
    });

});