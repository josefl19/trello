const Trello = require("./main");
var trello = new Trello("7171ad8dd77dd6dd0bb554004b16ab44", "56d994d5175a485fa3fa448411b25f571eb8a462845ef2eee0bdebc1ec3a8ef1");
var cardTitle = `Card Nueva ${new Date()}`;

console.log("Ejecutando!");

trello.addCard(cardTitle, "LaunchX Card Description", "628c5a8250ae7383135c67fb",
  function (error, trelloCard) {
    if (error) {
      console.log('Could not add card:', error);
    }
    else {
      console.log('Added card:', trelloCard);
    }
  }
);