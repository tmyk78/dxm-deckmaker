import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { functionAllCards, removeAllCards, cloneCards } from './js/functionAllCards.js'
import cardList from './js/cardList.js'

import './css/style.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      alliance: "olympus"
    }
  }

  onChangeAlliance(event) {
    this.setState({
      alliance: event.target.value
    })
  }

  onClickAllianceSelectButton() {
    const cardPool = document.querySelector('.cardPool')

    functionAllCards(removeAllCards)

    cardList[this.state.alliance].forEach(item => {
      cardPool.insertAdjacentHTML('beforeend',
      `<div class="card js-card"><img src="${item.path}" alt="${item.name}" class="card__image"></div>`
      )
    }, false)

    functionAllCards(cloneCards)
  }

  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <h1 className="title">DXM DeckMaker</h1>
          <div className="selectBox">
            <select className="selectBox__select" onChange={(event) => this.onChangeAlliance(event)}>
              <option value="olympus">オリンポス</option>
              <option value="trinity">トリニティ</option>
            </select>
          </div>
          <button className="button" onClick={() => this.onClickAllianceSelectButton()}>セレクト</button>
        </header>
        <div className="content">
          <div className="cardList">
            <h2 className="cardList__title">Card Pool</h2>
            <div className="cardList__body cardPool"></div>
          </div>
          <div className="cardList">
            <h2 className="cardList__title">Deck Pool</h2>
            <div className="cardList__body deckPool"></div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// # ネーミング情報

// ## 勢力名 alliance
// オリンポス olympus
// ルクソール luxor
// アスガルド asgard
// イズモ izumo
// トリニティ trinity
// ニュートラル neutral
// （ティターンズ） titans
