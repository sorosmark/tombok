let szam = new Set ([]);
let szam2 = new Set ([]);

for (let index = 0; szam.size < 20; index++) {
    szam.add(Math.floor(Math.random() * 100) + 1);
}

for (let index = 0; szam2.size < 20; index++) {
    szam2.add(Math.floor(Math.random() * 100) + 1);
}

console.log(szam);
console.log(szam2);

//10.a
console.log(szam.difference(szam2))

//10.b
console.log(szam.intersection(szam2))

//10.c
console.log(szam.union(szam2))

//10.d
console.log(szam.isSubsetOf(szam2))

//10.e
const a = prompt("Adjon meg egy számot: ")
let van = false;
for (let index = 0; index < szam.size; index++) {
    if (szam.has(a)) {
        van = true;
        break
    }
    else
    { 
        van = false;
    }
}


if (van === true) {
    console.log("van ilyen szam")
}
else console.log("nincs ilyen szam");