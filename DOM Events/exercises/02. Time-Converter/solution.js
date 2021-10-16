function attachEventsListeners() {
    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    function convert(value, unit) {
        const inputInDays = value / ratios[unit];
        return {
            days: inputInDays,
            hours: inputInDays * ratios.hours,
            minutes: inputInDays * ratios.minutes,
            seconds: inputInDays * ratios.seconds,
        }
    }
    
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    
    // adding EventListener to the 'main' element
    document.querySelector('main').addEventListener('click', onClick);

    function onClick(ev) {
        // delegating the target
        if (ev.target.tagName == 'INPUT' && ev.target.type == 'button') {

            const input = ev.target.parentElement.querySelector('input[type="text"]');
            
            const results = convert(Number(input.value), input.id);
            
            days.value = results.days;
            hours.value = results.hours;
            minutes.value = results['minutes'];
            seconds.value = results['seconds'];
        }
    }
}