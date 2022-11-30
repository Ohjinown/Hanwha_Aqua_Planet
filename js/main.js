/* main.js */
$(document).ready(function() {

// header, sidebar, 삭제 팝업창 불러오기
    $("header").load('header.html');
    $("#sidebar").load('sidebar.html');
    //$("#popup").load('popup.html'); 

//상세 더보기 클릭 시 보여지기

$(".btn_more").click(function(){
    $(".preview_inner").css("display" , "block");
})

// 페이지 이동
    $(".page_move>li").click(function(e){
        e.preventDefault();
        if($(this).siblings().hasClass("on")){
            $(this).siblings().removeClass("on");
            $(this).addClass("on");
        }else{
            $(this).addClass("on");
        }
        console.log(this);
    });
//삭제팝업
    $(".delete").click(function(){          
        $("#popup").load('popup.html');
        console.log("삭제");                       
        //$(".pop_wrap").css("display","block");
        $("#wrap").css("position","fixed");
    });
});

$(document).on("click", ".cancel" , function(){
    console.log("ASD");
    $(".pop_wrap").css("display","none");
});

/* 스위치 토글버튼  */
var check = $("input[type='checkbox']");
check.click(function(){
	$(this).toggle();
});
