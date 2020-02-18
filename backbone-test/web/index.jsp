<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:base-layout>
    
    <div class="col-xs-8 well" style="margin-right: 10px;">
        index page
    </div>
    <div class="col-xs-2">
        <div class="row">
            <a href="#" class="btn btn-info btn-block">
                Next
                <i class="glyphicon glyphicon-chevron-right"></i>
            </a>
        </div>
        <br/>
        
        <div class="row">
            <a href="./Link-index.jsp" class="btn btn-info btn-block">
                <i class="glyphicon glyphicon-chevron-left"></i>
                Previous</a>
        </div>
    </div>
    
</t:base-layout>