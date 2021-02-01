
$('.tab1-left-outside').click(function(){

	// alert($(this).children().children().attr('src')) //選擇下一個子孫
	 let imgs = $(this).children().children().attr('src');
	 let lineBoxTitle = $(this).children().eq(1).text();
	 let lineBoxText = $(this).children().eq(2).text();
	 let lineBoxMoney =$(this).children().eq(3).text();
	//  window.alert(lineBoxMoney);
	//  alert(text);
	$('#nubr').val(0);
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
		$('#confirm1').append(joinData);
		var joinData1 = $('<tr>' 
		+ 	'<td>' +title+ '</td>' 
		+ 	'<td>數量:' +nur+ '</td>'
		+	'<td>單價'+money+'</td>'
		+	'<td>' + '<button class="btnDel" >刪除</button>' 
		+ 	' </td> </tr>');
		$('#confirm').append(joinData1);

		// $('').append(joinData);
		// let io = $('<input type="button" value="刪除" id="btn12" >');
		// $('#confirm').addend(io);

		// =============刪除按鈕並且減去總價==============
		
		$('.btnDel').click(function(){
			// 撈出按下去當前的商品數量
			var delTd = $(this).parent().parent().children().eq(1).text().match(/\d+/);
			
			// 撈出按下去當前的商品價格
			var delTd2 = $(this).parent().parent().children().eq(2).text().match(/\d+/);
			
			sum1 = delTd * delTd2;
			allSum -= sum1;
			$('#allmoney').text(allSum);
			$('#tab5-allmoney').text(allSum);
			$(this).parent().parent().remove();
		});

// =====================tab5============
	


		// =======新增物品計算總價=======
		var trs= $('#confirm tr');
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
		

		var trs1= $('#confirm1 tr');
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
