/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";function showPartsSplash(t){perf.mark("willShowPartsSplash");let e;try{if(process.env.VSCODE_TEST_STORAGE_MIGRATION)e=JSON.parse(t.partsSplashData);else{perf.mark("willReadLocalStorage");let t=window.localStorage.getItem("storage://global/parts-splash-data");perf.mark("didReadLocalStorage"),e=JSON.parse(t)}}catch(t){}e&&t.highContrast&&"hc-black"!==e.baseTheme&&(e=void 0),e&&t.extensionDevelopmentPath&&(e.layoutInfo=void 0);const o=e?e.baseTheme:t.highContrast?"hc-black":"vs-dark",a=e?e.colorInfo.editorBackground:t.highContrast?"#000000":"#1E1E1E",r=e?e.colorInfo.foreground:t.highContrast?"#FFFFFF":"#CCCCCC",i=document.createElement("style");if(i.className="initialShellColors",document.head.appendChild(i),document.body.className=`monaco-shell ${o}`,i.innerHTML=`.monaco-shell { background-color: ${a}; color: ${r}; }`,e&&e.layoutInfo){const{id:o,layoutInfo:a,colorInfo:r}=e,i=document.createElement("div");i.id=o,
a.sideBarWidth=Math.min(a.sideBarWidth,window.innerWidth-(a.activityBarWidth+a.editorPartMinWidth)),
t.folderUri||t.workspace?i.innerHTML=`\n\t\t\t<div style="position: absolute; width: 100%; left: 0; top: 0; height: ${a.titleBarHeight}px; background-color: ${r.titleBarBackground}; -webkit-app-region: drag;"></div>\n\t\t\t<div style="position: absolute; height: calc(100% - ${a.titleBarHeight}px); top: ${a.titleBarHeight}px; ${a.sideBarSide}: 0; width: ${a.activityBarWidth}px; background-color: ${r.activityBarBackground};"></div>\n\t\t\t<div style="position: absolute; height: calc(100% - ${a.titleBarHeight}px); top: ${a.titleBarHeight}px; ${a.sideBarSide}: ${a.activityBarWidth}px; width: ${a.sideBarWidth}px; background-color: ${r.sideBarBackground};"></div>\n\t\t\t<div style="position: absolute; width: 100%; bottom: 0; left: 0; height: ${a.statusBarHeight}px; background-color: ${r.statusBarBackground};"></div>\n\t\t\t`:i.innerHTML=`\n\t\t\t<div style="position: absolute; width: 100%; left: 0; top: 0; height: ${a.titleBarHeight}px; background-color: ${r.titleBarBackground}; -webkit-app-region: drag;"></div>\n\t\t\t<div style="position: absolute; height: calc(100% - ${a.titleBarHeight}px); top: ${a.titleBarHeight}px; ${a.sideBarSide}: 0; width: ${a.activityBarWidth}px; background-color: ${r.activityBarBackground};"></div>\n\t\t\t<div style="position: absolute; width: 100%; bottom: 0; left: 0; height: ${a.statusBarHeight}px; background-color: ${r.statusBarNoFolderBackground};"></div>\n\t\t\t`,
document.body.appendChild(i)}perf.mark("didShowPartsSplash")}function getLazyEnv(){const t=require("electron").ipcRenderer;return new Promise(function(e){const o=setTimeout(function(){e(),console.warn("renderer did not receive lazyEnv in time")},1e4);t.once("vscode:acceptShellEnv",function(t,a){clearTimeout(o),bootstrapWindow.assign(process.env,a),e(process.env)}),t.send("vscode:fetchShellEnv")})}const perf=require("../../../base/common/performance");perf.mark("renderer/started");const bootstrapWindow=require("../../../../bootstrap-window");process.lazyEnv=getLazyEnv(),bootstrapWindow.load(["vs/workbench/workbench.main","vs/nls!vs/workbench/workbench.main","vs/css!vs/workbench/workbench.main"],function(t,e){return perf.mark("didLoadWorkbenchMain"),process.lazyEnv.then(function(){return perf.mark("main/startup"),require("vs/workbench/electron-browser/main").startup(e)})},{removeDeveloperKeybindingsAfterLoad:!0,canModifyDOM:function(t){showPartsSplash(t)},beforeLoaderConfig:function(t,e){
if(e.recordStats=!!t.performance,e.nodeCachedData){const t=window.MonacoEnvironment.onNodeCachedData=[];e.nodeCachedData.onData=function(){t.push(arguments)}}},beforeRequire:function(){perf.mark("willLoadWorkbenchMain")}});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/dea8705087adb1b5e5ae1d9123278e178656186a/core/vs/code/electron-browser/workbench/workbench.js.map
