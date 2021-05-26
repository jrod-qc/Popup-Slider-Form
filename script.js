var closePopup = document.getElementById("popup-exit-btn");
var popup = document.getElementById("popup-box");
var requestConsultationBtn = document.getElementById("popup-form-btn");
var popupSection = document.getElementsByClassName("popup-content-box");

closePopup.addEventListener("click", function() {
    popup.style.display = "none";
});

requestConsultationBtn.addEventListener("click", function() {
    // popupSection.style.left = "300px";
});


// This is the Rebate Modal
setTimeout(function() {
    popup.style.display = "flex";
}, 5000);