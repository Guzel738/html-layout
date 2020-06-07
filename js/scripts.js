$(document).ready(function() {

    $(".tabs-titles .tab-title").click(function() { 
		if (!$(this).hasClass("active")) { 
			var i = $(this).index(); 
			$(".tabs-titles .tab-title.active").removeClass("active");
			$(".tabs-content .tab-content.active").hide().removeClass("active"); 
			$(this).addClass("active"); 
			$($(".tabs-content .container").children(".tab-content")[i]).fadeIn(0).addClass("active"); 
		}
    });
    
    $(".modal-pay .tabs-title .tab-title").click(function() { 
		if (!$(this).hasClass("active")) { 
			var i = $(this).index(); 
			$(".modal-pay .tabs-title .tab-title.active").removeClass("active");
			$(".modal-pay .tabs-content-model .tab-content.active").hide().removeClass("active"); 
			$(this).addClass("active"); 
			$($(".modal-pay .tabs-content-model").children(".tab-content")[i]).fadeIn(0).addClass("active"); 
		}
    });

    $(".modal-telegram .tabs-title .tab-title").click(function() { 
		if (!$(this).hasClass("active")) { 
			var i = $(this).index(); 
			$(".modal-telegram .tabs-title .tab-title.active").removeClass("active");
			$(".modal-telegram .tabs-content-model .tab-content.active").hide().removeClass("active"); 
			$(this).addClass("active"); 
			$($(".modal-telegram .tabs-content-model").children(".tab-content")[i]).fadeIn(0).addClass("active"); 
		}
    });
    $('.modal-window .close').click(function() {
        $('.modal-window').fadeOut();
    })
    $('.main .profile-photo .notice').click(function(e) {
        e.preventDefault();
        $('.modal-telegram').fadeIn();
    })
    $('.main .profile-content .money .promocode').click(function(e) {
        e.preventDefault();
        $('.modal-promo-activation').fadeIn();
    })
    $('.main .profile-content .money .supplement').click(function(e) {
        e.preventDefault();
        $('.modal-pay').fadeIn();
    })
})