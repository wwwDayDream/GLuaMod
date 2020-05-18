// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
var recursive = require("recursive-readdir");
//const parser = require('luaparse');
const path = require('path');
const fs = require('fs');

class LuaViewProvider{
	constructor(context) {
		this.workspaceRoot = context + "\\";
		this.Directories = [];
		this.Files = [];
	}
	addTreeItems(err, files, isDir) {
		if (err) {vscode.window.showErrorMessage("Error during workspace root loading.");}
		files.forEach(f => {
			let t = new vscode.TreeItem(f);
			if (isDir) { this.Directories.push(t); } else { this.Files.push(t); }
		});
	}
	getTreeItem(element){
		return element;
	}
	async getChildren(element) {
		let tItems = [];
		
		function ignoreFile(file, stats) {
			// `file` is the path to the file, and `stats` is an `fs.Stats`
			// object returned from `fs.lstat()`.
			return stats.isFile();
		}
		function ignoreFolder(file, stats) {
			// `file` is the path to the file, and `stats` is an `fs.Stats`
			// object returned from `fs.lstat()`.
			return stats.isDirectory();
		}
		if (!this.workspaceRoot) { vscode.window.showErrorMessage("No available root workspace!"); return }

		if (!fs.existsSync(this.workspaceRoot)) {vscode.window.showErrorMessage("Root workspace is corrupted!"); return }
		

		let promise = recursive(this.workspaceRoot, [ignoreFile]);
		let strFinal = [];
		promise.then((str) => strFinal = str);

		await promise;

		strFinal.forEach(st => {
			tItems.push(new vscode.TreeItem(st));
		});

		tItems.concat(this.Directories);
		tItems.concat(this.Files);
		tItems.push(new vscode.TreeItem(this.Directories.length.toString()))

		return Promise.resolve(tItems);
	}
	/**
	 * @param {String} dir
	 * @param {(Directories: String[], Files: String[], Items: vscode.TreeItem[]) => void} [dg]
	 */
	recursiveReadDir(dir, tItems, dg) {
		let Directories = [];
		let Files = [];
		let _stack = [];
		fs.readdir(dir, {}, (err, Files) => {
			Files.forEach(f => {
				let fStat = fs.statSync(f);
				if (fStat.isFile()) {
					Directories.push(f);
				} else if (fStat.isDirectory()) {
					Files.push(f);
				}
			});
		});
		tItems = dg(Directories, Files, tItems);
		Directories.forEach(dir => {
			
			this.recursiveReadDir(dir, dg);
		});
		return tItems
	}
	pathExists(p) {
		try {
		  fs.accessSync(p);
		} catch (err) {
		  return false;
		}
		return true;
	  }
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "luamod" is now active!');
	

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('luamod2.clean', function () {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		
		let editor = vscode.window.activeTextEditor;
		if (editor) {
			let document = editor.document;
			let selection = editor.selection;


			let fullContent = document.getText(
				new vscode.Selection(
					new vscode.Position(
						selection.start.line,
						0
					),
					new vscode.Position(
						selection.end.line,
						0
					)
				)
			);
						
			let lines = fullContent.split("\n");
			
			editor.edit((editBuilder) => {
				editBuilder.insert(selection.start, "--{%} ## Region");
				editBuilder.insert(selection.end, "--!{%} ")
			});

			let f = new vscode.Position(selection.start.line, selection.start.character + 9);
			let f2 = new vscode.Position(selection.start.line, selection.start.character + 18);


			editor.selection = new vscode.Selection(f, f2);

			
		}
		
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}

