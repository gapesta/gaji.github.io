// Tangkap elemen input dan tombol
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const jam12mgu = document.getElementById("jam12mgu");
const calculateBtn = document.getElementById("calculate-btn");
const totalDisplay = document.getElementById("total");
const totalDisplayoh = document.getElementById("totalnya");
// Tangkap elemen tombol reset
const resetBtn = document.getElementById("reset-btn");

const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const closePopupButton = document.getElementById("closePopup");

// Tambahkan event listener ke tombol
calculateBtn.addEventListener("click", () => {
    // Ambil nilai dari input dan ubah ke angka
    let val1 = Number(num1.value) || 0;
    let val2 = Number(num2.value) || 0;
    let val3 = Number(num3.value) || 0;
    let val4 = Number(num4.value) || 0;
    let val5 = Number(num5.value) || 0;
    let val6 = Number(num6.value) || 0;
    let mgu12 = Number(jam12mgu.value) || 0;
    let ptg = Number(num7.value) || 0;
    
    //hitung gaji pulang jam 7
    let jam7 = val1 * 55;
    let hrbsa = 35.02 * val2;
    let jam7mgu = 34.96 * val3;
    let setenghri = 21.88 * val4;
    let jam12hrmggu = 4.367 * mgu12
    let jam9 = 68.32 * val5;
    let ponteng = 80 * ptg;

    if (ponteng == 80){
            // Hitung total
    const total = jam7 + jam7mgu + setenghri + hrbsa + jam12hrmggu + 300 + jam9 - ponteng - val6;
    popup.style.display = "block";
    overlay.style.display = "block";

    // Tampilkan total ke dalam elemen di web
    totalDisplay.textContent = Number(total.toFixed(2));
    totalDisplayoh.textContent = Number(total.toFixed(2));
    } else if(ponteng == 160) {
        const total = jam7 + jam7mgu + jam12hrmggu + setenghri + hrbsa + 300 + jam9 - ponteng - val6;
        popup.style.display = "block";
        overlay.style.display = "block";

        // Tampilkan total ke dalam elemen di web
        totalDisplay.textContent = Number(total.toFixed(2));
        totalDisplayoh.textContent = Number(total.toFixed(2));
    } else if(ponteng == 240) {
        const total = jam7 + jam7mgu + jam12hrmggu + setenghri + hrbsa + 300 + jam9 - ponteng - val6;
        popup.style.display = "block";
        overlay.style.display = "block";

        // Tampilkan total ke dalam elemen di web
        totalDisplay.textContent = Number(total.toFixed(2));
        totalDisplayoh.textContent = Number(total.toFixed(2));
    } else { 
        const total = jam7 + jam7mgu + setenghri + jam12hrmggu + hrbsa + 300 + jam9 - val6;
        popup.style.display = "block";
        overlay.style.display = "block";

        // Tampilkan total ke dalam elemen di web
        totalDisplay.textContent = Number(total.toFixed(2));
        totalDisplayoh.textContent = Number(total.toFixed(2));
    }

});

    // Fungsi untuk menutup pop-up
    closePopupButton.addEventListener("click", () => {
        popup.style.display = "none";
        overlay.style.display = "none";
      });
  
      // Menutup pop-up saat overlay diklik
      overlay.addEventListener("click", () => {
        popup.style.display = "none";
        overlay.style.display = "none";
      });

      
// Tambahkan event listener ke tombol reset
resetBtn.addEventListener("click", () => {
    // Hapus nilai input
    num1.value = "";
    num2.value = "";
    num3.value = "";
    num4.value = "";
    num5.value = "";
    num6.value = "";
    num7.value = "";
    jam12mgu.value = "";

    // Atur ulang total ke 0
    totalDisplay.textContent = 0;
});
