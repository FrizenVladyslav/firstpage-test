$(function() {

	//slider

	$('.lvltwo-slider').slick({
		arrows: true,
		
		nextArrow: '<img class="slick-next"src="img/slider/arrow-r.png">',
		prevArrow: '<img class="slick-prev"src="img/slider/arrow-l.png">'
	});

	//popup

	$(document).ready(function(){
		$('.lvltwo-feedback').css('height', $(document).height()+"px");

	});
		
	$('#feedback-button').click(function(){
	
		$('.lvltwo-feedback').fadeIn();
		$(window).scroll(function(event) {
			$('.lvltwo-feedback-form').css('margin-top', $(window).scrollTop()+40).scroll();
		});
	})
	$('.lvltwo-feedback-close').click(function(){
		$('.lvltwo-feedback').fadeOut();
	});


	$(document).keydown(function(e) {
	    if( e.keyCode === 27 ) {
	       $('.lvltwo-feedback').fadeOut();
	    }

	});

	$('#feedback-submit').click(function(){
		$('.lvltwo-feedback-form input').each(function(index){
			var i = 0
			if($(this).eq(i).val()==''){
				$(this).eq(i).attr('placeholder', 'Поле обязалельно для заполнения');
				$(this).eq(i).css(
					'box-shadow', 'inset 2px 0px 16px 0px rgba(211,31,31,1)'
				);
				if($(this).attr('type')=='submit'){
					$(this).css(
					'box-shadow', 'none'
				);
				}
			}
		})
	})


	

	//pjax
	$(document).pjax('.lvltwo-pjax', '#lvltwo-pjax-container', {fragment:'#lvltwo-pjax-container'});


	//send form

	$(document).ready(function() {

		//E-mail Ajax Send
		$(".lvltwo-feedback-form").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function() {
				alert("Thank you!");
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
				}, 1000);
			});
			return false;
		});

	});

	$('.hamburger--stand-r').click(function(){
		$(this).toggleClass('is-active')
		$('.lvltwo-content-aside-spis').fadeToggle();
	});
	$('.hamburger--spring').click(function(){
		$(this).toggleClass('is-active')
		$('.lvltwo-nav ul').slideToggle();
	});

});
