let clock = document.getElementById('clock');
let color = document.getElementById('color');

function runClock() {
    let time = new Date(),
        h = time.getHours().toString(),
        m = time.getMinutes().toString(),
        s = time.getSeconds().toString();

    if (h.length < 2) {
        h = '0' + h;
    }

    if (m.length < 2) {
        m = '0' + m;
    }

    if (s.length < 2) {
        s = '0' + s;
    }

    let colorString = '#' + h + m + s;

    clock.textContent = `${h}:${m}:${s}`;
    color.textContent = colorString;

    document.body.style.backgroundColor = colorString;
}

runClock();
setInterval(runClock, 1000);