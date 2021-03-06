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
      scrollTop: $(this.hash).offset().top + (-100)
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

  var boxLogin = $('.box-login');
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
      boxLogin.removeClass('active');
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

      /* login */
      var login = $('a.button-login');
      login.on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        if(!boxLogin.hasClass('active')){
          boxLogin.addClass('active');
          $(document).on('click', function(e){
            if($(e.target).closest(boxLogin).length){

            } else {
              boxLogin.removeClass('active');
            }
          });
        } else {
          boxLogin.removeClass('active');
        }
      });
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
      // $(document).on('mouseup', function(e){
      //   e.preventDefault();
      //   e.stopImmediatePropagation();
      //   // if(e.target.className != 'menu-mobile'){
      //   //   removemenumobile();
      //   // }

      //   if($(e.target).closest('.menu-mobile').length){
      //     console.log('1');
      //   } else {
      //     // boxLogin.removeClass('active');
      //     console.log('2');
      //   }
      //   $('.box-login form input').on('focus', function(){
      //     console.log('focus');

      //   });
      // });

      $('.box-login input').on('focus', function(e){
        e.preventDefault();
        console.log('focus');
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

  /* datepicker */
	// var tanggalSearch = new Pikaday({
	// 	field: document.getElementById('tanggal-search'),
	// 	firstDay: 0,
	// 	minDate: new Date(2011, 11, 31),
	// 	maxDate: new Date,
	// 	yearRange: [2000],
	// 	container: document.getElementById('datepicker'),
	// 	format: 'DD/MM/YYYY',
	// 	toString(date, format) {
	// 		// you should do formatting based on the passed format,
	// 		// but we will just return 'D/M/YYYY' for simplicity
	// 		var day = date.getDate();
	// 		var month = date.getMonth() + 1;
	// 		var year = date.getFullYear();

	// 		if(day < 10){
	// 			day = '0'+day;
	// 		}
	// 		if(month < 10){
	// 			month = '0'+month;
	// 		}
	// 		var dmy = +year+'/'+month+'/'+day;
	// 		// return `${day}/${month}/${year}`;
	// 		return dmy;
	// 	},
	// 	parse(dateString, format) {
	// 		// dateString is the result of `toString` method
	// 		const parts = dateString.split('/');
	// 		var day = parseInt(parts[0], 10);
	// 		var month = parseInt(parts[1] - 1, 10);
	// 		var year = parseInt(parts[1], 10);
	// 		if(day < 10){
	// 			day = '0'+day;
	// 		}
	// 		if(month < 10){
	// 			month = '0'+month;
	// 		}
	// 		var dmy = +year+'/'+month+'/'+day;
	// 		//return new Date(year, month, day);
	// 		return dmy;
	// 	}
	// });
	// var tanggalIndex = new Pikaday({
	// 	field: document.getElementById('tanggal-index'),
	// 	firstDay: 0,
	// 	minDate: new Date(2011, 11, 31),
	// 	maxDate: new Date,
	// 	yearRange: [2000],
	// 	container: document.getElementById('datepicker-index'),
	// 	format: 'DD/MM/YYYY',
	// 	toString(date, format) {
	// 		// you should do formatting based on the passed format,
	// 		// but we will just return 'D/M/YYYY' for simplicity
	// 		var day = date.getDate();
	// 		var month = date.getMonth() + 1;
	// 		var year = date.getFullYear();

	// 		if(day < 10){
	// 			day = '0'+day;
	// 		}
	// 		if(month < 10){
	// 			month = '0'+month;
	// 		}
	// 		var dmy = +year+'/'+month+'/'+day;
	// 		// return `${day}/${month}/${year}`;
	// 		return dmy;
	// 	},
	// 	parse(dateString, format) {
	// 		// dateString is the result of `toString` method
	// 		const parts = dateString.split('/');
	// 		var day = parseInt(parts[0], 10);
	// 		var month = parseInt(parts[1] - 1, 10);
	// 		var year = parseInt(parts[1], 10);
	// 		if(day < 10){
	// 			day = '0'+day;
	// 		}
	// 		if(month < 10){
	// 			month = '0'+month;
	// 		}
	// 		var dmy = +year+'/'+month+'/'+day;
	// 		//return new Date(year, month, day);
	// 		return dmy;
	// 	}
	// });

  var inputTanggalSearch = $('#tanggal-search');
	inputTanggalSearch.on('change', function(e) {
    e.preventDefault();
    var pilihanTanggalSearch = inputTanggalSearch.val();
    var inputTanggalSearchResult = window.location = "https://www.tempo.co/indeks/"+pilihanTanggalSearch;
    inputTanggalSearchResult.submit();
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
  
  // if(pilihanTanggalIndex == ""){
  //   // console.log('isi tanggal');
  //   var caution = setTimeout(function(){
  //     var tooltipIndexDateEmpty = inputTanggalIndex.add('.tooltip');

  //     if($('.pika-single.is-hidden').length){
  //       tooltipIndexDateEmpty.addClass('active');
  //     }

  //     tooltipIndexDateEmpty.add('a .white').on('click', function(e){
  //       e.preventDefault();
  //       e.stopImmediatePropagation();
  //       tooltipIndexDateEmpty.removeClass('active');
  //     });

  //   clearTimeout(caution);
  //   }, 0);

  // } else {
  //   window.location = "https://www.tempo.co/indeks/"+pilihanTanggalIndex+"/"+pilihanKanal;
  // }

	var pilihanKanal = $('#kanal').val();
	var tooltipIndexDateEmpty = inputTanggalIndex.add('.tooltip');

	var contentTooltipIndexDateEmpty = $('<div class="tooltip red-500"><div class="wrapper"><div class="arrow-up"></div><p>Pilih tanggal tayang artikel.</p><div class="wrapper"><a class="white" href="#">OK</a></div></div></div>');
	inputTanggalIndex.after(contentTooltipIndexDateEmpty);

	$('#kanal').on('keyup', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		window.location.hash = $('#kanal').val();
		
  });


  /* search */
  var search = $('a.search');
  var searchBox = $('.search-box');
  search.on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    searchBox.addClass('active');
    $(document).on('click', function(e){
      if ($(e.target).closest(".search-box").length) {
        console.log('di dalam');
      } else {
        searchBox.removeClass('active');
      }
    });
    if($('.search-box').hasClass('active')){
      $('.box-login').removeClass('active');
    }
  });


  if($('#home').length){
    var olderPosts = $('.main-2');
    if(!olderPosts.length){
      console.log('battle!');
      var laput = new Swiper('.swiper-container.laput', {
        autoplay: {
          waitForTransition: true,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next-laput',
          prevEl: '.swiper-button-prev-laput',
        },
        pagination: {
          el: '.swiper-pagination-laput'
        },
        speed: 3000,
        loop: true
      });
      
      var mainPic = new Swiper('.swiper-container.main-pic', {
        spaceBetween: 30,
        effect: 'fade',
        speed: 3000,
        loop: true,
        autoplay: {
          waitForTransition: true,
          disableOnInteraction: false
        },
        fade: { crossFade: true }
      });
    }
  }

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
  

  if($('.quote.related').length){
    // modify style for first paragraph
    var relatedArticle = document.querySelector('.quote.related');
    var relatedArticleNext = relatedArticle.nextElementSibling;
    relatedArticleNext.className = 'after-quotes'; // add first paragraph after blockquote
    var relatedArticleHeight = relatedArticleNext.offsetHeight; // get next paragraph height
    var relatedArticleCountChar = relatedArticleNext.innerHTML.replace(/ /g,"").length; // count letter inside paragraph without space
    console.log(relatedArticleHeight);
    // check if character inside first paragraph without space less than 350
    if(relatedArticleCountChar < 350){
      relatedArticleNext.nextElementSibling.className = 'after-quotes';
    }
  }

  var timer;
  $(window).on('load scroll', function(){
		var scroll = getCurrentScroll();
    var windowHeight = $(window).height();

    var footer = $('footer');
    var jarakFooter = footer.offset().top;
    var tinggiFooter = footer.outerHeight();
    
    var subscribeModal = $('.subscribe');

    var subscribeModalClose = false;
    if(!subscribeModalClose){
      console.log('opened');
      subscribeModal.add('.title a').on('click', function(e){
        e.preventDefault();
        console.log('true');
        subscribeModalClose = true;
        subscribeModal.addClass('disabled');
      });
    } else {
      if(scroll > (jarakFooter + tinggiFooter - windowHeight)){
        subscribeModal.addClass('disabled');
      } else {
        subscribeModal.removeClass('disabled');
      }
    }
	});

	function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
	}

  if($('.gallery').length){
    console.log('ada');
    $('.gallery').addClass('active');
  }


  var formBerlangganan = $('footer input.email');
  formBerlangganan.val('Masukkan email Anda');
  formBerlangganan.on('focus', function() {
    console.log('focus');
    if($(this).val() === 'Masukkan email Anda'){
      $(this).val('');
    }
  });

  formBerlangganan.on('blur', function() {
    console.log('blur');
    if($(this).val() === ''){
			$(this).val('Masukkan email Anda');
		}
  });

  let figcaptionMobile = $('article figcaption');
  $('.caption-button').on('click', function(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    if(figcaptionMobile.hasClass('active')){
      figcaptionMobile.removeClass('active');
    } else {
      figcaptionMobile.addClass('active');
    }
  });

  // if($('article .wrapper > p').length > 4){
  //   $('article .wrapper > p:nth-child(4)').after(`
  //   <div class="ads">
  //     <!-- begin ads -->
  //     <!-- <a href="#">
  //       <img src="http://majalah.tempointeraktif.co/assets/majalah/images/banner-rolex.jpg">
  //     </a> -->
  //     <iframe src="https://webtorial.tempo.co/adam/banners/728x90-1/" width="728" height="90"></iframe>
  //     <!-- end ads -->
  //   </div>
  //   `);
  // }

  if($('.rubrik').length){
    var slideGallery = new Swiper('.swiper-container.rubrik', {
      loop: true
    });
  }
});


  