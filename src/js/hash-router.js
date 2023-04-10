const pageTitle = "JS SPA Routing";

const routes = {
    404: {
        template: "./src/templates/404.html",
        title: "404 | " + pageTitle,
        description: "Page not found"
    },
    "/": {
        template: "./src/templates/home.html",
        title: "Home | " + pageTitle,
        description: "This is the homepage"
    },
    about: {
        template: "./src/templates/about.html",
        title: "About | " + pageTitle,
        description: "This is the about us page"
    },
    contact: {
        template: "./src/templates/contact.html",
        title: "Contact | " + pageTitle,
        description: "This is the contact us page"
    },

};

const locationHandler = async () => {
    let location = window.location.hash.replace("#", "");
    if (location.length === 0) {
        location = "/";
    }

    const route = routes[location] || routes[404];
    const html = await fetch(route.template).then((response) => response.text());
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document.querySelector('meta[name="description"]').setAttribute("Content", route.description)
};

window.addEventListener("hashchange", locationHandler);

locationHandler();