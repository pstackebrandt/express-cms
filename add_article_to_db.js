'use strict';

// This script adds an articel to articles collection of a database.
// It uses the nano library and the CouchDB REST API.
// The script is written in ES6 syntax and uses the "import" syntax.

// import nano using "import" syntax
import nano from 'nano';

// Credentials für die Anmeldung in Couch
const username = 'admin', password = 'asy';
const dbName = 'article_db';
const newArticle = {
    title: 'Schwert der Atlanter gefunden',
    text: 'Noch ein Schwert der mystischen Atlanter wurde gefunden. Es soll noch mehr sexy machen.',
    author: "Erich von Däniken",
    reliability: 3
}

const getArticleDB = () => {
    // get couch db instance
    const couch = nano(`http://${username}:${password}@127.0.0.1:5984`);
    return couch.use(dbName);
}

/* Nachdem der Artikel erfolgreich in die Datenbank eingefügt wurde, wird die Funktion
logExistingArticles() aufgerufen, um die Liste der Artikel auszugeben. Dazu muss 
insertArticle() eine Promise zurückgeben.

Wir haben die Funktion insertArticle() erstellt, um die article_db.insert()-Funktion
in eine Promise-Funktion zu wickeln.

Eine Fehlermeldung hatte darauf hingedeutet, dass article_db.insert(article) kein Promise 
zurückgibt. Das könnte darauf hindeuten, dass die verwendete nano-Bibliothek 
möglicherweise keine Promises unterstützt oder in der aktuellen Version keine Promises
 zurückgibt.
In diesem Fall können wir das Problem umgehen, indem wir article_db.insert() in eine
eigene Promise-Funktion einwickeln. 
*/

const insertArticle = (article, article_db) => {
    return new Promise((resolve, reject) => {
        article_db.insert(article, (error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        });
    });
}

const addArticle = (article, article_db) => {
    return insertArticle(article, article_db)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.warn(error);
        });
}

// log existing articles
const logExistingArticles = (article_db) => {
    article_db.list().then(
        (articleList) => {
            console.log(articleList);
        }
    ).catch(
        console.warn
    )
}

// create init function
const init = () => {
    // get couch db instance
    const articleDB = getArticleDB();

    // logExistingArticles() after the article was successfully added to the db
    addArticle(newArticle, articleDB)
        .then(() => {
            logExistingArticles(articleDB);
        })
        .catch((error) => {
            console.warn(error);
        });
}


init();

// Output:
// {
//     ok: true,
//     id: '53df0649e94dc8f94c02e196d900e4d6',
//     rev: '1-5058ba06b28c9c52139109a1c975f009'
// }

// log of all articles in the database