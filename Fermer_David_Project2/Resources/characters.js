var characters = {

	lukeSkywalker:
					{
						name: "Luke Skywalker",
						description: "A Jedi with mad skills",
						weapons: [
									{	title: 			"Lightsaber",
									 	description:	"A hand to hand weapon that also provides defense from blaster bolts",
									 	image:			"skywalkerLightSaber.jpg",
									 	mp3:			"lightsaberSound.mp3" /* sound from http://www.moviewavs.com/Movies/Star_Wars_Episode_IV_A_New_Hope_p2.html */
									},
									{	title:			"Blaster Pistol",
										description:	"A Medium ranged gun that shoots blasts of energy",
										image:			"skywalkerWithPistol.jpg",
										mp3:			"pistol.mp3" /*sound from https://archive.org/details/StarWarsThemeSongByJohnWilliams*/
									}
								  ]
		  			},
	hanSolo:
					{
						name: "Han Solo",
						description: "He always shoots first",
						weapons: 	[
									  {	title:			"Blaster Rifle",
									  	description:	"A Long Range gun that shoots blasts of energy",
									  	image:			"hanSoloWithBlasterRifle.jpg",
									  	mp3:			"blasterRifle.mp3" /*sound from https://archive.org/details/StarWarsThemeSongByJohnWilliams*/
									  },
									  {
									  	title:			"Blaster Pistol",
									  	description:	"A Medium ranged gun that shoots blasts of energy",
									  	image:			"soloWithPistol.jpg",
									  	mp3:			"goodblaster.mp3" /* sound from http://www.moviewavs.com/Movies/Star_Wars_Episode_IV_A_New_Hope_p3.html */
									  }	
									]
					}
};

exports.myCharacters = characters;