"use strict";

var DEBUGNAME = __filename.slice(__dirname.length + 1, -3);
//var debug = require("debug")(DEBUGNAME);
var fs = require('fs');

const BASE_URL = "http://translate.google.com/translate_tts?";
var GoogleTextToMp3 = function () { }

  /**
   *
   * @type {{ie: string Cherset of text we are providing,
    * client: string this must be tw-ob otherways google API will fail the call,
     * tl: string this is the language of generated speech}}
   */
  GoogleTextToMp3.prototype.attributes = function(langauge_code) {
    if(langauge_code == null || langauge_code == 'undefined'){
      langauge_code = 'en';
    }
   var attributeObj = { ie: "UTF-8", client : "tw-ob",tl : langauge_code};
    return attributeObj;
  };

  var _parseURL = function(path, text, langauge_code){
    // console.log("texttexttexttexttext", text);
    var objectValue = GoogleTextToMp3.prototype.attributes(langauge_code);
    var keysAtt = Object.keys(GoogleTextToMp3.prototype.attributes(langauge_code));
    for(var i = 0; i< keysAtt.length ; i++){
      path += keysAtt[i] + "=" + objectValue[keysAtt[i]]+"&";
    }
    console.log("patth",path);
    path += "q="+encodeURI(text)+"&";
    path += "textLen="+text.length;

    return path;
  };
  var _writeFile = function(fn, folder_path, data){
    if(fn.substring(fn.length-4, fn.length) !== ".mp3"){ // if name is not well formatted, I add the mp3 extention
      fn+=".mp3";
    }
    if(folder_path !== 'undefined'){
        var file = fs.createWriteStream("public/"+folder_path+"/"+fn); // write it down the file
    }else{
        var file = fs.createWriteStream("public/"+fn); // write it down the file
    }   
    file.write(data);
    file.end();
    return file.path;
  };
  GoogleTextToMp3.prototype.saveMP3 = function(text, langauge_code ,fileName, folder_path, callback){

    if(typeof callback !== 'undefined' && typeof(callback) == 'function'){
        GoogleTextToMp3.prototype.getMp3(text, langauge_code, function(err,data){
        if(err)
          return callback(err);

        var file = _writeFile(fileName, folder_path, data);
        
        return callback(null, fs.realpathSync(file));
      });
    }else{
      return new Promise(function(resolve, reject) {
        GoogleTextToMp3.prototype.getMp3(text, langauge_code).then(function (data) {
          var file = _writeFile(fileName, folder_path, data);
          console.log("file", file);

          resolve(fs.realpathSync(file));
        }).catch(function(err){
          reject(err);
        });
      });
    }
  };

  GoogleTextToMp3.prototype.getMp3 = function (text, langauge_code, callback) {

    var fs = require('fs'),
      request = require('request');

    var data = [];

    if(typeof callback !== 'undefined' && typeof(callback) == 'function'){

      if(typeof text === "undefined" || text === ""){
        callback("missing required params");
      }
      var path = _parseURL(BASE_URL, text, langauge_code);
      //debug("PATH", path);
      request
        .get({
          headers: {
            "Accept-Encoding": "identity;q=1, *;q=0",
            "Range": "bytes=0-"
          },
          uri: path,
          method: 'GET'
        })
        .on('data', function (chunk) {
          console.log("data return ", chunk);
          data.push(chunk);
        })
        .on('end', function () {
          if(data.length === 0){
            return resolve(null);
          }
          callback(null, Buffer.concat(data));

        })
        .on('error', function (err) {
          // handle error
          callback(err);
        });
    }else {
      return new Promise(function(resolve, reject) {

        if(typeof text === "undefined" || text === ""){
          reject("missing required params");
        }
        var path = _parseURL(BASE_URL, text, langauge_code);
        request({
            uri: path,
            method: 'GET'
          })
          .on('data', function (chunk) {
            data.push(chunk);
          })
          .on('end', function () {
            if(data.length === 0){
              return resolve(null);
            }
            return resolve(Buffer.concat(data));
          })
          .on('error', function (err) {
            // handle error
            return reject(err);
          });
      });
    }
  };
module.exports = new GoogleTextToMp3();