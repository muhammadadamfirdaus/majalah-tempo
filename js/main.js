/*
==============
JS for - Majalah
Developed and Customized by
Muhammad Adam Firdaus
http://www.muhammadadamfirdaus.com/
==============
*/

$(function(){
  // PreLoad
  setTimeout(function removepreload(){
    $('#preload').hide();
    $('.container').css({'visibility':'visible'});
  }, 3000);

  // Go To
  $('a.go[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
    return false;
  });

  // RESPONSIVE STUFF
  function responsive(){
    window.responsive;
    $(window).on('resize', function(){
      clearTimeout(window.responsive);
      window.responsive = setTimeout(function(){
        mobile();
      }, 0);
    });
  }

  menumobile = $('<div id="menu-button" class="menu-mobile"><a href="#">Menu</a></div>');
  menumobileClone = menumobile.clone(true);
  menumobile.remove();

  function mobile(){
    var w = $(window).width();

    if(w <= 800) {
      // General Mobile Devices
      /* menu mobile */
      if($('#menu-button').length == 0){
        $('header > .col:nth-of-type(2)').prepend(menumobileClone);
      }
      mobileMenu();
      /* end menu mobile */
    } else {
      // Desktop Begin
      /* menu desktop */
      if($('#menu-button').length){
        resetmobileMenu();
      }

      $('.menu li').hover(function(){
        $(this).find('.sub').stop().slideDown(200);
      }, function(){
        $(this).find('.sub').stop().slideUp(200);
      });

      // Check for cover desktop has active
      if($('section.cover').hasClass('active')){
        setTimeout(function(){
          $('section.cover').removeClass('active');
        }, 7000);
      }
    }
  }

  mobile();
  $(window).on('load resize', responsive);
  /* end of responsive stuff */

  function resetmobileMenu(){
    $('.menu').removeClass('menu-collapsed menu-expanded');
    menubutton.removeClass('close');
    $('#menu-button').detach();
  }

  function mobileMenu(){
    menubutton = $('.menu-mobile');
    menu = $('.menu');

    if($('.menu-mobile a').filter(function() {
        return $.trim($.text(this)) === 'Close';
      }).length){
      $('.menu-mobile a').html('Menu');
    }

    function menumobileexpand(){
      if(menu.hasClass('menu-expanded')){
        menubutton.removeClass('close');
        removemenumobile();
      } else {
        menubutton.addClass('close');
        menu.addClass('menu-expanded').removeClass('menu-collapsed');
      }

      if($('.close').length){
        $('.menu-mobile a').html('Close');
      } else {
        $('.menu-mobile a').html('Menu');
      }
    }

    function removemenumobile(){
      if($('.menu-collapsed').length){
        menu.removeClass('menu-collapsed');
      } else {
        menubutton.removeClass('close');
        menu.removeClass('menu-expanded').addClass('menu-collapsed').delay(1000).queue(function(){
          $('.sub').css({'display':'none'});
        });
      }
    }

    removemenumobile();

    /* buka menu */
    $('.menu-mobile').on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();

      menumobileexpand();
      
      /* tutup menu */
      $(document).on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        if(e.target.className != 'menu-mobile'){
          removemenumobile();
        }
      });
    });

    /* klik link menunya */
    $('.menu a').off('click').on('click', function(e){
      e.stopImmediatePropagation();
      return true;
    });

    /* expand collapse sub menu */
    $('.has-sub').off('click').on('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      var submenu = $(this).find('.sub');
      $('.sub').not(submenu).css({'display':'none'});
      submenu.css({'display':'block'});
    });
  }

  /* search */
  var search = $('a.search');
  var searchBox = $('.search-box');
  search.on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    searchBox.addClass('active');
    $(document).on('click', function(e){
      if ($(e.target).closest(".search-box").length) {
        // console.log('di dalam');
      } else {
        searchBox.removeClass('active');
      }
    });
  });

  /* datepicker */
	var tanggalSearch = new Pikaday({
		field: document.getElementById('tanggal-search'),
		firstDay: 0,
		minDate: new Date(2011, 11, 31),
		maxDate: new Date,
		yearRange: [2000],
		container: document.getElementById('datepicker'),
		format: 'DD/MM/YYYY',
		toString(date, format) {
			// you should do formatting based on the passed format,
			// but we will just return 'D/M/YYYY' for simplicity
			var day = date.getDate();
			var month = date.getMonth() + 1;
			var year = date.getFullYear();

			if(day < 10){
				day = '0'+day;
			}
			if(month < 10){
				month = '0'+month;
			}
			var dmy = +year+'/'+month+'/'+day;
			// return `${day}/${month}/${year}`;
			return dmy;
		},
		parse(dateString, format) {
			// dateString is the result of `toString` method
			const parts = dateString.split('/');
			var day = parseInt(parts[0], 10);
			var month = parseInt(parts[1] - 1, 10);
			var year = parseInt(parts[1], 10);
			if(day < 10){
				day = '0'+day;
			}
			if(month < 10){
				month = '0'+month;
			}
			var dmy = +year+'/'+month+'/'+day;
			//return new Date(year, month, day);
			return dmy;
		}
	});
	var tanggalIndex = new Pikaday({
		field: document.getElementById('tanggal-index'),
		firstDay: 0,
		minDate: new Date(2011, 11, 31),
		maxDate: new Date,
		yearRange: [2000],
		container: document.getElementById('datepicker-index'),
		format: 'DD/MM/YYYY',
		toString(date, format) {
			// you should do formatting based on the passed format,
			// but we will just return 'D/M/YYYY' for simplicity
			var day = date.getDate();
			var month = date.getMonth() + 1;
			var year = date.getFullYear();

			if(day < 10){
				day = '0'+day;
			}
			if(month < 10){
				month = '0'+month;
			}
			var dmy = +year+'/'+month+'/'+day;
			// return `${day}/${month}/${year}`;
			return dmy;
		},
		parse(dateString, format) {
			// dateString is the result of `toString` method
			const parts = dateString.split('/');
			var day = parseInt(parts[0], 10);
			var month = parseInt(parts[1] - 1, 10);
			var year = parseInt(parts[1], 10);
			if(day < 10){
				day = '0'+day;
			}
			if(month < 10){
				month = '0'+month;
			}
			var dmy = +year+'/'+month+'/'+day;
			//return new Date(year, month, day);
			return dmy;
		}
	});

	var inputTanggalSearch = $('#tanggal-search');
	inputTanggalSearch.on('change', function(e) {
		e.preventDefault();
		var pilihanTanggalSearch = inputTanggalSearch.val();
		window.location = "https://www.tempo.co/indeks/"+pilihanTanggalSearch;
	});

	var inputTanggalIndex = $('#tanggal-index');
	var pilihanTanggalIndex = inputTanggalIndex.val();
	inputTanggalIndex.on('change', function(e) {
		e.preventDefault();
		var pilihanTanggalIndex = inputTanggalIndex.val();
		var pilihanKanal = $('#kanal').val();
		if(pilihanKanal == ""){
			window.location = "https://www.tempo.co/indeks/"+pilihanTanggalIndex;
		} else {
			window.location = "https://www.tempo.co/indeks/"+pilihanTanggalIndex+"/"+pilihanKanal;
		}
	});

	var pilihanKanal = $('#kanal').val();
	var tooltipIndexDateEmpty = inputTanggalIndex.add('.tooltip');

	var contentTooltipIndexDateEmpty = $('<div class="tooltip red-500"><div class="wrapper"><div class="arrow-up"></div><p>Pilih tanggal tayang artikel.</p><div class="wrapper"><a class="white" href="#">OK</a></div></div></div>');
	inputTanggalIndex.after(contentTooltipIndexDateEmpty);

	$('#kanal').on('change', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		window.location.hash = $('#kanal').val();
		if(pilihanTanggalIndex == ""){
			// console.log('isi tanggal');
			var caution = setTimeout(function(){
				var tooltipIndexDateEmpty = inputTanggalIndex.add('.tooltip');

				if($('.pika-single.is-hidden').length){
					tooltipIndexDateEmpty.addClass('active');
				}

				tooltipIndexDateEmpty.add('a .white').on('click', function(e){
					e.preventDefault();
					e.stopImmediatePropagation();
					tooltipIndexDateEmpty.removeClass('active');
				});

			clearTimeout(caution);
			}, 0);

		} else {
			window.location = "https://www.tempo.co/indeks/"+pilihanTanggalIndex+"/"+pilihanKanal;
		}
	});


  var laput = new Swiper('.swiper-container.laput', {
    autoplay: true,
    navigation: {
      nextEl: '.swiper-button-next-laput',
      prevEl: '.swiper-button-prev-laput',
    },
    pagination: {
      el: '.swiper-pagination-laput'
    },
    speed: 2000,
    loop: true
  });

  var $animation_elements = $('.animation');
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('active');
      } else {
        $element.removeClass('active');
      }
    });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');
  
  if($('.gallery').length){
    console.log('ada');
    $('.gallery').addClass('active');
  }
});