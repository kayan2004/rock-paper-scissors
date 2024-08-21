const colorsUtil = (choice) => {
  var colors;
  switch (choice) {
    case "rock":
      colors = "bg-pinkred border-red";
      break;
    case "paper":
      colors = "bg-lightblue border-blue";
      break;
    case "scissors":
      colors = "bg-orangeyellow border-orange";
      break;
  }
  return colors;
};

export default colorsUtil;
