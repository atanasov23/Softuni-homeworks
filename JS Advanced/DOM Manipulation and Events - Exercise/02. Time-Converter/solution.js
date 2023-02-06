function attachEventsListeners() {

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    let day = document.getElementById('days');
    let hour = document.getElementById('hours');
    let minute = document.getElementById('minutes');
    let second2 = document.getElementById('seconds');

    daysBtn.addEventListener('click', function () {

        let getValue = Number(this.previousElementSibling.value);

        let hours = getValue * 24;
        let minutes = hours * 60;
        let second = minutes * 60;

        hour.value = hours;
        minute.value = minutes;
        second2.value = second;

    });

    hoursBtn.addEventListener('click', function () {

        let getValue = Number(this.previousElementSibling.value);

        let days = getValue / 24;
        let minutes = getValue * 60;
        let second = minutes * 60;

        day.value = days;
        minute.value = minutes;
        second2.value = second

    });

    minutesBtn.addEventListener('click', function () {

        let getValue = Number(this.previousElementSibling.value);

        let days = (getValue / 60) / 24;
        let hours = getValue / 60;
        let second = getValue * 60;

        day.value = days;
        hour.value = hours;
        second2.value = second

    });

    secondsBtn.addEventListener('click', function () {

        let value = Number(this.previousElementSibling.value);

        let days = ((value / 60) / 60) / 24;
        let hours = (value / 60) / 60;
        let minutes = value / 60;

        day.value = days;
        hour.value = hours;
        minute.value = minutes

    });
}