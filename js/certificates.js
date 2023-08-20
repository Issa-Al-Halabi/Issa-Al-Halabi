
const myCertificates={
    "Front-End":
    {
        "name":"Front-End",
        "Certificates": [
            {
                "name":"Introduction to Front-End Development",
                "disc":"Certificate from Coursera <br> Presented By Meta",
                "disc_de":"Zertifikat von Coursera <br> Präsentiert von Meta",
                "link":"https://coursera.org/share/a6bbb7aca8259c3c71885cd0fe2d1924",
            },
            {
                "name":"Programming with JavaScript",
                "disc":"Certificate from Coursera <br> Presented By Meta",
                "disc_de":"Zertifikat von Coursera <br> Präsentiert von Meta",
                "link":"https://coursera.org/share/b7823703c922e7393e14cf7bfe4655ac",
            }
            ,
            {
                "name":"Version Control",
                "disc":"Certificate from Coursera <br> Presented By Meta",
                "disc_de":"Zertifikat von Coursera <br> Präsentiert von Meta",
                "link":"https://coursera.org/share/e18791c2d55d0d382269d23bb79721a5",
            }
        ]
    }
}

 function checkCertificate(certificateName){
    if(myCertificates[certificateName].lenght != 1){
        console.log(JSON.stringify(myCertificates["Front-End"]));
        sessionStorage.setItem("currCertificate",JSON.stringify(myCertificates["Front-End"]));
        window.location.href = "certificate.html";
    }
    else{
        window.location.href= myCertificates["certificateName"][0];

    }
}
