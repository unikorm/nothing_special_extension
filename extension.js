// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "dajakasprostost" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('dajakasprostost.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from dajakaSprostost!');
	});



	let disposablee = vscode.commands.registerCommand('dajakasprostost.start', function () {

		   // Create and show panel
		   const panel = vscode.window.createWebviewPanel(
			'loveYou',
			'princess',
			vscode.ViewColumn.Beside,
			{}
		  );
	
		  // And set its HTML content
		  panel.webview.html = getWebviewContent();
	});

	function getWebviewContent() {
		return `<!DOCTYPE html>
	  <html lang="en">
	  <head>
		  <meta charset="UTF-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <title>Princess</title>
		  <link
    		rel="stylesheet"
    		href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  		 />
		  <style>
		  .animate__animated.animate__pulse {
			--animate-duration: .2s;
		  }

		  </style>
	  </head>
	  <body>
		  <img class="animate__animated animate__pulse animate__infinite" src="https://www.rd.com/wp-content/uploads/2020/11/GettyImages-889552354-e1606774439626.jpg" width="100%" />
	  </body>
	  </html>`;
	  }



	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
