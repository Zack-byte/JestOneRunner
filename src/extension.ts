import * as vscode from "vscode";
import * as child_process from "child_process";

export function activate(context: vscode.ExtensionContext) {
  // Create a new status bar item
  let statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  statusBarItem.text = `$(arrow-right) Run Tests`;
  statusBarItem.tooltip = "Run Test on Current File";
  statusBarItem.command = "extension.runTestOnFile";
  statusBarItem.show();

  let disposable = vscode.commands.registerCommand(
    "extension.runTestOnFile",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showWarningMessage("No file is open");
        return;
      }

      const filePath = editor.document.uri.fsPath;
      const relativeFilePath = vscode.workspace.asRelativePath(filePath);
      const command = `npm run test:file ${relativeFilePath}`;

      child_process.exec(command, (error, stdout, stderr) => {
        if (error) {
          vscode.window.showErrorMessage(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          vscode.window.showErrorMessage(`Error: ${stderr}`);
          return;
        }
        vscode.window.showInformationMessage(`Output: ${stdout}`);
      });
    }
  );

  context.subscriptions.push(disposable, statusBarItem);
}

export function deactivate() {}
