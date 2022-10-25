const getTimeFormat = (timestamp) => {
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const time = new Date(timestamp);
  const month = months[time.getMonth()];
  const date = time.getDate();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours < 10 ? '0'+hours : hours;   
  minutes = minutes < 10 ? '0'+minutes : minutes;
  const dateFormat = `${month} ${date}, ${hours}:${minutes} ${ampm}`;
  return dateFormat;
}
export default getTimeFormat;