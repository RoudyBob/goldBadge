function validate(username) {
    // Write the code that goes here
    let valid = Boolean;
    let firstChar = username.charAt(0);
    let lastChar = username.charAt(username.length-1);
    let regexChar = /^[a-zA-Z]/;
    let regexHyphen = /^[-]/;
    let regexLettersNumbers = /^[a-zA-Z0-9]/;

    let hyphens = username.match(/[-]/g) || [];

    if (username.length >= 6 && username.length <= 16 && regexLettersNumbers.test(username) && regexChar.test(firstChar) && regexHyphen.test(lastChar) == false) {
        if (hyphens.length == 1) {
            valid = true;
        } else {
            valid = false;
        };
    } else {
        valid = false;
    };

    return valid;
};

console.log(validate('Mike-Standish')); // Valid username
console.log(validate('Mike Standish')); // Invalid username