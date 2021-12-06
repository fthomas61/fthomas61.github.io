"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2304,4925],{84925:(e,t,o)=>{o.r(t),o.d(t,{default:()=>O});var n=o(70163),a=o(78241),r=o(64890),i=o(56532),s=o(7451),l=o(33469),d=o(87580),c=o(95187),p=o(95867),u=o(34437),m=o(93315),g=o(79444),b=o(18151);const h=new RegExp("/(notebooks|edit)/(.*)");var v;!function(e){e.toggleTop="application:toggle-top",e.toggleZen="application:toggle-zen",e.openLab="application:open-lab",e.openTree="application:open-tree",e.resolveTree="application:resolve-tree"}(v||(v={}));const x={id:"@retrolab/application-extension:dirty",autoStart:!0,requires:[n.ILabStatus,c.ITranslator],activate:(e,t,o)=>{if(!(e instanceof p.RetroApp))throw new Error(`${x.id} must be activated in RetroLab.`);const n=o.load("retrolab").__("Are you sure you want to exit RetroLab?\n\nAny unsaved changes will be lost.");window.addEventListener("beforeunload",(t=>{if(e.status.isDirty)return t.returnValue=n}))}},f={id:"@retrolab/application-extension:logo",autoStart:!0,activate:e=>{const t=i.PageConfig.getBaseUrl(),o=document.createElement("a");o.href=`${t}retro/tree`,o.target="_blank",o.rel="noopener noreferrer";const n=new b.Widget({node:o});("true"===i.PageConfig.getOption("retroLogo")?u.retroInlineIcon:u.jupyterIcon).element({container:o,elementPosition:"center",padding:"2px 2px 2px 8px",height:"28px",width:"auto"}),n.id="jp-RetroLogo",e.shell.add(n,"top",{rank:0})}},w={id:"@retrolab/application-extension:opener",autoStart:!0,requires:[n.IRouter,s.IDocumentManager],activate:(e,t,o)=>{const{commands:n}=e,a="router:tree";n.addCommand(a,{execute:t=>{var n;const a=null!==(n=t.path.match(h))&&void 0!==n?n:[],[,,r]=a;if(!r)return;const s=decodeURIComponent(r),l=i.PathExt.extname(s);e.restored.then((()=>{".ipynb"===l?o.open(s,"Notebook",void 0,{ref:"_noref"}):o.open(s,"Editor",void 0,{ref:"_noref"})}))}}),t.register({command:a,pattern:h})}},I={id:"@retrolab/application-extension:no-tabs-menu",requires:[d.IMainMenu],autoStart:!0,activate:(e,t)=>{t.tabsMenu.dispose()}},C={id:"@retrolab/application-extension:pages",autoStart:!0,requires:[c.ITranslator],optional:[a.ICommandPalette,d.IMainMenu],activate:(e,t,o,n)=>{const a=t.load("retrolab"),r=i.PageConfig.getBaseUrl();e.commands.addCommand(v.openLab,{label:a.__("Open JupyterLab"),execute:()=>{window.open(`${r}lab`)}}),e.commands.addCommand(v.openTree,{label:a.__("Open Files"),execute:()=>{window.open(`${r}retro/tree`)}}),o&&[v.openLab,v.openTree].forEach((e=>{o.addItem({command:e,category:"View"})})),n&&n.viewMenu.addGroup([{command:v.openLab},{command:v.openTree}],0)}},R={id:"@retrolab/application-extension:paths",autoStart:!0,provides:n.JupyterFrontEnd.IPaths,activate:e=>{if(!(e instanceof p.RetroApp))throw new Error(`${R.id} must be activated in RetroLab.`);return e.paths}},S={id:"@retrolab/application-extension:router",autoStart:!0,provides:n.IRouter,requires:[n.JupyterFrontEnd.IPaths],activate:(e,t)=>{const{commands:o}=e,a=t.urls.base,r=new n.Router({base:a,commands:o});return e.started.then((()=>{r.route(),window.addEventListener("popstate",(()=>{r.route()}))})),r}},E={id:"@retrolab/application-extension:session-dialogs",provides:a.ISessionContextDialogs,autoStart:!0,activate:()=>a.sessionContextDialogs},T={id:"@retrolab/application-extension:shell",activate:e=>{if(!(e.shell instanceof p.RetroShell))throw new Error(`${T.id} did not find a RetroShell instance.`);return e.shell},autoStart:!0,provides:p.IRetroShell},P={id:"@retrolab/application-extension:spacer",autoStart:!0,activate:e=>{const t=new b.Widget;t.id=a.DOMUtils.createDomID(),t.addClass("jp-RetroSpacer"),e.shell.add(t,"top",{rank:1e4});const o=new b.Widget;o.id=a.DOMUtils.createDomID(),o.addClass("jp-RetroSpacer"),e.shell.add(o,"menu",{rank:1e4})}},L={id:"@retrolab/application-extension:status",autoStart:!0,provides:n.ILabStatus,activate:e=>{if(!(e instanceof p.RetroApp))throw new Error(`${L.id} must be activated in RetroLab.`);return e.status}},D={id:"@retrolab/application-extension:tab-title",autoStart:!0,requires:[p.IRetroShell],activate:(e,t)=>{const o=()=>{const e=t.currentWidget;if(e instanceof r.ConsolePanel){const t=()=>{const t=e.sessionContext.path||e.sessionContext.name,o=i.PathExt.basename(t);document.title=o};return e.sessionContext.sessionChanged.connect(t),void t()}if(e instanceof l.DocumentWidget){const t=()=>{const t=i.PathExt.basename(e.context.path);document.title=t};e.context.pathChanged.connect(t),t()}};t.currentChanged.connect(o),o()}},_={id:"@retrolab/application-extension:title",autoStart:!0,requires:[p.IRetroShell],optional:[s.IDocumentManager,n.IRouter],activate:(e,t,o,n)=>{const a=new b.Widget;a.id="jp-title",e.shell.add(a,"top",{rank:10});const r=async()=>{const e=t.currentWidget;if(!(e&&e instanceof l.DocumentWidget))return;if(a.node.children.length>0)return;const r=document.createElement("h1");r.textContent=e.title.label,a.node.appendChild(r),a.node.style.marginLeft="10px",o&&(a.node.onclick=async()=>{var t,a;const l=await(0,s.renameDialog)(o,e.context.path);if(e&&e.activate(),null===l)return;const d=null!==(t=e.context.path)&&void 0!==t?t:l.path,c=i.PathExt.basename(d);if(r.textContent=c,!n)return;const p=null!==(a=n.current.path.match(h))&&void 0!==a?a:[],[,u,m]=p;if(!u||!m)return;const g=encodeURIComponent(d);n.navigate(`/retro/${u}/${g}`,{skipRouting:!0})})};t.currentChanged.connect(r),r()}},y={id:"@retrolab/application-extension:top",requires:[p.IRetroShell,c.ITranslator],optional:[d.IMainMenu],activate:(e,t,o,n)=>{const a=o.load("retrolab"),r=t.top;e.commands.addCommand(v.toggleTop,{label:a.__("Show Header"),execute:()=>{r.setHidden(r.isVisible)},isToggled:()=>r.isVisible}),n&&n.viewMenu.addGroup([{command:v.toggleTop}],2);const i=()=>{"desktop"===e.format?t.expandTop():t.collapseTop()};e.formatChanged.connect(i),i()},autoStart:!0},M={id:"@retrolab/application-extension:tree-resolver",autoStart:!0,requires:[n.IRouter],provides:n.JupyterFrontEnd.ITreeResolver,activate:(e,t)=>{const{commands:o}=e,n=new g.DisposableSet,a=new m.PromiseDelegate,r=new RegExp("/retro(/tree/.*)?");n.add(o.addCommand(v.resolveTree,{execute:async e=>{var t;if(n.isDisposed)return;const o=i.URLExt.queryStringToObject(null!==(t=e.search)&&void 0!==t?t:""),r=o["file-browser-path"]||"";delete o["file-browser-path"],n.dispose(),a.resolve({browser:r,file:i.PageConfig.getOption("treePath")})}})),n.add(t.register({command:v.resolveTree,pattern:r}));const s=()=>{n.isDisposed||(n.dispose(),a.resolve(null))};return t.routed.connect(s),n.add(new g.DisposableDelegate((()=>{t.routed.disconnect(s)}))),{paths:a.promise}}},U={id:"@retrolab/application-extension:tree-updater",requires:[n.IRouter],provides:n.ITreePathUpdater,activate:(e,t)=>function(e){if(e!==i.PageConfig.getOption("treePath")){const o=i.URLExt.join(i.PageConfig.getOption("baseUrl")||"/","retro","tree",i.URLExt.encodeParts(e));t.navigate(o,{skipRouting:!0}),i.PageConfig.setOption("treePath",e)}},autoStart:!0},k={id:"@retrolab/application-extension:zen",autoStart:!0,requires:[c.ITranslator],optional:[a.ICommandPalette,p.IRetroShell,d.IMainMenu],activate:(e,t,o,n,a)=>{const{commands:r}=e,i=document.documentElement,s=t.load("retrolab"),l=()=>{null==n||n.expandTop(),null==n||n.menu.setHidden(!1),d=!1};let d=!1;r.addCommand(v.toggleZen,{label:s.__("Toggle Zen Mode"),execute:()=>{d?(document.exitFullscreen(),l()):(i.requestFullscreen(),null==n||n.collapseTop(),null==n||n.menu.setHidden(!0),d=!0)}}),document.addEventListener("fullscreenchange",(()=>{document.fullscreenElement||l()})),o&&o.addItem({command:v.toggleZen,category:"Mode"}),a&&a.viewMenu.addGroup([{command:v.toggleZen}],3)}},O=[x,f,I,w,C,R,S,E,T,P,L,D,_,y,M,U,k]}}]);
//# sourceMappingURL=2304.a3175460691696973a5d.js.map