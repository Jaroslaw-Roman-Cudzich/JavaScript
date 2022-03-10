// const uppercaseMessage = (message) => {
//     return message.toUpperCase();
//   }
  
//   // this function accepts a message, and another function
//   // it then calls this function to do its job.
//   const transform = (message, transformFunction) => {
//     return transformFunction(message);
//   }

  
//   console.log(transform("hello", uppercaseMessage));

// --------------------------------------------------------------------


const notifyByEmail = (emailAddress) => {
    console.log(`Email sent to: ${emailAddress}`)
}

notifyByEmail("test@yahoo.com")


const notifyByText = (phoneNum) => {
    console.log(`Text sent to: ${phoneNum}`)
}

notifyByText(123456789)


const notify = (emailAddressOrPhoneNum, notifyFunction) => {
    return notifyFunction(emailAddressOrPhoneNum);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify(+10000000000, notifyByText));

