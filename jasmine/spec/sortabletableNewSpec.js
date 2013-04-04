describe("Sorter", function() {
   var sortObj;
   sortObj = new Sorter();
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
  describe("Table sorting Specs", function() {
      it("Table Exist", function() {
         var tableId;
         tableId = document.getElementById('sorter');    
         expect(tableId).toBeDefined();    
         
      });
      it("Rows Exist", function() {
         var numOfRows;
         numOfRows = document.getElementsByTagName('tbody')[0].rows.length;
         expect(numOfRows).toEqual(4);    
         
      });
      it("Columns Exist", function() {
         var numOfcol;
         numOfcol = document.getElementsByTagName('tbody')[0].rows[0].cells.length;
         expect(numOfcol).toEqual(5);   
         
      });
      it("Sorting initiated and sorted", function() {             
             sortObj.init();   
           //if sortObj.sortOrder is true then descending order sorting holds good           
             sortObj.selectedColumn = 0;
             sortObj.sorting(0);               
             expect(sortObj.sortOrder).toBeTruthy();
           
       });
  });
 
 
  
});