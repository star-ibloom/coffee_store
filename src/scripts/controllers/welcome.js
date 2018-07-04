
module.exports={
   scroll : function(){
        var obg0 = document.getElementsByClassName("bg0")
        var obg1 = document.getElementsByClassName("bg1")
        var osection = document.getElementsByTagName("section")
        var ofooter = document.getElementsByTagName("footer")
        var obtn_toindex = document.getElementsByClassName("btn_toindex");
        obtn_toindex[0].onclick = function(){
            // alert(1)?
            location.pathname = "/home.html"
        }


        window.onscroll =function(){
            var scrolltop=document.documentElement.scrollTop||document.body.scrollTop
            // console.log(osection[0].offsetTop,osection[1].offsetTop,osection[2].offsetTop)
            if(scrolltop>osection[0].offsetTop&&scrolltop<osection[1].offsetTop){
                var distance = scrolltop - osection[0].offsetTop
                // console.log(distance)
                obg0[0].style.top = Math.floor(distance/2) + "px"
            }
            else if(scrolltop>osection[1].offsetTop&&scrolltop<osection[2].offsetTop){
                var distance = scrolltop - osection[1].offsetTop
                obg1[0].style.top = Math.floor(distance/5.6) + "px"
            }
            else if(scrolltop>osection[2].offsetTop&&scrolltop<ofooter[0].offsetTop){
                var distance = scrolltop - osection[2].offsetTop
                obg2[0].style.top = Math.floor(distance/2) + "px"
            }
            else{
                obg0[0].style.top=0;
                obg1[0].style.top=0;
                obg2[0].style.top=0
            }
        }
   } 
}
    