import React from "react";
import { useState } from 'react'
import './App.css'
import Checkbox from './components/Checkbox'

function App() {

  // Je créé un état(state) pour pousser mes éléments de ma todo dans un tableau
  const [tab, setTab] = React.useState([]);
  // Je crée un état pour mon formulaire d'ajout
  const [input, setInput] = useState("")

  // INPUT CHANGE
  const handleChange = (event) => {
    setInput(event.target.value);
  }

  // INPUT SUBMIT
  const handleSubmit = (event) => {
    // j'empeche le reffrachissement de ma page
    event.preventDefault();
    if (input !== "") {
        // Je copie l'emplacement de mon tableau de mon état = tab
        const newTab = [...tab];
        // Je récupère l'input et je le formatise pour être envoyé à mon array
        let newData = { "title": input, "isDone": false }; 
        // J'ajoute ma value de mon input dans mon array
        newTab.push(newData)
        // mise à jour du state avec la copie
        setTab(newTab);
        setInput("")
    }
  }

  // CHECKBOX
  const handleCheck = (event) => {
    const newTab = [...tab];
    for (const element of newTab) {
      if (element.title === event.target.value ) {
        if (element.isDone === false) {
          element.isDone === true
        } else if (element.isDone === true) {
          element.isDone === false
        }
      }
    }
  }

  return (
    <>
      <header>
        <div className="container"> 
            <h1>To do list</h1>        
        </div>
      </header>
      <main>
        <div className="container">

          <div className="todo-list_wrapper">
            <div className="todo-list_results">
              <h2>This week</h2>
              <ul style={{display: tab.length === 0 ? "none" : "flex"}}>
                   <Checkbox tab={tab} setTab={setTab} handleCheck={handleCheck}/>
              </ul>
            </div>

            <form onSubmit={handleSubmit}>
              <input placeholder="What do you want accomplish today?" value={input} onChange={handleChange} type="text"/>
              <button type="submit">+</button>
            </form>
          </div>  

          <div className="todo-list_wrapper todo-list_done">
            <div className="todo-list_results">

            </div>           
          </div>

         </div>
      </main>
      <footer>
        <div className="container">
          Made with ♥ by Axelle for Le Reacteur
        </div>
      </footer>
    </>
  )
}

export default App
