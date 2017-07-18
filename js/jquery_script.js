// Jquery

var main = function()
{
	//##################################################//
	//##		Global & Control Variables
	//##################################################//
	
	// avoid stupid problems js
	"use strict";

	// global control and nav dom variables
	var link_home = '#link_home';
	var link_about = '#link_about';
	var link_resume = '#link_resume';
	var link_projects = '#link_projects';
	var link_contact = '#link_contact';
	var currentPage = link_home		// initialize to home page
	var lastPage = link_home
	var pageElements = []
	var links = [link_home, link_about, link_resume, link_projects, link_contact];

	// page container dom variables
	var section_top = '#section_top';
	var section_middle = '#section_middle';
	var section_bottom = '#section_bottom';
	var br = "<br/>";
	var amp = "&amp";
	var space = "&nbsp";
	var tab = "&nbsp&nbsp&nbsp&nbsp";

	// color values
	var color_nav_unsel = "azure";
	var color_nav_sel = "#FFFF00";


	//##################################################//
	//##		Navigation Links
	//##################################################//
	
	// function sets the color of the nav elements
	function setNavColors()
	{
		var thisPage = "";	
		
		for(var i = 0; i < links.length; i++)		
		{
				 thisPage = links[i];					
				// if a link is NOT the current page, make it unselected
				if(thisPage != currentPage)
				{
					$(thisPage).css('color', color_nav_unsel)
				}   // end if
				// if the link is the current page, make it selected
				else if(thisPage == currentPage)
				{
					$(thisPage).css('color', color_nav_sel)
					//console.log("[^_-] highlighted link: " + thisPage);
				}   // end else if
		}   // end for
	}   // end function
	
	

	//##################################################//
	//##		Home Page Content
	//##################################################//
	
	// function displays the page contents
	function setHomePageContent()
	{
		// content variables
		var title = "Welcome to my Online Portfolio.";
		var tagline = "<p id=\"tagline\">" +
		"\"A compilation of artistic talent and innovative circumstance.\"</p>";
		var elevatorPitch = "<p id=\"elevator\">" + tab +
		"I am a software developer and recent graduate of ECPI University with a B.S. in Computer Science .  " +
		"I have two and a half years of hands-on experience  programming in languages such as Java, Python, JavaScript, HTML, C#, C++, and C.  " +
		"My interests in open source software and cyber security have shaped me into an adamant Linux user and enthusiast.  " +
		"I also have lots of creativity and professional artistic experience including digital imaging, video editing, storyingboarding, animation, and classical music composition.  "+
		br + br +
		"I am currently looking to find a Python or Java development position in a Linux environment that will leverage my skills, creativity and interests.  " +
		"My goal as a prospective employee is to seek a career that enriches and inspires others through technology and innovative ideas.  " +
		br + br + "</p>";
		
		// clean up the page elements
		$(pageTitle).empty();
		$(section_top).empty();
		$(section_middle).empty();
		$(section_bottom).empty();

		// set the page title		
		$(pageTitle).append(title);
		
		// add the tagline
		$(section_top).append(tagline);
		$("#tagline").css('text-align','center');
		
		// add the elevator pitch
		$(section_top).append(elevatorPitch);
		$("#elevatorPitch").css('text-align','center');
		$("#elevatorPitch").css('padding-left','10%');
		$("#elevatorPitch").css('padding-right','10%');	
		
		// button to download resume
		
		// button to download list of projects
		
		// set the last visited page
		lastPage = link_home;
		
	}   // end function
	
	
	//##################################################//
	//##		About Page Content
	//##################################################//
		
	// function displays the page contents
	function setAboutPageContent()
	{
		// content variables
		var title = "Theresa: In a Nutshell.<br/>";
		
		var subtitle_edu = "<h2 id=\"subtitle_edu\">" +
		"Educational Background<br/><h2>";
		var education = "<p id=\"education\">"+
		tab +
		"My first steps toward a career in software development began when I enrolled in a B.S. Computer Science degree program at ECPI University. " +
		"While attending the university, I participated in many opportunities to gain hands on experience developing programs, working on teams, and managing projects.  " +
		"Since I am an inquisitive learner and I enjoy solving problems, programming was immediately a natural fit and led me to excel academically.  " +
		"Now that I am a recent graduate of ECPI Univeristy with multiple awards including Dean's List awards and a Certificate of Excellence for Outstanding Student Fellowship, " +
		"I am looking forward to the next big adventure in my career. " +
		"</p>";
		
		var subtitle_dev = "<h2 id=\"subtitle_dev\">" +
		"Professional Development Experiences<br/></h2>";
		var development = "<p id=\"development\">" +
		tab +
		"During the time I spent fulfilling my educational pursuits, I learned how to develop websites, configure web servers such as Apache and XAMPP, manage Oracle databases and write queries, " +
		"create Android mobile applications, and exercise core programming concepts in several  languages.  " + 
		"As a result of my studies at the university I have found that I prefer languages such as Python, Java and C#. " +
		"However, I have additionally studied several other languages including C, C++, HTML, CSS, and Javascript.  " +
		"I have also had experience utilizing popular frameworks such as Node.Js, Jquery, Slick2D, and Pygame.  " +
		"As a programmer, I philosophically commit myself to providing proper program documentation in both team projects and " +
		"my own personal work (i.e., commenting, flowcharting, pseudocode, and Data-flow diagramming).  " +
		"I also enjoy implementing version control with git and developing in both Linux and Windows environments." +
		"</p>";
		
		var subtitle_extra = "<h2 id=\"subtitle_extra\">" +
		"Extra Curricular Research" +
		"<br/></h2>";
		var extracurricular = "<p id=\"extracurricular\">" +
		tab +
		"Some additional topics caught my interest while in school also became a regular part of my studies as extracurricular research.  " +
		"In particular,  elective courses I took in UNIX Administration as well as RedHat Fedora Administration introduced me to Linux and open-source software.  " +
		"Today I use Linux as my main development platform and it has become my favored environment for personal use as well.  " +
		"I enjoy sampling different Linux distributions for fun, such as Mint, Ubuntu, Fedora, OpenSUSE, and ParrotOS.  " +
		br + br + tab +
		"The lattermost distribution, ParrotOS, is by far my favorite Linux flavor and is representative of my interests in topics pertaining to networking and cyber security.  " +
		"I have spent a lot of time reading articles and watching seminars by the SANS Institute, and have also read books on topics including ethical hacking and  security+.  " +
		"Naturally, some of the advanced concepts I encountered throughout research into many of these topics also inspired me to study some fundamentals behind digital systems.  " +
		"These areas include programmable logic devices, logic gates, Karnaugh maps, and combinatorial logic circuits.  " +
		"Some additional topics I continue to research in my personal time include hardware configuration, protocols, and system resources. " +
		br + br + "</p>";		
		
		// clean up the page elements
		$(pageTitle).empty();
		$(section_top).empty();
		$(section_middle).empty();
		$(section_bottom).empty();
		
		// append the page
		$(pageTitle).append(title);
		
		$(section_top).append(subtitle_edu);
		$("#subtitle_edu").css('text-align','center');
		$(section_top).append(education);
		$("#education").css('text-align','left');
		
		$(section_middle).append(subtitle_dev);
		$("#subtitle_dev").css('text-align','center');
		$(section_middle).append(development);
		$("#development").css('text-align','left');
		
		$(section_bottom).append(subtitle_extra);
		$("#subtitle_extra").css('text-align','center');
		$(section_bottom).append(extracurricular);
		$("#extracurricular").css('text-align','left');
		
		// set the last visited page
		lastPage = link_about;
		
	}   // end function
	
	//##################################################//
	//##		Resume Page Content
	//##################################################//
	

	// function displays the page contents
	function setResumePageContent()
	{
		// content variables
		var title = "Resume and Company Culture Fit.";
		
		var subtitle_infogr = "<h2 id=\"subtitle_infogr\">Brief Infographic Overview</h2>" + br + br;
		var infographic = "<img src=\"\" alt=\"infographic image\">" + br + br;
		var resume = "<p id=\"resume\" ><i class=\"fa fa-arrow-circle-down fa-2x\"></i>" +
		tab + "Download my resume.</p>";
		
		var subtitle_pref = "<h2 id=\"subtitle_pref\">Ideal Workplace and Company Culture<br/></h2>";
		var culturePreference = "<p id=\"culturePreference\">" + tab +
		"My ideal workplace seeks to encourage team building through events and programs that enable like-minded, " +
		"inquisitive individuals to learn and experience professional growth through interaction with one another.  " +
		"The kind of team that I prefer is one that is self-managed, meaning that team members are equally empowered.  " +
		"I prefer this particular team configuration because I believe that it enables all members to take ownership of of the decisions involved " +
		"in their work and that this contributes to a higher level of motivation and overall job satisfaction.  " +
		br + br + tab +
		"Continuing and broadening my skill set and knowledge is also important to me at both a professional and personal level.  " +
		"Therefore, I am very interested in a company culture that encourages its employees to do so with training opportunities and programs.  " +
		"I also value when companies seek to improve the health and wellness of their employees through unique benefits and programs.  " +
		"I personally believe that individuals perform their best and actualize their most creative ideas under ideal physical and emotional conditions. "+
		br + br + tab +
		"My own personal philosophy and mental attitude toward careers in general is that the work we do shouldn't just be a job we do everyday to satisfy life's basic demands; " +
		"it is an experience that should enrich our minds, encourage us to seek success, develop leadership, and grow together as individuals." +
		br + br + "</p>";
	
		// clean up the page elements
		$(pageTitle).empty();
		$(section_top).empty();
		$(section_middle).empty();
		$(section_bottom).empty();
		
		// set the title
		$(pageTitle).append(title);
		
		// add a short infographic overview and resume download link
		$(section_top).append(subtitle_infogr);
		$("#subtitle_infogr").css('text-align','center');
		$(section_top).append(infographic);
		$("#infographic").css('text-align','center');
		$(section_top).append(resume);
		$("#resume").css('text-align','center');
		$("#resume").css('background-color','none')
		
		// add ideal workplace and company culture
		$(section_middle).append(subtitle_pref);
		$("#subtitle_pref").css('text-align','center');
		$(section_middle).append(culturePreference);		
		
		// set the last visited page
		lastPage = link_resume;
		
	}   // end function
	
	//##################################################//
	//##		Projects Page Content
	//##################################################//
	// code snippets & download links, storyboards, sample documentation,photoshop, tutorial video, blender models
	
	// function displays the page contents
	function setProjectsPageContent()
	{
		// content variables
		var title = "Projects, Team Experiences, and Aspirations.";
		
		var subtitle_proj = "<h2 id=\"subtitle_proj\">My Software Projects</h2>";
		var projects = "<p id=\"projects\">...projects will go here....maybe a photo gallery of snippings with download links?...</p>";
		
		var subtitle_team = "<h2 id=\"subtitle_team\">Hands-On Project Management and Team Experiences</h2>";
		var teamExperiences = "<p id=\"teamExperiences\">" + 
		"<i>Project Green Screen</i>" + br + tab +
		"building green screen, editing videos, helping nick with virtual reality campus tour..." + br +  br + 
		"<i>Project Design " + amp + " Consign</i>" + br + tab +
		"documentation, storyboarding, meeting with clients, requirements planning..." + br +  br + 
		"<i>Project Foodiac</i>" + br + tab +
		"documentation, logo..." + br +  br + 
		"<i>Software Development Club at ECPI University</i>" + br + tab +
		"minesweeper, virtual reality assets with nick..." + 
		"</p>";
		
		var subtitle_goals = "<h2 id=\"subtitle_goals\">Goals and Aspirations</h2>";
		var goals = "<p id=\"goals\">" + tab +
		"My first and foremost short term goal now that I have graduated is to seek employment and begin my career in ernest as a developer.  " +
		"My future education currently is a 2-5 year range plan and includes the prospective pursuit of a M.D. in either Information Security Engineering at the Sans Institute " +
		"or in Game Design at Full Sail University.   I want to spend a year or two in the field before I make the decision about how my career will branch and grow.  " +
		br + br + tab +
		"There are several topics in programming which I am interested in learning and researching in the meantime.  " +
		"I am very interested in machine learning and big data analysis with Python and I plan to pursue learning these topics over time.  " +
		"I am also very interested in spending more time doing bash scripting and learning linux kernel module programming.  " +
		"In the future, I hope to expand my knowledge of digital systems and learn to program Arduinos and Raspberry Pi.  " +
		"</p>" + br + br;
		
		// clean up the page elements
		$(pageTitle).empty();
		$(section_top).empty();
		$(section_middle).empty();
		$(section_bottom).empty();
		
		// set the title
		$(pageTitle).append(title);
		
		// set the project interactive ui stuff
		$(section_top).append(subtitle_proj);
		$("#subtitle_proj").css('text-align','center');
		$(section_top).append(projects);
		$("#projects").css('text-align','center');		
		
		// set the team experience text
		$(section_middle).append(subtitle_team);
		$("#subtitle_team").css('text-align','center');
		$(section_middle).append(teamExperiences);
		
		// set the goals and aspirations text
		$(section_bottom).append(subtitle_goals);
		$("#subtitle_goals").css('text-align','center');
		$(section_bottom).append(goals);	
		
		// set the last visited page
		lastPage = link_projects;
		
	}   // end function
	
	//##################################################//
	//##		Contact Page Content
	//##################################################//
	

	// function displays the page contents
	function setContactPageContent()
	{
		// content variables
		var title = "Contact Me."
		var subtitle_greet = "<h2 id=\"subtitle_greet\">Prospective Employers and Fellow Developers</h2>";
		var greeting = "<p id=\"greeting\">" + 
		"If you are a prospective employer you may contact me by email or on LinkedIn by clicking the icons below.  " +
		"Alternatively, if you are a fellow developer looking for a team members on an open-source project feel free to reach out to me via Github." +
		"</p>";
		
		var linkedin_url = "https://linkedin.com/in/theresa-nemeth-485861141";
		var linkedin_icon = "<a class=\"fa fa-linkedin-square fa-3x\" aria-hidden=\"true\" href=\"" + linkedin_url + "\"></a>";	
		
		var github_url = "https://github.com/theresafiesta";
		var github_icon = "<a class=\"fa fa-github fa-3x\" aria-hidden=\"true\" href=\"" + github_url + "\"></a>";	
		
		var email_addr = "thenem0301@students.ecpi.edu";
		var email_icon = "<i class=\"fa fa-envelope-open fa-3x\" aria-hidden=\"true\" data-clipboard-target=\"" + email_addr+ "\"></i>";		
		
		var icons = "<p id=\"icons\">" + email_icon + tab + linkedin_icon + tab + github_icon + "</p>";
		// consider codewars, stackexchange, stackoverflow
	
		// clean up the page elements
		$(pageTitle).empty();
		$(section_top).empty();
		$(section_middle).empty();
		$(section_bottom).empty();
		
		// set the title
		$(pageTitle).append(title);
		
		// contact me text
		$(section_top).append(subtitle_greet);
		$("#subtitle_greet").css('text-align','center');
		$(section_top).append(greeting);
		$("#greeting").css('text-align','center');
		
		// add linkedin, github, email icons
		$(section_top).append(icons);
		$("#icons").css('text-align','center');
		
		// set the last visited page
		lastPage = link_contact;
		
	}   // end function
	
	//##################################################//
	//##		Display the Page
	//##################################################//
	
	// initialize the home page
	currentPage = link_home; 
	setNavColors(); 
	setHomePageContent();
	console.log("[*_*] home page initialized.");	
	
	// when user clicks a nav link, update the currentPage and nav element color
	$(link_home).bind("click", function(){
			currentPage = link_home; 
			setNavColors(); 
			setHomePageContent();
			console.log("[*_*] home link clicked.");
		});
		
		$(link_about).bind("click", function(){
			currentPage = link_about;
			setNavColors(); 
			setAboutPageContent();
			console.log("[*_*] about link clicked.");
		});
		
		$(link_resume).bind("click", function(){
			currentPage = link_resume; 
			setNavColors(); 
			setResumePageContent();
			console.log("[*_*] resume link clicked.");
		});
				
		$(link_projects).bind("click", function(){
			currentPage = link_projects; 
			setNavColors(); 
			setProjectsPageContent();
			console.log("[*_*] projects link clicked.");
		});
		
		$(link_contact).bind("click", function(){
			currentPage = link_contact; 
			setNavColors(); 
			setContactPageContent();
			console.log("[*_*] contact link clicked.");
		});
	
};   // end var: main()

// execute main()
try
{
	console.log('[^_^] \'jquery_script.js\' is properly linked.');
	$(document).ready(main);
	console.log('[^_^] jquery is working so far!');
}
catch(e)
{
	console.log('[X_X] fatal error: ' + e.message + '!');
	alert("Please enable javascript in your web browser to view page content.");
}
