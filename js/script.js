const HTML = document.getElementById('html');
var mapInformationButton = document.getElementById('map-information-button');
var feedBackForm = document.getElementById('feedback-form');
var feedBackCloseButton = document.getElementById('feedback-close-button');
var overlay = 'overlay';
var feedBackFormOff = 'feedback-form-off';
var parentElement = document.body;

var divOverlay = document.createElement('div');
divOverlay.className = overlay;

mapInformationButton.onclick = function () {
	event.preventDefault();
	parentElement.insertBefore(divOverlay, parentElement.firstChild);
	feedBackForm.classList.toggle(feedBackFormOff);
}

feedBackCloseButton.onclick = function () {
	event.preventDefault();
	parentElement.removeChild(divOverlay);
	feedBackForm.classList.toggle(feedBackFormOff);
};

divOverlay.onclick = function () {
	event.preventDefault();
	parentElement.removeChild(divOverlay);
	feedBackForm.classList.toggle(feedBackFormOff);
}

HTML.addEventListener("keydown", function () {
	if (event.keyCode === 27 && divOverlay && feedBackForm) {
		parentElement.removeChild(divOverlay);
		feedBackForm.classList.toggle(feedBackFormOff);
	}
})