/*function getInfo(a, b){

}
*/

/*
var one = "hey what's up"

console.log(one)
console.log("one")
*/


//Object Array
var hSignArray = [
	{	
		name: "aries",
		description: "Stay on your toes and have confidence in your mental processes.",
		image: "img/aries.jpg"
	},

	{	
		name: "cancer",
		description: "Work together to come up with the best situation for everyone involved.",
		image: "img/cancer.jpg"
	},

	{	
		name: "libra",
		description: "Don't dismiss other opinions just because they're new and different from your own.",
		image: "img/libra.jpg"
	},

	{	
		name: "capricorn",
		description: "There's no reason for you to doubt yourself today.",
		image: "img/capricorn.jpg"
	},

	{	
		name: "taurus",
		description: "Let other people's viewpoints be heard.",
		image: "img/taurus.jpg"
	},

	{	
		name: "leo",
		description: "You're probably better off not making any judgments at all. Let people say their peace.",
		image: "img/leo.jpg"
	},

	{	
		name: "scorpio",
		description: "Actively express your thoughts today.",
		image: "img/scorpio.jpg"
	},

	{	
		name: "aquarius",
		description: "You're apt to come up with some new, radical thoughts today.",
		image: "img/aquarius.jpg"	
	},

	{	
		name: "gemini",
		description: "Don't be so nosy about others' affairs today.",
		image: "img/gemini.jpg"	
	},

	{	
		name: "virgo",
		description: "An unexpected opportunity to take a short trip could present itself today.",
		image: "img/virgo.jpg"	
	},

	{	
		name: "sagittarius",
		description: "You may be feeling a little bit lost in the dust today.",
		image: "img/sagittarius.jpg"	
	},

	{	
		name: "pisces",
		description: "Connect with friends you haven't spoken with in a long time.",
		image: "img/pisces.jpg"	
	}
]


//Function
function getInfo(){
	var horoSign = document.getElementById("hSign").value.toLowerCase()
//For Loop
	for(var i = 0; i < hSignArray.length; i++){
		if(horoSign === hSignArray[i].name){
			document.getElementById("yourSign").innerHTML = hSignArray[i].name
			document.getElementById("yourHoroscope").innerHTML = hSignArray[i].description
			document.getElementById("signIcon").src = hSignArray[i].image
			return
		} else {
			document.getElementById("yourSign").innerHTML = "That's not one of the signs. Try again!"
			document.getElementById("yourHoroscope").innerHTML = ""
			document.getElementById("signIcon").src = ""
			//console.log(hSignArray[i].name)
			//alert("what up!")
		}
	
	}
}

