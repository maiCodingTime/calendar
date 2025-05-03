// Mai Vue Xiong
// Calendar Project

const calendarMonth = document.getElementById("calendarMonth");
const cells = document.querySelectorAll(".cell");

const date = new Date();
const currentYear = date.getFullYear();
const months = ["January", "Febuary", "March", "April", 
                "May", "June", "July", "August", 
                "September", "October", "November", "December"];
const daysOFWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", 
                    "Thursday", "Friday", "Saturday"];

/* calendarMonth.textContent = new Date(currentYear, date.getMonth() + 1, 0); */

setCalendar();

function setCalendar(){
    calendarMonth.textContent = months[date.getMonth()] + " " + currentYear;

    const numDays = (year, month) => new Date(year, month + 1, 0).getDate();
    const daysInMonth = numDays(currentYear, date.getMonth());
    let count = 1;
    
    cells.forEach(cell => {

        const firstDay = date.getDay();
        const cellIndex = cell.getAttribute("cellIndex");
        cells[cellIndex].textContent = firstDay;
        
        switch(firstDay){
            case 0:
                cells[cellIndex].textContent = count++;
                break;
            case 1:
                cells[cellIndex].textContent = count++;
                break;
            case 2:
                cells[cellIndex].textContent = count++;
                break;
            case 3:
                cells[cellIndex].textContent = count++;
                break;
            case 4:
                cells[cellIndex].textContent = count++;
                break;
            case 5:
                cells[cellIndex].textContent = count++;
                break;
            case 6:
                for(let i = 0; i < 6; i++){
                    
                    cells[i].textContent = "";
                }
                cells[cellIndex].textContent =  count++ - 4;
                break;
        }
    });

    selectDate(); 
}
function selectDate(){

    /* const firstDay = date.getDay(); */

}