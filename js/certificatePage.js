let currCertificate = JSON.parse(sessionStorage.getItem("currCertificate"));
console.log(currCertificate);
if (currCertificate == null) {
  //window.location.href="index.html";
} else {
    setName(currCertificate["name"]);
  let certificateGrid = document.querySelector(".certificate-grid-page");

  [...currCertificate["Certificates"]].forEach((certificate) => {
    console.log(certificate);

    var ele = document.createElement("div");
    ele.classList.add("certificate-item-page");
    ele.classList.add("wow");
    ele.classList.add("slideInUp");
    ele.setAttribute("data-wow-delay", "0.2s");
    ele.innerHTML = `
    <div class = "">
        <h4 class="certificate-header-page">
        ${certificate.name}
        </h4>
        <p class="certificate-text-page localization" data-local="${certificate.disc_de}">
        ${certificate.disc}
        </p>
    </div>
<a
href="${certificate.link}"
target="_blank"
class="btn localization" data-local="Schau mal">view</a>
`;

    certificateGrid.appendChild(ele);
  });
}


function setName(name){
    let breadcrumb = document.querySelector(".breadcrumbs .name");
    let title = document.querySelector(".certificates .certificate-name");
    breadcrumb.innerHTML = title.innerHTML = name;

}