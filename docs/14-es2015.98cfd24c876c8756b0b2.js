(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{lM0Z:function(t,i,n){"use strict";n.r(i);var s=n("ofXK"),o=n("3Pt+"),e=n("TEn/"),a=n("tyNb"),d=n("ProS"),c=n("fXoL"),b=n("DKVz");function h(t,i){if(1&t&&(c.Mb(0,"ion-select-option",17),c.Mb(1,"h1"),c.cc(2),c.Lb(),c.Lb()),2&t){const t=i.$implicit;c.Xb("value",t),c.zb(2),c.dc(t)}}class r{constructor(){this.now=0,this.diagnosed=0,this.cured=0,this.death=0,this.date=null,this.add1=0,this.add2=0,this.add3=0,this.add4=0}setProperties(t,i,n,s,o){this.now=t,this.diagnosed=i,this.cured=s,this.death=n,this.date=o}changeAdd(t){return t<0?t:"+"+t}setAdd(t,i,n,s){this.add1=this.changeAdd(t),this.add2=this.changeAdd(i),this.add3=this.changeAdd(n),this.add4=this.changeAdd(s)}}const l=[{path:"",component:(()=>{class t{constructor(){this.days=["02-1","02-2","02-3","02-4","02-5","02-6","02-7","02-8","02-9","02-10","02-11"],this.data=[[333,340,0,7,173,183,1,9,159,159,0,0,40,40,0,0,592,604,0,12,109,111,0,2,36,38,0,2,61,63,1,1,100,104,1,3,487,493,2,4,91,95,2,2,8565,9074,294,215,455,463,0,8,22,23,0,1,230,236,0,6,323,333,0,10,63,64,0,1,27,27,0,0,28,28,0,0,9,9,0,0,220,225,0,5,55,56,0,1,116,116,0,0,166,177,1,10,227,231,1,3,41,41,0,0,21,21,0,0,97,99,0,2,638,661,0,23,258,262,1,3,0,0,0,0,7,7,0,0,10,10,0,0,14,14,0,0],[401,408,0,7,199,212,1,12,179,179,0,0,48,51,0,3,669,683,0,14,125,127,0,2,44,46,0,2,65,70,1,4,109,113,1,3,550,566,2,14,114,118,2,2,10532,11177,350,295,505,521,0,16,30,31,0,1,264,271,0,7,373,391,0,18,69,70,0,1,34,34,0,0,31,31,0,0,13,13,0,0,240,246,0,6,64,66,0,2,128,128,0,0,182,193,1,10,241,254,1,12,47,48,0,1,24,24,0,0,106,109,0,3,688,724,0,36,291,300,2,7,0,0,0,0,8,8,0,0,10,10,0,0,15,15,0,0],[466,480,0,14,204,228,1,23,193,194,0,1,52,55,0,3,777,797,0,20,132,139,0,7,54,56,0,2,74,79,1,4,122,126,1,3,653,675,2,20,151,155,2,2,12712,13522,414,396,571,593,0,22,41,42,0,1,300,308,0,8,457,476,0,19,76,77,0,1,35,35,0,0,33,34,0,1,15,15,0,0,263,270,0,7,72,74,0,2,142,142,0,0,197,208,1,10,267,282,1,14,59,60,0,1,29,29,0,0,112,117,0,5,781,829,0,48,326,337,2,9,0,0,0,0,8,8,0,0,10,10,0,0,15,15,0,0],[510,530,0,20,228,253,1,24,198,205,0,7,53,57,0,4,838,870,0,32,140,150,0,10,59,64,0,5,84,89,1,4,130,135,1,4,721,764,2,41,184,190,2,4,15679,16678,479,520,626,661,0,35,53,54,0,1,328,341,0,13,521,548,0,27,79,81,0,2,42,42,0,0,33,34,0,1,17,17,0,0,285,298,0,13,77,81,0,4,164,165,0,1,220,233,1,12,277,301,1,23,65,67,0,2,32,32,0,0,117,122,0,5,832,895,0,63,350,366,2,14,0,0,0,0,10,10,0,0,11,11,0,0,17,18,1,0],[568,591,0,23,242,274,1,31,204,215,0,11,56,62,0,6,895,944,0,49,154,168,0,14,62,69,1,6,94,100,1,5,149,157,1,7,795,851,2,54,217,227,3,7,18483,19665,549,633,655,711,0,56,57,59,0,2,347,373,0,26,563,600,0,37,85,89,0,4,46,46,0,0,39,40,0,1,15,18,0,3,325,343,0,18,84,90,0,6,171,173,0,2,238,254,1,15,293,321,1,27,75,78,1,2,36,36,0,0,123,128,0,5,873,954,0,81,372,389,2,15,0,0,0,0,10,10,0,0,11,11,0,0,20,21,1,0],[631,665,0,34,263,297,1,33,209,224,0,15,58,67,0,9,949,1018,1,68,155,172,0,17,70,77,1,6,101,111,2,8,164,171,1,6,843,914,3,68,266,277,3,8,20677,22112,618,817,681,772,0,91,60,65,1,4,370,408,0,38,616,661,0,45,89,94,0,5,50,50,0,0,42,43,0,1,15,18,0,3,348,379,0,31,84,96,0,12,178,184,0,6,243,269,1,25,306,344,1,37,76,79,1,2,39,39,0,0,128,135,0,7,908,1006,0,98,385,411,2,24,0,0,0,0,9,10,0,1,15,16,0,1,23,24,1,0],[686,733,0,47,279,315,2,34,219,239,0,20,61,71,1,9,977,1075,1,97,166,183,0,17,82,89,1,6,109,122,2,11,169,195,1,25,880,981,4,97,278,295,5,12,23139,24953,699,1115,684,803,0,119,64,69,1,4,396,439,0,43,643,698,0,55,92,99,0,7,52,52,0,0,42,45,0,3,15,18,0,3,369,407,0,38,89,104,0,15,184,195,0,11,250,281,1,30,312,363,1,50,78,81,1,2,42,42,0,0,126,138,0,12,921,1048,0,127,393,426,2,31,0,0,0,0,9,10,0,1,15,16,0,1,25,26,1,0],[719,779,1,59,287,326,2,37,226,250,0,24,66,79,1,12,994,1120,1,125,176,195,1,18,88,96,1,7,111,128,2,15,174,206,2,30,896,1033,6,131,288,307,6,13,24881,27100,780,1439,678,838,1,159,72,78,1,5,417,468,0,51,668,740,0,72,94,106,0,12,54,54,0,0,32,45,0,13,15,18,0,3,384,435,1,50,94,115,0,21,191,208,0,17,250,292,1,41,325,386,1,60,83,88,1,4,45,45,0,0,123,140,0,17,902,1075,0,173,405,446,2,39,0,0,0,0,9,10,0,1,16,17,0,1,25,26,1,0],[754,830,3,73,291,337,2,44,226,261,0,35,65,83,2,16,1007,1151,1,143,191,210,1,18,101,109,1,7,114,136,3,19,181,218,2,35,898,1073,6,169,309,331,7,15,26965,29631,871,1795,692,879,1,186,67,80,1,12,420,492,0,72,668,771,1,102,96,108,0,12,58,58,0,0,36,49,0,13,15,18,0,3,395,459,1,63,94,119,0,25,193,213,0,20,250,295,1,44,328,405,1,76,86,91,1,4,49,49,0,0,123,141,0,18,891,1092,0,201,415,468,2,51,0,0,0,0,9,10,0,1,17,18,0,1,35,36,1,0],[768,860,4,88,291,342,3,48,228,267,0,39,63,86,2,21,995,1177,1,181,184,215,1,30,107,118,1,10,120,142,3,19,196,239,2,41,900,1105,7,198,325,360,8,27,28532,31728,974,2222,698,912,1,213,67,81,1,13,431,515,0,84,676,804,1,127,91,108,0,17,53,58,0,5,39,53,0,14,15,18,0,3,414,486,1,71,96,122,0,26,193,219,0,26,253,302,1,48,334,417,1,82,89,95,2,4,55,55,0,0,130,149,0,19,867,1117,0,250,418,486,2,66,0,0,0,0,9,10,0,1,17,18,0,1,41,42,1,0],[777,889,4,108,293,352,3,56,226,272,0,46,60,86,2,24,977,1219,1,241,190,222,1,31,113,131,1,17,122,145,3,20,201,251,2,48,896,1135,8,231,342,378,8,28,29659,33366,1068,2639,681,946,2,263,64,83,1,18,449,543,0,94,691,844,1,152,93,111,0,18,55,60,0,5,36,58,0,22,13,18,0,5,416,497,1,80,94,124,0,30,194,225,0,31,252,306,1,53,350,436,1,85,94,106,2,10,56,59,0,3,134,154,0,20,852,1131,0,279,423,505,3,79,0,0,0,0,9,10,0,1,17,18,0,1,48,49,1,0]],this.provinces=["\u5b89\u5fbd","\u5317\u4eac","\u798f\u5efa","\u7518\u8083","\u5e7f\u4e1c","\u5e7f\u897f","\u8d35\u5dde","\u6d77\u5357","\u6cb3\u5317","\u6cb3\u5357","\u9ed1\u9f99\u6c5f","\u6e56\u5317","\u6e56\u5357","\u5409\u6797","\u6c5f\u82cf","\u6c5f\u897f","\u8fbd\u5b81","\u5185\u8499\u53e4","\u5b81\u590f","\u9752\u6d77","\u5c71\u4e1c","\u5c71\u4e1c","\u5c71\u897f","\u9655\u897f","\u4e0a\u6d77","\u56db\u5ddd","\u5929\u6d25","\u65b0\u7586","\u4e91\u5357","\u6d59\u6c5f","\u91cd\u5e86","\u897f\u85cf","\u6fb3\u95e8","\u53f0\u6e7e","\u9999\u6e2f"],this.id=0,this.sum=[],this.store=this.days[0],this.dataSet=new r}ngOnInit(){this.myChart=d.init(document.getElementById("chart")),this.province=decodeURI(window.location.search.split("=")[1]);for(let t=0;t<this.provinces.length;++t)if(this.provinces[t]===this.province){this.id=t;break}for(let t=0;t<this.data.length;++t)this.sum[t]=this.data[t][4*this.id];this.dataSet.setProperties(this.data[0][4*this.id],this.data[0][4*this.id+1],this.data[0][4*this.id+2],this.data[0][4*this.id+3],this.days[0]),this.dataSet.setAdd(0,0,0,0),this.regionOptions={title:[{text:"\u7701\u4efd\u75ab\u60c5\u66f2\u7ebf",textStyle:{color:"#2D3E53",fontSize:28},left:20,top:20}],xAxis:{type:"category",data:this.days},yAxis:{type:"value"},series:[{data:this.sum,type:"line",smooth:!0}]},this.myChart.setOption(this.regionOptions)}changeHead(){let t=0;for(t=0;t<this.days.length&&this.store!==this.days[t];++t);this.dataSet.setProperties(this.data[t][4*this.id],this.data[t][4*this.id+1],this.data[t][4*this.id+2],this.data[t][4*this.id+3],this.days[t]),0!==t&&this.dataSet.setAdd(this.data[t][4*this.id]-this.data[t-1][4*this.id],this.data[t][4*this.id+1]-this.data[t-1][4*this.id+1],this.data[t][4*this.id+2]-this.data[t-1][4*this.id+2],this.data[t][4*this.id+3]-this.data[t-1][4*this.id+3])}showNow(){for(let t=0;t<this.data.length;++t)this.sum[t]=this.data[t][4*this.id];this.regionOptions.series.data=this.sum,this.myChart.setOption(this.regionOptions)}showTotal(){for(let t=0;t<this.data.length;++t)this.sum[t]=this.data[t][4*this.id+1];this.regionOptions.series.data=this.sum,this.myChart.setOption(this.regionOptions)}showCure(){for(let t=0;t<this.data.length;++t)this.sum[t]=this.data[t][4*this.id+2];this.regionOptions.series.data=this.sum,this.myChart.setOption(this.regionOptions)}showDeath(){for(let t=0;t<this.data.length;++t)this.sum[t]=this.data[t][4*this.id+3];this.regionOptions.series.data=this.sum}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=c.Db({type:t,selectors:[["app-detail"]],decls:93,vars:12,consts:[[1,"patient-types"],[1,"country"],[1,"last-date"],[3,"click"],["data-tap-disabled","true",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["size-sm",""],[1,"confirmed"],[1,"comparison"],[1,"than-yesterday"],[1,"confirmed-add"],[1,"cured"],[1,"cured-add"],[1,"dead-number"],[1,"dead-add"],["round","",3,"click"],["echarts","","id","chart",2,"width","100%","height","820px","margin","0px","padding","0px",3,"options"],[3,"value"]],template:function(t,i){1&t&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title"),c.Mb(3,"h1"),c.cc(4,"\u6297\u51fb\u65b0\u51a0\u80ba\u708e"),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(5,"ion-content"),c.Mb(6,"ion-card"),c.Mb(7,"ion-grid",0),c.Mb(8,"ion-row"),c.Mb(9,"ion-col"),c.Mb(10,"p",1),c.cc(11,"\u7701\u4efd\u75ab\u60c5\u8be6\u60c5"),c.Mb(12,"span",2),c.cc(13),c.Lb(),c.Lb(),c.Lb(),c.Mb(14,"ion-col"),c.Mb(15,"ion-button",3),c.Tb("click",(function(){return i.changeHead()})),c.cc(16,"\u8df3\u8f6c"),c.Lb(),c.Mb(17,"ion-select",4),c.Tb("ngModelChange",(function(t){return i.store=t})),c.Mb(18,"h1"),c.cc(19,"\u5f53\u524d\u6570\u636e\u7edf\u8ba1\u65f6\u95f4"),c.Lb(),c.bc(20,h,3,2,"ion-select-option",5),c.Lb(),c.Lb(),c.Lb(),c.Mb(21,"ion-row"),c.Mb(22,"ion-col",6),c.Mb(23,"ion-row"),c.Mb(24,"ion-col"),c.cc(25," \u73b0\u6709\u786e\u8bca "),c.Kb(26,"br"),c.Mb(27,"span",7),c.cc(28),c.Lb(),c.Kb(29,"br"),c.Mb(30,"span",8),c.Mb(31,"span",9),c.cc(32,"\u8f83\u6628\u65e5"),c.Lb(),c.Mb(33,"span",10),c.cc(34),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(35,"ion-col",6),c.Mb(36,"ion-row"),c.Mb(37,"ion-col"),c.cc(38,"\u7d2f\u8ba1\u786e\u8bca "),c.Kb(39,"br"),c.Mb(40,"span",11),c.cc(41),c.Lb(),c.Kb(42,"br"),c.Mb(43,"span",8),c.Mb(44,"span",9),c.cc(45,"\u8f83\u6628\u65e5"),c.Lb(),c.Mb(46,"span",12),c.cc(47),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(48,"ion-col",6),c.Mb(49,"ion-row"),c.Mb(50,"ion-col"),c.cc(51,"\u7d2f\u8ba1\u6cbb\u6108 "),c.Kb(52,"br"),c.Mb(53,"span",13),c.cc(54),c.Lb(),c.Kb(55,"br"),c.Mb(56,"span",8),c.Mb(57,"span",9),c.cc(58,"\u8f83\u6628\u65e5"),c.Lb(),c.Mb(59,"span",14),c.cc(60),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Mb(61,"ion-col",6),c.Mb(62,"ion-row"),c.Mb(63,"ion-col"),c.cc(64,"\u7d2f\u8ba1\u6b7b\u4ea1 "),c.Kb(65,"br"),c.Mb(66,"span",13),c.cc(67),c.Lb(),c.Kb(68,"br"),c.Mb(69,"span",8),c.Mb(70,"span",9),c.cc(71,"\u8f83\u6628\u65e5"),c.Lb(),c.Mb(72,"span",14),c.cc(73),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Kb(74,"br"),c.Lb(),c.Lb(),c.Kb(75,"br"),c.Mb(76,"ion-card"),c.Kb(77,"br"),c.Mb(78,"ion-row"),c.Mb(79,"ion-col"),c.Mb(80,"ion-button",15),c.Tb("click",(function(){return i.showNow()})),c.cc(81,"\u73b0\u6709\u786e\u8bca\u8d8b\u52bf"),c.Lb(),c.Lb(),c.Mb(82,"ion-col"),c.Mb(83,"ion-button",15),c.Tb("click",(function(){return i.showTotal()})),c.cc(84,"\u7d2f\u8ba1\u786e\u8bca\u8d8b\u52bf"),c.Lb(),c.Lb(),c.Mb(85,"ion-col"),c.Mb(86,"ion-button",15),c.Tb("click",(function(){return i.showCure()})),c.cc(87,"\u7d2f\u8ba1\u6cbb\u6108\u8d8b\u52bf"),c.Lb(),c.Lb(),c.Mb(88,"ion-col"),c.Mb(89,"ion-button",15),c.Tb("click",(function(){return i.showDeath()})),c.cc(90,"\u7d2f\u8ba1\u6b7b\u4ea1\u8d8b\u52bf"),c.Lb(),c.Lb(),c.Lb(),c.Kb(91,"br"),c.Kb(92,"div",16),c.Lb(),c.Lb()),2&t&&(c.zb(13),c.ec(" \u7edf\u8ba1\u622a\u6b62",i.dataSet.date,""),c.zb(4),c.Xb("ngModel",i.store),c.zb(3),c.Xb("ngForOf",i.days),c.zb(8),c.dc(i.dataSet.now),c.zb(6),c.dc(i.dataSet.add1),c.zb(7),c.dc(i.dataSet.diagnosed),c.zb(6),c.dc(i.dataSet.add2),c.zb(7),c.dc(i.dataSet.cured),c.zb(6),c.dc(i.dataSet.add3),c.zb(7),c.dc(i.dataSet.death),c.zb(6),c.dc(i.dataSet.add4),c.zb(19),c.Xb("options",i.regionOptions))},directives:[e.g,e.m,e.l,e.e,e.c,e.f,e.i,e.d,e.b,e.j,e.q,o.c,o.d,s.h,b.b,e.k],styles:[".country[_ngcontent-%COMP%]{font-weight:700;font-size:150%}.last-date[_ngcontent-%COMP%]{color:#c1c2c3;font-size:60%;text-align:right}.patient-types[_ngcontent-%COMP%]{color:#424344;font-family:PingFang SC,sans-serif;padding-left:5%}.confirmed[_ngcontent-%COMP%]{color:#bb2e06;font-size:180%;font-weight:700}.confirmed-add[_ngcontent-%COMP%]{color:#bc2f04}.cured[_ngcontent-%COMP%]{color:#107e4a;font-size:180%;font-weight:700}.cured-add[_ngcontent-%COMP%]{color:#16a666}.dead-number[_ngcontent-%COMP%]{font-size:180%;font-weight:700;color:#494a4b}.current-confirmed[_ngcontent-%COMP%]{color:#f93d07;font-size:180%;font-weight:700}.current-suspected[_ngcontent-%COMP%]{color:#db7108;font-size:180%;font-weight:700}.current-confirmed-add[_ngcontent-%COMP%]{color:#f93d07}.current-suspected-add[_ngcontent-%COMP%]{color:#e37b36}.than-yesterday[_ngcontent-%COMP%]{color:#9a9b9c}.comparison[_ngcontent-%COMP%]{font-size:80%}.head-div[_ngcontent-%COMP%]{border-radius:10px;box-shadow:0 0 12px #777;width:95%;margin:10px auto}ion-col[_ngcontent-%COMP%]{text-align:center}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(i){return new(i||t)},imports:[[a.i.forChild(l)],a.i]}),t})();n.d(i,"DetailPageModule",(function(){return M}));let M=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(i){return new(i||t)},imports:[[b.a,s.b,o.a,e.n,p]]}),t})()}}]);