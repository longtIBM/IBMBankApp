/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 *  WL.Server.invokeHttp(parameters) accepts the following json object as an argument:
 *  
 *  {
 *  	// Mandatory 
 *  	method : 'get' , 'post', 'delete' , 'put' or 'head' 
 *  	path: value,
 *  	
 *  	// Optional 
 *  	returnedContentType: any known mime-type or one of "json", "css", "csv", "plain", "xml", "html"  
 *  	returnedContentEncoding : 'encoding', 
 *  	parameters: {name1: value1, ... }, 
 *  	headers: {name1: value1, ... }, 
 *  	cookies: {name1: value1, ... }, 
 *  	body: { 
 *  		contentType: 'text/xml; charset=utf-8' or similar value, 
 *  		content: stringValue 
 *  	}, 
 *  	transformation: { 
 *  		type: 'default', or 'xslFile', 
 *  		xslFile: fileName 
 *  	} 
 *  } 
 */

/**
 * @returns json list of items
 */
function getAccountDetails(interest) {

	var accountDetailsJSONstr = { "accountBalance" : "$3,052.11",
		  "accountName" : "No-Fee Checking",
		  "accountNumber" : "12345678901201",
		  "lastTenTrans" : [ { "accountNumber" : "12345678901201",
		        "transAmt" : "($27.62)",
		        "transDate" : "01/01/2014",
		        "transDesc" : "BuyStuffOnline.com",
		        "transType" : "Debit Card"
		      },
		      { "accountNumber" : "12345678901201",
		        "transAmt" : "($8.55)",
		        "transDate" : "01/01/2014",
		        "transDesc" : "Burger Champ, Hickson Drive, USA",
		        "transType" : "Debit Card"
		      },
		      { "accountNumber" : "12345678901201",
		        "transAmt" : "$104.70",
		        "transDate" : "01/03/2014",
		        "transDesc" : "ATM Check Deposit, Grand Central ATM",
		        "transType" : "Deposit"
		      },
		      { "accountNumber" : "12345678901201",
		        "transAmt" : "($100.00)",
		        "transDate" : "01/05/2014",
		        "transDesc" : "ATM Withdrawal, Grand Central ATM",
		        "transType" : "Withdrawal"
		      },
		      { "accountNumber" : "12345678901201",
		        "transAmt" : "($2.50)",
		        "transDate" : "01/05/2014",
		        "transDesc" : "ATM Fee, Grand Central ATM",
		        "transType" : "ATM Fee"
		      },
		      { "accountNumber" : "12345678901201",
		        "transAmt" : "($245.01)",
		        "transDate" : "01/07/2014",
		        "transDesc" : "5794",
		        "transType" : "Check"
		      },
		      { "accountNumber" : "12345678901201",
		        "transAmt" : "($11.25)",
		        "transDate" : "01/09/2014",
		        "transDesc" : "Pizza Amore, Phillidelphia Airport",
		        "transType" : "Debit Card"
		      },
		      { "accountNumber" : "12345678901201",
		        "transAmt" : "$2040.00",
		        "transDate" : "01/11/2014",
		        "transDesc" : "EFT Payroll Deposit ARGO Industries",
		        "transType" : "Deposit"
		      },
		      { "accountNumber" : "12345678901201",
		        "transAmt" : "($40.00)",
		        "transDate" : "01/11/2014",
		        "transDesc" : "ATM Withdrawal, Federal Bank Br9177",
		        "transType" : "Withdrawal"
		      },
		      { "accountNumber" : "12345678901201",
		        "transAmt" : "($2.50)",
		        "transDate" : "01/11/2014",
		        "transDesc" : "ATM Fee, Federal Bank Br9177",
		        "transType" : "ATM Fee"
		      }
		    ]
		};
	
	//return JSON.parse(accountDetailsJSONstr);
	return accountDetailsJSONstr;


}

/**
 * Example code for invoking a HTTP backend service 
 * @param account
 *          a string representing the account number
 * @returns json list of items

function getAccountDetails(account) {
	path = getPath(account);	
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path
	};	
	return WL.Server.invokeHttp(input);
}

//http://localhost:10080/MockService/mockservices/accountDetail/12345678901202/data.json

function getPath(account) {
	if (account == undefined || account == '') {
		account = '12345678901202';
	}
	return 'MockService/mockservices/accountDetail/' +account+ '/data.json';
}

**/