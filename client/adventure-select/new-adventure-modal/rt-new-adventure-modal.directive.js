// (function () {
// 	'use strict';

// 	angular
// 		.module('app')
// 		.directive('rtNewAdventureModal', newAdventureModal);

// 	function newAdventureModal() {

// 		// FIXME: created a template string for the HTML because of cross-origin policy errors when using templateUrl

// 		var templateString = `
// 			<div>
// 			  <script type="text/ng-template" id="new_adventure_modal.html">
// 			  	<div class="modal-header">
// 					  <h3 class="modal-title">New adventure!</h3>
// 					</div>
// 					<div class="modal-body">
// 						<form>
// 							<div class="form-group">
// 								<label><h4>What would you like to call your new adventure?</h4></label>
// 								<input type='text' placeholder='Adventure Name' class='form-control' name="adventure_name" required>
// 							</div>
// 							<div class="form-group">
// 								<h4>Are you the DM?</h4>
// 								<input type='checkbox' id="adventure_dm" name="adventure_dm" required>
// 								<label for="adventure_dm">Yes</label>
// 							</div>
// 						</form>
// 					</div>
// 					<div class="modal-footer">
// 						<div class="row">
// 						<div class="col-md-12">
// 					    <button class="btn btn-danger" ng-click="vm.cancel()">Cancel</button>
// 					    <a class="btn btn-success" ng-click="vm.ok()" ui-sref="home.create_char">Create</a>
// 						</div>
// 						</div>
// 					</div>
// 			  </script>
// 			  <a style="text-decoration: none;" href="" ng-click="vm.open()">
// 					<div class="well well-sm">
// 						<h2>Create New Adventure</h2>
// 					</div>
// 				</a>
// 			</div>
// 		`


// 	  var directive = {
// 	  	restrict: "EA",
// 	  	template: templateString,
// 	  	controller: "NewAdventureModalController",
// 	  	controllerAs: "vm",
// 	  };

// 	  return directive;
// 	}
// })();