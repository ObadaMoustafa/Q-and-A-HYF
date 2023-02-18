try {
  console.log("Start try");
  // {
  // ..
  unicycle;

  console.log("End of try -- never reached");
} catch (err) {
  console.log("Error has occured: " + err);
} finally {
  console.log("This is always runs");
}

console.log("...then the execution continues");
