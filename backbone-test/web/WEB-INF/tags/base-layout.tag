<%@tag description="put the tag description here" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/public/bootstrap/css/bootstrap.min.css"/>
    <link type="text/css" rel="stylesheet" href="${pageContext.request.contextPath}/public/bootstrap/css/bootstrap-theme.min.css"/>    
  </head>
  <body>      
    <div class="container">
        <div class="row" id="header">
            <%@include file="header.jsp" %>
        </div>
        <div class="row" id="container">
            <jsp:doBody/>
        </div>
        <div class="row" id="footer">
            <footer>
                <small>footer @ footer ....</small>
            </footer>
        </div>
    </div>   
        <script type="text/javascript" src="${pageContext.request.contextPath}/public/javascript/thirdparty/jquery-1.12.0.min.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/public/bootstrap/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/public/javascript/thirdparty/underscore.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/public/javascript/thirdparty/backbone.js"></script>        
        <script type="text/javascript" src="${pageContext.request.contextPath}/public/javascript/application/application1.js"></script>        
  </body>
</html>

