---
title: TypeScript
description: The fastest way to build TypeScript projects
---

For most of my TypeScript projects I use [Bun](https://bun.sh/):

```bash
curl -fsSL https://bun.sh/install | bash
```

## Program

Create the project folder:
```bash
mkdir quickstart
cd quickstart
```

Init the project:
```bash
bun init
```

Write the program:

```TypeScript
console.log("Hello via Bun!");
```

Run it:

```bash
bun index.ts
```

:::note
You can also use `bun run index.ts`, but why would you do that?
:::

## CLI

CLI apps are created the same way as normal programs but there are a few things you'll want to do differently. 

To use arguments passed in by the user when the program first runs, use the [process.argv](https://nodejs.org/api/process.html#processargv) property. This property returns the command-line arguments passed when the Node.js (or bun) process was launched. Elements 1 (the path to the executable that started the Node.js process) and 2 (the path to the file being executed) can typically be ignored:

For this command:
```bash
bun index.ts 29
```

You can get the argument like this:
```TypeScript
const age = Number(process.argv.slice(2));
```

To gather user input while a program is running, use [readline](https://nodejs.org/api/readline.html#readline_readline):

```TypeScript
import readline from 'readline';

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

rl.question('What is your age? ', age => {
        console.log(`You are ${age} years old.`);
    });
```

An async example can be found [here](https://stackoverflow.com/a/49055758/12806961).

## API

## Website

## Templates

The [bun create](https://bun.sh/docs/cli/bun-create) command lets you create programs using templates from npm, Github, or your local machine.