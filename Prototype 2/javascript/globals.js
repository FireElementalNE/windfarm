/* script.js ==> These are the globals used by scrpit.js */
var foggedElements = new Array();         // Fogged elements
var windAmount = new Array();             // Array of wind data
var turbineNum = 0;                       // Turbine count
var meterNum = 0;                         // Meter count
var totalWind = 0;                        // total wind produced
var pprod = 0;                            // output money from production
var pcost = 0;                            // proiduction cost
var potentialRevWind = 0;                 // potential rev wind without cost
var potentialRevenue = 0;                 // potential revenue from wind
/* boxes.js ==> These are the globals used by boxes.js */
var factor = 30;                          // If you change this you MUST change the width and height values of .box in boxes.css
var MAXCOL = factor;                      // column count
var MAXROW = factor;                      // row count 
var targetWidthSmall = 1395;              // divided by factor to get box width
var targetHeightSmall = 855;              // divided by factor to get box height
var targetWidthFull = 1436;               // divided by factor to get box placement offset width
var targetHeightFull = 898;               // divided by factor to get box placement offset width
var clicked = new Array();                // Array of clicked elements
var boxWidth = targetWidthSmall/factor;   // change width of .box in boxes.css to this
var boxHeight = targetHeightSmall/factor; // change height of .box in boxes.css to this
/* game.js ==> These are the globals used by game.js */
var windAmount;                           // Amount of wind generated
var clickedButton = new Array(2);         // clicked button array (to find which button is clicked)
var windMeterCost = 1500;				  // cost of a windmeter
var COST_MULTIPLIER = 15;	              // factor multiplied by number of meters for tick updates to money
var REVENUE_MULTIPLIER = 2.67;	          // factor multiplied by totalWind of meters for tick updates to money