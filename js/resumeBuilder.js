//header section (contact info and bio

var bio = {
    name: "Nebojsa Brnjasevic",
    role: "Web Developer",
    contacts: {
        mobile: "<a href='tel:+381.64.70.10.981'>+381.64.70.10.981</a>",
        email: "<a href='mailto:nebojsa.brnjasevic@gmail.com'>nebojsa.brnjasevic@gmail.com</a>",
        twitter: "<a href='https://twitter.com/brnjasevic' target='_blank'>@brnjasevic</a>",
        github: "<a href='https://github.com/nebojsab' target='_blank'>https://github.com/nebojsab</a>",
        www: "<a href='http://www.websurfart.com' target='_blank'>http://www.websurfart.com</a>",
        location: "Serbia, Novi Banovci"
    },
    biopic: "images/profileImg.jpg",
    welcomeMessage: "Welcome to my Online Resume",
    skills: ["<i class='fa fa-paint-brush orange-text'></i> Web Design", "<i class='fa fa-pencil orange-text'></i> Graphic Design", "<i class='fa fa-file-image-o orange-text'></i> Photoshop", "<i class='fa fa-object-group orange-text'></i> Illustrator", "<i class='fa fa-html5 orange-text'></i> HTML", "<i class='fa fa-css3 orange-text'></i> CSS", "<i class='fa fa-bold orange-text'></i> Bootstrap", "<i class='fa fa-code orange-text'></i> PHP (novice)"]
};


bio.display = function () {

    //bio section

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").append(formattedName);
    $("#header").append(formattedRole);
    $("#header").append(formattedPic);
    $("#header").append(formattedWelcome);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var fortmattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(fortmattedSkills);
        }
    }

    //contact info-links section

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedWWW = HTMLblog.replace("%data%", bio.contacts.www);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

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
};


//end personal

//work details section

var work = {
    "jobs": [{
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
    if (work.jobs.length > 0) {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedemployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedemployer + formattedWorkTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
            $(".work-entry:last").append(formattedWorkLocation);
        }
    }
};

//end work section

//education section

var education = {
    "schools": [{
        "name": "OS 20. Oktobar",
        "degree": "BA",
        "dates": "1991",
        "location": "Serbia, Belgrade",
        "majors": ["BA"],
        "url": "<a href='#'></a>"
    },
        {
            "name": "LINK Computers",
            "degree": "PC Engineer",
            "dates": "2005",
            "location": "Serbia, Belgrade",
            "majors": ["BA"],
            "url": "<a href='#'></a>"
        },
        {
            "name": "Microsoft",
            "degree": "MCTS",
            "dates": "2010",
            "location": "Serbia, Belgrade",
            "majors": ["BA"],
            "url": "<a href='#'></a>"
        }],
    "onlineCourses": [{
        "title": "Front End Developer",
        "school": "Udacity",
        "dates": "2015-2016",
        "url": "https://www.udacity.com"
    }]

};

education.display = function () {
    if (education.schools.length > 0) {
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[0]);
            $(".education-entry:last").append(formattedSchoolName + formattedDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedMajor);
            $(".education-entry:last").append(formattedURL);
        }
    }
    if (education.onlineCourses.length > 0) {
        for (var i = 0; i < education.onlineCourses.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedSchoolSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedSchoolDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[0]);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolSchool);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedMajor);
            $(".education-entry:last").append(formattedURL);
        }
    }
};

//end education section

//projects section

var projects = {
    "projects": [{
        "title": "Udacity About Me",
        "dates": "2015",
        "description": "About Me personal page created for Udacity nanodegree",
        "images": ["<a href='http://codepen.io/anon/pen/meLYra' target='_blank'><img class='img-responsive' src='images/project.png'></a>"]
    },
        {
            "title": "Embroker",
            "dates": "2015-2016",
            "description": "Embroker Insurance App - Website Web Design",
            "images": ["<a href='https://embroker.com/' target='_blank'><img class='img-responsive' src='images/project_04.png'></a>"]
        },
        {
            "title": "Kiropraktor Glostrup",
            "dates": "2013",
            "description": "Chiropractic clinic Website - Copenhagen Denmark.",
            "images": ["<a href='http://kiropraktorglostrup.dk/' target='_blank'><img class='img-responsive' src='images/project_03.png'></a>"]
        },
        {
            "title": "EDC Pocket Knives",
            "dates": "2013",
            "description": "Amazon Affiliate shop for EDC Knives made in Wordpress.",
            "images": ["<a href='http://edc-pocketknives.com/' target='_blank'><img class='img-responsive' src='images/project_02.png'></a>"]
        }
    ]
};

projects.display = function () {
    if (projects.projects.length > 0) {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            var formattedProjectImagen = HTMLprojectImage.replace("%data%", projects.projects[i].images[0]);
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            $(".project-entry:last").append(formattedProjectImagen);
        }
    }
};

//end projects section

//append Google map to #mapDiv element

$("#mapDiv").append(googleMap);

//initialize functions

bio.display();
work.display();
projects.display();
education.display();
