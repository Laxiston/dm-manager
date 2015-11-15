<?php
	$this->load->view("partials/header.php");
	$this->load->view("partials/navbar.php");
?>
<div class="float_right_abs btn btn-primary" id="show_nav"><span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span></div>
<div id="left" class="col-md-6 border tall">
	<?php
		if ($this->session->userdata("user_type") == "dm") {
			$this->load->view("partials/pages/adventure.php");
		}
		else {
			$this->load->view("partials/pages/character_stats.php");
		}
	?>
</div>
<div id="right" class="col-md-6 border tall">
	<?php
		if ($this->session->userdata("user_type") == "dm") {
			$this->load->view("partials/pages/bestiary.php");
		}
		else {
			$this->load->view("partials/pages/roleplay.php");
		}
	?>
</div>
<?php
	if ($this->session->userdata("user_type") == "dm") { ?>
		<!-- Make this into a disappearing footer -->
		<div class="btn-group">
	    <a href="/dmtool/?" class="btn btn-default">DM</a>
      <a href="/dmtool/?" class="btn btn-default">P1</a>
      <a href="/dmtool/?" class="btn btn-default">P2</a>
      <a href="/dmtool/?" class="btn btn-default">P3</a>
      <a href="/dmtool/?" class="btn btn-default">P4</a>
    </div>
<?php	} ?>
<?php
	$this->load->view("partials/footer.php");
?>