const Checkbox = ({tab, setTab, handleCheck}) => {

    return (
        <>
        {tab.map((element, index) => {
            return <li key={index}>
            <div>
              <input type="checkbox" onChange={handleCheck} value={element.title} checked={element.isDone}/>
              <label><span style={{textDecoration: element.checked ? "line-through" : "unset"}}>{element.title} </span></label>
            </div> 
            <button onClick={() => {
                const newArray = [
                  ...tab.slice(0, index), // on garde les elements avant celui à supprimer
                  ...tab.slice(index + 1) // on garde les elements après celui à supprimer
                ];
                setTab(newArray); // Affiche mon nouveau tableau
            }}>X</button></li>  
          })}  
        </>
    )

}

export default Checkbox