let dayD = document.getElementById('day');
let hrsD = document.getElementById('hrs');
let minD = document.getElementById('min');
let secD = document.getElementById('sec');

const updateDate = () => {
    let timeNow = new Date();
    let yea = timeNow.getFullYear();
    let toCount = new Date(`01/01/${yea + 1}`);
    let diff = toCount - timeNow;
    let day = (Math.floor(diff / 1000 / 3600 / 24)).toString().padStart(2,"0");
    let hrs = (Math.floor(diff / 1000 / 3600) - day * 24).toString().padStart(2,"0");
    let minleft =( 60 - Math.abs(toCount.getMinutes() - timeNow.getMinutes())).toString().padStart(2,"0");
    let secleft = (60 - Math.abs(toCount.getSeconds() - timeNow.getSeconds())).toString().padStart(2,"0");
    dayD.innerText = day;
    hrsD.innerText = hrs;
    minD.innerText = minleft;
    secD.innerText = secleft;
};
setInterval(updateDate, 1000);