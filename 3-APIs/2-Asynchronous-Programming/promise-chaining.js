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

// 2nd promise
var playDate = function (gift) {
    return new Promise(
        function (resolve, reject) {
            var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';
            resolve(message);
        }
    );
};

// Promise Call
var checkTwice = function () {
    iCanHasGift
        .then(playDate) // chain here
        .then(function (fulfilled) {
            console.log(fulfilled);
            //output: "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new HasMattelbro Turbo-Man action figure?"        
        })
        .catch(function (error) {
            console.log(error)
        });
};

checkTwice();