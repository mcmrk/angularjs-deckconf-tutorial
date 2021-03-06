/********************************************/
// file:app.js
// angularJS DeckConfigurator [RELEASE]0.0.1
// 
/********************************************/


var myApp = angular.module('PartA',['ngSanitize']);
myApp.controller('DeckConfiguratorCtrl', ['$window','$scope', function($window,$scope) {

$scope.saved = localStorage.getItem('items');

$scope.modalShown = false;

/*CARDS DATABASE*/
$scope.items = ($scope.saved !== null) ? JSON.parse($scope.saved) : [

{
	
	"Image" : "http://magiccards.info/scans/en/c14/146.jpg",
	"Name" : "Gray Merchant of Asphodel",
	"Type" : "Creature-Zombie",
	"MC" : "5",
	"Color" : "Black",
	"Price" : 0.94,
	"id" : 1,
	"Quantity" : "4"
},
{
	
	"Image" : "http://magiccards.info/scans/en/rtr/63.jpg",
	"Name" : "Desecration Demon",
	"Type" : "Creature-Demon",
	"MC" : "4",
	"Color" : "Black",
	"Price" : 6.75,
	"id" : 2,
	"Quantity" : "3"
},
{
	
	"Image" : "http://magiccards.info/scans/en/gtc/218.jpg",
	"Name" : "Deathcult Rogue",
	"Type" : "Creature-Human Rogue",
	"MC" : "3",
	"Color" : "Black",
	"Price" : 0.70,
	"id" : 3,
	"Quantity" : "2"
},
{
	
	"Image" : "http://magiccards.info/scans/en/dka/63.jpg",
	"Name" : "Geralf's Messenger",
	"Type" : "Creature-Zombie",
	"MC" : "3",
	"Color" : "Black",
	"Price" : 7.78,
	"id" : 4,
	"Quantity" : "2"
},
{
	
	"Image" : "http://magiccards.info/scans/en/m15/134.jpg",
	"Name" : "Chandra, Pyromaster",
	"Type" : "Planeswalker",
	"MC" : "4",
	"Color" : "Red",
	"Price" : 12.00,
	"id" : 5,
	"Quantity" : "1"
},
{
	
	"Image" : "http://magiccards.info/scans/en/nph/61.jpg",
	"Name" : "Geth's Verdict",
	"Type" : "Sorcery",
	"MC" : "2",
	"Color" : "Black",
	"Price" : 2.10,
	"id" : 6,
	"Quantity" : "2"
},
{
	
	"Image" : "http://magiccards.info/scans/en/clash/8.jpg",
	"Name" : "Hero's Downfall",
	"Type" : "Instant",
	"MC" : "3",
	"Color" : "Black",
	"Price" : 5.59,
	"id" : 7,
	"Quantity" : "4"
},
{
	
	"Image" : "http://magiccards.info/scans/en/rtr/73.jpg",
	"Name" : "Pack Rat",
	"Type" : "Creature-Rat",
	"MC" : "2",
	"Color" : "Black",
	"Price" : 4.75,
	"id" : 8,
	"Quantity" : "4"
},
{
	
	"Image" : "http://magiccards.info/scans/en/ddadvd/46.jpg",
	"Name" : "Duress",
	"Type" : "Sorcery",
	"MC" : "1",
	"Color" : "Black",
	"Price" : 0.75,
	"id" : 9,
	"Quantity" : "3"
},
{
	"Image" : "http://magiccards.info/scans/en/md1/15.jpg",
	"Name" : "City of Brass",
	"Type" : "Land",
	"MC" : "0",
	"Color" : "White",
	"Price" : 4.98,
	"id" : 10,
	"Quantity" : "1"
	
},
{
	"Image" : "http://magiccards.info/scans/en/rtr/101.jpg",
	"Name" : "Mizzium Mortars",
	"Type" : "Sorcery",
	"MC" : "2",
	"Color" : "Red",
	"Price" : 2.35,
	"id" : 11,
	"Quantity" : "1"
	
},
{
	"Image" : "http://magiccards.info/scans/en/ddm/73.jpg",
	"Name" : "Underworld Connections",
	"Type" : "Enchantment",
	"MC" : "3",
	"Color" : "Black",
	"Price" : 2.30,
	"id" : 12,
	"Quantity" : "4"
	
},
{
	"Image" : "http://magiccards.info/scans/en/dtk/124.jpg",
	"Name" : "Ultimate Price",
	"Type" : "Instant",
	"MC" : "2",
	"Color" : "Black",
	"Price" : 1.75,
	"id" : 13,
	"Quantity" : "2"
	
},
{
	"Image" : "http://magiccards.info/scans/en/9e/118.jpg",
	"Name" : "Coercion",
	"Type" : "Sorcery",
	"MC" : "3",
	"Color" : "Black",
	"Price" : 0.75,
	"id" : 14,
	"Quantity" : "2"
},
{
	"Image" : "http://magiccards.info/scans/en/ktk/69.jpg",
	"Name" : "Despise",
	"Type" : "Sorcery",
	"MC" : "1",
	"Color" : "Black",
	"Price" : 1.09,
	"id" : 15,
	"Quantity" : "2"
},
{
	"Image" : "http://magiccards.info/scans/en/rtr/188.jpg",
	"Name" : "Rakdos's Return",
	"Type" : "Sorcery",
	"MC" : "2",
	"Color" : "Multi",
	"Price" : 6.00,
	"id" : 16,
	"Quantity" : "3"
},

{
	"Image" : "http://magiccards.info/scans/en/m13/222.jpg",
	"Name" : "Dragonskull Summit",
	"Type" : "Land",
	"MC" : "0",
	"Color" : "Multi",
	"Price" : 6.13,
	"id" : 17,
	"Quantity" : "4"
},

{
	"Image" : "http://magiccards.info/scans/en/wwk/139.jpg",
	"Name" : "Lavaclaw Reaches",
	"Type" : "Land",
	"MC" : "0",
	"Color" : "Multi",
	"Price" : 4.00,
	"id" : 18,
	"Quantity" : "3"
},

{
	"Image" : "http://magiccards.info/scans/en/bng/164.jpg",
	"Name" : "Temple of Malice",
	"Type" : "Land",
	"MC" : "0",
	"Color" : "Multi",
	"Price" : 7.75,
	"id" : 19,
	"Quantity" : "4"
},

{
	"Image" : "http://magiccards.info/scans/en/ths/85.jpg",
	"Name" : "Erebos, God of the Dead",
	"Type" : "Legendary Enchantment Creature-God",
	"MC" : "4",
	"Color" : "Black",
	"Price" : 10.00,
	"id" : 20,
	"Quantity" : "1"
},
{
	"Image" : "http://magiccards.info/scans/en/cs/153.jpg",
	"Name" : "Snow-Covered Swamp",
	"Type" : "Land",
	"MC" : "0",
	"Color" : "Black",
	"Price" : 1.98,
	"id" : 21,
	"Quantity" : "11"
},
{
	"Image" : "http://magiccards.info/scans/en/m14/101.jpg",
	"Name" : "Lifebane Zombie",
	"Type" : "Creature-Zombie Warrior",
	"MC" : "3",
	"Color" : "Black",
	"Price" : 4.30,
	"id" : 22,
	"Quantity" : "3"
},
{
	"Image" : "http://magiccards.info/scans/en/jou/164.jpg",
	"Name" : "Temple of Epiphany",
	"Type" : "Land",
	"MC" : "0",
	"Color" : "Multi",
	"Price" : 14.45,
	"id" : 23,
	"Quantity" : "1"
},
{
	"Image" : "http://magiccards.info/scans/en/ddajvc/57.jpg",
	"Name" : "Demonfire",
	"Type" : "Sorcery",
	"MC" : "1",
	"Color" : "Red",
	"Price" : 1.25,
	"id" : 24,
	"Quantity" : "1"
},
{
	"Image" : "http://magiccards.info/scans/en/ths/110.jpg",
	"Name" : "Whip of Erebos",
	"Type" : "Legendary Enchantment Artifact",
	"MC" : "4",
	"Color" : "Black",
	"Price" : 5.25,
	"id" : 25,
	"Quantity" : "1"
},
{
	"Image" : "http://magiccards.info/scans/en/dgm/104.jpg",
	"Name" : "Sire of Insanity",
	"Type" : "Creature-Demon",
	"MC" : "6",
	"Color" : "Multi",
	"Price" : 1.25,
	"id" : 26,
	"Quantity" : "1"
},
{
	"Image" : "http://magiccards.info/scans/en/in/102.jpg",
	"Name" : "Do or Die",
	"Type" : "Sorcery",
	"MC" : "2",
	"Color" : "Black",
	"Price" : 2.94,
	"id" : 27,
	"Quantity" : "1"
},
{
	"Image" : "http://magiccards.info/scans/en/rtr/238.jpg",
	"Name" : "Blood Crypt",
	"Type" : "Land",
	"MC" : "0",
	"Color" : "Multi",
	"Price" : 12.00,
	"id" : 28,
	"Quantity" : "1"
},
{
	"Image" : "http://magiccards.info/scans/en/c13/249.jpg",
	"Name" : "Nihil Spellbomb",
	"Type" : "Artifact",
	"MC" : "1",
	"Color" : "Colorless",
	"Price" : 0.94,
	"id" : 29,
	"Quantity" : "1"
},
{
	"Image" : "http://magiccards.info/scans/en/ths/124.jpg",
	"Name" : "Hammer of Purphoros",
	"Type" : "Legendary Enchantment Artifact",
	"MC" : "3",
	"Color" : "Red",
	"Price" : 1.50,
	"id" : 30,
	"Quantity" : "1"
},
{
	"Image" : "http://magiccards.info/scans/en/jou/103.jpg",
	"Name" : "Magma Spray",
	"Type" : "Instant",
	"MC" : "1",
	"Color" : "Red",
	"Price" : 0.75,
	"id" : 31,
	"Quantity" : "1"
}

];

$scope.counter = 0;

//CHECKBOX FOR BASIC LAND
$scope.checkboxModel = {
       
       value2 : 4
     };

//SAVE RECORDS FUNC
var localSet = function() {
                         localStorage.setItem('items', JSON.stringify($scope.items));
                };


$scope.addItem = function(item) {

 $scope.items.push(item);
 $scope.item = {};
 localSet();
};
  
localSet();
  
$scope.totalPrice = function(){
			
var total = 0;
 for(count=0;count<$scope.items.length;count++){
    total += $scope.items[count].Price*$scope.items[count].Quantity;
 }
return total;
localSet();                       
};

//*******FIRST CHART: TYPE*********************
                
$scope.totalCreature = function(){

var totalCreature = 0;
 for(count=0;count<$scope.items.length;count++){
    var string=$scope.items[count].Type;
    if(angular.equals(string.substring(0,4),'Crea') || angular.equals(string.substring(0,4),'crea')) {
      string=string.substring(0,8);
      if(angular.equals(string,"Creature") || angular.equals(string,"creature")){
        totalCreature+=1*$scope.items[count].Quantity;
      }
    }
 }
return totalCreature;
localSet();                    
};


$scope.totalLegendary = function(){
			
var totalCG = 0;
 for(count=0;count<$scope.items.length;count++){
    if(angular.equals($scope.items[count].Type,"Legendary Enchantment Creature-God") || angular.equals($scope.items[count].Type,"legendary enchantment creature-god")|| angular.equals($scope.items[count].Type,"Legendary Creature") || angular.equals($scope.items[count].Type,"legendary creature") || angular.equals($scope.items[count].Type,"Legendary Enchantment Artifact") || angular.equals($scope.items[count].Type,"legendary enchantment artifact") || angular.equals($scope.items[count].Type,"Legendary Land") || angular.equals($scope.items[count].Type,"legendary land")){
      totalCG+=1*$scope.items[count].Quantity;
    }
 }
return totalCG;
localSet();                       
};

$scope.totalInstant = function(){

var totalInstant = 0;
 for(count=0;count<$scope.items.length;count++){
    if(angular.equals($scope.items[count].Type,"Instant") || angular.equals($scope.items[count].Type,"instant")){
      totalInstant+=1*$scope.items[count].Quantity;
    }
 }
return totalInstant;
localSet();                       
};

$scope.totalEnchantment = function(){
			
var totalEnchantment = 0;
 for(count=0;count<$scope.items.length;count++){
    if(angular.equals($scope.items[count].Type,"Enchantment") || angular.equals($scope.items[count].Type,"enchantment")){
      totalEnchantment+=1*$scope.items[count].Quantity;
    }
 }
return totalEnchantment;
localSet();                        
};

$scope.totalSorcery = function(){
			
var totalSorcery = 0;
 for(count=0;count<$scope.items.length;count++){
    if(angular.equals($scope.items[count].Type,"Sorcery") || angular.equals($scope.items[count].Type,"sorcery")){
      totalSorcery+=1*$scope.items[count].Quantity;
    }
 }
return totalSorcery;
localSet();                       
};

$scope.totalLand = function(){
			
var totalLand = 0;
 for(count=0;count<$scope.items.length;count++){
    if(angular.equals($scope.items[count].Type,"Land") || angular.equals($scope.items[count].Type,"land")|| angular.equals($scope.items[count].Type,"Legendary Land") || angular.equals($scope.items[count].Type,"legendary land") || angular.equals($scope.items[count].Type,"Enchant Land") || angular.equals($scope.items[count].Type,"enchant land") || angular.equals($scope.items[count].Type,"Basic Land") || angular.equals($scope.items[count].Type,"basic land")){
      totalLand+=1*$scope.items[count].Quantity;
    }
 }
return totalLand;
localSet();                       
};

$scope.totalArtifact = function(){
			
var totalArtifact = 0;
 for(count=0;count<$scope.items.length;count++){
    if(angular.equals($scope.items[count].Type,"Artifact") || angular.equals($scope.items[count].Type,"artifact") || angular.equals($scope.items[count].Type,"Legendary Enchantment Artifact")){
      totalArtifact+=1*$scope.items[count].Quantity;
    }
 }
return totalArtifact;
localSet();                        
};
//*****************END*************************

// ***************INFO*************************

$scope.tellMeTotalPlanes = function(){

var totalPlanes = 0;
 for(count=0;count<$scope.items.length;count++){
    if(angular.equals($scope.items[count].Type,"Planeswalker") || angular.equals($scope.items[count].Type,"planeswalker")){
      totalPlanes+=1*$scope.items[count].Quantity;
    }
 }
return totalPlanes;
localSet();                        
}; 

$scope.tellMePlanes = function(){
			
var planes=[];
var namePlanes;
 for(count=0;count<$scope.items.length;count++){
    if(angular.equals($scope.items[count].Type,"Planeswalker") || angular.equals($scope.items[count].Type,"planeswalker")){
      namePlanes=angular.uppercase($scope.items[count].Name);
      planes.push(namePlanes);   
    }
 }
return planes.toString();
localSet();                        
}; 

$scope.totalItems = function(){
			
var totalItems = 0;
 for(count=0;count<$scope.items.length;count++){
    totalItems += parseFloat($scope.items[count].Quantity);
 }
return totalItems;
localSet();                        
};

//REMOVE FUNC
		
$scope.deleteTask = function(index) {
      
if( parseFloat($scope.items[index].Quantity) ==1.0){
  $scope.items.splice(index, 1);
  localSet();
}else{
     $scope.items[index].Quantity =parseFloat($scope.items[index].Quantity)-1.0;
     localSet();
     }
};

$scope.deleteTaskCompletly = function(index) {
    
$scope.items.splice(index, 1);
localSet();
};
	
$scope.filter = function(item){
                       
if(item.Name.match(/^De/) || item.Name.match(/^D/)){
  return true;
}else{
     return false;
     }
                
};

//********************CMC CHART***************************

$scope.ManaCost0 = function(){
			
var mana0 = 0;
 for(count=0;count<$scope.items.length;count++){
    if(parseFloat($scope.items[count].MC) == 0.0){
      mana0+=1*$scope.items[count].Quantity;
localSet();
    }
 }     
return mana0;
localSet();                        
};

$scope.ManaCost1 = function(){
	
var mana1 = 0;
 for(count=0;count<$scope.items.length;count++){
    if(parseFloat($scope.items[count].MC) == 1.0){
      mana1+=1*$scope.items[count].Quantity;
localSet();
    }
 }     
return mana1;
localSet();                       
};

$scope.ManaCost2 = function(){
			
var mana2 = 0;
 for(count=0;count<$scope.items.length;count++){
    if(parseFloat($scope.items[count].MC) == 2.0){
      mana2+=1*$scope.items[count].Quantity;
localSet();
    }
 }     
return mana2;
localSet();                        
};

$scope.ManaCost3 = function(){

var mana3 = 0;
 for(count=0;count<$scope.items.length;count++){
    if(parseFloat($scope.items[count].MC) == 3.0){
      mana3+=1*$scope.items[count].Quantity;
localSet();
    }
 }     
return mana3;
localSet();                        
};

$scope.ManaCost4 = function(){

var mana4 = 0;
 for(count=0;count<$scope.items.length;count++){
    if(parseFloat($scope.items[count].MC) == 4.0){
      mana4+=1*$scope.items[count].Quantity;
localSet();
    }
 }     
return mana4;
localSet();                        
};

$scope.ManaCost5 = function(){
			
var mana5 = 0;
 for(count=0;count<$scope.items.length;count++){
    if(parseFloat($scope.items[count].MC) == 5.0){
      mana5+=1*$scope.items[count].Quantity;
localSet();
    }
 }     
return mana5;
localSet();                        
};

$scope.ManaCost6 = function(){
			
var mana6 = 0;
 for(count=0;count<$scope.items.length;count++){
    if(parseFloat($scope.items[count].MC) == 6.0){
      mana6+=1*$scope.items[count].Quantity;
localSet();
    }
 }     
return mana6;
localSet();                       
};

$scope.ManaCost7 = function(){
			
var mana7 = 0;
 for(count=0;count<$scope.items.length;count++){
    if(parseFloat($scope.items[count].MC) == 7.0){
      mana7+=1*$scope.items[count].Quantity;
localSet();
    }
 }     
return mana7;
localSet();                        
};

$scope.ManaCost8 = function(){
			
var mana8 = 0;
 for(count=0;count<$scope.items.length;count++){
    if(parseFloat($scope.items[count].MC) == 8.0){
      mana8+=1*$scope.items[count].Quantity;
localSet();
    }
 }     
return mana8;
localSet();                       
};

$scope.ManaCost9 = function(){
			
var mana9 = 0;
 for(count=0;count<$scope.items.length;count++){
    if(parseFloat($scope.items[count].MC) == 9.0){
      mana9+=1*$scope.items[count].Quantity;
localSet();
    }
 }     
return mana9;
localSet();                        
};

$scope.ManaCost10 = function(){
			
var mana10 = 0;
 for(count=0;count<$scope.items.length;count++){
    if(parseFloat($scope.items[count].MC) == 10.0){
      mana10+=1*$scope.items[count].Quantity;
localSet();
    }
 }     
return mana10;
localSet();                        
};

$scope.ManaCost11 = function(){

var mana11 = 0;
 for(count=0;count<$scope.items.length;count++){
    if(parseFloat($scope.items[count].MC) == 11.0){
      mana11+=1*$scope.items[count].Quantity;
localSet();
    }
 }     
return mana11;
localSet();                        
};

$scope.ManaCost12 = function(){
			
var mana12 = 0;
 for(count=0;count<$scope.items.length;count++){
    if(parseFloat($scope.items[count].MC) == 12.0){
      mana12+=1*$scope.items[count].Quantity;
localSet();
    }
 }     
return mana12;
localSet();                        
};

$scope.ManaCost13 = function(){

var mana13 = 0;
 for(count=0;count<$scope.items.length;count++){
    if(parseFloat($scope.items[count].MC) == 13.0){
      mana13+=1*$scope.items[count].Quantity;
localSet();
    }
 }     
return mana13;
localSet();                        
};

$scope.ManaCost14 = function(){
			
var mana14 = 0;
 for(count=0;count<$scope.items.length;count++){
    if(parseFloat($scope.items[count].MC) == 14.0){
      mana14+=1*$scope.items[count].Quantity;
localSet();
    }
 }     
return mana14;
localSet();                        
};

$scope.ManaCost15 = function(){
			
var mana15 = 0;
 for(count=0;count<$scope.items.length;count++){
    if(parseFloat($scope.items[count].MC) == 15.0){
      mana15+=1*$scope.items[count].Quantity;
localSet();
    }
 }     
return mana15;
localSet();                        
};

$scope.ManaCost16 = function(){
			
var mana16 = 0;
 for(count=0;count<$scope.items.length;count++){
    if(parseFloat($scope.items[count].MC) == 16.0){
      mana16+=1*$scope.items[count].Quantity;
localSet();
    }
 }     
return mana16;
localSet();                        
};
 
//**********END**********************

//*********MANA COST CHART***********

$scope.Red = function(){
			
var cred = 0;
 for(count=0;count<$scope.items.length;count++){
    if(angular.equals($scope.items[count].Color,"Red") || angular.equals($scope.items[count].Color,"red")){
      cred+=1*$scope.items[count].Quantity;
    }
 }     
return cred;
localSet();                        
};

$scope.Black = function(){
			
var cblack = 0;
 for(count=0;count<$scope.items.length;count++){
    if(angular.equals($scope.items[count].Color,"Black") || angular.equals($scope.items[count].Color,"black")){
      cblack+=1*$scope.items[count].Quantity;
    }
 }     
return cblack;
localSet();                        
};

$scope.Green = function(){
			
var cgreen = 0;
 for(count=0;count<$scope.items.length;count++){
    if(angular.equals($scope.items[count].Color,"Green") || angular.equals($scope.items[count].Color,"green")){
      cgreen+=1*$scope.items[count].Quantity;
    }
 }     
return cgreen;
localSet();                        
};

$scope.White = function(){
			
var cwhite = 0;
 for(count=0;count<$scope.items.length;count++){
    if(angular.equals($scope.items[count].Color,"White") || angular.equals($scope.items[count].Color,"white")){
      cwhite+=1*$scope.items[count].Quantity;
    }
 }     
return cwhite;
localSet();                        
};

$scope.Blue = function(){
			
var cblue = 0;
 for(count=0;count<$scope.items.length;count++){
    if(angular.equals($scope.items[count].Color,"Blue") || angular.equals($scope.items[count].Color,"blue")){
      cblue+=1*$scope.items[count].Quantity;
    }
 }     
return cblue;
localSet();                        
};

$scope.Multi = function(){
			
var cmulti = 0;
 for(count=0;count<$scope.items.length;count++){
    if(angular.equals($scope.items[count].Color,"Multi") || angular.equals($scope.items[count].Color,"multi")){
      cmulti+=1*$scope.items[count].Quantity;
    }
 }     
return cmulti;
localSet();                        
};

$scope.ColorLess = function(){
			
var cless = 0;
 for(count=0;count<$scope.items.length;count++){
    if(angular.equals($scope.items[count].Color,"Colorless") || angular.equals($scope.items[count].Color,"colorless")){
      cless+=1*$scope.items[count].Quantity;
    }
 }     
return cless;
localSet();                        
};

//***************END****************

$scope.reloadPage = function(){window.location.reload();};

//if the user needs to add a card that is already in the set

$scope.alreadySet=function(input){

var i;
 for(i=0;i<$scope.items.length;i++){
    if(angular.equals($scope.items[i].Name, input)){
      $scope.items[i].Quantity=parseInt($scope.items[i].Quantity)+1;
      break;
    }

 }
return $scope.items[i].Quantity;
localSet();
};

//DRAW HAND FUNC

$scope.DrawHand = function(){

var urlImage="";
var id=0;
var rdm=0;
var step=0;
var links = [];
var ids = [];
var z,t;
var i;

do{
 for(count=0;count<$scope.items.length;count++){
    rdm=Math.floor(( Math.random() *$scope.items.length  * 2 ) % $scope.items.length);
     if(rdm==$scope.items[count].id){
       id=$scope.items[count].id;
       ids.push(id);
       step+=1;
       break; 
       }else{
            /*do something*/
            }
 }     

}while(step<=6);

var newArr=[];
var origLen = ids.length;
var found, x, y;

for (x = 0; x < origLen; x++) {
    found = undefined;
    for (y = 0; y < newArr.length; y++) {
        if (ids[x] === newArr[y] && $scope.items[ids[x]].Quantity==1) {
           found = true;
           break;
        }
    }
    if (!found) {
       newArr.push(ids[x]);
       urlImage="".concat('<div class="col-xs-18 col-sm-6 col-md-3">','<div class="info-card">','<img src="',$scope.items[ids[x]].Image,'"',' ','alt="', $scope.items[ids[x]].Name,'"','>','</img>','</div>','</div>');
       links.push(urlImage);

    }
}

if(links.length<=6){

return false;

}else{
return $scope.smuppet=links.join(' ');
}
};

//ADD CARD FUNC

$scope.addCard=function(){

var i;
var cardsimg=[];
var sd='';
var imageCount = $scope.items.length;
var step=0;

do{
 for (i=0;i<$scope.items.length;i++){
     var index = Math.floor(( Math.random() * imageCount * 2 ) % imageCount);
     sd="".concat('<img src="',$scope.items[ index ].Image,'"></img>');
     cardsimg.push(sd);
     step+=1;
     break;
 } 
}while(step<1);

return $scope.snippet=cardsimg.join(' '); 
  

};

//MULLIGAN FUNC

$scope.Mulligan = function(){

$scope.counter+=1;

var urlImage="";
var id=0;
var rdm=0;
var rnum=0;
var step=0;
var step2=0;
var links = [];
var ids = [];
var z,t;
var i;

do{
 for(count=0;count<$scope.items.length;count++){
    rdm=Math.floor(( Math.random() *$scope.items.length  * 2 ) % $scope.items.length);
     if(rdm==$scope.items[count].id){
       id=$scope.items[count].id;
       ids.push(id);
       step+=1;
       break; 
       }else{
            /*do something*/
            }
 }     

}while(step<=6);

var newArr=[];
var origLen = ids.length;
var found, x, y;

for (x = 0; x < origLen; x++) {
    found = undefined;
    for (y = 0; y < newArr.length; y++) {
        if (ids[x] === newArr[y] && $scope.items[ids[x]].Quantity==1) {
           found = true;
           break;

          
        }
    }
    if (!found) {
       newArr.push(ids[x]);
       urlImage="".concat('<div class="col-xs-18 col-sm-6 col-md-3">','<div class="info-card">','<img src="',$scope.items[ids[x]].Image,'"',' ','alt="', $scope.items[ids[x]].Name,'"','>','</img>','</div>','</div>');
       links.push(urlImage);


    }
}

//to prevent 6 cards or less
if(links.length<=6){

var urlImage="";
var id=0;
var rdm=0;
var pass=1;
var ids = [];
var z,t;
var i;

do{
 for(count=0;count<$scope.items.length;count++){
    rdm=Math.floor(( Math.random() *$scope.items.length  * 2 ) % $scope.items.length);
     if(rdm==$scope.items[count].id){
       id=$scope.items[count].id;
       ids.push(id);
       pass+=1;
       break; 
       }else{
            
            }
 }     

}while((links.length+pass)===7);

var newArr=[];
var origLen = ids.length;
var found, x, y;

for (x = 0; x < origLen; x++) {
    found = undefined;
    for (y = 0; y < newArr.length; y++) {
        if (ids[x] === newArr[y] && $scope.items[ids[x]].Quantity==1) {
           found = true;
           break;
        }
    }
    if (!found) {
       newArr.push(ids[x]);
       urlImage="".concat('<div class="col-xs-18 col-sm-6 col-md-3">','<div class="info-card">','<img src="',$scope.items[ids[x]].Image,'"',' ','alt="', $scope.items[ids[x]].Name,'"','>','</img>','</div>','</div>');
       links.push(urlImage);

    }
}


}




//alert when $scope.counter is 7
if($scope.counter===7){

 $scope.modalShown = !$scope.modalShown;
 window.location.reload();

}else{
links.splice(1,$scope.counter);
return $scope.mulligan=links.join(' ');
}
 
};

}]);//END CONTROLLER 1


//my modal window
myApp.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: '<div class="ng-modal" ng-show="show"><div class="ng-modal-overlay" ng-click="hideModal()"></div><div class="ng-modal-dialog" ng-style="dialogStyle"><div class="ng-modal-close" ng-click="hideModal()">X</div><div class="ng-modal-dialog-content" ng-transclude></div></div></div>' 
  };
});


// BLACKLIST FOR CARD'S COLOR FORM
myApp.directive('blacklist', function (){ 

return {
       require: 'ngModel',
       link: function(scope, elem, attr, ngModel) {
                     var blacklist = attr.blacklist.split(',');

                     //For DOM -> model validation
                     ngModel.$parsers.unshift(function(value) {
                                                              var valid = blacklist.indexOf(value) === -1;
                                                              ngModel.$setValidity('blacklist', valid);
                                                              return valid ? value : undefined;
                     });

                     //For model -> DOM validation
                     ngModel.$formatters.unshift(function(value) {
                                                                 ngModel.$setValidity('blacklist', blacklist.indexOf(value) === -1);
                                                                 return value;
                     });
             }
        };
});

  
myApp.filter('setDecimal', function($filter){

return function(input){
 return Math.round(input*10)/10;

};

});//END FILTER FOR MODULE A


/*-----------------------------------*/
//MODULE B
/*-----------------------------------*/

var moduleB = angular.module('PartB', ['ngSanitize']);

moduleB.controller('MyControllerB', ['$scope','$http', function($scope, $http) {

$http.get("jund.json").success(function(response) {$scope.cards = response.jund;});

$scope.printDB= function() {
var r;
var i;
var cardsimg=[];
var sd='';
var imageCount = $scope.cards.length;
 
 for (i=0;i<imageCount;i++){
    if($scope.cards[i].Quantity>1){
      for(r=0;r<$scope.cards[i].Quantity;r++){
     sd="".concat(' <div class="col-md-3">','<div class="panel panel-default">','<div class="panel-body">','<img src="',$scope.cards[ i ].Image,'" width="272" height="388"></img>','</div>','</div>','</div>');
     cardsimg.push(sd);
}
}else{ 
sd="".concat(' <div class="col-md-3">','<div class="panel panel-default">','<div class="panel-body">','<img src="',$scope.cards[ i ].Image,'" width="272" height="388"></img>','</div>','</div>','</div>');
     cardsimg.push(sd);
}
} 
return cardsimg.join(' '); 
  
};

$scope.reloadPage = function(){window.location.reload();};


}]);//END OF CONTROLLER B
         

moduleB.filter('sanitize',  ['$sce', function($sce) {

return function(htmlCode){
 return $sce.trustAsHtml(htmlCode);
};

}]);//END OF FILTER FOR MODULE B

/*****************************************************************/
/*****************************************************************/
//FUNCTIONS
//another random card function style

/*$scope.getRandomCards= function() {

var i;
var cardsimg=[];
var sd='';
var imageCount = $scope.cards.length;
 
 for (i=0;i<7;i++){
     var index = Math.floor(( Math.random() * imageCount * 2 ) % imageCount);
     sd="".concat('<img src="',$scope.cards[ index ].Image,'"></img>');
     cardsimg.push(sd);
 } 
return cardsimg.join(' '); 
  
};*/
/*****************************************************************/


