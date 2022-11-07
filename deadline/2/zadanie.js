// let strDNA =
//    "agaccggttgtgcccgaaacccgtgcccaaggatgggatcgtagaaacagttttatctaa
//aacggcagctaaaattagccacatagaatgtcaccggggtccaaactaattccacggttggaaagtcggcagacgaccaggtgacaggtcttacctttcacgtacttgggttaccttgctatcccgtatggagatgacggataatcctacctacttagtatcacacggagcagcggttaggccaccgacgcgtaagtctactcgtatttggcaaaaggtgtaaatttttcctacaatgttccgtcagaacagccctggcctcatttaactcctctcatgcaattcgtgccgttagccaccctggtcggcattagcgtcggatagaggtaaatgcgtcatgactcatgattcgcctattccgaatgactttgcaacgaaaagctcttccgcgttttgtaaatggtgagcttttgccgcacgacttgatgctcccccgaacctcatttttattttaatgtataactggttatcgtgcgttgactccgggcgcctccgtttctgctctatcttcaccccgattgtcggactctatattgaacgtccccagttccgaactaccttattctattaactgagtagcagagggcgtagggatacacctctctactaaatgacgcgagcatactgtaatctgcatgcgctgctaaattacaagacgagacgcctcagggtcaaggtcagtagatcgggccaactactttccacttggtggcccgccaaaattggggcggatacaacgatgggtcggaccacgaaacctgaccttgtatcctgagattcgaaatgcgacatacggcttagtggaaggatcgagctcatatggcgaaaggcctttaatagtgttcgtagcggaatagaataaggctaagcagaggatgttcggcgtctaaaaccaggtcacactatgcggatattgcgggagcagatagcccgtagcctcataccgcaactggttgattagtggtccgaaccgagcgagaggagaatagaactcgatcggactctacgcgactccgacagaggaaccataagaatatcggtgggttattcacgtttccactaactatggtagatctgctgatcgtcctaatgcatggttattggttcccagcgccctccttatatacaagcggtggtgcaggatgagtgctgggggcccgtgagggttctgggttggtttggtgtactattattcccagggtcttcccgggtaaactgctacaccaaagggtgccgggcggcttctattaacgccaacacttttcatttaggtgacgaactcaatctggaagccaattgacaaagacggctattcgtttcccatgtgtttgatctcctggaattcttcgattcctcccatgccaggttgctcgcgtattcacagagcgtgacgtgctcgccgcaatatattcagtcgtgttaatggttccaaccagtactgacaaccctaagagactggttattggcatattactagcaccaccctcgccctgctcgtcgccagacctaaacacatcgttcgacgttgctaagaggatcgtttgcaagtggcgcgcttctggatgatgaagccgataggtgagacactctattcgggattagactagcgagcccactggcccctgcaccttctgtcctccataaaagccactccctataaggcaaataagcttaaccctacacctccccgtaaggtcgctcgatagagcataaggggtttttaggcccgaccccggaccgggatggtagtgacgtttcttggccggctagacggagattctcagagtcagtatgattcacatatgtggcgctagaatgacgagacttcaggtagatcctactaatctcccctacgcctggagctcgacgagtcaaacatggacacggcccggttgaactccgcccacggacgtgcttactaggccagagcgattatgagc

function dna() {
   let strDNA = document.getElementById("input").value

   document.write(strDNA + "<br>")

   // 1 - DUZE ZNAKI
   strDNA = strDNA.toUpperCase()

   // 2 - TRYPLETY
   let bufer = ""
   for (let i = 0; i < strDNA.length; i++) {
      if (i % 3 == 0) {
         bufer = bufer + " "
      }
      bufer = bufer + strDNA[i]
   }
   strDNA = bufer.trim()

   // 3, 4 - KOLORKI
   tabDNA = strDNA.split(" ")
   for (let i = 0; i < tabDNA.length; i++) {
      if (tabDNA[i] == "ATG") {
         tabDNA[i] = '<b style="color: green;">ATG</b>'
         continue
      }
      if (tabDNA[i] == "TAA" || tabDNA[i] == "TAG" || tabDNA[i] == "TGA") {
         tabDNA[i] =
            '<span style="background-color: yellow;">' + tabDNA[i] + "</span>"
         continue
      }
   }

   // 5 - NIC KOMPLEMENTARNA
   let dnaPrim = ""
   for (let i = 0; i < strDNA.length; i++) {
      if (strDNA[i] == "A") {
         dnaPrim = dnaPrim + "T"
         continue
      }
      if (strDNA[i] == "T") {
         dnaPrim = dnaPrim + "A"
         continue
      }
      if (strDNA[i] == "C") {
         dnaPrim = dnaPrim + "G"
         continue
      }
      if (strDNA[i] == "G") {
         dnaPrim = dnaPrim + "C"
         continue
      }
      if (strDNA[i] == " ") {
         dnaPrim = dnaPrim + " "
      }
   }

   document.write(tabDNA + "<br><br>")
   document.write(dnaPrim + "<br>")

   // 6 - STATYSTYKA WYSTEPOWANIA (ze słownika)
   tabDNA = strDNA.split(" ")
   var slownik = {}
   let klucze = []
   for (let i = 0; i < tabDNA.length; i++) {
      if (tabDNA[i] in slownik) {
         slownik[tabDNA[i]] = slownik[tabDNA[i]] + 1
      } else if (!(tabDNA[i] in slownik)) {
         slownik[tabDNA[i]] = 1
         klucze[i] = tabDNA[i]
      }
   }
   console.log(klucze)

   // 7 - SORTOWANIE
   var items = Object.keys(slownik).map((key) => {
      return [key, slownik[key]]
   })

   items.sort((first, second) => {
      return first[1] - second[1]
   })

   var keys = items.map((e) => {
      return e[0]
   })

   console.log(keys)
   // WYPISYWANIE
   let kolorek = Math.floor(Math.random() * 5)
   let iterator = 0
   for (let i = keys.length - 1; i >= 0; i--) {
      if (iterator % 6 == 0) {
         kolorek = Math.floor(Math.random() * 5)
      } else if (kolorek == 0) {
         document.write(
            '<span style="background-color: lightblue">' +
               keys[i] +
               " - " +
               slownik[keys[i]] +
               "</span>" +
               "<br>"
         )
      } else if (kolorek == 1) {
         document.write(
            '<span style="background-color: lightgreen">' +
               keys[i] +
               " - " +
               slownik[keys[i]] +
               "</span>" +
               "<br>"
         )
      } else if (kolorek == 2) {
         document.write(
            '<span style="background-color: purple">' +
               keys[i] +
               " - " +
               slownik[keys[i]] +
               "</span>" +
               "<br>"
         )
      } else if (kolorek == 3) {
         document.write(
            '<span style="background-color: orange">' +
               keys[i] +
               " - " +
               slownik[keys[i]] +
               "</span>" +
               "<br>"
         )
      } else if (kolorek == 4) {
         document.write(
            '<span style="background-color: red">' +
               keys[i] +
               " - " +
               slownik[keys[i]] +
               "</span>" +
               "<br>"
         )
      }
      iterator++
   }
}
