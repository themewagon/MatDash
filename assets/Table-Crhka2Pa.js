import{j as s,T as e,P as n,a as d,D as l,H as m}from"./index-ChZX6vGC.js";import{I as p}from"./iconify-EwvX8HRL.js";import{p as x,a as h,b as u,c as j}from"./dash-prd-4-FjhqTAk9.js";const g=()=>{const t=[{img:x,name:"iPhone 13 pro max-Pacific Blue-128GB storage",payment:"$180",paymentstatus:"Partially paid",process:45,processcolor:"bg-warning",statuscolor:"secondary",statustext:"Confirmed"},{img:h,name:"Apple MacBook Pro 13 inch-M1-8/256GB-space",payment:"$120",paymentstatus:"Full paid",process:100,processcolor:"bg-success",statuscolor:"success",statustext:"Confirmed"},{img:u,name:"PlayStation 5 DualSense Wireless Controller",payment:"$120",paymentstatus:"Cancelled",process:100,processcolor:"bg-error",statuscolor:"error",statustext:"Cancelled"},{img:j,name:"Amazon Basics Mesh, Mid-Back, Swivel Office",payment:"$120",paymentstatus:"Partially paid",process:45,processcolor:"bg-warning",statuscolor:"secondary",statustext:"Confirmed"}],c=[{icon:"solar:add-circle-outline",listtitle:"Add"},{icon:"solar:pen-new-square-broken",listtitle:"Edit"},{icon:"solar:trash-bin-minimalistic-outline",listtitle:"Delete"}];return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"rounded-xl dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6  relative w-full break-words",children:[s.jsx("h5",{className:"card-title",children:"Table"}),s.jsx("div",{className:"mt-3",children:s.jsx("div",{className:"overflow-x-auto",children:s.jsxs(e,{hoverable:!0,children:[s.jsxs(e.Head,{children:[s.jsx(e.HeadCell,{className:"p-6",children:"Products"}),s.jsx(e.HeadCell,{children:"Payment"}),s.jsx(e.HeadCell,{children:"Status"}),s.jsx(e.HeadCell,{})]}),s.jsx(e.Body,{className:"divide-y divide-border dark:divide-darkborder ",children:t.map((a,o)=>s.jsxs(e.Row,{children:[s.jsx(e.Cell,{className:"whitespace-nowrap ps-6",children:s.jsxs("div",{className:"flex gap-3 items-center",children:[s.jsx("img",{src:a.img,alt:"icon",className:"h-[60px] w-[60px] rounded-md"}),s.jsx("div",{className:"truncat line-clamp-2 sm:text-wrap max-w-56",children:s.jsx("h6",{className:"text-sm",children:a.name})})]})}),s.jsxs(e.Cell,{children:[s.jsxs("h5",{className:"text-base text-wrap",children:[a.payment,s.jsxs("span",{className:"text-dark opacity-70",children:[s.jsx("span",{className:"mx-1",children:"/"}),"499"]})]}),s.jsx("div",{className:"text-sm font-medium text-dark opacity-70 mb-2 text-wrap",children:a.paymentstatus}),s.jsx("div",{className:"me-5",children:s.jsx(n,{progress:a.process,color:`${a.processcolor}`,className:`${a.processcolor}`,size:"sm"})})]}),s.jsx(e.Cell,{children:s.jsx(d,{color:`light${a.statuscolor}`,className:`text-${a.statuscolor}`,children:a.statustext})}),s.jsx(e.Cell,{children:s.jsx(l,{label:"",dismissOnClick:!1,renderTrigger:()=>s.jsx("span",{className:"h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer",children:s.jsx(m,{size:22})}),children:c.map((r,i)=>s.jsxs(l.Item,{className:"flex gap-3",children:[" ",s.jsx(p,{icon:`${r.icon}`,height:18}),s.jsx("span",{children:r.listtitle})]},i))})})]},o))})]})})})]})})},N=()=>s.jsx(s.Fragment,{children:s.jsx(g,{})});export{N as default};
