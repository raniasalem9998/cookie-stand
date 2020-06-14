'use strict';

var seattle = {
    location: 'seatle',
    minCostumerNum: 23,
    maxCostumerNum: 65,
    avrCookies: 6.3,
    hour: document.querySelectorAll("li"), //cookies in the hour
    totalArray:document.querySelectorAll(".total")[0],

    // randum: function () {
    //     this.cookiesPerHour = generateRandomAge(this.minCostumerNum, this.maxCostumerNum);
    // },

    total: function () {
        for (var i = 0; i <= this.hour.length; i++) {
            var allCookies = 0;
            var cookiesPerHour=0;
             if (i <= 6) {
                this.cookiesPerHour = generateRandomAge(this.minCostumerNum, this.maxCostumerNum) * this.avrCookies;

                hour[i].textContent = (i + 6) + 'pm:' + cookiesPerHour + 'cookies';
                allCookies = allCookies + hour[i];
                totalArray[0].textContent = 'Total=' + allCookies;
                console.log(allCookies,this.totalArray,this.hour[i])
            }
            else {
                this.cookiesPerHour = generateRandomAge(this.minCostumerNum, this.maxCostumerNum) * this.avrCookies;

                hour[i].textContent = (i + 6) + 'am:' + cookiesPerHour + 'cookies';
                allCookies = allCookies + hour[i];
                totalArray[0].textContent = 'Total=' + allCookies;


            }
        };
    },
    


};
// global' funtion
function generateRandomAge(minValue, maxValue) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (maxValue - minValue + 1)) + minValue;
};
// copy and past to add for other locations