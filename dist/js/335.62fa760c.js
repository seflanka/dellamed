"use strict";(self["webpackChunkdellamed"]=self["webpackChunkdellamed"]||[]).push([[335],{335:function(a,t,d){d.r(t),d.d(t,{default:function(){return C}});var e=d(252);function s(a,t,d,s,l,c){const i=(0,e.up)("Deshboard");return(0,e.wg)(),(0,e.j4)(i)}var l=d(577);const c={key:0,id:"table"},i=(0,e.uE)('<div id="table-heading" data-v-c50d9bc0><div class="table-large" data-v-c50d9bc0>Filial</div><div class="table-large" data-v-c50d9bc0>Nf</div><div class="table-large" data-v-c50d9bc0>Chegada</div><div class="table-large" data-v-c50d9bc0>Nf da Devolução</div><div class="table-large" data-v-c50d9bc0>Cliente</div><div class="table-large" data-v-c50d9bc0>Observação</div><div class="table-large" data-v-c50d9bc0>Ações</div></div>',1),o={id:"cadastro-table"},n={class:"button"},v={class:"btn1"},r=["onClick"],h={class:"btn2"},b=["onClick"];function u(a,t,d,s,u,w){return u.cadastros?((0,e.wg)(),(0,e.iD)("div",c,[i,(0,e._)("div",o,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(u.cadastros,(a=>((0,e.wg)(),(0,e.iD)("div",{class:"cadastro-table-itens",key:a.id},[(0,e._)("div",null,(0,l.zw)(a.devolucao),1),(0,e._)("div",null,(0,l.zw)(a.nf),1),(0,e._)("div",null,(0,l.zw)(a.chegada),1),(0,e._)("div",null,(0,l.zw)(a.nf_Devolucao),1),(0,e._)("div",null,(0,l.zw)(a.cliente),1),(0,e._)("div",null,(0,l.zw)(a.observacao),1),(0,e._)("div",n,[(0,e._)("div",v,[(0,e._)("button",{class:"delete-btn",onClick:t=>w.deleteCadastro(a.id)},"Remover",8,r)]),(0,e._)("div",h,[(0,e._)("button",{class:"planilha-btn",onClick:t=>w.checkPlanilha(a.id)},"Check Planilha",8,b)])])])))),128))])])):(0,e.kq)("",!0)}var w={name:"Deshboard",data(){return{cadastros:null}},methods:{async getPedidos(){const a=await fetch("http://localhost:3000/cadastros"),t=await a.json();this.cadastros=t},async checkPlanilha(a){const t=await fetch(`http://localhost:3000/cadastros/${a}`),d=await t.json(),e=JSON.stringify(d),s=(await fetch("http://localhost:3000/planilha",{method:"POST",headers:{"content-type":"application/json"},body:e}),await fetch(`http://localhost:3000/cadastros/${a}`,{method:"DELETE"}));await s.json();this.getPedidos()},async deleteCadastro(a){const t=await fetch(`http://localhost:3000/cadastros/${a}`,{method:"DELETE"});await t.json();this.getPedidos()}},mounted(){this.getPedidos()}},g=d(744);const f=(0,g.Z)(w,[["render",u],["__scopeId","data-v-c50d9bc0"]]);var p=f,_={name:"Cadastros",components:{Deshboard:p}};const k=(0,g.Z)(_,[["render",s]]);var C=k}}]);
//# sourceMappingURL=335.62fa760c.js.map