 sorting = function(order,type) { 
     var htmlTable,htmlTBody,htmlTRow,newCell,newText,row,col,rowLength,dataArray= [],colLength,numOfRows,numOfcol,loop,colData = [];
     if (type === 'int') {
         sortColumn = 2;
     }   else if(type === 'string') {
         sortColumn = 0;
     }
     else {         
         return false;
     }
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
    tableId = document.getElementById('sorter'); 
    numOfRows = document.getElementsByTagName('tbody')[0].rows.length;
    numOfcol = document.getElementsByTagName('tbody')[0].rows[0].cells.length;
    for (loop = 1; loop < numOfRows; loop+= 1) {
        colData[loop-1] = dataArray[loop][sortColumn];
     }
        //sorted data of input table based n column selection
    if (order === "asc") {
        colData.sort();
        tableId.parentNode.removeChild(tableId);
        return true;
    }            
    else if (order === "desc") {
        colData.sort();
        colData.reverse();
        tableId.parentNode.removeChild(tableId);
        return true;
       }
       else {
           return false;
       }
   };
  