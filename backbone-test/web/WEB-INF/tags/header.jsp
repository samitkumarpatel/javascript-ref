<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">brand image</a>
    </div>
    
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="./link1">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="${pageContext.request.contextPath}/Link1.jsp">Link-1</a></li>
        <li><a href="${pageContext.request.contextPath}/Link2.jsp">Link-2</a></li>
        <li><a href="#">Link-3</a></li>
      </ul>    
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action-1</a></li>
            <li><a href="#">Action-2</a></li>
            <li><a href="#">Action-3</a></li>
            <li><a href="#">Action-4</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>