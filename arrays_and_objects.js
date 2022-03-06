// const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla',discount:  6 }
  ];



const generateMessages = (namesAndDiscounts) => {
    return namesAndDiscounts.map((arrayElement) => {
    return('Hi ' + arrayElement.name + '! ' + arrayElement.discount + '% off our best candies for you today!');
});
};


console.log(generateMessages(namesAndDiscounts));