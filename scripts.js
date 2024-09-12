// Translation data
const translations = {
    en: {
        introTitle: "Welcome to the Computer Networks Module",
        introText:
            "This website contains all documents related to the computer networks module.",
        documentsTitle: "Course Documents",
        labsTitle: "Lab Documents",

        chapter0Title: "Chapter 0: Introduction to Teleinformatics",
        chapter0Course: "Course Document",
        chapter0Exercises: "Exercises",
        chapter0Solutions: "Solutions",
        chapter0Quiz: "Quiz",

        chapter1Title: "Chapter 1: Information Transmission (Layer 1: Physical)",
        chapter1Course: "Course Document",
        chapter1Exercises: "Exercises",
        chapter1Solutions: "Solutions",
        chapter1Quiz: "Quiz",

        chapter2Title:
            "Chapter 2: Encoding and Error Protection (Layer 2: Data Link)",
        chapter2Course: "Course Document",
        chapter2Exercises: "Exercises",
        chapter2Solutions: "Solutions",
        chapter2Quiz: "Quiz",

        chapter3Title: "Chapter 3: Local Area Network Architecture",
        chapter3Course: "Course Document",
        chapter3Exercises: "Exercises",
        chapter3Solutions: "Solutions",
        chapter3Quiz: "Quiz",

        chapter4Title: "Chapter 4: TCP/IP Architecture",
        chapter4Course: "Course Document",
        chapter4Exercises: "Exercises",
        chapter4Solutions: "Solutions",
        chapter4Quiz: "Quiz",

        lab1Title: "Lab 1: Presentation of the work environment",
        lab1Guide: "Lab Guide",
        lab1Quiz: "Lab Quiz",

        lab2Title: "Lab 2: Creation of a local network",
        lab2Guide: "Lab Guide",
        lab2Quiz: "Lab Quiz",

        lab3Title: "Lab 3: Configuration of subnets and routers",
        lab3Guide: "Lab Guide",
        lab3Quiz: "Lab Quiz",

        lab4Title: "Lab 4: Hub vs Switch and MAC addresses",
        lab4Guide: "Lab Guide",
        lab4Quiz: "Lab Quiz",

        lab5Title: "Lab 5: The ARP protocol",
        lab5Guide: "Lab Guide",
        lab5Quiz: "Lab Quiz",

        lab6Title: "Lab 6: Configuration of static routing",
        lab6Guide: "Lab Guide",
        lab6Quiz: "Lab Quiz",
        // Add more chapters and labs as needed
    },
    fr: {
        introTitle: "Bienvenue dans le module Réseaux Informatiques",
        introText:
            "Ce site contient tous les documents relatifs au module de réseaux informatiques.",
        documentsTitle: "Documents du Cours",
        labsTitle: "Documents des Travaux Pratiques",

        chapter0Title: "Chapitre 0 : Introduction à la téléinformatique",
        chapter0Course: "Document du Cours",
        chapter0Exercises: "Exercices",
        chapter0Solutions: "Solutions",
        chapter0Quiz: "Quiz",

        chapter1Title:
            "Chapitre 1 : Transmission de l’information (couche1 : physique)",
        chapter1Course: "Document du Cours",
        chapter1Exercises: "Exercices",
        chapter1Solutions: "Solutions",
        chapter1Quiz: "Quiz",

        chapter2Title:
            "Chapitre 2 : Codage et protection contre les erreurs (couche2 : liaison)",
        chapter2Course: "Document du Cours",
        chapter2Exercises: "Exercices",
        chapter2Solutions: "Solutions",
        chapter2Quiz: "Quiz",

        chapter3Title: "Chapitre 3 : Architecture des Réseaux Locaux",
        chapter3Course: "Document du Cours",
        chapter3Exercises: "Exercices",
        chapter3Solutions: "Solutions",
        chapter3Quiz: "Quiz",

        chapter4Title: "Chapitre 4 : L’architecture TCP/IP",
        chapter4Course: "Document du Cours",
        chapter4Exercises: "Exercices",
        chapter4Solutions: "Solutions",
        chapter4Quiz: "Quiz",

        lab1Title: "TP 1: Présentation de l’environnement de travail",
        lab1Guide: "Guide du TP",
        lab1Quiz: "Quiz du TP",

        lab2Title: "TP 2: Création d'un réseau local",
        lab2Guide: "Guide du TP",
        lab2Quiz: "Quiz du TP",

        lab3Title: "TP 3: Configuration de sous-réseaux et de routeurs",
        lab3Guide: "Guide du TP",
        lab3Quiz: "Quiz du TP",

        lab4Title: "TP 4: Hub vs Switch et les adresses MAC",
        lab4Guide: "Guide du TP",
        lab4Quiz: "Quiz du TP",

        lab5Title: "TP 5: Le protocole ARP",
        lab5Guide: "Guide du TP",
        lab5Quiz: "Quiz du TP",

        lab6Title: "TP 6: Configuration du routage statique",
        lab6Guide: "Guide du TP",
        lab6Quiz: "Quiz du TP",
        // Add more chapters and labs as needed
    },
};

// Document links for each language
const documentLinks = {
    en: {
        chapter1: {
            course:
                "https://www.redhat.com/en/services/certification/rhcsa?pfe-3vkyzcqco=training",
            exercises: "https://example.com/en/chapter1-exercises.pdf",
            solutions: "https://example.com/en/chapter1-solutions.pdf",
            quiz: "https://example.com/en/chapter1-quiz.pdf",
        },
        lab1: {
            guide: "https://example.com/en/lab1-guide.pdf",
            quiz: "https://example.com/en/lab1-quiz.pdf",
        },
		lab2: {
            guide: "https://drive.google.com/file/d/1OGHTnKKo_6VeWKEf8myaOh5gBbwollTB/view?usp=drive_link",
            quiz: "https://docs.google.com/forms/d/16spSB61Rl0gZAradZvTvcBSqJSiNr-Eg1cTRvL_Qdl4/edit?usp=drivesdk",
        },
		lab3: {
            guide: "https://drive.google.com/file/d/1SpGweDT43suPgjf-BGsunUMC34w7uwLV/view?usp=drive_link",
            quiz: "https://docs.google.com/forms/d/16XeHLtLCLpDZgRj0hVtEpM6XbWMbv1lsGGPaJAQHKoE/edit?usp=drivesdk",
        },
		lab4: {
            guide: "https://drive.google.com/file/d/1QVRdszl-9JCqe2MXK1_0NMKBMSYiII-f/view?usp=drive_link",
            quiz: "https://docs.google.com/forms/d/1t2tKITrn19nh6gvdVDv6waoMRdrjioTKsYCmKQHjRPM/edit?usp=drivesdk",
        },
		lab5: {
            guide: "https://drive.google.com/file/d/1E9GcE1RjFZIurDzXQcZWOo9seFopMIiQ/view?usp=drive_link",
            quiz: "https://docs.google.com/forms/d/1t2tKITrn19nh6gvdVDv6waoMRdrjioTKsYCmKQHjRPM/edit?usp=drivesdk",
        },
		lab6: {
            guide: "https://drive.google.com/file/d/1W0Ty7xs_FD7DbhC7iKStKxbcfQcZ_YLm/view?usp=drive_link",
            quiz: "https://docs.google.com/forms/d/1JunmlkeJA1jbv963EDVqpponrvCqocoGDPzcoFJtKU4/edit?usp=drivesdk",
        },
        // Add more chapters and labs as needed
    },
    fr: {
        chapter1: {
            course:
                "https://docs.google.com/document/d/1ZmhyAICFT1mXCsndACAciiPS_3ewqOiG-dMGdUQ0iNA/edit",
            exercises: "https://example.com/fr/chapter1-exercises.pdf",
            solutions: "https://example.com/fr/chapter1-solutions.pdf",
            quiz: "https://example.com/fr/chapter1-quiz.pdf",
        },
        lab1: {
            guide: "https://example.com/fr/lab1-guide.pdf",
            quiz: "https://example.com/fr/lab1-quiz.pdf",
        },
		lab2: {
            guide: "https://drive.google.com/file/d/1OGHTnKKo_6VeWKEf8myaOh5gBbwollTB/view?usp=drive_link",
            quiz: "https://docs.google.com/forms/d/16spSB61Rl0gZAradZvTvcBSqJSiNr-Eg1cTRvL_Qdl4/edit?usp=drivesdk",
        },
		lab3: {
            guide: "https://drive.google.com/file/d/1SpGweDT43suPgjf-BGsunUMC34w7uwLV/view?usp=drive_link",
            quiz: "https://docs.google.com/forms/d/16XeHLtLCLpDZgRj0hVtEpM6XbWMbv1lsGGPaJAQHKoE/edit?usp=drivesdk",
        },
		lab4: {
            guide: "https://drive.google.com/file/d/1QVRdszl-9JCqe2MXK1_0NMKBMSYiII-f/view?usp=drive_link",
            quiz: "https://docs.google.com/forms/d/1t2tKITrn19nh6gvdVDv6waoMRdrjioTKsYCmKQHjRPM/edit?usp=drivesdk",
        },
		lab5: {
            guide: "https://drive.google.com/file/d/1E9GcE1RjFZIurDzXQcZWOo9seFopMIiQ/view?usp=drive_link",
            quiz: "https://docs.google.com/forms/d/1t2tKITrn19nh6gvdVDv6waoMRdrjioTKsYCmKQHjRPM/edit?usp=drivesdk",
        },
		lab6: {
            guide: "https://drive.google.com/file/d/1W0Ty7xs_FD7DbhC7iKStKxbcfQcZ_YLm/view?usp=drive_link",
            quiz: "https://docs.google.com/forms/d/1JunmlkeJA1jbv963EDVqpponrvCqocoGDPzcoFJtKU4/edit?usp=drivesdk",
        },
        // Add more chapters and labs as needed
    },
};

function switchLanguage(language) {
    // Change the language of the text content
    document.getElementById("introTitle").textContent =
        translations[language].introTitle;
    document.getElementById("introText").textContent =
        translations[language].introText;
    document.getElementById("documentsTitle").textContent =
        translations[language].documentsTitle;
    document.getElementById("labsTitle").textContent =
        translations[language].labsTitle;

    // Update chapters
    document.getElementById("chapter0Title").textContent =
        translations[language].chapter0Title;
    document.getElementById("chapter0Course").textContent =
        translations[language].chapter0Course;
    document.getElementById("chapter0Exercises").textContent =
        translations[language].chapter0Exercises;
    document.getElementById("chapter0Solutions").textContent =
        translations[language].chapter0Solutions;
    document.getElementById("chapter0Quiz").textContent =
        translations[language].chapter0Quiz;

    document.getElementById("chapter1Title").textContent =
        translations[language].chapter1Title;
    document.getElementById("chapter1Course").textContent =
        translations[language].chapter1Course;
    document.getElementById("chapter1Exercises").textContent =
        translations[language].chapter1Exercises;
    document.getElementById("chapter1Solutions").textContent =
        translations[language].chapter1Solutions;
    document.getElementById("chapter1Quiz").textContent =
        translations[language].chapter1Quiz;

    document.getElementById("chapter2Title").textContent =
        translations[language].chapter2Title;
    document.getElementById("chapter2Course").textContent =
        translations[language].chapter2Course;
    document.getElementById("chapter2Exercises").textContent =
        translations[language].chapter2Exercises;
    document.getElementById("chapter2Solutions").textContent =
        translations[language].chapter2Solutions;
    document.getElementById("chapter2Quiz").textContent =
        translations[language].chapter2Quiz;

    document.getElementById("chapter3Title").textContent =
        translations[language].chapter3Title;
    document.getElementById("chapter3Course").textContent =
        translations[language].chapter3Course;
    document.getElementById("chapter3Exercises").textContent =
        translations[language].chapter3Exercises;
    document.getElementById("chapter3Solutions").textContent =
        translations[language].chapter3Solutions;
    document.getElementById("chapter3Quiz").textContent =
        translations[language].chapter3Quiz;

    document.getElementById("chapter4Title").textContent =
        translations[language].chapter4Title;
    document.getElementById("chapter4Course").textContent =
        translations[language].chapter4Course;
    document.getElementById("chapter4Exercises").textContent =
        translations[language].chapter4Exercises;
    document.getElementById("chapter4Solutions").textContent =
        translations[language].chapter4Solutions;
    document.getElementById("chapter4Quiz").textContent =
        translations[language].chapter4Quiz;
    document.getElementById("chapter4Quiz").textContent =
        translations[language].chapter4Quiz;

    // Update labs
    document.getElementById("lab1Title").textContent =
        translations[language].lab1Title;
    document.getElementById("lab1Guide").textContent =
        translations[language].lab1Guide;
    document.getElementById("lab1Quiz").textContent =
        translations[language].lab1Quiz;

    document.getElementById("lab2Title").textContent =
        translations[language].lab2Title;
    document.getElementById("lab2Guide").textContent =
        translations[language].lab2Guide;
    document.getElementById("lab2Quiz").textContent =
        translations[language].lab2Quiz;

    document.getElementById("lab3Title").textContent =
        translations[language].lab3Title;
    document.getElementById("lab3Guide").textContent =
        translations[language].lab3Guide;
    document.getElementById("lab3Quiz").textContent =
        translations[language].lab3Quiz;

    document.getElementById("lab4Title").textContent =
        translations[language].lab4Title;
    document.getElementById("lab4Guide").textContent =
        translations[language].lab4Guide;
    document.getElementById("lab4Quiz").textContent =
        translations[language].lab4Quiz;

    document.getElementById("lab5Title").textContent =
        translations[language].lab5Title;
    document.getElementById("lab5Guide").textContent =
        translations[language].lab5Guide;
    document.getElementById("lab5Quiz").textContent =
        translations[language].lab5Quiz;

    document.getElementById("lab6Title").textContent =
        translations[language].lab6Title;
    document.getElementById("lab6Guide").textContent =
        translations[language].lab6Guide;
    document.getElementById("lab6Quiz").textContent =
        translations[language].lab6Quiz;

    // Update document links
    document.getElementById("chapter1Course").href =
        documentLinks[language].chapter1.course;
    document.getElementById("chapter1Exercises").href =
        documentLinks[language].chapter1.exercises;
    document.getElementById("chapter1Solutions").href =
        documentLinks[language].chapter1.solutions;
    document.getElementById("chapter1Quiz").href =
        documentLinks[language].chapter1.quiz;

    document.getElementById("lab1Guide").href =
        documentLinks[language].lab1.guide;
    document.getElementById("lab1Quiz").href = documentLinks[language].lab1.quiz;
	
	document.getElementById("lab2Guide").href =
        documentLinks[language].lab2.guide;
    document.getElementById("lab2Quiz").href = documentLinks[language].lab2.quiz;
	
	document.getElementById("lab3Guide").href =
        documentLinks[language].lab3.guide;
    document.getElementById("lab3Quiz").href = documentLinks[language].lab3.quiz;
	
	document.getElementById("lab4Guide").href =
        documentLinks[language].lab4.guide;
    document.getElementById("lab4Quiz").href = documentLinks[language].lab4.quiz;
	
	document.getElementById("lab5Guide").href =
        documentLinks[language].lab5.guide;
    document.getElementById("lab5Quiz").href = documentLinks[language].lab5.quiz;
	
	document.getElementById("lab6Guide").href =
        documentLinks[language].lab6.guide;
    document.getElementById("lab6Quiz").href = documentLinks[language].lab6.quiz;

    // Show the documents and labs sections
    document.getElementById("documents").classList.remove("hidden");
    document.getElementById("labs").classList.remove("hidden");
}

function shouldScroll() {
    documents.scrollIntoView({ behavior: "smooth" });
}

// language icons

let languageSwitcher = document.getElementById("language-switcher");

window.onscroll = function () {
    if (scrollY >= 220) {
        languageSwitcher.style.display = "flex";
    } else {
        languageSwitcher.style.display = "none";
    }
};

if (documents.classList.contains("hidden")) {
    languageSwitcher.style.display = "none";
}
