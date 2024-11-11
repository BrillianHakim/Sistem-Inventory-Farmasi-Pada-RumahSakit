function konfirmasi(){
    alert("Yakin ingin menambah data?");
}

function lihat1(){
  alert("Paracetamol adalah obat analgesik dan antipiretik yang digunakan untuk meredakan nyeri ringan hingga sedang, seperti sakit kepala, sakit gigi, nyeri otot, dan demam.")
}
function lihat2(){
  alert("Amoxicillin adalah antibiotik golongan penisilin yang digunakan untuk mengobati berbagai jenis infeksi bakteri, seperti infeksi telinga, infeksi saluran pernapasan, infeksi saluran kemih, dan infeksi kulit.")
}
function lihat3(){
  alert("Ibuprofen adalah obat antiinflamasi nonsteroid (NSAID) yang digunakan untuk meredakan nyeri dan peradangan.")
}

function lihat4(){
  alert("Amoxicillin adalah antibiotik golongan penisilin yang digunakan untuk mengobati berbagai jenis infeksi bakteri, seperti infeksi telinga, infeksi saluran pernapasan, infeksi saluran kemih, dan infeksi kulit.")
}
function lihat5(){
  alert("Paracetamol adalah obat analgesik dan antipiretik yang digunakan untuk meredakan nyeri ringan hingga sedang, seperti sakit kepala, sakit gigi, nyeri otot, dan demam.")
}
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

 // Hamburger 
 document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  
  hamburger.addEventListener('click', function() {
      // Toggle class untuk animasi hamburger
      hamburger.classList.toggle('active');
      
      // Toggle class untuk mengubah lebar sidebar
      sidebar.classList.toggle('collapsed');
  });
});
