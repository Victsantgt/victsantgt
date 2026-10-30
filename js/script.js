// TRADUCCIÓN

const translations = {

    es: {
        "hero-description": "Technical Game Designer, Gameplay Programmer y Audio Designer | Estudiante de Diseño y Desarrollo de Videojuegos en URJC | Secretario de asociación en Virtual Soul y Clarinetista en Orquesta Virtual Soul",

        "about-title": "Sobre mí",
        "about-p1": "¡Buenas! Soy Víctor (también conocido como Victsantgt), un estudiante de videojuegos especializado en programación (Technical Game Design y Gameplay Programming) y audio (composición, diseño e implementación).",
        "about-p2": "Para acercarme a la industria, he querido participar en la mayor cantidad de ferias de videojuegos posibles, incluso ayudando a organizar una dentro de mi universidad (la GameGen). Haber tenido estas oportunidades me han ayudado a poder desenvolverme en este mundo, y a conocer a muchísimos devs increíbles, que me inspiran a crear proyectos propios.",
        "about-p3": "Otra forma que he tenido de conectar con el mundo de los videojuegos ha sido formando parte de la Orquesta Virtual Soul, en la que con mis compañeros puedo celebrar la música de tantos videojuegos que han marcado mi vida.",

        "about-b1": "Mis Proyectos",
        "about-b2": "Mi Música",
        "about-b3": "Conóceme más",

        "copyright": "© 2026 Victsantgt. Todos los derechos reservados."
    },

    en: {
        "hero-description": "Technical Game Designer, Gameplay Programmer and Audio Designer | Game Design and Development Student at URJC | Secretary at Virtual Soul and Clarinetist at Virtual Soul Orchestra",
        
        "about-title": "About me",
        "about-p1": "Hi! I’m Victor (also known as Victsantgt), a gamedev student specializing in programming (Technical Game Design y Gameplay Programming) and audio (composing, design and implementation).",
        "about-p2": "To make an space for me space in the industry, I wanted to take part on as many videogame conventions as possible, even helping organize one at my university (GameGen). Having these many opportunities have helped me grow as a developer, and has made me meet many incredible devs, who inspire me to make my own projects.",
        "about-p3": "Another way that I’ve connected with the world of video games has been by being part of the Virtual Soul Orchestra, where, together with my bandmates, I can celebrate the music of many video games that have left their mark on my life.",

        "about-b1": "My Projects",
        "about-b2": "My Music",
        "about-b3": "Know me better",

        "copyright": "© 2026 Victsantgt. All rights reserved."
    }
};

let currentLanguage = localStorage.getItem("language") || "es";

const languageButton = document.getElementById("language-button");

function changeLanguage(language) {

    currentLanguage = language;
    localStorage.setItem("language", language);

    document.documentElement.lang = language;

    document.querySelectorAll("[data-translate]").forEach(element => {

        const key = element.dataset.translate;

        if (translations[language][key] !== undefined) {
            element.textContent = translations[language][key];
        }

    });

    languageButton.textContent = language === "es" ? "ES" : "EN";

    document.title = language === "es" ? "Portfolio de Victsantgt" : "Victsantgt's Portfolio";
}

changeLanguage(currentLanguage);

languageButton.addEventListener("click", () => {

    const newLanguage = currentLanguage === "es" ? "en" : "es";

    changeLanguage(newLanguage);

});