import { useState } from "react";
import Practice from "./Practice";
import Practice2 from "./Practice2";
import { list } from "./Data";

function App() {

const [listData, setListData] = useState(list)
const [addedData, setAddedData] = useState([])
const [taskCompleted, setTaskCompleted] = useState(true);

const handleClick = (id) => {
    const clickedItem = listData.filter((item) => item.id === id)
    setAddedData([...addedData, ...clickedItem])
    setTaskCompleted(!taskCompleted)
}

const handleAddAll = () => {
  setAddedData(list);
}


  return (
    <div className="App">
      <div className="container">
            <Practice data = {list} handleClick = {handleClick} addAll = {handleAddAll} />
            <Practice2 completedData = {addedData}/>
      </div>  
    </div>
  );
}

export default App;
