const request = require('request');
const cheerio = require('cheerio');

// Write Headers


request('https://powerlisting.fandom.com/wiki/Special:Random', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    const powerTitle = $('.page-header__title');

    console.log('Power: ' + powerTitle.text());

    const powerDesc = $('.WikiaArticle')

    const description = powerDesc.find('p').text() ;

    console.log(description);

    }
  else {
    console.log('error')
  }
});
