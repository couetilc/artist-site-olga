var changeBackgroundImage = function(imgpath) {
    let element = document.querySelector("body");
    let style = window.getComputedStyle(element);
    element.style.backgroundImage = "url(" + imgpath + ")";
}

var isDisplayed = function(element) {
    let display = window.getComputedStyle(element).display;
    return display !== "none" && display !== "";
}

var toggleDisplay = function(element) { 
    element.style.display = !isDisplayed(element) ? "flex" : "none";
};

controls = document.querySelectorAll(".controls > svg");
controls.forEach(svg => svg.addEventListener("click", 
    () => controls.forEach(svg => toggleDisplay(svg))
));

posters =  [{ 
                "selector": "#mixed-media",
                "enter_event": () => changeBackgroundImage("static/img/mixed_media-background.JPG"),
                "leave_event": () => changeBackgroundImage("static/img/background.JPG")
            },
            {
                "selector": "#watercolor",
                "enter_event": () => changeBackgroundImage("static/img/watercolor-background.JPG"),
                "leave_event": () => changeBackgroundImage("static/img/background.JPG")
            },
            {
                "selector": "#ink",
                "enter_event": () => changeBackgroundImage("static/img/ink-background.JPG"),
                "leave_event": () => changeBackgroundImage("static/img/background.JPG")
            },
            {
                "selector": "#sketchbook",
                "enter_event": () => changeBackgroundImage("static/img/sketchbook-background.JPG"),
                "leave_event": () => changeBackgroundImage("static/img/background.JPG")
            }];

portfolio = {
            "selector": "section.portfolio",
            "leave_event": () => changeBackgroundImage("static/img/background.JPG")
        };

posters.forEach(
    p => { 
        let el = document.querySelector(p.selector);
        el.addEventListener("mouseover", p.enter_event);
    }
);

document
    .querySelector(portfolio.selector)
    .addEventListener("mouseleave", portfolio.leave_event);
