const showUploadedImages = (e) => {
  let imageShowDiv = document.getElementById("cardImagesContainer");

  let filesLength = e.target.files.length;

  for (let i = 0; i < filesLength; i++) {
    imageShowDiv.innerHTML += `
   <div class="grid-item card">
   <img src="${URL.createObjectURL(
     e.target.files[i]
   )}" width=100% height=100% />
  <h3 class="card-container">${e.target.files[i].name
    .split(".")
    .slice(0, -1)
    .join(".")}</h3>
   </div>
    `;
  }
};

function downloadPdf() {
  // const fileName = `${
  //   document.getElementById("resumeDetails").children[0].children[0].innerText
  // }_resume.pdf`;
  const downloadPage = document.getElementById("cardImagesContainer");
  var opt = {
    margin: 0,
    // filename: fileName,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf(downloadPage, opt);
}
