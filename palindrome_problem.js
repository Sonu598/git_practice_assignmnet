//We have to check the string is palindome or not. If it is a pelindrome, print "PALINDROME". Else print "NOT A PELINDROME". 

let str="racecar";
let n_str="";
    for (let a=str.length-1; a>=1; a--) {
        n_str+=str[a];
    } if (n_str===str) {
        console.log("PELINDROME");
    } else {
        console.log("NOT A PELINDROM");
    }
