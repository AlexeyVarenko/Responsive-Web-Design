/*Step 18
A capture group is a way to define a part of the expression that should be captured and saved for later reference. You can define a capture group by wrapping a part of your expression in parentheses. For example, /h(i|ey) camper/ would match either hi camper or hey camper, and would capture i or ey in a group.

Turn your place values into a capture group.*/


const dollarRegex = /[0-9]+ (hundred|thousand|million|billion) dollars/i;