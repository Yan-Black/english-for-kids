export class Card {
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
        let playButton    = document.querySelector('.play-button')

            cardContainer.classList.add('category-word-container')

            cardInner.classList.add('category-inner')
            cardFront.classList.add('face')
            cardFront.classList.add('category-front')
            cardBack.classList.add('face')
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