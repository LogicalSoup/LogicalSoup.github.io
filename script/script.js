const Config = {
    name: "soup",
    scale: 1,
    Links: [
        [
            "Connect",
            [
                ["git", "https://github.com/LogicalSoup?tab=repositories"],
                ["gmail", "https://mail.google.com/mail/"],
                ["todo", "https://todoist.com/"]
            ]
        ],
        [
            "Consume",
            [
                ["youtube", "https://www.youtube.com"],
                ["netflix", "https://www.netflix.com/browse/my-list"],
                ["spotify", "https://open.spotify.com/genre/made-for-x"],
                ["amazon", "https://www.amazon.co.uk/gp/video/mystuff/ref=atv_nb_mystuff"],
                ["reddit", "https://www.reddit.com"],
                ["pocket", "https://app.getpocket.com/"]
            ]
        ],
        [
            "Create",
            [
                ["stackoverflow", "https://stackoverflow.com/questions"],
                ["instrutables", "https://www.instructables.com"],
                ["circuito", "https://www.circuito.io/app?components=512,11021"],
                ["w3schools", "https://www.w3schools.com/"],
                ["ifttt", "https://ifttt.com/"],
                ["adafruit-io", "https://io.adafruit.com/Plendo/profile"]
            ]
        ],
        [
            "Cause",
            [
                ["/wg/", "http://boards.4chan.org/wg/catalog"],
                ["r/sp", "https://reddit.com/r/startpages/"],
                ["moko", "http://chloechantelle.com"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
