'use strict'
var locationArr = [];
var totalOfTotal = 0;
console.log(locationArr)

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

function Sales(location, minCustomerNumber, maxCustomerNumber, avrgCookies) {
    this.location = location;
    this.minCustomerNumber = minCustomerNumber;
    this.maxCustomerNumber = maxCustomerNumber;
    this.avrgCookies = avrgCookies;
    this.cookiesInHour = [];
    this.sum=0;
     this.array=[];
    locationArr.push(this);
};

Sales.prototype.RandomCookies = function () {

        this.totalCookiesPerDay += randomCookies;

   var randomCookies = Math.floor(generateRandomNum(this.minCustomerNumber, this.maxCustomerNumber) * this.avrgCookies);
   console.log(randomCookies)
   return randomCookies;

};


function generateRandomNum (maxValue, minValue) {
    var randomValue = Math.random();
    return (randomValue * (maxValue - minValue + 1)) + minValue;
};

var table = document.getElementById('parent')

function generateHeader() {
    var headerTr = document.createElement('tr');
    var emptyTh = document.createElement('td')
    headerTr.appendChild(emptyTh);
    for (var i = 0; i < hours.length; i++) {
        var headerTh = document.createElement('th');
        headerTh.textContent = hours[i];
        headerTr.appendChild(headerTh);
    }
    var totalTh = document.createElement('th');
    totalTh.textContent = 'Daily Location Total';
    headerTr.appendChild(totalTh);
    table.appendChild(headerTr);

};

Sales.prototype.render=function(){
  
    var data1 = document.createElement('tr');
    table.appendChild(data1);
    var td1 = document.createElement('td');
    td1.textContent=this.location;
    data1.appendChild(td1);
    var arr=this.calculateSum();
    for(var i=0;i<hours.length;i++){
        var td2 = document.createElement('td');
        td2.textContent=arr[i];
        data1.appendChild(td2);
    }
    var totalTd=document.createElement('td');
    totalTd.textContent=this.sum;
    data1.appendChild(totalTd);
    
}

Sales.prototype.calculateSum=function(){
    this.sum=0;
    this.array=[];
   
    for (var i=0;i<hours.length;i++){
        var num=this.RandomCookies();
        this.sum=this.sum+num;
        this.array.push(num);
    }
    this.array.push(this.sum)
    console.log(this.array)
    totalOfTotal=totalOfTotal+this.sum

return this.array;


}
function generatFooter() {
    var footerTr = document.createElement('tr');
    var footerTd = document.createElement('td');
    footerTd.textContent = ('total');
    footerTr.appendChild(footerTd);

   
    for (var i = 0; i < hours.length; i++) {
        var hourTotalTd = document.createElement('td');
        var hourTotal = 0;
        for (var j = 0; j < locationArr.length; j++) {
            hourTotal += locationArr[j].array[i]
        }
        totalOfTotal +=hourTotal;
        hourTotalTd.textContent = hourTotal;
        footerTr.appendChild(hourTotalTd);
    }
    var totalOfTotalTd = document.createElement('td');
    totalOfTotalTd.textContent = totalOfTotal/2;
    footerTr.appendChild(totalOfTotalTd);
    table.appendChild(footerTr);
}
// calculateSum();
generateHeader();

var seattle=new Sales('Seattle',23,65,6.3);
var Tokyo=new Sales('Tokyo',3,24,1.2);
var Dubai=new Sales('Dubai',11,38,3.7);
var Paris = new Sales('Paris',20,38,2.3);
var Lima = new Sales('Lima',2,16,4.6);

for (var i=0; i<locationArr.length;i++){
  
    locationArr[i].RandomCookies();
    locationArr[i].render();
}
generatFooter();
