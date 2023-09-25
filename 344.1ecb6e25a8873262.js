"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[344],{5344:(Q,d,c)=>{c.r(d),c.d(d,{SearchjobsModule:()=>z});var l=c(6814),f=c(4574),p=c(3403),t=c(5879),_=c(7700),b=c(361),h=c(1670),m=c(7161),C=c(2742),M=c(8464),O=c(1735);function P(n,i){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.AsE("",e.skillName," - ",e.totalItems," jobs found")}}function x(n,i){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("",e.totalItems," jobs found")}}function u(n,i){if(1&n&&(t.ynx(0),t.YNc(1,P,2,2,"div",11),t.YNc(2,x,2,1,"div",11),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",""!=e.skillName),t.xp6(1),t.Q6J("ngIf",""==e.skillName)}}function j(n,i){1&n&&(t.ynx(0),t._uU(1,"No jobs found"),t.BQk())}function w(n,i){1&n&&(t.ynx(0),t._uU(1,"Search Jobs based on Skill and Location"),t.BQk())}function v(n,i){if(1&n&&(t.TgZ(0,"h4",10),t.YNc(1,u,3,2,"ng-container",11),t.YNc(2,j,2,0,"ng-container",11),t.YNc(3,w,2,0,"ng-container",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.isJobAvailable&&e.isParamsAvailable),t.xp6(1),t.Q6J("ngIf",!e.isJobAvailable&&e.isParamsAvailable),t.xp6(1),t.Q6J("ngIf",!e.isJobAvailable&&!e.isParamsAvailable)}}function I(n,i){1&n&&(t.TgZ(0,"div",12),t._UZ(1,"div",13),t.qZA())}function J(n,i){1&n&&(t.TgZ(0,"span"),t._uU(1,", \xa0"),t.qZA())}function S(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.YNc(2,J,2,0,"span",11),t.qZA()),2&n){const e=i.$implicit,o=i.last;t.xp6(1),t.Oqu(e),t.xp6(1),t.Q6J("ngIf",!o)}}function N(n,i){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"li",20),t.NdJ("click",function(){const r=t.CHM(e).$implicit,a=t.oxw(2);return t.KtG(a.showJobDescription(r))}),t.TgZ(2,"h5"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.qZA(),t.TgZ(6,"p"),t.YNc(7,S,3,2,"span",17),t.qZA()(),t.BQk()}if(2&n){const e=i.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("ngClass",o.isSelected(e.id)),t.xp6(2),t.Oqu(e.jobOpeningName),t.xp6(2),t.Oqu(e.companyName),t.xp6(2),t.Q6J("ngForOf",e.locations)}}function A(n,i){if(1&n&&(t.TgZ(0,"div",21)(1,"div",22),t._UZ(2,"app-job-detail-sheet",23),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("selectedJobDetails",e.selectedJobDetails)("isJobName",e.isJobName)}}function k(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",14)(1,"div",3)(2,"div",15)(3,"div",16),t.YNc(4,N,8,4,"ng-container",17),t.ALo(5,"slice"),t.qZA()(),t.YNc(6,A,3,2,"div",18),t.qZA(),t.TgZ(7,"app-pagination-box",19),t.NdJ("outputParams",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.getIndexParams(s))}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",t.Dn7(5,6,e.jobData,e.ItemStartIndex,e.ItemEndIndex)),t.xp6(2),t.Q6J("ngIf",!e.isMobile),t.xp6(1),t.Q6J("totalItems",e.totalItems)("ItemStartIndex",e.ItemStartIndex)("ItemEndIndex",e.ItemEndIndex)("itemLimit",e.itemLimit)}}const Z=[{path:"",component:(()=>{var n;class i{constructor(o,s,r,a,D){this.router=o,this.route=s,this.dialog=r,this.jobOpeningService=a,this.sharedService=D,this.isLoaded=!1,this.isJobAvailable=!1,this.isParamsAvailable=!1,this.skillName="",this.locationName="",this.skillList=[],this.locationList=[],this.jobData=[],this.selectedJobId=-1,this.ItemStartIndex=0,this.ItemEndIndex=9,this.itemLimit=10,this.isMobile=!1,this.isJobName=!0,this.jobDetailsChanged=new t.vpe,o.events.subscribe(L=>{L instanceof p.m2&&this.route.queryParams.subscribe(g=>{Object.keys(g).length>0?(this.isParamsAvailable=!0,this.isLoaded=!1,this.skillName=g.skill,this.locationName=g.location,this.skillId=g.skillId,this.locationId=g.locationId,this.handleJobOpenings(this.skillName)):this.isParamsAvailable=!1})})}handleJobOpenings(o){this.jobOpeningService.apiJobOpeningSearchJobOpeningsGet([o]).subscribe({next:r=>{console.log(r),this.isLoaded=!0,this.isJobAvailable=!0,this.jobData=r,this.totalItems=this.jobData.length},error:r=>{this.isLoaded=!0,this.isJobAvailable=!0}})}showJobsData(o){var s=this;if(this.isLoaded=!1,o){var r=o.split("&");this.skillName=r[0],this.locationName=r[1],""!=this.skillName&&""==this.locationName&&h.S6(this.skillList,function(a){a.name==s.skillName&&(s.skillId=a.id)}),""!=this.locationName&&""==this.skillName&&h.S6(this.locationList,function(a){a.city==s.locationName&&(s.locationId=a.id)}),""!=this.skillName&&""!=this.locationName&&(h.S6(this.skillList,function(a){a.name==s.skillName&&(s.skillId=a.id)}),h.S6(this.locationList,function(a){a.city==s.locationName&&(s.locationId=a.id)})),""==this.skillName&&""==this.locationName&&(this.isJobAvailable=!1,this.isLoaded=!0),this.fetchJobData()}else this.isJobAvailable=!1,this.isLoaded=!0,this.isParamsAvailable=!1}fetchJobData(){}getIndexParams(o){this.ItemStartIndex=o.ItemStartIndex,this.ItemEndIndex=o.ItemEndIndex,this.isMobile||(this.selectedJobId=this.jobData[this.ItemStartIndex].id,this.selectedJobDetails=this.jobData[this.ItemStartIndex])}getFilterParams(o){this.filterParam=o}isSelected(o){return this.selectedJobId==o?"selected":""}showJobDescription(o){this.selectedJobId=o.id,this.selectedJobDetails=o,this.jobDetailsChanged.emit(this.selectedJobDetails)}showJobDetaislModal(){this.dialog.open(b.N,{panelClass:"material",disableClose:!0,data:this.selectedJobDetails})}onResize(o){this.isMobile=o.target.innerWidth<=991}ngOnInit(){this.isMobile=window.innerWidth<=991,this.jobDetailsChanged.subscribe(o=>{this.isMobile&&this.showJobDetaislModal()})}}return(n=i).\u0275fac=function(o){return new(o||n)(t.Y36(p.F0),t.Y36(p.gz),t.Y36(_.uw),t.Y36(m.U),t.Y36(C.F))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-searchjobs"]],hostBindings:function(o,s){1&o&&t.NdJ("resize",function(a){return s.onResize(a)},!1,t.Jf7)},features:[t._Bn([{provide:_.so,useValue:{}}])],decls:11,vars:5,consts:[[1,"searchjob-wrapper"],[1,"content-block"],[1,"container"],[1,"row"],[1,"col-sm-12"],["class","results",4,"ngIf"],[3,"jobSkillName","jobLocationName"],["class","loader-wrapper",4,"ngIf"],[1,"col-12"],["class","search-results-wrapper",4,"ngIf"],[1,"results"],[4,"ngIf"],[1,"loader-wrapper"],[1,"pre-loader"],[1,"search-results-wrapper"],[1,"col-sm-12","col-md-12","col-lg-4"],[1,"left-section"],[4,"ngFor","ngForOf"],["class","col-sm-12 col-md-12 col-lg-8",4,"ngIf"],[3,"totalItems","ItemStartIndex","ItemEndIndex","itemLimit","outputParams"],[1,"list-group-item",3,"ngClass","click"],[1,"col-sm-12","col-md-12","col-lg-8"],[1,"right-section"],[3,"selectedJobDetails","isJobName"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4),t.YNc(5,v,4,3,"h4",5),t._UZ(6,"search-jobs-fields",6),t.YNc(7,I,2,0,"div",7),t.qZA()(),t.TgZ(8,"div",3)(9,"div",8),t.YNc(10,k,8,10,"div",9),t.qZA()()()()()),2&o&&(t.xp6(5),t.Q6J("ngIf",s.isLoaded),t.xp6(1),t.Q6J("jobSkillName",s.skillName)("jobLocationName",s.locationName),t.xp6(1),t.Q6J("ngIf",!s.isLoaded),t.xp6(3),t.Q6J("ngIf",s.isLoaded&&s.isJobAvailable))},dependencies:[l.mk,l.sg,l.O5,M.j,O.s,b.N,l.OU],styles:[".text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%], .searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .searchjob-wrapper[_ngcontent-%COMP%]   h4.results[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%], .searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   .details-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400;letter-spacing:.4px}.ft-sp[_ngcontent-%COMP%], .searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.searchjob-wrapper[_ngcontent-%COMP%]   h4.results[_ngcontent-%COMP%]{font-size:20px;color:#111827;margin:0 0 10px}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]{margin:30px 0 0}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]{overflow:auto}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-radius:0!important;border:none;border-bottom:1px solid #9ca3af;background-color:#fff;padding:12px 20px;margin:0;cursor:pointer}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#d1d5db;transition:all .15s ease}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;margin:0 0 10px;color:#1f2937}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#4b5563;margin:0;padding:0}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child){margin:0 0 6px}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{box-shadow:inset 0 -2px #18c36c;-moz-box-shadow:inset 0 -2px 0px 0 #18c36c;-webkit-box-shadow:inset 0 -2px 0px 0 #18c36c;border-bottom:1px solid #18c36c;background-color:#d1d5db;transition:all .15s ease}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   .details-tab[_ngcontent-%COMP%]{background-color:#fff;border-bottom:1px solid #9ca3af}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   .details-tab[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{display:none}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   .details-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   .details-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%], .searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]{border:1px solid #9ca3af;border-radius:4px!important}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]{background-color:#fff;overflow:hidden}.searchjob-wrapper[_ngcontent-%COMP%]   .loader-wrapper[_ngcontent-%COMP%]{position:relative;float:left;margin:50px 0;width:100%}"]}),i})()}];let T=(()=>{var n;class i{}return(n=i).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(Z),p.Bz]}),i})(),z=(()=>{var n;class i{}return(n=i).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,f.m.forRoot(),T]}),i})()}}]);