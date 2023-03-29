const showUploadedImages = (e) => {
  let imageShowDiv = document.getElementById("output");

  let filesLength = e.target.files.length;

  for (let i = 0; i < filesLength; i++) {
    imageShowDiv.innerHTML += `<div class="grid-item">
    <img src="${URL.createObjectURL(
      e.target.files[i]
    )}" width=100% height=100% />
    </div>`;
  }
};
