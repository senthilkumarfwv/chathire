"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[945],{3782:(M,$,P)=>{P.d($,{M:()=>j});var y=P(9862),v=P(5907),A=P(9398),m=P(4593),b=P(5879);let j=(()=>{var V;class w{constructor(o,f,h){this.httpClient=o,this.basePath="https://hiresapi.azurewebsites.net",this.defaultHeaders=new y.WM,this.configuration=new m.V,h&&(this.configuration=h),"string"!=typeof this.configuration.basePath&&(Array.isArray(f)&&f.length>0&&(f=f[0]),"string"!=typeof f&&(f=this.basePath),this.configuration.basePath=f),this.encoder=this.configuration.encoder||new v.H}addToHttpParams(o,f,h){return"object"!=typeof f||f instanceof Date?this.addToHttpParamsRecursive(o,f,h):this.addToHttpParamsRecursive(o,f)}addToHttpParamsRecursive(o,f,h){if(null==f)return o;if("object"==typeof f)if(Array.isArray(f))f.forEach(d=>o=this.addToHttpParamsRecursive(o,d,h));else if(f instanceof Date){if(null==h)throw Error("key may not be null if value is Date");o=o.append(h,f.toISOString().substring(0,10))}else Object.keys(f).forEach(d=>o=this.addToHttpParamsRecursive(o,f[d],null!=h?`${h}.${d}`:d));else{if(null==h)throw Error("key may not be null if value is not object or array");o=o.append(h,f)}return o}apiCandidateProfileActivateOrDeActivatePut(o,f,h,d="body",l=!1,n){let s=new y.LE({encoder:this.encoder});null!=o&&(s=this.addToHttpParams(s,o,"CandidateProfileId")),null!=f&&(s=this.addToHttpParams(s,f,"Active")),null!=h&&(s=this.addToHttpParams(s,h,"StatusId"));let t,e=this.defaultHeaders;t=this.configuration.lookupCredential("Bearer"),t&&(e=e.set("Authorization",t));let i=n&&n.httpHeaderAccept;void 0===i&&(i=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==i&&(e=e.set("Accept",i));let a=n&&n.context;void 0===a&&(a=new y.qT);let r="json";return i&&(r=i.startsWith("text")?"text":this.configuration.isJsonMime(i)?"json":"blob"),this.httpClient.request("put",`${this.configuration.basePath}/api/CandidateProfile/ActivateOrDeActivate`,{context:a,params:s,responseType:r,withCredentials:this.configuration.withCredentials,headers:e,observe:d,reportProgress:l})}apiCandidateProfileAddPost(o,f="body",h=!1,d){let n,l=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(l=l.set("Authorization",n));let s=d&&d.httpHeaderAccept;void 0===s&&(s=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==s&&(l=l.set("Accept",s));let e=d&&d.context;void 0===e&&(e=new y.qT);const i=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==i&&(l=l.set("Content-Type",i));let a="json";return s&&(a=s.startsWith("text")?"text":this.configuration.isJsonMime(s)?"json":"blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/CandidateProfile/Add`,{context:e,body:o,responseType:a,withCredentials:this.configuration.withCredentials,headers:l,observe:f,reportProgress:h})}apiCandidateProfileCandidatePrefJobTypeDelete(o,f="body",h=!1,d){let l=new y.LE({encoder:this.encoder});null!=o&&(l=this.addToHttpParams(l,o,"Id"));let s,n=this.defaultHeaders;s=this.configuration.lookupCredential("Bearer"),s&&(n=n.set("Authorization",s));let e=d&&d.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(n=n.set("Accept",e));let t=d&&d.context;void 0===t&&(t=new y.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/CandidatePrefJobType`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:n,observe:f,reportProgress:h})}apiCandidateProfileCandidatePrefLocationDelete(o,f="body",h=!1,d){let l=new y.LE({encoder:this.encoder});null!=o&&(l=this.addToHttpParams(l,o,"Id"));let s,n=this.defaultHeaders;s=this.configuration.lookupCredential("Bearer"),s&&(n=n.set("Authorization",s));let e=d&&d.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(n=n.set("Accept",e));let t=d&&d.context;void 0===t&&(t=new y.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/CandidatePrefLocation`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:n,observe:f,reportProgress:h})}apiCandidateProfileCandidateProfileDomainDelete(o,f="body",h=!1,d){let l=new y.LE({encoder:this.encoder});null!=o&&(l=this.addToHttpParams(l,o,"Id"));let s,n=this.defaultHeaders;s=this.configuration.lookupCredential("Bearer"),s&&(n=n.set("Authorization",s));let e=d&&d.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(n=n.set("Accept",e));let t=d&&d.context;void 0===t&&(t=new y.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/CandidateProfileDomain`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:n,observe:f,reportProgress:h})}apiCandidateProfileCandidateProfileEmploymentTypeDelete(o,f="body",h=!1,d){let l=new y.LE({encoder:this.encoder});null!=o&&(l=this.addToHttpParams(l,o,"Id"));let s,n=this.defaultHeaders;s=this.configuration.lookupCredential("Bearer"),s&&(n=n.set("Authorization",s));let e=d&&d.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(n=n.set("Accept",e));let t=d&&d.context;void 0===t&&(t=new y.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/CandidateProfileEmploymentType`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:n,observe:f,reportProgress:h})}apiCandidateProfileCandidateProfileSkillsDelete(o,f="body",h=!1,d){let l=new y.LE({encoder:this.encoder});null!=o&&(l=this.addToHttpParams(l,o,"Id"));let s,n=this.defaultHeaders;s=this.configuration.lookupCredential("Bearer"),s&&(n=n.set("Authorization",s));let e=d&&d.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(n=n.set("Accept",e));let t=d&&d.context;void 0===t&&(t=new y.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/CandidateProfileSkills`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:n,observe:f,reportProgress:h})}apiCandidateProfileDeleteCandidateProfileDelete(o,f="body",h=!1,d){let l=new y.LE({encoder:this.encoder});null!=o&&(l=this.addToHttpParams(l,o,"Id"));let s,n=this.defaultHeaders;s=this.configuration.lookupCredential("Bearer"),s&&(n=n.set("Authorization",s));let e=d&&d.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(n=n.set("Accept",e));let t=d&&d.context;void 0===t&&(t=new y.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/DeleteCandidateProfile`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:n,observe:f,reportProgress:h})}apiCandidateProfileGetByConsultancyUserGet(o,f="body",h=!1,d){let l=new y.LE({encoder:this.encoder});null!=o&&(l=this.addToHttpParams(l,o,"consultancyUserId"));let s,n=this.defaultHeaders;s=this.configuration.lookupCredential("Bearer"),s&&(n=n.set("Authorization",s));let e=d&&d.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(n=n.set("Accept",e));let t=d&&d.context;void 0===t&&(t=new y.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/CandidateProfile/GetByConsultancyUser`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:n,observe:f,reportProgress:h})}apiCandidateProfileGetByConsultancyUserSimplelistGet(o,f,h,d="body",l=!1,n){let s=new y.LE({encoder:this.encoder});null!=o&&(s=this.addToHttpParams(s,o,"consultancyUserId")),null!=f&&(s=this.addToHttpParams(s,f,"isActive")),null!=h&&(s=this.addToHttpParams(s,h,"statusId"));let t,e=this.defaultHeaders;t=this.configuration.lookupCredential("Bearer"),t&&(e=e.set("Authorization",t));let i=n&&n.httpHeaderAccept;void 0===i&&(i=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==i&&(e=e.set("Accept",i));let a=n&&n.context;void 0===a&&(a=new y.qT);let r="json";return i&&(r=i.startsWith("text")?"text":this.configuration.isJsonMime(i)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/CandidateProfile/GetByConsultancyUserSimplelist`,{context:a,params:s,responseType:r,withCredentials:this.configuration.withCredentials,headers:e,observe:d,reportProgress:l})}apiCandidateProfileGetByUserGet(o,f,h="body",d=!1,l){let n=new y.LE({encoder:this.encoder});null!=o&&(n=this.addToHttpParams(n,o,"userId")),null!=f&&(n=this.addToHttpParams(n,f,"id"));let e,s=this.defaultHeaders;e=this.configuration.lookupCredential("Bearer"),e&&(s=s.set("Authorization",e));let t=l&&l.httpHeaderAccept;void 0===t&&(t=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==t&&(s=s.set("Accept",t));let i=l&&l.context;void 0===i&&(i=new y.qT);let a="json";return t&&(a=t.startsWith("text")?"text":this.configuration.isJsonMime(t)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/CandidateProfile/GetByUser`,{context:i,params:n,responseType:a,withCredentials:this.configuration.withCredentials,headers:s,observe:h,reportProgress:d})}apiCandidateProfileGetGet(o,f="body",h=!1,d){let l=new y.LE({encoder:this.encoder});null!=o&&(l=this.addToHttpParams(l,o,"Id"));let s,n=this.defaultHeaders;s=this.configuration.lookupCredential("Bearer"),s&&(n=n.set("Authorization",s));let e=d&&d.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(n=n.set("Accept",e));let t=d&&d.context;void 0===t&&(t=new y.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/CandidateProfile/Get`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:n,observe:f,reportProgress:h})}apiCandidateProfileSearchCandidateProfilesGet(o,f,h,d,l,n,s,e,t,i="body",a=!1,r){let c=new y.LE({encoder:this.encoder});null!=o&&(c=this.addToHttpParams(c,o,"Skill")),f&&f.forEach(x=>{c=this.addToHttpParams(c,x,"skills")}),h&&h.forEach(x=>{c=this.addToHttpParams(c,x,"cityIds")}),d&&d.forEach(x=>{c=this.addToHttpParams(c,x,"stateIds")}),l&&l.forEach(x=>{c=this.addToHttpParams(c,x,"visas")}),null!=n&&(c=this.addToHttpParams(c,n,"startYearsOfExp")),null!=s&&(c=this.addToHttpParams(c,s,"endYearsOfExp")),null!=e&&(c=this.addToHttpParams(c,e,"RowsOfPage")),null!=t&&(c=this.addToHttpParams(c,t,"PageNumber"));let u,p=this.defaultHeaders;u=this.configuration.lookupCredential("Bearer"),u&&(p=p.set("Authorization",u));let H=r&&r.httpHeaderAccept;void 0===H&&(H=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==H&&(p=p.set("Accept",H));let g=r&&r.context;void 0===g&&(g=new y.qT);let C="json";return H&&(C=H.startsWith("text")?"text":this.configuration.isJsonMime(H)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/CandidateProfile/SearchCandidateProfiles`,{context:g,params:c,responseType:C,withCredentials:this.configuration.withCredentials,headers:p,observe:i,reportProgress:a})}apiCandidateProfileUpdatePut(o,f="body",h=!1,d){let n,l=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(l=l.set("Authorization",n));let s=d&&d.httpHeaderAccept;void 0===s&&(s=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==s&&(l=l.set("Accept",s));let e=d&&d.context;void 0===e&&(e=new y.qT);const i=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==i&&(l=l.set("Content-Type",i));let a="json";return s&&(a=s.startsWith("text")?"text":this.configuration.isJsonMime(s)?"json":"blob"),this.httpClient.request("put",`${this.configuration.basePath}/api/CandidateProfile/Update`,{context:e,body:o,responseType:a,withCredentials:this.configuration.withCredentials,headers:l,observe:f,reportProgress:h})}}return(V=w).\u0275fac=function(o){return new(o||V)(b.LFG(y.eN),b.LFG(A.G,8),b.LFG(m.V,8))},V.\u0275prov=b.Yz7({token:V,factory:V.\u0275fac,providedIn:"root"}),w})()},9945:(M,$,P)=>{P.d($,{v_:()=>v.v,pp:()=>w,KD:()=>h.K}),P(3782);var v=P(773),A=P(9862),m=P(5907),b=P(9398),j=P(4593),V=P(5879);let w=(()=>{var l;class n{constructor(e,t,i){this.httpClient=e,this.basePath="https://hiresapi.azurewebsites.net",this.defaultHeaders=new A.WM,this.configuration=new j.V,i&&(this.configuration=i),"string"!=typeof this.configuration.basePath&&(Array.isArray(t)&&t.length>0&&(t=t[0]),"string"!=typeof t&&(t=this.basePath),this.configuration.basePath=t),this.encoder=this.configuration.encoder||new m.H}addToHttpParams(e,t,i){return"object"!=typeof t||t instanceof Date?this.addToHttpParamsRecursive(e,t,i):this.addToHttpParamsRecursive(e,t)}addToHttpParamsRecursive(e,t,i){if(null==t)return e;if("object"==typeof t)if(Array.isArray(t))t.forEach(a=>e=this.addToHttpParamsRecursive(e,a,i));else if(t instanceof Date){if(null==i)throw Error("key may not be null if value is Date");e=e.append(i,t.toISOString().substring(0,10))}else Object.keys(t).forEach(a=>e=this.addToHttpParamsRecursive(e,t[a],null!=i?`${i}.${a}`:a));else{if(null==i)throw Error("key may not be null if value is not object or array");e=e.append(i,t)}return e}apiConsultancyAddPost(e,t="body",i=!1,a){let c,r=this.defaultHeaders;c=this.configuration.lookupCredential("Bearer"),c&&(r=r.set("Authorization",c));let p=a&&a.httpHeaderAccept;void 0===p&&(p=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==p&&(r=r.set("Accept",p));let u=a&&a.context;void 0===u&&(u=new A.qT);const g=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==g&&(r=r.set("Content-Type",g));let C="json";return p&&(C=p.startsWith("text")?"text":this.configuration.isJsonMime(p)?"json":"blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/Consultancy/Add`,{context:u,body:e,responseType:C,withCredentials:this.configuration.withCredentials,headers:r,observe:t,reportProgress:i})}apiConsultancyAllConsultancyGet(e="body",t=!1,i){let r,a=this.defaultHeaders;r=this.configuration.lookupCredential("Bearer"),r&&(a=a.set("Authorization",r));let c=i&&i.httpHeaderAccept;void 0===c&&(c=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==c&&(a=a.set("Accept",c));let p=i&&i.context;void 0===p&&(p=new A.qT);let u="json";return c&&(u=c.startsWith("text")?"text":this.configuration.isJsonMime(c)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Consultancy/AllConsultancy`,{context:p,responseType:u,withCredentials:this.configuration.withCredentials,headers:a,observe:e,reportProgress:t})}apiConsultancyConsultancyByIdGet(e,t="body",i=!1,a){let r=new A.LE({encoder:this.encoder});null!=e&&(r=this.addToHttpParams(r,e,"Id"));let p,c=this.defaultHeaders;p=this.configuration.lookupCredential("Bearer"),p&&(c=c.set("Authorization",p));let u=a&&a.httpHeaderAccept;void 0===u&&(u=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==u&&(c=c.set("Accept",u));let H=a&&a.context;void 0===H&&(H=new A.qT);let g="json";return u&&(g=u.startsWith("text")?"text":this.configuration.isJsonMime(u)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Consultancy/ConsultancyById`,{context:H,params:r,responseType:g,withCredentials:this.configuration.withCredentials,headers:c,observe:t,reportProgress:i})}apiConsultancySearchConsultanciesGet(e,t="body",i=!1,a){let r=new A.LE({encoder:this.encoder});null!=e&&(r=this.addToHttpParams(r,e,"conname"));let p,c=this.defaultHeaders;p=this.configuration.lookupCredential("Bearer"),p&&(c=c.set("Authorization",p));let u=a&&a.httpHeaderAccept;void 0===u&&(u=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==u&&(c=c.set("Accept",u));let H=a&&a.context;void 0===H&&(H=new A.qT);let g="json";return u&&(g=u.startsWith("text")?"text":this.configuration.isJsonMime(u)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Consultancy/SearchConsultancies`,{context:H,params:r,responseType:g,withCredentials:this.configuration.withCredentials,headers:c,observe:t,reportProgress:i})}apiConsultancyUpdatePut(e,t="body",i=!1,a){let c,r=this.defaultHeaders;c=this.configuration.lookupCredential("Bearer"),c&&(r=r.set("Authorization",c));let p=a&&a.httpHeaderAccept;void 0===p&&(p=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==p&&(r=r.set("Accept",p));let u=a&&a.context;void 0===u&&(u=new A.qT);const g=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==g&&(r=r.set("Content-Type",g));let C="json";return p&&(C=p.startsWith("text")?"text":this.configuration.isJsonMime(p)?"json":"blob"),this.httpClient.request("put",`${this.configuration.basePath}/api/Consultancy/Update`,{context:u,body:e,responseType:C,withCredentials:this.configuration.withCredentials,headers:r,observe:t,reportProgress:i})}}return(l=n).\u0275fac=function(e){return new(e||l)(V.LFG(A.eN),V.LFG(b.G,8),V.LFG(j.V,8))},l.\u0275prov=V.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),n})();P(7161),P(2578);var h=P(9144)}}]);