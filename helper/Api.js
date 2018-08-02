sap.ui.define([], function() {
  "use strict";

  var get = function(url, args) {
    args = (args) ? args : {};
    var payload = {
      url: url,
      type: "GET",
		headers: {
        "x-csrf-token":"fetch"
    	},
      dataType: args.dataType || 'json',
      contentType: args.contentType || 'application/json'
    };
    return jQuery.ajax(payload);
  };

  var post = function(url, data, Token, opts) {
  	opts = (opts) ? opts: {};
  	var payload = {
  		url: url,
  		type: "POST",
  		headers: {
        "x-csrf-token": Token
    	},
  		dataType: opts.dataType || 'json',
  		contentType: opts.contentType || 'application/json',
  		data: data
  	};
  	return jQuery.ajax(payload);
  };

  return {
    get: get,
    post: post
  };
});