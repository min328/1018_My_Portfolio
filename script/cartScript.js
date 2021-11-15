$(function(){

    /* 카트 리스트 생성 */
    /* 이미지파일이름, 상품명, 상품가격 순으로 */
    let cartSet = [["product_1", "진형 '햇'단감 1.5kg", 11900]
                    , ["product_3", "제주 당도 선별 GAP 감귤 2kg", 15900]];

    for(i=0; i<cartSet.length; i++) {
        let imgSrc = "/images/" + cartSet[i][0] + ".jpg";
        let productName = cartSet[i][1];
        let productPrice = cartSet[i][2];
        let discountedPrice = productPrice * 0.7; // 현재 할인율 30%적용, 70%의 가격에 판매
        let mileage = discountedPrice * 0.02; // 할인가격의 2%를 적립금으로 적용
        mileage = Math.round(mileage); // 마일리지 소숫점 반올림 처리

        let cartItem = "<div class=\"listBox flex\" data-index=\"" + i + "\">"
                            + "<div class=\"col1\"><input type=\"checkbox\" class=\"selectEach\"></div>"
                            + "<div class=\"col2\"><img src=\"" + imgSrc + "\" alt=\"\"></div>"
                            + "<div class=\"col3\">" + productName + "</div>"
                            + "<div class=\"col4\">"
                                + "<input class=\"productCountRes\" value=\"1\" readonly>"
                                + "<button type=\"button\" class=\"countUpBtn\">+</button>"
                                + "<button type=\"button\" class=\"countDownBtn\">-</button>"
                            + "</div>"
                            + "<div class=\"col5\">"
                                + "<p class=\"price original\">" + productPrice + "</p>"
                                + "<p class=\"price discounted\">" + discountedPrice + "</p>"
                            + "</div>"
                            + "<div class=\"col6\">" + mileage + "</div>"
                            + "<div class=\"col7\">기본배송</div>"
                            + "<div class=\"col8\">무료</div>"
                            + "<div class=\"col9\">"
                                + "<button type=\"button\" class=\"orderThisBtn\">주문하기</button>"
                                + "<button type=\"button\" class=\"wishBtn\">관심상품등록</button>"
                                + "<button type=\"button\" class=\"deleBtn\">삭제</button>"
                            + "</div>"
                        + "</div>"; // div.listBox end

        $("div#cartList").append(cartItem);
    }
    
    /* listTop의 일반상품의 개수 카운터 */
    let howManyList = cartSet.length;
    $("span#prodcutCount").text(howManyList);

    /* 장바구니 진입시 디폴트값, 모든 상품 체크 */
    $("input[type=checkbox]").prop("checked", true);

    /* 함수로 계산, output기능 묶어둬서 상품 개별선택 변동시 코드 재사용하도록 */
    /* html최초 로드시 전체 선택 상태에서 계산실행 */
    writeCalcRes();

    /* 기본금액, 할인금액, 결제예정금액 html에 output하는 함수 */
    function writeCalcRes() {
        
        // 할인전 기본금액 합계 구하기
        let originalTotal = calcTotalOriginal();
        $("div#clacMain div.col1 span.price").text(originalTotal);

        // 할인금액 합계 구하기
        let discountedTotal = calcTotalDiscounted();
        $("div#clacMain div.col3 span.price").text(discountedTotal);

        // 결제예정 금액 구하기
        let finalPrice = originalTotal - discountedTotal;
        $("div#clacMain div.col4 span.price").text(finalPrice);
        
        // 원 단위 붙이기
        replaceCurrency();
    }

    /* 할인전 기본금액 합계 구하는 함수 */
    function calcTotalOriginal() {
        let sum = 0;
        $("input.selectEach:checked").each(function(){
            // 체크된 상품의 기본금액을 불러와서 sum변수에 축척
            let price = $(this).parent().parent().children("div.col5").children("p.original").text();
            price = price.replace(/\,/g, "");
            price = Number(price);
            sum += price;
        });
        return sum;
    }

    /* 할인 금액 합계 구하는 함수 */
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

    /* 숫자 -> (화폐단위)원 치환 함수 */
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

    /* 상품모두선택 selectAllProduct */
    $("input#selectAllProduct").click(function(){
        if($(this).prop("checked") == true) {
            $("input.selectEach").prop("checked", true);
        } else {
            $("input.selectEach").prop("checked", false);
        }
        writeCalcRes();
    });

    /* 상품 개별 선택시, 전체 선택이면 모두체크 true 그렇지 않으면 모두체크 false */
    $("input.selectEach").change(function(){
        let totalItem = $("input.selectEach").length;
        let checkedItem = $("input.selectEach:checked").length;
        if( checkedItem == totalItem) {
            $("input#selectAllProduct").prop("checked", true);
        } else {
            $("input#selectAllProduct").prop("checked", false);
        }
        writeCalcRes();
    });

    /* 선택 삭제버튼 deleBtn */
    $("button.deleBtn").click(function(){
        $(this).parent().parent("div.listBox").remove();

        // 선택삭제 후, 상품전체항목 0 일 경우 장바구니 비워진 상태로 전환
        if($("div.listBox").length == 0) {
            cartMakeEmpty();
        }
        writeCalcRes();
    });

    /* 체크박스 선택 후, 선택상품 삭제 버튼 deleSelectedBtn */
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

    /* 장바구니 비우기 버튼 */
    $("button#clearListBtn").click(function(){
        $("div.listBox").remove();
        cartMakeEmpty();
        writeCalcRes();
    });

    /* 장바구니 비우기 */
    function cartMakeEmpty() {
        $("div#cartEmpty").show();
        $("button#deleSelectedBtn").hide();
        $("button#clearListBtn").hide();
        $("input#selectAllProduct").prop("checked", false);
    }

    /* 상품 수량 변경 버튼 */
    /* 수량 증가 */
    $("button.countUpBtn").click(function(){

        // cartSet 접근을 위한 리스트 인덱스 값 불러오기
         let cartIndex = $(this).parent().parent("div.listBox").attr("data-index");

        // 수량 input value 가져오기
        let countNum = $(this).siblings("input.productCountRes").val();

        // 수량 1씩 증가
        countNum = Number(countNum);
        countNum += 1;

        // 수량 제한 최소 1 ~ 최대 10
        if(countNum > 10) {
            alert("최대 구매 수량은 10개 입니다.");
            return false;
        } else {
            // 증가된 수량 값 입력
            $(this).siblings("input.productCountRes").val(countNum);
            
            // 증가된 수량에 따른 기본금액, 할인금액, 마일리지 변경
            let originalPrice_changed = cartSet[cartIndex][2] * countNum;
            let discountedPrice_changed = (cartSet[cartIndex][2] * 0.7) * countNum;
            let mileage_changed = Math.round(discountedPrice_changed * 0.02);

            $(this).parent().next("div.col5").children("p.original").text(originalPrice_changed);
            $(this).parent().next("div.col5").children("p.discounted").text(discountedPrice_changed);
            $(this).parent().nextAll("div.col6").text(mileage_changed);

            writeCalcRes();
        }
    });

    /* 수량 감소 */
    $("button.countDownBtn").click(function(){

        // cartSet 접근을 위한 리스트 인덱스 값 불러오기
         let cartIndex = $(this).parent().parent("div.listBox").attr("data-index");

        // 수량 input value 가져오기
        let countNum = $(this).siblings("input.productCountRes").val();

        // 수량 1씩 감소
        countNum = Number(countNum);
        countNum -= 1;

        // 수량 제한 최소 1 ~ 최대 10
        if(countNum < 1) {
            alert("최소 구매 수량은 1개 입니다.");
            return false;
        } else {
            // 감소된 수량 값 입력
            $(this).siblings("input.productCountRes").val(countNum);
            
            // 감소된 수량에 따른 기본금액, 할인금액, 마일리지 변경
            let originalPrice_changed = cartSet[cartIndex][2] * countNum;
            let discountedPrice_changed = (cartSet[cartIndex][2] * 0.7) * countNum;
            let mileage_changed = Math.round(discountedPrice_changed * 0.02);

            $(this).parent().next("div.col5").children("p.original").text(originalPrice_changed);
            $(this).parent().next("div.col5").children("p.discounted").text(discountedPrice_changed);
            $(this).parent().nextAll("div.col6").text(mileage_changed);

            writeCalcRes();
        }
    });

    /* 상품주문페이지 이동 */
    $("button#orderFinalBtn, button.orderThisBtn").click(function(){
        window.location.href = "/order/orderForm.html";
    })

});