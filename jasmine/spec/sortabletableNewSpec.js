describe("Table sorting Specs", function() {
    var sortAsc,sortDesc,SortObj;
    SortObj = new Sort();
    describe("Ascending Order test suite",function(){
       
        
        it("Integer Testing", function() {
            SortObj.sorting("asc","int"); 
            expect(SortObj.isDataArray).toBeTruthy();             
            expect(SortObj.sortedAscending).toBe(true);
     
        });
        it("String Testing", function() {
            SortObj.sorting("asc","string");  
            expect(SortObj.isDataArray).toBeTruthy();              
            expect(SortObj.sortedAscending).toBe(true);
     
        });
        it("Null or undefined Testing", function() {
            sortData = SortObj.sorting("asc",""); 
            expect(SortObj.isDataArray).toBeTruthy();               
            expect(sortData).toBe(false);
     
        });
        it("Negative testing", function() {
            sortData = SortObj.sorting();       
            expect(sortData).toBe(false);
     
        });
        
        
    });  
    describe("Descending Order test suite", function() { 
        it("Integer Testing", function() {
            SortObj.sorting("desc","int");
            expect(SortObj.isDataArray).toBeTruthy();                
            expect(SortObj.sortedDescending).toBe(true);
     
        });
        it("String Testing", function() {
            SortObj.sorting("desc","string"); 
            expect(SortObj.isDataArray).toBeTruthy();               
            expect(SortObj.sortedDescending).toBe(true);
     
        });
        it("Null or undefined Testing", function() {
            sortData = SortObj.sorting("desc","");  
            expect(SortObj.isDataArray).toBeTruthy();              
            expect(sortData).toBe(false);
     
        });
        it("Negative testing", function() {
            sortData = SortObj.sorting();              
            expect(sortData).toBe(false);
     
        });
    });
  
 });
 