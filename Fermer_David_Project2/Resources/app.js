//create main window
var mainWindow = Ti.UI.createWindow({
	title: "My Main Window",
	backgroundColor: "#000",
	backgroundImage: "starsBackground.jpg"
});

//Main Window Sounds
var openingSound = Ti.Media.createSound({
	url: "opensound.mp3"
});

//Main Page Buttons
var mainHeader = Ti.UI.createView({
	backgroundColor:"fff",
	top: 15,
	height: 75,
	width: "80%",
	borderRadius: 10,
	borderColor:"#F28705",
	borderWidth: 5,
});

var mainHeaderLabel = Ti.UI.createLabel({
	text: "STAR WARS",
	font: {fontSize: 36, fontWeight: "bold", fontFamily: "Helvitica"},
	color: "Red"
	
});

var listButton = Ti.UI.createButton({
	backgroundColor: "fff",
	borderWidth: 5,
	borderColor: mainHeader.borderColor,
	top: mainHeader.top + mainHeader.height + 55,
	height: 50,
	width: 150,
	borderRadius: 10,
	title: "List View",
	color: mainHeaderLabel.color,
	font: {fontSize: 18, fontWeight: "bold", fontFamily: "Helvitica"}
});

var tableButton = Ti.UI.createButton({
	backgroundColor: listButton.backgroundColor,
	borderWidth: listButton.borderWidth,
	borderColor: listButton.borderColor,
	top: listButton.top + listButton.height + 100,
	width: listButton.width,
	height: listButton.height,
	borderRadius: listButton.borderRadius,
	title: "Table View",
	color: mainHeaderLabel.color,
	font: listButton.font
});

mainHeader.add(mainHeaderLabel);
mainWindow.add(mainHeader, listButton, tableButton);
//open window
var tables = require("table");
var lists = require("list");

mainWindow.addEventListener("postlayout", function()
	{openingSound.play();});
mainWindow.open();
