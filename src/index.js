const nopt = require('nopt')

const wellKnown = {
  'first': [String]
}

const shortHands = {
  'f': '--first'
}

const opts = nopt(wellKnown, shortHands)

// Validate inputs here.
if (!opts.first) {
  console.log('Please specify --fist parameter.')
  process.exit(0)
}

// Program body.
console.log(`Hello ${opts['first']}`)
