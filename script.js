const cards = ['Action (set A)', 'Action (set B)', 'Action (set C)','Adjective','Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions']

const actionSetA = [
    {
        word: 'cry',
        translation: 'плакать',
        image: 'assets/images/cry.jpg',
        audioSrc: 'assets/audio/cry.mp3'
      },
      {
        word: 'dance',
        translation: 'танцевать',
        image: 'assets/images/dance.jpg',
        audioSrc: 'assets/audio/dance.mp3'
      },
      {
        word: 'dive',
        translation: 'нырять',
        image: 'assets/images/dive.jpg',
        audioSrc: 'assets/audio/dive.mp3'
      },
      {
        word: 'draw',
        translation: 'рисовать',
        image: 'assets/images/draw.jpg',
        audioSrc: 'assets/audio/draw.mp3'
      },
      {
        word: 'fish',
        translation: 'ловить рыбу',
        image: 'assets/images/fish.jpg',
        audioSrc: 'assets/audio/fish.mp3'
      },
      {
        word: 'fly',
        translation: 'летать',
        image: 'assets/images/fly.jpg',
        audioSrc: 'assets/audio/fly.mp3'
      },
      {
        word: 'hug',
        translation: 'обнимать',
        image: 'assets/images/hug.jpg',
        audioSrc: 'assets/audio/hug.mp3'
      },
      {
        word: 'jump',
        translation: 'прыгать',
        image: 'assets/images/jump.jpg',
        audioSrc: 'assets/audio/jump.mp3'
      }
]
const actionSetB = [
    {
        word: 'open',
        translation: 'открывать',
        image: 'assets/images/open.jpg',
        audioSrc: 'assets/audio/open.mp3'
      },
      {
        word: 'play',
        translation: 'играть',
        image: 'assets/images/play.jpg',
        audioSrc: 'assets/audio/play.mp3'
      },
      {
        word: 'point',
        translation: 'указывать',
        image: 'assets/images/point.jpg',
        audioSrc: 'assets/audio/point.mp3'
      },
      {
        word: 'ride',
        translation: 'ездить',
        image: 'assets/images/ride.jpg',
        audioSrc: 'assets/audio/ride.mp3'
      },
      {
        word: 'run',
        translation: 'бегать',
        image: 'assets/images/run.jpg',
        audioSrc: 'assets/audio/run.mp3'
      },
      {
        word: 'sing',
        translation: 'петь',
        image: 'assets/images/sing.jpg',
        audioSrc: 'assets/audio/sing.mp3'
      },
      {
        word: 'skip',
        translation: 'пропускать, прыгать',
        image: 'assets/images/skip.jpg',
        audioSrc: 'assets/audio/skip.mp3'
      },
      {
        word: 'swim',
        translation: 'плавать',
        image: 'assets/images/swim.jpg',
        audioSrc: 'assets/audio/swim.mp3'
      }
]
const actionSetCREWRITE = [
    {
        word: 'open',
        translation: 'открывать',
        image: 'assets/images/open.jpg',
        audioSrc: 'assets/audio/open.mp3'
      },
      {
        word: 'play',
        translation: 'играть',
        image: 'assets/images/play.jpg',
        audioSrc: 'assets/audio/play.mp3'
      },
      {
        word: 'point',
        translation: 'указывать',
        image: 'assets/images/point.jpg',
        audioSrc: 'assets/audio/point.mp3'
      },
      {
        word: 'ride',
        translation: 'ездить',
        image: 'assets/images/ride.jpg',
        audioSrc: 'assets/audio/ride.mp3'
      },
      {
        word: 'run',
        translation: 'бегать',
        image: 'assets/images/run.jpg',
        audioSrc: 'assets/audio/run.mp3'
      },
      {
        word: 'sing',
        translation: 'петь',
        image: 'assets/images/sing.jpg',
        audioSrc: 'assets/audio/sing.mp3'
      },
      {
        word: 'skip',
        translation: 'пропускать, прыгать',
        image: 'assets/images/skip.jpg',
        audioSrc: 'assets/audio/skip.mp3'
      },
      {
        word: 'swim',
        translation: 'плавать',
        image: 'assets/images/swim.jpg',
        audioSrc: 'assets/audio/swim.mp3'
      }
]
const adjectiveREWRITE = [
    {
        word: 'open',
        translation: 'открывать',
        image: 'assets/images/open.jpg',
        audioSrc: 'assets/audio/open.mp3'
      },
      {
        word: 'play',
        translation: 'играть',
        image: 'assets/images/play.jpg',
        audioSrc: 'assets/audio/play.mp3'
      },
      {
        word: 'point',
        translation: 'указывать',
        image: 'assets/images/point.jpg',
        audioSrc: 'assets/audio/point.mp3'
      },
      {
        word: 'ride',
        translation: 'ездить',
        image: 'assets/images/ride.jpg',
        audioSrc: 'assets/audio/ride.mp3'
      },
      {
        word: 'run',
        translation: 'бегать',
        image: 'assets/images/run.jpg',
        audioSrc: 'assets/audio/run.mp3'
      },
      {
        word: 'sing',
        translation: 'петь',
        image: 'assets/images/sing.jpg',
        audioSrc: 'assets/audio/sing.mp3'
      },
      {
        word: 'skip',
        translation: 'пропускать, прыгать',
        image: 'assets/images/skip.jpg',
        audioSrc: 'assets/audio/skip.mp3'
      },
      {
        word: 'swim',
        translation: 'плавать',
        image: 'assets/images/swim.jpg',
        audioSrc: 'assets/audio/swim.mp3'
      }
]
const animalSetA = [
    {
        word: 'cat',
        translation: 'кот',
        image: 'assets/images/cat.jpg',
        audioSrc: 'assets/audio/cat.mp3'
      },
      {
        word: 'chick',
        translation: 'цыплёнок',
        image: 'assets/images/chick.jpg',
        audioSrc: 'assets/audio/chick.mp3'
      },
      {
        word: 'chicken',
        translation: 'курица',
        image: 'assets/images/chicken.jpg',
        audioSrc: 'assets/audio/chicken.mp3'
      },
      {
        word: 'dog',
        translation: 'собака',
        image: 'assets/images/dog.jpg',
        audioSrc: 'assets/audio/dog.mp3'
      },
      {
        word: 'horse',
        translation: 'лошадь',
        image: 'assets/images/horse.jpg',
        audioSrc: 'assets/audio/horse.mp3'
      },
      {
        word: 'pig',
        translation: 'свинья',
        image: 'assets/images/pig.jpg',
        audioSrc: 'assets/audio/pig.mp3'
      },
      {
        word: 'rabbit',
        translation: 'кролик',
        image: 'assets/images/rabbit.jpg',
        audioSrc: 'assets/audio/rabbit.mp3'
      },
      {
        word: 'sheep',
        translation: 'овца',
        image: 'assets/images/sheep.jpg',
        audioSrc: 'assets/audio/sheep.mp3'
      }
]
const animalSetB = [
    {
        word: 'bird',
        translation: 'птица',
        image: 'assets/images/bird.jpg',
        audioSrc: 'assets/audio/bird.mp3'
      },
      {
        word: 'fish',
        translation: 'рыба',
        image: 'assets/images/fish1.jpg',
        audioSrc: 'assets/audio/fish.mp3'
      },
      {
        word: 'frog',
        translation: 'жаба',
        image: 'assets/images/frog.jpg',
        audioSrc: 'assets/audio/frog.mp3'
      },
      {
        word: 'giraffe',
        translation: 'жирафа',
        image: 'assets/images/giraffe.jpg',
        audioSrc: 'assets/audio/giraffe.mp3'
      },
      {
        word: 'lion',
        translation: 'лев',
        image: 'assets/images/lion.jpg',
        audioSrc: 'assets/audio/lion.mp3'
      },
      {
        word: 'mouse',
        translation: 'мышь',
        image: 'assets/images/mouse.jpg',
        audioSrc: 'assets/audio/mouse.mp3'
      },
      {
        word: 'turtle',
        translation: 'черепаха',
        image: 'assets/images/turtle.jpg',
        audioSrc: 'assets/audio/turtle.mp3'
      },
      {
        word: 'dolphin',
        translation: 'дельфин',
        image: 'assets/images/dolphin.jpg',
        audioSrc: 'assets/audio/dolphin.mp3'
      }
]
const clothes = [
    {
        word: 'skirt',
        translation: 'юбка',
        image: 'assets/images/skirt.jpg',
        audioSrc: 'assets/audio/skirt.mp3'
      },
      {
        word: 'pants',
        translation: 'брюки',
        image: 'assets/images/pants.jpg',
        audioSrc: 'assets/audio/pants.mp3'
      },
      {
        word: 'blouse',
        translation: 'блузка',
        image: 'assets/images/blouse.jpg',
        audioSrc: 'assets/audio/blouse.mp3'
      },
      {
        word: 'dress',
        translation: 'платье',
        image: 'assets/images/dress.jpg',
        audioSrc: 'assets/audio/dress.mp3'
      },
      {
        word: 'boot',
        translation: 'ботинок',
        image: 'assets/images/boot.jpg',
        audioSrc: 'assets/audio/boot.mp3'
      },
      {
        word: 'shirt',
        translation: 'рубашка',
        image: 'assets/images/shirt.jpg',
        audioSrc: 'assets/audio/shirt.mp3'
      },
      {
        word: 'coat',
        translation: 'пальто',
        image: 'assets/images/coat.jpg',
        audioSrc: 'assets/audio/coat.mp3'
      },
      {
        word: 'shoe',
        translation: 'туфли',
        image: 'assets/images/shoe.jpg',
        audioSrc: 'assets/audio/shoe.mp3'
      }
]
const emotion = [
    {
        word: 'sad',
        translation: 'грустный',
        image: 'assets/images/sad.jpg',
        audioSrc: 'assets/audio/sad.mp3'
      },
      {
        word: 'angry',
        translation: 'сердитый',
        image: 'assets/images/angry.jpg',
        audioSrc: 'assets/audio/angry.mp3'
      },
      {
        word: 'happy',
        translation: 'счастливый',
        image: 'assets/images/happy.jpg',
        audioSrc: 'assets/audio/happy.mp3'
      },
      {
        word: 'tired',
        translation: 'уставший',
        image: 'assets/images/tired.jpg',
        audioSrc: 'assets/audio/tired.mp3'
      },
      {
        word: 'surprised',
        translation: 'удивлённый',
        image: 'assets/images/surprised.jpg',
        audioSrc: 'assets/audio/surprised.mp3'
      },
      {
        word: 'scared',
        translation: 'испуганный',
        image: 'assets/images/scared.jpg',
        audioSrc: 'assets/audio/scared.mp3'
      },
      {
        word: 'smile',
        translation: 'улыбка',
        image: 'assets/images/smile.jpg',
        audioSrc: 'assets/audio/smile.mp3'
      },
      {
        word: 'laugh',
        translation: 'смех',
        image: 'assets/images/laugh.jpg',
        audioSrc: 'assets/audio/laugh.mp3'
      }
]
const data = [
  actionSetA, actionSetB, actionSetCREWRITE, adjectiveREWRITE, animalSetA, actionSetB, clothes, emotion 
]

const menuSwitcher  = document.querySelector('.menu-switcher')
const categories    = document.querySelector('.categories')
const categoryLinks = document.querySelectorAll('.category-link')
const sticks        = document.querySelectorAll('.hamburger')
const main          = document.querySelector('.main')
const words         = document.createElement('div')
const menu          = document.querySelector('.sliding-menu')
const playButton    = document.createElement('button')

      words.classList.add('categories')

      playButton.classList.add('play-button')
      playButton.innerText = 'START'

  let isPlaying = false 

menuSwitcher.onclick = e => {
    document.querySelector('.sliding-menu').classList.toggle('hidden')
    sticks[0].classList.toggle('to-bottom')
    sticks[1].classList.toggle('fade')
    sticks[2].classList.toggle('to-top')
}

class Card {
    constructor({ word, translation, image, audioSrc } = {}) {
        this.word = word;
        this.translation = translation;
        this.image = image;
        this.audioSrc = audioSrc;
    }
    createCard(state) {

        let cardContainer = document.createElement('div')
        let cardInner     = document.createElement('div')
        let cardFront     = document.createElement('div')
        let cardBack      = document.createElement('div')
        let cardLogo      = document.createElement('div')
        let cardImage     = document.createElement('img')
        let backImage     = document.createElement('img')
        let rotateImage   = document.createElement('img')

            cardContainer.classList.add('category-card')
            cardContainer.classList.add('category-word')

            cardInner.classList.add('category-inner')
            cardFront.classList.add('category-front')
            cardBack.classList.add('category-back')

            backImage.setAttribute('src',`${this.image}`)
            backImage.classList.add('word-card')
            
            cardImage.setAttribute('src',`${this.image}`)
            cardImage.classList.add('word-card')

            rotateImage.setAttribute('src',`assets/images/Rotate.png`)
            rotateImage.classList.add('rotate-sym')

            cardLogo.classList.add('card-logo')
            cardLogo.innerText = this.word
            cardLogo.append(rotateImage)

            cardContainer.setAttribute('data-audio', this.audioSrc) 

        if(state) {
          cardFront.prepend(cardImage)

          cardBack.innerText = this.translation
          cardBack.prepend(backImage)
  
          cardInner.prepend(cardFront, cardBack)
  
          cardContainer.prepend(cardInner)  
          cardContainer.classList.add('card-playing')

          main.after(playButton)

        } else {
          cardFront.prepend(cardImage, cardLogo)

          cardBack.innerText = this.translation
          cardBack.prepend(backImage)
  
          cardInner.prepend(cardFront, cardBack)
  
          cardContainer.prepend(cardInner)  
          cardContainer.classList.remove('card-playing')
        }

        return cardContainer 
    }
}

function createWordsField(collection) {
    main.lastElementChild.remove()
    words.innerHTML = ''
            collection.forEach(card => {
                words.append(new Card(card).createCard(isPlaying))
                main.append(words)
            })
}

function revealCardsByClick(e) {
    let { target } = e
    
    if(target.tagName !== 'A') return
    e.preventDefault()
        categoryLinks.forEach(link => {
          link.classList.remove('category-link-active')
          if(target.innerText === link.innerText) link.classList.add('category-link-active')
        })

    if(target.classList.contains('category-link')) {
        target.classList.add('category-link-active')
        menuSwitcher.click()
    }

    switch(target.innerText) {
        case 'Main Page':
            main.lastElementChild.remove()
            playButton.remove()
            main.append(categories);
            break;
        case 'Action (set A)':
            createWordsField(actionSetA)
            break;
        case 'Action (set B)':
            createWordsField(actionSetB)
            break;
        case 'Action (set C)':
            createWordsField(actionSetCREWRITE)
            break;
        case 'Adjective':
            createWordsField(adjectiveREWRITE)
            break;
        case 'Animal (set A)':
            createWordsField(animalSetA)
            break;
        case 'Animal (set B)':
            createWordsField(animalSetB)
            break;
        case 'Clothes':
            createWordsField(clothes)
            break;
        case 'Emotion':
            createWordsField(emotion)
            break;
    }
}

function sayCardWord(e) {
    let { target } = e
    
    if(target.className === 'word-card' || target.className === 'card-logo') {
      let audioSrc = target.parentElement.parentElement.parentElement.getAttribute('data-audio')

      let phranse = new Audio(audioSrc)
      phranse.play()
    } if(target.className !== 'word-card') return
}

function rotateCard(e) {
    let { target } = e
    if(target.className !== 'rotate-sym') return

    let rotateCircle = target

    target.parentElement.parentElement.parentElement.parentElement.classList.add('hover')
    target.parentElement.parentElement.parentElement.classList.add('hover')

    target.classList.add('rotate-sym-hidden')

    document.addEventListener('mouseout', e => {
        onMouseOut(e, rotateCircle)
    })
}

function onMouseOut(e, elem) {
  let { target } = e

  if(target.className !== 'category-back') return

  target.parentElement.classList.remove('hover')
  target.parentElement.parentElement.classList.remove('hover')

  setTimeout(() => {
    elem.classList.remove('rotate-sym-hidden')
  }, 200)
}

function toggleSwitcher(e){
  let { target } = e
  let play = document.querySelector('.play')
  let train = document.querySelector('.train')

  if(target.tagName !== 'INPUT') return

  if(target.checked) {
    play.innerText = ''  
    play.innerText = 'PLAY'
    train.innerText = ''
    check()
  } else {
    train.innerText = ''
    train.innerText = 'TRAIN'
    play.innerText = '' 
    uncheck()
  }
  checkApplicationState()
}

function check() {
  switcher.checked = true
}

function uncheck() {
  switcher.checked = false
}

function checkApplicationState() {
  let linksCollection = [...categories.children]
  let activeIndex

  if(switcher.checked) {
    isPlaying = true

    if(categoryLinks[0].classList.contains('category-link-active')) {
      linksCollection.forEach(category => {
        category.classList.add('category-card-play')
      })
    } else {
      for(let i = 0; i < categoryLinks.length; i++){
        if(categoryLinks[i].classList.contains('category-link-active')) {
          activeIndex = i-1
        } 
      }
      linksCollection.forEach(category => {
        category.classList.add('category-card-play')
      })
      createWordsField(data[activeIndex])
    }

    menu.classList.add('sliding-menu-play')
  } else {
    isPlaying = false
    
    playButton.classList.remove('play-button-active')
    playButton.innerText = 'START'

    if(categoryLinks[0].classList.contains('category-link-active')) {
      linksCollection.forEach(category => {
        category.classList.remove('category-card-play')
      })
    } else {
        for(let i = 0; i < categoryLinks.length; i++){
          if(categoryLinks[i].classList.contains('category-link-active')) {
            activeIndex = i-1
          } 
        }
        linksCollection.forEach(category => {
          category.classList.remove('category-card-play')
        })
        createWordsField(data[activeIndex])
        playButton.remove()
      }

    menu.classList.remove('sliding-menu-play')
  }
}

function startGame(e) {
  let { target } = e
  if(target.tagName !== 'BUTTON') return

  target.innerText = ''
  target.classList.add('play-button-active')
}

document.addEventListener('click', revealCardsByClick)
document.addEventListener('click', sayCardWord)
document.addEventListener('click', rotateCard)
document.addEventListener('click', toggleSwitcher)
document.addEventListener('click', startGame)
