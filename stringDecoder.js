let regex = /[0-9]/;

const decoder = (code) => {
  let newString = [];
  let notoSkip = 0;
  for (i = 0; i < code.length; i++) {
    if (regex.test(code[i])) {
      newString.push(code[i + Number(code[i]) + 1]);
    }
  }
  return console.log(newString.join(""));
};

decoder("0h2xce5ngbrdy");
decoder("3vdfn"); //=> 'n'
decoder("0r"); // => 'r'
decoder("2bna0p1mp2osl0e"); //=> 'apple'
decoder("0y4akjfe0s"); //=> 'yes'
