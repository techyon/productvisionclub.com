var firstAnimation = false;
$(window).scroll(function() {
	var height = $(window).scrollTop();
	
	if($(window).width() > 739) {     
  	//for nav bar changing from tranparent to grey
  		if(height>=900){
			$( ".navbar-default" ).css( "background-color", "#DBDAD9" );
			$( ".navbar-fixed-top *" ).css( "background-color", "#DBDAD9" );
			//$("#logo").attr("src","img/logo.png");
		}else{
			$( ".navbar-default" ).css( "background-color", "transparent" );
			$( ".navbar-fixed-top *" ).css( "background-color", "transparent" );
		}

	//for animating icons float
		if(height>=1000&&!firstAnimation){
			firstAnimation = true;

			// $("#pencil").css({
			// 	 '-webkit-transform': 'translateX(-20px)',
   //               'transform': 'translateX(-20px)',
   //               '-webkit-transition-duration': '0.5s',
 		// 		 'transition-duration': '0.5s'
			// })
		}
		// setTimeout(function(){
		// 	$("#pencil").removeAttr('style');
		// }, 2000);

		// if(height>=1000){
		// 	$("#bubbles").css({
		// 		 '-webkit-transform': 'translateY(-20px)',
  //                'transform': 'translateY(-20px)'
		// 	})
		// }
		// setTimeout(function(){
		// 	$("#bubbles").removeAttr('style');
		// }, 2000);

		// if(height>=1000){
		// 	$("#space").css({
		// 		 '-webkit-transform': 'translateY(-20px)',
  //                'transform': 'translateY(-20px)'
		// 	})
		// }
		// setTimeout(function(){
		// 	$("#space").removeAttr('style');
		// }, 2000);
	}
	if($(window).width() < 739) {
	//for nav bar changing from tranparent to grey
	  	if(height>=200){
	  		$( ".navbar-default" ).css( "background-color", "#DBDAD9" );
			$( ".navbar-fixed-top *" ).css( "background-color", "#DBDAD9" );
	  	}else{
			$( ".navbar-default" ).css( "background-color", "transparent" );
			$( ".navbar-fixed-top *" ).css( "background-color", "transparent" );	
		}

	}
	console.log(height);
});


