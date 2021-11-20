function rgb(r, g, b) {
  function hexConverter(value) {
    if (value > 254) {
      return "FF";
    }
    if (value < 1) {
      return "00";
    }
    const division = Math.floor(value / 16);
    const remainder = value % 16;

    function hexValueCalculator(number) {
      let hexValue;
      if (number < 10) {
        hexValue = number;
      } else {
        hexValue = String.fromCharCode(65 + (number - 10));
      }
      return hexValue;
    }

    const hexFirst = hexValueCalculator(division);
    const hexSecond = hexValueCalculator(remainder);

    return `${hexFirst}${hexSecond}`;
  }

  const hexRed = hexConverter(r);
  const hexGreen = hexConverter(g);
  const hexBlue = hexConverter(b);

  return hexRed + hexGreen + hexBlue;
}
