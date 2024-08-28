let dayD = document.querySelectorAll('.day');
let hrsD = document.querySelectorAll('.hrs');
let minD = document.querySelectorAll('.min');
let secD = document.querySelectorAll('.sec');




console.log(day);
console.log(hrs);
console.log(minleft);
console.log(secleft);
const updateDate = () => {
    let timeNow = new Date();
    let yea = timeNow.getFullYear();
    let toCount = new Date(`01/01/${yea + 1}`);
    let diff = toCount - timeNow;
    let day = Math.floor(diff / 1000 / 3600 / 24);
    let hrs = Math.floor(diff / 1000 / 3600) - day * 24;
    let minleft = 60 - Math.abs(toCount.getMinutes() - timeNow.getMinutes());
    let secleft = 60 - Math.abs(toCount.getSeconds() - timeNow.getSeconds());
};
// setInterval(updateDate,1000);
