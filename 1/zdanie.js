// ZADANIE 1
document.write("<b>Witaj JavaScript</b>");

document.write("<hr>");

let i = 0;
let j = 0;

for (i = -22; i < 22; i++) {
   document.write(i + "<br>");
}

document.write("<hr>");

for (i = 55; i > -15; i = i - 5) {
   document.write(i + " ");
}

document.write("<hr>");

for (i = 40; i >= 10; i--) {
   if (i >= 25 || i <= 15) {
      document.write(i + " ");
   }
}

document.write("<hr>");

// ZADANIE 2
for (i = -40; i < 40; i++) {
   if ((i % 2 == 1 || i % 2 == -1) && (i > 30 || i < 3)) {
      document.write(i + " ");
   }
}

document.write("<hr>");

for (i = -20; i < 20; i++) {
   if (i % 2 == 0 && (i >= 10 || i <= 5)) {
      document.write(i + " ");
   }
}

document.write("<hr>");

for (i = -100; i <= 41; i++) {
   if (i % 7 == 0 && (i >= 14 || i <= -28)) {
      document.write(i + " ");
   }
}

document.write("<hr>");

// ZADANIE 3

//a
let prompt1 = parseInt(prompt("ZADANIE 3a"));

if (typeof prompt1 == "number") {
   for (i = 0; i < prompt1; i++) {
      document.write("X");
   }
   document.write("<br>");
}

document.write("<br>");
//b
if (typeof prompt1 == "number") {
   for (i = 0; i < prompt1; i++) {
      for (j = 0; j < prompt1; j++) {
         if (i == 0 || i == prompt1 - 1 || j == 0 || j == prompt1 - 1) {
            document.write(" X ");
         } else {
            document.write("   ");
         }
      }
      document.write("<br>");
   }
}

document.write("<br>");

//c
if (typeof prompt1 == "number") {
   for (i = 0; i < prompt1; i++) {
      for (j = 0; j < prompt1; j++) {
         if (j + i == prompt1 - 1) {
            document.write("X");
         } else if (
            j + i > prompt1 - 1 &&
            j != prompt1 - 1 &&
            i != prompt1 - 1
         ) {
            document.write(" ");
         } else if (j == prompt1 - 1 || i == prompt1 - 1) {
            document.write("X");
         } else {
            document.write(" ");
         }
      }
      document.write("<br>");
   }
}
document.write("<br>");

//d
if (typeof prompt1 == "number") {
   for (i = 1; i < prompt1 + 1; i++) {
      for (j = 0; j < i; j++) {
         document.write(j + 1);
      }
      document.write("<br>");
   }
}
document.write("<br>");

//e
if (typeof prompt1 == "number") {
   for (i = 0; i < prompt1; i++) {
      for (let f = i + 1; f < prompt1; f++) {
         document.write(" ");
      }

      for (let c = i + 1; c > 0; c--) {
         document.write(c);
      }
      document.write("<br>");
   }
}
document.write("<br>");
//f
if (typeof prompt1 == "number") {
   var num = prompt1;
   if (num > 0) {
      if (num == 0 || num == 1) num = 1;
      for (i = num - 1; i >= 1; i--) {
         num = num * i;
      }
   }
}

document.write("Silnia: " + num + "<br>");
document.write("<br>");

//g
if (typeof prompt1 == "number") {
   let sum = 0;
   for (i = 0; i < prompt1 + 1; i++) {
      if (i % 2 == 0) {
         sum = sum + i;
      }
   }
   document.write("SUMA: " + sum + "<br>");
}

//h
for (i = 2; i < prompt1; i++) {
   if (prompt1 % i == 0) {
      alert("Nie jest liczba pierwsza");
      break;
   }
   if (i == prompt1 - 1) {
      alert("Jest liczba pierwsza");
   }
}
//i

document.write("<table>");

for (i = 0; i < prompt1 + 1; i++) {
   document.write("<tr>");
   for (j = 0; j < prompt1 + 1; j++) {
      if (i == 0 || j == 0) {
         if (i == 0 && j == 0) {
            document.write(
               '<td style="background-color: blue; color: white">' +
                  "." +
                  "</td>"
            );
         } else if (j == 0) {
            document.write(
               '<td style="background-color: blue; color: white">' + i + "</td>"
            );
         } else if (i == 0) {
            document.write(
               '<td style="background-color: blue; color: white">' + j + "</td>"
            );
         }
      } else if (i == j) {
         document.write(
            '<td style="background-color: white;">' + i * j + "</td>"
         );
      } else [document.write("<td>" + i * j + "</td>")];
   }
   document.write("</tr>");
}

document.write("</table>");
