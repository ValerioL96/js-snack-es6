//1) creo un array per le squadre con i nomi, punti fatti e falli subiti:

 const footballTeams =[
    {
        name:'Tortuga',
        points:'0',
        foulsImmediately: '0',
    },
      {
        name:'Babbagià',
        points:'0',
        foulsImmediately: '0',
    },
      {
        name:'Milanto',
        points:'0',
        foulsImmediately: '0',
    },
      {
        name:'Romanello',
        points:'0',
        foulsImmediately: '0',
    },
      {
        name:'Napulegno',
        points:'0',
        foulsImmediately: '0',
    },
      {
        name:'Vermouth',
        points:'0',
        foulsImmediately: '0',
    },
]

//Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

//2) genero numeri randomici:

 const randomNumber= Math.floor(Math.random()*10)+1;
