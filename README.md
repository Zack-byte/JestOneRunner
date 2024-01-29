## Features

A simple lightweight VSCode Extension for Running Jest Tests specific to Angular Projects Running Typescript and Jest. I loved the **Test Explorer** extension in the way that it allows for you to run the tests with the click of a button. However I found that they were very expensive resource wise and didn't work on lower capacity machines. This extension adds a button to one click run the tests for your current file without holding the weight of the entire directory. 

![Action Bar](<Screenshot 2024-01-29 at 2.03.55 PM.png>)


## Requirements

In order for this extension to work your Angular projects package.json must have a script called `test:file` the command for this script is as follows `ng test <project-name> --test-path-pattern`.


## Usage

To use this extension use the **VSCODE** Extensions Panel and select `Install from VSIX` You can either use the one provided in the **GIT REPO** or you can package the project yourself using the `vsce`  tool and packaging the project yourself.

### 1.0.0

Super basic but plan to expand on this as I run into different situations. 

