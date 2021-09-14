const vscode = require('vscode');

const config = vscode.workspace.getConfiguration('vscode-elixir-test');

function handler() {
  const terminal = vscode.window.activeTerminal || vscode.window.createTerminal();
  terminal.sendText('mix test --failed');
  if (config.focusOnTerminalAfterTest) terminal.show();
}

module.exports = {
  name: 'extension.elixirRunFailedTests',
  handler,
};
