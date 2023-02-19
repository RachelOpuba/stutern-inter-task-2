"use strict";
//********** SOLUTION TO QUESTION 3 STARTS HERE **********//
let scienceSubs = "Physics, Chemistry, Biology, Technical Drawing";
let scocialScienceSubs = "Accounting, Commerce, Marketing, Geography";
let artSubs = "Government, Economics, Literature, History";
let generalSubs = "English, Mathematics";

let classGroup = "sCIence";
let classGroupValue = classGroup.toLowerCase();
if (classGroupValue == `science`) {
  console.log(
    `You will be taking  the following subjects for the session: ${generalSubs}, ${scienceSubs} `
  );
} else if (classGroupValue == "social science") {
  console.log(
    `You will be taking  the following subjects for the session: ${generalSubs}, ${scocialScienceSubs} `
  );
} else if (classGroupValue == "arts") {
  console.log(
    `You will be taking  the following subjects for the session: ${generalSubs}, ${artSubs} `
  );
} else {
  console.log(
    `You will be taking  the following subjects for the session: ${generalSubs}`
  );
}
//********** SOLUTION TO QUESTION 3 ENDS HERE **********//

//********** SOLUTION TO QUESTION 5 STARTS HERE **********//
//********************************************************//
function evaluateNum(num) {
  let pow = 0;
  let dist = Math.abs(num - Math.pow(2, pow));

  for (let i = 1; i <= num; i++) {
    let currDist = Math.abs(num - Math.pow(2, i));
    if (currDist < dist) {
      pow = i;
      dist = currDist;
    }
  }
  if (dist === Math.abs(num - Math.pow(2, pow - 1))) {
    pow--;
  }

  return console.log(
    `The number ${Math.pow(2, pow)} is the power of 2 nearest to ${num}`
  );
}
evaluateNum(3);

//********** SOLUTION TO QUESTION 5 ENDS HERE **********//
