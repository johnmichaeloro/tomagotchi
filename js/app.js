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


const moveMarmot = () => {
  for (let i = 0; i < 50; i++) {
    if(i <= 10) {
      $('#marmotGIF').animate({
        marginTop: "+=20px",
        marginLeft: "+=10px",
      }, 1000);
    } else if(i > 10 && i <= 20) {
      $('#marmotGIF').animate({
        marginTop: "+=10px",
        marginLeft: "+=40px",
      }, 1000);
    } else if(i > 20 && i <= 30) {
      $('#marmotGIF').animate({
        marginTop: "-=15px",
        marginLeft: "-=50px",
      }, 1000);
    } else if(i > 30 && i <= 40) {
      $('#marmotGIF').animate({
        marginBottom: "-=15px",
        marginRight: "-=30px",
      }, 1000);
    } else if(i > 40 && i < 50) {
      $('#marmotGIF').animate({
        marginTop: "-=5px",
        marginLeft: "-=25px",
      }, 1000);
    }
    }
  }

//Add functionality so that a name cannot be entered during play

$('#name-button').on('click', (e) => {
  if(tomagotchiFactory.tomagotchis = []) {
  tomagotchiFactory.breedTomagotchi();
  tomagotchiFactory.tomagotchis[0].name = $('.name-box').val();
  $('.name-box').val('');
  $('#name-metric').text('Name: ' + tomagotchiFactory.tomagotchis[0].name);
  moveMarmot();
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

//Create div that spans browser window (100% on both height and width)
//Make position absolute
//Set marmot gif in new div
//Finish styling page
//Animate marmot: movement, morphing, and death
