#!/usr/bin/env node
const chalk = require('chalk')
const boxen = require('boxen')
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}
const data = {
  name: chalk.white('Cody Ogden /'),
  handle: chalk.cyan('codyogden'),
  work: chalk.white('Software Engineer at Cannabiz.Media'),
  twitter: chalk.cyan('https://twitter.com/codyogden'),
  github: chalk.cyan('https://github.com/codyogden'),
  linkedin: chalk.cyan('https://linkedin.com/in/codyogden'),
  web: chalk.cyan('https://codyogden.com'),
  npx: chalk.white('npx codyogden'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
