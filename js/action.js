$(document).ready(function(e) {		

	$('.navbar').affix();

	$('.sideNavList').affix();

	$('#navbar').scrollspy();

	// invoke the carousel
	$('#myCarousel, #myCarouselTo').carousel({
	  	interval: false
	});

   

    // links to posts for team members

	var url = document.location.toString();

	if (url.match('#')) {
	    // Clear active item
	    $('#myCarouselTo .carousel-inner .item.active').removeClass('active');

	    // Activate item number #hash
	    $('.carousel-inner div:nth-child(' + parseInt(url.split('#')[1]) + ')').addClass('active');
	}

	$('#myCarouselTo').bind('slid', function (e) {
	    // Update location based on slide (index is 0-based)
	    window.location.hash = "#"+ parseInt($('#myCarouselTo .carousel-inner .item.active').index()+1);

	});



	$('.dropdown-toggle').dropdown();

	/* SLIDE ON CLICK */ 

	/**
	
		FOR ME:
		- get <a> tag from sliderNav
		- grab number from <a> tag of sliderNav
		- remove active class from previous li > a
		- add active class to new li > a
	
	**/
	
	$('.sliderNav > li > a').click(function() {

	    // grab href, remove pound sign, convert to number
	    var item = Number($(this).attr('href').substring(1));

	    // slide to number -1 (account for zero indexing)
	    $('#myCarousel').carousel(item - 1);

	    // remove current active class
	    $('.sliderNav .active').removeClass('active');

	    // add active class to just clicked on item
	    $(this).parent().addClass('active');

	    // don't follow the link
	    return false;
	});





	/* AUTOPLAY NAV HIGHLIGHT */

	/**
	
		FOR ME:
		- add eventListener to when myCarousel slides
		- remove active class from previous li > a
		- get index of current active item
		- add active class to new li > a
	
	**/
	

	// on 'slid' function
	$('#myCarousel').on('slid', function() {

	    // remove active class
	    $('.sliderNav .active').removeClass('active');

	    // get index of currently active item
	    var idx = $('#myCarousel .item.active').index();

	    // select currently active item and add active class
	    $('.sliderNav li:eq(' + idx + ')').addClass('active');

	});






    //nav <a> click and scroll to section
    $('.navbar-inner .nav ul li a').bind('click', function(e) {
        e.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top});
    });






	//click handler to make expandable menu uncollapse
	$('.nav a').on('click', function() {

		$('.btn-navbar').addClass('collapsed');
		$('.nav-collapse').removeClass('in').css('height', '0');

	});






	//#mission h2 resizing https://github.com/davatron5000/FitText.js
	$(".manifesto").fitText(1.9,
		{
			minFontSize: '20px',
			maxFontSize: '120px'
		}
	);





	//individual page h1 resizing https://github.com/davatron5000/FitText.js
	$(".bioName").fitText(0.5,
		{
			minFontSize: '30px',
			maxFontSize: '100px'
		}
	);


	// scroll to section
	// $('.nav li a').bind('click', function(e) {
 //        e.preventDefault();
 //        $('html,body').animate({scrollTop: $(this.hash).offset().top});
 //    });




	// $(function(){

	//     $(".dropdown li a").click(function(e){

	//     	e.preventDefault();

	//       	// remove active class
	//       	$('.dropdown .active').removeClass('active');

	//       	// switch name featured next to sort by:

	//       	$(".dropdown-toggle:first-child").text($(this).text());
	//       	$(".dropdown-toggle:first-child").val($(this).text());

	//       	// add active class to just clicked on item
	//     	$(this).parent().addClass('active');

	//    });

	// });





	//SPECIAL individual page h1 resizing https://github.com/davatron5000/FitText.js
	$(".nameSpecial").fitText(0.6,
		{
			minFontSize: '30px',
			maxFontSize: '100px'
		}
	);






});




/*
	Long way to write a Document ready function:
	$(document).ready(function(e) {
		//code here
	};

	Short way to write Document ready function:
	$(function () {
		//code here
	});

*/