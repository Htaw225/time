function updateColck(){

    const now = new Date();

    const dateOption = {
        weekday: 'short', day: 'numeric',month: 'short',year: 'numeric'
    };

    const timeOption = {
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    };

    document.getElementById('date').textContent = now.toLocaleDateString('th-TH', dateOption)
    document.getElementById('clock').textContent = now.toLocaleTimeString('th-TH', timeOption)

}

setInterval(updateColck, 1000);
updateColck();