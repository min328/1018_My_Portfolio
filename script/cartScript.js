$(function(){
    
    // listTop의 일반상품의 개수 카운터
    let howManyList = $("div.listBox").length;
    $("span#prodcutCount").text(howManyList);

    // 장바구니 진입시 디폴트값, 모든 상품 체크
    $("input[type=checkbox]").prop("checked", true);
    
    /* 할인가격 적용하기 30%(== *0.7) */
    let originalPrice = $(".original");
    let discountedPrice = $(".discounted");

    for(i=0; i<originalPrice.length; i++) {
        let discounted = originalPrice[i].innerText;
        discounted *= 0.7;
        discountedPrice[i].innerText = discounted;
    }

    /* 함수로 계산, output기능 묶어둬서 상품 개별선택 변동시 코드 재사용하도록 */
    // html최초 로드시 전체 선택 상태에서 계산실행
    writeCalcRes();

   
    // 할인전 기본금액 html에 output하는 함수
    function writeCalcRes() {
        
        // 할인전 기본금액 합계 구하기
        let originalTotal = calcTotalOriginal();
        $("div#clacMain div.col1 span.price").text(originalTotal);

        // 할인 금액 합계 구하기
        let discountedTotal = calcTotalDiscounted();
        $("div#clacMain div.col3 span.price").text(discountedTotal);

        // 결제 예정 금액 구하기
        let finalPrice = originalTotal - discountedTotal;
        $("div#clacMain div.col4 span.price").text(finalPrice);
        
        // 원 단위 붙이기
        replaceCurrency();
    }

    // 할인전 기본금액 합계 구하는 함수
    function calcTotalOriginal() {
        let sum = 0;
        $("input.selectEach:checked").each(function(){
            let price = $(this).parent().parent().children("div.col5").children("p.original").text();
            price = price.replace(/\,/g, "");
            price = Number(price);
            sum += price;
        });
        return sum;
    }

    // 할인 금액 합계 구하는 함수
    function calcTotalDiscounted() {
        let sum = 0;
        $("input.selectEach:checked").each(function(){
            let price1 = $(this).parent().parent().children("div.col5").children("p.original").text();
            let price2 = $(this).parent().parent().children("div.col5").children("p.discounted").text();
            price1 = price1.replace(/\,/g, "");
            price2 = price2.replace(/\,/g, "");
            price1 = Number(price1);
            price2 = Number(price2);
            sum += (price1 - price2);
        });
        return sum;
    }

    // 숫자 -> (화폐단위)원 치환 함수
    function replaceCurrency() {
        let allMoney = $(".price");

        for(i=0; i<allMoney.length; i++) {
            let price = allMoney[i].innerText;
            price = price.replace(/\,/g, "");
            price = Number(price);

            price = price.toLocaleString();
            allMoney[i].innerText = price;
        }
    }

    // 상품모두선택 selectAllProduct
    $("input#selectAllProduct").click(function(){
        if($(this).prop("checked") == true) {
            $("input.selectEach").prop("checked", true);
        } else {
            $("input.selectEach").prop("checked", false);
        }
        writeCalcRes();
    });

    // 상품 개별 선택시, 전체 선택이면 모두체크 true 그렇지 않으면 모두체크 false
    $("input.selectEach").change(function(){
        let totalItem = $("input.selectEach").length;
        let checkedItem = $("input.selectEach:checked").length;
        if( checkedItem == totalItem) {
            $("input#selectAllProduct").prop("checked", true);
        } else {
            $("input#selectAllProduct").prop("checked", false);
        }
        writeCalcRes();
        calcAreaCurrencyReplace();
    });

    // 선택 삭제버튼 deleBtn
    $("button.deleBtn").click(function(){
        $(this).parent().parent("div.listBox").remove();

        // 선택삭제 후, 상품전체항목 0 일 경우 장바구니 비워진 상태로 전환
        if($("div.listBox").length == 0) {
            cartMakeEmpty();
        }
        writeCalcRes();
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
        writeCalcRes();
    });

    // 장바구니 비우기 버튼
    $("button#clearListBtn").click(function(){
        $("div.listBox").remove();
        cartMakeEmpty();
        writeCalcRes();
    });

    // 장바구니 비우기
    function cartMakeEmpty() {
        $("div#cartEmpty").show();
        $("button#deleSelectedBtn").hide();
        $("button#clearListBtn").hide();
        $("input#selectAllProduct").prop("checked", false);
    }

});