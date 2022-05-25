var totQty = 0;
var totUprice=0;
var totPrice=0;

function refresh(){
    totQty=0;
    totUprice=0;
    totPrice=0;
    document.getElementById('totQty').innerHTML=totQty;
    document.getElementById('totUprice').innerHTML=totUprice;
    document.getElementById('totPrice').innerHTML=totPrice;
}

 function setTotals(){

    var table= document.getElementById('table');
    console.log(table)
   for(var i = 1, row; row= table.rows[i];i++){
     
       //console.log(row.cells[1].innerHTML);
        totQty +=  Number(row.cells[1].innerHTML);
        totUprice += Number(row.cells[2].innerHTML);
        totPrice += Number(row.cells[3].innerHTML);
    }
   document.getElementById('totQty').innerHTML=totQty;
   document.getElementById('totUprice').innerHTML=totUprice;
   document.getElementById('totPrice').innerHTML=totPrice;

 }

    document.addEventListener("DOMContentLoaded", function(e){
        var table = document.getElementsByTagName("tbody")[0];
        for (var i = 0, row; row = table.rows[i]; i++) {
        //    row.cells[3] = row.cells[2]*row.cells[1];
        var qty = Number(row.cells[1].innerHTML);
        var uPrice = Number(row.cells[2].innerHTML);
           row.cells[3].innerHTML = qty * uPrice;
         }

         setTotals();
    });



function addItem(j){
    var index = j.parentNode.parentNode.rowIndex;
    var qtyCell = document.getElementById("table").rows[index].cells[1];
    var newQtyval = Number(qtyCell.innerHTML)+1;
     qtyCell.innerHTML = newQtyval.toString();

     var uPrice = Number(document.getElementById("table").rows[index].cells[2].innerHTML);
     document.getElementById("table").rows[index].cells[3].innerHTML=newQtyval*uPrice;
    // console.log(totQty)
      refresh();
      setTotals();
    //  refresh();
}

function removeItem(j){
    var index = j.parentNode.parentNode.rowIndex;
    var qtyCell = document.getElementById("table").rows[index].cells[1];
    // console.log(qtyCell);
    var newQtyval = Number(qtyCell.innerHTML)-1;
     qtyCell.innerHTML = newQtyval.toString();

     var uPrice = Number(document.getElementById("table").rows[index].cells[2].innerHTML);
    //  console.log(uPrice);
     document.getElementById("table").rows[index].cells[3].innerHTML=newQtyval*uPrice;
     refresh();
     setTotals();
}

function deleteItem(j){
    var index = j.parentNode.parentNode.rowIndex;
    var table= document.getElementById('table');
    table.deleteRow(index); 
    refresh();
    setTotals();
}

function likeItem(j){
    var index = j.parentNode.parentNode.rowIndex;
    var likeCell = document.getElementById("table").rows[index].cells[7].childNodes[0];
  //  console.log(likeCell);
        if(likeCell.getAttribute("class") == "fs-3 fa-solid fa-heart text-secondary")
    {
    likeCell.setAttribute("class", "fs-3 fa-solid fa-heart text-danger");
  //  console.log(likeCell);
    }
    else
    {
        likeCell.setAttribute("class", "fs-3 fa-solid fa-heart text-secondary");
      //  console.log(likeCell);
    }
}