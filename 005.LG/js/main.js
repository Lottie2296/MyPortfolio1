// LG 메인페이지 JS - main.js //

$(function () { ///////// jQB ////////////////////////////

    ///////////////////////////////////////////////////////
    /////// 1. 상단영역 ////////////////////////////////////
    let gnbli = $("#gnb>li");

    /* 메뉴슬라이드 뒷판 내려오기 */
    gnbli.hover(
        function () { //// over
            $(".top").addClass("on");
        },
        function () { //// out
            $(".top").removeClass("on");
        }); ///// hover //////////////

    /* 메뉴슬라이드 내려오기 */
    gnbli.hover(
        function () { //// over
            $(this).addClass("on");
        },
        function () { //// out
            $(this).removeClass("on");
        }); ///// hover //////////////

    ////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////

    






}); ///////// jQB ////////////////////////////////
