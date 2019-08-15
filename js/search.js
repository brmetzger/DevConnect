const CREATOR_TYPES = [
    "",
    "Artist",
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

//Convert an array into an English string
function arrayToEnglish(toTranslate) {
    if (toTranslate.length <= 0) {
        //Nothing in the list, return nothing
        return "";
    } else if (toTranslate.length == 1) {
        //One item list, return the one item
        return toTranslate[0];
    } else if (toTranslate.length == 2) {
        //Two items in the list, join them with "and"
        return `${toTranslate[0]} and ${toTranslate[1]}`;
    } else {
        //Three or more items in the list, combine them with commas and the last with "and"
        var outputString = "";
        for (var i in toTranslate) {
            outputString += toTranslate[i];
            if (i == toTranslate.length - 2) {
                //Second to last, add the ", and"
                outputString += ", and ";
            } else if (i < toTranslate.length - 2) {
                //Add a comma
                outputString += ", ";
            };
        };
        return outputString;
    };
};

//Open a user's profile
function openProfile(userId) {
    //Get the user data
    let userData = developers[userId];

    //Get examples of the user's work
    function getExamples() {
        let output = "";
        for (let i in userData.Examples) {
            output += `<a class="workExample" href="${userData.Examples[i].Link}" target="blank">${userData.Examples[i].Name}</a>&nbsp;&nbsp;`;
        };
        return output;
    };

    //Create buttons for the user's contact information
    function getContacts() {
        let output = `<a href="https://www.roblox.com/users/${userData.UserId}/profile" target="blank"><img src="assets/roblox.png" class="social-button"/></a>`;
        if (userData.Contacts.TWITTER) {
            output += `<a href="https://twitter.com/${userData.Contacts.TWITTER}" target="blank"><img src="assets/twitter.png" class="social-button"/></a>`;
        };
        if (userData.Contacts.DISCORD) {
            output += `<a href="https://discordapp.com/users/${userData.Contacts.DISCORD}" target="blank"><img src="assets/discord.png" class="social-button"/></a>`;
        };
        return output;
    };

    //Setup the profile
    let devList = document.getElementById("devs");
    devList.innerHTML = `
    <div class="profile">
        <img src="https://www.roblox.com/bust-thumbnail/image?userId=${userData.UserId}&width=420&height=420&format=png" class="profileImage"/>
        <br/>
        <h1 class="floatHead">${userData.Username}</h1>
        <h2 class="jobs">${arrayToEnglish(userData.Jobs)}</h1>
        <h2 class="floatHead">About Me</h1>
        <p class="profileBody" style="margin-left:260px;">
            ${userData.Description}
        </p>
        <br style="clear:left;"/><br/>
        <h2 class="profileHead">Skills</h2>
        <p class="profileBody">
            ${userData.Skills}
        </p>
        <h2 class="profileHead">Work Examples</h2>
        <p class="profileBody">
            ${getExamples()}
        </p>
        <h2 class="profileHead">Prices</h2>
        <p class="profileBody">
            ${userData.Rate}
        </p>
        <h2 class="profileHead">Contact Info</h2>
        ${getContacts()}
    </div>`;
};

//Setup the search page
function setup() {
    //Show the creator types
    let creatorList = document.getElementById("creatorTypes");
    for (let i in CREATOR_TYPES) {
        creatorList.innerHTML += `
        <option value="${CREATOR_TYPES[i]}">
            ${CREATOR_TYPES[i]}
        </option>`;
    };
};

//Search for developers
function search() {
    //Reset the page
    let devList = document.getElementById("devs");
    devList.innerHTML = "";

    let creatorList = document.getElementById("creatorTypes");
    let category = creatorList.value;

    function addDev(devInfo,i) {
        devList.innerHTML += `
        <div class="dev" onClick="openProfile(${i});">
            <h1 class="devHead">${devInfo.Username}</h1>
            <h2 class="devHead">${devInfo.Jobs[0]}</h1>
            <img class="devPreview" src="https://www.roblox.com/headshot-thumbnail/image?userId=${devInfo.UserId}&width=420&height=420&format=png"/>
        </div>`;
    };

    if (category && category != "") {
        //Show all of the developers in a category
        for (let i in developers) {
            let devInfo = developers[i];
            for (let j in devInfo.Jobs) {
                if (devInfo.Jobs[j] == category) {
                    //Developer meets the category
                    addDev(devInfo,i);
                    break;
                };
            };
        };
    } else {
        //Show all of the developers
        for (let i in developers) {
            addDev(developers[i],i);
        };
    };
    devList.innerHTML += "<br style='clear:left'/>";
};