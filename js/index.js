$( window ).scroll(function() {
	var height = $(window).scrollTop();
	
	if($(window).width() > 739) {     
  	//Add your javascript for large screens here
  		if(height>=900){
			$( ".navbar-default" ).css( "background-color", "#DBDAD9" );
			$( ".navbar-fixed-top *" ).css( "background-color", "#DBDAD9" );
			//$("#logo").attr("src","img/logo.png");
		}else{
			$( ".navbar-default" ).css( "background-color", "transparent" );
			$( ".navbar-fixed-top *" ).css( "background-color", "transparent" );
		}
	}
	if($(window).width() < 739) {
		//alert("z");
	  //Add your javascript for small screens here
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