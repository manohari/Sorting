describe("Table sorting Specs", function() {
    var sortAsc,sortDesc;
    describe("Ascending Order test suite",function(){
        it("Integer Testing", function() {
            sortAsc = sorting("asc","int");              
            expect(sortAsc).toBe(true);
     
        });
        it("String Testing", function() {
            sortAsc = sorting("asc","string");              
            expect(sortAsc).toBe(true);
     
        });
        it("Null or undefined Testing", function() {
            sortAsc = sorting("asc","");              
            expect(sortAsc).toBe(false);
     
        });
        it("No order testing", function() {
            sortAsc = sorting();              
            expect(sortAsc).toBe(false);
     
        });
        
    });  
    describe("Descending Order test suite", function() { 
        it("Integer Testing", function() {
            sortDesc = sorting("desc","int");              
            expect(sortDesc).toBe(true);
     
        });
        it("String Testing", function() {
            sortDesc = sorting("desc","string");              
            expect(sortDesc).toBe(true);
     
        });
        it("Null or undefined Testing", function() {
            sortDesc = sorting("desc","");              
            expect(sortDesc).toBe(false);
     
        });
        it("No order testing", function() {
            sortDesc = sorting();              
            expect(sortDesc).toBe(false);
     
        });
    });
  
 });
 