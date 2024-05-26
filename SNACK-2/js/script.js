//1) creo con array in cui all'interno avrò degli oggetti letterali che avranno le informazioni di ogni studente:

 const classList = [
    {
        Id: '213',
        name: 'Giusseppina della Rovere',            
        grades:'78'
    },
    {
        Id: '110',
        name: 'Paola Cortellessa',
        grades:'96'
    },
    {
        Id: '250',
        name: 'Andrea Mantgna',
        grades:'48'
    },
    {
        Id: '145',
        name: 'Gaia Borromini',
        grades:'74'
    },
    {
        Id: '196',
        name: 'Luigi Grimaldello',
        grades:'68'
    },
    {
        Id: '102',
        name: 'Piero della Francesca',
        grades:'50'
    },
    {
        Id: '120',
        name: 'Francesca da Polenta',
        grades:'84'
    }
   ];

   console.log(classList);

//2) creo una lista nuova di alunni in cui avrò un map che mi stamperà il nome in maiuscolo:

 const newClass = classList.map((student)=>{
    return '${student.name.toUpperCase()}';
   });