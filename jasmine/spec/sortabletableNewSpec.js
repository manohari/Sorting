describe("Sorter", function() {
   var sortObj,htmlTable,htmlTBody,htmlTRow,newCell,newText,row,col,rowLength,dataArray= [],colLength,tableId;
   sortObj = new Sorter();
   sortObj.sortedOrderList = [];
   beforeEach(function() {    
     htmlTable = document.createElement('table');
     htmlTable.id = 'sorter';
     htmlTBody = document.createElement('tbody');
     htmlTable.appendChild(htmlTBody);
     document.body.appendChild(htmlTable);
     tableId = document.getElementById('sorter'); 
     dataArray[0] = ['Name','SurName','Age','Region','LeadCount'];
     dataArray[1] = ['Smith', 'Jhon',34, 'SanFransisco', 10];
     dataArray[2] = ['Kevin', 'Kelly', 45, 'California', 21];
     dataArray[3] = ['Thomas', 'Moorse', 29, 'NorthAmerica', 27];
     dataArray[4] = ['Newton', 'Farrer', 48, 'Albama', 30];   
     rowLength = dataArray.length;
     colLength = dataArray[1].length;
     for (row=0; row < rowLength; row+= 1) {
         htmlTRow = tableId.insertRow(row);
         for (col=0; col < colLength; col+= 1) {
             newCell  = htmlTRow.insertCell(col);             
             newText  = document.createTextNode(dataArray[row][col]);             
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
      var numOfRows,numOfcol,loop,colData = [],ascendingSort,descendingSort,sortedTableData = [],sortColumn = 1;
      it("Sorting Descending Order Tested", function() {        
         tableId = document.getElementById('sorter');    
         expect(tableId).not.toBeNull();    
         
         numOfRows = document.getElementsByTagName('tbody')[0].rows.length;
         expect(numOfRows).toEqual(rowLength);  
         
         numOfcol = document.getElementsByTagName('tbody')[0].rows[0].cells.length;
         expect(numOfcol).toEqual(colLength);  
        //column that need to be sorted
        
        for (loop = 1; loop < numOfRows; loop+= 1) {
            colData[loop-1] = dataArray[loop][sortColumn];
        }
        //sorted data of input table based n column selection
       colData.sort();
       descendingSort = colData.reverse();
       sortObj.init(); 
       
       //descending order
       sortObj.sortOrder = 'desc';
       sortObj.sorting(sortColumn);
       for (row=1; row < rowLength; row+= 1) {         
         sortedTableData[row-1] = tableId.rows[row].cells[sortColumn].innerHTML;
         if(!isNaN(sortedTableData[row-1])) {
             sortedTableData[row-1] = Number(tableId.rows[row].cells[sortColumn].innerHTML);
         }
       }
       expect(descendingSort).toEqual(sortedTableData);
         
      });
      
      it("Sorting Ascending Order Tested", function() {        
         tableId = document.getElementById('sorter');    
         expect(tableId).not.toBeNull();    
         
         numOfRows = document.getElementsByTagName('tbody')[0].rows.length;
         expect(numOfRows).toEqual(rowLength);  
         
         numOfcol = document.getElementsByTagName('tbody')[0].rows[0].cells.length;
         expect(numOfcol).toEqual(colLength);  
        //column that need to be sorted
        
        for (loop = 1; loop < numOfRows; loop+= 1) {
            colData[loop-1] = dataArray[loop][sortColumn];
        }
        //sorted data of input table based n column selection
       ascendingSort = colData.sort();
       sortObj.init(); 
       
       //descending order
       sortObj.sortOrder = 'asc';
       sortObj.sorting(sortColumn);
       for (row=1; row < rowLength; row+= 1) {         
         sortedTableData[row-1] = tableId.rows[row].cells[sortColumn].innerHTML;
         if(!isNaN(sortedTableData[row-1])) {
             sortedTableData[row-1] = Number(tableId.rows[row].cells[sortColumn].innerHTML);
         }
       }
       expect(ascendingSort).toEqual(sortedTableData);
      });
      
     
  });
 
 
  
});