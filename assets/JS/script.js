const hours = document.querySelector('#horas');
const min = document.querySelector('#minutos');
const sec = document.querySelector('#segundos');
const date = document.querySelector('.date');
const dayweek = document.querySelector('.day-week');

const clock = setInterval(function time(){
    let dateToday = new Date();
    let h = dateToday.getHours();
    let m = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let dayWeek = dateToday.getDay();
    let day = dateToday.getDate();
    let Month = dateToday.getMonth() + 1;
    let year = dateToday.getFullYear();

    function formatDate() {
        switch (dayWeek) {
            case 0:
                dayWeekText = 'Domingo';
                break;
            case 1:
                dayWeekText = 'Segunda';
                break;
            case 2:
                dayWeekText = 'Terça';
                break;
            case 3:
                dayWeekText = 'Quarta';
                break;
            case 4:
                dayWeekText = 'Quinta';
                break;
            case 5:
                dayWeekText = 'Sexta';
                break;
            case 6:
                dayWeekText = 'Sábado'
                break;
            default:
                dayWeekText = '';
        }

        switch (Month) {
            
            case 1:
                monthText = 'Janeiro';
                break;
            case 2:
                monthText = 'Fevereiro';
                break;
            case 3:
                monthText = 'Março';
                break;
            case 4:
                monthText = 'Abril';
                break;
            case 5:
                monthText = 'Maio';
                break;
            case 6:
                monthText = 'Junho';
                break;
            case 7:
                monthText = 'Julho';
                break;
            case 8:
                monthText = 'Agosto';
                break;
            case 9:
                monthText = 'Setembro';
            case 10:
                monthText = 'Outubro';
                break;
            case 11:
                monthText = 'Novembro'
                break;
            case 12:
                monthText = 'Dezembro'
                break;
            default:
                monthText = '';
        }

        return `${day} de ${monthText} de ${year}`;
    }

    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    
    hours.textContent = h;
    min.textContent = m;
    sec.textContent = s;
    date.textContent = formatDate();
    dayweek.textContent =  dayWeekText;


});

