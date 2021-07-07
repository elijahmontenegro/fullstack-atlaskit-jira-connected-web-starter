const getTimeExpires = (expires_in = 3600) => {
  let timeExpires = new Date();
  // give ourselves a little breathing room before the token actually expires
  timeExpires.setSeconds(timeExpires.getSeconds() + (expires_in * .9));

  return timeExpires;
};

const getMinutesUntilExpiration = (timeExpires) => {
  const diff = new Date(timeExpires) - new Date();
  return Math.floor(( diff / 1000 ) / 60);
};

module.exports = {
  getTimeExpires,
  getMinutesUntilExpiration
};
