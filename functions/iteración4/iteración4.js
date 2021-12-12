const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let mediaTotal = 0;

  for (let i = 0; i < param.length; i++) {
    mediaTotal = mediaTotal + param[i];
  }
  mediaTotal = mediaTotal / param.length;
  console.log(mediaTotal);
}

average (numbers);