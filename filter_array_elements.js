// const checkLength = (phoneNumber) => {
//     return phoneNumber.length <= 10;
//   }


// function checkLength(phonenumber) {
//     if (phonenumber.length <= 10) {
//       return true;
//     }
//     else {
//       return false;
//     }
// }

// console.log(checkLength('5'));


const checkLength = (phoneNum) => {
    if (phoneNum.length <= 10) {
        return true;
    } else {
        return false;
    }
}



const checkLength = (phoneNumber) => {
    return phoneNumber.length <= 10;
  }

// console.log(checkLength('5'));


const filterLongNumbers =  (phoneNumArray) => {
    return phoneNumArray.filter(checkLength);
}

// console.log(filterLongNumbers(['5999999987776', '65836836486854856484848', '55', '67865367']));


module.exports = checkLength;

module.exports = filterLongNumbers;

// module.exports = filter; 