const urlPageTitle = "JS SPA Routing";

document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    urlRoute();
});

const urlRoutes = {
    404: {
        template: "./src/templates/404.html",
        title: "404 | " + urlPageTitle,
        description: "Page not found"
    },
    "/": {
        template: "./src/templates/home.html",
        title: "Home | " + urlPageTitle,
        description: "This is the homepage"
    },
    "/about": {
        template: "./src/templates/about.html",
        title: "About | " + urlPageTitle,
        description: "This is the about us page"
    },
    "/contact": {
        template: "./src/templates/contact.html",
        title: "Contact | " + urlPageTitle,
        description: "This is the contact us page"
    },

}

const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    console.log(event.target.href);
    urlLocationHandler();
}

const urlLocationHandler = async () => {
    let location = window.location.pathname;
    if (location.length === 0) {
        location = "/";
    }

    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template).then((response) => response.text());
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document.querySelector('meta[name="description"]').setAttribute("Content", route.description)
}

window.onpopstate = urlLocationHandler;
window.route = urlRoute;

urlLocationHandler();