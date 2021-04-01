// 공통페이지 JS - common.js //

 $(function() { //// jQB //////////////////

            /* 상단작은고객메뉴 클릭 시 메뉴표시하기*/
            //            $(.tmenu>li:last-child).click(
            //            function(){})


            /* 메뉴슬라이드 내려오기 */
            $(".gnb").hover(
                function() { //// over
                    $("#top").addClass("on");
                },
                function() { //// out
                    $("#top").removeClass("on");
                }); ///// hover //////////////

            /* 메뉴슬라이드 내려오기 */
            $(".cs").click(
                function() {
                    $(".tmenus,.wraptmenus").toggleClass("on")
                }); ///// click //////////////
     
     
        }); ///////// jQB //////////////////////

///////////////////////////////////////////////////
////// 패밀리 사이트 선택박스 변경 시 이동하기 //////////
// change 이벤트 대상: #fslink
// 변경내용: 새창열고 사이트 이동하기
// 선택박스의 선택을 변경할 때 발생하는 이벤트: change
////////////////////////////////////////////////////

$(function () { /////////////jQB /////////////////////////

            $("#fslink").change(function () {

                // 선택한 option 의 value 값 읽어오기 
                // val() - 선택값의 value 읽어오는 메서드

                let opt = $(this).val();
                console.log("선택값:" + opt);

                // 선택값이 "fs" 가 아니면 새창띄우기
                if (opt === "fs") return false;

                // 이동 url 변수
                let url;
                // 경우 나누기
                switch (opt) {
                    case "f0":
                        url = "http://www.spc.co.kr/";
                        break;
                    case "f1":
                        url = "http://pariscroissantorder.com/";
                        break;
                    case "f2":
                        url = "https://www.paris.co.kr/";
                        break;
                    case "f3":
                        url = "https://www.caffe-pascucci.co.kr/index.asp";
                        break;
                    case "f4":
                        url = "http://www.jambajuice.co.kr/";
                        break;
                    case "f5":
                        url = "https://www.dqueenscatering.com/";
                        break;
                    case "f6":
                        url = "http://www.baskinrobbins.co.kr/";
                        break;
                    case "f7":
                        url = "http://www.dunkindonuts.co.kr/";
                        break;
                    case "f8":
                        url = "https://www.bizeun.co.kr/";
                        break;
                    case "f9":
                        url = "http://dining.spc.co.kr/index.do";
                        break;
                    case "f10":
                        url = "https://www.hicafemall.com/";
                        break;
                } /// switch case /////////////

                // 새창열기 페이지 이동
                window.open().location.href = url;

            }); // change /////////////////////
    
 }); ///////// jQB ///////////////////////////////////