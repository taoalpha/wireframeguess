$(document).ready(function(){
	defaultvalue = "Guess this wireframe belong to which site? Use xxx.xxx.com or xxx.com";
	resultsdata = {
		0:["baidu.com","www.baidu.com"],
		1:["qq.com","www.qq.com"],
		2:["weibo.com","www.weibo.com"],
		3:["renren.com","www.renren.com"],
		4:["taobao.com","www.taobao.com"],
		5:["douban.com","www.douban.com"],
		6:["zhihu.com","www.zhihu.com"]
	};
	function GoNext(){
		var wid = parseInt($('div.wireframe').attr('data-id'));
		if(wid<Object.keys(resultsdata).length-1){
			$('input.guess').val('');
			$('div.hint').fadeOut(10);
			$('div.sitescreen').hide();
			$('div.wireframe').fadeIn(300);
			$('div.wireframe').attr('data-id',wid+1);
			var newimg = "images/"+(wid+1)+".png";
			var newrimg = "images/"+(wid+1)+"-o.png";
			$('img#wf').attr('src',newimg);
			$('img#sc').attr('src',newrimg);
		}else{
			$('div.hint').show().html("<h2 class='success center'>Awesome!! You have answered all the questions!!</h2>")
		}
	}
	$('input').focusin(function(){
		$(this).val('');
	})
	$('input').focusout(function(){
		if($(this).val()==""){
			$(this).val(defaultvalue);
		}
	})
	$('input').keypress(function(e){
		if ( e.which == 13 ) {
			$('div.check').trigger('click');
		  }
	})
	$('div.check').on('click',function(){
		var text = $('input.guess').val();
		var wid = $('div.wireframe').attr('data-id');
		if(text==defaultvalue||text == ""){
			alert("please guess a site the wireframe represents.")
		}else{
			if(resultsdata[wid].indexOf(text)>-1){
				$('div.hint').show().html("<h2 class='success center'>You are RIGHT!! Congradulations!!</h2>")
				$('div.wireframe').fadeOut(1500);
				$('div.sitescreen').fadeIn(1000);
				setTimeout(function(){
					GoNext();
				},1500)
			}else{
				$('div.hint').show().html("<h2 class='fail center'>You are WRONG!! Try Again!!</h2>")
			}
		}
	});
})