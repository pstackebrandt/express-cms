'use strict';

import dom from './dom.js';

// KONSTANTEN / VARIABLEN
const elements = {};

// FUNKTIONEN
const sendData = evt => {
    evt.preventDefault();

    // Daten aus dem Formular lesen und in die Variable schreiben
    let payload = new FormData(elements.myForm);

    fetch('/handle_form', {
        method: 'post',
        // Headers werden nicht benötigt, da FormData standard ist.
        body: payload
    }).then(
        res => res.json()
    ).catch(
        console.warn
    )
}

const appendEventlisteners = () => {
    elements.myForm.addEventListener('submit', sendData);
}

const init = () => {
    appendEventlisteners();
}

// INIT
init();