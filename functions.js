/*function welloHorld() {
    console.log("Wello Horld!");
    return "Wello Horld!";
}
welloHorld();

Math.random();
*/
var nameArray = ["Alexandro", "Yifeng", "Addison", "Devin", "Saiful" , "Jose"]

function rand(num){      //Returns a random number between 0 and defined limit.
    return Math.floor(Math.random()*num); 
}
//rand(5);  //This parameter defines the "num" inside of the () for the rand function.
console.log = nameArray[rand(5)]


