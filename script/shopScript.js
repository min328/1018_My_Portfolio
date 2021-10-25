$(function(){

    let productSet = [["진영 '햇'단감 1.5kg", 11900],["청송 부사 사과 1kg", 9900],["제주 당도선별 GAP 감귤 2kg", 15900],["전남 고흥 프리미엄 석류 생과 2.5kg", 49800],["강원도 고랭지 알타리무 2kg", 15000],["전북 순창 유기농 블루베리 500g (냉동)", 16900],["양평 로메인 상추 1kg", 19800],["해남 대서감자 5kg", 12500]];
    
    for(i=0; i<productSet.length; i++) {
        let imgSrc = "/images/product_" + (i+1) +".jpg";
        let title = productSet[i][0];
        let price = productSet[i][1];
        let discounted = price * 0.7;
        price = price.toLocaleString();
        discounted = discounted.toLocaleString();

        /* 상품 아이템 생성 */
        let productContainer = "<div class=\"itemBox\" data-link=\"product_" + (i+1) + "\">"
        + "<div class=\"imgBox\">"
        + "<img src=\"" + imgSrc + "\">"
        + "</div>"
        + "<p class=\"title\">"+ title +"</p>"
        + "<p class=\"price\">"+ price +"</p>"
        + "<p class=\"discounted\">"+ "<span class=\"disPercent\">30%</span>" +discounted +"</p>"
        + "</div>";

        
        // console.log(productContainer);
        $("div#contentsList").append(productContainer);

    }
    
    $("main#shopMain div.itemBox").click(function(){

        let url = $(this).attr("data-link");

        /* 포트폴리오용으로 인덱스 0번 아이템만 링크 연결 해두었음 */
        if(url == "product_1") {
            window.location.href = url + ".html";
        } else {
            alert("상품 상세 페이지는 1번 아이템을 클릭하여 확인해 주세요.");
            return;
        }
    });

    
});