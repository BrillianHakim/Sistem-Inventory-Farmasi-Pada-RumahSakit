 // JavaScript untuk dropdown
 document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.getElementsByClassName("dropdown");
    
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener("click", function() {
        this.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
      });
    }

    // Menutup dropdown jika user mengklik di luar dropdown
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  });