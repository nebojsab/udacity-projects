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
    skills: ["Web Design", "Graphic Design", "Photoshop", "Illustrator", "HTML", "CSS", "Bootstrap", "PHP (novice)"]
};

var work = {
    "carrier":[{
            "title": "QA",
            "employer": "Script Server Development",
            "dates": "2007-2008",
            "location": "Serbia, Belgrade",
            "description": "QA for CMS solution developed for Denmark client."
        },
        {
            "title": "QA, System Administrator",
            "employer": "Embroker d.o.o.",
            "dates": "2008-2010",
            "location": "Serbia, Belgrade",
            "description": "QA for eSearch Enterprise Search app, and System Administrator."
        },
        {
            "title": "QA, System Administrator, Web Designer, Graphic Designer",
            "employer": "LAT Consulting d.o.o.",
            "dates": "2010-2015",
            "location": "Serbia, Belgrade",
            "description": "QA for eSearch Enterprise Search app, System Administrator, Web and Graphic Designer."
        },
        {
            "title": "Web and Graphic Designer",
            "employer": "Embroker",
            "dates": "2015-2016",
            "location": "Serbia, Belgrade",
            "description": "Web and Graphic Designer for Embroker insurance app."
        }
    ]
}

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
$("#workExperience").append(HTMLworkStart);

if(personal.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for(var i = 0; i < personal.skills.length; i++){
        var fortmattedSkills = HTMLskills.replace("%data%", personal.skills[i]);
        $("#skills").append(fortmattedSkills);
    }
}

work.display = function() {
    if (work.carrier.length > 0) {
        for (var i = 0; i < work.carrier.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.carrier[i].title);
            var formattedemployer = HTMLworkEmployer.replace("%data%", work.carrier[i].employer);
            var formattedDates = HTMLworkDates.replace("%data%", work.carrier[i].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.carrier[i].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.carrier[i].description);
            $(".work-entry:last").append(formattedemployer + formattedWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
        }
    }
}

work.display();