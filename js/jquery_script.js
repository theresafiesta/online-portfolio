// Jquery

var main = function()
{
	// avoid stupid problems js
	"use strict";

	// global control and nav dom variables
	var link_home = '#link_home';
	var link_about = '#link_about';
	var link_resume = '#link_resume';
	var link_projects = '#link_projects';
	var link_contact = '#link_contact';
	var currentPage = link_home		// initialize to home page
	var links = [link_home, link_about, link_resume, link_projects, link_contact];

	// page container dom variables
	var section_top = '#section_top';
	var section_middle = '#section_middle';
	var section_bottom = '#section_bottom';

	// color values
	color_nav_unsel = 'var(--color-text-nav)';
	color_nav_sel = 'var(--color-text-nav-highlight)';

	// home page text
	var tagline = "\"A <i>compilation</i> of artistic talent and innovative circumstance.\"";
	var elevatorPitch = "I am a software developer and recent graduate of ECPI University with a B.S. in Computer Science and 2";

	//##################################################//
	//##		home 

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