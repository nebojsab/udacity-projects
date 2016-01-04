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
    skills: ["<i class='fa fa-paint-brush orange-text'></i> Web Design", "<i class='fa fa-pencil orange-text'></i> Graphic Design", "<i class='fa fa-file-image-o orange-text'></i> Photoshop", "<i class='fa fa-object-group orange-text'></i> Illustrator", "<i class='fa fa-html5 orange-text'></i> HTML", "<i class='fa fa-css3 orange-text'></i> CSS", "<i class='fa fa-bold orange-text'></i> Bootstrap", "<i class='fa fa-code orange-text'></i> PHP (novice)"]
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

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#topContacts").prepend(formattedMobile);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedWWW);
$("#topContacts").prepend(formattedLocation);
$("#footerContacts").prepend(formattedMobile);
$("#footerContacts").prepend(formattedEmail);
$("#footerContacts").prepend(formattedTwitter);
$("#footerContacts").prepend(formattedGithub);
$("#footerContacts").prepend(formattedWWW);
$("#footerContacts").prepend(formattedLocation);
$("#header").append(formattedPic);
$("#header").append(formattedWelcome);

if (personal.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < personal.skills.length; i++) {
        var fortmattedSkills = HTMLskills.replace("%data%", personal.skills[i]);
        $("#skills").append(fortmattedSkills);
    }
}

var work = {
    "carrier": [{
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
};

work.display = function () {
    if (work.carrier.length > 0) {
        for (var i = 0; i < work.carrier.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.carrier[i].title);
            var formattedemployer = HTMLworkEmployer.replace("%data%", work.carrier[i].employer);
            var formattedDates = HTMLworkDates.replace("%data%", work.carrier[i].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.carrier[i].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.carrier[i].description);
            $(".work-entry:last").append(formattedemployer + formattedWorkTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
            $(".work-entry:last").append(formattedWorkLocation);
        }
    }
};

var edu = {
    "schools": [{
        "title": "OS 20. Oktobar",
        "degree": "BA",
        "dates": "1991",
        "location": "Serbia, Belgrade"
    },
        {
            "title": "LINK Computers",
            "degree": "PC Engineer",
            "dates": "2005",
            "location": "Serbia, Belgrade"
        },
        {
            "title": "Microsoft",
            "degree": "MCTS",
            "dates": "2010",
            "location": "Serbia, Belgrade"
        },
        {
            "title": "Udacity",
            "degree": "Front-end Developer",
            "dates": "2015-2016",
            "location": "Serbia, Belgrade"
        }
    ]
};

edu.display = function () {
    if (edu.schools.length > 0) {
        for (var i = 0; i < edu.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", edu.schools[i].title);
            var formattedDegree = HTMLschoolDegree.replace("%data%", edu.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", edu.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", edu.schools[i].location);
            $(".education-entry:last").append(formattedSchoolName + formattedDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
        }
    }
};

var projects = {
    "activity": [{
        "title": "Udacity About Me",
        "dates": "2015",
        "description": "Create About Me personal page",
        "image": "images/project.png"
    },
        {
            "title": "Udacity About Me",
            "dates": "2015",
            "description": "Create About Me personal page",
            "image": "images/project.png"
        },
        {
            "title": "Udacity About Me",
            "dates": "2015",
            "description": "Create About Me personal page",
            "image": "images/project.png"
        },
        {
            "title": "Udacity About Me",
            "dates": "2015",
            "description": "Create About Me personal page",
            "image": "images/project.png"
        }
    ]
};

projects.display = function () {
    if (projects.activity.length > 0) {
        for (var i = 0; i < projects.activity.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.activity[i].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.activity[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.activity[i].description);
            var formattedProjectImagen = HTMLprojectImage.replace("%data%", projects.activity[i].image);
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            $(".project-entry:last").append(formattedProjectImagen);
        }
    }
};

var map = {
    "activity": [{
        "title": "OS 20. Oktobar",
        "dates": "1991",
        "description": "Serbia, Belgrade",
        "image": ""
    },
        {
            "title": "LINK Computers",
            "dates": "2005",
            "description": "Serbia, Belgrade",
            "image": ""
        },
        {
            "title": "Microsoft",
            "dates": "2010",
            "description": "Serbia, Belgrade",
            "image": ""
        },
        {
            "title": "Udacity",
            "dates": "2015-2016",
            "description": "Serbia, Belgrade",
            "image": ""
        }
    ]
};

$("#mapDiv").append(googleMap);

work.display();
projects.display();
edu.display();
