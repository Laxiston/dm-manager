<div class="container">
  <div class="row">
    <div class="col-md-5 col-md-offset-1">
      <div id='errors'>
      <?php 
        if($this->session->flashdata('errors'))
        {
          foreach($this->session->flashdata('errors') as $value)
          { ?>
            <p><?= $value ?></p>
      <?php   }
          } ?>
      </div>
      <div id='success'>
      <?php 
        if($this->session->flashdata('success'))
        {
          foreach($this->session->flashdata('success') as $value)
          { ?>
            <p><?= $value ?></p>
      <?php
          }
        } ?>
      </div>
    </div>
  </div>
</div>