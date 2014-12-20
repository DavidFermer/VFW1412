//Variables
//Platform height and width
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight - 58;

//The Images in the gallary
var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "galleryImages");
var galleryList = gallery.getDirectoryListing();

//Set up columns and rows
var itemCount = galleryList.length;
var rowCount = 1;
var margin = 5;

var trueCanvasWidth = pWidth - margin * (rowCount + 1);
var size = trueCanvasWidth/rowCount;

var gallWindow = Ti.UI.createWindow({});

var randomButton = Ti.UI.createButton({
	top: 5,
	width: 125,
	height: 30,
	backgroundImage: "random.png"
});

randomButton.addEventListener("click", function(){
	navWindow.openWindow(randomWindow, {animate: true});;
	});

var viewScrolling = Ti.UI.createScrollView({
	backgroundColor: "black",
	layout: "vertical",
	top: 35,
	width: pWidth,
	contentWidth: pWidth,
	height: pHeight - margin - 35
});

var randomNumberGenerator =  function(){
		return Math.floor(Math.random() * itemCount);
	};

var firstRandomNumber = randomNumberGenerator();
console.log(firstRandomNumber);

var randomWindow =Ti.UI.createWindow({
	backgroundImage: "galleryImages/" + galleryList[firstRandomNumber]
});

var count = 0;
var timer = setInterval(function(){
    count++;
    console.log(count);
    if (count % 2 == 1) {
    	randomImageNumber = randomNumberGenerator();
    	while(randomImageNumber == firstRandomNumber){
    		randomImageNumber = randomNumberGenerator();
    	}
    	firstRandomNumber = randomImageNumber;
        randomWindow.backgroundImage = "galleryImages/" + galleryList[randomImageNumber];
    }
}, 1000);

//functions
var getFullView = function(e){
	var fullViewWindow = Ti.UI.createWindow({
		title: e.source.title
	});
	var scrollableView = Ti.UI.createScrollableView({
		views: fullSizeViews,
		showPagingControl: true,
		currentPage: e.source.indexOf
	});
	
	scrollableView.addEventListener("scrollend", function(){
		fullViewWindow.title = this.views[this.currentPage].title;
	});
	fullViewWindow.add(scrollableView);
	navWindow.openWindow(fullViewWindow,{animate:true});
};

//main code
var views = [];
var fullSizeViews = [];

for (i = 0; i < itemCount; i++){
	var view = Ti.UI.createImageView({
		title: galleryList[i],
		image: "galleryImages/" + galleryList[i],
		indexOf: i,
		top: margin,
		left: margin,
		width: size,
		height: viewScrolling.height - margin,
		border: 2,
		borderColor: "red"
	});
	view.addEventListener("click", function(e){
		getFullView(e);
	});
	views.push(view);
	
	var fullSizeView = Ti.UI.createImageView({
		title: galleryList[i],
		image: "galleryImages/" + galleryList[i],
		indexOf: i,
		top: margin,
		left: margin,
	});
	fullSizeViews.push(fullSizeView);
};

viewScrolling.add(views);
gallWindow.add(randomButton, viewScrolling);


//Event Listener on main page that links to this page
galButton.addEventListener("click", function(){
	navWindow.openWindow(gallWindow, {animate: true});
});