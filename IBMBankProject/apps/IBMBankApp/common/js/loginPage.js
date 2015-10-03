// var sourcePage="#mainPage";

$("#loginUsername").on("keyup", function(e) {
	checkForLogin();
});

$("#loginPwd").on("keyup", function(e) {
	checkForLogin();
});

$('#loginPage').on('pagehide', function(event, ui) {
	$("#loginUsername").val("");
	$("#loginPwd").val("");
	$("#loginBtn").addClass("ui-disabled");
});

function checkForLogin() {
	if ($("#loginUsername").val().length > 1 && $("#loginPwd").val().length > 1) {
		$("#loginBtn").removeClass("ui-disabled");

	} else if ($("#loginUsername").val().length < 2
			|| $("#loginPwd").val().length < 2) {
		$("#loginBtn").addClass("ui-disabled");
	}
}
