const nopt = require('nopt')

const wellKnown = {
  'first': [String],
  'last': [String]
}

const shortHands = {
  'f': '--first',
  'l': '--last'
}

const opts = nopt(wellKnown, shortHands)

// Validate inputs here.
if (!opts.first) {
  console.log('Please specify --first parameter.')
  process.exit(0)
}

// Program body.
console.log(`Hello ${opts['first']} ${opts['last'] || ''}`)

// Foo bar is my name.
