import{u as w,a as S,b4 as h,e as C,c3 as y,f as e,a0 as g,B as u,Y as f,c4 as B,c5 as _,c6 as m,w as d,c7 as p,c8 as v,c9 as a,bd as b,n as x,W as F,bs as P,ad as R,ag as D,a2 as H}from"./index.f279c399.js";import{u as $}from"./useT.33ce2452.js";import{b as L}from"./useTitle.16f0d800.js";import{D as M}from"./DeletePopover.9642598c.js";const z=t=>{const n=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(P,{get colorScheme(){return n[t.role].color},get children(){return n[t.role].name}})},I=t=>{const n=$(),c=s=>`$${s?"success":"danger"}9`;return e(g,{spacing:"$0_5",get children(){return e(d,{each:R,children:(s,o)=>e(D,{get label(){return n(`users.permissions.${s}`)},get children(){return e(f,{boxSize:"$2",rounded:"$full",get bg(){return c(H.can(t.user,o()))}})}})})}})},Y=()=>{const t=$();L("manage.sidemenu.users");const{to:n}=w(),[c,s]=S(()=>h.get("/admin/user/list")),[o,T]=C([]),l=async()=>{const r=await s();b(r,i=>T(i.content))};l();const[U,k]=y(r=>h.post(`/admin/user/delete?id=${r}`));return e(F,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(g,{spacing:"$2",get children(){return[e(u,{colorScheme:"accent",get loading(){return c()},onClick:l,get children(){return t("global.refresh")}}),e(u,{onClick:()=>{n("/@manage/users/add")},get children(){return t("global.add")}})]}}),e(f,{w:"$full",overflowX:"auto",get children(){return e(B,{highlightOnHover:!0,dense:!0,get children(){return[e(_,{get children(){return e(m,{get children(){return[e(d,{each:["username","base_path","role","permission"],children:r=>e(p,{get children(){return t(`users.${r}`)}})}),e(p,{get children(){return t("global.operations")}})]}})}}),e(v,{get children(){return e(d,{get each(){return o()},children:r=>e(m,{get children(){return[e(a,{get children(){return r.username}}),e(a,{get children(){return r.base_path}}),e(a,{get children(){return e(z,{get role(){return r.role}})}}),e(a,{get children(){return e(I,{user:r})}}),e(a,{get children(){return e(g,{spacing:"$2",get children(){return[e(u,{onClick:()=>{n(`/@manage/users/edit/${r.id}`)},get children(){return t("global.edit")}}),e(M,{get name(){return r.username},get loading(){return U()===r.id},onClick:async()=>{const i=await k(r.id);b(i,()=>{x.success(t("global.delete_success")),l()})}})]}})}})]}})})}})]}})}})]}})};export{Y as default};
