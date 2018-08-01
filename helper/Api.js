sap.ui.define([], function() {
  "use strict";

  var get = function(url, args) {
    args = (args) ? args : {};
    var payload = {
      url: url,
      type: "GET",
      dataType: args.dataType || 'json',
      contentType: args.contentType || 'application/json'
    };
    return jQuery.ajax(payload);
  };

  return {
    get: get
  };
});
