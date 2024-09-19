var dailySales = document.getElementById('daily-sales');
var totalSales = document.getElementById('total-sales');
var totalSalesMonth = document.getElementById('total-sales-month');
var totalSalesText = document.getElementById('total-sales-text');

// Get data from localStorage and parse it into a JavaScript object
var data = JSON.parse(localStorage.getItem('data'));

if (!data) {
    data = [];
}
console.log(data);
let total = 0;
let totalSalesMonthCount = 0;
// Get the current month and year
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

data.forEach(item => {
    total += item.income;
    // Parse the item's sales_date
    let itemDate = new Date(item.date);
    let itemMonth = itemDate.getMonth();
    let itemYear = itemDate.getFullYear();

    // If the item's month and year match the current month and year, add the item's revenue to totalSalesMonthCount
    if (itemMonth === currentMonth && itemYear === currentYear) {
        totalSalesMonthCount += item.income;
    }
    dailySales.innerHTML += `
    <tr>
        <td>${item.income} PLN</td>
        <td>${item.date}</td>
    </tr>
    `;
});
totalSales.innerHTML = total + ' PLN';
totalSalesMonth.innerHTML = totalSalesMonthCount + ' PLN';
totalSalesText.innerHTML = 'Total sales (' + currentDate.toLocaleString('default', { month: 'long' }) +')';





