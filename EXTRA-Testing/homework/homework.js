function checkSeatStatus(row, number) {
  if(typeof row !== 'string') throw new TypeError('First parameter is not a string');
  if(typeof number !== 'number') throw new TypeError('Second parameter is not a number');

}

module.exports = {
  checkSeatStatus
}