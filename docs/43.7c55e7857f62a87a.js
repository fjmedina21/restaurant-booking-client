"use strict";(self.webpackChunkRestaurantBooking=self.webpackChunkRestaurantBooking||[]).push([[43],{2043:(B,v,a)=>{a.r(v),a.d(v,{ReservationModule:()=>z});var h=a(1896),c=a(9397),m=a(2181),T=a(4664),l=a(7700),M=a(6306),O=a(2096),C=a(79),t=a(5879),x=a(909),g=a(6814),f=a(6223),Z=a(5860),_=a(3680),u=a(9157),A=a(8525);function U(e,r){1&e&&(t.ynx(0),t._UZ(1,"shared-loading-spinner"),t.BQk())}function P(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div",2)(1,"form",3)(2,"h1",4),t._uU(3,"Change Reservation Status"),t.qZA(),t.TgZ(4,"mat-form-field",5)(5,"mat-label"),t._uU(6,"Select Status"),t.qZA(),t.TgZ(7,"mat-select",6),t.NdJ("selectionChange",function(i){t.CHM(o);const s=t.oxw();return t.KtG(s.changeStatus(i.value))}),t.TgZ(8,"mat-option",7),t._uU(9,"Rejected"),t.qZA(),t.TgZ(10,"mat-option",8),t._uU(11,"Approved"),t.qZA(),t.TgZ(12,"mat-option",9),t._uU(13,"Completed"),t.qZA()()()()()}}let b=(()=>{var e;class r{constructor(n,i,s,p){this.uid=n,this.reservationService=i,this.refDialog=s,this.dialog=p,this.isLoading=!1}changeStatus(n){this.isLoading=!0,this.reservationService.changeStatus(this.uid,n).pipe((0,M.K)(({error:i})=>(this.dialog.open(C.q,{data:{title:"Failed",message:`${i.message??"Something happend!!"}`}}),this.isLoading=!1,(0,O.of)()))).subscribe(i=>{this.dialog.open(C.q,{data:{title:"Success",message:"Status changed"}}),this.isLoading=!1,this.refDialog.close(!0)})}}return(e=r).\u0275fac=function(n){return new(n||e)(t.Y36(l.WI),t.Y36(x.D),t.Y36(l.so),t.Y36(l.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["change-status"]],decls:2,vars:2,consts:[[4,"ngIf"],["mat-dialog-content","",4,"ngIf"],["mat-dialog-content",""],[1,"m-2"],[1,"dialog-title"],[1,"container"],[3,"selectionChange"],["value","rejected"],["value","approved"],["value","completed"]],template:function(n,i){1&n&&(t.YNc(0,U,2,0,"ng-container",0),t.YNc(1,P,14,0,"div",1)),2&n&&(t.Q6J("ngIf",i.isLoading),t.xp6(1),t.Q6J("ngIf",!i.isLoading))},dependencies:[g.O5,f._Y,f.JL,Z.g,_.ey,l.xY,u.KE,u.hX,A.gD],styles:['@charset "UTF-8";.container[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:1}.action-buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:10px}.btn[_ngcontent-%COMP%]{flex:1;background-color:#34495e;color:#fff}mat-dialog-content[_ngcontent-%COMP%]   .dialog-title[_ngcontent-%COMP%]{font-size:24px;font-weight:600;color:#34495e;margin-bottom:20px;text-align:center}']}),r})();var S=a(1075),R=a(2296),d=a(5195);function L(e,r){1&e&&(t.ynx(0),t._UZ(1,"shared-loading-spinner"),t.BQk())}function y(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div",3)(1,"mat-form-field")(2,"mat-label"),t._uU(3,"Select Status"),t.qZA(),t.TgZ(4,"mat-select",4),t.NdJ("selectionChange",function(i){t.CHM(o);const s=t.oxw();return t.KtG(s.onStatusSelected(i.value))}),t.TgZ(5,"mat-option",5),t._uU(6,"All"),t.qZA(),t.TgZ(7,"mat-option",6),t._uU(8,"Pending"),t.qZA(),t.TgZ(9,"mat-option",7),t._uU(10,"Rejected"),t.qZA(),t.TgZ(11,"mat-option",8),t._uU(12,"Cancelled"),t.qZA(),t.TgZ(13,"mat-option",9),t._uU(14,"Approved"),t.qZA(),t.TgZ(15,"mat-option",10),t._uU(16,"Completed"),t.qZA()()()()}}function j(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"mat-card",13)(1,"mat-card-header")(2,"mat-card-title"),t._uU(3,"Reservation Details"),t.qZA(),t.TgZ(4,"mat-card-subtitle",14),t._uU(5),t.qZA()(),t.TgZ(6,"mat-card-content")(7,"h3"),t._uU(8,"Customer Info"),t.qZA(),t.TgZ(9,"p")(10,"strong"),t._uU(11,"Name:"),t.qZA(),t._uU(12),t.qZA(),t.TgZ(13,"p")(14,"strong"),t._uU(15,"Email:"),t.qZA(),t._uU(16),t.qZA(),t.TgZ(17,"p")(18,"strong"),t._uU(19,"Phone Number:"),t.qZA(),t._uU(20),t.qZA(),t.TgZ(21,"h3"),t._uU(22,"Table Info"),t.qZA(),t.TgZ(23,"p")(24,"strong"),t._uU(25,"Table:"),t.qZA(),t._uU(26),t.qZA(),t.TgZ(27,"p")(28,"strong"),t._uU(29,"Capacity:"),t.qZA(),t._uU(30),t.qZA(),t.TgZ(31,"h3"),t._uU(32,"Reservation Timing"),t.qZA(),t.TgZ(33,"p")(34,"strong"),t._uU(35,"Start:"),t.qZA(),t._uU(36),t.ALo(37,"date"),t.qZA(),t.TgZ(38,"p")(39,"strong"),t._uU(40,"End:"),t.qZA(),t._uU(41),t.ALo(42,"date"),t.qZA(),t.TgZ(43,"p")(44,"strong"),t._uU(45,"Number of People:"),t.qZA(),t._uU(46),t.qZA(),t.TgZ(47,"h3"),t._uU(48,"Preferences"),t.qZA(),t.TgZ(49,"p"),t._uU(50),t.qZA()(),t.TgZ(51,"mat-card-actions")(52,"button",15),t.NdJ("click",function(){const s=t.CHM(o).$implicit,p=t.oxw(2);return t.KtG(p.deleteReservation(s.reservationId))}),t._uU(53,"Delete"),t.qZA(),t.TgZ(54,"button",15),t.NdJ("click",function(){const s=t.CHM(o).$implicit,p=t.oxw(2);return t.KtG(p.changeStatus(s.reservationId))}),t._uU(55,"Change Status"),t.qZA()()()}if(2&e){const o=r.$implicit;let n;t.xp6(5),t.AsE("",o.reservationCode," - ",o.status,""),t.xp6(7),t.hij(" ",o.customer.fullName,""),t.xp6(4),t.hij(" ",o.customer.email,""),t.xp6(4),t.hij(" ",o.customer.phoneNumber," "),t.xp6(6),t.hij(" ",o.table.name,""),t.xp6(4),t.hij(" ",o.table.capacity,""),t.xp6(6),t.hij(" ",t.xi3(37,11,o.reservationStart,"short")," "),t.xp6(5),t.hij(" ",t.xi3(42,14,o.reservationEnd,"short")," "),t.xp6(5),t.hij(" ",o.numberOfPeople,""),t.xp6(4),t.Oqu(null!==(n=o.preferences)&&void 0!==n?n:"N/A")}}function q(e,r){if(1&e&&(t.TgZ(0,"div",11),t.YNc(1,j,56,17,"mat-card",12),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.reservations)}}let I=(()=>{var e;class r{constructor(n,i){this.reservationService=n,this.dialog=i,this.reservations=[],this.isLoading=!1}ngOnInit(){this.loadData()}loadData(){this.isLoading=!0,this.reservationService.getALl().pipe((0,c.b)(n=>this.reservations=n)).subscribe(()=>this.isLoading=!1)}onStatusSelected(n){this.isLoading=!0,this.reservationService.getALl(n).pipe((0,c.b)(i=>this.reservations=i)).subscribe(()=>this.isLoading=!1)}changeStatus(n){this.dialog.open(b,{disableClose:!1,data:n}).afterClosed().pipe((0,m.h)(s=>s),(0,c.b)(s=>{s&&this.loadData()})).subscribe()}deleteReservation(n){this.dialog.open(S.$,{disableClose:!0,data:{title:"Delete",message:"Are you sure?"}}).afterClosed().pipe((0,m.h)(s=>s),(0,c.b)(s=>{s&&(this.isLoading=!0)}),(0,c.b)(()=>this.isLoading=!0),(0,T.w)(()=>this.reservationService.delete(n)),(0,m.h)(s=>s),(0,c.b)(s=>{s&&this.loadData()})).subscribe()}}return(e=r).\u0275fac=function(n){return new(n||e)(t.Y36(x.D),t.Y36(l.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["list-reservations"]],decls:3,vars:3,consts:[[4,"ngIf"],["class","container",4,"ngIf"],["class","reservations-container",4,"ngIf"],[1,"container"],[3,"selectionChange"],["value",""],["value","pending"],["value","rejected"],["value","cancelled"],["value","approved"],["value","completed"],[1,"reservations-container"],["class","reservation-card",4,"ngFor","ngForOf"],[1,"reservation-card"],[1,"highlighted-subtitle"],["mat-button","",3,"click"]],template:function(n,i){1&n&&(t.YNc(0,L,2,0,"ng-container",0),t.YNc(1,y,17,0,"div",1),t.YNc(2,q,2,1,"div",2)),2&n&&(t.Q6J("ngIf",i.isLoading),t.xp6(1),t.Q6J("ngIf",!i.isLoading),t.xp6(1),t.Q6J("ngIf",!i.isLoading))},dependencies:[g.sg,g.O5,Z.g,_.ey,R.lW,d.a8,d.hq,d.dn,d.dk,d.$j,d.n5,u.KE,u.hX,A.gD,g.uU],styles:[".container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1,1fr;gap:16px;padding:16px}.status-dropdown[_ngcontent-%COMP%]{width:300px;margin:20px 0;background-color:#f9f9f9;border-radius:5px;box-shadow:0 2px 5px #0000001a}.reservations-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;padding:16px}@media (min-width: 1024px){.reservations-container[_ngcontent-%COMP%]   .reservation-card[_ngcontent-%COMP%]:nth-child(n+5){grid-column:span 1}}@media (max-width: 768px){.reservations-container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 480px){.reservations-container[_ngcontent-%COMP%]{grid-template-columns:1fr}}.reservation-card[_ngcontent-%COMP%]{background-color:#f5f5f5;border-radius:8px;box-shadow:0 4px 8px #0000001a;display:flex;flex-direction:column;justify-content:space-between;transition:transform .2s}.reservation-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{background-color:#00796b;color:#fff;padding:16px;border-top-left-radius:8px;border-top-right-radius:8px}.reservation-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   .highlighted-subtitle[_ngcontent-%COMP%]{font-size:14px;font-weight:700;color:#fff}.reservation-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700}.reservation-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{font-size:.875rem;opacity:.8}.reservation-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:16px}.reservation-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1rem;margin-top:0;color:#00796b}.reservation-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:4px 0;font-size:.9rem}.reservation-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;padding:16px;border-top:1px solid #e0e0e0}.reservation-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}"]}),r})();const Y=[{path:"",component:a(4178).o,children:[{path:"",component:I},{path:"**",redirectTo:"/"}]}];let D=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.Bz.forChild(Y),h.Bz]}),r})();var J=a(5576),F=a(2977),E=a(623);let z=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.ez,f.UX,D,J.m,F.q,E.If]}),r})()}}]);