'use strict';

// VARIABLEN und KONSTANTEN
let filenames = {};
const paths = {
    filelist: 'data/articels.json'
}

// FORMULARKRAM
import fs from 'fs';

// WEBSERVER
import express from 'express';

const server = express();

server.use(express.static('public', {
    extensions: ['html']
}));

// JSON-Daten aus einer POST-Anfrage extrahieren und in das body-Attribut schreiben
server.use(express.json());

// ROUTEN
server.post('/handle_form', (request, response) => {
    console.log(request.body);	

    
})



const init = () => {
    // Liste hochgeladener Dateien laden
    fs.readFile(
        paths.filelist,
        (err, content) => {
            if (!err) {
                filenames = JSON.parse(content.toString());
            }
            // Server starten
            server.listen(80, err => {
                if (err) console.log(err);
                else {
                    console.log('Server läuft')
                    setInterval(storeFilelist, 5000);
                }
            });
        },

    )

}

init();