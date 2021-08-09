"use strict";

(function() {

		var myApp = {

			mainNavigation : function() {

				var mainNav = $('#main-nav');

				function fixedNav() {

					var fixed_menu_offset_top = mainNav.offset().top,
							fixed_menu_height = mainNav.height(), 
							fixed = 0;

					var fixed_menu = function(){

					    var scroll_top = $(window).scrollTop();

					    if ((fixed == 0) && (scroll_top > fixed_menu_offset_top)) {
					    		mainNav.parent().addClass('fixed-nav');
					    		$('body').css('margin-top', fixed_menu_height);
					    		fixed = 1;
					    }

					    if ((fixed == 1) && (scroll_top < fixed_menu_offset_top)) {
					    	mainNav.parent().removeClass('fixed-nav');
				        $('body').css('margin-top', 0); 
				        fixed = 0;
					    }					  
					};

			    $(window).scroll(function() {
			         fixed_menu();
			    });
				
				}

				function mainNavSlide() {
					var menu = mainNav.find('ul'),
							more = mainNav.find('.nav-more'),
							mWidth = menu.parent().width(),
							mItems = menu.find('> li'),
							iCount = mWidth / 60,
							positions = mItems.length / iCount,
							current = 0,
							dots = '';

					for(var i = 0; i < positions; i++){
						dots = dots + '<i class="menu-slide">&#9679;</i>';
					}
						
					more.find('span').append(dots);
					more.find('span > i:first-child').addClass('active');

					function slideNav() {
						var css1 = {},
								dir = rtl ? 'margin-right' : 'margin-left';

						if (current + 1 <= positions) {
							current++;
							css1[dir] = -(current * (Math.round(iCount) * 60));
							menu.animate(css1);
							more.find('span > i').removeClass('active');
							more.find('span > i').eq(current).addClass('active');
						} else {
							current = 0;
							css1[dir] = 0;
							menu.animate(css1);
							more.find('span > i').removeClass('active');
							more.find('span > i').eq(current).addClass('active');
						}
					}

					more.on(clickEvent, function(e){
						e.stopPropagation();
						e.preventDefault();
						slideNav();
					});

					menu.on('swipe', function(){
						slideNav();
					});
				}

				mainNav.find('button.nav-settings').on(clickEvent, function(){
					$.fancybox({
						maxWidth	: 330,
						padding: 0,
						title:  null,
						type	: 'ajax',
						href : 'settings-app.html',
						modal: true,
						'afterShow' : function(){

							$('#appSettings').find('.dropdown-toggle').dropdown();
							
							myApp.dropdownScroll($('#appSettings'));

							$('#closer').on(clickEvent, function(){
								parent.$.fancybox.close();
							});
						}
					})
				});

				mainNav.on('click', 'ul > li > a', function(e){
					e.stopPropagation();
					e.preventDefault();
				    var target = this.hash,
				        $target = $(target);

				    $('html, body').stop().animate({
				        'scrollTop': $target.offset().top - 80
				    }, 500, 'swing', function () {
				    });

				    mainNav.find('a').removeClass('active');
				    $(this).addClass('active');	
				});
				
				mainNavSlide();
				fixedNav();

			},

			boxActions : function(box) {
				
				if(!Modernizr.csstransitions) { 
            $(box).find('.box-full').hide();
            $(box).find('.box-menu').css('opacity', 0);

            $(box).on(clickEvent, 'button.maxsize', function(e) {
            	e.stopPropagation();
            	e.preventDefault();

            	var thisBox = $(e.delegateTarget),
            		 	fullbox = thisBox.find('.box-full'),
            			boxmenu = fullbox.find('.box-menu');

            	if (thisBox.hasClass('open')) {
            			fullbox.slideUp(250 ,function(){
            			boxmenu.css('opacity', 0);
            			thisBox.removeClass('open');
            		});
            	} else {
            			fullbox.slideDown(250 ,function(){
            			boxmenu.fadeTo(150, 1);
            			thisBox.addClass('open');
            		});
            	}
            });

		      } else {
		      	$('button.maxsize').on('click touchstart', function(e) {
		      		e.stopPropagation();
		      		e.preventDefault();

		      		var thisBox = $(this).closest(box);

		      		if (thisBox.hasClass('open')) { 
		      			thisBox.removeClass('open completed');
		      		} else {
		      			thisBox.addClass('open');
		      			setTimeout(function() {
		      			    thisBox.addClass('completed');
		      			}, 300);
		      		}

		      		
		      	
		      	});
		      }

				$(box).on(clickEvent, 'button.fullsize', function(e){
					e.stopPropagation();
					e.preventDefault();
					$(e.delegateTarget).toggleClass('fullsize');
					$('body').toggleClass('fullsize-lock');
				});


	      $('button.help').on(clickEvent, function(e){
	      	e.stopPropagation();
	      	e.preventDefault();
	      	$.fancybox('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel sapien nec lacus scelerisque adipiscing. Nullam facilisis ornare ante suscipit rhoncus. <br>Sed sed sapien non urna fringilla placerat vel adipiscing libero. Etiam dui mauris, viverra ac hendrerit a, pulvinar eu ipsum. Aliquam mattis accumsan rhoncus. Vivamus mattis consequat rutrum. <br>Aliquam erat volutpat.Pellentesque magna nunc, dapibus sit amet fermentum in, facilisis eget sem.</p>');
	      });

 				$('button.settings').on(clickEvent, function(e){
 					e.stopPropagation();
 					e.preventDefault();
 					$.fancybox({
						maxWidth	: 330,
						padding: 0,
						title:  null,
						type	: 'ajax',
						href : 'settings-box.html',
						modal: true,
						'afterShow' : function(){
							$('#closer').on(clickEvent, function(){parent.$.fancybox.close();}
						)}
					})
 				});

 				$('button.send, #app-footer .btn').on(clickEvent, function(e){
 					e.stopPropagation();
 					e.preventDefault();
 					$.fancybox({
						maxWidth	: 330,
						padding: 0,
						title:  null,
						type	: 'ajax',
						href : 'settings-export.html',
						modal: true,
						'afterShow' : function(){
							$('#closer').on(clickEvent, function(){parent.$.fancybox.close();}
						)}
					})
 				});

			},

    	tableRowSelect : function() {

				var selTable = $('table.select');

				selTable.each(function(){

					var selRow = ($(this).hasClass('table')) ? 'tr:not(.details)' : '.table tr',
							rows = $(this).find(selRow);

					$(this).on(clickEvent, selRow, function() {
						rows.removeClass('selected');
						$(this).addClass('selected');
					});

				});
			},

			tableDetails : function(table) {

				var table = $(table);
				
				table.find('div').hide();
				
					var rows = table.find(' > tbody > tr:not(.details)');

					for(var x = 0; x < rows.length; x++) {
							
							if (x % 2 == 0) {
								rows.eq(x).addClass('even');
							}
					}
			
				table.on(clickEvent, 'tr.master button.toggle-row' ,function(e) {
					e.stopPropagation();
					e.preventDefault();
					var details = $(this).closest('tr.master').next();
					if (!details.find('> td > div').hasClass('open')) {
						details.find('> td > div').slideDown('fast').addClass('open');
						$(this).addClass('open');
					} else {
						details.find('div').slideUp('fast').removeClass('open');
						details.find('button.toggle-row').removeClass('open');
						$(this).removeClass('open');
					}

					return false;
				});

			},

			ticker : function(ticker)	{

				var speed = 4,
		    		items, ticker = $(ticker),
		    		width = 0;

		    ticker.children().each(function(){
		        width += $(this).outerWidth(true);
		    });

		    ticker.css('width', width);
		    
		    scroll();
		    
		    function scroll(){
		        items = ticker.children();
		        var scrollWidth = items.eq(0).outerWidth();
		        if (rtl == true) {
		        	ticker.animate({'right' : 0 - scrollWidth}, scrollWidth * 100 / speed, 'linear', changeFirstRight);
		        } else {
		        	ticker.animate({'left' : 0 - scrollWidth}, scrollWidth * 100 / speed, 'linear', changeFirstLeft);
		        }
		        
		    }
		    function changeFirstLeft(){
		        ticker.append(items.eq(0).remove()).css('left', 0);
		        scroll();
		    }
        
        function changeFirstRight(){
            ticker.append(items.eq(0).remove()).css('right', 0);
            scroll();
        }

		    $('#act button.maxsize').on(clickEvent, function() {
		    	ticker.stop();
		    });

    	},			

			act : function() {

				$('.story-comment, .story-edit').fancybox({
					href : '#act-comment'
				});
				
				myApp.ticker('#act-stories-ticker .wrapper');

			},

			checks : function() {

				$('.add-location').fancybox({
					href : '#add-location'
				});
				
			},

			compare : function() {

				var compNav = $('#compareNav').attr('dir', 'ltr');

				compNav.on(clickEvent, 'a', function(){return false;});

					var myScroll = new iScroll('compareNav', {
								hScrollbar: true,
								vScrollbar: false,
								snap: true,
								momentum: false,
								scrollbarClass: 'myScrollbar' });
			},

			cso : function() {


				var csoData = 	{
													"dinein" : {
															9 : {
																"name" : "SEP 2012",
																"data" : ["56% (8.9)", "76% (18.9)", "56% (8.9)", "76% (18.9)", "56% (8.9)", "76% (18.9)", "56% (8.9)", "76% (18.9)"]
															}, 
															10 : {
																"name" : "OCT 2012",
																"data" : ["48% (2.6)", "98% (72.6)", "48% (2.6)", "98% (72.6)", "48% (2.6)", "98% (72.6)", "48% (2.6)", "98% (72.6)",]
															},
															11 : {
																"name" : "NOV 2012",
																"data" : ["15% (3.1)", "65% (43.1)", "15% (3.1)", "65% (43.1)", "15% (3.1)", "65% (43.1)", "15% (3.1)", "65% (43.1)", ]
															}
													},
													"mcdrive" : {
															9 : {
																"name" : "SEP 2012",
																"data" : ["56% (8.9)", "76% (18.9)", "56% (8.9)", "76% (18.9)", "56% (8.9)", "76% (18.9)", "56% (8.9)", "76% (18.9)"]
															}, 
															10 : {
																"name" : "OCT 2012",
																"data" : ["48% (2.6)", "98% (72.6)", "48% (2.6)", "98% (72.6)", "48% (2.6)", "98% (72.6)", "48% (2.6)", "98% (72.6)",]
															},
															11 : {
																"name" : "NOV 2012",
																"data" : ["15% (3.1)", "65% (43.1)", "15% (3.1)", "65% (43.1)", "15% (3.1)", "65% (43.1)", "15% (3.1)", "65% (43.1)", ]
															}
													}
												};
				   
				$('.cso-table-nav').on(clickEvent, function(e){
					e.stopPropagation();
					e.preventDefault();

					var month = ($(this).data('dir') == "prev") 
											? parseInt($(this).parent().attr('data-month')) - 1 
											: parseInt($(this).parent().attr('data-month')) + 1,
							source = csoData[$(this).parent().data('cso')];

					if (source[month]) {
						$('td.' + $(this).parent().data('cso')).each(function (index) {
						    $(this).html(source[month]["data"][index]);
						});
						$(this).parent().attr('data-month', month);
						$(this).siblings('.month').html(source[month]["name"]);
					}	else {
						return false;
					}
				});

			},

			timeProgress : function() {
				
				progressMe($('.bar-wrapper'));
				progressMe($('.bar'));

				function progressMe(el) {
					el.each(function(){
						$(this).css({width: $(this).data('progress')});
					});
				};


				$('#timeTable').on('click', 'a.time-table-nav', function(e){
						$(e.delegateTarget).toggleClass('nextColumns');					
				}); 
				
			},

			locationMap : function() {

				$('.location-map a').fancybox({
					href : '#location-info'
				});
				
			},

			gallery : function() {

				var current = 0,
					$preview = $( '#preview' ),
					$carouselEl = $( '#carousel' ),
					$carouselItems = $carouselEl.children(),
					carousel = $carouselEl.elastislide( {
						current : current,
						minItems : 3,
						onClick : function( el, pos, evt ) {

							changeImage( el, pos );
							evt.preventDefault();

						},
						onReady : function() {

							changeImage( $carouselItems.eq( current ), current );
							
						}
					} );

				function changeImage( el, pos ) {

					$preview.attr( 'src', el.data( 'preview' ) );
					$carouselItems.removeClass( 'current-img' );
					el.addClass( 'current-img' );
					carousel.setCurrent( pos );

				}

			},

			dropdownScroll : function(context) {

				var context = context ? context.find('.dropdown-menu > ul') : $('.dropdown-menu > ul');

				context.each(function() {
					if (this.children.length > 5) {
						$(this).addClass('has-scroll');
					}
				});
			}

	  };

	  	if (Modernizr.touch){
	  	   var clickEvent = 'touchstart';
	  	} else {
	  	   var clickEvent = 'click';
	  	}

	  	if ($('html').attr('dir') == 'rtl') {
	  		var rtl = true;
	  	}

	  	$('input, textarea').placeholder();

	  	myApp.mainNavigation();
	  	myApp.tableDetails('table.detailed');
	   	myApp.boxActions('.box, .box2');
	   	myApp.tableRowSelect();
			myApp.act();
			myApp.checks();
			myApp.compare();
			myApp.cso();
			myApp.timeProgress();
			myApp.locationMap();
			myApp.gallery();
			myApp.dropdownScroll();

}());