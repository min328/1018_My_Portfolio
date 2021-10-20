$(function(){

    /* 상품상세페이지 탭버트 스크롤 기능 */
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