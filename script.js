// Wheel color picker from Iro library
iro.ColorPicker("#wheelPicker", {
  width: 230,
  color: "fff",
  layout: [
  {
    component: iro.ui.Wheel }]



  //gender setup
}).on("color:change", function (color) {
  var hex = color.hexString;
  console.log(color.hsl.h);
  var agender = color.hsl.h > 300 && color.hsl.h < 360;
  var enby = color.hsl.h > 240 && color.hsl.h < 300;
  var prefDis = color.hsl.h > 180 && color.hsl.h < 240;
  var female = color.hsl.h > 120 && color.hsl.h < 180;
  var male = color.hsl.h > 60 && color.hsl.h < 120;
  var choose = color.hsl.h > 60 && color.hsl.h < 1;
  var genderText = document.querySelector('.genderText');
  var genderBox = document.querySelector('.genderBox');
  genderBox.style.background = hex;
  genderText.style.color = hex;

  //gender rules
  if (female) {
    genderText.innerHTML = "Female";
  } else if (male) {
    genderText.innerHTML = "Male";
  } else
  if (agender) {
    genderText.innerHTML = "Agender";
  } else
  if (enby) {
    genderText.innerHTML = "Non Binary";
  } else
  if (prefDis) {
    genderText.innerHTML = "I prefer not to disclose";
  } else
  if (choose) {
    genderText.innerHTML = "Choose color to select gender";
  }
});