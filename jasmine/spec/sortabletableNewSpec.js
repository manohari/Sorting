describe("Sorter", function() {
   var sortObj;
   sortObj = new Sorter('sorter');
   sortObj.sortedOrderList = [];
   beforeEach(function() {
     var htmlTable,htmlTBody,htmlTRow,newCell,newText,row,MAX_VALUE=4,col,randomData,headArray;
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
             if (col === 2 || col === 4) {
                randomData = Math.floor(Math.random()*11);
             } 
             else {
                randomData= Math.random().toString(36).substr(2,16);
             }
             newText  = document.createTextNode(randomData);
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
  it("Check if table exist and then initiate sorting", function() {
     var numOfRows,tableId,numOfcol;
     tableId = document.getElementById('sorter');
     numOfRows = document.getElementsByTagName('tbody')[0].rows.length;
     numOfcol = document.getElementsByTagName('tbody')[0].rows[0].cells.length;
     expect(tableId).toBeDefined();
     expect(numOfRows).toEqual(4);
     expect(numOfcol).toEqual(5);
     sortObj.init();   
     
  });
   describe("First Column Descending Order Sorting", function() {
       it("Completed Successfully ", function() {
           //if sortObj.sortOrder is true then descending order sorting holds good
           sortObj.selectedColumn = 0;
           sortObj.sorting(0);
           expect(sortObj.sortOrder).toBeTruthy();
       });
   });
   describe("Second Column Ascending Order Sorting", function() {
       it("Completed Successfully ", function() {   
           //if sortObj.sortOrder is false then ascending order sorting holds good        
           sortObj.sorting(1);
           expect(sortObj.sortOrder).toBeFalsy();
       });
   });
   describe("Third Column Ascending Order Sorting", function() {
       it("Completed Successfully ", function() {
           sortObj.sorting(2);
           expect(sortObj.sortOrder).toBeFalsy();
       });
   });
   describe("Fourth Column Ascending Order Sorting", function() {
       it("Completed Successfully ", function() {
           sortObj.sorting(3);
           expect(sortObj.sortOrder).toBeFalsy();
       });
   });
   describe("Fifth Column Descending Order Sorting", function() {
       it("Completed Successfully ", function() {
           sortObj.selectedColumn = 4;
           sortObj.sorting(4);
           expect(sortObj.sortOrder).toBeTruthy();
       });
   });
  
});