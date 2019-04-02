class Tomagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
    this.age = 0;
  }
  isDead() {
    if(this.hunger >= 10) {
      console.log(this.name + " has died of hunger.");
    } else if(this.boredom >= 10) {
      console.log(this.name + " has died of boredom.");
    } else if(this.sleepiness >= 10) {
      console.log(this.name + ' has died of sleepiness.');
    } else if(this.age >= 10) {
      console.log(this.name + " has died of old age.");
    }
  }
}

const tomagotchiFactory = {
  tomagotchis: [],
  breedTomagotchi(name) {
    const newTomagotchi = new Tomagotchi(name);
    this.tomagotchis.push(newTomagotchi);
    return newTomagotchi;
  },
  findTomagotchi(index) {
    console.log(this.tomagotchis[index]);
  }
}

$('#name-button').on('click', (e) => {
  tomagotchiFactory.breedTomagotchi();
  tomagotchiFactory.tomagotchis[0].name = $('.name-box').val();
  console.log(tomagotchiFactory.tomagotchis[0]);
  $('.name-box').val('');
  $('#name-metric').text('Name: ' + tomagotchiFactory.tomagotchis[0].name);
  setInterval(function() {
    tomagotchiFactory.tomagotchis[0].hunger += 1;
    $('#hunger-metric').text('Hunger: ' + tomagotchiFactory.tomagotchis[0].hunger);
  }, 4000);
  setInterval(function() {
    tomagotchiFactory.tomagotchis[0].boredom += 1;
    $('#boredom-metric').text('Boredom: ' + tomagotchiFactory.tomagotchis[0].boredom);
  }, 3000);
  setInterval(function() {
    tomagotchiFactory.tomagotchis[0].sleepiness += 1;
    $('#sleepiness-metric').text('Sleepiness: ' + tomagotchiFactory.tomagotchis[0].sleepiness);
  }, 5000);
  setInterval(function() {
    tomagotchiFactory.tomagotchis[0].age += 1;
    $('#age-metric').text('age: ' + tomagotchiFactory.tomagotchis[0].age);
  }, 6000);
})

//I will probably have to use clearinterval when the marmot dies

$('#feed-button').on('click', (e) => {
  tomagotchiFactory.tomagotchis[0].hunger -= 1;
  $('#hunger-metric').text('Hunger: ' + tomagotchiFactory.tomagotchis[0].hunger);
})

$('#play-button').on('click', (e) => {
  tomagotchiFactory.tomagotchis[0].boredom -= 1;
  $('#boredom-metric').text('Boredom: ' + tomagotchiFactory.tomagotchis[0].boredom);
})

$('#sleep-button').on('click', (e) => {
  tomagotchiFactory.tomagotchis[0].sleepiness -= 1;
  $('#sleepiness-metric').text('Sleepiness: ' + tomagotchiFactory.tomagotchis[0].sleepiness);
})

//Once the tomagotchi is instantiated, the timer starts.
//The metrics change as the time increases.\
//Pushing the buttons changes the metrics.
//The metrics change the tomagotchi: it gets older and changes as it does. It can also die.
//At a certain time, it dies.
//Finally, animate the tomagotchi and finish styling the page.
/**
tomagotchiFactory.breedTomagotchi("Curlin");
console.log(tomagotchiFactory.findTomagotchi(0));
$('body').append(tomagotchiFactory.tomagotchis[0])
**/
