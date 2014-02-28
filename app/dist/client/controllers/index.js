"use strict";
app.controller("IndexController", function($scope) {
  $scope.aoimessage = "おはよう！今日は早いね！！";
  return $scope.helloaoi = function() {
    return $scope.aoimessage = "今日も1日頑張ってね！";
  };
});
