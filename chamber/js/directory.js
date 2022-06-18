const directoryUrl = "https://kelvin-aj.github.io/wdd230/chamber/json/data.json";
const directoryCont = document.querySelector(".directory-container");

async function getandshowDirectory() {
    const response = await fetch(directoryUrl);
    const jsonObject = await response.json();
    const directory = jsonObject.directory;
    console.log(directory);

    directoryCont.innerHTML = "";
    directory.forEach((company) => {
        directoryCont.insertAdjacentHTML("beforeend", 
        `
                    <div class="company abel-text">
                        <img class="company-img" src="${company.logoURL}" loading="lazy" alt="logo of ${company.name}">
                        <div class="company-info">
                            <h2 class="mono-text">${company.name} <img src="images/star_FILL0_wght400_GRAD0_opsz24.svg" alt="${company.membership} tag" class="${company.membership}"></h2>
                            <ul>
                            <li>${company.email}</li>
                            <li>${company.websiteURL}</li>
                            <li>${company.address}</li>
                            <li>${company.phoneNumber}</li>
                            </ul>
                            <p class="transparent">${company.description}</p>
                        </div>
                    </div>`)
    });
};
getandshowDirectory();
