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
