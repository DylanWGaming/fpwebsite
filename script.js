// script.js
document.querySelectorAll(".episode-watch-btn").forEach(function(button) {
  button.addEventListener("click", function() {
    var dropdown = this.nextElementSibling;
    var episode = this.closest(".episode");
    var spacer = episode.querySelector(".spacer");

    // Close any other open dropdowns
    var openDropdowns = document.querySelectorAll(".dropdown-content.show");
    openDropdowns.forEach(function(openDropdown) {
      openDropdown.classList.remove("show");
      var openButton = openDropdown.previousElementSibling;
      openButton.classList.remove("active");

      var container = openDropdown.closest(".episode-container");
      var episodes = container.querySelectorAll(".episode");
      episodes.forEach(function(episode) {
        episode.style.transform = "translateY(0)";
        if (episode.querySelector(".episode-watch-btn").classList.contains("egghead-watch-btn")) {
          episode.querySelector(".spacer").style.marginBottom = "50px";
        }
      });
    });

    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
      this.classList.remove("active");

      // Reset the episode positions and spacer margin
      var container = dropdown.closest(".episode-container");
      var episodes = container.querySelectorAll(".episode");
      episodes.forEach(function(episode) {
        episode.style.transform = "translateY(0)";
        if (episode.querySelector(".episode-watch-btn").classList.contains("egghead-watch-btn")) {
          episode.querySelector(".spacer").style.marginBottom = "50px";
        }
      });
    } else {
      dropdown.classList.add("show");
      this.classList.add("active");

      // Increase the spacer margin for the Egghead episode
      if (this.classList.contains("egghead-watch-btn")) {
        spacer.style.marginBottom = "150px";
      } else {
        spacer.style.marginBottom = "50px";
      }
    }

    if (window.innerWidth <= 2040) {
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
            episode.style.transform = "translateY(120px)";
          } else {
            episode.style.transform = "translateY(0)";
          }
        }
      });
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
        if (episode.querySelector(".episode-watch-btn").classList.contains("egghead-watch-btn")) {
          episode.querySelector(".spacer").style.marginBottom = "50px";
        }
      });
    }
  }
});