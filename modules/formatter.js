"use strict";

const
env = require("./env");

let capitalizeFirstLetter = string => {
  return string[0].toUpperCase() + string.slice(1);
}

exports.formatLogin = message => {
  return {
    "attachment":{
      "type":"template",
      "payload":{
        "template_type": "button",
        "text": message || "Přihlášení do STAG",
        "buttons":[
          {
            "type":"account_link",
            "url": env.SERVER_URL + "/authorize"
          }
        ]
      }
    }
  };
};

exports.formatLogout = props => {
  return {
    "attachment":{
      "type":"template",
      "payload":{
        "template_type": "button",
        "text": "Odhlášení ze STAG",
        "buttons":[
          {
            "type":"account_unlink"
          }
        ]
      }
    }
  };
};

exports.formatThesis = props => {

  let theses = [];

  props.forEach(thesis => {
    let element = {
      "title": thesis.temaHlavni,
      "subtitle": capitalizeFirstLetter(thesis.typPrace) + " práce"
    };
    let buttons = [];

    if (thesis.downloadURL) {
      buttons.push({
        "type": "web_url",
        "title": "Text práce",
        "url": thesis.downloadURL
      });
    }

    if (thesis.posudekVedouciDownloadURL) {
      buttons.push({
        "type": "web_url",
        "title": "Posudek vedoucího",
        "url": thesis.posudekVedouciDownloadURL
      });
    }

    if (thesis.posudekOponentDownloadURL) {
      buttons.push({
        "type": "web_url",
        "title": "Posudek oponenta",
        "url": thesis.posudekOponentDownloadURL
      });
    }

    if (buttons.length > 0) {
      element.buttons = buttons;
    }

    theses.push(element);

  });

  return {
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements": theses
      }
    }
  };
};

exports.formatSchedule = props => {

  let events = [];

  props.forEach(event => {
    events.push({
      "title": event.hodinaSkutOd.value + " až " + event.hodinaSkutDo.value +
               " je " + event.katedra + "/" + event.predmet,
      "subtitle": event.typAkce +
                  " v " + event.budova + " " + event. mistnost +
                  " s " + event.ucitel.prijmeni
    });
  });

  return {
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements": events
      }
    }
  };

};

exports.formatSubject = props => {

  let completion;
  if (props.typZkousky === "Zkouška" && props.maZapocetPredZk === "NE") {
    completion = "pouze zkouškou";
  } else if (props.typZkousky === "Zápočet" && props.maZapocetPredZk === "NE") {
    completion = "pouze zápočtem";
  } else if (props.typZkousky === "Zkouška" && props.maZapocetPredZk === "ANO") {
    completion = "zkouškou i zápočtem";
  } else if (props.typZkousky === "Kolokvium") {
    completion = "kolokviem";
  }

  return {
    "text": "Předmět " + props.nazev +
            " je unkončen " + completion +
            " za " + props.kreditu + " kreditů 😏"
  };
};
