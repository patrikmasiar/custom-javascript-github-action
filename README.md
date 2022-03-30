# Custom Javascript Github action
### Description
Github action that says ***"Hello world! I am custom Javascript Github action!"*** on the output.

## Getting started

## Usage
```yaml
name: Custom workflow
on:
  push:
    branches:
      - master

jobs:
  custom_jobs:
    name: E2E
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # USAGE
    - uses: patrikmasiar/custom-javascript-github-action@main
```