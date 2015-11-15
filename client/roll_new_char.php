<?php
	$this->load->view("partials/header.php");
	$this->load->view("partials/navbar.php");
?>
<div class='container'>
	<div class="row">
		<div class="col-md-8 col-md-offset-2">
			<h1 class="text-center">Create your character!</h1>
			<p>The next couple of pages will take you through a step-by-step process of rolling a new character in DnD. How you create your character is entirely up to you! You can select everything on your own, leave it all up to fate, or you can mix it up and have a mutt of a character. Normally there's a bunch of information to find and read when creating a character, but we've condensed it down and simplified the process for you! Here is an outline of the sections you will be going through:</p>

			<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
			  <div class="panel panel-default">
			    <div class="panel-heading" role="tab" id="headingOne">
			      <h4 class="panel-title">
			        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#class" aria-expanded="true" aria-controls="class">
			          <h4>Class</h4>
			        </a>
			      </h4>
			    </div>
			    <div id="class" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
			      <div class="panel-body">
			        Blurb about classes.
			      </div>
			    </div>
			  </div>
			  <div class="panel panel-default">
			    <div class="panel-heading" role="tab" id="headingOne">
			      <h4 class="panel-title">
			        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#background" aria-expanded="true" aria-controls="background">
			          <h4>Background</h4>
			        </a>
			      </h4>
			    </div>
			    <div id="background" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
			      <div class="panel-body">
			        Blurb about backgrounds.
			      </div>
			    </div>
			  </div>
			  <div class="panel panel-default">
			    <div class="panel-heading" role="tab" id="headingOne">
			      <h4 class="panel-title">
			        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#race" aria-expanded="true" aria-controls="race">
			          <h4>Race</h4>
			        </a>
			      </h4>
			    </div>
			    <div id="race" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
			      <div class="panel-body">
			        Blurb about races.
			      </div>
			    </div>
			  </div>
			  <div class="panel panel-default">
			    <div class="panel-heading" role="tab" id="headingOne">
			      <h4 class="panel-title">
			        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#rpg" aria-expanded="true" aria-controls="rpg">
			          <h4>Roleplaying</h4>
			        </a>
			      </h4>
			    </div>
			    <div id="rpg" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
			      <div class="panel-body">
			        Blurb about roleplaying.
			      </div>
			    </div>
			  </div>
			  <div class="panel panel-default">
			    <div class="panel-heading" role="tab" id="headingOne">
			      <h4 class="panel-title">
			        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#stats" aria-expanded="true" aria-controls="stats">
			          <h4>Stats</h4>
			        </a>
			      </h4>
			    </div>
			    <div id="stats" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
			      <div class="panel-body">
			        Blurb about stats.
			      </div>
			    </div>
			  </div>
			  <div class="panel panel-default">
			    <div class="panel-heading" role="tab" id="headingOne">
			      <h4 class="panel-title">
			        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#equipment" aria-expanded="true" aria-controls="equipment">
			          <h4>Equipment</h4>
			        </a>
			      </h4>
			    </div>
			    <div id="equipment" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
			      <div class="panel-body">
			        Blurb about equipment.
			      </div>
			    </div>
			  </div>
			</div>

			<div class="row">
				<div class="col-md-6 col-md-offset-3">
					<a href="confirm_char.html" class="btn btn-primary">RNJesus take the wheel</a>
					<a href="class_select.html" class="btn btn-success float_right">Let's get started!</a>
				</div>
			</div>
		</div>
	</div>
	<br>
</div>
<?php
	$this->load->view("partials/footer.php");
?>