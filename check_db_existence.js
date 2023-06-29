'use strict';

// This script checks if a database exists or not.
// It uses the nano library and the CouchDB REST API.
// The script is written in ES6 syntax and uses the "import" syntax.

// import nano using "import" syntax
import nano from 'nano';

// Credentials für die Anmeldung in Couch
const username = 'admin', password = 'asy';
const dbName = 'article_db';

// Verbindung zu Couch herstellen
const couch = nano(`http://${username}:${password}@127.0.0.1:5984`);

const checkDBExistence = () => {

    couch.db.list()
        .then((dbNames) => {
            if (dbNames.includes(dbName)) {
                console.log(`DB "${dbName}" existiert bereits`);
            } else {
                console.log(`DB "${dbName}" existiert nicht`);
            }
        }).catch((err) => {
            console.warn(err);
        });
}

const init = () => {
    checkDBExistence(dbName);
}

init()

// Output: DB "article_db" existiert bereits
// DB "article_db" existiert nicht