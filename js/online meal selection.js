// $(function(){
//     $("a.tab").on("click", function(e){
//       e.preventDefault();
      
//       /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
//       $(this).closest("ul").find("a.tab").removeClass("-on");
//       $(this).closest("button").find("a.tab").removeClass("-on");
//       $(this).addClass("-on");
      
//       /* 找到對應的頁籤內容，加上 -on 來顯示 */
//       $("div.tab").removeClass("-on");
//       $("div.tab." + $(this).attr("data-target")).addClass("-on");
//     });
//   });
 
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.color = "";
  }
  document.getElementById(pageName).style.display = "flex";
  elmnt.style.color = color;
}

function open1Page(pageName,elmnt,color,tab1) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.color = "";
  }
  document.getElementById(pageName).style.display = "flex";
  sty= document.getElementById(elmnt);
  sty.style.color = color;
  // elmnt.style.color = color;
  //  document.getElementById(tab1).style.display = "none";
   
}
//操縱及時餐點欄位消失
$('#address').click(function(){
  $('#tab1right').css("display","none")
});
$('.tablink').click(function(){
  $('#tab1right').css("display","flex");
});
//  document.getElementById(tab1right)
//呼叫及時餐點欄位出現
$('#top5').click(function(){
  $('#tab1right').css("display","none")
});
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

