
/* JavaScript content from js/accounts.js in folder common */
var currentAccount = "";


/*
 * Account List
 */

$('#accountPage').on('pagebeforeshow', function() {
	doGetAccounts();
});


function doGetAccounts() {

	var invocationData = {
		adapter : "AccountAdapter",
		procedure : "getAccounts",
		parameters : []
	};
	var options = {
		onSuccess : doGetAccountsFinish,
		onFailure : doGetAccountsFinish
	};
	$.mobile.loading("show");
	WL.Client.invokeProcedure(invocationData, options);
}

function doGetAccountsFinish(result) {
	if (result.invocationResult.accounts.length > 0) {
		buildAccountList(result.invocationResult.accounts);
		$.mobile.loading("hide");
	} else {
		$.mobile.loading("hide");
		alert("Please try again later!");
	}
}

function buildAccountList(accounts) {
	console.log("in buildAccountList()");
	$("#accountList").empty();
	var item, i;
	for (i = 0; i < accounts.length; i++) {
		item = accounts[i];
		var html = "";
		html += "<h3 class='ui-li-heading'>" + item.accountName + "</h3>";
		html += "<p class='ui-li-desc'>" + item.accountNumber + "</p>";
		if (item.accountBalance.indexOf("(") > -1) {
			html += "<div class='rightText negative'>$" + item.accountBalance
					+ "</div>";
		} else {
			html += "<div class='rightText'>$" + item.accountBalance + "</div>";
		}
		var listItem = $('<li class="acctItem" acct_name="' + item.accountName
				+ '" data="' + item.accountNumber + '"><a href="#">' + html
				+ '</a></li>');
		$("#accountList").append(listItem);
	}
	$("#accountHeaderLabel").html("Account List");
	$('#accountList:visible').listview('refresh');
}

/*
 * click handler for Account List
 */

$('#accountList').on('click', 'li', function() {
	console.log("accountList - click >> li");
	currentAccount = $(this).attr("acct_name");
	var acctId = $(this).attr("data");
	
	$.mobile.loading("show");
	$.mobile.changePage("#accountDetailsPage", {
		transition : "slide"
	});
	
	doGetAccountDetailsStatic(acctId);  // uses array
	
//	doGetAccountDetails(acctId);        // uses Adapter
	
});

/*
 * Account Details
 */


function doGetAccountDetailsStatic(accountID) {
    var accountDetailsArray = [];
	accountDetailsArray[0] = {accountNumber: "0000000000", transDate: "MM/DD/YYYY", transType: "Transaction type 0", transDesc: "description 0", transAmt: "0.00"};
	accountDetailsArray[1] = {accountNumber: "0000000000", transDate: "MM/DD/YYYY", transType: "Transaction type 1", transDesc: "description 1", transAmt: "1.11"};	
	buildAccountDetailsList(accountDetailsArray);
}


function doGetAccountDetails(accountId) {
	var invocationData = {
		adapter : "AccountDetailsAdapter",
		procedure : "getAccountDetails",
		parameters : [ accountId ]
	};
	var options = {
		onSuccess : doGetAccountDetailsFinish,
		onFailure : doGetAccountDetailsFinish
	};
	$("#accountDetailsList").empty();
	WL.Client.invokeProcedure(invocationData, options);
}

function doGetAccountDetailsFinish(result) {
	if (result.invocationResult.lastTenTrans.length > 0) {
		buildAccountDetailsList(result.invocationResult.lastTenTrans);
	} else {
		$.mobile.loading("hide");
		alert("Please try again later!");
	}
}

function buildAccountDetailsList(accountDetails) {
	console.log("in buildAccountDetailsList()");
	var accountId = null;
	$("#accountDetailsList").empty();
	var item, i;
	for (i = 0; i < accountDetails.length; i++) {
		item = accountDetails[i];
		if (accountId == null)
			accountId = item.accountNumber;
		var dtDevider = '<li class="dateText" data-role="list-divider">'
				+ item.transDate + '</li>';
		$("#accountDetailsList").append(dtDevider);
		var html = "";
		html += "<h3 class='ui-li-heading'>" + item.transType + "</h3>";
		html += "<p class='ui-li-desc'>" + item.transDesc + "</p>";
		if (item.transAmt.indexOf("(") > -1) {
			html += "<div class='rightText negative'>" + item.transAmt
					+ "</div>";
		} else {
			html += "<div class='rightText'>" + item.transAmt + "</div>";
		}
		var listItem = $('<li><a href="#">' + html + '</a></li>');
		listItem.attr('data-icon', 'false');
		$("#accountDetailsList").append(listItem);
	}
	$("#accountDetailsHeaderLabel").html(currentAccount);
	$('#accountDetailsList:visible').listview('refresh');
	$.mobile.loading("hide");
}
