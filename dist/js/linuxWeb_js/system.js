system={started:!1,encPassword:"bf0dbd74174039131b667de9f31b5d8012baaf82011b934b2cc0e3bd53a02a1f",global:{volume:50,brightness:100,isValid:e=>e&&""!==e.toString().trim()||0==e,elementExists:e=>void 0!==e&&null!=e,escapeHtml:e=>{var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return e.replace(/[&<>"']/g,(function(e){return t[e]}))}},changeBrightness:function(e){this.global.brightness=e,document.querySelector("html").style.filter=`brightness(${system.global.brightness/100})`},changeVolume:function(e){this.global.volume=e,X.services.volume.update()},startup:function(){if(this.started)return!1;this.started=!0,(async()=>{system.build=await(async()=>(await fetch("./build.ver")).text())()})(),X.initialize(),X.services.clock.update.add(document.querySelector("dateTime"),"month>str date  time-s")},validatePassword:function(e){return sha256(btoa(e))==system.encPassword},cli:{i:function(e=!1,t=!1){let s=null,l=e.split(" "),n=l.splice(0,1)[0].trim();if(0!=l.length){s={};let e="";l.forEach(t=>{t.startsWith("-")?(""!=e.trim()&&(s[e]=""),e=t):""!=t.trim()&&(s[e]=t,e="")})}return console.log(n),null!=system.cli.commands[n]?system.cli.commands[n].method(s):n+": command not found"},commands:{help:{shortHelp:"Displays help pages for commands",help:"Displays a help page for commands\n                    \n                USAGE\n                    help\n                    help <command>\n                ",method:e=>{console.log(e);let t="";if(null==e)t="-----help-----\n",t+="For more information about a specific command type: help <command>\n\n",t+=Object.entries(system.cli.commands).map(e=>`${e[0]}        ${e[1].shortHelp??"*No short help available*"}\n`).join("");else{let s=Object.values(e)[0];null==system.cli.commands[s]||null==system.cli.commands[s].help?t=`No help for '${s}' try: help help`:(t=`----- ${s} help-----\n\n`,t+=system.cli.commands[s].help+"\n")}return t}},echo:{help:'Echos your message back to you\n                        USAGE\n                        echo < message >\n                            ----------------\n                                echo HelloWorld\n                        or\n                        echo "Hello Word"',method:e=>{let t=Object.values(e)[0];return t=t.trim(),'"'==t[0]&&'"'==t.slice(-1)&&(t=t.slice(1,-1)[0]),t}}}},shutdown:()=>page.changePage("./html/shutdown.html"),logout:()=>page.changePage("./html/X.html","(async()=>{await retrieveMainJs(false);system.startup();})();"),restart:()=>page.changePage("./html/shutdown.html","afterShutdown='restart'",!1)};