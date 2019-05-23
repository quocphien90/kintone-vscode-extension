// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below


import * as vscode from 'vscode';
import {data}  from './data.json';

export function activate(context: vscode.ExtensionContext) {

	data.forEach((el:any)=> {
			
			let provider = vscode.languages.registerCompletionItemProvider(
				['javascript', 'typeScript'],
				{
					provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
						let linePrefix = document.lineAt(position).text.substr(0, position.character);
						if (!linePrefix.endsWith(el['keyword'])) {
							return undefined;
						}
						let completionItems = el.data.map((obj:any) => {
							if (obj.kind == 'function') {
								obj.kind = vscode.CompletionItemKind.Function
							}
							return obj;
						})
						return completionItems;
					}
				},'.');
			context.subscriptions.push(provider);
		});
	
	let provider1 = vscode.languages.registerCompletionItemProvider(['javascript', 'typescript', 'reactjs'], {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
			const apiComp = new vscode.CompletionItem('kintone');
			apiComp.commitCharacters = ['.'];
			apiComp.documentation = new vscode.MarkdownString('(object) Press `.` to get `kintone.`');
			return [apiComp];
		}
	});

	context.subscriptions.push(provider1)
}

// this method is called when your extension is deactivated
export function deactivate() {}
