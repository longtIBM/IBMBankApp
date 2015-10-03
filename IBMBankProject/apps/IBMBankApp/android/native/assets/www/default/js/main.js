
/* JavaScript content from js/main.js in folder common */
function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 */    
	     WL.Client.connect({
	     		onSuccess: onConnectSuccess,
	     		onFailure: onConnectFailure
	     });
	
	// Common initialization code goes here
	
	function onConnectSuccess()
	{
		
		WL.App.hideSplashScreen();
		
		
		setTimeout(function() {
		    $.mobile.changePage("#loginPage", {transition: "slide"}); 
		}, 2000);
	}

	function onConnectFailure()
	{
	alert("failed to connect to server");
	}
	
	MQA.startNewSession(
			   {
			      mode: "QA", 
			      //or mode: "MARKET" for production mode
			      android: {
			         appKey: "1ge05dfcaadba9d508f876fae7929c8d3dcd923c83g0g1g5b800e24" ,
			         notificationsEnabled: true
					},
			      ios: {
			         appKey: "your_MQA_iOS_appKey" ,
			         screenShotsFromGallery: true,
			           }
				},
			       {
			      success: function () {console.log("Session Started successfully");},
			      error: function (string) { console.log("Session error" + string);}
				}
	);
	
}

/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}