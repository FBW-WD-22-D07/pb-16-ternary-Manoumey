// # Grundlagen der Programmierung: Ternär

// Diese Übungen sollen dir den Umgang mit dem ternären Operator näher bringen.

// - schreibe deinen Code in `solution.js`

// 1. Deklariere eine boolesche Variable namens `isDog`. Schreibe einen Code, der je nach Wert von dog einen Satz auf der Konsole ausgibt. Wenn er wahr ist, drucke 'Pat, pat, good dog' und wenn nicht, drucke 'find me a dog to pat!'

const isDog = true;
console.log(isDog===true? 'Pat, pat, good dog' : 'find me a dog to pat!');


// 2. Deklariere 2 Variablen namens `speedLimit` und `yourSpeed`. Weise speedLimit den Wert 50km/h zu. Wenn `yourSpeed` darüber liegt, soll der Satz "you're going too fast!" gedruckt werden. Wenn die Geschwindigkeit niedriger ist als speedLimit, soll dieser Satz gedruckt werden: 'You're driving below the speed limit, Oma'.

 const speedLimit = 50;
 const yourSpeed = 70;

 console.log(yourSpeed > speedLimit ? "you're going too fast!" : 
            yourSpeed < speedLimit? "You're driving below the speed limit, Oma" :
             "");

// 3. Deklariere eine Variable namens `age`.  Schreibe einen Code, der je nach Alterswert einen Satz auf der Konsole ausgibt. Wenn das Alter unter 16 Jahren liegt, soll der Satz "serve butter beer" gedruckt werden. Andernfalls "serve beer".

const age =2;

console.log(age < 16 ? `serve butter beer`: `serve beer`);



// 4. Deklariere eine Variable namens `isStudent`. Schreibe einen Code, der je nach Wert der Variablen einen Satz auf der Konsole ausgibt. Bei true soll "Ticket costs €5,00" gedruckt werden. Wenn false, "Ticket costs €12,00".
const isStudent = false;

console.log(isStudent === true ? "Ticket costs €5,00" : "Ticket costs €12,00");



// 5. Deklariere eine Variable namens `okMarie`. Schreibe einen Code, der prüft, ob der Wert der Variable 'cake' ist - wenn ja, soll "Let them eat cake" gedruckt werden. Wenn nicht, "Oh, bother".

const okMarie = "Coffee";

console.log(okMarie === "cake" ? `Let them eat cake` : `Oh, bother`);

// 6. Prüfe, ob die folgenden Zahlen gerade Zahlen sind. Verwende einen Ternär und wenn die Zahl gerade ist, z.B. `30`. sollte `30 is even` gedruckt werden, sonst z.B. `31`: `31 is odd`
// * num1 = 30
// * num2 = 939
// * num3 = 40.9


const num = 939;

console.log(num % 2 == 0 ? `${num} is even` : `${num} is odd` );
