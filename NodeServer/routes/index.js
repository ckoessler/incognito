var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.json({
            "basics": {
                "name": "Chris Koessler",
                "label": "Android Software Engineer",
                "email": "cckoess@gmail.com",
                "phone": "650-289-8017",
                "summary": "+3 years of experience as mobile technical lead for cross functional team. Managed entire project for Android, and web based mobile applications. Worked in large +20 members agile teams as well as offshore setups.",
                "location": "Campbell, CA",
                "profiles": [{
                    "network": "Linkedin",
                    "username": "ckoessler",
                    "url": "http://www.linkedin.com/in/ckoessler/en"
                }]
            },

            "work": [{
                "company": "Dell / SonicWALL",
                "position": "Software Engineer",
                "startDate": "02/12",
                "endDate": "present",
                "summary": "",
                "highlights": [
                    "Technical lead for the mobile environment in cross functional team environment",
                    "Research and compare various cross-platform mobile technologies for unified user experience",
                    "Collaborating with management to conceptualize native Android app and mobile site",
                    "UI/UX design for mobile products and software architecture for frontend and backend",
                    "Full stack development for Android native app - MysonicWALL & touch.mysonicwall.com",
                    "Documentation, test automation, customer support, delivery process for mobile products",
                    "Java Android, HTML5, JQuery Mobile Website, C#, JSON, MS SQL RESTful web-services"
                ]
            }, {
                "company": "Axway Software",
                "position": "Software Engineer Internship",
                "startDate": "06/11",
                "endDate": "09/11",
                "summary": "",
                "highlights": [
                    "User interface with integration of jQuery on Salesforce application",
                    "Agile Scrum environment, Salesforce, Apex, jQuery, Javascript, AWS"
                ]
            }, {
                "company": "Sogeti",
                "position": "Co-op Software Engineer",
                "startDate": "09/09",
                "endDate": "08/10",
                "summary": "",
                "highlights": [
                    "POC using Microsoft WPF, Silverlight, Windows Phone 7 and Surface coffee table",
                    "Member of the 2010 Surface Category winning team - Concours MultiTouch SNCF"
                ]
            }, {
                "company": "Sopra Group",
                "position": "Software Engineer Internship",
                "startDate": "01/09",
                "endDate": "02/09",
                "summary": "",
                "highlights": [
                    "Duplication and adaptation of existing application based on ASP.NET, Oracle 9i"
                ]
            }],

            "education": [{
                "studyType": "Master's Degree",
                "area": "Computer Science",
                "institution": "EPSI School of Engineering"
            }, {
                "studyType": "Online Training",
                "area": "Developing Scalable Apps with Java",
                "institution": "Udacity"
            }, {
                "studyType": "Online Training",
                "area": "Developing Android Apps",
                "institution": "Udacity"
            }, {
                "studyType": "Online Training",
                "area": "UX Design for Mobile Developers",
                "institution": "Udacity"
            }],

            "interests": [
                "Travel",
                "Snowboarding",
                "Surfing",
                "Motorcycle Racing",
                "Home Automation"
            ]
        });
});

module.exports = router;
