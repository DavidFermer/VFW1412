
//Variables
var pieArray = ["Apple", "Pecan", "Pumpkin", "Cherry", "Rasberry"];
pieChoice = 0;

//Functions
var previousFunction = function()
{
	if (pieChoice >= 1)
	{
		pieChoice = pieChoice - 1;
		
		pieArrayLabel.text = pieArray[pieChoice];
	}
	else
	{
		pieChoice = pieArray.length -1;
		
		pieArrayLabel.text = pieArray[pieChoice];
	}
};

var nextFunction = function()
{
	if(pieChoice == pieArray.length - 1)
	{
		pieChoice = 0;
		
		pieArrayLabel.text = pieArray[pieChoice];
	}
	else
	{
		pieChoice = pieChoice + 1;
		pieArrayLabel.text = pieArray[pieChoice];
	}
};

//views
var titleView = Ti.UI.createView({
	backgroundColor: "#eec81b",
	borderRadius: 5,
	left: 5,
	right: 5,
	top: 25,
	height: 30
});

//buttons

var nextButton = Ti.UI.createButton({
	title: "Next",
	color: "#000",
	font: {fontSize: 12, fontFamily: "Helvetica"},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	backgroundColor: "#cd0000",
	borderRadius: titleView.borderRadius,
	height: 75,
	width: 75,
	bottom: 15,
	right: 15
});


var previousButton = Ti.UI.createButton({
	title: "Previous",
	color: nextButton.color,
	font: {fontSize: 12, fontFamily: "Helvetica"},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	backgroundColor: "brown",
	borderRadius: titleView.borderRadius,
	height: nextButton.height,
	width: nextButton.width,
	bottom: nextButton.bottom,
	left: nextButton.right
});

// labels
var titleLabel = Ti.UI.createLabel({
	text: "PIES!!!",
	left: 5,
	Right: 5,
	color: "#000",
	font: {fontSize: 18, fontFamily: "Helvetica"},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});

var pieArrayLabel = Ti.UI.createLabel({
	text: pieArray[pieChoice],
	color:"#000",
	font: {fontSize: 18, fontFamily: "Helvetica"},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
});

// calls
titleView.add(titleLabel);
previousButton.addEventListener("click", previousFunction);
nextButton.addEventListener("click", nextFunction);
mainWindow.add(titleView, pieArrayLabel, nextButton, previousButton);


