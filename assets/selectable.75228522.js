import{_ as c,r as d,o as s,f as u,c as f,a as i,b as _,w as b,F as g,d as p,j as m}from"./app.b1a052a1.js";const k={data(){return{data:[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],defaultProps:{children:"children",label:"label"}}},methods:{handleNodeClick(e){console.log(e)}}};function w(e,l,a,n,o,t){const r=d("el-tree");return s(),u(r,{data:o.data,props:o.defaultProps,accordion:"",onNodeClick:t.handleNodeClick},null,8,["data","props","onNodeClick"])}var C=c(k,[["render",w]]),ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const N={data(){return{data:[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],defaultProps:{children:"children",label:"label"}}},methods:{handleNodeClick(e){console.log(e)}}};function x(e,l,a,n,o,t){const r=d("el-tree");return s(),u(r,{data:o.data,props:o.defaultProps,onNodeClick:t.handleNodeClick},null,8,["data","props","onNodeClick"])}var y=c(N,[["render",x]]),Le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y});const S={data(){return{data:[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}],defaultProps:{children:"children",label:"label"}}},methods:{getCheckedNodes(){console.log(this.$refs.tree.getCheckedNodes())},getCheckedKeys(){console.log(this.$refs.tree.getCheckedKeys())},setCheckedNodes(){this.$refs.tree.setCheckedNodes([{id:5,label:"Level two 2-1"},{id:9,label:"Level three 1-1-1"}])},setCheckedKeys(){this.$refs.tree.setCheckedKeys([3])},resetChecked(){this.$refs.tree.setCheckedKeys([])}}},$={class:"buttons"},D=p("get by node"),O=p("get by key"),z=p("set by node"),T=p("set by key"),P=p("reset");function j(e,l,a,n,o,t){const r=d("el-tree"),h=d("el-button");return s(),f(g,null,[i(r,{ref:"tree",data:o.data,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"",props:o.defaultProps},null,8,["data","props"]),_("div",$,[i(h,{onClick:t.getCheckedNodes},{default:b(()=>[D]),_:1},8,["onClick"]),i(h,{onClick:t.getCheckedKeys},{default:b(()=>[O]),_:1},8,["onClick"]),i(h,{onClick:t.setCheckedNodes},{default:b(()=>[z]),_:1},8,["onClick"]),i(h,{onClick:t.setCheckedKeys},{default:b(()=>[T]),_:1},8,["onClick"]),i(h,{onClick:t.resetChecked},{default:b(()=>[P]),_:1},8,["onClick"])])],64)}var M=c(S,[["render",j]]),me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});const E={data(){return{props:{label:"name",children:"zones",isLeaf:"leaf"}}},methods:{loadNode(e,l){if(e.level===0)return l([{name:"region"}]);if(e.level>1)return l([]);setTimeout(()=>{l([{name:"leaf",leaf:!0},{name:"zone"}])},500)}}};function K(e,l,a,n,o,t){const r=d("el-tree");return s(),u(r,{props:o.props,load:t.loadNode,lazy:"","show-checkbox":""},null,8,["props","load"])}var V=c(E,[["render",K]]),ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V});const B={data(){const e=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",isPenultimate:!0,children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",isPenultimate:!0,children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",isPenultimate:!0,children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return{dataSource:JSON.parse(JSON.stringify(e))}},methods:{customNodeClass(e,l){return e.isPenultimate?"is-penultimate":null}}},J={class:"custom-tree-node-container"},F={class:"block"};function U(e,l,a,n,o,t){const r=d("el-tree");return s(),f("div",J,[_("div",F,[i(r,{data:o.dataSource,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1,props:{class:t.customNodeClass}},null,8,["data","props"])])])}var A=c(B,[["render",U]]),we=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});let R=1e3;const I={data(){const e=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return{dataSource:JSON.parse(JSON.stringify(e))}},methods:{append(e){const l={id:R++,label:"testtest",children:[]};e.children||(e.children=[]),e.children.push(l),this.dataSource=[...this.dataSource]},remove(e,l){const a=e.parent,n=a.data.children||a.data,o=n.findIndex(t=>t.id===l.id);n.splice(o,1),this.dataSource=[...this.dataSource]},renderContent(e,{node:l,data:a,store:n}){return e("span",{class:"custom-tree-node"},e("span",null,l.label),e("span",null,e("a",{onClick:()=>this.append(a)},"Append "),e("a",{onClick:()=>this.remove(l,a)},"Delete")))}}},q={class:"custom-tree-container"},G={class:"block"},H=_("p",null,"Using render-content",-1),Q={class:"block"},W=_("p",null,"Using scoped slot",-1),X={class:"custom-tree-node"},Y=["onClick"],Z=["onClick"];function ee(e,l,a,n,o,t){const r=d("el-tree");return s(),f("div",q,[_("div",G,[H,i(r,{data:o.dataSource,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1,"render-content":t.renderContent},null,8,["data","render-content"])]),_("div",Q,[W,i(r,{data:o.dataSource,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},{default:b(({node:h,data:v})=>[_("span",X,[_("span",null,m(h.label),1),_("span",null,[_("a",{onClick:L=>t.append(v)}," Append ",8,Y),_("a",{onClick:L=>t.remove(h,v)}," Delete ",8,Z)])])]),_:1},8,["data"])])])}var le=c(I,[["render",ee]]),Ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le});const te={data(){return{data:[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}],defaultProps:{children:"children",label:"label"}}}};function ae(e,l,a,n,o,t){const r=d("el-tree");return s(),u(r,{data:o.data,"show-checkbox":"","node-key":"id","default-expanded-keys":[2,3],"default-checked-keys":[5],props:o.defaultProps},null,8,["data","props"])}var oe=c(te,[["render",ae]]),Ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oe});const re={data(){return{data:[{id:1,label:"Level one 1",children:[{id:3,label:"Level two 2-1",children:[{id:4,label:"Level three 3-1-1"},{id:5,label:"Level three 3-1-2",disabled:!0}]},{id:2,label:"Level two 2-2",disabled:!0,children:[{id:6,label:"Level three 3-2-1"},{id:7,label:"Level three 3-2-2",disabled:!0}]}]}],defaultProps:{children:"children",label:"label",disabled:"disabled"}}}};function ne(e,l,a,n,o,t){const r=d("el-tree");return s(),u(r,{data:o.data,props:o.defaultProps,"show-checkbox":""},null,8,["data","props"])}var de=c(re,[["render",ne]]),xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:de});const ce={data(){return{data:[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],defaultProps:{children:"children",label:"label"}}},methods:{handleDragStart(e,l){console.log("drag start",e)},handleDragEnter(e,l,a){console.log("tree drag enter: ",l.label)},handleDragLeave(e,l,a){console.log("tree drag leave: ",l.label)},handleDragOver(e,l,a){console.log("tree drag over: ",l.label)},handleDragEnd(e,l,a,n){console.log("tree drag end: ",l&&l.label,a)},handleDrop(e,l,a,n){console.log("tree drop: ",l.label,a)},allowDrop(e,l,a){return l.data.label==="Level two 3-1"?a!=="inner":!0},allowDrag(e){return e.data.label.indexOf("Level three 3-1-1")===-1}}};function se(e,l,a,n,o,t){const r=d("el-tree");return s(),u(r,{"allow-drop":t.allowDrop,"allow-drag":t.allowDrag,data:o.data,draggable:"","default-expand-all":"","node-key":"id",onNodeDragStart:t.handleDragStart,onNodeDragEnter:t.handleDragEnter,onNodeDragLeave:t.handleDragLeave,onNodeDragOver:t.handleDragOver,onNodeDragEnd:t.handleDragEnd,onNodeDrop:t.handleDrop},null,8,["allow-drop","allow-drag","data","onNodeDragStart","onNodeDragEnter","onNodeDragLeave","onNodeDragOver","onNodeDragEnd","onNodeDrop"])}var ie=c(ce,[["render",se]]),ye=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ie});const _e={data(){return{filterText:"",data:[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}],defaultProps:{children:"children",label:"label"}}},watch:{filterText(e){this.$refs.tree.filter(e)}},methods:{filterNode(e,l){return e?l.label.indexOf(e)!==-1:!0}}};function he(e,l,a,n,o,t){const r=d("el-input"),h=d("el-tree");return s(),f(g,null,[i(r,{modelValue:o.filterText,"onUpdate:modelValue":l[0]||(l[0]=v=>o.filterText=v),placeholder:"Filter keyword"},null,8,["modelValue"]),i(h,{ref:"tree",class:"filter-tree",data:o.data,props:o.defaultProps,"default-expand-all":"","filter-node-method":t.filterNode},null,8,["data","props","filter-node-method"])],64)}var ue=c(_e,[["render",he]]),Se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ue});const be={data(){return{props:{label:"name",children:"zones"},count:1}},methods:{handleCheckChange(e,l,a){console.log(e,l,a)},handleNodeClick(e){console.log(e)},loadNode(e,l){if(e.level===0)return l([{name:"Root1"},{name:"Root2"}]);if(e.level>3)return l([]);let a;e.data.name==="region1"?a=!0:e.data.name==="region2"?a=!1:a=Math.random()>.5,setTimeout(()=>{let n;a?n=[{name:`zone${this.count++}`},{name:`zone${this.count++}`}]:n=[],l(n)},500)}}};function pe(e,l,a,n,o,t){const r=d("el-tree");return s(),u(r,{props:o.props,load:t.loadNode,lazy:"","show-checkbox":"",onCheckChange:t.handleCheckChange},null,8,["props","load","onCheckChange"])}var ve=c(be,[["render",pe]]),$e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ve});export{ge as _,Le as a,me as b,ke as c,we as d,Ce as e,Ne as f,xe as g,ye as h,Se as i,$e as j};
