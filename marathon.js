// Sample user input. Subject to change depending on what values want to be used/ tested
var minutes = 40 ;
var hilly = 'N';

// Prompt user for their half-marathon time
console.log("Enter your half-marathon time in minutes: ");

// Prompt user to see if the marathon is hilly or not
console.log("Is it a hilly course? ('Y' for 'yes', 'N' for 'no'): ");

// Display time for full marathon depending on if course is hilly or not
if (hilly === 'y' || hilly === 'Y') {
	minutes = (minutes * 2) + 30;
	console.log("It will take approximately " + minutes + " minutes to run a marathon.\n");
} else if (hilly === 'n' || hilly === 'N') {
	minutes = (minutes * 2) + 10;
	console.log("It will take approximately " + minutes + " minutes to run a marathon.\n");
}
