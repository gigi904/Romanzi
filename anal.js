const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const ageOfBirthInput = document.getElementById('DOB');
const addressInput = document.getElementById('address');
const cityInput = document.getElementById('city');
const postalCodeInput = document.getElementById('postal-code');
const provinciaInput = document.getElementById('prov');
const sessoInput = document.getElementsByName('sesso');
const locomozioneInput = document.getElementsByName('locomozione');
const materieSelect = document.getElementById('materie');
const usernameInput = document.getElementById('username');
const mailInput = document.getElementById('mail');

const nameO = document.getElementById('nameO');
const surnameO = document.getElementById('surnameO');
const addressO = document.getElementById('addressO');
const cityO = document.getElementById('cityO');
const postalCodeO = document.getElementById('postal-codeO');
const DOBO = document.getElementById('DOBO');
const sessoO = document.getElementById('sessoO');
const provO = document.getElementById('provO');
const locomozioneO = document.getElementById('locomozioneO');
const materieO = document.getElementById('materieO');
const usernameO = document.getElementById('usernameO');
const mailO = document.getElementById('mailO');

const socialGenerations = {
    "Greatest Generation": { start: 1901, end: 1927 },
    "Silent Generation": { start: 1928, end: 1945 },
    "Baby Boomers": { start: 1946, end: 1964 },
    "Generation X": { start: 1965, end: 1980 },
    "Millennials": { start: 1981, end: 1996 },
    "Generation Z": { start: 1997, end: 2012 },
    "Generation Alpha": { start: 2013, end: 2025 }
}

function creaAnagrafica() {
    const name = nameInput.value
    const surname = surnameInput.value
    const ageOfBirth = ageOfBirthInput.value
    const address = addressInput.value
    const username = usernameInput.value
    const mail = mailInput.value
    const city = cityInput.value
    const postalCode = postalCodeInput.value
    const DOB = new Date(ageOfBirth);
    let generation = "Unknown Generation";

    // Validazioni con RegEx
    // Nome Cognome: puo contenere solo lettere minuscole e maiuscole
    // CAP solo numeri
    // Username (minimo 3 caratteri, max 16. Min-maius, number, special characters)
    // E-Mail (formato valido)
    const patternName = /^[A-Za-z]+$/;
    const patternPostalCode = /^[0-9]{5}$/;
    const patternUsername = /^[a-zA-Z0-9_]{3,16}$/;
    const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patternName.test(name)) {
        alert("Il nome può contenere solo lettere.");
        return;
    }

    if (!patternName.test(surname)) {
        alert("Il cognome può contenere solo lettere.");
        return;
    }

    if (!patternPostalCode.test(postalCode)) {
        alert("Il CAP deve essere composto da 5 numeri.");
        return;
    }

    if (!patternUsername.test(username)) {
        alert("Lo username deve essere lungo tra 3 e 16 caratteri e può contenere lettere, numeri e underscore.");
        return;
    }

    if (!patternEmail.test(mail)) {
        alert("Inserisci un indirizzo e-mail valido.");
        return;
    }



    for (const Generation in socialGenerations) {
        const { start, end } = socialGenerations[Generation];
        if (DOB.getFullYear() >= start && DOB.getFullYear() <= end) {
            generation = Generation;
            break;
        }
    }

    let sesso = "Non specificato";
    for (const s of sessoInput) {
        if (s.checked) {
            sesso = s.value;
            break;
        }
    }
    
    let utente = {
        name: name,
        surname: surname,
        ageOfBirth: DOB.toLocaleDateString(),
        generation: generation,
        address: address,
        username: username,
        mail: mail,
        city: city,
        postalCode: postalCode,
        provincia: provinciaInput.value,
        sesso: sesso,
        locomozione: Array.from(locomozioneInput).filter(l => l.checked).map(l => l.value),
        materie: Array.from(materieSelect.selectedOptions).map(option => option.value)
    };

    console.log(utente);

    nameO.textContent = utente.name;
    surnameO.textContent = utente.surname;
    addressO.textContent = utente.address;
    usernameO.textContent = utente.username;
    mailO.textContent = utente.mail;
    cityO.textContent = utente.city;
    postalCodeO.textContent = utente.postalCode;
    DOBO.textContent = `${utente.ageOfBirth} (${utente.generation})`;
    sessoO.textContent = utente.sesso;
    provO.textContent = utente.provincia;
    locomozioneO.textContent = utente.locomozione.join(', ');
    materieO.textContent = utente.materie.join(', ');
}
