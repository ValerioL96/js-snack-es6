SNACK 3

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

1) creo l'array con le carateristiche delle bici:

-  const bikeList = [
    {
        name: 'Atala',            
        weight:'78 kg'
    },
    {
        name: 'Basso',
        weight:'55 kg'
    },
    {
        name: 'Bianchi',
       weight:'48 kg'
    },
    {
        name: 'BOttecchia',
        weight:'74 kg'
    },
    {
        name: 'Brinke Bike',
        weight:'68 kg'
    },
    {
        name: 'Canellini',
        weight:'50 kg'
    },
    {
        name: 'Carrera',
        weight:'84 kg'
    }
   ];

2) creo una variabile vuota che avrà al suo interno la bici con peso minore:

- const lighterWeightBike = []

3) creo un ciclo forEach in cui  metto delle condizioni:

- bikeList.forEach((bike)=>{
        if(bike.weight >50){
    const {name, weight} = bikeList
        console.log(name,weight);

        }else{
            return bikeList
        }
    })
Stampare in console la bici con peso minore utilizzando destructuring e template literal