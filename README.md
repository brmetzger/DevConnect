# DevConnect
Developer Connect is a place where  Roblox developers of all kinds can find and connect with each other to collaborate on games and projects. Here you can search for specific types of developers for your project such as: artists, music composers, modelers and clothing designers.
# Adding Profiles
Due to the lack of a web server, profiles must be added to the website manually. For a better explanation, contact gitrog#0001 on Discord, I am willing to screenshare with anyone who is confused.

1. Open js/developers.js
2. Copy one of the associative arrays nested within the "DEVELOPERS" array.
3. Paste the array after the final associative array.
4. Add a comma after the end of the previous array.
5. Fill in the Username entry with their Roblox username, and the UserId with their Roblox user ID.
6. Fill in all jobs that apply to the user in the Jobs array. Exact job names are listed in js/search.js, be aware that they are case sensitive.
7. Put the user's description into the description entry.
8. Fill in their contact information in the Contacts array. Do not include the @ symbol in a Twitter username. To get a Discord User ID, follow [this article](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID).
9. Commit your changes.