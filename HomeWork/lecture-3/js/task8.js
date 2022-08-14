const colors = {
    green: 'зеленый', 
    red: 'красный', 
    blue: 'голубой', 
    white: 'белый', 
    yellow: 'желтый'};
    
const arrayRus = [];
const arrayEng = [];

for (prop in colors) {
    arrayEng.push(prop);
    arrayRus.push(colors[prop]);
}

alert(`English colors: ${arrayEng.join(', ')}\nРусские цвета: ${arrayRus.join(', ')}`);
