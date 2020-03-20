</main>
	<?php 
	// END - CONTENT
	//////////////////////////////////////////////////
	?>
	
	
	<?php 
  //////////////////////////////////////////////////
  // START - FOOTER
  ?>
	<footer>

		<nav class="d-sm-block d-md-none fixed-bottom">
			<a href="#head" class="rounded-circle text-decoration-none scrollTo top"><span class="icn">arrow_upward</span></a>
			<div id="main" class="container-fluid py-2"><div class="row row-cols-5 text-center">
    		<a class="col text-decoration-none link" href="<?php echo $near_me_url; ?>"><span class="icn">place</span> Sites</a>
  			<a class="col text-decoration-none link" href="<?php echo $this->geronigo_mod->geronigo_link($settings,'events')?>"><span class="icn">people_alt</span> Events</a>
  			
  			<a href="/en/search" class="popup pp2 fab col text-decoration-none link"><div class="rounded-circle"><span class="icn">search</span></div></a>
  			
  			<a class="col text-decoration-none link" href="<?php echo $this->geronigo_mod->geronigo_link($settings,'vouchers')?>"><span class="icn">card_giftcard</span> Gifts</a>
  			<a class="col text-decoration-none link" href="<?php echo $this->geronigo_mod->geronigo_link($settings,'events')?>"><span class="icn">local_offer</span> Offers</a>
  		</div></div>
  		
		</nav>
	
	</footer>
	<?php 
	// END - FOOTER
	//////////////////////////////////////////////////
	?>
	
	<div class="slide-menu">
    
  	<div class="overlay"></div>
    	
    <div id="menu">
    
    	<?php 
  		//////////////////////////////////////////////////
  		// START - HEADER
  		?>
			<header class="container-fluid fixed-top">
			<div class="row align-items-center justify-content-start">
		
				<div id="mobimenu" class="col-auto py-3 py-md-4 d-lg-none d-block">
					<a href="<?php echo $this->geronigo_mod->geronigo_link($settings,'login')?>" class="d-inline-block close"><span class="icn">close</span></a>
				</div>
				
				<div class="col col-md-auto h-100">
					<p class="logo pl-xl-5 pr-xl-3 mb-0"><a href="<?php echo $index_url?>" title="homepage" class="text-decoration-none link" data-class="index"><?php //echo $settings['theme']; ?></a></p>
				
				</div>

			</div>
			</header>
			<?php 
			// END - HEADER
			//////////////////////////////////////////////////
			?>

    	<section class="s">
				
				<div class="row p-3 p-lg-0 pl-xl-5">
					
					<nav class="col-lg col-lg-auto mb-4 mb-lg-0 p-lg-5">

    						
				</nav>
					
				<div class="col-lg mb-4 mb-lg-0 p-lg-5">
					
				</div>
	
    	</div>
    	
    </section>
    
	</div>
	</div>
	<?php 
	// END - WRAP
	//////////////////////////////////////////////////
	?>


</body>
</html>