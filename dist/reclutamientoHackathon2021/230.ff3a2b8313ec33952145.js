"use strict";(self.webpackChunkreclutamiento_hackathon2021=self.webpackChunkreclutamiento_hackathon2021||[]).push([[230],{4230:(G,Z,r)=>{r.r(Z),r.d(Z,{CompanyModule:()=>j});var c=r(8583),T=r(4466),s=r(6476),v=r(4762),i=r(665),o=r(3018),_=r(8002),y=r(2022);let C=(()=>{class t{constructor(e){this.afs=e,this.companiesCollection=this.afs.collection("companies"),this.onGetCompanies()}onGetCompanies(){try{this.companies=this.companiesCollection.snapshotChanges().pipe((0,_.U)(e=>e.map(a=>a.payload.doc.data())))}catch(e){console.error(e)}}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(y.ST))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=r(7679),f=r(7282),h=r(2797),d=r(9219);function A(t,n){1&t&&(o.TgZ(0,"span",16),o._uU(1,"Campo invalido"),o.qZA())}function b(t,n){if(1&t&&(o.TgZ(0,"option",17),o._uU(1),o.qZA()),2&t){const e=n.$implicit;o.Q6J("value",e.idDoc),o.xp6(1),o.hij(" ",e.nameCompany," ")}}function q(t,n){1&t&&(o.TgZ(0,"span",16),o._uU(1,"Campo invalido"),o.qZA())}function B(t,n){1&t&&(o.TgZ(0,"span",16),o._uU(1,"Campo invalido"),o.qZA())}function N(t,n){1&t&&(o.TgZ(0,"span",16),o._uU(1,"Campo invalido"),o.qZA())}function x(t,n){1&t&&(o.TgZ(0,"span",16),o._uU(1,"Campo invalido"),o.qZA())}let U=(()=>{class t{constructor(e,a,m,p,l,g){this.companyService=e,this.formBuilder=a,this.bootcampService=m,this.sharedService=p,this.validator=l,this.router=g,this.listCompanies=this.companyService.companies,this.idDoc=""}ngOnInit(){this.createFormEditBootcamp()}createFormEditBootcamp(){this.formEditBootcamp=this.formBuilder.group({title:["",i.kI.required],idCompany:["",i.kI.required],totalMembers:["",i.kI.required],duration:["",i.kI.required],description:["",i.kI.required]})}editBootcamp(){return(0,v.mG)(this,void 0,void 0,function*(){if(this.formEditBootcamp.markAllAsTouched(),this.formEditBootcamp.invalid)return;const e=this.formEditBootcamp.value;try{this.bootcampService.onEditBootcamp(this.idDoc,e)}catch(a){this.sharedService.errorAlert("Error...",a)}})}campoInvalido(e){return this.validator.campoInvalido(this.formEditBootcamp,e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(C),o.Y36(i.qu),o.Y36(u.V),o.Y36(f.F),o.Y36(h.o),o.Y36(s.gz))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-edit-company"]],decls:35,vars:10,consts:[[1,"d-flex","justify-content-center","and","align-items-center"],[1,"m-3",3,"title"],["autocomplete","off",1,"row","g-3",3,"formGroup","ngSubmit"],[1,"col-md-6"],[1,"form-label"],["formControlName","title","autofocus","",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["formControlName","idCompany",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],["type","number","formControlName","totalMembers",1,"form-control"],["placeholder","Tiempo estimado","formControlName","duration",1,"form-control"],[1,"col-12"],["type","text","rows","5","name","description","formControlName","description",1,"form-control"],[1,"d-grid","gap-2","d-md-block"],["type","submit",1,"btn"],["type","button","routerLink","/",1,"btn","m-md-2"],[1,"form-text","text-danger"],[3,"value"]],template:function(e,a){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"app-card",1),o.TgZ(2,"form",2),o.NdJ("ngSubmit",function(){return a.editBootcamp()}),o.TgZ(3,"div",3),o.TgZ(4,"label",4),o._uU(5,"Nombre"),o.qZA(),o._UZ(6,"input",5),o.YNc(7,A,2,0,"span",6),o.qZA(),o.TgZ(8,"div",3),o.TgZ(9,"label",4),o._uU(10,"Empresa"),o.qZA(),o.TgZ(11,"select",7),o.YNc(12,b,2,2,"option",8),o.ALo(13,"async"),o.qZA(),o.YNc(14,q,2,0,"span",6),o.qZA(),o.TgZ(15,"div",3),o.TgZ(16,"label",4),o._uU(17,"Total de miembros"),o.qZA(),o._UZ(18,"input",9),o.YNc(19,B,2,0,"span",6),o.qZA(),o.TgZ(20,"div",3),o.TgZ(21,"label",4),o._uU(22,"Duraci\xf3n"),o.qZA(),o._UZ(23,"input",10),o.YNc(24,N,2,0,"span",6),o.qZA(),o.TgZ(25,"div",11),o.TgZ(26,"label",4),o._uU(27,"Descripci\xf3n"),o.qZA(),o._UZ(28,"textarea",12),o.YNc(29,x,2,0,"span",6),o.qZA(),o.TgZ(30,"div",13),o.TgZ(31,"button",14),o._uU(32,"Editar"),o.qZA(),o.TgZ(33,"button",15),o._uU(34,"Cancelar"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(1),o.Q6J("title","Editar Bootcamp"),o.xp6(1),o.Q6J("formGroup",a.formEditBootcamp),o.xp6(5),o.Q6J("ngIf",a.campoInvalido("title")),o.xp6(5),o.Q6J("ngForOf",o.lcZ(13,8,a.listCompanies)),o.xp6(2),o.Q6J("ngIf",a.campoInvalido("idCompany")),o.xp6(5),o.Q6J("ngIf",a.campoInvalido("totalMembers")),o.xp6(5),o.Q6J("ngIf",a.campoInvalido("duration")),o.xp6(5),o.Q6J("ngIf",a.campoInvalido("description")))},directives:[d.A,i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,c.O5,i.EJ,c.sg,i.wV,s.rH,i.YN,i.Kr],pipes:[c.Ov],styles:[""]}),t})();function I(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"div",3),o.TgZ(1,"div",4),o.TgZ(2,"div",5),o.TgZ(3,"h5",6),o._uU(4),o.qZA(),o.TgZ(5,"p"),o._uU(6),o.qZA(),o.qZA(),o.TgZ(7,"div",7),o.TgZ(8,"a",8),o.NdJ("click",function(){const p=o.CHM(e).$implicit;return o.oxw().edit(p.idDoc)}),o._uU(9,"Edit"),o.qZA(),o.TgZ(10,"a",9),o.NdJ("click",function(){const p=o.CHM(e).$implicit;return o.oxw().delete(p.idDoc)}),o._uU(11,"Delete"),o.qZA(),o.qZA(),o.qZA(),o.qZA()}if(2&t){const e=n.$implicit;o.xp6(4),o.Oqu(e.title),o.xp6(2),o.Oqu(e.description)}}let w=(()=>{class t{constructor(e,a,m){this.bootcampsService=e,this.sharedService=a,this.router=m,this.bootcamps=this.bootcampsService.bootcamp,this.edit=p=>{this.router.navigate(["company/show_bootcamp",p])},this.delete=p=>{try{this.bootcampsService.onDeleteBootcamp(p),this.sharedService.successAlert("Eliminado correctamente")}catch(l){this.sharedService.errorAlert("Error...",l)}}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(u.V),o.Y36(f.F),o.Y36(s.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-my-bootcamps"]],decls:4,vars:3,consts:[[1,"container","mt-5"],["title","Mis Bootcamps"],["class","card mb-2",4,"ngFor","ngForOf"],[1,"card","mb-2"],[1,"card-body","d-flex","justify-content-between","and","align-items-center"],[1,"description"],[1,"card-title"],[1,"buttons"],[1,"btn","btn-warning",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(e,a){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"app-card",1),o.YNc(2,I,12,2,"div",2),o.ALo(3,"async"),o.qZA(),o.qZA()),2&e&&(o.xp6(2),o.Q6J("ngForOf",o.lcZ(3,1,a.bootcamps)))},directives:[d.A,c.sg],pipes:[c.Ov],styles:[".buttons[_ngcontent-%COMP%]{float:right}.buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:5px;padding:auto;text-align:center}.description[_ngcontent-%COMP%]{float:left}"]}),t})();function S(t,n){1&t&&(o.TgZ(0,"span",16),o._uU(1,"Campo invalido"),o.qZA())}function F(t,n){if(1&t&&(o.TgZ(0,"option",17),o._uU(1),o.qZA()),2&t){const e=n.$implicit;o.Q6J("value",e.idDoc),o.xp6(1),o.hij(" ",e.nameCompany," ")}}function Y(t,n){1&t&&(o.TgZ(0,"span",16),o._uU(1,"Campo invalido"),o.qZA())}function J(t,n){1&t&&(o.TgZ(0,"span",16),o._uU(1,"Campo invalido"),o.qZA())}function E(t,n){1&t&&(o.TgZ(0,"span",16),o._uU(1,"Campo invalido"),o.qZA())}function M(t,n){1&t&&(o.TgZ(0,"span",16),o._uU(1,"Campo invalido"),o.qZA())}let O=(()=>{class t{constructor(e,a,m,p,l,g){this.companyService=e,this.formBuilder=a,this.bootcampService=m,this.sharedService=p,this.router=l,this.validator=g,this.listCompanies=this.companyService.companies}ngOnInit(){this.createFormNewBootcamp()}createFormNewBootcamp(){this.formNewBootcamp=this.formBuilder.group({title:["",i.kI.required],idCompany:["",i.kI.required],totalMembers:["",i.kI.required],duration:["",i.kI.required],description:["",i.kI.required]})}createBootcamp(e){return(0,v.mG)(this,void 0,void 0,function*(){if(this.formNewBootcamp.markAllAsTouched(),this.formNewBootcamp.valid)try{yield this.bootcampService.onCreateBootcamp(e),this.sharedService.successAlert("Bootcamp creado correctamente"),this.formNewBootcamp.reset(),this.router.navigate(["/company/show_bootcamps"])}catch(a){this.sharedService.errorAlert("Error...","Intente nuevamente")}})}campoInvalido(e){return this.validator.campoInvalido(this.formNewBootcamp,e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(C),o.Y36(i.qu),o.Y36(u.V),o.Y36(f.F),o.Y36(s.F0),o.Y36(h.o))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-new-bootcamp"]],decls:35,vars:10,consts:[[1,"d-flex","justify-content-center","and","align-items-center"],[1,"m-3",3,"title"],["autocomplete","off",1,"row","g-3",3,"formGroup","ngSubmit"],[1,"col-md-6"],[1,"form-label"],["formControlName","title","autofocus","",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["formControlName","idCompany",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],["type","number","formControlName","totalMembers",1,"form-control"],["placeholder","Tiempo estimado","formControlName","duration",1,"form-control"],[1,"col-12"],["type","text","rows","5","name","description","formControlName","description",1,"form-control"],[1,"d-grid","gap-2","d-md-block"],["type","submit",1,"btn"],["type","button","routerLink","/",1,"btn","m-md-2"],[1,"form-text","text-danger"],[3,"value"]],template:function(e,a){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"app-card",1),o.TgZ(2,"form",2),o.NdJ("ngSubmit",function(){return a.createBootcamp(a.formNewBootcamp.value)}),o.TgZ(3,"div",3),o.TgZ(4,"label",4),o._uU(5,"Nombre"),o.qZA(),o._UZ(6,"input",5),o.YNc(7,S,2,0,"span",6),o.qZA(),o.TgZ(8,"div",3),o.TgZ(9,"label",4),o._uU(10,"Empresa"),o.qZA(),o.TgZ(11,"select",7),o.YNc(12,F,2,2,"option",8),o.ALo(13,"async"),o.qZA(),o.YNc(14,Y,2,0,"span",6),o.qZA(),o.TgZ(15,"div",3),o.TgZ(16,"label",4),o._uU(17,"Total de miembros"),o.qZA(),o._UZ(18,"input",9),o.YNc(19,J,2,0,"span",6),o.qZA(),o.TgZ(20,"div",3),o.TgZ(21,"label",4),o._uU(22,"Duraci\xf3n"),o.qZA(),o._UZ(23,"input",10),o.YNc(24,E,2,0,"span",6),o.qZA(),o.TgZ(25,"div",11),o.TgZ(26,"label",4),o._uU(27,"Descripci\xf3n"),o.qZA(),o._UZ(28,"textarea",12),o.YNc(29,M,2,0,"span",6),o.qZA(),o.TgZ(30,"div",13),o.TgZ(31,"button",14),o._uU(32,"Crear"),o.qZA(),o.TgZ(33,"button",15),o._uU(34,"Cancelar"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(1),o.Q6J("title","Nuevo Bootcamp"),o.xp6(1),o.Q6J("formGroup",a.formNewBootcamp),o.xp6(5),o.Q6J("ngIf",a.campoInvalido("title")),o.xp6(5),o.Q6J("ngForOf",o.lcZ(13,8,a.listCompanies)),o.xp6(2),o.Q6J("ngIf",a.campoInvalido("idCompany")),o.xp6(5),o.Q6J("ngIf",a.campoInvalido("totalMembers")),o.xp6(5),o.Q6J("ngIf",a.campoInvalido("duration")),o.xp6(5),o.Q6J("ngIf",a.campoInvalido("description")))},directives:[d.A,i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,c.O5,i.EJ,c.sg,i.wV,s.rH,i.YN,i.Kr],pipes:[c.Ov],styles:["textarea[_ngcontent-%COMP%]{resize:none}"]}),t})();function Q(t,n){if(1&t&&(o.TgZ(0,"app-card",1),o.TgZ(1,"div",2),o.TgZ(2,"h5",3),o._uU(3),o.qZA(),o.TgZ(4,"p"),o._uU(5),o.qZA(),o.TgZ(6,"p"),o._uU(7),o.qZA(),o.qZA(),o.qZA()),2&t){const e=n.$implicit;o.xp6(3),o.Oqu(e.title),o.xp6(2),o.hij(" ",e.description," "),o.xp6(2),o.hij(" ",e.duration," ")}}let k=(()=>{class t{constructor(){this.data=[]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-card-list"]],inputs:{data:"data"},decls:2,vars:3,consts:[["class","m-1",4,"ngFor","ngForOf"],[1,"m-1"],[1,"mt-2","mb-2","p-2","card-list-body"],[1,"card-title"]],template:function(e,a){1&e&&(o.YNc(0,Q,8,3,"app-card",0),o.ALo(1,"async")),2&e&&o.Q6J("ngForOf",o.lcZ(1,1,a.data))},directives:[c.sg,d.A],pipes:[c.Ov],styles:[".card-list-body[_ngcontent-%COMP%]{box-shadow:5px 5px 5px #0003;cursor:pointer}"]}),t})();const L=[{path:"",redirectTo:"show_bootcamps",pathMatch:"full"},{path:"",children:[{path:"show_bootcamps",component:(()=>{class t{constructor(e){this.bootcampsService=e,this.listReclutamiento=this.bootcampsService.bootcamp}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(u.V))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-show-bootcamp"]],decls:3,vars:1,consts:[[1,"container","mt-5"],["title","Lista de Bootcamps"],[3,"data"]],template:function(e,a){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"app-card",1),o._UZ(2,"app-card-list",2),o.qZA(),o.qZA()),2&e&&(o.xp6(2),o.Q6J("data",a.listReclutamiento))},directives:[d.A,k],styles:[""]}),t})()},{path:"my_bootcamps",component:w},{path:"new_bootcamp",component:O},{path:"show_bootcamp/:id",component:U},{path:"**",redirectTo:"show_bootcamps"}]}];let D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[s.Bz.forChild(L)],s.Bz]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[c.ez,T.m,D,i.UX]]}),t})()}}]);