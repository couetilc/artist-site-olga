var changeBackgroundImage = function change_bg (element, img_path) {
    //let style = window.getComputedStyle(element);
    element.style.backgroundImage = "url(" + img_path + ")";
}

var isDisplayed = function is_disp (element) {
    let display = window.getComputedStyle(element).display;
    return display !== "none" && display !== "";
}

var toggleDisplay = function toggle_disp (element) { 
    element.style.display = !isDisplayed(element) ? "flex" : "none";
};

main_background_path = theme_dir + "/img/background.jpg";
main_background_element = document.querySelector("body");

posters =  [{ 
                "selector": "#mixed-media",
                "background_path": theme_dir + "/img/mixed_media-background.jpg",
                "mouseover_event": (element, img_path) =>
                    changeBackgroundImage(element, img_path),
                "mouseleave_event": (element, img_path) => 
                    changeBackgroundImage(element, img_path)
            },
            {
                "selector": "#watercolor",
                "background_path": theme_dir + "/img/watercolor-background.jpg",
                "mouseover_event": (element, img_path) =>
                    changeBackgroundImage(element, img_path),
                "mouseleave_event": (element, img_path) => 
                    changeBackgroundImage(element, img_path)
            },
            {
                "selector": "#ink",
                "background_path": theme_dir + "/img/ink-background.jpg",
                "mouseover_event": (element, img_path) =>
                    changeBackgroundImage(element, img_path),
                "mouseleave_event": (element, img_path) => 
                    changeBackgroundImage(element, img_path)
            },
            {
                "selector": "#sketchbook",
                "background_path": theme_dir + "/img/sketchbook-background.jpg",
                "mouseover_event": (element, img_path) =>
                    changeBackgroundImage(element, img_path),
                "mouseleave_event": (element, img_path) => 
                    changeBackgroundImage(element, img_path)
            }];

portfolio = [{
                "selector": "section.portfolio",
                "background_path": main_background_path,
                "mouseleave_event": (element, img_path) => 
                    changeBackgroundImage(element, img_path)
            }];

controls = document.querySelectorAll(".controls > svg");

posters.forEach(p => {
    p.element = document.querySelector(p.selector);
    p.element.addEventListener("mouseover", () => 
        p.mouseover_event(main_background_element, p.background_path)
    );
});

portfolio.forEach(p => {
    p.element = document.querySelector(p.selector);
    p.element.addEventListener("mouseleave", () => 
        p.mouseleave_event(main_background_element, p.background_path)
    );
});

controls.forEach(svg => svg.addEventListener("click", () => 
    controls.forEach(svg => toggleDisplay(svg))
));
