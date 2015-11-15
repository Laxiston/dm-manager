<?php
	$this->load->view("partials/header.php");
?>
<div id='wrapper'>
<?php
	$this->load->view("partials/navbar.php");
?>
	<div id='content' class='container text-center'>
		<div id="content_header">
			<h1 class="text-center">Adventure Selection</h1>
			<hr>
		</div>
		<div id="adventure_list">
			<div class="row">
				<div class="col-md-8 col-md-offset-2">
					<a class="new_adventure_overlay_open" style="text-decoration: none;" href="#new_adventure_overlay">
						<div id="new_adventure" class="well well-sm">
							<h2>Create New Adventure</h2>
						</div>
					</a>
				</div>
			</div>
			<div class="row">
				<div class="col-md-8 col-md-offset-2">
					<div class="well well-sm">
						<div class="row">
							<div class="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1">
								<h2>My Adventure</h2>
							</div>
							<div class="col-md-1 col-xs-1">
								<a href="#remove_adventure_overlay_dm" class="btn btn-danger float_right remove_adventure_overlay_dm_open"><span class="glyphicon glyphicon-remove"></span></a>
							</div>
						</div>
						<p>Playing with Yeti, Jake, Brushgatherer, Jeffrey, Morgana, and Agore with <span class="orange">you</span> as DM</p>
						<h6>The adventure began on 1/2/15 and has lasted 5 days, 6 hours, 3 minutes</h6>
						<a href="#invite_players_overlay" class="btn btn-primary float_left invite_players_overlay_open">Invite Players</a>
						<a href="/dmtool/adventure_view" class="btn btn-success float_right">Continue Adventure</a>
						<!-- Hack to make well encompass the buttons -->
						<div class="row"></div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-8 col-md-offset-2">
					<div class="well well-sm">
						<div class="row">
							<div class="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1">
								<h2>Leshrac's Adventure</h2>
							</div>
							<div class="col-md-1 col-xs-1">
								<a href="#remove_adventure_overlay" class="btn btn-danger float_right remove_adventure_overlay_open"><span class="glyphicon glyphicon-remove"></span></a>
							</div>
						</div>
						<p>Playing with <span class="orange">you</span>, Jake, Brushgatherer, Jeffrey, Morgana, and Agore with Leshrac as DM</p>
						<h6>The adventure began on 1/2/15 and has lasted 5 days, 6 hours, 3 minutes</h6>
						<a href="#invite_players_overlay" class="btn btn-primary float_left invite_players_overlay_open">Invite Players</a>
						<a href="/dmtool/adventure_view" class="btn btn-success float_right">Continue Adventure</a>
						<!-- Hack to make well encompass the buttons -->
						<div class="row"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!--New Adventure Overlay: make sure to change all CLASSNAMES as well as IDs-->
<div id="new_adventure_overlay" class="well">
	<div class="container-fluid">
		<form>
			<div class="form-group">
				<label><h4>What would you like to call your new adventure?</h4></label>
				<input type='text' placeholder='Adventure Name' class='form-control' name="adventure_name" required>
			</div>
			<button type="button" class="new_adventure_overlay_close btn btn-danger">Cancel</button>
			<button class="new_adventure_overlay_close btn btn-success float_right">Create</button>
		</form>
	</div>
</div>

<!-- Invite Players Overlay -->
<div id="invite_players_overlay" class="well">
	<div class="container-fluid">
		<form>
			<div class="form-group">
				<label><h4>Who would you like to invite to this adventure?</h4></label>
				<input type='text' placeholder='Enter player name(s)' class='form-control' name="player_invite_list" required>
				<br>
				<input type='text' placeholder='Enter email(s)' class='form-control' name="player_invite_list" required>
			</div>
			<button type="button" class="invite_players_overlay_close btn btn-danger">Cancel</button>
			<button class="invite_players_overlay_close btn btn-success float_right">Invite</button>
		</form>
	</div>
</div>

<!-- Remove Adventure Overlay -->
<div id="remove_adventure_overlay" class="well">
	<div class="container-fluid">
		<form>
			<div class="form-group">
				<h4>Confirm Delete</h4>
				<p>Are you sure you want to leave this adventure?</p>
			</div>
			<button type="button" class="remove_adventure_overlay_close btn btn-danger">Cancel</button>
			<button class="remove_adventure_overlay_close btn btn-success float_right">Confirm</button>
		</form>
	</div>
</div>

<!-- DM Remove Adventure Overlay -->
<div id="remove_adventure_overlay_dm" class="well">
	<div class="container-fluid">
		<form>
			<div class="form-group">
				<h4>Confirm Delete</h4>
				<p>Are you sure you want to leave this adventure?</p>
				<p>Because you are the DM, leaving this adventure will delete the adventure for all players in it as well. If you are okay with this, click confirm.</p>
			</div>
			<button type="button" class="remove_adventure_overlay_dm_close btn btn-danger">Cancel</button>
			<button class="remove_adventure_overlay_dm_close btn btn-success float_right">Confirm</button>
		</form>
	</div>
</div>
<?php
	$this->load->view("partials/footer.php");
?>