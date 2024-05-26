SNACK 2

Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1) creo con array in cui all'interno avrò degli oggetti letterali che avranno le informazioni di ogni studente:

   - const class = [
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


*  Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo, ad esempio (Marco della Rovere => MARCO DELLA ROVERE);

2) creo una lista nuova di alunni in cui avrò un map che mi stamperà il nome in maiuscolo:

   - const newClass = class.map((student)=>{
    return '${student.name.toUpperCase()}';
   });



* Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
* Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

3) creo due array vuoti :

   - const studentsA = [];
   - const studentsB = [];

4) creo un ciclo forEach in cui  metto delle condizioni:

    - class.forEach((student)=>{
        if(student.grades>70){
    
        return studentsA;
        }else(student.grades>70 && student.Id>120){
            return studentsB
        }
    })
