// Function to show image in a larger view
function openImage(src, alt) {
    // Create overlay
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.onclick = closeImage;

    // Create image element
    let img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.classList.add("popup-image");

    // Create close button
    let closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.classList.add("close-btn");
    closeBtn.onclick = closeImage;

    // Append elements
    overlay.appendChild(img);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);
}

// Function to close image pop-up
function closeImage() {
    let overlay = document.querySelector(".overlay");
    if (overlay) {
        overlay.remove();
    }
}

// Attach event listeners to all gallery images
document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".gallery .item img");
    images.forEach(img => {
        img.addEventListener("click", function() {
            openImage(this.src, this.alt);
        });
    });
});
