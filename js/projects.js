
import PROJECTS from "./appsData.js";

const CATEGORIES = {
    "flutter" : "Flutter App",
    "backend" : "Back-End",
    "desktop" : "Desktop App",
    "web-app" : "Web App",
    "game-dev": "Game Dev",
};


const getProjectCategories = () => {

    let CategoriesData = "";

    Object.entries(CATEGORIES).forEach(([key, value], index) => {
        CategoriesData += 
                `<li data-filter=".${key}">${value}</li>`;
    });

    return CategoriesData;
}

const getProjects = () => {

    let ProjectsData = "";

    Object.entries(PROJECTS).forEach(([key, value], index) => {

        let projectCategories = value.categories.map(category => `${category}`).join(' ');

        ProjectsData += 
                `<div
                    class="col-lg-4 col-md-6 col-sm-12 portfolio-item ${projectCategories} wow fadeInUp"
                    data-wow-delay="0.0s"
                    onclick="navigateToAppPage('${value.name.toLowerCase()}')">
                <div class="portfolio-wrap">
                <div class="portfolio-img">
                    <img loading="lazy"  src="${value.logo}" alt="${value.name} logo" />
                </div>
                <div class="portfolio-text">
                    <h3>${value.name}</h3>
                    <a
                    class="btn"
                    href="${value.logo}"
                    data-lightbox="portfolio"\>
                        +
                    </a>
                </div>
                </div>
            </div>`;
    });

    return ProjectsData;
}

export { PROJECTS, getProjects, getProjectCategories };