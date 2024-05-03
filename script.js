// script.js
document.querySelectorAll(".episode-watch-btn").forEach(function(button) {
  button.addEventListener("click", function() {
    var dropdown = this.nextElementSibling;
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
      this.classList.remove("active");

      // Reset the episode positions
      var container = dropdown.closest(".episode-container");
      var episodes = container.querySelectorAll(".episode");
      episodes.forEach(function(episode) {
        episode.style.transform = "translateY(0)";
      });
    } else {
      // Close any other open dropdowns
      var openDropdowns = document.querySelectorAll(".dropdown-content.show");
      openDropdowns.forEach(function(openDropdown) {
        openDropdown.classList.remove("show");
        var openButton = openDropdown.previousElementSibling;
        openButton.classList.remove("active");
      });

      dropdown.classList.add("show");
      this.classList.add("active");

      if (window.innerWidth <= 2560) {
        var container = dropdown.closest(".episode-container");
        var episodes = container.querySelectorAll(".episode");
        var clickedEpisode = dropdown.closest(".episode");
        var dropdownIndex = -1;

        episodes.forEach(function(episode, index) {
          if (episode === clickedEpisode) {
            dropdownIndex = index;
          }

          if (dropdownIndex !== -1 && index > dropdownIndex) {
            if (dropdown.classList.contains("show")) {
              episode.style.transform = "translateY(150px)";
            } else {
              episode.style.transform = "translateY(0)";
            }
          }
        });
      }
    }
  });
});

// Close the dropdown if the user clicks outside of it
document.addEventListener("click", function(event) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (
      openDropdown.classList.contains("show") &&
      !event.target.matches(".episode-watch-btn")
    ) {
      openDropdown.classList.remove("show");
      var watchButton = openDropdown.previousElementSibling;
      watchButton.classList.remove("active");

      var container = openDropdown.closest(".episode-container");
      var episodes = container.querySelectorAll(".episode");
      episodes.forEach(function(episode) {
        episode.style.transform = "translateY(0)";
      });
    }
  }
});