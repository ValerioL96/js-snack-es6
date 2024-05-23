SNACK 1

Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:

1) Crero un array per gli invitati, denominata guestList;
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
  
   - const guestList = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

Ma  la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto letterale javascript che ha come proprietà:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),

2) all'interno dell' array creo dei oggetti letterali javascript con le specifiche di ochi invitato:

   - const guestList = [
    {
        tableName:'Tavolo Vip',
        guestName:'Brad Pitt',
        place:'0'
        
    },
    {
        tableName:'Tavolo Vip',
        guestName:'Johnny Depp',
        place:'1'
        
    },
    {
        tableName:'Tavolo Vip',
        guestName:'Lady Gaga',
        place:'2'
        
    },
    {
        tableName:'Tavolo Vip',
        guestName:'Cristiano Ronaldo',
        place:'3'
        
    },
    {
        tableName:'Tavolo Vip',
        guestName:'Georgina Rodriguez',
        place:'4'
        
    },
    {
        tableName:'Tavolo Vip',
        guestName:'Chiara Ferragni',
        place:'5'
        
    },
    {
        tableName:'Tavolo Vip',
        guestName:'George Clooney',
        place:'6'
        
    },
    {
        tableName:'Tavolo Vip',
        guestName:'Amal Clooney',
        place:'7'
        
    },
    {
        tableName:'Tavolo Vip',
        guestName:'Fedez',
        place:'8'
        
    },
    {
        tableName:'Tavolo Vip',
        guestName:'Amadeus',
        place:'9'
        
    },
    {
        tableName:'Tavolo Vip',
        guestName:'Fiorello',
        place:'10'
        
    }
   ]

Generiamo e stampiamo in console la lista per i segnaposto

3) creo un ciclo foEach per stampare in console ogni elemento dei posti;

    - array.forEach((element)=>{
        console.log(element)
    })