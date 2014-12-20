var cast = {

	returningCast:
					{
						header: "Returning Cast Members",
						footer: "It's good to see them all back",
						castMembers: [
									{	name: 			"Mark Hamill",
									 	character:		"Luke Skywalker",
									 	image:			"skywalker.jpg",
									},
									{	name:			"Harrison Ford",
										character:		"Han Solo",
										image:			"hanSolo.jpg",
									},
									{	name:			"Carrie Fisher",
										character:		"Leia",
										image:			"carrieFisher.jpg",
									},
									{	name:			"Peter Mayhew",
										character:		"Chewbaca",
										image:			"chewy.jpg",
									},
									{	name:			"Anthony Daniels",
										character:		"C-3PO",
										image:			"c3po.jpg",
									},
									{	name:			"Kenny Baker",
										character:		"R2-D2",
										image:			"r2d2.jpg",
									},
								  ]
		  			},
	newCast:
					{
						header: "New Cast Members",
						footer: "Hopefully they do well",
						castMembers: 	[
									  {	name:			"Andy Serkis",
									  	character:		"An Unknown Character",
									  	image:			"serkis.jpg",
									  },
									  {
									  	name:			"Adam Driver",
									  	character:		"Kylo Ren",
									  	image:			"adam.jpg",
									  }	
									]
					}
};

exports.myCast = cast;