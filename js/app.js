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
  $('#marmotGIF').css({'transform':'scaleX(1)'});
  $('#marmotGIF').animate({
    marginLeft: "+=80%",
  }, 20000, moveAgain);
}

const moveAgain = () => {
  $('#marmotGIF').css({'transform':'scaleX(-1)'});
  $('#marmotGIF').animate({
    marginLeft: "-=80%",
  }, 20000, moveMarmot);
}

$('#name-button').on('click', (e) => {
  if(tomagotchiFactory.tomagotchis = []) {
  tomagotchiFactory.breedTomagotchi();
  tomagotchiFactory.tomagotchis[0].name = $('.name-box').val();
  $('.name-box').val('');
  $('#name-table').css({'visibility':'collapse'});
  $('.actions').css({'visibility': 'visible'});
  $('#name-metric').text('Name: ' + tomagotchiFactory.tomagotchis[0].name);
  $('#marmotGIF').css({'visibility':'visible'});
  moveMarmot();
  const isDead = () => {
    if(tomagotchiFactory.tomagotchis[0].age >= 8) {
      $('#marmotGIF').attr('src', 'css/images/marmotGray.gif');
    }
    if(tomagotchiFactory.tomagotchis[0].hunger >= 10) {
      stopHunger();
      stopBoredom();
      stopSleepiness();
      stopAge();
      alert(tomagotchiFactory.tomagotchis[0].name + " has died of hunger.");
      $('#marmotGIF').css({"visibility":"hidden"});
      $('#marmotGIF').attr('src', 'css/images/marmot.gif');
      delete tomagotchiFactory.tomagotchis[0];
      $('#name-metric').text("Name: ")
      $('#age-metric').text("Age: 0");
      $('#hunger-metric').text("Hunger: 0");
      $('#sleepiness-metric').text("Sleepiness: 0");
      $('#boredom-metric').text("Boredom: 0");
      $('.actions').css({'visibility': 'collapse'});
      $('#name-table').css({'visibility':'visible'});
      $('#marmotGIF').stop();
      $('#marmotGIF').css({'marginLeft':'0%'});
      $('#marmotGIF').css({'transform':'scaleX(1)'});
    } else if(tomagotchiFactory.tomagotchis[0].boredom >= 10) {
      stopHunger();
      stopBoredom();
      stopSleepiness();
      stopAge();
      alert(tomagotchiFactory.tomagotchis[0].name + " has died of boredom.");
      $('#marmotGIF').css({"visibility":"hidden"});
      $('#marmotGIF').attr('src', 'css/images/marmot.gif');
      delete tomagotchiFactory.tomagotchis[0];
      $('#name-metric').text("Name: ")
      $('#age-metric').text("Age: 0");
      $('#hunger-metric').text("Hunger: 0");
      $('#sleepiness-metric').text("Sleepiness: 0");
      $('#boredom-metric').text("Boredom: 0");
      $('.actions').css({'visibility': 'collapse'});
      $('#name-table').css({'visibility':'visible'});
      $('#marmotGIF').stop();
      $('#marmotGIF').css({'marginLeft':'0%'});
      $('#marmotGIF').css({'transform':'scaleX(1)'});
    } else if(tomagotchiFactory.tomagotchis[0].sleepiness >= 10) {
      stopHunger();
      stopBoredom();
      stopSleepiness();
      stopAge();
      alert(tomagotchiFactory.tomagotchis[0].name + " has died of sleepiness.");
      $('#marmotGIF').css({"visibility":"hidden"});
      $('#marmotGIF').attr('src', 'css/images/marmot.gif');
      delete tomagotchiFactory.tomagotchis[0];
      $('#name-metric').text("Name: ")
      $('#age-metric').text("Age: 0");
      $('#hunger-metric').text("Hunger: 0");
      $('#sleepiness-metric').text("Sleepiness: 0");
      $('#boredom-metric').text("Boredom: 0");
      $('.actions').css({'visibility': 'collapse'});
      $('#name-table').css({'visibility':'visible'});
      $('#marmotGIF').stop();
      $('#marmotGIF').css({'marginLeft':'0%'});
      $('#marmotGIF').css({'transform':'scaleX(1)'});
    } else if(tomagotchiFactory.tomagotchis[0].age >= 10) {
      stopHunger();
      stopBoredom();
      stopSleepiness();
      stopAge();
      alert(tomagotchiFactory.tomagotchis[0].name + " has died of old age.");
      $('#marmotGIF').css({"visibility":"hidden"});
      $('#marmotGIF').attr('src', 'css/images/marmot.gif');
      delete tomagotchiFactory.tomagotchis[0];
      $('#name-metric').text("Name: ")
      $('#age-metric').text("Age: 0");
      $('#hunger-metric').text("Hunger: 0");
      $('#sleepiness-metric').text("Sleepiness: 0");
      $('#boredom-metric').text("Boredom: 0");
      $('.actions').css({'visibility': 'collapse'});
      $('#name-table').css({'visibility':'visible'});
      $('#marmotGIF').stop();
      $('#marmotGIF').css({'marginLeft':'0%'});
      $('#marmotGIF').css({'transform':'scaleX(1)'});
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
  $('.night').css({"background-color":"rgba(0, 0, 0, 0.5)"});
  setTimeout(function() {$('.night').css({"background-color":"rgba(0, 0, 0, 0)"})}, 2000);
  if(tomagotchiFactory.tomagotchis[0].sleepiness < 0) {
    tomagotchiFactory.tomagotchis[0].sleepiness = 0;
  }
  $('#sleepiness-metric').text('Sleepiness: ' + tomagotchiFactory.tomagotchis[0].sleepiness);
})

//To stop the bugs, I need to stop input from the name button during play. I also need to prevent input from the action buttons before and after play. Then I need to check the gray Marmot dimensions to make sure it matches live marmot.
//I could hide the input form and button during play. I could hide the action buttons before and after play.
