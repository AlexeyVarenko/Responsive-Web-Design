/*Step 7
The rest of your crew has been created in an array named remainingCrew with the following data:

id	name	role	isEVAEligible	priority
2	"Bart"	"Pilot"	false	8
3	"Caroline"	"Engineer"	true	4
4	"Diego"	"Scientist"	false	1
5	"Elise"	"Medic"	true	7
6	"Felix"	"Navigator"	true	6
7	"Gertrude"	"Communications"	false	4
8	"Hank"	"Mechanic"	true	2
9	"Irene"	"Specialist"	true	5
10	"Joan"	"Technician"	false	1
Loop through the remainingCrew array and add each astronaut to squad using the addCrewMember() function.*/


for (let i = 0; i < remainingCrew.length; i++) {
  addCrewMember(squad, remainingCrew[i]);
}