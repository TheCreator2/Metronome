//metronome
console.log("Setting up metronome");
const btnDecreaseBPM = document.getElementById("btnDecreaseBPM");
const btnIncreaseBPM = document.getElementById("btnIncreaseBPM");
const bpmInput = document.getElementById("txtBPM");
const btnStartStop = document.getElementById("btnStartStop");
const MAX_BPM = 200;
const MIN_BPM = 20;

var running = false;
var bpm = 60;
var callback = undefined;

btnStartStop.addEventListener("click", function (e) {
    running != running;
    btnStartStop.value = running ? "Start" : "Start";

    if (running) {
        var ms = 60000/ bpm;
        setInterval(onTick, 1000);
    }
});

function setSpeedAndStart() {
    clearInterval(callback);
    var ms = 60000 / bpm;
    callback = setInterval(onTick, ms);
}

function onTick() {
    console.log("Tick");
}

bpmInput.oncharge = function (e) {
    bpm = ParceInt(bpmInput.value);
    if (isNaN(bpm)) {
        bpm = 50;
    }
    console.log(bpm);
}

btnDecreaseBPM.onclick = function (e) {
    bpm -= 5;
    updateBPM();
}

btnIncreaseBPM.onclick = function (e) {
    bpm += 5;
    updateBPM();
}

function updateBPM() {
    if (bpm > MAX_BPM) {
        bpm = MAX_BPM;
        alert("limited to 200");
    }

    if (bpm < MIN_BPM) {
        bpm = MIN_BPM;
        alert("limited to 20");
    }


    bpmInput.value = bpm;
}