var express = require('express');
var app = express();
var fs = require("fs");
var path = require('path');
var gtxtomp3 = require( path.resolve( __dirname, "./google-text-to-audio.js" ) );
app.use('/public', express.static('public'));



gtxtomp3.getMp3("Welcome to google language accent npm package","en").then(function(binaryStream){
    var file = fs.createWriteStream("public/audio/FileName.mp3"); // write it down the file
    file.write(binaryStream);
    file.end();
})
.catch(function(err){
    console.log("Error", err);
});

gtxtomp3.saveMP3("Bienvenido al paquete de acento npm del idioma de google","es", "spanish_text","audio").then(function(absoluteFilePath){ 
    console.log("File saved :", absoluteFilePath); //"File saved : 
})
.catch(function(err){
    console.log("Error", err);
});
  