//$("#main").append(["Nebojsa Brnjasevic"]);
//
//var awesomeThoughts = "I am Nebojsa, and I am AWESOME!!!";
//
//var funThoughs = awesomeThoughts.replace("AWESOME","FUN");

//variable objects

var bio = {
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
    biopic: "images/profileImg.png"
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedWWW = HTMLblog.replace("%data%", bio.contacts.www);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
$("#topContacts").prepend(formattedMobile);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedWWW);
$("#topContacts").prepend(formattedLocation);
$("#topContacts").prepend(formattedPic);