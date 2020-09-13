// Create variables targetting the relevant DOM elements here 👇
homePicture = document.querySelector('.cover-image');
randomCoverButton = document.querySelector('.random-cover-button');
makeNewButton = document.querySelector('.make-new-button');
viewSavedButton = document.querySelector('.view-saved-button')
homeButton = document.querySelector('.home-button');
submitFormButton = document.querySelector('.create-new-book-button');
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', setRandomPhoto);
randomCoverButton.addEventListener('click', shufflePicture);
makeNewButton.addEventListener('click', showMakeNewForm);
viewSavedButton.addEventListener('click', showSaved);
homeButton.addEventListener('click', goHome);
submitFormButton.addEventListener('click', createBook);
// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function setRandomPhoto(){
  homePicture.src = covers[getRandomIndex(covers)]
}
function shufflePicture(){
  setRandomPhoto()
}

function showMakeNewForm(){
  hideHomeView();
  hideRandomCoverButton();
  hideSaveCoverButton();
  showHomeButton();
  document.querySelector('.form-view').classList.remove('hidden');
}
function showSaved(){
  hideHomeView();
  document.querySelector('.saved-view').classList.remove('hidden');
  hideRandomCoverButton();
  hideSaveCoverButton();
  showHomeButton();
}
function hideSaved(){
  document.querySelector('.saved-view').classList.add('hidden')
}

function hideHomeView(){
  document.querySelector('.home-view').classList.add('hidden');
}

function showHomeView(){
  document.querySelector('.home-view').classList.remove('hidden');
}

function hideRandomCoverButton(){
  document.querySelector('.random-cover-button').classList.add('hidden');
}
function showRandomCoverButton(){
  document.querySelector('.random-cover-button').classList.remove('hidden');
}

function showSaveCoverButton(){
  document.querySelector('.save-cover-button').classList.remove('hidden');
}

function hideSaveCoverButton(){
  document.querySelector('.save-cover-button').classList.add('hidden');
}

function showHomeButton(){
  document.querySelector('.home-button').classList.remove('hidden');
}
function hidehomeButton(){
  document.querySelector('.home-button').classList.add('hidden');
}
function goHome(){
  showHomeView();
  hidehomeButton();
  showSaveCoverButton();
  showRandomCoverButton();
}
function createBook(event){
  event.preventDefault();
  goHome();
  hideSaved();
  userCover = document.querySelector('.user-cover');
  userTitle = document.querySelector('.user-title');
  userDescrip1 = document.querySelector('.user-desc1');
  userDescrip2 = document.querySelector('.user-desc2');
  newCover = new Cover(userCover.value, userTitle.value, userDescrip1.value, userDescrip2.value);
  covers.push(newCover.cover);
  titles.push(newCover.title);
  descriptors.push(newCover.tagLine1);
  descriptors.push(newCover.tagLine2);
  console.log(newCover)
  document.querySelector('.cover-image').src = newCover.cover;
  document.querySelector('.cover-title').innerHTML = newCover.title;
  document.querySelector('.tagline-1').innerHTML = newCover.tagline1;
  document.querySelector('.tagline-2').innerHTML = newCover.tagline2;
}