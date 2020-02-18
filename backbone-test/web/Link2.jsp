<%@page language="java" pageEncoding="UTF-8"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:base-layout>       
    <h1>Link-2 navigation with backbone</h1> 
    
    <div class="col-xs-6 well" id="application-area-link2">
        
    </div>
    
    <div class="col-xs-2 well" style="margin-left: 10px;" id="application-side-bar">
        <a href="#tab2" id="next-btn" class="btn btn-success">
            <span>Next</span>
            <i class="glyphicon glyphicon-chevron-right"></i>
        </a>
        <br/><br/>
        <a href="#tab1" id="prev-btn" class="btn btn-success">
            <span>Prev</span>
            <i class="glyphicon glyphicon-chevron-left"></i>
        </a>
    </div>
    <script type="text/template" id="tab-1">
      <h2>Tab1 navigation</h2>      
    </script>
    
    <script type="text/template" id="tab-2">
      <h2>Tab2 navigation</h2>      
    </script>   
</t:base-layout>        

  
