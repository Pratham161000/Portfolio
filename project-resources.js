/* Renders the PDF / video resource buttons on each project detail page,
   reading from projects-data.js so links only need to be edited in one place.
   The "video" field can be either a YouTube URL or a path to a self-hosted
   video file (e.g. "assets/demo.mp4") — both are handled automatically. */
document.addEventListener("DOMContentLoaded", function () {
    var page = document.querySelector(".project-page");
    if (!page) return;

    var key = page.getAttribute("data-project");
    var data = (typeof projectsData !== "undefined" && projectsData[key]) || { pdf: "", video: "" };

    var resourceContainer = document.querySelector(".p-resources");
    var videoContainer = document.querySelector(".video-embed-container");
    var isLocalVideoFile = data.video && /\.(mp4|webm|ogg|mov)$/i.test(data.video.split("?")[0]);

    // PDF button
    if (resourceContainer) {
        var pdfBtn = document.createElement("a");
        if (data.pdf) {
            pdfBtn.href = data.pdf;
            pdfBtn.target = "_blank";
            pdfBtn.rel = "noopener";
            pdfBtn.className = "resource-btn";
            pdfBtn.innerHTML = '<i class="fas fa-file-pdf"></i> View project PDF';
        } else {
            pdfBtn.href = "#";
            pdfBtn.className = "resource-btn is-disabled";
            pdfBtn.innerHTML = '<i class="fas fa-file-pdf"></i> PDF coming soon';
        }
        resourceContainer.appendChild(pdfBtn);

        // Video button
        var videoBtn = document.createElement("a");
        if (data.video) {
            videoBtn.href = data.video;
            videoBtn.target = "_blank";
            videoBtn.rel = "noopener";
            videoBtn.className = "resource-btn";
            videoBtn.innerHTML = isLocalVideoFile
                ? '<i class="fas fa-film"></i> Watch demo video'
                : '<i class="fab fa-youtube"></i> Watch demo video';
        } else {
            videoBtn.href = "#";
            videoBtn.className = "resource-btn is-disabled";
            videoBtn.innerHTML = '<i class="fab fa-youtube"></i> Demo video coming soon';
        }
        resourceContainer.appendChild(videoBtn);
    }

    // Embedded video preview (only shows if a link is set)
    if (videoContainer && data.video) {
        if (isLocalVideoFile) {
            videoContainer.innerHTML =
                '<video class="self-hosted-video" controls preload="metadata" src="' +
                data.video +
                '">Your browser does not support the video tag.</video>';
        } else {
            var videoId = extractYouTubeId(data.video);
            if (videoId) {
                videoContainer.innerHTML =
                    '<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/' +
                    videoId +
                    '?rel=0&modestbranding=1" title="Project demo video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
            }
        }
    }

    function extractYouTubeId(url) {
        var match = url.match(
            /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{6,})/
        );
        return match ? match[1] : null;
    }
});
