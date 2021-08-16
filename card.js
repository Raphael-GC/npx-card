#!/usr/bin/env node

// Modules
const boxen = require("boxen");
const chalk = require("chalk");


const data = {
    name: chalk.green("                         Raphael Carneiro"),
    work: `${chalk.white("IT Assistant at")} ${chalk.cyan("Medgrupo")}`,

    github: chalk.gray("https://github.com/") + chalk.magenta("raphael-gc"),
    twitter: chalk.gray("https://twitter.com/") + chalk.magenta("_raphaelgc"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.magenta("raphael-gc"),
    web: chalk.cyan("https://raphaelcarneiro.dev.br"),

    npx: chalk.magenta("npx raphaelgc"),

    labelWork: ("         "),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,

        `${chalk.green.italic("🌱 I'm a human being in love with learning how everything works. 💛")}`,

    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "bold",
        borderColor: "magenta"
    }
);
console.log(me);