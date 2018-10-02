/*
Write a function that buids an HTML table with the data below. The table should have four columns:
first name, last name, position, and year. If the player is a Senior, her information should be in bold.
*/

var players = [
  {
    first:'Angela',
    last: 'Smith',
    position: 'Guard',
    year: 'Junior'
  },
    {
    first:'Ashley',
    last: 'Roberts',
    position: 'Guard',
    year: 'Senior'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    year: 'Freshman'
  },
   {
    first:'Catherine',
    last: 'McAllister',
    position: 'Forward',
    year: 'Senior'
  },
   {
    first:'Haley',
    last: 'Bishop',
    position: 'Center',
    year: 'Sophomore'
  },
  {
   first:'Renee',
   last: 'Williams',
   position: 'Guard',
   year: 'Senior'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  year: 'Junior'
  }
];
//Begin by making the table into a variable.
var table = $('table');

//Set up your "for" loop. Select the array "players" so that you can search it, then ask it to grab all the variables within each object that are marked as "first". So i = 0 sets the place where you start; "i < players.length" tells you how long you keep looping through; "i++" tells you to move onto the next variable (i) each time you loop through.

for (i = 0; i < players.length; i++) {
 
 
 //Now cause your table to appear by adding a row. Using ".append" allows you to add information to your site through jQuery. This selects the table and adds a row. The class is set as "i" . 
 
 $(table).append('<tr class="' + i + '"></tr>');   //You could also use $(table).append(`<td class='${i}'></td>`); using ${i} allows you to
                                                   //use variables (Javascript) in the middle of a string (HTML).
 
 
 //Now, add text to your chart. First, you create a variable that holds the information in each object marked as "first." Then, you add that variable to your chart.
 //FIRST
 var first = '<td>' + players[i].first + '</td>';
 $('.' + i).append(first);
 
 //LAST
  var last = '<td>' + players[i].last + '</td>';
 $('.' + i).append(last);
 
 //POSITION
  var position = '<td>' + players[i].position + '</td>';
 $('.' + i).append(position);
 
 //YEAR
  var year = '<td>' + players[i].year + '</td>';
 $('.' + i).append(year);

 
 //Last but not least, loop through the array and select variables from every element marked as "year." When year = 'Senior', make the entire row bold. We use '.'+ i to select the entire row.
 if (players[i].year == 'Senior') {
 $('.' + i).css('font-weight', 'bold');
 }
}


