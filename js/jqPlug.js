(function($){
    function createTips(){
        $("body").append("<div class=\"LstModal\"><div id=\"tipsBox\"><div class=\"alertBody\"></div></div></div>");
    }
    $.extend({
        LstTips:function(msg){
            setTimeout(function(){
                createTips();
                if(!msg){
                    $(".alertBody").text("请开发人员检查语法");
                    $.closeTips();
                }else{
                    $(".alertBody").text(msg)
                }
            },20);
            setTimeout(function(){
                $.closeTips();
            },2000);
        },
        closeTips:function(){
            $(".LstModal").remove();
        },
        LstDialog:function (elm,width=800) {
            let elmen = $(elm);
            elmen[0].onclick = function(){
                event.stopPropagation();  //阻止冒泡
            };
            elmen.attr("dialog","true");
            let str = elm + '_dialog_wrap'
            if($(str).length==0){
                let notDotStr = str.slice(1,str.length)
                let elmstr = "<div class="+ notDotStr+" dialog-toggle='true' style='position:fixed;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,0.3);'></div>";
                elmen.wrapAll(elmstr);
            }else{
                $(str).attr("dialog-toggle","true");
            }
            elmen.css({background:"#fff",margin:"15px auto",borderRadius:"5px"});
            elmen.css("width",width + 'px');
            let arr = $('[dialog-toggle]');
            for(let i = 0;i<arr.length;i++){
                i = i.toString();
                arr[i].onclick = function(){
                    event.stopPropagation();  //阻止冒泡
                    $.hiddenDialog(arr[i]);
                }
            }
        },
        hiddenDialog:function(el){
            if(el.nodeName == "DIV"){
                $(el).attr("dialog-toggle","false");
            }else{
                $(el.offsetParent).attr("dialog-toggle","false");
            }
        }
    })
})(jQuery);