export const functionAllCards = (callback) => {
  const allCards = document.querySelectorAll('.js-card')
  callback(allCards)
}

export const removeAllCards = (allCards) => {
  Array.from(allCards).forEach((element) => {
    element.remove()
  })
}

export const cloneCarda = (allCards) => {
  const deckPool = document.querySelector('.deckPool')

  Array.from(allCards).forEach((element) => {

    element.addEventListener('click', (event) => {

      // カードプール内のカードをデッキプールにクローン
      const cloneCard = event.currentTarget.cloneNode(true)
      deckPool.appendChild(cloneCard)

      // デッキプール内のカードを削除
      cloneCard.addEventListener('click', (event) => {
        event.currentTarget.remove();
      }, false)

    }, false)
  })
}
