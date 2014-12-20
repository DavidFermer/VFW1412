
//Data Source
var data = require("json");


//Variables
var theCast = Ti.UI.createWindow({});

var castTableView = Ti.UI.createTableView({
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
});

var Sections = [];



for (i in data.myCast){
	var tableSection = Ti.UI.createTableViewSection({
		headerTitle: data.myCast[i].header,
		footerTitle: data.myCast[i].footer
	});
	for (n in data.myCast[i].castMembers){
		var theRow = Ti.UI.createTableViewRow({
			title: 	data.myCast[i].castMembers[n].name,
			desc: 	data.myCast[i].castMembers[n].character,
			image: 	data.myCast[i].castMembers[n].image,
			hasChild: true
		});
		theRow.addEventListener("click", function(e){
			getDetail(e);
		});
		tableSection.add(theRow);
	}
	Sections.push(tableSection);
};

castTableView.setData(Sections);
theCast.add(castTableView);


castButton.addEventListener("click", function(){
	navWindow.openWindow(theCast, {animate: true});
});


