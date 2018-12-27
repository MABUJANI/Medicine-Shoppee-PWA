(function(w) {
var OB = {}, d = w.document, vars;

function getUrlVars() {
  var vars = [], hash, href= window.location.href,
      hashes = href.slice(href.indexOf('?') + 1).split('&');

  for(var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

vars = getUrlVars();

OB.appURL = decodeURIComponent(vars.appurl);

OB.openView = function(viewName, params) {
  var iframe = d.getElementById('proxy'), actionURL, i, querystring = '';

  if(!iframe || !OB.appURL) {
    return;
  }

  querystring += 'viewname=' + encodeURIComponent(viewName) + '&';  

  if(params) {
    for(i in params) {
      if(params.hasOwnProperty(i)) {
        querystring += i + '=' + encodeURIComponent(params[i]) + '&';
      }
    }
  }
  
  actionURL = OB.appURL + 'web/org.openbravo.client.myob/proxy.html' + (querystring ? '?' + querystring : '');

  iframe.setAttribute('src', actionURL);

  return false;
};

w.OB = OB;

}(this));
