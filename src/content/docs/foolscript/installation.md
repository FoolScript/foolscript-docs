---
title: Installation
description: Install the FoolScript tool set
---

The bulk of the FoolScript system is built on top of the [new reusable prompts feature](https://code.visualstudio.com/docs/copilot/copilot-customization#_reusable-prompt-files-experimental) in VS Code. This allows you to create a `.github/prompts` folder in your project and add prompts to it. These prompts will then be available in the VS Code Copilot Chat window.

To create a custom prompt, simply create a markdown file in the `.github/prompts` folder of your project. The file should end in `.prompt.md`. You can then add the prompt content to the file.

To use the prompt in the VS Code Copilot Chat window, type `#` followed by the name of the prompt file. For example, if you have a prompt file called `my-prompt.prompt.md`, you would type `#my-prompt` in the chat window.

## Manual Installation

Navigate to the FoolScript docs repository and copy the contents of the `.github/prompts` folder into your project's `.github/prompts` folder.