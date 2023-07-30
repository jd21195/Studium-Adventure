// JavaScript für die Funktionalität des Spiels
document.addEventListener("DOMContentLoaded", function() {
    const gameScreen = document.getElementById("gameScreen");
    const gameImage = document.getElementById("gameImage");
    const gameText = document.getElementById("gameText");
    const choices = document.getElementById("choices");

    // Starte das Spiel
    startGame();

    function startGame() {
        // Setze den Spielbildschirm auf den Anfangszustand
        gameImage.src = "uni.jpeg";
        gameText.textContent = "Es ist dein erster Tag an der Universität. Wähle mit Bedacht, wie du dich in diesem neuen Abenteuer verhalten möchtest!";
        choices.innerHTML = "";

        // Füge die Auswahlmöglichkeiten hinzu
        addButtonChoice("Mit Kommilitonen reden", "kommilitonen");
        addButtonChoice("Zur ersten Vorlesung gehen", "vorlesung");
    }

    function addButtonChoice(text, target) {
        const button = document.createElement("button");
        button.className = "choice-button";
        button.textContent = text;
        button.addEventListener("click", function() {
            makeChoice(target);
        });
        choices.appendChild(button);
    }

    function makeChoice(target) {
        switch (target) {
            case "kommilitonen":
                // Animation für den Übergang
                animateTransition("Du triffst eine Gruppe von Kommilitonen, die genauso aufgeregt wie du sind. Ihr unterhaltet euch angeregt über eure Studiengänge und freut euch auf die gemeinsame Zeit.", "student.jpeg", "vorlesung");
                break;
            case "vorlesung":
                // Animation für den Übergang
                animateTransition("Du betrittst den Hörsaal und nimmst deinen Platz ein. Die erste Vorlesung beginnt, und du lauschst gespannt den Worten des Professors. Es ist der Beginn eines neuen Kapitels in deinem Leben.", "vorlesung.jpeg", "entscheidung1");
                break;
            case "entscheidung1":
                // Entscheidung 1
                gameText.textContent = "Während der Vorlesung bekommst du eine Nachricht von einem Freund, der dich zu einer Party einlädt. Was möchtest du tun?";
                choices.innerHTML = "";
                addButtonChoice("Die Party besuchen", "party");
                addButtonChoice("In der Vorlesung bleiben", "vorlesung2");
                break;
            case "vorlesung2":
                // Animation für den Übergang
                animateTransition("Die Vorlesung ist langweilig, aber du entscheidest dich, trotzdem zu bleiben. Am Ende bekommst du die Möglichkeit, dich für eine Arbeitsgruppe anzumelden.", "vorlesung2.jpeg", "entscheidung2");
                break;
            case "entscheidung2":
                // Entscheidung 2
                gameText.textContent = "In der Arbeitsgruppe arbeitest du mit neuen Leuten zusammen. Du kannst dich entweder als Anführer beweisen oder im Hintergrund bleiben. Was wählst du?";
                choices.innerHTML = "";
                addButtonChoice("Anführer sein", "anfuehrer");
                addButtonChoice("Im Hintergrund bleiben", "hintergrund");
                break;
            case "anfuehrer":
                // Animation für den Übergang
                animateTransition("Du übernimmst die Rolle des Anführers und leitest das Team erfolgreich. Deine Kommilitonen sind beeindruckt von deiner Führungsstärke.", "anfuehrer.jpeg", "ende");
                break;
            case "hintergrund":
                // Animation für den Übergang
                animateTransition("Du arbeitest im Hintergrund und unterstützt das Team mit deinen Fähigkeiten. Deine Zuverlässigkeit wird sehr geschätzt.", "hintergrund.jpeg", "ende");
                break;
            case "party":
                // Animation für den Übergang
                animateTransition("Die Party ist ein großer Spaß, aber du verschläfst am nächsten Tag die Vorlesung. Es ist eine gute Gelegenheit, neue Leute kennenzulernen, aber die Vorlesung verpasst du.", "party.jpeg", "vorlesung2");
                break;
            case "ende":
                // Ende des Spiels
                gameText.textContent = "Herzlichen Glückwunsch! Du hast verschiedene Entscheidungen getroffen und dein Studium erfolgreich begonnen. Viel Erfolg auf deinem weiteren Weg!";
                choices.innerHTML = "";
                break;
            default:
                break;
        }
    }

    // Funktion für die Animation des Übergangs
    function animateTransition(newText, newImage, nextTarget) {
        gameScreen.animate(
            [
                { opacity: 1 },
                { opacity: 0 }
            ],
            {
                duration: 500,
                easing: "ease-out"
            }
        ).onfinish = function() {
            gameText.textContent = newText;
            gameImage.src = newImage;
            choices.innerHTML = "";
            addButtonChoice("Weiter", nextTarget);

            gameScreen.animate(
                [
                    { opacity: 0 },
                    { opacity: 1 }
                ],
                {
                    duration: 500,
                    easing: "ease-in"
                }
            );
        };
    }
});
