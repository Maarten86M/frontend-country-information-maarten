//1. Maak een 'Zoek'-knop op de pagina en koppel deze aan een functie die de gegevens over België ophaalt en dit in de console logt. Tip: Als de de documentatie bekijkt en op async zoekt, vindt je een voorbeeld van een GET-request.

async function getBelgium() {
    const response = await axios.get("https://restcountries.eu/rest/v2/alpha/AW"
    );
    const countryName = response.data.name;
    const subRegion = response.data.subregion;
    const population = response.data.population;
    console.log(countryName, "is situated in", subRegion, ". It has a population of", population, "people.");
    const capital = response.data.capital;
    console.log("The capital is", capital);

    // opdracht 4, gekopieerd naar de volgende opdracht (lijn58)




    // opdracht 7
    // ophalen
    const flagUrl = response.data.flag;
    const flagIMG = document.getElementById("flag-img");
    flagIMG.setAttribute("src", flagUrl);

    const countryNameLine = document.getElementById("name-header");
    countryNameLine.textContent = countryName;
    document.body.appendChild(countryNameLine);

    const situatedText = document.getElementById("text-line-one");
    situatedText.textContent = countryName + " is situated in " + subRegion + ". It has a population of " + population + " people.";
    document.body.appendChild(situatedText);

    const capitalText = document.getElementById("text-line-two");
    capitalText.textContent = "The capital is " + capital;
    document.body.appendChild(capitalText);
}


// opdracht 8 bij enter de waarde van belgie

const inputField = document.getElementById("text-input");
inputField.addEventListener("keyup" , async (e) => {
    if (e.key === 'Enter') {
        const guestInput = inputField.value;
        // opdracht 9
        try {
            const response = await axios.get(
                "https://restcountries.eu/rest/v2/name/" + guestInput + "?fullText=true"
            );
            const countryName = response.data[0].name;
            const subRegion = response.data[0].subregion;
            const population = response.data[0].population;
            const capital = response.data[0].capital;
            const valuta = response.data[0].currencies;
            const valutaName = valuta.map((currencie) => {
                return currencie.name;
            })

            function makevalutaString() {
                switch (valutaName.length) {
                    case 1:
                        return "and you can pay with " + valutaName[0]+".";
                    case 2:
                        return "and you can pay with " + valutaName[0] + ", " + valutaName[1]+".";
                    case 3:
                        return "and you can pay with " + valutaName[0] + ", " + valutaName[1] + ", " + valutaName[2]+".";
                    case 4:
                        return "and you can pay with " + valutaName[0] + ", " + valutaName[1] + ", " + valutaName[2] + ", " + valutaName[3]+".";
                    case 5:
                        return "and you can pay with " + valutaName[0] + ", " + valutaName[1] + ", " + valutaName[2] + ", " + valutaName[3] + ", " + valutaName[4]+".";
                    case 6:
                        return "and you can pay with " + valutaName[0] + ", " + valutaName[1] + ", " + valutaName[2] + ", " + valutaName[3] + ", " + valutaName[4] + ", " + valutaName[5]+".";
                    case 7:
                        return "and you can pay with " + valutaName[0] + ", " + valutaName[1] + ", " + valutaName[2] + ", " + valutaName[3] + ", " + valutaName[4] + ", " + valutaName[5] + ", " + valutaName[6]+".";
                    case 8:
                        return "and you can pay with " + valutaName[0] + ", " + valutaName[1] + ", " + valutaName[2] + ", " + valutaName[3] + ", " + valutaName[4] + ", " + valutaName[5] + ", " + valutaName[6] + ", " + valutaName[7]+".";
                    case 9:
                        return "and you can pay with " + valutaName[0] + ", " + valutaName[1] + ", " + valutaName[2] + ", " + valutaName[3] + ", " + valutaName[4] + ", " + valutaName[5] + ", " + valutaName[6] + ", " + valutaName[7] + ", " + valutaName[8]+".";
                    case 10:
                        return "and you can pay with " + valutaName[0] + ", " + valutaName[1] + ", " + valutaName[2] + ", " + valutaName[3] + ", " + valutaName[4] + ", " + valutaName[5] + ", " + valutaName[6] + ", " + valutaName[7] + ", " + valutaName[8] + ", " + valutaName[9]+".";
                    default:
                        return "Dat is raar geen valuta!! ";
                }
            }

            const valutaOutcome = makevalutaString();


            // opdracht 6
            const outcomeLan = response.data[0].languages;
            const langName = outcomeLan.map((lang) => {
                return lang.name;
            })

            function makeLanguageString() {
                switch (langName.length) {
                    case 1:
                        return "They speak " + langName[0]+".";
                    case 2:
                        return "They speak " + langName[0] + " and " + langName[1]+".";
                    case 3:
                        return "They speak " + langName[0] + ", " + langName[1] + " and " + langName[2]+".";
                    case 4:
                        return "They speak " + langName[0] + ", " + langName[1] + ", " + langName[2] + " and " + langName[3]+".";
                    case 5:
                        return "They speak " + langName[0] + ", " + langName[1] + ", " + langName[2] + ", " + langName[3] + " and " + langName[4]+".";
                    default:
                        return "Geen taal?";
                }
            }

            const languageOutcome = makeLanguageString()

            // opdracht 7
            // ophalen
            const flagUrl = response.data[0].flag;


            const flagIMG = document.getElementById("flag-img");
            flagIMG.setAttribute("src", flagUrl);
            flagIMG.setAttribute("width", "75");
            flagIMG.setAttribute("height", "40");

            const countryNameLine = document.getElementById("name-header");
            countryNameLine.textContent = countryName;
            document.body.appendChild(countryNameLine);

            const situatedText = document.getElementById("text-line-one");
            situatedText.textContent = countryName + " is situated in " + subRegion + ". It has a population of " + population + " people.";
            document.body.appendChild(situatedText);

            const capitalText = document.getElementById("text-line-two");
            capitalText.textContent = "The capital is " + capital + valutaOutcome;
            document.body.appendChild(capitalText);

            // opdracht 6 deel (2)
            const langText = document.getElementById('text-line-three');
            langText.textContent = languageOutcome;
            document.body.appendChild(langText);

            // opdracht 13
            const element = document.getElementById('name-error');
            element.parentNode.removeChild(element);
        }
            // opdracht 12
        catch (e) {
            const errorMessage = document.getElementById('name-error');
            errorMessage.textContent = "Wrong input, please try again!"
            document.body.appendChild(errorMessage);
        }
    }
});

const buttonOne = document.getElementById("button-one");
buttonOne.addEventListener("click", getBelgium);

// 2. Maak op basis van de response de volgende string en log dit in de console: [country-naam] is situated in [subarea-name]. It has a population of [amount] people.
// antwoord: zie lijn 6 t/m 9


// 3. Maak op basis van de response de volgende string en log dit in de console: The capital is [city]
// antwoord zie lijn 10 t/m 11

//4. Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt. In een land kunnen één of twee currencies gebruikt worden:
// antwoord: zie lijn 58, gekopieerd naar een latere opdracht.


// 5 Check of alles nog steeds werkt als je de gegevens over Aruba of Duitsland ophaalt!
// antwoord: hij werkt nog.


// 6 Bonusopdracht: Maak een functie die ongeacht het aantal talen die in een land gesproken worden, een string maakt:
// antwoord: zie lijn 89 t/m 111.


// 7. Zorg ervoor dat de opgehaalde data op de volgende manier wordt toegevoegd aan de DOM:
// antwoord: lijn 20 t/m lijn 34.


// 8 Maak een inputveld op de pagina en zorg ervoor dat als de gebruiker op enter drukt, de functie wordt aangeroepen waarmee de gegevens over België worden opgehaald.
// antwoord: zie vanaf lijn 40 tot eind.


// 9. Zorg ervoor dat de waarde uit het input veld wordt gebruikt als query voor het GET request.
//antwoord: zie lijn 47

//10 Zorg ervoor dat de waarde van het input veld wordt leeggemaakt na elke zoekopdracht.
// antwoord index.html lijn 16

//11 Zorg ervoor dat er altijd maar één zoekresultaat op de pagina staat.
// antwoord: dat is bij mij het geval.

// 12 Zorg ervoor dat als er naar een land wordt gezocht dat niet bestaat, er een foutmelding in de DOM wordt gezet. Tip: als er een ongeldige API call wordt gemaakt, zal de response in het catch blok terecht komen.
// antwoord: zie lijn 145  tm 150

// 13 Zorg ervoor dat als je na een ongeldige API call weer een geldige API call maakt, de foutmelding verdwenen is.
// antwoord : zie lijn 141
