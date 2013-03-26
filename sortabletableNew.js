var sortTable=function() {
    "use strict";
    function sorter(id) {        
        var tableId,tBody,tRows,colCount;
        this.n = id; this.a = [];this.selectedColumn,this.sortOrder;
        
    }
    sorter.prototype.init=function(t,f) {
        var a,i,c,x,l,rowCount,colLength,rows;
        this.tableId = document.getElementById(t);
        this.tBody = document.getElementsByTagName('tbody')[0];
        this.tRows = this.tBody.rows;
        this.colCount = this.tRows[0].cells.length;
        for (i = 0; i < this.colCount; i+= 1) {           
           this.tRows[0].cells[i].onclick = new Function(this.n+'.sorting(this.cellIndex)');
           //this.tRows[0].cells[i].onclick = sorting();
        }
        for (rowCount = 0; rowCount < this.tRows.length-1; rowCount+= 1) {
            this.a[rowCount]={};
        }
    }
    sorter.prototype.sorting = function(colNumber) {
            var rowCount,c,i,x,v,newTable,r;
            this.tBody=this.tableId.getElementsByTagName('tbody')[0];
            this.tRows=this.tBody.rows;
            rowCount = this.tRows.length; 
            x = this.tRows[0].cells[colNumber];
            for (i = 0; i < rowCount-1; i++){
                this.a[i].o = i+1; 
                v = this.tRows[i+1].cells[colNumber].firstChild;
                        
                this.a[i].value = (v!=null)?v.nodeValue:''
            }
         
            for ( i=0; i<this.colCount; i+=1 ){
                 c = this.tRows[0].cells[i];
                 c.className='head';
            }
           if(this.selectedColumn === colNumber){
                this.a.reverse(); 
                x.className = (this.sortOrder)?'asc':'desc';
                this.sortOrder = (this.sortOrder)?false:true
            }else{
                this.selectedColumn = colNumber; 
                this.a.sort(compare); 
                x.className='asc'; 
                this.sortOrder=false
            }
            newTable = document.createElement('tbody');
            newTable.appendChild(this.tRows[0]);
            for ( i = 0; i < rowCount-1; i+= 1){      
                 
                r = this.tRows[this.a[i].o-1].cloneNode(true);
                newTable.appendChild(r); 
                r.className = ( i%2 === 0) ? 'even' : 'odd';
            }
            document.getElementById('sorter').replaceChild(newTable,this.tBody);
    }
    function compare(f,c){
        f=f.value,c=c.value;
        var i=parseFloat(f.replace(/(\$|\,)/g,'')),n=parseFloat(c.replace(/(\$|\,)/g,''));
        if(!isNaN(i)&&!isNaN(n)){f=i,c=n}
        return (f>c?1:(f<c?-1:0))
    }
   return{sorter:sorter}
}();