class Tomagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
    this.age = 0;
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
  if(tomagotchiFactory.tomagotchis = []) {
  tomagotchiFactory.breedTomagotchi();
  tomagotchiFactory.tomagotchis[0].name = $('.name-box').val();
  $('.name-box').val('');
  $('#name-metric').text('Name: ' + tomagotchiFactory.tomagotchis[0].name);
  const isDead = () => {
    if(tomagotchiFactory.tomagotchis[0].hunger >= 10) {
      stopHunger();
      stopBoredom();
      stopSleepiness();
      stopAge();
      alert(tomagotchiFactory.tomagotchis[0].name + " has died of hunger.");
      delete tomagotchiFactory.tomagotchis[0];
      $('#name-metric').text("Name: ")
      $('#age-metric').text("Age: 0");
      $('#hunger-metric').text("Hunger: 0");
      $('#sleepiness-metric').text("Sleepiness: 0");
      $('#boredom-metric').text("Boredom: 0");
    } else if(tomagotchiFactory.tomagotchis[0].boredom >= 10) {
      stopHunger();
      stopBoredom();
      stopSleepiness();
      stopAge();
      alert(tomagotchiFactory.tomagotchis[0].name + " has died of boredom.");
      delete tomagotchiFactory.tomagotchis[0];
      $('#name-metric').text("Name: ")
      $('#age-metric').text("Age: 0");
      $('#hunger-metric').text("Hunger: 0");
      $('#sleepiness-metric').text("Sleepiness: 0");
      $('#boredom-metric').text("Boredom: 0");
    } else if(tomagotchiFactory.tomagotchis[0].sleepiness >= 10) {
      stopHunger();
      stopBoredom();
      stopSleepiness();
      stopAge();
      alert(tomagotchiFactory.tomagotchis[0].name + " has died of sleepiness.");
      delete tomagotchiFactory.tomagotchis[0];
      $('#name-metric').text("Name: ")
      $('#age-metric').text("Age: 0");
      $('#hunger-metric').text("Hunger: 0");
      $('#sleepiness-metric').text("Sleepiness: 0");
      $('#boredom-metric').text("Boredom: 0");
    } else if(tomagotchiFactory.tomagotchis[0].age >= 10) {
      stopHunger();
      stopBoredom();
      stopSleepiness();
      stopAge();
      alert(tomagotchiFactory.tomagotchis[0].name + " has died of old age.");
      delete tomagotchiFactory.tomagotchis[0];
      $('#name-metric').text("Name: ")
      $('#age-metric').text("Age: 0");
      $('#hunger-metric').text("Hunger: 0");
      $('#sleepiness-metric').text("Sleepiness: 0");
      $('#boredom-metric').text("Boredom: 0");
    }
  }

  //Interval code starts here

  const setHunger = () => {
    tomagotchiFactory.tomagotchis[0].hunger += 1;
    $('#hunger-metric').text('Hunger: ' + tomagotchiFactory.tomagotchis[0].hunger);
    isDead();
  }

  const hungerInterval = setInterval(setHunger, 4000);

  const stopHunger = () => {
    clearInterval(hungerInterval);
  }

  const setBoredom = () => {
    tomagotchiFactory.tomagotchis[0].boredom += 1;
    $('#boredom-metric').text('Boredom: ' + tomagotchiFactory.tomagotchis[0].boredom);
    isDead();
  }

  const boredomInterval = setInterval(setBoredom, 3000);

  const stopBoredom = () => {
    clearInterval(boredomInterval);
  }

  const setSleepiness = () => {
    tomagotchiFactory.tomagotchis[0].sleepiness += 1;
    $('#sleepiness-metric').text('Sleepiness: ' + tomagotchiFactory.tomagotchis[0].sleepiness);
    isDead();
  }

  const sleepinessInterval = setInterval(setSleepiness, 5000);

  const stopSleepiness = () => {
    clearInterval(sleepinessInterval);
  }

  const setAge = () => {
    tomagotchiFactory.tomagotchis[0].age += 1;
    $('#age-metric').text('age: ' + tomagotchiFactory.tomagotchis[0].age);
    isDead();
  }

  const ageInterval = setInterval(setAge, 6000);

  const stopAge = () => {
    clearInterval(ageInterval);
  }

  //Interval code ends here
  }
})

$('#feed-button').on('click', (e) => {
  tomagotchiFactory.tomagotchis[0].hunger -= 1;
  if(tomagotchiFactory.tomagotchis[0].hunger < 0) {
    tomagotchiFactory.tomagotchis[0].hunger = 0;
  }
  $('#hunger-metric').text('Hunger: ' + tomagotchiFactory.tomagotchis[0].hunger);
})

$('#play-button').on('click', (e) => {
  tomagotchiFactory.tomagotchis[0].boredom -= 1;
  if(tomagotchiFactory.tomagotchis[0].boredom < 0) {
    tomagotchiFactory.tomagotchis[0].boredom = 0;
  }
  $('#boredom-metric').text('Boredom: ' + tomagotchiFactory.tomagotchis[0].boredom);
})

$('#sleep-button').on('click', (e) => {
  tomagotchiFactory.tomagotchis[0].sleepiness -= 1;
  if(tomagotchiFactory.tomagotchis[0].sleepiness < 0) {
    tomagotchiFactory.tomagotchis[0].sleepiness = 0;
  }
  $('#sleepiness-metric').text('Sleepiness: ' + tomagotchiFactory.tomagotchis[0].sleepiness);
})

//At a certain time, it dies.
//Finally, animate the tomagotchi and finish styling the page.
//I will probably have to use clearinterval when the marmot dies
//I need the Marmot to die. How do I do this?
//For the marmot to die, the game needs to stop when a metric hits 10.
//I will have to remove the tomagotchi instantiation perhaps .remove()
//Can I put the death parameters in the object? If so, how?
//If a metric equals 10, the intervals are cleared, the tomagotchi is removed, the user is notified that their tomagotchi has died
