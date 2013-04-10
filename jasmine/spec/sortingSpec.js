describe("Table sorting Specs", function() {
    var sortObj,result;
    sObj = new Sorter();
    //Integer or number test cases
    it("Sorting Ascending Order()", function() {  
       expect(sObj.sortData([9,5,7,11])).toEqual([5,7,9,11]);
    });
    
    it("Sorting Descending Order()", function() {  
       expect(sObj.sortData([9,13,5,2],"desc")).toEqual([13,9,5,2]);
    });
    
    it("Sorting Ascending Order() without comapre function", function() {  
       expect(sObj.sortWithoutCompare([40,1,5,200])).toEqual([1,200,40,5]);
    });
    
    it("Sorting Descending Order() without compare function", function() {  
       expect(sObj.sortWithoutCompare([40,1,5,200],"desc")).toEqual([5,40,200,1]);
    });
    
    //strings test cases
    it("String Sorting Ascending Order()", function() {  
        result =  sObj.sortData(['Zenith','hp','lenova','ThinkPad']);
       expect(result).toEqual(['ThinkPad','Zenith','hp','lenova']);
    });
    
    it("String Sorting Descending Order()", function() {  
        result =  sObj.sortData(['Zenith','hp','lenova','ThinkPad'],'desc');
        expect(result).toEqual(['lenova','hp','Zenith','ThinkPad']);
    });
   
    it("String Sorting Ascending Order() Ignore CaseSensitivity", function() {  
        result =  sObj.ignoreCaseSensitive(['Zenith','hp','lenova','ThinkPad']);
       expect(result).toEqual(['hp','lenova','ThinkPad','Zenith']);
    });
    
    it("String Sorting Descending Order() Ignore CaseSensitivity", function() {  
        result =  sObj.ignoreCaseSensitive(['Zenith','hp','lenova','ThinkPad'],"desc");
       expect(result).toEqual(['Zenith','ThinkPad','lenova','hp']);
    });
    
});