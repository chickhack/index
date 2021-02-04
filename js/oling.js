
$('.tab1-left-outside').click(function(){

	// alert($(this).children().children().attr('src')) //選擇下一個子孫
	 let imgs = $(this).children().children().attr('src');
	 let lineBoxTitle = $(this).children().eq(1).text();
	 let lineBoxText = $(this).children().eq(2).text();
	 let lineBoxMoney =$(this).children().eq(3).text();
	
	//  尋找點選的圖片文案去做替換
	$(location).prop('href','#openbox');
	$('#imgs22').attr('src',imgs);
	$('#lightbox-p').text(lineBoxTitle);
	$('#text2').text(lineBoxText);
	$('#lineBoxMoney').text(lineBoxMoney);
});

// =============數量+-控制==============
$('#plus').click(function(){
	let nu = $('#nubr').val();
	$('#nubr').val(++nu);
  });
  $('#less').click(function(){
	let nu = $('#nubr').val();
	if(nu==0){
	  return;
	}else{
	  $('#nubr').val(--nu);
  
	}
  });
  $(document).ready(function(){

	
	  // =======選餐完成送出=======
	$('.lightbox-button-yes').click(function(){
		var title =$('#lightbox-p').text();
		var nur =$('#nubr').val();
		//直接使用match再碰到字的時候就會停止返回值匯市null  
		//所以要加上\d表示找尋數字 +表示所有符合的
		var money = $('#lineBoxMoney').text().match(/\d+/);
		// window.alert(money);
		var joinData = $('<tr>' 
		+ 	'<td>' +title+ '</td>' 
		+ 	'<td>數量:' +nur+ '</td>'
		+	'<td>單價'+money+'</td>'
		+	'<td>' + '<button class="btnDel" >刪除</button>' 
		+ 	' </td> </tr>');
		// 如果使用者數量0就不能新增
		if(nur == 0){
			return;
		}else{

			$('#confirm12').append(joinData);
		}
		var joinData1 = $('<tr>' 
		+ 	'<td>' +title+ '</td>' 
		+ 	'<td>數量:' +nur+ '</td>'
		+	'<td>單價'+money+'</td>'
		+	'<td>' + '<button class="btnDel" >刪除</button>' 
		+ 	' </td> </tr>');
		if(nur == 0){
			return;
		}else{

			$('#confirm11').append(joinData1);
		}
		// =============刪除按鈕並且減去總價==============
		
		$('.btnDel').unbind('click').click(function(){
			// 撈出按下去當前的商品數量
			var delTd = $(this).parent().parent().children().eq(1).text().match(/\d+/);
	
			// 撈出按下去當前的商品價格
			var delTd2 = $(this).parent().parent().children().eq(2).text().match(/\d+/);
	
			sum1 = delTd * delTd2;
			allSum -= sum1;
			$('#allmoney').text(allSum);
			$('#tab5-allmoney').text(allSum);

			// =========刪除========

			// document.getElementById('confirm12').removeChild(this.parentNode.parentNode);
			// alert($(this).parent().parent().nodeName);
			// document.getElementById('confirm12').removeChild();
			// $(this).parent().parent().remove();

			
			var ind	=  $(this).parent().parent().index(); //尋找索引值
			alert(ind);
			$('#confirm11 tr').eq(ind).remove();
			$('#confirm12 tr').eq(ind).remove();

		});



		
		// =======計算新增菜單目前總價=======
		var trs= $('#confirm11 tr');
		var sum1 = 0;
		var allSum = 0;
		for(var x=0;x<trs.length;x++){
			var td= trs.eq(x).children().eq(1).text().match(/\d+/);
			// window.alert(td);
			var td2= trs.eq(x).children().eq(2).text().match(/\d+/);
			// window.alert(td2);
			sum1 =td * td2;
			
			allSum += sum1;
		}
		$('#allmoney').text(allSum);
		
		// =====================tab5============
		var trs1= $('#confirm12 tr');
		var sum12 = 0;
		var allSum1 = 0;
		for(var y=0;y<trs1.length;y++){
			var td3= trs1.eq(y).children().eq(1).text().match(/\d+/);
			// window.alert(td3);
			var td4= trs1.eq(y).children().eq(2).text().match(/\d+/);
			// window.alert(td2);
			sum12 =td3 * td4;
			
			allSum1 += sum12;
		}
		$('#tab5-allmoney').text(allSum1);
	});

});


// function del(){
// 	$(this).remove();
// };
// let imgs = document.getElementsByClassName("tab-minimg");
// for(let i=0;i<imgs.length;i++){
// 	imgs[i].onclick=showLarge;
// 	// window.alert(imgs);
// }
// function showLarge(e){
// 	document.getElementById("imgs22").src=e.target.src;
// }

// function init(){
    
	// let imgs=document.getElementsByClassName("small");
	// for(let i=0; i<imgs.length;i++){
		// imgs[i].onclick=showLarge;
	// }
// }

