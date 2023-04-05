const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get courses() {
      return{
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    get appetizers(){
      return this._courses.appetizers;
    },
    set appetizers(appetizerIn) {
      this._courses.appetizers =appetizerIn;
    },
    get mains(){
      return this._courses.main;
    },
    set mains(mainIn) {
      this._courses.mains =mainIn;
    },
    get desserts(){
      return this._courses.desserts;
    },
    set desserts(dessertIn) {
      this._courses.desserts =dessertIn;
    },
    addDishToCourse (courseName, dishName, dishPrice) {
       const dish = {
         name: dishName,
         price: dishPrice
       };
       this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse: function(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
  
    },
    generateRandomMeal: function() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + mains.price + desserts.price;
      return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.price}. The total price is ${totalPrice}`;
    }
  }
  
  menu.addDishToCourse('appetizers','a1', 1);
  menu.addDishToCourse('appetizers','a2', 2);
  menu.addDishToCourse('appetizers','a3', 3);
  menu.addDishToCourse('mains','m1', 4);
  menu.addDishToCourse('mains','m2', 5);
  menu.addDishToCourse('mains','m3', 6);
  menu.addDishToCourse('desserts','d1', 7);
  menu.addDishToCourse('desserts','d2', 8);
  menu.addDishToCourse('desserts','d3', 9);
  let meal = menu.generateRandomMeal();
  console.log(meal);