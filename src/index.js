import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import olympus from './components/cardList/olympus.js'


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

  onClick(e) {

  }

  render() {
    return (
      <div>
        <h1>DXM DeckMaker</h1>
        <select onChange={(event) => this.onChangeAlliance(event)}>
          <option value="olympus">オリンポス</option>
          <option value="trinity">トリニティ</option>
          <option value="test">test</option>
          <option value="aaa">aaa</option>
        </select>
        <button value={this.state.alliance} onClick={(e) => this.onClick(e)}>セレクト！</button>
        <div className="cardPool">
          {olympus.map((card) =>
            <Test card={card} key={card.path} />
          )}
        </div>
      </div>
    )
  }
}

const Test = (props) => {
  const aaa = props.card.path
  console.log(aaa)
  return(
    <div>
      {aaa}
      <img src={aaa} alt="" />
    </div>
  )
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
