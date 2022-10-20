//Find 13 is prime or not. If prime, print "PRIME". Else print "NOT PRIME". 

let num = 13;
let count = 0;
for (a=1;a<=num;a++) {
    if (num%a==0) {
	Count++;
  } if (count==2) {
	console.log("PRIME");
  } else {
	console.log("NOT PRIME");
  }
}
