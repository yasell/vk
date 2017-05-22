$(document).ready(function($) {
	$body = $('body');
	windowWidth = $(window).width();
	windowHeight = $(window).height();

	//developer funcitons
	pageWidget(['index', '404', 'catalog_inner', 'catalog', 'contacts', 'dillers', 'gallery_inner', 'gallery', 'news', 'price', 'product', 'search', 'textpage']);
	getAllClasses('html', '.elements_list');
});

// main navigation menu
$(function() {
	var html = $("html"),
		navContainer = $(".nav-container"),
		navToggle = $(".nav-toggle"),
		navDropdownToggle = $(".has-dropdown");

	// Nav toggle
	navToggle.on("click", function(e) {
		var $this = $(this);
		e.preventDefault();
		$this.toggleClass("is-active");
		navContainer.toggleClass("is-visible");
		html.toggleClass("nav-open");
	});

	// Nav dropdown toggle
	navDropdownToggle.on("click", function() {
		var $this = $(this);
		$this.toggleClass("is-active").children("ul").toggleClass("is-visible");
	});

	// Prevent click events from firing on children of navDropdownToggle
	navDropdownToggle.on("click", "*", function(e) {
		e.stopPropagation();
	});
});

// search input on mobile
var searchIcon = $(".search__icon");
var searchTop = $("#search");

$(".search__icon").on("click", function() {
	if (searchIcon.hasClass("search__icon--focus")) {
		searchIcon.removeClass("search__icon--focus");
		searchTop.removeClass("search__form--visible");
	} else {
		searchIcon.addClass("search__icon--focus");
		searchTop.addClass("search__form--visible");
	}
	return false;
});

// back to top
$("#back-top").hide();

$(window).scroll(function() {
	if ($(this).scrollTop() > 500) {
		$("#back-top").fadeIn();
	} else {
		$("#back-top").fadeOut();
	}
});

$("#back-top").click(function() {
	$("body,html").animate({
		scrollTop: 0
	}, 600);
	return false;
});

// call button
$("#call").click(function() {
	$("#modal_call").addClass("modal_show");
	$(".page-wrapper").addClass("modal_blur");
	$(".modal_bg").css("display", "block");
});

$(".modal__close").click(function() {
	$("#modal_call").removeClass("modal_show");
	$(".page-wrapper").removeClass("modal_blur");
	$(".modal_bg").css("display", "none");
});

$(".modal_bg").click(function() {
	$("#modal_call").removeClass("modal_show");
	$(".page-wrapper").removeClass("modal_blur");
	$(".modal_bg").css("display", "none");
});

// file upload
$(function() {
	var wrapper = $(".form__file"),
		inp = wrapper.find("input"),
		btn = wrapper.find("span"),
		lbl = wrapper.find("mark");

	// Crutches for the :focus style:
	inp.focus(function() {
		wrapper.addClass("focus");
	}).blur(function() {
		wrapper.removeClass("focus");
	});

	var file_api = (window.File && window.FileReader && window.FileList && window.Blob) ? true : false;

	inp.change(function() {
		var file_name;
		if (file_api && inp[0].files[0])
			file_name = inp[0].files[0].name;
		else
			file_name = inp.val().replace("C:\\fakepath\\", "");

		if (!file_name.length)
			return;

		if (lbl.is(":visible")) {
			lbl.text(file_name);
			btn.text("Загрузить файл");
		} else
			btn.text(file_name);
	}).change();

});
$(window).resize(function() {
	$(".form__file input").triggerHandler("change");
});

// - accordion
jQuery(document).ready(function() {
	var accordionsMenu = $(".cd-accordion-menu");

	if (accordionsMenu.length > 0) {

		accordionsMenu.each(function() {
			var accordion = $(this);
			//detect change in the input[type="checkbox"] value
			accordion.on("change", "input[type='checkbox']", function() {
				var checkbox = $(this);
				console.log(checkbox.prop("checked"));
				(checkbox.prop("checked")) ? checkbox.siblings("ul").attr("style", "display:none;").slideDown(300): checkbox.siblings("ul").attr("style", "display:block;").slideUp(300);
			});
		});
	}
});

// for product card
// - smooth scroll
$(".product__nav").on("click", "a", function(event) {
	event.preventDefault();

	var el = $(this).attr("href");
	$("body,html").animate({
		scrollTop: $(el).offset().top
	}, 2000);
	return false;
});

// - tabs
$(".product__panel .product__tab").click(function() {
	if (!$(this).hasClass("active")) {
		$(".product__panel .product__tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".product__tab-item").hide().eq($(this).index()).fadeIn(900);
	}
}).eq(0).addClass("active");



// easy form validate
// function validateForm(dir) {
// 	var form = dir;
// 	var name, phone;
// 	var error = [];
// 	// var checking;
// 	form.find("#order").html("");
// 	name = form.find("#name").val();
// 	phone = form.find("#phone").val();
// 	if (name === "") {
// 		error.push("Введите имя*");
// 	} else
// 	if (!/[А-Яа-яЁёa-zA-Z`\s]{1,100}/.test(name)) {
// 		error.push("*Мы ждём от Вас корректного имени");
// 	}
// 	if (phone === "") {
// 		error.push("Введите телефон*");
// 	} else
// 	if (!/[0-9()-\s+]{3,20}/.test(phone)) {
// 		error.push("*Введите корректный телефон");
// 	}
// 	if (error.length > 0) {
// 		$.each(error, function() {
// 			form.find(".errortext").append(this + "<br>");
// 		});
// 		return false;
// 	}
// 	return true;
// }
//
// $(".order-btn").on("submit", function(e) {
// 	var valid = validateForm($(this));
// 	if (!valid) {
// 		return false;
// 	}
// });
