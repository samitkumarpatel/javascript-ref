<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:Link-page-layout>
    <!-- application area-->
    <div class="col-xs-8 well" style="margin-right: 10px;">
        <section id="main">
            <input id="" type="text" placeholder="what need to be done" class="input-lg"/>
        </section>
    </div>
    
    <!-- side bar-->
    <div class="col-xs-2">
        <div class="row">
            <a href="${pageContext.request.contextPath}/Link/Link-page-1.jsp" class="btn btn-info btn-block">
                Next
                <i class="glyphicon glyphicon-chevron-right"></i>
            </a>
        </div>
        <br/>
                
    </div>    
</t:Link-page-layout>
    