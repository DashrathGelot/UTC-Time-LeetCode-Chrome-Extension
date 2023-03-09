let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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
    paragraph.textContent = days[d.getUTCDay() - 1]+", " + d.getUTCDate() + " " + months[d.getUTCMonth()] + " " + d.getUTCFullYear() + " " + time;
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
}, 1000);