import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { functionAllCards, removeAllCards, cloneCarda } from './components/functionAllCards.js'

import cardList from './components/cardList.js'

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

  onClick() {
    const cardPool = document.querySelector('.cardPool')

    functionAllCards(removeAllCards)

    cardList[this.state.alliance].forEach(item => {
      cardPool.insertAdjacentHTML('beforeend',
      `<p class="card js-card"><img src="${item.path}" alt="${item.name}" width="100" height="auto"></p>`
    )
  }, false)

    functionAllCards(cloneCarda)
  }

  render() {
    return (
      <div>
      <h1>DXM DeckMaker</h1>
    <select onChange={(event) => this.onChangeAlliance(event)}>
  <option value="olympus">オリンポス</option>
      <option value="trinity">トリニティ</option>
      </select>
      <br />
      <button onClick={() => this.onClick()}>セレクト！</button>
    <div className="cardPool">
      <h2>Card Pool</h2>
    </div>
    <div className="deckPool">
      <h2>Deck Pool</h2>
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
