<div id='header'>
	<nav class="navbar navbar-default">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand" href="/">DM Tools</a>
	    </div>
	    <div id="navbar" class="navbar-collapse collapse">
	      <ul class="nav navbar-nav">
	        <li><a href="/dmtool/home">Adventures</a></li>
	        <li><a href="">Bestiary</a></li>
	        <li><a href="">Treasury</a></li>
	      </ul>
	      <ul class="nav navbar-nav navbar-right">
	      	<?php if ($this->session->userdata("user_id")) { ?>
		        <li><a href="">Settings</a></li>
		        <li><a href="login.html">Logout</a></li>
	      	<?php }
      		else { ?>
	      		<li><a href="/dmtool/register">Register</a></li>
		        <li><a href="/">Login</a></li>
		      <?php } ?>
	      </ul>
	    </div>
	  </div>
	</nav>
</div>