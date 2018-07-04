module.exports={
    text : function(){
        var regEmall = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        var ologin_btn = document.getElementById("login_btn");
        // 1.@之前必须有内容且只能是字母（大小写）、数字、下划线(_)、减号（-）、点（.）
        // 2.@和最后一个点（.）之间必须有内容且只能是字母（大小写）、数字、点（.）、减号（-），且两个点不能挨着
        // 3.最后一个点（.）之后必须有内容且内容只能是字母（大小写）、数字且长度为大于等于2个字节，小于等于6个字节
        $("#emall").on("blur",function(){
            var oEmall = $("#emall").val();
            if(!regEmall.test(oEmall)){
                 $(".errMsg").css("opacity",1)
                // $("#emall").val()="";
            }else{
                $(".errMsg").css("opacity",0)
            }
        })
        ologin_btn.onclick = function(){
            var oEmall = $("#emall").val();
            var opwd = $("#password").val();
        }
       
    }
}