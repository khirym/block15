// Prompt the user for a list of integers separated by commas.
const userInput = prompt(
    "Please enter some froyo flavors you like separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  let froyoFlavors = userInput.split(",");
  
  // build an object to track user input of flavors observed
  
  console.log('froyoFlavors',froyoFlavors)
  let userObject = {}
  
  for(let i = 0; i < froyoFlavors.length; i++){
      if (userObject[froyoFlavors[i]] !== undefined){
        // if the flavor exisit -> add + 1 to the previous value
        userObject[froyoFlavors[i]] = userObject[froyoFlavors[i]] + 1;
      } else {
      // if the flavor deson't exisit -> make the initial value 1
      userObject[froyoFlavors[i]] = 1;
    }
  }
  
  console.log(userObject);
  