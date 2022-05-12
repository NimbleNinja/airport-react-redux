export default time => {
  const currentTime = new Date(time);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const mins = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${mins}`;
};
