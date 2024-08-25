

const timelines = {
    xo: {
        name: " X_O Game",
        date: "2020/1/01",
        logo: "img/projects/X-O/logo.png",
        desc: "I Develped A Simple Tic Tac Toe Game",
        desc_de: "Ich habe ein einfaches Tic Tac Toe-Spiel entwickelt",
    },
    xpositron: {
        name: "X-POSITRON",
        date: "2020/4/01",
        logo: "img/projects/X-POSITRON/logo.png",
        desc: "I have participated in a non-profit company as an instructor",
        desc_de: "Ich habe in einem gemeinnützigen Unternehmen als Ausbilder mitgewirkt",
    },
    interpolation: {
        name: "Interpolation",
        date: "2021/3/01",
        logo: "img/projects/interpolation/logo.png",
        desc: "I have made a project for my university to solve math problems",
        desc_de: "Ich habe für meine Universität ein Projekt zur Lösung mathematischer Probleme gemacht",
    },
    cables: {
        name: "Cables",
        date: "2021/7/01",
        logo: "img/projects/cables/logo.png",
        desc: "I Have Built An Android And Desktop App For A Cleint",
        desc_de: "Ich habe eine Android- und Desktop-App für einen Cleint erstellt",
    },
    rada: {
        name: "Rada",
        date: "2021/10/01",
        logo: "img/projects/rada/logo.png",
        desc: "I Have Built A WebSite App For A Cleint",
        desc_de: "Ich habe eine Website-App für einen Kunden erstellt",
    },
    pharmacy: {
        name: "Pharmacy",
        date: "2022/1/01",
        logo: "img/projects/Pharmacy/logo.png",
        desc: "I Have Built An App to order medicines online to facilitate the purchase process",
        desc_de: "Ich habe eine App entwickelt, um Medikamente online zu bestellen und den Kaufprozess zu vereinfachen",
    },
    cloudszone: {
        name: "cloudszone",
        date: "2022/4/01",
        logo: "img/projects/cloudsZone/logo.png",
        desc: "I Started To Work at cloudZone",
        desc_de: "Ich habe angefangen, bei cloudZone zu arbeiten",
    },
    Lordsbox: {
        name: "Lordsbox",
        date: "2023/5/01",
        logo: "img/projects/lordsbox/logo.png",
        desc: " I Have Built An App For A Goods transportation company",
        desc_de: "Ich habe ein App für ein Transport unternehmen erstellt",
    },
    miamed: {
        name: "miamed",
        date: "2023/9/01",
        logo: "img/projects/miamed/logo.png",
        desc: "I Have Built A Multi vendor app for pharmacists to efficiently manage medicine purchases",
        desc_de: "Ich habe eine Multi-Vendor-App für Apotheker entwickelt, um Medikamenteneinkäufe effizient zu verwalten",
    },
    diamond_line: {
        name: "Diamond Line",
        date: "2023/11/01",
        logo: "img/projects/diamond_line/logo.png",
        desc: "I Have Built A Transportation app to order a car to travel within or across states",
        desc_de: "Ich habe eine Transport-App entwickelt, mit der man ein Auto für Fahrten innerhalb oder zwischen Staaten bestellen kann",
    },
    peaklink: {
        name: "Peaklink",
        date: "2024/2/01",
        logo: "img/projects/peaklink/logo.jpg",
        desc: "I Started To Work at Peaklink",
        desc_de: "Ich habe angefangen, bei Peaklink zu arbeiten",
    },
    farmy: {
        name: "Farmy",
        date: "2024/2/01",
        logo: "img/projects/farmy/logo.svg",
        desc: "I Have Built A Food delivery mobile app",
        desc_de: "Ich habe eine mobile App für die Essenslieferung entwickelt",
    },
    ebsher: {
        name: "Ebsher",
        date: "2024/3/01",
        logo: "img/projects/ebsher/logo.png",
        desc: "I Developed a comprehensive tourist guide app for exploring Syria",
        desc_de: "Ich habe eine umfassende Reiseführer-App zur Erkundung Syriens entwickelt",
    },
    mubasher: {
        name: "Mubasher",
        date: "2024/4/01",
        logo: "img/projects/mubasher/logo.svg",
        desc: "I Have Built A Real-state seller App",
        desc_de: "Ich habe eine App für Immobilienverkäufer erstellt",
    },
    wlcd: {
        name: "wlcd",
        date: "2024/6/01",
        logo: "img/projects/wlcd/logo.svg",
        desc: "Developed an academy app offering diverse courses for E-learning",
        desc_de: "Entwicklung einer Akademie-App mit verschiedenen E-Lernkursen",
    },
    fiberforge: {
        name: "FiberForge",
        date: "2024/8/01",
        logo: "img/projects/FiberForge/logo.jpg",
        desc: "Developed an app for a company in Africa to track shipments and monitor employee activity",
        desc_de: "Entwicklung einer App für ein Unternehmen in Afrika zur Sendungsverfolgung und Überwachung der Mitarbeiteraktivitäten",
    },
};

const getTimelines = () => {

    let timelinesData = "";

    Object.entries(timelines).reverse().forEach(([key, value], index) => {

        timelinesData += 
            `   <div class="timeline-item" data-wow-delay="0.1s">
            <div class="timeline-text">
              
              <div class="timeline-date">${getFormattedDate(value.date)} </div>
              <div class="d-flex align-items-center gap-2">
                <img loading="lazy"  src="${value.logo}" style="width: 75px; height:75px;" alt="" srcset="">
                <div class="title">
                  <h2>${value.name} </h2>
                </div>
              </div>
                  <p class="pt-1 localization" data-local="${value.desc_de}">
                    ${value.desc}
                  </p>
            </div>
          </div>`;
    });

    return timelinesData;
}

export { timelines, getTimelines };

function getFormattedDate (date) {

    const dateParts = date.split('/');

    // 2024 / 5
    return `${dateParts[0]} / ${parseInt(dateParts[1])}`;
}