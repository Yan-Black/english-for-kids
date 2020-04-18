import { Card } from './Js/Card.js'
import { data } from './Js/assets.js'

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

function closeAsideMenuOnDocumentClick(e) {
  if(menu.getBoundingClientRect().right > 0 && e.clientX > menu.getBoundingClientRect().right) {
    menuSwitcher.click()
  }
}

function createWordsField(collection) {
    main.lastElementChild.remove()
    words.innerHTML = ''
            collection.forEach(card => {
                words.append(new Card(card).createCard(isPlaying))
                main.append(words)
            });
            [...words.children].forEach(word => {
              word.onmouseleave = () => {
                if(word.classList.contains('transparent')){
                    word.classList.remove('transparent')
                    word.firstElementChild.classList.remove('flipped')
                    word.firstElementChild.firstElementChild.lastElementChild.lastElementChild.classList.remove('rotate-sym-hidden')
                }
              }
              word.onclick = (e) => {
                if(word.firstElementChild.classList.contains('flipped') || e.target.classList.contains('rotate-sym')) return
                if(isPlaying) return
                let audioSrc = word.getAttribute('data-audio')

                let phranse = new Audio(audioSrc)
                phranse.play()
              }
            })
            createStarsLine()
}

function ifTargetTagNameA(e,target) {
  if(target.tagName !== 'A') return
  e.preventDefault()
  revealCards(target)
}

function ifTargetTagNameIMG(target) {
  if(target.tagName !== 'IMG' || target.className === 'word-card' || target.className === 'rotate-sym') return
  if(target.classList.contains('card-playing-solved') || target.classList.contains('star')) return

  revealCards(target.parentElement)
}

function revealCards(elem) {
  categoryLinks.forEach(link => {
    link.classList.remove('category-link-active')
    if(elem.innerText === link.innerText) link.classList.add('category-link-active')
  })

    if(elem.classList.contains('category-link')) {
        elem.classList.add('category-link-active')
        menuSwitcher.click()
  }

      playButton.innerText = 'START'
      playButton.classList.remove('play-button-active')

      if(isPlaying && elem.innerText !== 'Main Page') {
        main.after(playButton)
      }

  switch(elem.innerText) {
      case 'Main Page':
          main.lastElementChild.remove()
          playButton.remove()
          main.append(categories);
          break;
      case 'Action (set A)':
          createWordsField(data[0])
          break;
      case 'Action (set B)':
          createWordsField(data[1])
          break;
      case 'Action (set C)':
          createWordsField(data[2])
          break;
      case 'Adjective':
          createWordsField(data[3])
          break;
      case 'Animal (set A)':
          createWordsField(data[4])
          break;
      case 'Animal (set B)':
          createWordsField(data[5])
          break;
      case 'Clothes':
          createWordsField(data[6])
          break;
      case 'Emotion':
          createWordsField(data[7])
          break;
    }
}

function revealCardsByClick(e) {
    let { target } = e
    
    ifTargetTagNameA(e,target)
    ifTargetTagNameIMG(target)
}

function rotateCard(e) {
    let { target } = e
    if(target.className !== 'rotate-sym') return
    target.parentElement.parentElement.parentElement.parentElement.classList.add('transparent')
    target.parentElement.parentElement.parentElement.classList.add('flipped')
    target.classList.add('rotate-sym-hidden')
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
  let mainLink = document.querySelector('.back-to-main')
  let activeIndex

  if(switcher.checked) {
    isPlaying = true

    mainLink.classList.add('back-to-main-active')

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
      main.after(playButton)
    }

    menu.classList.add('sliding-menu-play')
  } else {
    isPlaying = false

    mainLink.classList.remove('back-to-main-active')

    if(document.querySelector('.src-container') !== null) {
      document.querySelector('.src-container').remove()
    }
    
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

//Game variables

let currentSrc
let counter = 0
let errors = 0

//Game functions from 237 to 419

function shuffleAudioSrc(arr) {
  let audioSources 
  let newPos, temp;

  for(let i = 0; i < arr.length; i++) {
    newPos = Math.floor(Math.random() * (i+1))
    temp = arr[i].getAttribute('data-audio')
    arr[i] = arr[newPos]
    arr[newPos] = temp
 }

 audioSources = arr
 createSrcContainer(audioSources)
}

function createSrcContainer(arr) {
  let srcContainer = document.createElement('div')
  let srcUl = document.createElement('ul')

   for(let i = 0; i < arr.length; i++){
     let src = document.createElement('li')
         src.innerText = arr[i]
     if(src.innerText !== '') {
      srcUl.append(src)
     }
   }
 
   srcContainer.append(srcUl)
   srcContainer.classList.add('src-container')
 
   document.querySelector('.main').after(srcContainer)
}

function startGame(e) {
  let { target } = e

  if(target.tagName !== 'BUTTON' ) return

  if(!target.classList.contains('play-button-active')) {
    if(document.querySelector('.src-container') !== null) {
      document.querySelector('.src-container').remove()
    }

    shuffleAudioSrc([...words.children],target)

    counter = 0
    errors = 0
    target.innerText = ''
    target.classList.add('play-button-active')
  }  

  let audioSources = []
  let nodeList = document.querySelectorAll('.src-container > ul > li')

      nodeList.forEach(node => audioSources.push(node.innerText))
  setTimeout(() => {
    sayRandomWord(audioSources)
  },200)
}

function checkIfTrue(e) {
  let { target } = e
  
  if(target.className !== 'word-card' || !isPlaying) return
  if(target.classList.contains('card-playing-solved')) return
  if(!document.querySelector('.play-button').classList.contains('play-button-active')) return
  let targetAudio = target.parentElement.parentElement.parentElement.getAttribute('data-audio')

  let audioSources = []
  let isWin
  let nodeList = document.querySelectorAll('.src-container > ul > li')

      nodeList.forEach(node => audioSources.push(node.innerText))

  if(targetAudio === currentSrc) {
    let starsLine = document.querySelector('.stars-line')   
        
    if(counter === 7 && starsLine.children.length === 7) {
      isWin = true
      setTimeout(() => {
        createResultImage(isWin)
      }, 1000)
    }

    if(counter === 7 && starsLine.children.length !== 7) {
      isWin = false
      setTimeout(() => {
        createResultImage(isWin, errors)
      }, 1000)
    }

    addStars('src/assets/images/star-win.svg')

      target.classList.add('card-playing-solved')

    let audio = new Audio('src/assets/audio/correct.mp3')
    audio.play()

      counter++

    setTimeout(()=> {
      sayRandomWord(audioSources)
    },800)

  } else {

    addStars('src/assets/images/star.svg')

      errors++
      
    let audio = new Audio('src/assets/audio/error.mp3')
    audio.play()
  }
}

function createStarsLine() {
  let starsLine = document.createElement('div')
      starsLine.classList.add('stars-line')
      document.querySelector('.categories').prepend(starsLine)
}

function addStars(src) {

  let line = document.querySelector('.stars-line')
  let star = document.createElement('img')
  
      star.setAttribute('src', src)
      star.classList.add('star')

      line.append(star)

      if(line.lastElementChild.getBoundingClientRect().left < document.querySelector('.categories').getBoundingClientRect().left) {
        line.prepend(star)
      }    
}

function sayRandomWord(arr){
  currentSrc = arr[counter]

  let audio = new Audio(arr[counter])
  audio.play()
}

function createResultImage(state, errors) {

  let success = document.createElement('div')
  let phrase  = document.createElement('p')
      success.classList.add('success')

    if(state) {
      phrase.innerText = 'Win!'

      let audio = new Audio('src/assets/audio/success.mp3')
      audio.play()
    } 
    if(!state) {
      success.classList.add('failure')
      phrase.innerText = `${errors} Error(s)!`

      let audio = new Audio('src/assets/audio/failure.mp3')
      audio.play()
    }

  let switcher = document.querySelector('.mode-switcher')

      switcher.remove()
      document.querySelector('.play-button').remove()
      success.prepend(phrase)
      document.querySelector('.categories').append(success)

      setTimeout(() => {
        categoryLinks.forEach(link => {
          link.classList.remove('category-link-active')
          if(link.innerText === 'Main Page') link.classList.add('category-link-active')
        })

        success.remove()
        document.querySelector('.header').append(switcher)
        main.lastElementChild.remove()
        playButton.remove()
        main.append(categories);
      }, 1500)
}

document.addEventListener('click', e => {
  revealCardsByClick(e)
  rotateCard(e)
  toggleSwitcher(e)
  startGame(e)
  closeAsideMenuOnDocumentClick(e)
  checkIfTrue(e)
})