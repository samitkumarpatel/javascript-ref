(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['create'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"/student/post\" method=\"POST\">\n<div class=\"col-xs-4\">\n        <h2>create student</h2>\n        <div class=\"form-group has-success\">\n            <label class=\"control-label\" for=\"inputSuccess1\">Name</label>\n            <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control input-lg\" id=\"inputSuccess1\" aria-describedby=\"helpBlock2\">\n        </div>\n        <div class=\"form-group has-success\">\n            <label class=\"control-label\" for=\"inputSuccess1\">Designation</label>\n            <input type=\"text\" id=\"designation\" name=\"designation\" class=\"form-control input-lg\" id=\"inputSuccess2\" aria-describedby=\"helpBlock2\">\n        </div>\n        <div class=\"form-group has-success\">\n            <label class=\"control-label\" for=\"inputSuccess1\">Address</label>\n            <input type=\"text\" id=\"address\" name=\"address\" class=\"form-control input-lg\" id=\"inputSuccess3\" aria-describedby=\"helpBlock2\">\n        </div>\n        <div class=\"form-group has-success\">\n            <label class=\"control-label\" for=\"inputSuccess1\">Other details</label>\n            <input type=\"text\" id=\"other\" name=\"other\" class=\"form-control input-lg\" id=\"inputSuccess4\" aria-describedby=\"helpBlock2\">\n        </div>\n        <button type=\"submit\" id=\"ok\" class=\"btn btn-primary btn-lg active\">Oki</button>\n        <button type=\"reset\" id=\"reset\" class=\"btn btn-default btn-lg active\">Re-set</button>\n   </div>\n</form>";
},"useData":true});
templates['error'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"alert alert-danger\" role=\"alert\">\n    <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n    <b>status : "
    + alias4(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"status","hash":{},"data":data}) : helper)))
    + "</b><br/>\n    <span><u>error details:</u> "
    + alias4(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"error","hash":{},"data":data}) : helper)))
    + "</span>\n</div>";
},"useData":true});
templates['footer'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <a href=\""
    + alias4(((helper = (helper = helpers.footerUrl || (depth0 != null ? depth0.footerUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footerUrl","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.footerText || (depth0 != null ? depth0.footerText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"footerText","hash":{},"data":data}) : helper)))
    + "</a> |\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<hr/>\n<footer>\n    <p>footer @ footer.com</p>\n";
  stack1 = ((helper = (helper = helpers.footer || (depth0 != null ? depth0.footer : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"footer","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.footer) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</footer>";
},"useData":true});
templates['index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Hello World!</h1>\n        <h2>Welcome to you all !!</h2>\n                <h3>Have a nice day!!!</h3>";
},"useData":true});
templates['layout'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"row\">\n"
    + ((stack1 = container.invokePartial(partials.menu,depth0,{"name":"menu","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n\n<div class=\"row\">\n "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</div>\n\n<div class=\"row\">\n"
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});
templates['menu'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "            <ul class=\"nav navbar-nav\">\n";
  stack1 = ((helper = (helper = helpers.dropdown || (depth0 != null ? depth0.dropdown : depth0)) != null ? helper : alias2),(options={"name":"dropdown","hash":{},"fn":container.noop,"inverse":container.program(2, data, 0),"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.dropdown) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helper = (helper = helpers.dropdown || (depth0 != null ? depth0.dropdown : depth0)) != null ? helper : alias2),(options={"name":"dropdown","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.dropdown) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </ul>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <li id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"><a href=\""
    + alias4(((helper = (helper = helpers.linkUrl || (depth0 != null ? depth0.linkUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkUrl","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, buffer = 
  "                <li class=\"dropdown\">\n                    <a href=\""
    + alias4(((helper = (helper = helpers.linkUrl || (depth0 != null ? depth0.linkUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkUrl","hash":{},"data":data}) : helper)))
    + "\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " <span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n";
  stack1 = ((helper = (helper = helpers.subnav || (depth0 != null ? depth0.subnav : depth0)) != null ? helper : alias2),(options={"name":"subnav","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.subnav) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    </ul>\n                </li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                        <li id=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"><a href=\""
    + alias4(((helper = (helper = helpers.linkUrl || (depth0 != null ? depth0.linkUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkUrl","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">Brand</a>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n";
  stack1 = ((helper = (helper = helpers.navigation || (depth0 != null ? depth0.navigation : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"navigation","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.navigation) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">You are not loggedin <span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">login</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>";
},"useData":true});
templates['page1'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Page1 welcomes you!!</h1>\n        <h3>Hi page 3, how are you doing ?</h3>";
},"useData":true});
templates['title'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "app | "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)));
},"useData":true});
})();