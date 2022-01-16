function formatDuration(seconds) {
  if (seconds === 0) return 'now';

  let input = seconds;
  const durations = {
    year: 60 * 60 * 24 * 365,
    day: 60 * 60 * 24,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  };
  const results = {};

  for (let duration in durations) {
    results[duration] = Math.floor(input / durations[duration]);
    if (results[duration] > 0) {
      input = input % durations[duration];
    }
  }

  const timeParts = [];
  for (let result in results) {
    if (results[result]) {
      if (results[result] === 1) {
        timeParts.push({ type: result, value: results[result] });
      } else {
        timeParts.push({ type: `${result}s`, value: results[result] });
      }
    }
  }

  let sentence = "";
  timeParts.forEach((time, index) => {
    if (index === timeParts.length - 1) {
      sentence += `${time.value} ${time.type}`;
    } else if (index === timeParts.length - 2) {
      sentence += `${time.value} ${time.type} and `;
    } else {
      sentence += `${time.value} ${time.type}, `;
    }
  });
  
  return sentence;
}

console.log(formatDuration(1));
