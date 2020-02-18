<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:Link-page-layout>
    
    <!-- application area-->
    <div class="col-xs-8 well" style="margin-right: 10px;">
       page-1
    </div>
    
    <!-- side bar-->
    <div class="col-xs-2">
        <div class="row">
            <a href="#" class="btn btn-info btn-block">
                Save
                <i class=""></i>
            </a>
        </div>
        <br/>
        
        <div class="row">
            <a href="${pageContext.request.contextPath}/Link/Link-index.jsp" class="btn btn-info btn-block">
                <i class="glyphicon glyphicon-chevron-left"></i>
                Previous</a>
        </div>
    </div>    
</t:Link-page-layout>