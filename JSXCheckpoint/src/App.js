// import { Button, Stack } from "react-bootstrap"
// import Container from "react-bootstrap/Container"
// import AddBudgetModal from "./components/AddBudgetModal"
// import AddExpenseModal from "./components/AddExpenseModal"
// import ViewExpensesModal from "./components/ViewExpensesModal"
// import BudgetCard from "./components/BudgetCard"
// import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard"
// import TotalBudgetCard from "./components/TotalBudgetCard"
// import { useState } from "react"
// import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./contexts/BudgetsContext"
import image from "./imageInSrc.jpg"
import "./style.css"

function App() { 
  let imageStyle={
    width:'800px',
    height:'600px'
  }
  return (
    <>
<div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 className="title red">Your name here</h1>



<img style={imageStyle} src={image} />



<img style={imageStyle} src="/imageInPublic.jpg"/>

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
</>
  )  
}

export default App
