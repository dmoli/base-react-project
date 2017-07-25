// Polyfill Node with `Intl` that has data for all locales.
// See: https://formatjs.io/guides/runtime-environments/#server
const IntlPolyfill = require('intl');

Intl.NumberFormat = IntlPolyfill.NumberFormat;
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

const { readFileSync } = require('fs');
const { basename } = require('path');
const { createServer } = require('http');
const accepts = require('accepts');
const glob = require('glob');
const next = require('next');

// is false in production
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Get the supported languages by looking for translations in the `lang/` dir. [ 'en', 'fr' ]
const languages = glob.sync('./src/lang/*.json').map(f => basename(f, '.json'));

// We need to expose React Intl's locale data on the request for the user's
// locale. This function will also cache the scripts by lang in memory.
const localeDataCache = new Map();
const getLocaleDataScript = (locale) => {
  const lang = locale.split('-')[0];
  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(`react-intl/locale-data/${lang}`);
    const localeDataScript = readFileSync(localeDataFile, 'utf8');
    localeDataCache.set(lang, localeDataScript);
  }
  return localeDataCache.get(lang);
};

// We need to load and expose the translations on the request for the user's
// locale. These will only be used in production, in dev the `defaultMessage` in
// each message description in the source code will be used.
const getMessages = function getMessages(locale) {
  return require(`./src/lang/${locale}.json`); // eslint-disable-line global-require
};

app.prepare().then(() => {
  createServer((req, res) => {
    // Higher-level content negotiation
    const accept = accepts(req);
    // in dev will be 'en' and production return [ 'en', 'fr'] (./src/lang/*.json)
    const locale = accept.language(dev ? ['es'] : languages);

    // [ 'en', 'fr']
    req.locale = locale;
    // cache data
    req.localeDataScript = getLocaleDataScript(locale);
    // get a messages
    req.messages = getMessages(locale);
    // console.log(req.locale)
    // console.log(req.localeDataScript)
    // console.log(req.messages)
    handle(req, res);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Read on http://localhost:3000');
  });
});

/*
i had to pass this logic above
server.get('/p/:id', (req, res) => {
  const actualPage = '/post'
  const queryParams = { title: req.params.id }
  app.render(req, res, actualPage, queryParams)
})
*/
