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
		var title = "Online Portfolio";
		var tagline = "<p id=\"tagline\">" +
		"\"A compilation of artistic talent and innovative circumstance.\"</p>";
		var elevatorPitch = "<p id=\"elevator\">" + tab +
		"I am a software developer and recent graduate of ECPI University with a B.S. in Computer Science .  " +
		"I have two and a half years of hands-on experience  programming in languages such as Java, Python, JavaScript, HTML, C#, C++, and C.  " +
		"My interests in open source software and cybersecurity have shaped me into an adamant Linux user and enthusiast.  " +
		"I also have lots of creativity and professional artistic experience including digital imaging, video editing, storyingboarding, animation, and classical music composition.  "+
		br + br +
		"I am currently looking to find a Python or Java development position in a Linux environment that will leverage my skills, creativity and interests.  " +
		"My goal as a prospective employee is to seek a career that enriches and inspires others through technology and innovative ideas.  " +
		"</p>";
		
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
		var title = "Theresa the Programmer: In a Nutshell<br/>";
		
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
		"Some additional topics I continue to research in my personal time include hardware configuration, protocols, and system resources.  <br/>" +
		"</p>";		
		
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

		
		// clean up the page elements
		$(pageTitle).empty();
		$(section_top).empty();
		$(section_middle).empty();
		$(section_bottom).empty();
		
		$(pageTitle).append("testing the resume page!");
		
		// set the last visited page
		lastPage = link_resume;
		
	}   // end function
	
	//##################################################//
	//##		Projects Page Content
	//##################################################//
	
	
	// function displays the page contents
	function setProjectsPageContent()
	{
		// content variables
		
		
		// clean up the page elements
		$(pageTitle).empty();
		$(section_top).empty();
		$(section_middle).empty();
		$(section_bottom).empty();
		
		$(pageTitle).append("testing the projects page!");
		
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
		var linkedin = ""
		var gitHub = ""
		var email = "thenem0301@students.ecpi.edu"
	
	
		// clean up the page elements
		$(pageTitle).empty();
		$(section_top).empty();
		$(section_middle).empty();
		$(section_bottom).empty();
		
		$(pageTitle).append("testing the contact page!");
		
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
