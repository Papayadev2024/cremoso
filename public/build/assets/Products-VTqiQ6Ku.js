import{R as e,r as n}from"./FilterContainer-TykbAVkI.js";import{c as E}from"./ReactAppend-GBOQKLDe.js";import{C as b}from"./CreateReactScript-Il069F1S.js";import"./SelectAPIFormGroup-A251JnnE.js";import"./OfferCard-Wbn3Y7Zw.js";import"./TippyButton-w0wM3ydO.js";import{R as f}from"./OfferForm-ukR-vBLm.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-GBzf7Cls.js";import"./CreateReactScript-Hm6EbMAE.js";import"./axios-_sX4vCAy.js";import"./index-VFMbf6KQ.js";const h=({id:o,producto:c,discount:t,price:l,onDeleteClicked:s})=>e.createElement("tr",null,e.createElement("td",null,c),e.createElement("td",null,"S/. ",t>0?t.toFixed(2):l.toFixed(2)," ",t>0&&e.createElement("span",{className:"line-through"},l.toFixed(2))),e.createElement("td",null,e.createElement("button",null,"Editar"),e.createElement("button",{onClick:()=>s(o)},"Eliminar"))),P=({text:o,children:c})=>e.createElement("h1",{className:"h1"},c||o);f.setAppElement("body");const N=({products:o=[]})=>{const c=n.useRef(),[t,l]=n.useState(o),[s,u]=n.useState("Ningun producto borrado");n.useEffect(()=>{console.log("aqui deberia ejecutarse el datatable")},[t]),n.useEffect(()=>{fetch("https://google.com")},[null]);const d=()=>{const r=structuredClone(t),a=r.shift();u(`El producto ${a.producto} se ha eliminado`),l(r)},i=r=>{const m=structuredClone(t).filter(p=>p.id!=r);l(m)};return e.createElement(e.Fragment,null,e.createElement("div",{className:"p-6"},e.createElement("button",{className:"bg-blue-400 p-2 rounded-md",onClick:d},"Eliminar primer registro"),e.createElement(P,{text:s}),e.createElement("table",{ref:c,className:"table border w-full"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("td",null,"Nombre"),e.createElement("td",null,"Precio"),e.createElement("td",null,"Acciones"))),e.createElement("tbody",null,t.length>0?t.map(r=>{const a=Number(r.precio)||0,m=Number(r.descuento)||0;return e.createElement(h,{...r,price:a,discount2:m,onDeleteClicked:i})}):"No hay productos"))))};b((o,c)=>{E(o).render(e.createElement(N,{...c}))});