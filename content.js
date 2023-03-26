let days = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let start = Date.now();
const timer = () => {
    let delta = Math.floor((Date.now() - start)/1000);
    let min = Math.floor(delta/60);
    let sec = delta%60;
    if (min === 30) {
        alert("Times UP....");
    }
    let mainContent = document.querySelector('[href="/subscribe/?ref=lp_pl&source=nav-premium"]');
    var content = document.createElement("div");
    content.id = "timer";
    content.style.alignSelf = "center";
    content.style.marginRight = "5px";
    content.style.backgroundColor = "#073e52";
    content.style.padding = "3px";
    content.style.borderRadius = "2px";
    if (min > 25) {
        content.style.backgroundColor = "#e81607";
    }
    var paragraph = document.createElement("p");
    let m = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    paragraph.textContent = m + " : " + sec;
    content.appendChild(paragraph);
    let parent = mainContent.parentNode;
    let old = document.getElementById("timer");
    if (parent.contains(old)) {
        parent.removeChild(old);
    }
    parent.prepend(content);
}

const timeStr = () => {
    let mainContent = document.querySelector('[href="/subscribe/?ref=lp_pl&source=nav-premium"]');
    var content = document.createElement("div");
    content.id = "time";
    content.style.alignSelf = "center";
    content.style.marginRight = "5px";
    var paragraph = document.createElement("p");
    let d = new Date();
    let h = d.getUTCHours();
    var hour = h == 0 ? 12 : (h > 12 ? h - 12 : h);
    let m = d.getUTCMinutes();
    var min = m < 10 ? '0' + m : m;
    var ampm = h < 12 ? 'AM' : 'PM';
    var time = hour + ':' + min + ' ' + ampm;
    paragraph.textContent = days[d.getUTCDay()]+", " + d.getUTCDate() + " " + months[d.getUTCMonth()] + " " + d.getUTCFullYear() + " " + time;
    content.appendChild(paragraph);
    let parent = mainContent.parentNode;
    let old = document.getElementById("time");
    if (parent.contains(old)) {
        parent.removeChild(old);
    }
    parent.prepend(content);
};

setTimeout(() => {
    timeStr();
    setInterval(timeStr, 60000);
    setInterval(timer, 1000);
}, 2000);