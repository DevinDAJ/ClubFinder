var main = () => {
    let searchElement = document.querySelector("#searchElement");
    let buttonSearchElement = document.querySelector("#searchButtonElement");
    let clubListElement = document.querySelector("#clubList");

    var onButtonSearchClicked = () => {
        let dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchClub(searchElement.value);
    };

    var renderResult = results => {
        clubListElement.innerHTML = "";
        results.forEach(club => {
            let name = "";
            let fanArt = "";
            let description = "";

            ({ name, fanArt, description } = club);

            let clubElement = document.createElement("div");
            clubElement.setAttribute("class", "club");

            // test commit
            clubElement.innerHTML = `<img class="fan-art-club" src="${fanArt}" alt="Fan Art">
                <div class="club-info">
                <h2>${name}</h2>
                <p>${description}</p>
                </div>`;
            clubListElement.appendChild(clubElement);
        })
    };

    var fallbackResult = message => {
        clubListElement.innerHTML = "";
        clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};