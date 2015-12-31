//$("#main").append(["Nebojsa Brnjasevic"]);
//
//var awesomeThoughts = "I am Nebojsa, and I am AWESOME!!!";
//
//var funThoughs = awesomeThoughts.replace("AWESOME","FUN");

//variable objects

var personal = {
    name: "Nebojsa Brnjasevic",
    role: "Web Developer",
    contacts: {
        mobile: "+381.64.70.10.981",
        email: "nebojsa.brnjasevic@gmail.com",
        twitter: "@nebojsab",
        github: "https://github.com/nebojsab",
        www: "http://www.websurfart.com",
        location: "Serbia, Novi Banovci"
    },
    biopic: "images/profileImg.jpg",
    welcome: "Welcome to my Online Resume",
    skills: "Web Design, Graphic Design, Photoshop, Illustrator, HTML, CSS, Bootstrap, PHP (novice)"
};


var formattedName = HTMLheaderName.replace("%data%", personal.name);
var formattedRole = HTMLheaderRole.replace("%data%", personal.role);
var formattedMobile = HTMLmobile.replace("%data%", personal.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", personal.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", personal.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", personal.contacts.github);
var formattedWWW = HTMLblog.replace("%data%", personal.contacts.www);
var formattedLocation = HTMLlocation.replace("%data%", personal.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", personal.biopic);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", personal.welcome);
var formattedSkills = HTMLskillsStart.replace("%data%", personal.skills);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#topContacts").prepend(formattedMobile);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedWWW);
$("#topContacts").prepend(formattedLocation);
$("#header").append(formattedPic);
$("#header").append(formattedWelcome);
$("#skillsH3").append(formattedSkills);