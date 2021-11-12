$(function(){
    
    // 모든 금액 사항, 원단위 처리하기
    let allMoney = document.querySelectorAll(".price")
    ;

    for(i=0; i<allMoney.length; i++) {
        let price = allMoney[i].innerText;
        price = Number(price);
        price = price.toLocaleString();
        allMoney[i].innerText = price;
    }

    // listTop의 일반상품의 개수 카운터
    let howManyList = $("div.listBox").length;
    $("span#prodcutCount").text(howManyList);

    // 장바구니 진입시 디폴트값, 모든 상품 체크
    $("input[type=checkbox]").prop("checked", true);

    // 상품모두선택 selectAllProduct
    $("input#selectAllProduct").click(function(){
        if($(this).prop("checked") == true) {
            $("input.selectEach").prop("checked", true);
        } else {
            $("input.selectEach").prop("checked", false);
        }
    });

    // 상품 선택 변경시, 전체 선택이면 모두체크 true 그렇지 않으면 모두체크 false
    $("input.selectEach").change(function(){
        let totalItem = $("input.selectEach").length;
        let checkedItem = $("input.selectEach:checked").length;
        if( checkedItem == totalItem) {
            $("input#selectAllProduct").prop("checked", true);
        } else {
            $("input#selectAllProduct").prop("checked", false);
        }
    });

    // 선택 삭제버튼 deleBtn
    $("button.deleBtn").click(function(){
        $(this).parent().parent("div.listBox").remove();

        // 선택삭제 후, 상품전체항목 0 일 경우 장바구니 비워진 상태로 전환
        if($("div.listBox").length == 0) {
            cartMakeEmpty();
        }
    });

    // 체크박스 선택 후, 선택상품 삭제 버튼 deleSelectedBtn
    $("button#deleSelectedBtn").click(function(){
        $("input.selectEach:checked").each(function(){
            $(this).parent().parent("div.listBox").remove();
        });
        
        // 모든 상품이 없어진 경우 장바구니 비우기 실행
        let listBox = $("div.listBox").length;
        if(listBox == 0) {
            cartMakeEmpty();
        }
    });

    // 장바구니 비우기 버튼
    $("button#clearListBtn").click(function(){
        $("div.listBox").remove();
        cartMakeEmpty();
    });

    // 장바구니 비우기
    function cartMakeEmpty() {
        $("div#cartEmpty").show();
        $("button#deleSelectedBtn").hide();
        $("button#clearListBtn").hide();
        $("input#selectAllProduct").prop("checked", false);
    }

});