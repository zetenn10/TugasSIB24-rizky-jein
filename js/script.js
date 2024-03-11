// alert('Hello World');


/*
alert('Hello World'); console.log('statement baris kedua');

console.log('statement 1 baris')
*/


// // Komentar 1 baris
// alert('Hello World'); console.log('statement baris kedua');

// /*
// Komentar multi
// baris
// */
// console.log('statement 1 baris')


/*
var fullName = "Rizky Jein Nur Aulia"

document.write(fullName)
*/



/*
var fullName = "Rizky Jein Nur Aulia"

fullName = "Nanami Kento"

fullName = "Yamada Akito"

document.write(fullName)
*/


/*
var fullName = "Rizky Jein Nur Aulia"

fullName = "Nanami Kento"

fullName = "Yamada Akito"

document.write(fullName)
document.write('<br>')
document.write(fullName)
document.write('<br>')
document.write(fullName)
document.write('<br>')
document.write(fullName)
document.write('<br>')
document.write(fullName)
document.write('<br>')
document.write(fullName)
document.write('<br>')
document.write(fullName)
document.write('<br>')
document.write(fullName)
*/

/*
let fullName = "Rizky Jein Nur Aulia"

fullName = "Iky"

document.write(fullName)
*/


/*
const fullName = "Rizky Jein Nur Aulia"

fullName = "Iky"

document.write(fullName)
*/


/*
var x = 10
if (true) {
    var x = 20;
    console.log("Nilai x di dalam blok:", x);
}
console.log("Nilai x di luar blok", x)
*/

/*
let y = 10;
if (true) {
    let y = 20;
    console.log("Nilai x di dalam blok:", y);
}
console.log("Nilai x di luar blok", y)
*/


/*
let bulat = 25

let desimal = 25.2

document.write(bulat)
document.write('<br>')
document.write(desimal)
document.write('<br>')
document.write("Hasil Penjumlahan = ")
document.write(desimal + bulat)
*/


/*S
let bulat = 25 
let string = 'a'

document.writeln(bulat/0)
document.writeln('<br>')
document.writeln(string/5)
*/

/*
let bulat = 12312321432423423534534534523424234234n;

document.writeln(bulat)
*/


/*
let text = "Rizky Jein";

document.writeln(text)
*/


/*
let admin = true
let perbandingan = 15 > 9

document.writeln(perbandingan)
*/

/*
let admin 

document.writeln(admin)
*/


/*
let admin = null

document.writeln(admin)
*/


/*
let employee = Symbol('Iky')

console.log(employee)
console.log(employee.description)
*/


/*
let employee = {
    name: "Rizky Jein Nur Aulia",
    age: 21,
    job: "Full Stack Web Developer",
    isMarried: false,
}

document.write(`My name is ${employee.name} and I'm ${employee.age} years old`)
*/


/*
let value = false
let string = String(value)
alert(typeof value)
*/


/*
let str = "123"
let nbr = Number("123")

alert(typeof nbr)
*/


/*
alert(Boolean(0))
alert(Boolean(1))
*/


/*
let a = 3
let b = 5

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a ** b);
console.log(a / b);
console.log(a % b);
*/


/*
let a = 3
let b = 5

console.log(a == b);
console.log(a < b);
console.log(a > b);
console.log(a /= b);
*/


/*
let a = 3
let b = 5

console.log(a && b);
console.log(a || b);
console.log(!a);
*/


/*
let a = 3
let b = 5

console.log(a & b);
console.log(a | b);
console.log(a ^ b);
console.log(~a);
*/


/*
let a = 3
let b = 5

console.log(a == b ? 'sama' : 'tidak sama')
*/


/*
alert('Halo, selamat datang di website Fundamental JavaScript!')
*/


/*
let string = prompt("Apakah anda ingin pergi amakn malam bersama saya?")
alert('Jawaban Anda ' + string)
*/


/*
let string = confirm("Apakah anda ingin pergi amakn malam bersama saya?")

string ? alert('Jawaban Anda mau') : alert('Jawaban Anda tidak mau')
*/


/*
let string = confirm("Apakah anda ingin pergi amakn malam bersama saya?")

if (string) {
    alert('Jawaban Anda mau')
}
*/


/*
let string = confirm("Apakah anda ingin pergi amakn malam bersama saya?")

if (string) {
    alert('Jawaban Anda mau')
} else {
    alert('Jawaban Anda tidak')
}
*/



let string = prompt("1 + 1 = ?")

if (string == 2) {
    alert('Jawaban Anda benar')
}else if (string > 2) {
    alert('Jawaban Anda kelebihan')
}else if (string < 2) {
    alert('Jawaban Anda kurang')
}else {
    alert('Jawaban Anda salah')
}



/*
let string = "blue"

switch (string) {
    case "red":
        alert("I love red!")
        break;
    
    case "blue":
        alert("I love blue!")
        break;

    default:
        alert("I don't know what the color is it!")
}
*/


/*
for (let i = 1; i < 5; i++) {
    document.writeln(i)
    document.writeln("<br>")
}
*/


/*
let b = 1

while (b < 5) {
    document.writeln(b)
    document.writeln("<br>")
    b++
}
*/


/*
let i = 1;

document.writeln('Perulangan Do-While')
document.writeln("<br>")
do {
    document.writeln(i)
    document.writeln("<br>")
    i++
} while (i < 5);
*/



document.writeln('Perulangan For')
document.writeln("<br>")

for (let a = 1; a < 5; a++) {
    if (a ==3) {
        break
    }
    document.writeln(a)
    document.writeln("<br>")
}


/*
document.writeln('Perulangan For')
document.writeln("<br>")

for (let a = 1; a < 5; a++) {
    if (a == 3) {
        continue
    }
    document.writeln(a)
    document.writeln("<br>")
}
*/
