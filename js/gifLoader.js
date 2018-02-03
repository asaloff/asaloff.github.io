$(document).load(() => {
  const djelloUrl = 'https://s3.amazonaws.com/demo-gifs-asaloff/djello_optimized.gif';
  const fideligardUrl = 'https://s3.amazonaws.com/demo-gifs-asaloff/fideligard_optimized.gif';
  const superchatUrl = 'https://s3.amazonaws.com/demo-gifs-asaloff/superchat.gif';
  const mimirsMarketUrl = 'https://s3.amazonaws.com/demo-gifs-asaloff/mimirs_market_optimized.gif';

  $('#djello-img').css('background-image', `url(${ djelloUrl })`);
  $('#fideligard-img').css('background-image', `url(${ fideligardUrl })`);
  $('#superchat-img').css('background-image', `url(${ superchatUrl })`);
  $('#mimirs-market-img').css('background-image', `url(${ mimirsMarketUrl })`);
});
