const portfolio = document.querySelector("#portfolio");

portfolio.addEventListener("click", event => {
    event.preventDefault();
    let element = event.target;

    if(element.matches(".card-img-top") || element.matches(".card-text") || element.matches(".card-body")){
        let name = element.getAttribute("data-name");
        printAbout(name);
    }
})

const printAbout = name =>{
    while(portfolio.firstChild){
        portfolio.removeChild(portfolio.firstChild);
    }

    switch(name){
        case "word-guess":
            website("Country Guessing Game", "word-guess", "https://b-vu.github.io/word-guess/", "https://github.com/b-vu/word-guess");
            break;

        case "weather":
            website("Weather Dashboard", "weather", "https://b-vu.github.io/weather-dashboard/", "https://github.com/b-vu/weather-dashboard");
            break;

        case "planner":
            website("Workday Planner", "planner", "https://b-vu.github.io/planner/", "https://github.com/b-vu/planner");
            break;
        
        case "password":
            website("Password Generator", "password", "https://b-vu.github.io/password-generator/", "https://github.com/b-vu/password-generator");
            break;

        case "floor":
            website("Floor Planner", "floor", "https://kilomaps.web.app/", "https://github.com/b-vu/kiloMaps");
            break;

        case "quiz":
            website("Formula 1 Quiz", "quiz", "https://b-vu.github.io/quiz/", "https://github.com/b-vu/quiz");
    }
}

const website = (title, image, url, githubURL) => {
    const header = document.querySelector("#title");
    header.innerHTML = title;

    const div = document.createElement("div");
    div.setAttribute("class", "col-12");
    div.setAttribute("style", "text-align:center");
    portfolio.appendChild(div);

    const br = document.createElement("br")
    div.appendChild(br);

    const screenshotLink = document.createElement("a");
    screenshotLink.setAttribute("href", url)
    div.appendChild(screenshotLink);
    screenshotLink.addEventListener("click", () => window.location.href = url);

    const screenshot = document.createElement("img");
    screenshot.setAttribute("src", "Assets/images/" + image + "-screenshot.png");
    screenshot.setAttribute("alt", title);
    screenshot.setAttribute("style", "width:100%; margin-bottom:20px");
    screenshotLink.appendChild(screenshot);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("style", "color:rgb(32,32,32); font-size:28px; font-weight:bold");
    link.innerHTML = "Website";
    div.appendChild(link);
    link.addEventListener("click", () => window.location.href = url);

    const br2 = document.createElement("br")
    div.appendChild(br2);

    const link2 = document.createElement("a");
    link2.setAttribute("href", githubURL);
    link2.setAttribute("style", "color:rgb(32,32,32); font-size:28px; font-weight:bold");
    link2.innerHTML = "GitHub Repository";
    div.appendChild(link2);
    link2.addEventListener("click", () => window.location.href = githubURL);
}