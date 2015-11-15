<?php
	$this->load->view("partials/header.php");
	$this->load->view("partials/navbar.php");
?>
<div class='container text-center'>
	<div class="row">
		<div class="col-md-4 col-md-offset-4">
			<h1>Create Character</h1>
			<div>
				<a href='' class='btn btn-primary form-control'>I already have a character</a>
			</div>
			<br>
			<div>
				<a href='roll_new_char.html' class='btn btn-primary form-control'>I want to create a new character</a>
			</div>
		</div>
	</div>
</div>
<?php
	$this->load->view("partials/footer.php");
?>