"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = __importStar(require("vscode"));
const data_json_1 = require("./data.json");
function activate(context) {
    data_json_1.data.forEach((el) => {
        let provider = vscode.languages.registerCompletionItemProvider(['javascript', 'typeScript'], {
            provideCompletionItems(document, position) {
                let linePrefix = document.lineAt(position).text.substr(0, position.character);
                if (!linePrefix.endsWith(el['keyword'])) {
                    return undefined;
                }
                let completionItems = el.data.map((obj) => {
                    if (obj.kind == 'function') {
                        obj.kind = vscode.CompletionItemKind.Function;
                    }
                    return obj;
                });
                return completionItems;
            }
        }, '.');
        context.subscriptions.push(provider);
    });
    let provider1 = vscode.languages.registerCompletionItemProvider(['javascript', 'typescript', 'reactjs'], {
        provideCompletionItems(document, position, token, context) {
            const apiComp = new vscode.CompletionItem('kintone');
            apiComp.commitCharacters = ['.'];
            apiComp.documentation = new vscode.MarkdownString('(object) Press `.` to get `kintone.`');
            return [apiComp];
        }
    });
    context.subscriptions.push(provider1);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map