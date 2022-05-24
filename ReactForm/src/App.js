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

function App() { 

  return (
    <html>
    <body>
    <nav style={{backgroundColor: '#2c7996'}} class="navbar navbar-expand-lg fs-3 navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav pe-3">
          <li class="nav-item ps-3 pe-3">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item  ps-3 pe-3">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item  ps-3 pe-3">
            <a class="nav-link" href="#">Work</a>
          </li>
          <li class="nav-item  ps-3 pe-3">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      
        <form style={{marginInlineStart:'35%'}} class="d-flex justify-content-center text-center">
        <input class="form-control pe-3 me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
  
      </div>
    </div>
  </nav>



  <div class="d-flex container-fluid justify-content-center mt-4 p-3">
<form id="about" class="w-75">
{/* //firstname */}
<div class="row m-3 ">
  <div class="col-2">
    <label for="firstName" class="col-form-label">First Name</label>
  </div>
  <div class="col-9">
  <input id="firstName" class="form-control" type="text" placeholder="First Name" aria-label="default input example"/>
  </div>
</div>

<div class="row m-3 ">
  <div class="col-2">
    <label for="lastName" class="col-form-label">Last Name</label>
  </div>
  <div class="col-9">
  <input id="lastName" class="form-control" type="text" placeholder="Last Name" aria-label="default input example"/>
  </div>
</div>

<div class="row m-3 ">
  <div class="col-2">
    <label for="birthDate" class="col-form-label">Birth Date</label>
  </div>
  <div class="col-9">
  <input id="birthDate" class="form-control" type="date" aria-label="default input example"/>
  </div>
</div>

<div class="row m-3 ">
  <div class="col-2">
    <label for="gender" class="col-form-label">Gender</label>
  </div>
  <div class="col-9">
  <select id="gender" class="form-select" aria-label="default select example">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
  </select>
  </div>
</div>

<div class="row m-3 ">
  <div class="col-2">
    <label for="familialSituation" class="col-form-label ">Situation</label>
  </div>
  <div class="col-9">
  <select id="familialSituation" class="form-select" aria-label="default select example">
  <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="pacs">PACS</option>
		        <option value="divorced">Divorced</option>
            <option value="separated">Separated</option>
            <option value="widower">Widower</option>
  </select>
</div>
</div>

  <div class="row m-3 ">
  <div class="col-2">
    <label for="address" class="col-form-label">Address</label>
  </div>
  <div class="col-9">
  <input id="address" class="form-control" type="text" placeholder="Address" aria-label="default input example"/>
  </div>
</div>

<div class="row m-3 ">
  <div class="col-2">
    <label for="phone" class="col-form-label">Phone</label>
  </div>
  <div class="col-9">
  <input id="phone" class="form-control" type="text" placeholder="Phone" aria-label="default input example"/>
  </div>
</div>

<div class="row m-3">
  <div class="col-2">
    <label for="email" class="col-form-label">Email</label>
  </div>
  <div class="col-9">
  <input id="email" class="form-control" type="email" placeholder="Email" aria-label="default input example"/>
  </div>
</div>

  <div class="col-11 mt-4 ms-4 pe-5 text-end">
    <button style={{width:'85px'}} class="btn btn-primary me-2" type="submit">Submit</button>
    <button style={{width:'85px'}} class="btn btn-secondary ms-2" type="reset">Reset</button>
  </div>




</form>
</div>


</body>

</html>
  )  
}

export default App
