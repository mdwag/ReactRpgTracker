import logo from './logo.svg';
import './App.css';
import InputArea from './components/InputArea'
import FullList from './components/FullList'
import React, {useState} from 'react';

function App() {
  const [listItems, setListItems] = useState([]);
  const [currentTurn, setCurrentTurn] = useState(0);
  const submitForm = (formValue, scoreValue) => {
    setListItems((prevList) => [{isTurn: false, score: scoreValue, text: formValue, id: Math.random().toString()}, ...prevList]);
    sortList();
  }
  const changeTurn = () => {
    setCurrentTurn((pastTurn) => {
      if (pastTurn < listItems.length - 1){
        return pastTurn + 1;
      } else {
        return 0;
      }
    });
      sortList();
  }

  const deleteItem = (itemId) => {
    setListItems((prevList) => {
      let newList = prevList.filter((item)=> (item.id !== itemId))
      let foundTurn = false;
      for (let i = 0; i < newList.length; i++){
        if (newList[i].isTurn === true){
          setCurrentTurn(i);
          foundTurn = true;
        } 
      }
      if (foundTurn === false){
        setCurrentTurn(0);
        sortList();
      }
      return newList;
    })
  }
  const sortList = () => {
    setListItems((prevList) => {
      let sortedArr = prevList.slice();
      sortedArr.sort((a, b) => {
        return b.score - a.score;
      })
      if (sortedArr.length > 0){
      sortedArr[currentTurn].isTurn = true;
  
      for (let i = 0; i < sortedArr.length; i++){
        if (i !== currentTurn){
          sortedArr[i].isTurn = false;
        }
      }
      }
      return sortedArr;
    })
   }

  return (
    <div className="App">
      <InputArea onSubmitForm={submitForm} onSortList={sortList}/>
      <FullList listData={listItems} onDeleteClickApp={deleteItem}/>
      {listItems.length > 0 && <i className="fas fa-arrow-right fa-5x"onClick={changeTurn} id='arrow'></i>}
    </div>
  
  );
}

export default App;
