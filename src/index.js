import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { functionAllCards, removeAllCards, cloneCards } from './js/functionAllCards.js'
import cardList from './js/cardList.js'

import './css/style.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      alliance: 'olympus',
      candidatePool: [],
      deckPool: []
    }
  }

  // 勢力選択のセレクトボックスを変更した時
  onChangeAlliance(event) {
    this.setState({
      alliance: event.target.value,
    })
  }

  // 勢力選択のセレクトボタンを押下した時
  onClickAllianceSelectButton() {
    this.setState({
      candidatePool: cardList[this.state.alliance],
      deckPool: []
    })
  }

  // 候補カードをクリックした時
  onClickCandidatePoolCard(event) {
    const currentCardPath = event.target.getAttribute('src')



    let number = 0

    this.state.candidatePool.forEach((el) => {

      if(el.path === currentCardPath) {

        this.setState({
          deckPool: this.state.deckPool.concat(this.state.candidatePool[number])
        })




      } else {
        number++
      }
    })

    const deckPool = document.querySelector('.js-deckPool')
    const deckPoolCards = deckPool.querySelectorAll('.js-card')

    let num = 0

    Array.from(deckPoolCards).forEach((el) => {
      el.dataset.number = num
      num++
    })

  }

  onClickDeckPoolCard(event) {

    // console.log(event.currentTarget.dataset.number)

    const aaa = event.currentTarget.dataset.number

    console.log(aaa)

    console.log(this.state.deckPool)

    this.state.deckPool.splice(aaa, 1)

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
            <div className="cardList__body candidatePool js-candidatePool">
              {
                this.state.candidatePool.map((item) => {
                  return <div className="card js-card" onClick={(event) => this.onClickCandidatePoolCard(event)} key={item.path}>
                    <img src={item.path} alt={item.name} className="card__image" />
                  </div>
                })
              }
            </div>
          </div>
          <div className="cardList">
            <h2 className="cardList__title">Deck Pool</h2>
            <div className="cardList__body deckPool js-deckPool">
              {
                this.state.deckPool.map((item) => {
                  return <div className="card js-card" onClick={(event) => this.onClickDeckPoolCard(event)} key={item.path} data-number="0">
                    <img src={item.path} alt={item.name} className="card__image" />
                  </div>
                })
              }
            </div>
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
