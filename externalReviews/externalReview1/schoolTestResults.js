// Input                                 |   Output
// "Green, Green, Red, Amber, Red"       |  "Green: 2\nAmber: 1\nRed: 2" 


// if colour not in input, then leave colour out of ouput

const createReport = (gradeColour) => {
   if (gradeColour === "green") {
       return "green: 1";
   } else if (gradeColour === "amber") {
       return "amber: 1";
     }
   };




// const test = () => {
//     return "Hello"
// };

module.exports = createReport