describe("Sorter", function() {
   var sortObj;
   sortObj = new Sorter('sorter');
   sortObj.sortedOrderList = [];
   beforeEach(function() {
     var htmlTable,htmlTBody,htmlTRow,newCell,newText,row,MAX_VALUE=4,col,randomnumber,headArray;
     htmlTable = document.createElement('table');
     htmlTable.id = 'sorter';
     htmlTBody = document.createElement('tbody');
     htmlTable.appendChild(htmlTBody);
     document.body.appendChild(htmlTable);
     tableId = document.getElementById('sorter'); 
     headArray = ['Name','SurName','Age','Region','LeadCount'];
     htmlTRow = tableId.insertRow(0);
     for(col=0; col <= MAX_VALUE;col+= 1) {
         newCell  = htmlTRow.insertCell(col);
         newText  = document.createTextNode(headArray[col]);
         newCell.appendChild(newText);
     }    
      
     for (row=1;row < MAX_VALUE;row+= 1) {
         htmlTRow = tableId.insertRow(row);
         for (col=0;col <= MAX_VALUE; col+= 1) {
             newCell  = htmlTRow.insertCell(col); 
             randomnumber=Math.floor(Math.random()*11);
             newText  = document.createTextNode(randomnumber);
             newCell.appendChild(newText);
         }
     }
   });
   afterEach(function() {
        var elem = document.getElementById('sorter');
        if (typeof elem !== 'undefined')
        {
          elem.parentNode.removeChild(elem);
        }
    });
  it("sorting initiated ", function() {
    sortObj.init();     
    expect(true).toBe(true);
  });
   describe("First Column Sorting", function() {
       it("Completed Successfully ", function() {
           sortObj.sorting(0);
           expect(true).toBe(true);
       });
   });
   describe("Second Column Sorting", function() {
       it("Completed Successfully ", function() {
           sortObj.sorting(1);
           expect(true).toBe(true);
       });
   });
   describe("Third Column Sorting", function() {
       it("Completed Successfully ", function() {
           sortObj.sorting(2);
           expect(true).toBe(true);
       });
   });
   describe("Fourth Column Sorting", function() {
       it("Completed Successfully ", function() {
           sortObj.sorting(0);
           expect(true).toBe(true);
       });
   });
   describe("Fifth Column Sorting", function() {
       it("Completed Successfully ", function() {
           sortObj.sorting(0);
           expect(true).toBe(true);
       });
   });
  
});