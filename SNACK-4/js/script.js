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


 //3) creo un ciclo forEach con delle condizioni:

 footballTeams.forEach( (team) => {
    if(randomNumber > 0){
        points.push(team);
        foulsImmediately.push(team);
    }else{
        return ''
    }
   console.log(footballTeams);
});

//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

 const {name, foulsImmediately} = footballTeams

  console.log(name,foulsImmediately);