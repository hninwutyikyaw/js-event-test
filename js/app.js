const input = document.querySelector("#input");
const output = document.querySelector("#output");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");
const fonts = ["Helvetica", "Arial", "Tahoma", "Poppins"];

fonts.forEach((font) => {
  fontFamily.append(new Option(font, font));
});

input.addEventListener("keyup", (event) => {
  output.innerText = input.value;
  count.innerText = input.value.length;
});

color.addEventListener("change", (event) => {
  output.style.color = color.value;
});

fontSize.addEventListener("change", (event) => {
  output.style.fontSize = fontSize.value + "px";
});

fontFamily.addEventListener("change", (event) => {
  output.style.fontFamily = fontFamily.value;
});
