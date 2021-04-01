// LG 메인페이지 JS - main.js //

$(function () { ///////// jQB ////////////////////////////

    ///////////////////////////////////////////////////////
    /////// 1. 상단영역 ////////////////////////////////////
    ///////////////////////////////////////////////////////
    let gnbli = $("#gnb>li");

    /*  메뉴슬라이드 뒷판 내려오기 ************************ */
    gnbli.hover(
        function () { //// over
            $(".top").addClass("on");
        },
        function () { //// out
            $(".top").removeClass("on");
        }); ///// hover //////////////

    /* 메뉴슬라이드 내려오기 ****************************** */
    gnbli.hover(
        function () { //// over
            $(this).addClass("on");
        },
        function () { //// out
            $(this).removeClass("on");
        }); ///// hover //////////////

    ////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////
    /////// 2. 배너영역 ////////////////////////////////////
    ////////////////////////////////////////////////////////

    /* 배너 이미지 변경하기 ****************************** */
    // 인터발함수(지우기위해 만든변수)
    let autoB;
    /*////////////////////////////////////////////
        함수명: autoSlide
        기능: 자동넘기기 셋팅함수(인터발함수)
    */ ////////////////////////////////////////////

    // 배너순번 전역변수
    var bseq = 0;


    function goSlide(gubun) { //gubun(왼쪽:0,오른쪽:1)

        // 1.함수호출, 전달값 확인
        //console.log("슬라이드이동!" + gubun);

        // 2.변경대상: .slider li
        var tg = document.querySelectorAll('.slide li');

        //console.log("슬라이드개수:" + tg.length);
        // 3.버튼 구분하여 배너순번 증감하기
        // 오른쪽버튼(gubun이 1이면 true)
        if (gubun) {

            //확인
            //console.log("오른쪽!!!");
            // 배너순번 증가
            bseq++;
            // 한계수 설정(마지막 컬렉선번호 다음번호이면 처음으로)
            if (bseq === tg.length) bseq = 0;

        } ////// if //////
        /// 왼쪽버튼 //////////////
        else {

            //확인
            //console.log("왼쪽!!!");
            // 배너순번 감소
            bseq--;
            // 한계수 설정(0보다작은 -1일경우 끝번호로)
            if (bseq === -1) bseq = tg.length - 1;
            // 마지막 컬렉션 번호는 개수보다 1작다!
        } ///// else //////

        // 변경된 배너순번 확인!
        //console.log("배너순번:" + bseq);


        // 4. 해당순번에 class="on" 넣기

        // 클래스 전부 지우기 ////////
        for (var x of tg) {
            x.classList.remove("on");
        } ////// for of문 /////////

        // 선정된 변경대상 tg에 class를 넣어준다!
        // tg[bseq] 는 해당순번의 li요소
        tg[bseq].classList.add("on");

        /*
        [ 선택요소에 class 제어하기 ]
        
        classList 를 사용하여 원하는 class를 제어한다!
            
        1) add(클래스명) : 클래스 넣기
        2) remove(클래스명) : 클래스 제거하기
        3) toggle(클래스명) : 지정된 클래스가 없으면 넣고
                            있으면 제거함(토글기능)
        - 토글 기능이란? 전등불켜기 버튼 처럼 켰다/껏다
        하는 단순 전환 기능을 한가지 버튼할때 토글버튼이라고
        흔히 부른다!
        */

    } ///////////  goSlide ///////////////////////

    // 인터발함수(지우기위해 만든변수)
    var autoI;

    var autoSlide = function () {
        autoI = setInterval(function () {
            goSlide(1); //오른쪽방향 넘기기
        }, 4000);
    }; ////// autoSlide함수 //////////////////////
    //////////////////////////////////////////////

    // 할당형함수 아래에서 처음 호출해야함!
    autoSlide(); //최초호출!


    // 타임아웃변수(쓰나미방지용 지우기변수)
    var autoT;
    /*////////////////////////////////////////////
        함수명: clearAuto
        기능: 자동넘김 지우기함수(클리어인터발함수)
    */ ////////////////////////////////////////////
    var clearAuto = function () {

        // 자동넘김 할당된 변수를 지운다(autoI)
        clearInterval(autoI);
        // 타임아웃 실행쓰나미 방지용 타임아웃 지우기를 꼭한다!
        clearTimeout(autoT);

        // 안건드리면 5초후 다시 자동호출하기!
        // 매번 호출될때 위에서 지우므로 단 하나만 남아있음!
        autoT = setTimeout(autoSlide, 4000);

    }; ////// clearAuto함수 /////////////////////////
    ///////////////////////////////////////////////


    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, //한 영역에 보여줄 슬라이드수
      centeredSlides: false,
        spaceBetween: 30,
        
      breakpoints: { 769: { slidesPerView: 4, slidesPerGroup: 4 } },
        pagination: { // 하단 블릿표시
            el: '.swiper-pagination',
            clickable: true, //블릿클릭이동
        }/*,
        
        navigation: { // 양쪽이동버튼
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }*/
    });
    
//     var swiper = new Swiper('.swiper-container', {
//      slidesPerView: 1,
//      centeredSlides: false,
//      slidesPerGroupSkip: 1,
//      grabCursor: true,
//      keyboard: { enabled: true },
//      breakpoints: { 769: { slidesPerView: 2, slidesPerGroup: 2 } },
//      scrollbar: { el: '.swiper-scrollbar' },
//      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
//      pagination: { el: '.swiper-pagination', clickable: true }
//    });
    $("#prevbtn").click(function(){
        swiper.slidePrev();
    });/////////// click ////////////
    $("#nextbtn").click(function(){
        swiper.slideNext();
    });/////////// click ////////////
        
}); ///////// jQB ////////////////////////////////
