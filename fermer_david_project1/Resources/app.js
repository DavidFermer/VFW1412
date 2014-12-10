//create main window

var mainWindow = Ti.UI.createWindow({
	title: "My Main Window",
	backgroundColor: "orange"
});

//pull from piLogicAndBehaviors.js
var arrayLabelText = require("pieLogicAndBehaviors");

//open window
mainWindow.open();
