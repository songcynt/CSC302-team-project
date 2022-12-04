const structuredLog = require('structured-log');

// Create new log and write to console
const log = structuredLog.configure()
  .writeTo(new structuredLog.ConsoleSink())
  .create();

log.info('Start of log');

module.exports = log;