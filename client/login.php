<?php
	$this->load->view("partials/header.php");
	$this->load->view("partials/navbar.php");
	$this->load->view("partials/flash_messages.php");
?>
<div class='container'>
	<div class="row">
		<div class="col-md-4 col-md-offset-4 col-xs-6 col-xs-offset-3">
			<h1 class='text-center'>DM Tool Login</h1>
			<form action="login" method="POST">
				<div class="form-group">
					<label>Username</label>
					<input type='text' class='form-control' name='username' placeholder='Username' required>
				</div>
				<div class="form-group">
					<label>Password</label>
					<input type="password" class="form-control" name="password" placeholder="Password" required>
				</div>
				<a href='' class='btn btn-primary float_right' id='login_button'>Let's play!</a>
				<input type='checkbox'> Remember me
				<a href='/dmtool/register' class="display_block">I need an account</a>
				<a href='/dmtool/forgot_info'>What's my login?</a>
				<a href='' class='text-center' id='info_link'><h4>What is this place?</h4></a>
			</form>
		</div>
	</div>
</div>
<?php
	$this->load->view("partials/footer.php");
?>