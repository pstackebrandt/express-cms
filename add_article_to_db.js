'use strict';

// This script adds an articel to articles collection of a database.
// It uses the nano library and the CouchDB REST API.
// The script is written in ES6 syntax and uses the "import" syntax.

// import nano using "import" syntax
import nano from 'nano';

// Credentials für die Anmeldung in Couch
const username = 'admin', password = 'asy';
const dbName = 'autos';
const meinAuto = {
    marke: 'Hyundai',
    modell: 'i20',
    leistungKW: 62,
    farbe: 'braun',
    leasing: false
}

const getArticleDB = () => {
    // get couch db instance
    const couch = nano(`http://${username}:${password}@127.0.0.1:5984`);
    return couch.use(dbName);
}

const addArticle = (article, article_db) => {
    article_db.insert(article).then(
        console.log
    ).catch(
        console.warn
    )
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

    // add article to db
    addArticle(meinAuto, articleDB);

    //logExistingArticles(articleDB);
}

init();

// Output:
// {
//     ok: true,
//     id: '53df0649e94dc8f94c02e196d900e4d6',
//     rev: '1-5058ba06b28c9c52139109a1c975f009'
// }