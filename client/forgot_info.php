<?php
	$this->load->view("partials/header.php");
	$this->load->view("partials/navbar.php");
?>
<div class='container'>
	<div class="col-md-4 col-md-offset-4">
		<h1 class='text-center'>Forgot Info</h1>
		<form action="process.php" method="POST">
			<div class="form-group">
				<label>E-mail</label>
				<input type="email" class="form-control" name="email" placeholder="E-mail">
			</div>
			<a href="/">
				<button type="button"class="btn btn-danger">Cancel</button>
			</a>
			<button class="btn btn-primary float_right">Remind me!</button>
		</form>
	</div>
</div>
<?php
	$this->load->view("partials/footer.php");
?>