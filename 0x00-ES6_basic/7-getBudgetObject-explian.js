export default function getBudgetObject(income, gdp, capita) {
  // the key here is the parameter name (passed above)
  // the value here passed from function calling at the same ordered passed
  // below is the returned order needed of key-value pairs binded above
  // to observe the difference un-comment the commented line below
  // incase of changing the order of returned keys
  // or check the case of trying to change the name of key above or in return statement below
  const budget = { income, gdp, capita };
  return budget;
}
