function konfirmasi(){
    alert("Yakin ingin menambah data?");
}
function lihat1(){
  alert("Tensimeter digital adalah alat medis yang digunakan untuk mengukur tekanan darah secara elektronik. Alat ini bekerja dengan mendeteksi aliran darah di arteri menggunakan sensor dan menampilkan hasil pengukuran dalam bentuk angka digital pada layar LCD.")
}
function lihat2(){
  alert("Infus set adalah perangkat medis yang digunakan untuk mengalirkan cairan infus ke dalam tubuh pasien melalui intravena (pembuluh darah).")
}
function lihat3(){
  alert("Gunting bedah adalah alat medis yang dirancang khusus untuk digunakan dalam prosedur pembedahan. Alat ini terbuat dari baja tahan karat berkualitas tinggi yang tahan terhadap korosi dan dapat disterilkan.")
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