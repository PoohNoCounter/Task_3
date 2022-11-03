const btnSubmit = document.querySelector("#btn-submit");
const btnClear = document.querySelector("#btn-clear");

const nama = document.querySelector("#nama");
const nim = document.querySelector("#nim");
const jurusan = document.querySelector("#jurusan");

const ktmContainer = document.querySelector(".ktm-container");

btnClear.addEventListener("click", () => {
  nama.value = "";
  nim.value = "";
  jurusan.value = "";

  ktmContainer.style.backgroundColor = "#95f1e5";
  ktmContainer.innerHTML = "";
  nama.focus();
});

btnSubmit.addEventListener("click", () => {
  if (nama.value == "" || nim.value == "" || jurusan.value == "") {
    alert("Mohon isi semua form");
  } else {
    const data = {
      nama: nama.value,
      nim: nim.value,
      jurusan: jurusan.value,
    };

    ktmContainer.style.backgroundColor = "black";

    ktmContainer.innerHTML = `
          <div class="ktm-header">
          <div class="logo">
              <img src="./img/logo.png" alt="logo" />
              <h2>ITERA</h2>
          </div>
          <div class="title">
              <h2>Institut Teknologi Sumatera</h2>
              <p>"Smart, Friendly and Forest Campus"</p>
          </div>
          </div>
          <div class="ktm-body">
          <h3>KARTU TANDA MAHASISWA</h3>
          <div class="ktm-body-container">
              <div class="ktm-desc">
              <p>${data.nama}</p>
              <p>${data.nim}</p>
              <p>${data.jurusan}</p>
              </div>
              <div class="ktm-img">
              <img src="./img/pp.png" alt="ktm" />
              </div>
          </div>
          </div>
        `;

    nama.value = "";
    nim.value = "";
    jurusan.value = "";
  }
});
