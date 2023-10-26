#!/usr/bin/env node

const { readFileSync } = require("fs");
const { join } = require("path");
const chalk = require("chalk");

console.log(
  `Coming soon. More info at ${chalk.blueBright("https://keel.so")}.`
);
console.log(readFileSync(join(__dirname, "discofish.txt"), "utf8"));
