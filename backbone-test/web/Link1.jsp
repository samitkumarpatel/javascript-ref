<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>
<t:base-layout>       
    <h1>Link-1 welcome</h1> 
    <div class="col-xs-6 well" id="application-area">
       <input type="text" placeholder="id of the person" id="id"/>
        <br/>
        <input type="text" placeholder="name of the person" id="name"/>
        <br/>
        <input type="text" placeholder="age" id="age"/>
        <br/>
        <input type="text" placeholder="type of the person" id="type"/> 
    </div>
    
    <div class="col-xs-2 well" style="margin-left: 10px;" id="application-side-bar">
        <a href="#" id="next-btn" class="btn btn-success">
            <span>Next</span>
            <i class="glyphicon glyphicon-chevron-right"></i>
        </a>
        <br/><br/>
        <a href="#" id="prev-btn" class="btn btn-success">
            <span>Prev</span>
            <i class="glyphicon glyphicon-chevron-left"></i>
        </a>
    </div>

</t:base-layout>
    <script type="text/template" id="result_template_page">
        <table class="table">
         <tbody>
             <tr>
                 <td>x</td>
                 <td>y</td>
                 <td>x</td>
                 <td>y</td>
             </tr>
         </tbody>
        </table> 
    </script>
