$(function(){

    let productSet = [["상품명1", "가격1", "할인가격"],["상품명2", "가격2", "할인가격"],["상품명3", "가격3", "할인가격"],["상품명4", "가격4", "할인가격"],["상품명5", "가격5", "할인가격"],["상품명6", "가격6", "할인가격"],["상품명7", "가격7", "할인가격"],["상품명8", "가격8", "할인가격"]];
    

    for(i=0; i<productSet.length; i++) {
        let imgSrc = "/images/product_" + (i+1) +".jpg";
        let title = productSet[i][0];
        let price = productSet[i][1];
        let discounted = productSet[i][2];
        let productContainer = "<div class=\"itemBox\">"
        + "<div class=\"imgBox\">"
        + "<img src=\"" + imgSrc + "\">"
        + "</div>"
        + "<p class=\"title\">"+ title +"</p>"
        + "<p class=\"price\">"+ price +"</p>"
        + "<p class=\"discounted\">"+ discounted +"</p>"
        + "</div>";
        console.log(productContainer);
        $("div#contentsList").append(productContainer);
    }
    
});