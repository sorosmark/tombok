//1.feladat
dobasok = [];
for (let index = 0; index < 100; index++) {
    dobasok.push(Math.floor(Math.random() * 6) + 1);
}
console.log(dobasok);

let osszeg = 0;
for (let index = 0; index < dobasok.length; index++) {
    osszeg += dobasok[index];
}
console.log(osszeg / dobasok.length);

let atlagfelett = 0;
for (let index = 0; index < dobasok.length ; index++) {
    if (dobasok[index] > osszeg / dobasok.length) {
        atlagfelett++;
    }
}
console.log(atlagfelett);


//2.feladat
oszeg = 0;
let tomb = new Array(100);
for (let index = 0; index < 100; index++) {
    tomb[index] = Math.floor(Math.random() * 101) -50;
    oszeg += tomb[index];
}
console.log(tomb);
//2.a
let legnagyobb = Math.max(...tomb);
console.log(legnagyobb);

//2.b
console.log(oszeg);

//2.c
paros = 0;
paratlan = 0;
for (let index = 0; index < tomb.length; index++) {
    if (tomb[index] % 2 == 0) {
        paros++;
    }
    else paratlan++;
}
console.log(paros, paratlan);

//2.d
let van = false;
for (let index = 0; index < tomb.length; index++) {
    if (tomb[index] % 7 == 0) {
        van = true;
    }
}
if (van == true) {
    console.log("van");
}
else console.log("nincs");

//2.e
negativ = false;
for (let index = 0; index < tomb.length; index++) {
    if (tomb[index - 1] < 0 && tomb[index + 1] < 0) {
        negativ = true;
    }
}
if (negativ == true) {
    console.log("van");
}
else console.log("nincs");

//2.f
nagyobb = false;
for (let index = 0; index < tomb.length; index++) {
    if (tomb[index] > tomb[index - 1] + tomb[index + 1]) {
        nagyobb = true;
    }
}
if (nagyobb == true) {
    console.log("van");
}
else console.log("nincs");

//2.g
oszthato = []
for (let index = 0; index < tomb.length; index++) {
    if (tomb[index] % 3 == 0 && tomb[index] % 5 != 0) {
        oszthato.push(tomb[index]);
    }
}
const utolsoelem = oszthato[oszthato.length - 1];
console.log(utolsoelem);

//2.h
let db = 0;
let harommal = false;
for (let i = 0; i < tomb.length; i++) {
    db = 0;
    for (let j = 0; j < tomb.length; j++) {
        if (tomb[i] == tomb[j]) {
            db
        }
    }
}
    if (db >= 3) {
    harommal = true;
}
if (harommal == true) {
    console.log("van");
}
else console.log


//2.i
azonos = false;
for (let index = 0; index < tomb.length; index++) {
    if (tomb[index] == tomb[index - 1] || tomb[index] == tomb[index + 1]) {
        azonos = true;
    }
}
if (azonos == true) {
    console.log("van");
}
else console.log("nincs");

//2.j
tobbszoros = [];
for (let index = 0; index < tomb.length; index++) {
    if (tomb[index] % 10 == 0) {
        tobbszoros.push(index);
    }
}
console.log(tobbszoros);

//2.k
let szamok = 0;
for (let index = 0; index < dobasok.length; index++) {
    osszeg += dobasok[index];
}
console.log(osszeg / dobasok.length);

let atlagalatt = 0;
for (let index = 0; index < tomb.length ; index++) {
    if (tomb[index] < szamok / tomb.length) {
        atlagalatt++;
    }
}
console.log(atlagalatt);