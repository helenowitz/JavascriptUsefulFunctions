/* Combine two strings together one character at a time. Excess is added to the end. The first string argument will be the leading string.
 ::Example:: const string1 = 'hello';
             const string2 = 'buhbye':
             console.log(zipStrings(string1, string2));     
  Should return >> hbeulhlboyee
             */
function zipStrings(main, ins){
  // Loop through main string
  for(let i = 0; i <= main.length; i++){
    // Skipping over the character that was just added
    if(i % 2 != 0)
      continue;
    // Checking for any character left to be inserted
    if(!ins[i/2])
      break;
    // Capture beginning of string, insert character, add the rest of the string
    main = main.slice(0,i+1) + `${ins[i/2]}` + main.slice(i+1);
    // If the second string is longer, add it to the end of main string before finish.
    if(!main[i+1]){
      main = main + ins.slice((i/2) + 1);
      break;
    }
  }
  return main;
}
