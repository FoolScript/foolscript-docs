---
title: Usage
description: How to Use FoolScript
---

The bulk of the FoolScript system is built on top of the [new reusable prompts feature](https://code.visualstudio.com/docs/copilot/copilot-customization#_reusable-prompt-files-experimental) in VS Code which allows you to create a `.github/prompts` folder in your project and add prompts to it. These prompts will then be available in the VS Code Copilot Chat window.

To use the prompts, type `#` followed by the name of the prompt file. For example, if you have a prompt file called `my-prompt.prompt.md`, you would type `#my-prompt` in the chat window.

```txt title="FoolScript Prompts"
#fools-start.prompt.md
#fools-variables.prompt.md
#fools-boolean.prompt.md
#fools-class.prompt.md
#fools-cli.prompt.md
#fools-enum.prompt.md
#fools-files.prompt.md
#fools-functions.prompt.md
#fools-logic.prompt.md
#fools-print.prompt.md
#fools-types.prompt.md
```

To create a [custom prompt](../prompts/custom), simply create a markdown file in the `.github/prompts` folder of your project. The file should end in `.prompt.md`. You can then add the prompt content to the file.