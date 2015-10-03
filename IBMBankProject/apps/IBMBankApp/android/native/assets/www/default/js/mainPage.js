
/* JavaScript content from js/mainPage.js in folder common */

$('#mainPage').on( 'pagecreate',function(event, ui){
	var dt = new Date();
	dt = dt.getTime() - 36*60*60*1000;
	dt = new Date(dt);	
	$("#timestamp").html("Last login: " + dt.toDateString() + " " + dt.toLocaleTimeString());	
	setTimeout(function(){
		$('#fund_porgress').animate({width:'70%'});			
		},500 );	
});

$("#mainPageBackBtn").on("click", function(e){
	console.log("mainPageBackBtn - click");
	$.mobile.changePage("#loginPage", {transition: "slide"});
});

$("#myAccountsBtn").on("click", function(e){
	console.log("myAccountsBtn - click");
	$.mobile.changePage("#accountPage", {transition: "slide"});
});


