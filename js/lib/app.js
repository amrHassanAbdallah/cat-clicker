var initialData = [
  {
    clickCount: 0,
    name: "Sleepy",
    imgSrc: "img/2.jpeg",
    imgAttr: "img/2.jpeg",
    nickNames: ["zzzzz", "snoozy"]
  },
  {

    clickCount: 0,
    name: "Buss",
    imgSrc: "img/cute.jpeg",
    imgAttr: "img/2.jpeg",
    nickNames: ["Cuty"]
  },
  {

    clickCount: 0,
    name: "Dumpy",
    imgSrc: "img/dump.jpeg",
    imgAttr: "img/2.jpeg",
    nickNames: ["blah blah"]
  }
];


var Cat = function(data){
  var levels = ["R", "M", "S"];
  this.nickNames = data.nickNames;
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttr = ko.observable(data.imgAttr);

  this.level = ko.computed(function() {
    var position = 0;
    if (this.clickCount() < 20 && this.clickCount() > 10) {
      position = 1;
    } else if (this.clickCount() > 20) {
      position = 2;
    }
    return levels[position];
  }, this);
}

var ViewModel = function(){
    var self = this;
    this.catList = ko.observableArray([]);
    initialData.forEach((catItem)=>{
        self.catList.push(new Cat(catItem));
    });
    //this.currentPosition = ko.observable(1);
    this.currentCat = ko.observable(self.catList()[0]);

      this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
      };

      this.nextCat = (theOtherCat)=>{

          self.currentCat(theOtherCat);
      }

}

ko.applyBindings(new ViewModel());