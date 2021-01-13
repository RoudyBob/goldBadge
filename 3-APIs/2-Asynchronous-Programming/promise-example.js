// Boolean declaration 
var amIGood = true;

// Promise 
let iCanHasGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: "HasMattelBro",
                item: "Turbo-Man Action Figure"
            }
            resolve(gift); //fulfilled
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty); //rejected
        }

    }
);

// 2nd Promise
var PlayDate = function (gift) {
    return new Promise(
        function (resolve, reject) {
            var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yuletide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';
            resolve(message);
        }
    );
};

// Promise Call
var checkTwice = function () {
    console.log('before Christmas'); //log before
    iCanHasGift
        .then(PlayDate)
        .then(function (fulfilled) {
            // nice list = gift
            console.log(fulfilled);
        })
        .catch(function (error) {
            // naughty list = coal
            console.log(error);
        });
    console.log('after opening gifts'); //log after
};

checkTwice();