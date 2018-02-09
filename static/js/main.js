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
                "enter_event": () => changeBackgroundImage("bucket/mixed_media-thumbnail.JPG"),
                "leave_event": () => changeBackgroundImage("bucket/background.JPG")
            },
            {
                "selector": "#watercolor",
                "enter_event": () => changeBackgroundImage("bucket/watercolor-thumbnail.JPG"),
                "leave_event": () => changeBackgroundImage("bucket/background.JPG")
            },
            {
                "selector": "#ink",
                "enter_event": () => changeBackgroundImage("bucket/ink-thumbnail.JPG"),
                "leave_event": () => changeBackgroundImage("bucket/background.JPG")
            },
            {
                "selector": "#sketchbook",
                "enter_event": () => changeBackgroundImage("bucket/sketchbook-thumbnail.JPG"),
                "leave_event": () => changeBackgroundImage("bucket/background.JPG")
            }];
rows = {
            "selector": "div.row",
            "leave_event": () => changeBackgroundImage("bucket/background.JPG")
        };
posters.forEach(
    p => { 
        let el = document.querySelector(p.selector);
        el.addEventListener("mouseover", p.enter_event);
    }
);
document.querySelectorAll(rows.selector).forEach(
    el => el.addEventListener("mouseleave", rows.leave_event)
);
