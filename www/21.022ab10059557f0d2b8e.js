(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"3F3D":function(n,l,e){"use strict";e.r(l);var u=e("CcnG"),t=e("Pn9U"),o=e("r+JB"),r=e("gIcY"),i=e("mrSG"),d=e("a3Cf"),a=function(n){function l(){return null!==n&&n.apply(this,arguments)||this}return Object(i.__extends)(l,n),l.prototype.getPictures=function(n){return Object(d.c)(this,"getPictures",{callbackOrder:"reverse"},arguments)},l.prototype.hasReadPermission=function(){return Object(d.c)(this,"hasReadPermission",{platforms:["Android"]},arguments)},l.prototype.requestReadPermission=function(){return Object(d.c)(this,"requestReadPermission",{platforms:["Android"]},arguments)},l.pluginName="ImagePicker",l.plugin="cordova-plugin-telerik-imagepicker",l.pluginRef="window.imagePicker",l.repo="https://github.com/Telerik-Verified-Plugins/ImagePicker",l.install='ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION="your usage message"',l.installVariables=["PHOTO_LIBRARY_USAGE_DESCRIPTION"],l.platforms=["Android","iOS"],l}(d.a),c=function(){function n(n,l,e,u){this.nav=n,this.fb=l,this.camera=e,this.imagePicker=u,this.action={password:!1,picture:!1,register:!1},this.showPassword=!1,this.profilePic="./assets/icon/dashboard/amg.jpg";try{this.passwordForm=this.getPasswordForm()}catch(t){console.error(t)}}return n.prototype.ngOnInit=function(){},n.prototype.getPasswordForm=function(n){try{return n&&Object.keys(n).length>0?this.fb.group({oldPassword:[n.oldPassword],newPassword:[n.newPassword],confirmPassword:[n.confirmPassword]}):this.fb.group({oldPassword:["",[r.A.required]],newPassword:["",[r.A.required]],confirmPassword:["",[r.A.required]]})}catch(l){console.error(l)}},n.prototype.goBack=function(){try{this.nav.goBack()}catch(n){console.error(n)}},n.prototype.browse=function(n){var l=this;try{this.imagePicker.getPictures({maximumImagesCount:1,outputType:this.camera.DestinationType.DATA_URL}).then((function(n){for(var e=0;e<n.length;e++)l.profilePic=n[e]}),(function(n){console.error(n)}))}catch(e){console.error(e)}},n.prototype.upload=function(n){var l=this;try{this.camera.getPicture({quality:100,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE}).then((function(n){l.profilePic="data:image/jpeg;base64,"+n}),(function(n){alert(n)}))}catch(e){console.error(e)}},n}(),s=function(){return function(){}}(),g=e("pMnS"),f=e("oBZk"),m=e("ZZ/e"),p=e("Ip0R"),h=u["ɵcrt"]({encapsulation:0,styles:[["ion-card-subtitle[_ngcontent-%COMP%]{font-size:14px;color:#93b6f5;font-weight:700}.password[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-bottom:.5px solid #d3d3d3}.user-image[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:-moz-center!important;text-align:-webkit-center!important}.user-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%;margin-bottom:5px}"]],data:{}});function R(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,1,"ion-icon",[["name","eye-off"],["style","width: 10%"]],null,[[null,"click"]],(function(n,l,e){var u=!0,t=n.component;return"click"===l&&(u=0!=(t.showPassword=!t.showPassword)&&u),u}),f.bb,f.r)),u["ɵdid"](1,49152,null,0,m.F,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"eye-off")}),null)}function C(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,1,"ion-icon",[["name","eye"],["style","width: 10%"]],null,[[null,"click"]],(function(n,l,e){var u=!0,t=n.component;return"click"===l&&(u=0!=(t.showPassword=!t.showPassword)&&u),u}),f.bb,f.r)),u["ɵdid"](1,49152,null,0,m.F,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"eye")}),null)}function v(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,46,"ion-card",[],null,null,null,f.R,f.d)),u["ɵdid"](1,49152,null,0,m.p,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵeld"](2,0,null,0,4,"ion-card-header",[],null,null,null,f.O,f.f)),u["ɵdid"](3,49152,null,0,m.r,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵeld"](4,0,null,0,2,"ion-card-subtitle",[],null,null,null,f.P,f.g)),u["ɵdid"](5,49152,null,0,m.s,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵted"](-1,0,["Change Password"])),(n()(),u["ɵeld"](7,0,null,0,39,"ion-card-content",[["class","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,e){var t=!0;return"submit"===l&&(t=!1!==u["ɵnov"](n,8).onSubmit(e)&&t),"reset"===l&&(t=!1!==u["ɵnov"](n,8).onReset()&&t),t}),f.N,f.e)),u["ɵdid"](8,540672,null,0,r.l,[[8,null],[8,null]],{form:[0,"form"]},null),u["ɵprd"](2048,null,r.c,null,[r.l]),u["ɵdid"](10,16384,null,0,r.s,[[4,r.c]],null,null),u["ɵdid"](11,49152,null,0,m.q,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵeld"](12,0,null,0,8,"ion-item",[],null,null,null,f.gb,f.t)),u["ɵdid"](13,49152,null,0,m.K,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵeld"](14,0,null,0,6,"ion-input",[["formControlName","oldPassword"],["name","oldPassword"],["placeholder","Old Password"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0;return"ionBlur"===l&&(t=!1!==u["ɵnov"](n,15)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u["ɵnov"](n,15)._handleInputEvent(e.target)&&t),t}),f.cb,f.s)),u["ɵdid"](15,16384,null,0,m.Rb,[u.ElementRef],null,null),u["ɵprd"](1024,null,r.p,(function(n){return[n]}),[m.Rb]),u["ɵdid"](17,671744,null,0,r.j,[[3,r.c],[8,null],[8,null],[6,r.p],[2,r.D]],{name:[0,"name"]},null),u["ɵprd"](2048,null,r.q,null,[r.j]),u["ɵdid"](19,16384,null,0,r.r,[[4,r.q]],null,null),u["ɵdid"](20,49152,null,0,m.J,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(n()(),u["ɵeld"](21,0,null,0,12,"ion-item",[],null,null,null,f.gb,f.t)),u["ɵdid"](22,49152,null,0,m.K,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵeld"](23,0,null,0,6,"ion-input",[["formControlName","newPassword"],["name","newPassword"],["placeholder","New Password"],["style","width:90%"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0;return"ionBlur"===l&&(t=!1!==u["ɵnov"](n,24)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u["ɵnov"](n,24)._handleInputEvent(e.target)&&t),t}),f.cb,f.s)),u["ɵdid"](24,16384,null,0,m.Rb,[u.ElementRef],null,null),u["ɵprd"](1024,null,r.p,(function(n){return[n]}),[m.Rb]),u["ɵdid"](26,671744,null,0,r.j,[[3,r.c],[8,null],[8,null],[6,r.p],[2,r.D]],{name:[0,"name"]},null),u["ɵprd"](2048,null,r.q,null,[r.j]),u["ɵdid"](28,16384,null,0,r.r,[[4,r.q]],null,null),u["ɵdid"](29,49152,null,0,m.J,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(n()(),u["ɵand"](16777216,null,0,1,null,R)),u["ɵdid"](31,16384,null,0,p.m,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["ɵand"](16777216,null,0,1,null,C)),u["ɵdid"](33,16384,null,0,p.m,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["ɵeld"](34,0,null,0,8,"ion-item",[],null,null,null,f.gb,f.t)),u["ɵdid"](35,49152,null,0,m.K,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵeld"](36,0,null,0,6,"ion-input",[["formControlName","confirmPassword"],["name","confirmPassword"],["placeholder","Confirm Password"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0;return"ionBlur"===l&&(t=!1!==u["ɵnov"](n,37)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u["ɵnov"](n,37)._handleInputEvent(e.target)&&t),t}),f.cb,f.s)),u["ɵdid"](37,16384,null,0,m.Rb,[u.ElementRef],null,null),u["ɵprd"](1024,null,r.p,(function(n){return[n]}),[m.Rb]),u["ɵdid"](39,671744,null,0,r.j,[[3,r.c],[8,null],[8,null],[6,r.p],[2,r.D]],{name:[0,"name"]},null),u["ɵprd"](2048,null,r.q,null,[r.j]),u["ɵdid"](41,16384,null,0,r.r,[[4,r.q]],null,null),u["ɵdid"](42,49152,null,0,m.J,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{name:[0,"name"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(n()(),u["ɵeld"](43,0,null,0,3,"div",[["style","text-align: center;"]],null,null,null,null,null)),(n()(),u["ɵeld"](44,0,null,null,2,"ion-button",[["color","primary"]],null,null,null,f.M,f.c)),u["ɵdid"](45,49152,null,0,m.n,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{color:[0,"color"]},null),(n()(),u["ɵted"](-1,0,["Change Password"]))],(function(n,l){var e=l.component;n(l,8,0,e.passwordForm),n(l,17,0,"oldPassword"),n(l,20,0,"oldPassword","Old Password","text"),n(l,26,0,"newPassword"),n(l,29,0,"newPassword","New Password",e.showPassword?"text":"password"),n(l,31,0,e.showPassword),n(l,33,0,!e.showPassword),n(l,39,0,"confirmPassword"),n(l,42,0,"confirmPassword","Confirm Password","text"),n(l,45,0,"primary")}),(function(n,l){n(l,7,0,u["ɵnov"](l,10).ngClassUntouched,u["ɵnov"](l,10).ngClassTouched,u["ɵnov"](l,10).ngClassPristine,u["ɵnov"](l,10).ngClassDirty,u["ɵnov"](l,10).ngClassValid,u["ɵnov"](l,10).ngClassInvalid,u["ɵnov"](l,10).ngClassPending),n(l,14,0,u["ɵnov"](l,19).ngClassUntouched,u["ɵnov"](l,19).ngClassTouched,u["ɵnov"](l,19).ngClassPristine,u["ɵnov"](l,19).ngClassDirty,u["ɵnov"](l,19).ngClassValid,u["ɵnov"](l,19).ngClassInvalid,u["ɵnov"](l,19).ngClassPending),n(l,23,0,u["ɵnov"](l,28).ngClassUntouched,u["ɵnov"](l,28).ngClassTouched,u["ɵnov"](l,28).ngClassPristine,u["ɵnov"](l,28).ngClassDirty,u["ɵnov"](l,28).ngClassValid,u["ɵnov"](l,28).ngClassInvalid,u["ɵnov"](l,28).ngClassPending),n(l,36,0,u["ɵnov"](l,41).ngClassUntouched,u["ɵnov"](l,41).ngClassTouched,u["ɵnov"](l,41).ngClassPristine,u["ɵnov"](l,41).ngClassDirty,u["ɵnov"](l,41).ngClassValid,u["ɵnov"](l,41).ngClassInvalid,u["ɵnov"](l,41).ngClassPending)}))}function P(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,19,"ion-card",[],null,null,null,f.R,f.d)),u["ɵdid"](1,49152,null,0,m.p,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵeld"](2,0,null,0,4,"ion-card-header",[],null,null,null,f.O,f.f)),u["ɵdid"](3,49152,null,0,m.r,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵeld"](4,0,null,0,2,"ion-card-subtitle",[],null,null,null,f.P,f.g)),u["ɵdid"](5,49152,null,0,m.s,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵted"](-1,0,["Change Profile Picture"])),(n()(),u["ɵeld"](7,0,null,0,12,"ion-card-content",[["class","user-image"]],null,null,null,f.N,f.e)),u["ɵdid"](8,49152,null,0,m.q,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵeld"](9,0,null,0,10,"div",[["style","text-align: center;"]],null,null,null,null,null)),(n()(),u["ɵeld"](10,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),u["ɵeld"](11,0,null,null,4,"ion-button",[],null,[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==n.component.browse(e)&&u),u}),f.M,f.c)),u["ɵdid"](12,49152,null,0,m.n,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵted"](-1,0,["upload "])),(n()(),u["ɵeld"](14,0,null,0,1,"ion-icon",[["name","cloud-upload"]],null,null,null,f.bb,f.r)),u["ɵdid"](15,49152,null,0,m.F,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{name:[0,"name"]},null),(n()(),u["ɵeld"](16,0,null,null,3,"ion-button",[],null,[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==n.component.upload(e)&&u),u}),f.M,f.c)),u["ɵdid"](17,49152,null,0,m.n,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵeld"](18,0,null,0,1,"ion-icon",[["name","camera"]],null,null,null,f.bb,f.r)),u["ɵdid"](19,49152,null,0,m.F,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,15,0,"cloud-upload"),n(l,19,0,"camera")}),(function(n,l){n(l,10,0,l.component.profilePic)}))}function w(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,9,"ion-card",[],null,null,null,f.R,f.d)),u["ɵdid"](1,49152,null,0,m.p,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵeld"](2,0,null,0,4,"ion-card-header",[],null,null,null,f.O,f.f)),u["ɵdid"](3,49152,null,0,m.r,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵeld"](4,0,null,0,2,"ion-card-subtitle",[],null,null,null,f.P,f.g)),u["ɵdid"](5,49152,null,0,m.s,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵted"](-1,0,["Register Extension"])),(n()(),u["ɵeld"](7,0,null,0,2,"ion-card-content",[],null,null,null,f.N,f.e)),u["ɵdid"](8,49152,null,0,m.q,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵted"](-1,0,[" Register Extension here "]))],null,null)}function b(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,6,"ion-header",[],null,null,null,f.ab,f.q)),u["ɵdid"](1,49152,null,0,m.E,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵeld"](2,0,null,0,4,"ion-toolbar",[],null,null,null,f.tb,f.J)),u["ɵdid"](3,49152,null,0,m.Fb,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵeld"](4,0,null,0,2,"ion-icon",[["name","arrow-round-back"],["padding",""]],null,[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==n.component.goBack()&&u),u}),f.bb,f.r)),u["ɵdid"](5,49152,null,0,m.F,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],{name:[0,"name"]},null),u["ɵdid"](6,16384,null,0,m.f,[u.ElementRef],null,null),(n()(),u["ɵeld"](7,0,null,null,18,"ion-content",[],null,null,null,f.U,f.k)),u["ɵdid"](8,49152,null,0,m.x,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵeld"](9,0,null,0,16,"ion-list",[],null,null,null,f.ib,f.y)),u["ɵdid"](10,49152,null,0,m.R,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵeld"](11,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,e){var u=!0,t=n.component;return"click"===l&&(u=0!=(t.action.password=!t.action.password)&&u),u}),f.gb,f.t)),u["ɵdid"](12,49152,null,0,m.K,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵted"](-1,0,["Change Password"])),(n()(),u["ɵand"](16777216,null,0,1,null,v)),u["ɵdid"](15,16384,null,0,p.m,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["ɵeld"](16,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,e){var u=!0,t=n.component;return"click"===l&&(u=0!=(t.action.picture=!t.action.picture)&&u),u}),f.gb,f.t)),u["ɵdid"](17,49152,null,0,m.K,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵted"](-1,0,["Change Profile Picture"])),(n()(),u["ɵand"](16777216,null,0,1,null,P)),u["ɵdid"](20,16384,null,0,p.m,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),u["ɵeld"](21,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,e){var u=!0,t=n.component;return"click"===l&&(u=0!=(t.action.register=!t.action.register)&&u),u}),f.gb,f.t)),u["ɵdid"](22,49152,null,0,m.K,[u.ChangeDetectorRef,u.ElementRef,u.NgZone],null,null),(n()(),u["ɵted"](-1,0,["Register Extension"])),(n()(),u["ɵand"](16777216,null,0,1,null,w)),u["ɵdid"](25,16384,null,0,p.m,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,5,0,"arrow-round-back"),n(l,15,0,e.action.password),n(l,20,0,e.action.picture),n(l,25,0,e.action.register)}),null)}function y(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,0,null,null,3,"app-settings",[],null,null,null,b,h)),u["ɵprd"](512,null,t.a,t.a,[]),u["ɵprd"](512,null,a,a,[]),u["ɵdid"](3,114688,null,0,c,[o.a,r.g,t.a,a],null,null)],(function(n,l){n(l,3,0)}),null)}var E=u["ɵccf"]("app-settings",c,y,{},{},[]),D=e("ZYCi");e.d(l,"SettingsPageModuleNgFactory",(function(){return N}));var N=u["ɵcmf"](s,[],(function(n){return u["ɵmod"]([u["ɵmpd"](512,u.ComponentFactoryResolver,u["ɵCodegenComponentFactoryResolver"],[[8,[g.a,E]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["ɵmpd"](4608,p.o,p.n,[u.LOCALE_ID,[2,p.E]]),u["ɵmpd"](4608,r.C,r.C,[]),u["ɵmpd"](4608,r.g,r.g,[]),u["ɵmpd"](4608,m.c,m.c,[u.NgZone,u.ApplicationRef]),u["ɵmpd"](4608,m.Lb,m.Lb,[m.c,u.ComponentFactoryResolver,u.Injector]),u["ɵmpd"](4608,m.Pb,m.Pb,[m.c,u.ComponentFactoryResolver,u.Injector]),u["ɵmpd"](1073742336,p.c,p.c,[]),u["ɵmpd"](1073742336,r.B,r.B,[]),u["ɵmpd"](1073742336,r.n,r.n,[]),u["ɵmpd"](1073742336,r.x,r.x,[]),u["ɵmpd"](1073742336,m.Hb,m.Hb,[]),u["ɵmpd"](1073742336,D.p,D.p,[[2,D.u],[2,D.n]]),u["ɵmpd"](1073742336,s,s,[]),u["ɵmpd"](1024,D.l,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);