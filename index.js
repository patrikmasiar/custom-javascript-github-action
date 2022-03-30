const core = require('@actions/core');

try {
  console.log('Hello world! I am custom Javascript Github action!');
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
} catch (error) {
  core.setFailed(error.message);
}
