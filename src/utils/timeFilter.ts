export const uploadDate = (seconds: number) => {
  const timeStamp = new Date(seconds * 1000);
  const month = timeStamp.getMonth();
  const date = timeStamp.getDate();
  const year = timeStamp.getFullYear();
  const hours = timeStamp.getHours();
  const Minutes = timeStamp.getMinutes();
  const time = `${hours}시 ${Minutes}분`;
  const fullDate = `${year} .${month} .${date} ${hours}시 ${Minutes}분`;
  const Y_M_D = `${year} .${month} .${date}`;
  return {
    time,
    fullDate,
    Y_M_D,
  };
};
