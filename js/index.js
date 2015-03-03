// function explore(form){
// 	//document.getElementById(form).innerHTML = "VIEW GALLERY";
// 	//$('#'+form).text("VIEW GALLERY").fadeIn(1000);
// 	function(){
//        $('#'+form).fadeOut("slow", function(){
//                 $('#'+form).html("Good Bye")
//             }).fadeIn("slow");
// }
// $("#explore").hover(
//    function() {
//        $(this).fadeIn(2500,function(){ 
//                 $(this).html("View GALLERY")
//             });
// });
var addup = 0;
$( window ).scroll(function() {
	var height = $(window).scrollTop();
	if(height>=900){
		$( ".navbar-default" ).css( "background-color", "#DBDAD9" );
		$( ".navbar-fixed-top *" ).css( "background-color", "#DBDAD9" );
	}
});