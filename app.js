'use strict';
var allCookies = 0;
var cookiesPerHour = 0;
var hours= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var seattle = {
    location: 'seattle',
    minCostumerNum: 23,
    maxCostumerNum: 65,
    avrCookies: 6.3,
    cookiesInHour: [],
    //cookies in the hour
    totalArray: [],

    cookies: function () {

        for (var i = 0; i < hours.length; i++) {

            cookiesPerHour = Math.floor(generateRandomNum(this.minCostumerNum, this.maxCostumerNum) * this.avrCookies);
            console.log(cookiesPerHour);
            this.cookiesInHour.push(cookiesPerHour);
            allCookies = allCookies + this.cookiesInHour[i];
            console.log(allCookies)
            this.totalArray.push(allCookies);

        };
    },
   
    render : function () {
        // var ul = document.getElementById('ul');
        for (var i = 0; i < 13; i++) {
           
            var li = document.createElement('li');
            ul1.appendChild(li);
            li.textContent = hours[i] + '  :  ' + this.cookiesInHour[i] + 'cookies' ;
            
        }
        var li = document.createElement('li');
            li.textContent = 'Total:' + allCookies;
            ul1.appendChild(li);
    }
    
};
seattle.cookies();
seattle.render();
var Tokyo= {
    location: 'Tokyo',
    minCostumerNum: 3,
    maxCostumerNum: 11,
    avrCookies: 1.2,
    cookiesInHour: [],
    //cookies in the hour
    totalArray: [],

    cookies: function () {

        for (var i = 0; i < hours.length; i++) {

            cookiesPerHour = Math.floor(generateRandomNum(this.minCostumerNum, this.maxCostumerNum) * this.avrCookies);
            console.log(cookiesPerHour);
            this.cookiesInHour.push(cookiesPerHour);
            allCookies = allCookies + this.cookiesInHour[i];
            console.log(allCookies)
            this.totalArray.push(allCookies);

        };
    },
   
    render : function () {
        // var ul = document.getElementById('ul');
        for (var i = 0; i < 13; i++) {
           
            var li = document.createElement('li');
            ul2.appendChild(li);
            li.textContent = hours[i] + '  :  ' + this.cookiesInHour[i] + 'cookies' ;
            
        }
        var li = document.createElement('li');
            li.textContent = 'Total:' + allCookies;
            ul2.appendChild(li);
    }
    
};
Tokyo.cookies();
Tokyo.render();

var Dubai = {
    location: 'Dubai',
    minCostumerNum: 11,
    maxCostumerNum: 38,
    avrCookies: 3.7,
    cookiesInHour: [],
    //cookies in the hour
    totalArray: [],

    cookies: function () {

        for (var i = 0; i < hours.length; i++) {

            cookiesPerHour = Math.floor(generateRandomNum(this.minCostumerNum, this.maxCostumerNum) * this.avrCookies);
            console.log(cookiesPerHour);
            this.cookiesInHour.push(cookiesPerHour);
            allCookies = allCookies + this.cookiesInHour[i];
            console.log(allCookies)
            this.totalArray.push(allCookies);

        };
    },
   
    render : function () {
        var ul = document.getElementById('ul');
        for (var i = 0; i < 13; i++) {
           
            var li = document.createElement('li');
            ul3.appendChild(li);
            li.textContent = hours[i] + '  :  ' + this.cookiesInHour[i] + 'cookies' ;
            
        }
        var li = document.createElement('li');
            li.textContent = 'Total:' + allCookies;
            ul3.appendChild(li);
    }
    
};
Dubai.cookies();
Dubai.render();

var Paris = {
    location: 'Paris',
    minCostumerNum: 20,
    maxCostumerNum: 38,
    avrCookies: 2.3,
    cookiesInHour: [],
    //cookies in the hour
    totalArray: [],

    cookies: function () {

        for (var i = 0; i < hours.length; i++) {

            cookiesPerHour = Math.floor(generateRandomNum(this.minCostumerNum, this.maxCostumerNum) * this.avrCookies);
            console.log(cookiesPerHour);
            this.cookiesInHour.push(cookiesPerHour);
            allCookies = allCookies + this.cookiesInHour[i];
            console.log(allCookies)
            this.totalArray.push(allCookies);

        };
    },
   
    render : function () {
        var ul = document.getElementById('ul');
        for (var i = 0; i < 13; i++) {
           
            var li = document.createElement('li');
            ul4.appendChild(li);
            li.textContent = hours[i] + '  :  ' + this.cookiesInHour[i] + 'cookies' ;
            
        }
        var li = document.createElement('li');
            li.textContent = 'Total:' + allCookies;
            ul4.appendChild(li);
    }
    
};
Paris.cookies();
Paris.render();

var Lima = {
    location: 'Lima',
    minCostumerNum: 2,
    maxCostumerNum: 16,
    avrCookies: 4.6,
    cookiesInHour: [],
    //cookies in the hour
    totalArray: [],

    cookies: function () {

        for (var i = 0; i < hours.length; i++) {

            cookiesPerHour = Math.floor(generateRandomNum(this.minCostumerNum, this.maxCostumerNum) * this.avrCookies);
            console.log(cookiesPerHour);
            this.cookiesInHour.push(cookiesPerHour);
            allCookies = allCookies + this.cookiesInHour[i];
            console.log(allCookies)
            this.totalArray.push(allCookies);

        };
    },
   
    render : function () {
        var ul = document.getElementById('ul');
        for (var i = 0; i < 13; i++) {
           
            var li = document.createElement('li');
            ul5.appendChild(li);
            li.textContent = hours[i] + '  :  ' + this.cookiesInHour[i] + 'cookies' ;
            
        }
        var li = document.createElement('li');
            li.textContent = 'Total:' + allCookies;
            ul5.appendChild(li);
    }
    
};
Lima.cookies();
Lima.render();







// global' funtion
function generateRandomNum(minValue, maxValue) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (maxValue - minValue + 1)) + minValue;
};

// copy and past to add for other locations
