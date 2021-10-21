$(function(){

    let productSet = [["상품명1", "가격1"],["상품명2", "가격2"],["상품명3", "가격3"],["상품명4", "가격4"],["상품명5", "가격5"],["상품명6", "가격6"],["상품명7", "가격7"],["상품명8", "가격8"]];
    

    for(i=0; i<productSet.length; i++) {
        let imgSrc = "/images/productImage" + (i+1) +".jpg";
        let title = productSet[i][0];
        let price = productSet[i][1];
        let productContainer = "<div class=\"itemBox\">"
        + "<div class=\"imgBox\">"
        + "<img src=\"" + imgSrc + "\">"
        + "</div>"
        + "<p class=\"title\">"+ title +"</p>"
        + "<p class=\"price\">"+ price +"</p>"
        + "</div>";
        console.log(productContainer);
        $("div#contentsList").append(productContainer);
    }
    
});