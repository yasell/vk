$(document).ready(function($) {
	$body = $("body");
	windowWidth = $(window).width();
	windowHeight = $(window).height();

	//developer funcitons
	pageWidget(["index", "blog", "news", "about_us", "contact"]);
	getAllClasses("html", ".elements_list");
});

// back to top
$("#back-top").hide();

$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$("#back-top").fadeIn();
	} else {
		$("#back-top").fadeOut();
	}
});

$("#back-top").click(function() {
	$("body,html").animate({
		scrollTop: 0
	}, 500);
	return false;
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

// footer map


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
