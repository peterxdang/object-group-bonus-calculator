const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

  
function employeeBonus (employee) {
  
    let bonusPercentage = '';
    if (employee.reviewRating == 3) {
      bonusPercentage = 4;
  
    }
    else if (employee.reviewRating == 4) {
      bonusPercentage = 6;
     
    }
    else if (employee.reviewRating == 5) {
      bonusPercentage = 10;
  
    }
    else if (employee.reviewRating <= 2) {
      bonusPercentage = 0;
    }
  
    
    return bonusPercentage;
  
}
function gettingRaise (worker) {
  for (i=0; i<worker.length; i++) {
    let newObject = {
      name: worker[i].name,
      bonusPercentage: worker[i].bonusPercentage,
      totalCompensation: worker[i].totalCompensation  
    }
    let totalCompensation = [1 +(worker[i].bonusPercentage / 100)] * worker[i].annualSalary;

    if (employeeBonus(worker[i]) == 4) {
    console.log(newObject);
  }
    else if (employeeBonus(worker[i]) == 6) {
    console.log('getting 6 percent raise');
  }
    else if (employeeBonus(worker[i]) == 10) {
    console.log('getting 10 percent raise');
  }
    else if (employeeBonus(worker[i]) == 0) {
      console.log('no bonuses')
    }
}
}

gettingRaise (employees)

//let newObject = {
//  name: ,
//  bonusPercentage: ,
//  totalCompensation: ,
//  totalBonus
//}

//let totalCompensation = [1 +(bonusPercentage / 100)] * worker[i].annualSalary;
//console.log(totalCompensation);
//let totalBonus = 


//else if (employees.reviewRating = 4) {
 // return bonus = 6;
//}
//else if (employees.reviewRating = 5) {
 // return bonus = 10;
//}
 // else {
 // return bonus = 0;
//

//Those who have a rating of a 2 or below should not receive a bonus.
//- Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
//- Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
//- Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
//- If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
//and should receive an additional 5%.
//- However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
//- No bonus can be above 13% or below 0% total.