
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAd5apmK5epwylD3hIirmzZGTm7q5rhhIQ",
    authDomain: "blazedrts.firebaseapp.com",
    databaseURL: "https://blazedrts.firebaseio.com",
    projectId: "blazedrts",
    storageBucket: "blazedrts.appspot.com",
    messagingSenderId: "606418644213"
  };
  firebase.initializeApp(config); 

  var app = angular.module("app", ["firebase"]);

  app.factory("kommentarer", function($firebaseArray)  {
    var ref = firebase.database().ref().child("kommentarer");
    return $firebaseArray(ref);

  });

  app.controller("KommentarerCtrl", function($scope, kommentarer)  {
    $scope.kommentarer = kommentarer;

    $scope.kommentar = {
      text: "",
      skribent: "",
      
    }

    $scope.addComment = function() {
      $scope.kommentarer.$add($scope.kommentar);

      $scope.kommentar = {
        text: "",
        skribent: ""
      }

    }
  });