<?php
	$this->load->view("partials/header.php");
	$this->load->view("partials/navbar.php");
?>
<div class='container'>
	<div class="col-md-4 col-md-offset-4">
		<h1 class='text-center'>Register</h1>
		<form action="process.php" method="POST">
			<div class="form-group">
				<label>Username</label>
				<input type='text' class='form-control dark_field' name='username' placeholder='Username' required>
			</div>
			<div class="form-group">
				<label>E-mail</label>
				<input type="email" class="form-control" name="email" placeholder="E-mail" required>
			</div>
			<div class="form-group">
				<label>Password</label>
				<input type="password" class="form-control" name="password" placeholder="Password" required>
			</div>
			<div class="form-group">
				<label>Confirm Password</label>
				<input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required>
			</div>
			<a href="/">
				<button type="button"class="btn btn-danger ">Cancel</button>
			</a>
			<button class="btn btn-primary float_right">Register</button>
		</form>
	</div>
</div>
<?php
	$this->load->view("partials/footer.php");
?>