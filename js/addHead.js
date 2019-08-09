//Load in the head of the page without having to update every page.
function addHead() {
    let Head = document.getElementById("head");
    Head.innerHTML = 
    `<table class="menu">
        <tr>
            <td class="menuButton">
                <img src="assets/home_button.png" alt="Home Button" class="menuButton"/>
            </td>
            <td class="menuButton">
                <img src="assets/find_creators_button.png" alt="Home Button" class="menuButton"/>
            </td>
            <td class="menuButton">
                <img src="assets/registration_button.png" alt="Home Button" class="menuButton"/>
            </td>
            <td class="searchCell">
                <input type="textbox" placeholder="Search the site"/>
            </td>
        </tr>
    </table>`;
};