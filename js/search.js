const CREATOR_TYPES = [
    "",
    "3D Modeler",
    "Builder",
    "Composer",
    "GFX Artist",
    "Programmer",
    "Texture Artist",
    "Translator",
    "UI Designer",
    "Web Developer"
];

let developers = getDevs();

//Setup the search page
function setup() {
    //Show the creator types
    let creatorList = document.getElementById("creatorTypes");
    for (let i in CREATOR_TYPES) {
        creatorList.innerHTML += `
        <option value="${CREATOR_TYPES[i].toLowerCase()}" onClick="sortBy('${CREATOR_TYPES[i]}')">
            ${CREATOR_TYPES[i]}
        </option>`;
    };
};

//Search for developers
let category;
function search() {
    //Reset the page
    let devList = document.getElementById("devs");
    devList.innerHTML = "";

    if (category && category != "") {
        //Show all of the developers in a category
        for (let i in developers) {
            let devInfo = developers[i];
            for (let j in devInfo.Jobs) {
                if (devInfo.Jobs[j] == category) {
                    //Developer meets the category
                    devList.innerHTML += `
                    <div class="dev">
                        <h1 class="devHead">${devInfo.Username}</h1>
                        <h2 class="devHead">${devInfo.Jobs[0]}</h1>
                        <img class="devPreview" src="https://www.roblox.com/headshot-thumbnail/image?userId=${devInfo.UserId}&width=420&height=420&format=png"/>
                    </div>`;
                    break;
                };
            };
        };
    } else {
        //Show all of the developers
        for (let i in developers) {
            let devInfo = developers[i];
            devList.innerHTML += `
            <div class="dev">
                <h1 class="devHead">${devInfo.Username}</h1>
                <h2 class="devHead">${devInfo.Jobs[0]}</h1>
                <img class="devPreview" src="https://www.roblox.com/headshot-thumbnail/image?userId=${devInfo.UserId}&width=420&height=420&format=png"/>
            </div>`;
        };
    };
};

//Sort by a category
function sortBy(sortCat) {
    category = sortCat;
};