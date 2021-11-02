//Campos de letras y numeros
const letters = document.getElementById("letters");
const numbers = document.getElementById("numbers");
//botones
const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const j0 = document.getElementById("j0");
const cl = document.getElementById("cl");
const cn = document.getElementById("cn");

//funciones

const fnA1 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ") {
    return (numbers.innerHTML = "1");
  }
  if (letters.innerHTML == "") {
    letters.innerHTML = "A";
  } else {
    alert("Faltan letras o numeros");
  }
};
const fnB2 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "1") {
    return (numbers.innerHTML += "2");
  }
  if (letters.innerHTML == "A") {
    letters.innerHTML += "B"; // letters.innerHTML = letters.innerHTML +"B"
  } else {
    alert("Faltan letras o numeros");
  }
};
const fnC3 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "12") {
    return (numbers.innerHTML += "3");
  }
  if (letters.innerHTML == "AB") {
    letters.innerHTML += "C"; // letters.innerHTML = letters.innerHTML +"B"
  } else {
    alert("Faltan letras o numeros");
  }
};
const fnD4 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "123") {
    return (numbers.innerHTML += "4");
  }
  if (letters.innerHTML == "ABC") {
    letters.innerHTML += "D"; // letters.innerHTML = letters.innerHTML +"B"
  } else {
    alert("Faltan letras o numeros");
  }
};
const fnE5 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "1234") {
    return (numbers.innerHTML += "5");
  }
  if (letters.innerHTML == "ABCD") {
    letters.innerHTML += "E"; // letters.innerHTML = letters.innerHTML +"B"
  } else {
    alert("Faltan letras o numeros");
  }
};
const fnF6 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "12345") {
    return (numbers.innerHTML += "6");
  }
  if (letters.innerHTML == "ABCDE") {
    letters.innerHTML += "F"; // letters.innerHTML = letters.innerHTML +"B"
  } else {
    alert("Faltan letras o numeros");
  }
};
const fnG7 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "123456") {
    return (numbers.innerHTML += "7");
  }
  if (letters.innerHTML == "ABCDEF") {
    letters.innerHTML += "G"; // letters.innerHTML = letters.innerHTML +"B"
  } else {
    alert("Faltan letras o numeros");
  }
};
const fnH8 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "1234567") {
    return (numbers.innerHTML += "8");
  }
  if (letters.innerHTML == "ABCDEFG") {
    letters.innerHTML += "H"; // letters.innerHTML = letters.innerHTML +"B"
  } else {
    alert("Faltan letras o numeros");
  }
};
const fnI9 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "12345678") {
    return (numbers.innerHTML += "9");
  }
  if (letters.innerHTML == "ABCDEFGH") {
    letters.innerHTML += "I"; // letters.innerHTML = letters.innerHTML +"B"
  } else {
    alert("Faltan letras o numeros");
  }
};
const fnJ0 = () => {
  if (letters.innerHTML == "ABCDEFGHIJ" && numbers.innerHTML == "123456789") {
    alert("Has finalizado");
    return (numbers.innerHTML += "0");
  }
  if (letters.innerHTML == "ABCDEFGHI") {
    letters.innerHTML += "J"; // letters.innerHTML = letters.innerHTML +"B"
  } else {
    alert("Faltan letras o numeros");
  }
};
const fnCL = () => {
  letters.innerHTML = "";
};
const fnCN = () => {
  numbers.innerHTML = "";
};

//eventos

a1.onclick = () => {
  fnA1();
};
b2.onclick = () => {
  fnB2();
};
c3.onclick = () => {
  fnC3();
};
d4.onclick = () => {
  fnD4();
};
e5.onclick = () => {
  fnE5();
};
f6.onclick = () => {
  fnF6();
};
g7.onclick = () => {
  fnG7();
};
h8.onclick = () => {
  fnH8();
};
i9.onclick = () => {
  fnI9();
};
j0.onclick = () => {
  fnJ0();
};
cl.onclick = () => {
  fnCL();
};
cn.onclick = () => {
  fnCN();
};
