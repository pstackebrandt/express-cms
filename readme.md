# File upload in a node express server
training project with more comments

initial state: Result of training lesson by Christian xx:  node_3_fileupload on 28.06.2023
shows work with POST message to node.js express server

## Purpose
train usage

## Installation
run in console in project folder: 
    npm install
    node server.js

call in browser: 
    http://localhost/get

## Usage

## Features

### 4.0
Erstelle eine Seite mit einem Textarea für den Textinhalt und mehren Eingabefeldern für Header und andere Dinge.
Dazu kommt ein Button. Wenn der Button gedrückt wird, dann wird der Inhalt an den Server gesendet und dort gespeichert.
Erstelle eine weitere Seite, auf der der gespeicherte Inhalt dargestellt wird.

### Plan
#### Client
title: text (input) 
text: textarea
author: text (input)
button: publish
We may extend this later.

#### Server
save article to database
articles
all articles will be saved to same file

#### Output


# Features
- (done) independent page for save of 1 article into database
- (todo) server page for creation of article in database
- (todo) print all articles to same webpage
- (done) independent page for creation of database -> in terminal: "node .\create_or_list_db.js"
- (done) independent page to check database existence -> in terminal: "node .\check_db_existence.js"

# Required
- see package.json
- node
- nano