let betuk = new Set(['a', 'b', 'c', 'd']); 

for (let elem of betuk) { 
    console.log(elem); 
   } 

betuk.add('e'); 

let fBetu = "f";
betuk.add(fBetu);

for (let elem of betuk) { 
    console.log(elem); 
   } 


betuk.forEach(function(ertek) { 
    console.log(ertek); 
}); 

cBetu = "c";
if (betuk.has(cBetu)) { 
    console.log(`Ez az elem (${cBetu}) a halmazban van!`); 
   } 

betuk.delete("e");
for (let elem of betuk) { 
    console.log(elem); 
   } 

//values
let iterator = betuk.values(); 
console.log(iterator)
for (let index = 0; index < betuk.size; index++) {
    console.log(iterator.next().value);
}
