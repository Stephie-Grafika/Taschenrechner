'use strict';

// Konstanten in HTML-Elementen, weil diese in mehreren Funktionen verwendet werden und somit kürzer angesprochen werden können
const ausgabeRechenweg = document.getElementById('rechenweg');
const ausgabeErgebnis = document.getElementById('ergebnis');

// Rechenweg anzeigen
function hinzufuegen(zeichen){
    ausgabeRechenweg.value += zeichen;
}

// Ergebnis berechnen & ausgeben

function berechnen(){
    let rechenwegEingabe = ausgabeRechenweg.value;

    let rechenwegIntern = rechenwegEingabe.replace(/x/g, '*')
                        .replace(/÷/g, '/')
                        .replace(/,/g, '.')
                        .replace(/%/g, '/100');

    try {
        // eval() berechnet einen String als mathematische Formel
        let ergebnis = eval(rechenwegIntern);
        ausgabeErgebnis.value = '= ' + ergebnis.toString().replace('.', ',');
    } catch (error){
        ausgabeErgebnis.value = "Kann nicht berechnet werden wegen felerhafter Eingabe."
    }
}

// keine Eingabe vor =

// letzte Eingabe löschen

// komplette Einagbe löschen
function allesLoeschen() {
    ausgabeRechenweg.value = "";
    ausgabeErgebnis.value = "";
}

// Vorzeichen

//ergebnis.innerHTML = userEingabe;
