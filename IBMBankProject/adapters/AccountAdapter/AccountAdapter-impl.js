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
function getAccounts(interest) {
	
var getAccountsJSONstr = { "accounts": [ 
            { "accountNumber": "12345678901201",
                "accountOwnerID": "98765",
                "accountName": "No-Fee Checking",
                "accountBalance": "3,052.11"
              },
              { "accountNumber": "12345678901206",
                "accountOwnerID": "98765",
                "accountName": "Money Market",
                "accountBalance": "22,491.66"
              }, 
              { "accountNumber": "12345678901210",
                "accountOwnerID": "98765",
                "accountName": "SilverSeries Credit Card",
                "accountBalance": "(1,101.98)"
              },  
              { "accountNumber": "12345678901202",
                "accountOwnerID": "98765",
                "accountName": "Deluxe Savings",
                "accountBalance": "949.06"
              } ]
           }; 

   //return JSON.parse(getAccountsJSONstr);
   return getAccountsJSONstr;
	
}

/**
 * Example code for invoking a HTTP backend service
 * @returns json list of items

function getAccounts() {
	path = getPath();
	
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path
	};
	
	
	return WL.Server.invokeHttp(input);
}

//http://localhost:10080/MockService/mockservices/listAccounts/123456789012/data.json

function getPath() {	
	return 'MockService/mockservices/listAccounts/123456789012/data.json';
}

**/