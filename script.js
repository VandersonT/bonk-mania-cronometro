document.addEventListener('DOMContentLoaded', function () {
    let startDate = new Date('2023-11-26');
    startDate.setDate(startDate.getDate() + 6);

    function updateCountdown() {
        const currentDate = new Date();
        const difference = startDate - currentDate;

        if (difference >= 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            const countdownElement = document.getElementById('countdown');
            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            const countdownElement = document.getElementById('countdown');
            countdownElement.innerHTML = 'No ar em breve...';
        }
    }

    setInterval(updateCountdown, 1000);

    updateCountdown();
});
