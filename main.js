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
  // printJS(document.getElementById("cardAsPdf"), "html", {
  //   printable: null,
  // });

  // const downloadPage = document.getElementById("cardAsPdf");
  // let win = window.open("", "", "height=700,width=700"); // Open the window. Its a popup window.
  // win.document.write(downloadPage.outerHTML); // Write contents in the new window.
  // win.document.close();
  // win.print(); // Finally, print the contents.

  // doc.fromHTML(
  //   `<html><head><title>PDF</title></head><body>` +
  //     document.getElementById("cardAsPdf").innerHTML +
  //     `</body></html>`
  // );
  // doc.save("file.pdf");
  // const fileName = `${
  //   document.getElementById("resumeDetails").children[0].children[0].innerText
  // }_resume.pdf`;
  // const downloadPage = document.getElementById("cardAsPdf");
  kendo.drawing
    .drawDOM($(document.getElementById("cardAsPdf")))
    .then(function (group) {
      kendo.drawing.pdf.saveAs(group, "file.pdf");
    });
  // var opt = {
  //   margin: 1,
  //   // filename: fileName,
  //   image: { type: "JPG", quality: 0.98 },
  //   html2canvas: { dpi: 192, letterRendering: true },
  //   jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  // };
  // html2pdf(downloadPage, opt);
}
