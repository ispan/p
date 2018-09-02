"use strict";angular.module("customer2App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/pontun/:pw",{templateUrl:"views/pontun.html",controller:"PontunCtrl",controllerAs:"pontun"}).otherwise({redirectTo:"/"})}]),angular.module("customer2App").controller("MainCtrl",["$scope","$location",function(a,b){a.pass="",a.fetchOrder=function(){b.path("/pontun/"+a.pass)}}]),angular.module("customer2App").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("customer2App").controller("PontunCtrl",["$scope","$routeParams","tsIspan",function(a,b,c){function d(){c.getOrder(b.pw).then(function(b){a.order=b,console.log("then ...",b)})}a.pwd=b.pw,d(),a.PageDate=new Date}]),angular.module("customer2App").service("tsIspan",["$http",function(a){this.getOrder=function(b){return console.log("in a serv pwd is",b),a.get('https://ts.ispan.is:443/pwds/search/findByPwd?pwd='+b).then(function(a){return console.log("success in service",a),angular.isUndefined(a.data._embedded)?void alert("Vitlaust lykilord"):a.data._embedded.pwds[0]},function(a){console.log("error",a)})}}]),angular.module("customer2App").filter("status",function(){return function(a,b,c,d){var e=b?b:0,f=a?a:0,g=c,h=d?d:0;return console.log("del-prod-opt-ord",e,f,g,h),e>0&&e==f?"list-group-item-danger":0==e&&f==h?"list-group-item-success":g?"list-group-item-warning":void 0}}),angular.module("customer2App").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<!--<div class="jumbotron">\n  <h1>\'Allo, \'Allo!</h1>\n  <p class="lead">\n    <img src="images/yeoman.c582c4d1.png" alt="I\'m Yeoman"><br>\n    Always a pleasure scaffolding your apps.\n  </p>\n  <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p>\n</div>--> <div class="row marketing"> <h4>Leita</h4> <!--  <p>\n        Saekja stodu\n    </p>--> <!--\n\n    <form class="form-control">\n        <label>Lykilord <input type="text" ng-model="pass"/></label>\n     <input type="button" ng-click="fetchOrder()" value="Saekja" />\n    </form>\n--> <form name="Search" class="form-inline" role="form"> <div class="form-group"> <label>Lykilorð : </label> <input ng-maxlength="6" ng-minlength="6" type="text" class="form-control" ng-model="pass" placeholder=" 6 stafa lykilorð "> </div> <button ng-disabled="Search.$invalid || Search.$pristine" type="button" ng-click="fetchOrder()" class="btn btn-default">Sækja</button> </form> </div>'),a.put("views/pontun.html",'<div class="page-header"> Pantað: {{order.orderdate | limitTo:10}} <h4>{{order.name}}</h4> Staðan í dag: {{PageDate |date: "yyyy-MM-dd"}} </div> <span class="label label-warning">I Framleiðslu </span> <span class="label label-success">Tilbúinn</span> <span class="label label-danger">Afhent</span> <p> <hr> <ul class="list-group" ng-repeat="detail in order.orderDetails"> <li class="list-group-item {{detail.totalProduced |status: detail.totalDelivered : detail.prodBatchN : detail.totalOrdered }}"> {{detail.unitType }} <br> Pantað:{{detail.totalOrdered}} st. Breidd: {{detail.width}} Hæð: {{detail.hight}} <br> Framleitt: {{detail.totalProduced || "0"}} , Afhent: {{detail.totalDelivered ||"NEI"}} </li> </ul>')}]);
