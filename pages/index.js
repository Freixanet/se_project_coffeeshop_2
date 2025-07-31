// Function to find all video facades and add click event listeners
function setupVideoFacades() {
  const videoFacades = document.querySelectorAll(".recipes__video-facade");

  videoFacades.forEach((facade) => {
    facade.addEventListener("click", () => {
      // Get the video ID from the data attribute
      const videoId = facade.dataset.videoId;
      if (!videoId) return; // Exit if no video ID is found

      // Create the iframe element
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      iframe.className = "recipes__iframe";
      iframe.title = facade.getAttribute("aria-label"); // Use the same descriptive title
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;

      // Replace the facade with the iframe
      facade.replaceWith(iframe);
    });
  });
}

// Run the setup function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", setupVideoFacades);
