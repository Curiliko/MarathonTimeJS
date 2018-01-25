var minutes = 40 ;
var hilly = 'N';

console.log("Enter your half-marathon time in minutes: ");

console.log("Is it a hilly course?('Y' for 'yes', 'N' for 'no'): ");

if (hilly === 'y' || hilly === 'Y') {
	minutes = (minutes * 2) + 30;
	console.log("It will take approximately " + minutes + " minutes to run a marathon.\n");
} else if (hilly === 'n' || hilly === 'N') {
	minutes = (minutes * 2) + 10;
	console.log("It will take approximately " + minutes + " minutes to run a marathon.\n");
}