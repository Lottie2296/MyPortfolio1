// 메인페이지 JS - main.js //

// 서브페이지 JS - sub.js //

   window.addEventListener("DOMContentLoaded", function() {

            /////////////////////////////////////////////////
                // 구현내용: 이동버튼 클릭시 이미지 이동하여 변경하기
                // 이벤트 종류: click
                // 이벤트 대상: .abtn
                // 변경 대상: .gbox, .gbox inwrap
                /////////////////////////////////////////////////

                // 이벤트 대상
                var abtn = document.querySelectorAll('.abtn');

                // 변경 대상
                var gbox = document.querySelector('.gbox');

                ////////////////////////////////////
                // 왼쪽버튼 클릭시 함수호출(전달값0)
                abtn[0].onclick = function() {

                    // 함수호출확인!
                    //console.log("나,왼쪽!");
                    
                    // 자동호출지우기
                    clearAuto();

                    // 이미지변경함수 호출!
                    chgImg(0); //전달값0

                    // a태그 기본이동 막기
                    return false;


                }; /////// click함수 ////////////////


                ////////////////////////////////////
                // 오른쪽버튼 클릭시 함수호출(전달값1)
                abtn[1].onclick = function() {

                    // 함수호출확인!
                    //console.log("나,오른쪽!");
                    
                    // 자동호출지우기
                    clearAuto();

                    // 이미지변경함수 호출!
                    chgImg(1); //전달값1

                    // a태그 기본이동 막기
                    return false;


                }; /////// click함수 ////////////////



                /*/////////////////////////////////////////////////////
                    함수명: chgImg
                    기능: 이미지를 이동하여 이미지 순서를 변경한다!
                */ /////////////////////////////////////////////////////
                // 익명함수가 변수에 할당된 함수임!!!! ////////////////////

                // 광클금지상태변수 ///////////////
                var prot = 0; //0-허용,1-막기

                var chgImg = function(dir) { // dir - 방향(0-왼쪽,1-오른쪽)

                    //console.log("광클상태값1 :" + prot);

                    // 0.광클금지 ////////////////////////////////////
                    
                    // (1) if문으로 상태값 막기!
                    if (prot) return false; //돌아가!
                    // prot===1 이면 돌아가!
                    
                    // (2) 상태값 막기(1)로 변경
                    prot = 1; //상태값 1로 변경! 잠금상태!
                    //console.log("광클상태값2 :" + prot);
                    
                    // (3) 작동시간 후에 광클상태값을 0으로 풀어주기
                    setTimeout(function() {
                        prot = 0;//상태풀기
                        //console.log("광클상태값3 :"+prot);
                    }, 400);
                    // setTimeout(함수,시간) - 설정시간 후 한번 함수호출!
                    // 시간이 400이면 0.4초이므로 이미지가 넘어가는 
                    // 트랜지션 시간인 0.4초간 광클을 막아준다!
                    /////////////////////////////////////////////////


                    // 1. 함수호출 및 전달값 확인
                    //console.log("나야나!" + dir);

                    // 2. 변경된 img리스트 읽어오기
                    var ilist = gbox.querySelectorAll(".inwrap");
                    // 첫번째 이미지
                    var fele = ilist.item(0);
                    // 마지막 이미지(끝번호는 전체길이-1)
                    var lele = ilist.item(ilist.length - 1);

                    // 3. 오른쪽버튼 클릭시 맨앞요소 맨뒤로 이동하기
                    if (dir) { // 1이면 true
                        gbox.appendChild(fele);
                    } ///// if ///////////////////
                    // 4. 왼쪽버튼 클릭시 맨뒤요소 맨앞으로 이동하기
                    else { //insertBefore(넣을놈,넣을놈전놈)
                        gbox.insertBefore(lele, fele);
                    } ///// else ////////////////////


                }; ///////// chgImg 함수 ////////////////////////////////
                ///////////////////////////////////////////////////////
                /*
                [버튼을 동반한 배너형 컨텐츠에서 다루는 4가지 중요분야]
                1. 광클금지 : 
                    - 버튼클릭을 빨리하여 기존 기능이 망가져 보이는 것을 막음
                2. 자동넘김 :
                    - 일정시간 간격으로 배너가 넘어감
                3. 버튼클릭시 자동넘김 지우기 :
                    - 사용자가 버튼을 조작하는 순간 자동넘김 기능 지우기
                4. 사용자 조작이 끝난 후 다시 자동넘기기 :
                    - 버튼 마지막 클릭이 끝난 후 자동넘김 셋팅 하나만 남기기
                
                */
            /*///////////////////////////////////////////////
                함수명: autoCall
                기능: 슬라이드 넘기기함수 자동호출(인터발함수)
            *////////////////////////////////////////////////
            var autoI;//인터발용변수
            /////////////////////////////////////////////////
            var autoCall = function(){
                
                console.log("자동호출작동!");
                
                autoI = setInterval(function(){
                    chgImg(1);//오른쪽버튼 클릭이동과 동일함!
                },3000);
                //setInterval(함수,시간)
                //일정시간 간격으로 함수를 호출하는 JS내장함수
                
            };/////// autoCall 함수 /////////////////////////
            ////////////////////////////////////////////////
            
            /// 자동넘김 최초호출(반드시 할당형익명함수 아래에서 호출!)
            autoCall();
            
            /*////////////////////////////////////////////////////
                함수명: clearAuto
                기능: 인터발함수를 지우고, 잠시 후 다시 자동호출셋팅하기
                    이동버튼 클릭시 이 함수를 호출하여야 함!
            */////////////////////////////////////////////////////
            var autoT;//타임아웃용변수
            //////////////////////////////////////////////////////
            var clearAuto = function(){
                
                console.log("자동호출지우기!");
                
                // 인터발함수 지우기
                clearInterval(autoI);
                
                // 타임아웃함수 지우기(실행쓰나미방지!)
                clearTimeout(autoT);
                
                // 일정시간 후 자동호출함수 재호출하기!
                autoT = setTimeout(autoCall,3000);
                
                
            };/////////// clearAuto 함수 //////////////////////////
            //////////////////////////////////////////////////////

      

        }); ///////// 로드구역 //////////////////////