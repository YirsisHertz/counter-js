let count = document.getElementById("count");

const increase = (aument = 1) => {
  const value = parseInt(count.textContent);
  const result = value + aument;

  count.className = result >= 0 ? "pos" : "neg";

  count.innerHTML = result;
};
