//1) Crero un array per gli invitati, denominata guestList;
//[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
  
//2) all'interno dell' array creo dei oggetti letterali javascript con le specifiche di ochi invitato:

 const guestList = [
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
   ];

   console.log(guestList);

   //3) creo un ciclo foEach per stampare in console ogni elemento dei posti;

     guestList.forEach((element)=>{
        
        console.log(element.tableName);
        console.log(element.guestName);
        console.log(element.place);
        console.log('');
    })

   