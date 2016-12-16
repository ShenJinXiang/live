$(function () {
	bindEvent();
});

function bindEvent() {
	$('.index-menu li').click(function () {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
}
