
'use strict'

// function generatFooter() {
//     var footerTr = document.createElement('tr');
//     var footerTd = document.createElement('td');
//     footerTd.textContent = ('total');
//     footerTr.appendChild(footerTd);

   
//     for (var i = 0; i < hours.length; i++) {
//         var hourTotalTd = document.createElement('td');
//         var hourTotal = 0;
//         for (var j = 0; j < locationArr.length; j++) {
//             hourTotal += locationArr[j].array[i]
//         }
//         totalOfTotal +=hourTotal;
//         hourTotalTd.textContent = hourTotal;
//         footerTr.appendChild(hourTotalTd);
//     }
//     var totalOfTotalTd = document.createElement('td');
//     totalOfTotalTd.textContent = totalOfTotal;
//     footerTr.appendChild(totalOfTotalTd);
//     table.appendChild(footerTr);
// }
// // calculateSum();
// generateHeader();

// var seattle=new Sales('Seattle',23,65,6.3);
// var Tokyo=new Sales('Tokyo',3,24,1.2);
// var Dubai=new Sales('Dubai',11,38,3.7);
// var Paris = new Sales('Paris',20,38,2.3);
// var Lims = new Sales('Lima',2,16,4.6);

// for (var i=0; i<locationArr.length;i++){
  
//     locationArr[i].RandomCookies();
//     locationArr[i].render();

    
    
// }
// generatFooter();
// // for(var j=0;j<hours.length;j++){
// //         randomCookies = Math.floor(generateRandomNum(this.minCustomerNumber, this.maxCustomerNumber) * this.avrgCookies);
// //         this.cookiesInHour.push(randomCookies);
// // }

// function generateRandomNum(minValue, maxValue) {
//     var randomValue = Math.random();
//     return (randomValue * (maxValue - minValue + 1)) + minValue;
// };

// function Sales(location, minCostumerNum, maxCostumerNum, avrCookies) {
//     this.location = location;
//     this.minCostumerNum = minCostumerNum;
//     this.maxCostumerNum = maxCostumerNum;
//     this.avrCookies = avrCookies;
//     this.cookiesInHour = [];
// };
// var cookiesInHour = [];
// var totalArray = [];
// var hours = ["/", '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

// Sales.prototype.cookies = function () {
//     var allCookies = 0;
//     var cookiesPerHour = 0;

//     for (var i = 0; i < hours.length; i++) {

//         cookiesPerHour = Math.floor(generateRandomNum(this.minCostumerNum, this.maxCostumerNum) * this.avrCookies);
//         // console.log(cookiesPerHour);
//         cookiesInHour.push(cookiesPerHour);
//         allCookies = allCookies + cookiesInHour[i];
//         // console.log(allCookies);
//         totalArray.push(allCookies);

//     };

// };



// Sales.prototype.Header = function () {                  //header  input
//     var article = document.getElementById('article');

//     var table = document.createElement('table');
//     article.appendChild(table);
//     var th = document.createElement('th');
//     table.appendChild(th);

//     for (var h = 0; h <= hours.length; h++) {
//         var td = document.createElement("td");
//         td.textContent = hours[h];
//         if (h == hours.length) {
//             td.textContent = "Daily Location Total"
//         };
//     };

// };


// Sales.prototype.renderData = function () {
//     var locations = ['seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima']
//     for (var i = 0; i <= locations.length; i++) {
//         var tr = document.createElement('th');
//         table.appendChild(tr);
//         var td = document.createElement('td');
//         tr.appendChild(td);
//         td.textContent = location[i];
//         for (var j = 0; j <= cookiesInHour.length; j++) {
//             var td = document.createElement('td');
//             tr.appendChild(td);
//             td.textContent = cookiesInHour[j];
//             if (j == location.length) {
//                 var td = document.createElement('td');
//                 tr.appendChild(td.j);
//                 td.textContent = totalArray[i];
//             };
//         };

//     };

// };

// Sales.prototype.Footer = function () {
//     for (var p = 0; p < location.length; p++) {            //footer
//         var totalcolom = 0
//         var endex = document.
//             totalcolom = totalcolom + endex
//     }
// }
// var seattle = new Sales('seattle', 23, 65, 6.3);
// seattle.cookies(this.minCostumerNum, this.maxCostumerNum);

// seattle.cookies();
// console.log()
// seattle.Header();
// seattle.renderData();
// seattle.Footer();
// console.log(seattle);

// Tokyo.cookies();
// Tokyo.Header();
// Tokyo.renderData();
// Tokyo.Footer();
// console.log(Tokyo);

// Dubai.cookies();
// Dubai.Header();
// Dubai.renderData();
// Dubai.Footer();
// console.log(Tokyo);

// Paris.cookies();
// Paris.Header();
// Paris.renderData();
// Paris.Footer();
// console.log(Paris);

// Lima.cookies();
// Lima.Header();
// Lima.renderData();
// Lima.Footer();
// console.log(Lima);

// var Tokyo = new Sales('Tokyo', 3, 24, 1.2);
// var Dubai = new Sales('Dubai', 11, 38, 3.7);
// var Paris = new Sales('Paris', 20, 38, 2.3);
// var Lima = new Sales('Lima', 2, 16, 4.6);



// var seattle = {
//     location: 'seattle',
//     minCostumerNum: 23,
//     maxCostumerNum: 65,
//     avrCookies: 6.3,
//     cookiesInHour: [],
//     //cookies in the hour
//     totalArray: [],

//     cookies: function () {

//         for (var i = 0; i < hours.length; i++) {

//             cookiesPerHour = Math.floor(generateRandomNum(this.minCostumerNum, this.maxCostumerNum) * this.avrCookies);
//             console.log(cookiesPerHour);
//             this.cookiesInHour.push(cookiesPerHour);
//             allCookies = allCookies + this.cookiesInHour[i];
//             console.log(allCookies)
//             this.totalArray.push(allCookies);

//         };
//     },

//     render : function () {
//         // var ul = document.getElementById('ul');
//         for (var i = 0; i < 13; i++) {

//             var li = document.createElement('li');
//             ul1.appendChild(li);
//             li.textContent = hours[i] + '  :  ' + this.cookiesInHour[i] + 'cookies' ;

//         }
//         var li = document.createElement('li');
//             li.textContent = 'Total:' + allCookies;
//             ul1.appendChild(li);
//     }

// };
// seattle.cookies();
// seattle.render();
// var Tokyo= {
//     location: 'Tokyo',
//     minCostumerNum: 3,
//     maxCostumerNum: 11,
//     avrCookies: 1.2,
//     cookiesInHour: [],
//     //cookies in the hour
//     totalArray: [],

//     cookies: function () {

//         for (var i = 0; i < hours.length; i++) {

//             cookiesPerHour = Math.floor(generateRandomNum(this.minCostumerNum, this.maxCostumerNum) * this.avrCookies);
//             console.log(cookiesPerHour);
//             this.cookiesInHour.push(cookiesPerHour);
//             allCookies = allCookies + this.cookiesInHour[i];
//             console.log(allCookies)
//             this.totalArray.push(allCookies);

//         };
//     },

//     render : function () {
//         // var ul = document.getElementById('ul');
//         for (var i = 0; i < 13; i++) {

//             var li = document.createElement('li');
//             ul2.appendChild(li);
//             li.textContent = hours[i] + '  :  ' + this.cookiesInHour[i] + 'cookies' ;

//         }
//         var li = document.createElement('li');
//             li.textContent = 'Total:' + allCookies;
//             ul2.appendChild(li);
//     }

// };
// Tokyo.cookies();
// Tokyo.render();

// var Dubai = {
//     location: 'Dubai',
//     minCostumerNum: 11,
//     maxCostumerNum: 38,
//     avrCookies: 3.7,
//     cookiesInHour: [],
//     //cookies in the hour
//     totalArray: [],

//     cookies: function () {

//         for (var i = 0; i < hours.length; i++) {

//             cookiesPerHour = Math.floor(generateRandomNum(this.minCostumerNum, this.maxCostumerNum) * this.avrCookies);
//             console.log(cookiesPerHour);
//             this.cookiesInHour.push(cookiesPerHour);
//             allCookies = allCookies + this.cookiesInHour[i];
//             console.log(allCookies)
//             this.totalArray.push(allCookies);

//         };
//     },

//     render : function () {
//         var ul = document.getElementById('ul');
//         for (var i = 0; i < 13; i++) {

//             var li = document.createElement('li');
//             ul3.appendChild(li);
//             li.textContent = hours[i] + '  :  ' + this.cookiesInHour[i] + 'cookies' ;

//         }
//         var li = document.createElement('li');
//             li.textContent = 'Total:' + allCookies;
//             ul3.appendChild(li);
//     }

// };
// Dubai.cookies();
// Dubai.render();

// var Paris = {
//     location: 'Paris',
//     minCostumerNum: 20,
//     maxCostumerNum: 38,
//     avrCookies: 2.3,
//     cookiesInHour: [],
//     //cookies in the hour
//     totalArray: [],

//     cookies: function () {

//         for (var i = 0; i < hours.length; i++) {

//             cookiesPerHour = Math.floor(generateRandomNum(this.minCostumerNum, this.maxCostumerNum) * this.avrCookies);
//             console.log(cookiesPerHour);
//             this.cookiesInHour.push(cookiesPerHour);
//             allCookies = allCookies + this.cookiesInHour[i];
//             console.log(allCookies)
//             this.totalArray.push(allCookies);

//         };
//     },

//     render : function () {
//         var ul = document.getElementById('ul');
//         for (var i = 0; i < 13; i++) {

//             var li = document.createElement('li');
//             ul4.appendChild(li);
//             li.textContent = hours[i] + '  :  ' + this.cookiesInHour[i] + 'cookies' ;

//         }
//         var li = document.createElement('li');
//             li.textContent = 'Total:' + allCookies;
//             ul4.appendChild(li);
//     }

// };
// Paris.cookies();
// Paris.render();

// var Lima = {
//     location: 'Lima',
//     minCostumerNum: 2,
//     maxCostumerNum: 16,
//     avrCookies: 4.6,
//     cookiesInHour: [],
//     //cookies in the hour
//     totalArray: [],

//     cookies: function () {

//         for (var i = 0; i < hours.length; i++) {

//             cookiesPerHour = Math.floor(generateRandomNum(this.minCostumerNum, this.maxCostumerNum) * this.avrCookies);
//             console.log(cookiesPerHour);
//             this.cookiesInHour.push(cookiesPerHour);
//             allCookies = allCookies + this.cookiesInHour[i];
//             console.log(allCookies)
//             this.totalArray.push(allCookies);

//         };
//     },

//     render : function () {
//         var ul = document.getElementById('ul');
//         for (var i = 0; i < 13; i++) {

//             var li = document.createElement('li');
//             ul5.appendChild(li);
//             li.textContent = hours[i] + '  :  ' + this.cookiesInHour[i] + 'cookies' ;

//         }
//         var li = document.createElement('li');
//             li.textContent = 'Total:' + allCookies;
//             ul5.appendChild(li);
//     }

// };
// Lima.cookies();
// Lima.render();







// global' funtion



