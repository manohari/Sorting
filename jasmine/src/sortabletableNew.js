function Sorter() {
    "use strict";       
     
}
Sorter.sortedOrderList = [];
Sorter.prototype.init=function() {
    "use strict";
   var loop, rowCount,tBody,tRows,colCount,selectedColumn = '',sortOrder = ''; 
    tBody = document.getElementsByTagName('tbody')[0];
    tRows = tBody.rows;
    colCount = tRows[0].cells.length;
    for (loop = 0; loop < colCount; loop+= 1) {           
       tRows[0].cells[loop].onclick = new Function('sorter'+'.sorting('+loop+')');
    }
    for (rowCount = 0; rowCount < tRows.length-1; rowCount+= 1) {
        Sorter.sortedOrderList[rowCount]={};
    }
};
Sorter.prototype.sorting = function(colNumber) {
    "use strict";
    var rowCount,cssSymbol, loop, sortingColumn, tableElement, newTable, newTRows;
    this.tBody = document.getElementsByTagName('tbody')[0];
    this.tRows = this.tBody.rows;    
    this.colCount = this.tRows[0].cells.length;
    rowCount = this.tRows.length; 
    sortingColumn = this.tRows[0].cells[colNumber];
    for (loop = 0; loop < rowCount-1; loop+= 1){
        Sorter.sortedOrderList[loop].o = loop+1; 
        tableElement = this.tRows[loop+1].cells[colNumber].firstChild;                    
        Sorter.sortedOrderList[loop].value = (tableElement!==null) ? tableElement.nodeValue : '';
    }     
    
    if(this.selectedColumn === colNumber){
        Sorter.sortedOrderList.reverse(); 
        this.sortOrder = (this.sortOrder) ? false:true;
    }else{
        this.selectedColumn = colNumber; 
        Sorter.sortedOrderList.sort(compare); 
        this.sortOrder = false;
    }
    newTable = document.createElement('tbody');
    newTable.appendChild(this.tRows[0]);
    for (loop = 0; loop < rowCount-1; loop+= 1){ 
        newTRows = this.tRows[Sorter.sortedOrderList[loop].o-1].cloneNode(true);
        newTable.appendChild(newTRows);
    }
    document.getElementById('sorter').replaceChild(newTable,this.tBody);
};
function compare(f,c){
    "use strict";
    f = f.value;
    c = c.value;
    var i,n;
    i=parseFloat(f.replace(/(\$|\,)/g,''));
    n=parseFloat(c.replace(/(\$|\,)/g,''));
    if(!isNaN(i)&&!isNaN(n)) { 
        f = i;
        c = n;
    }
    return ( f > c ? 1 : ( f < c ? -1: 0))
}
