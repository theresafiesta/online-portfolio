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

	// color values
	var color_nav_unsel = "azure";
	var color_nav_sel = "#FFFF00";


	//##################################################//
	//##		Navigation Links
	//##################################################//
	
	// function sets the color of the nav elements
	function setNavColors()
	{
		for(var i = 0; i < links.length; i++)		
		{
				// if a link is NOT the current page, make it unselected
				if(links[i] != currentPage)
				{
					$(links[i]).css('color',color_nav_unsel)
				}   // end if
				// if the link is the current page, make it selected
				else if(links[i] == currentPage)
				{
					$(links[i]).css('color',color_nav_sel)
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
		var tagline = "<p>\"A <i>compilation</i> of artistic talent and innovative circumstance.\"</p>";
		var elevatorPitch = 
		"<p>I am a software developer and recent graduate of ECPI University with a B.S. in Computer Science .  " +
		"I have two and a half years of hands-on experience  programming in languages such as Java, Python, JavaScript, HTML, C#, C++, and C.  " +
		"My interests in open source software and cybersecurity have shaped me into an adamant Linux user and enthusiast.  " +
		"I also have lots of creativity and professional artistic experience including digital imaging, video editing, storyingboarding, animation, and classical music composition.  "+
		"<br/><br/>"+
		"I am currently looking to find a Python or Java development position in a Linux environment that will leverage my skills, creativity and interests.  " +
		//"My goal as a prospective employee is to seek a career that enriches the lives of other people and inspires others to live happier and healthier through technology and innovative ideas.  " +
		"My goal as a prospective employee is to seek a career that ..........." +
		"</p>";
		
		// clean up the page elements
		$(section_top).empty();
		$(section_middle).empty();
		$(section_bottom).empty();
		
		// add the tagline
		$(section_top).append(br);
		$(section_top).append(br);
		$(section_top).append(tagline);
		$(section_top).css('text-align','center');
		
		// add the elevator pitch
		$(section_middle).append(elevatorPitch);
		$(section_middle).css('text-align','center');
		$(section_middle).css('padding-left','10%');
		$(section_middle).css('padding-right','10%');	
		
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
		
		
		// clean up the page elements
		$(section_top).empty();
		$(section_middle).empty();
		$(section_bottom).empty();
		
		$(section_top).append("testing the about page!");
		
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
		$(section_top).empty();
		$(section_middle).empty();
		$(section_bottom).empty();
		
		$(section_top).append("testing the resume page!");
		
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
		$(section_top).empty();
		$(section_middle).empty();
		$(section_bottom).empty();
		
		$(section_top).append("testing the projects page!");
		
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
		$(section_top).empty();
		$(section_middle).empty();
		$(section_bottom).empty();
		
		$(section_top).append("testing the contact page!");
		
		// set the last visited page
		lastPage = link_contact;
		
	}   // end function
	
	//##################################################//
	//##		Display the Page
	//##################################################//
	
	// initialize the home page
	currentPage == link_home; 
	setNavColors(); 
	setHomePageContent();
	console.log("[*_*] home page initialized.");	
	
	// when user clicks a nav link, update the currentPage and nav element color
	$(link_home).bind("click", function(){
			currentPage == link_home; 
			setNavColors(); 
			setHomePageContent();
			console.log("[*_*] home link clicked.");
		});
		
		$(link_about).bind("click", function(){
			currentPage == link_about;
			setNavColors(); 
			setAboutPageContent();
			console.log("[*_*] about link clicked.");
		});
		
		$(link_resume).bind("click", function(){
			currentPage == link_resume; 
			setNavColors(); 
			setResumePageContent();
			console.log("[*_*] resume link clicked.");
		});
				
		$(link_projects).bind("click", function(){
			currentPage == link_projects; 
			setNavColors(); 
			setProjectsPageContent();
			console.log("[*_*] projects link clicked.");
		});
		
		$(link_contact).bind("click", function(){
			currentPage == link_contact; 
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
