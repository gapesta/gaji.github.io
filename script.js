// Tangkap elemen input dan tombol
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const calculateBtn = document.getElementById("calculate-btn");
const totalDisplay = document.getElementById("total");
// Tangkap elemen tombol reset
const resetBtn = document.getElementById("reset-btn");

// Tambahkan event listener ke tombol
calculateBtn.addEventListener("click", () => {
    // Ambil nilai dari input dan ubah ke angka
    let val1 = parseFloat(num1.value) || 0;
    let val2 = parseFloat(num2.value) || 0;
    let val3 = parseFloat(num3.value) || 0;
    let val4 = parseFloat(num4.value) || 0;
    let val5 = parseFloat(num5.value) || 0;
    let val6 = parseFloat(num6.value) || 0;
    let ptg = parseFloat(num7.value) || 0;
    
    //hitung gaji pulang jam 7
    let jam7 = val1 * 55;
    let hrbsa = 35.02 * val2;
    let jam7mgu = 34.96 * val3;
    let setenghri = 21.88 * val4;
    let jam9 = 68.32 * val5;
    let ponteng = 80 * ptg;

    if (ponteng == 80){
            // Hitung total
    const total = jam7 + jam7mgu + setenghri + hrbsa + 300 + jam9 - ponteng - val6;

    // Tampilkan total ke dalam elemen di web
    totalDisplay.textContent = Number(total.toFixed(2));
    } else if(ponteng == 160) {
        const total = jam7 + jam7mgu + setenghri + hrbsa + 300 + jam9 - ponteng - val6;

        // Tampilkan total ke dalam elemen di web
        totalDisplay.textContent = Number(total.toFixed(2));
    } else if(ponteng == 240) {
        const total = jam7 + jam7mgu + setenghri + hrbsa + 300 + jam9 - ponteng - val6;

        // Tampilkan total ke dalam elemen di web
        totalDisplay.textContent = Number(total.toFixed(2));
    } else { 
        const total = jam7 + jam7mgu + setenghri + hrbsa + 300 + jam9 - val6;

        // Tampilkan total ke dalam elemen di web
        totalDisplay.textContent = Number(total.toFixed(2));
    }

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

    // Atur ulang total ke 0
    totalDisplay.textContent = 0;
});
