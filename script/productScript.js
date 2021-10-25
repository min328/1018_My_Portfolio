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

    /* 수량 + 추가 버튼 */
    $("div#productCounter button#addBtn").click(function(){
        let currentCount = $(this).siblings("input#productCount").val();

        /* 구매수량 변경 */
        if(currentCount > 4) {
            alert("1인당 사전예약이 가능한 최대 갯수는 5개 입니다.");
            return false;
        } else {
            currentCount = Number(currentCount) + 1;
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
    
    /* 수량 - 빼기 버튼 */
    $("div#productCounter button#subBtn").click(function(){
        let currentCount = $(this).siblings("input#productCount").val();
        
        /* 구매수량 변경 */
        if(currentCount <= 1) {
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
    
    /* 상품상세페이지 탭버트 스크롤 기능 */
    /* 상세정보 탭 */
    $("main#productMain div.tab div.tab1").click(function(){
        $("html").animate(
            { "scrollTop" : "37"}
            , 500
        );
    });

    /* 사용후기 탭 */
    $("main#productMain div.tab div.tab2").click(function(){
        $("html").animate(
            { "scrollTop" : "2035"}
            , 500
        );
    });

    /* 문의 탭 */
    $("main#productMain div.tab div.tab3").click(function(){
        $("html").animate(
            { "scrollTop" : "2700"}
            , 500
        );
    });

    /* 구매안내 탭 */
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