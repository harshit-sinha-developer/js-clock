export const getHourHandPositionInRadians = (time) => {
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  return ((hour % 12) * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
}

export const getMinuteHandPositionInRadians = (time) => {
  let minute = time.getMinutes();
  let second = time.getSeconds();
  return (minute * Math.PI / 30) + (second * Math.PI / (30 * 60))
}

export const getSecondHandPositionInRadians = (time) => {
  return (time.getSeconds() * Math.PI / 30);
}
