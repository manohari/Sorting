describe("Sorter", function() {
   var sortObj;
   sortObj = new Sorter('sorter');
      
   beforeEach(function() {
     var htmlTable,htmlTBody,htmlTRow,newCell,newText,row,MAX_VALUE=4,col,randomnumber;
     htmlTable = document.createElement('table');
     htmlTable.id = 'sorter';
     htmlTBody = document.createElement('tbody');
     htmlTable.appendChild(htmlTBody);
     document.body.appendChild(htmlTable);
     tableId = document.getElementById('sorter');     
     for (row=0;row <= MAX_VALUE;row+= 1) {
         htmlTRow = tableId.insertRow(row);
         for (col=0;col <= MAX_VALUE; col+= 1) {
             newCell  = htmlTRow.insertCell(col); 
             randomnumber=Math.floor(Math.random()*11);
             newText  = document.createTextNode(randomnumber);
             newCell.appendChild(newText);
         }
     }
   });
  it("sorting initiated", function() {
    sortObj.init();
    expect(true).toBe(true);
  });
});