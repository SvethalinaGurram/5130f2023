function Email(email) {
  var emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email !== "" && email.match(emailFormat)) {
    return true;
  }

  return false;
}

console.log("E-mail:", Email("l/l.in"));
console.log("E-mail:", Email("lll.com"));
console.log("E-mail:", Email("7@7.test"));
console.log("E-mail:", Email("svethalina.s@gmail.com"));

function PhoneNumber(number) {
  var numberFormat = /^\+?[0-9()-.\s]{10,20}$/;
  if (numberFormat.test(number)) {
    return true;
  }

  return false;
}
console.log("Phone Number", PhoneNumber("9783152233"));
console.log("Phone Number", PhoneNumber("9783152233s"));
console.log("Phone Number", PhoneNumber("+1 (978)-315-2233"));

function ValidDomain(domain) {
  var domainRegex =
    /^(https?|ftp):\/\/[A-Za-z0-9-]+\.[A-Za-z0-9]+(\/[A-Za-z0-9-_.]*)*$/;
  return domainRegex.test(domain);
}

var domainToCheck = "svethalina.me";
if (ValidDomain(domainToCheck)) {
  console.log(domainToCheck + " is a Valid domain.");
} else {
  console.log(domainToCheck + " isn't a Valid domain.");
}