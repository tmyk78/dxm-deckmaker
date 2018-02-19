import React from 'react';

function SelectAlliance() {
  return(
    <div>
      <p className="lead">勢力を選択してください</p>
      <div className="selectAlliance">
        <div className="selectAlliance__selectBox">
          <select name="" id="" className="selectAlliance__select">
            <option value="olympus">オリンポス</option>
            <option value="luxor">ルクソール</option>
            <option value="asgard">アスガルド</option>
            <option value="izumo">イズモ</option>
            <option value="trinity">トリニティ</option>
          </select>
        </div>
        <div className="selectAlliance__buttonBox">
          <button
            className="selectAlliance__button js-selectAllianceButton"
            onClick={ () => console.log(document.querySelector('.selectAlliance__select').value)}
          >選択</button>
        </div>
      </div>
    </div>
  );
}

export default SelectAlliance;
