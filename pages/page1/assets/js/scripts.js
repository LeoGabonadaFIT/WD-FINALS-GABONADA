document.addEventListener("DOMContentLoaded", function() {
    const profilePhoto = document.getElementById("profile-photo");

    profilePhoto.addEventListener("mouseenter", function() {
        profilePhoto.style.transform = "rotate(360deg)";
        profilePhoto.style.transition = "transform 1s ease";
    });

    profilePhoto.addEventListener("mouseleave", function() {
        profilePhoto.style.transform = "rotate(0deg)";
        profilePhoto.style.transition = "transform 1s ease";
    });
});
