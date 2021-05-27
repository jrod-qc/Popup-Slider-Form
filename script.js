var closePopup = document.getElementById("popup-exit-btn");
var popup = document.getElementById("popup-box");
var requestConsultationBtn = document.getElementById("popup-form-btn");
var popuptextSection = document.getElementById("popup-right-side-section");
var formBoxSection = document.getElementById("form-box-section");

closePopup.addEventListener("click", function() {
    popup.style.display = "none";
});

requestConsultationBtn.addEventListener("click", function() {
    popuptextSection.style.display = "none";
    formBoxSection.style.display = "flex";
});


// This is the Rebate Modal
setTimeout(function() {
    popup.style.display = "flex";
}, 5000);