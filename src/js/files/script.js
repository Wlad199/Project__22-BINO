// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";




$(document).ready(function () {
	$('.comment__body').slick({
		dots: true,
	});
})