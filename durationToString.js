//translates a duration in seconds (int) to year/day/hour/second text equivalent 

function formatDuration(seconds) {
    if (seconds === 0 || !seconds) {
    return "now";
  }
  //calculate seconds breakdown
  timeCounts = { year: 0, day: 0, hour: 0, minute: 0, second: 0 };
  secondsperYear = 60 * 60 * 24 * 365;
  secondsperDay = 60 * 60 * 24;
  secondsperHour = 60 * 60;
  secondsperMinute = 60;
  let years = Math.floor(seconds / secondsperYear);
  timeCounts["year"] = years;
  let days = Math.floor((seconds - years * secondsperYear) / secondsperDay);
  timeCounts["day"] = days;
  let hours = Math.floor(
    (seconds - years * secondsperYear - days * secondsperDay) / secondsperHour
  );
  timeCounts["hour"] = hours;
  let minutes = Math.floor(
    (seconds -
      years * secondsperYear -
      days * secondsperDay -
      hours * secondsperHour) /
      secondsperMinute
  );
  timeCounts["minute"] = minutes;
  let secs =
    seconds -
    years * secondsperYear -
    days * secondsperDay -
    hours * secondsperHour -
    minutes * secondsperMinute;
  timeCounts["second"] = secs;

  //turn calculations into a human-readable string
  let timeArray = [];
  Object.keys(timeCounts).forEach((count) => {
    if (timeCounts[count] > 0) {
      if (timeCounts[count] > 1) {
        timeArray.push(timeCounts[count] + ` ${count}s`);
        timeArray.push(", ");
      } else {
        timeArray.push(timeCounts[count] + ` ${count}`);
        timeArray.push(", ");
      }
    }
  });
  timeArray = timeArray.slice(0, timeArray.length - 1);
  timeArray[timeArray.length - 2] = " and ";
  return timeArray.join("");
}
