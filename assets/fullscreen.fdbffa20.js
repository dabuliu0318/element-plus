import{g as u,h,t as f,_,r as n,a7 as p,a8 as i,o as g,f as $,w as l,a as t,c as v,F as S,K as w,ac as y,d as D}from"./app.b1a052a1.js";const k=u({setup(){const e=h({tableData:[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}],loading:!0});return f(e)}});function J(e,d,c,s,m,b){const a=n("el-table-column"),o=n("el-table"),r=p("loading");return i((g(),$(o,{data:e.tableData,style:{width:"100%"}},{default:l(()=>[t(a,{prop:"date",label:"Date",width:"180"}),t(a,{prop:"name",label:"Name",width:"180"}),t(a,{prop:"address",label:"Address"})]),_:1},8,["data"])),[[r,e.loading]])}var N=_(k,[["render",J]]),z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});const j=u({setup(){const e=h({tableData:[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}],loading:!0,svg:`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `});return f(e)}});function F(e,d,c,s,m,b){const a=n("el-table-column"),o=n("el-table"),r=p("loading");return g(),v(S,null,[i(t(o,{"element-loading-text":"Loading...","element-loading-spinner":e.svg,"element-loading-svg-view-box":"-10, -10, 50, 50","element-loading-background":"rgba(0, 0, 0, 0.8)",data:e.tableData,style:{width:"100%"}},{default:l(()=>[t(a,{prop:"date",label:"Date",width:"180"}),t(a,{prop:"name",label:"Name",width:"180"}),t(a,{prop:"address",label:"Address"})]),_:1},8,["element-loading-spinner","data"]),[[r,e.loading]]),i(t(o,{"element-loading-svg":e.svg,class:"custom-loading-svg","element-loading-svg-view-box":"-10, -10, 50, 50",data:e.tableData,style:{width:"100%"}},{default:l(()=>[t(a,{prop:"date",label:"Date",width:"180"}),t(a,{prop:"name",label:"Name",width:"180"}),t(a,{prop:"address",label:"Address"})]),_:1},8,["element-loading-svg","data"]),[[r,e.loading]])],64)}var A=_(j,[["render",F]]),B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const C=u({setup(){const e=w(!1);return{fullscreenLoading:e,openFullScreen1:()=>{e.value=!0,setTimeout(()=>{e.value=!1},2e3)},openFullScreen2:()=>{const s=y.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(()=>{s.close()},2e3)}}}}),L=D(" As a directive "),R=D(" As a service ");function P(e,d,c,s,m,b){const a=n("el-button"),o=p("loading");return g(),v(S,null,[i(t(a,{type:"primary",onClick:e.openFullScreen1},{default:l(()=>[L]),_:1},8,["onClick"]),[[o,e.fullscreenLoading,void 0,{fullscreen:!0,lock:!0}]]),t(a,{type:"primary",onClick:e.openFullScreen2},{default:l(()=>[R]),_:1},8,["onClick"])],64)}var T=_(C,[["render",P]]),O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T});export{z as _,B as a,O as b};
