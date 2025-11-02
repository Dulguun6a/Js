function findMax() {                                  //2 toonii ihiig oloh. button onclick ashiglan html deerees js-iin ug functioniig duudna
  const a = document.getElementById("a1").value;      //html deer input-ees too avaad, teriigee const utgaar js deer ugnu
  const b = document.getElementById("b1").value;
  let max;                                            //2 toonii ih utgiig hadgalah too zarlana
  if (a > b) max = a;                                 //hervee a ni b-ees ih bol maxiig a bolgono
  else max = b;                                       //ugui bol maxiig b bolgono
  document.getElementById("1").textContent = "ih --> " + max;  // max utgiig butsaana
}

function findMin() {                                   //2 toonii bagiig oloh. button onclick ashiglan html deerees js-iin ug functioniig duudna
  const a = document.getElementById("a2").value;       //html deer input-ees too avaad, teriigee const utgaar js deer ugnu
  const b = document.getElementById("b2").value;
  let min;                                              //2 toonii baga utgiig hadgalah too zarlana    
  if (a < b) min = a;                                   //hervee a ni b-ees baga bol miniig a bolgono
  else min = b;                                         //ugui bol miniig b bolgono
  document.getElementById("2").textContent = "baga --> " + min;     // min utgiig butsaana
}

function findMin3() {                                   //3 toonii bagiig oloh. button onclick ashiglan html deerees js-iin ug functioniig duudna
  const a = document.getElementById("a3").value;        //html deer input-ees too avaad, teriigee const utgaar js deer ugnu
  const b = document.getElementById("b3").value;
  const c = document.getElementById("c3").value;
  let min = a;                                          //3 toonii baga utgiig hadgalah too zarlana, ehleed min iig a gej ugch baina
  if (b < min) min = b;                                 //hervee b ni min-ees baga bol miniig b bolgono
  if (c < min) min = c;                                 //hervee c ni min-ees baga bol miniig c bolgono
  document.getElementById("3").textContent = "3 toonii baga --> " + min;   // min utgiig butsaana
}

function findMax3() {                                   //3 toonii ihig oloh. button onclick ashiglan html deerees js-iin ug functioniig duudna
  const a = document.getElementById("a4").value;        //html deer input-ees too avaad, teriigee const utgaar js deer ugnu
  const b = document.getElementById("b4").value;
  const c = document.getElementById("c4").value;
  let max = a;                                          //3 toonii ih utgiig hadgalah too zarlana, ehleed max iig a gej ugch baina
  if (b > max) max = b;
  if (c > max) max = c;
  document.getElementById("4").textContent = "3 toonii ih --> " + max;      // max utgiig butsaana
}

function findMid() {                                    //3 toonii dundahig oloh. button onclick ashiglan html deerees js-iin ug functioniig duudna
  const a = document.getElementById("a5").value;        //html deer input-ees too avaad, teriigee const utgaar js deer ugnu
  const b = document.getElementById("b5").value;            
  const c = document.getElementById("c5").value;
  let mid;                                              //3 toonii dundah utgiig hadgalah too zarlana

  if ((a > b && a < c) || (a < b && a > c)) mid = a;        //hervee a ni b bolon c-iin dundah bol mid iig a bolgono
  else if ((b > a && b < c) || (b < a && b > c)) mid = b;   //hervee b ni a bolon c-iin dundah bol mid iig b bolgono
  else mid = c;                                             //ugui bol mid iig c bolgono

  document.getElementById("5").textContent = "dundah --> " + mid;   // mid utgiig butsaana
}

function sortNumbers() {                                //3 toog erembeer ni zarlah. button onclick ashiglan html deerees js-iin ug functioniig duudna
  let a = document.getElementById("a6").value;          //html deer input-ees too avaad, teriigee let utgaar js deer ugnu
  let b = document.getElementById("b6").value;
  let c = document.getElementById("c6").value;

  if (a > b) { let t = a; a = b; b = t; }               //hervee a ni b-ees ih bol a, b-iig solino
  if (b > c) { let t = b; b = c; c = t; }               //hervee b ni c-ees ih bol b, c-iig solino
  if (a > c) { let t = a; a = c; c = t; }               //hervee a ni c-ees ih bol a, c-iig solino

  document.getElementById("6").textContent = "erembe --> " + a + ", " + b + ", " + c;   // erembeer zarsan toog butsaana
}

function checkPrime() {                                  //anhnii too esehig shalgah. button onclick ashiglan html deerees js-iin ug functioniig duudna
  const n = document.getElementById("n7").value;         //html deer input-ees too avaad, teriigee const utgaar js deer ugnu
  if (n <= 1) {                                          //hervee n 1-es baga esvel tentsuu bol shuud ugui gej butsaana
    document.getElementById("7").textContent = "No";
    return;
  }
  let isPrime = true;                                    //anhnii too esehig hadgalah boolean utga zarlana
  for (let i = 2; i <= n / 2; i++) {                     //2-s ehleed n-iin tal hurtel buh toog shalgana
    if (n % i === 0) {                                   //hervee n i-tai huvaagddag bol anhnii too bish
      isPrime = false;                                   //prime utga bish bolgono
      break;                                             //davtaltiig zogsoono
    }
  }

  document.getElementById("7").textContent = isPrime ? "Yes" : "No";    // anhnii too eseh utgiig butsaana
}

function findAverage() {                                        //3 toogiin dundajig oloh. button onclick ashiglan html deerees js-iin ug functioniig duudna
  const a = parseFloat(document.getElementById("a8").value);    //html deer input-ees too avaad, teriigee const utgaar float bolgoj js deer ugnu
  const b = parseFloat(document.getElementById("b8").value);
  const c = parseFloat(document.getElementById("c8").value);
  
  const avg = (a + b + c) / 3;                                  //3 toog nemeed 3-d huvaana
  document.getElementById("8").textContent = "dundaj --> " + avg.toFixed(2);    // dundaj utgiig 2 orontoi butsaana
}

function checkPalindrome() {                                //palindrome esehig shalgah. button onclick ashiglan html deerees js-iin ug functioniig duudna
  const n = document.getElementById("n9").value;            //html deer input-ees too avaad, teriigee const utgaar js deer ugnu
  let reversed = "";                                        //urvuu utgiig hadgalah string zarlana
  for (let i = n.length - 1; i >= 0; i--) {                 //n-iin urd talin temdegtnees ehleed ar tal ruu shiljine
    reversed += n[i];
  }
  document.getElementById("9").textContent = (n === reversed) ? "Yes" : "No";   //palindrome eseh utgiig butsaana. button onclick ashiglan html deerees js-iin ug functioniig duudna
}

function checkPrimePalindrome() {                           //anhnii too bolon palindrome esehig shalgah
  const n = document.getElementById("n10").value;
  const num = +n;
  if (num <= 1) {
    document.getElementById("10").textContent = "No";
    return;
  }

  let prime = true;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }

  let reversed = "";
  for (let i = n.length - 1; i >= 0; i--) {
    reversed += n[i];
  }
  const pal = (n === reversed);
  document.getElementById("10").textContent = (prime && pal) ? "Yes" : "No";
}
