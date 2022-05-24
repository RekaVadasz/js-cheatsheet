//------------Dátumok, napok, hónapok-------------
const currentDate = "2022-01-18 4:32";

// A stringet Date objektummá kell alakítanunk, így alkalmazhatunk rá metódusokat. A Date objektum megadott formátumok alapján alkotható meg

const d = new Date(2022, 05, 18);
let day = d.getDay();

console.log(day) // 6 (szombat)!! napok: 0-tól indexelődnek: 0 = vasárnap, 6 = szombat */

const localDate = function(localTime){
    const year = parseInt(localTime.substring(0, 4)); //parseInt:  számmá alakítja a stringet
    const month = parseInt(localTime.substring(5, 7));
    const day = parseInt(localTime.substring(8, 10));
    const date = new Date(`${year}, ${month}, ${day}`);
    const weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const dayOfTheWeek = weekDays[date.getDay()];
    const monthOfYear = 
        ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return `${dayOfTheWeek}, ${day} ${monthOfYear[month-1]} ${year}` //hónapok tömb 0-tól indexelődik
}

console.log(localDate(currentDate))

