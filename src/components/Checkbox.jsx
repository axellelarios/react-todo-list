const Checkbox = ({isChecked, setIsChecked, tab, setTab, handleCheck}) => {

    return (
        <>
        {tab.map((element, index) => {
            return <li key={index}>
              <input type="checkbox" onChange={handleCheck} checked={isChecked}/>
              <label><span style={{textDecoration: isChecked ? "line-through" : "unset"}}>{element} </span></label>
              
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