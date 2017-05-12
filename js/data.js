
var dietApp = angular.module('dietApp', []);

dietApp.controller('FoodController', function ($scope){

   $scope.sortType     = 'description'; // set the default sort type
   $scope.sortReverse  = false;  // set the default sort order
   $scope.searchFood   = '';     // set the default search/filter term

  $scope.foods = [
    {"foodtype":"Oil","description":"Olive Oil (Extra Virgin)","servingsize":"1 tbsp","calories":120,"protein":0,"carb":0,"fat":14,"fiber":0,"sugar":0,"carbtype":"","highlow":"HFLP HFLC"},
    {"foodtype":"Poultry","description":"Chicken Breast (Boneless/Skinless)","servingsize":"224g","calories":280,"protein":50,"carb":0,"fat":8,"fiber":0,"sugar":0,"carbtype":"","highlow":"HFLC HPLC"},
    {"foodtype":"Poultry","description":"Turkey","servingsize":"200g","calories":314,"protein":44,"carb":0,"fat":14,"fiber":0,"sugar":0,"carbtype":"","highlow":"HFLC HPLC"},
    {"foodtype":"Fish ","description":"Cod","servingsize":"1 fillet","calories":189,"protein":41,"carb":0,"fat":1.6,"fiber":0,"sugar":0,"carbtype":"","highlow":"HPLF HPLC"},
    {"foodtype":"Fish ","description":"Halibut","servingsize":"1/2 fillet","calories":176,"protein":36,"carb":0,"fat":2.6,"fiber":0,"sugar":0,"carbtype":"","highlow":"HPLF HPLC"},
    {"foodtype":"Fish ","description":"Salmon","servingsize":"1 fillet","calories":255,"protein":35,"carb":0,"fat":12,"fiber":0,"sugar":0,"carbtype":"","highlow":"HFLC HPLC"},
    {"foodtype":"Dairy","description":"Cottage Cheese (Low-fat)","servingsize":"1 cup","calories":164,"protein":28,"carb":6,"fat":2.3,"fiber":0,"sugar":6,"carbtype":"","highlow":"HCLF HPLF"},
    {"foodtype":"Meat","description":"Lamb","servingsize":"4 oz","calories":310,"protein":25.5,"carb":0,"fat":23,"fiber":0,"sugar":0,"carbtype":"","highlow":"HFLC HPLC"},
    {"foodtype":"Fish ","description":"Tuna","servingsize":"3 oz","calories":157,"protein":25,"carb":0,"fat":5,"fiber":0,"sugar":0,"carbtype":"","highlow":"HFLC HPLC"},
    {"foodtype":"Meat","description":"Lean Beef 96/4","servingsize":"4 oz","calories":150,"protein":24,"carb":0,"fat":4,"fiber":0,"sugar":0,"carbtype":"","highlow":"HPLF HPLC"},
    {"foodtype":"Fish ","description":"Shrimp","servingsize":"100g","calories":99,"protein":24,"carb":0.2,"fat":0.3,"fiber":0,"sugar":0,"carbtype":"","highlow":"HPLF HPLC"},
    {"foodtype":"Dairy","description":"Whey protein","servingsize":"1 scoop","calories":120,"protein":24,"carb":3,"fat":1,"fiber":0,"sugar":1,"carbtype":"","highlow":"HPLF HPLC"},
    {"foodtype":"Meat","description":"Venison","servingsize":"3 oz","calories":159,"protein":22,"carb":0,"fat":7,"fiber":0,"sugar":0,"carbtype":"","highlow":"HFLC HPLC"},
    {"foodtype":"Fruit ","description":"Apple","servingsize":"1 medium","calories":95,"protein":0.5,"carb":25,"fat":0.3,"fiber":4.4,"sugar":19,"carbtype":"Complex","highlow":"HCLP HCLF"},
    {"foodtype":"Seeds ","description":"Sesame","servingsize":"1 tbsp","calories":52,"protein":1.6,"carb":2.1,"fat":4.5,"fiber":1.1,"sugar":0,"carbtype":"","highlow":""},
    {"foodtype":"Fruit ","description":"Orange","servingsize":"1 large","calories":87,"protein":1.7,"carb":22,"fat":0.2,"fiber":4.4,"sugar":17,"carbtype":"","highlow":"HCLP HCLF"},
    {"foodtype":"Fish ","description":"Scallops","servingsize":"3 oz","calories":95,"protein":17,"carb":4.6,"fat":0.7,"fiber":0,"sugar":0,"carbtype":"","highlow":"HPLF HPLC"},
    {"foodtype":"Dairy","description":"Low-fat Yogurt (Plain)","servingsize":"1","calories":100,"protein":17,"carb":6,"fat":0.7,"fiber":0,"sugar":6,"carbtype":"Complex","highlow":"HCLF HPLF"},
    {"foodtype":"Berries ","description":"Blueberry","servingsize":"1 cup","calories":85,"protein":1.1,"carb":21,"fat":0.5,"fiber":3.6,"sugar":15,"carbtype":"","highlow":"HCLP HCLF"},
    {"foodtype":"Beans","description":"Pinto","servingsize":"1 cup boiled","calories":244,"protein":15,"carb":45,"fat":1.1,"fiber":15,"sugar":0.6,"carbtype":"Complex","highlow":"HCLF HPLF"},
    {"foodtype":"Fruit ","description":"Banana","servingsize":"1 medium","calories":105,"protein":1.3,"carb":27,"fat":0.4,"fiber":3.1,"sugar":14,"carbtype":"","highlow":"HCLP HCLF"},
    {"foodtype":"Beans","description":"Kidney","servingsize":"1 cup boiled","calories":225,"protein":15,"carb":40,"fat":0.9,"fiber":11,"sugar":0.6,"carbtype":"Complex","highlow":"HCLF HPLF"},
    {"foodtype":"Seeds ","description":"Lentils","servingsize":"1 tbsp","calories":14,"protein":1.1,"carb":2.5,"fat":0,"fiber":1,"sugar":0.2,"carbtype":"Complex","highlow":""},
    {"foodtype":"Seeds ","description":"Flax","servingsize":"1 tbsp","calories":55,"protein":1.9,"carb":3,"fat":4.3,"fiber":2.8,"sugar":0.2,"carbtype":"","highlow":""},
    {"foodtype":"Beans","description":"Navy","servingsize":"1 cup boiled","calories":255,"protein":15,"carb":47,"fat":1.1,"fiber":19,"sugar":0.7,"carbtype":"","highlow":"HCLF HPLF"},
    {"foodtype":"Whole Grains ","description":"Barley","servingsize":"1 cup pearled cooked","calories":193,"protein":3.6,"carb":44,"fat":0.7,"fiber":6,"sugar":0.4,"carbtype":"Complex","highlow":"HCLP HCLF"},
    {"foodtype":"Beans ","description":"Garbanzo (Chickpea)","servingsize":"1 cup boiled","calories":269,"protein":15,"carb":45,"fat":4.2,"fiber":12,"sugar":8,"carbtype":"Complex","highlow":"HCLF HPLF"},
    {"foodtype":"Dairy","description":"Low-fat Yogurt (sugar)","servingsize":"1","calories":130,"protein":12,"carb":19,"fat":0,"fiber":0.5,"sugar":16,"carbtype":"","highlow":"HCLF HPLF"},
    {"foodtype":"Seeds ","description":"Sunflower","servingsize":"1 cup w/ hulls","calories":269,"protein":10,"carb":9,"fat":24,"fiber":4,"sugar":1.2,"carbtype":"","highlow":""},
    {"foodtype":"Dairy ","description":"Milk (1%)","servingsize":"8 oz","calories":103,"protein":8,"carb":12,"fat":2.4,"fiber":0,"sugar":13,"carbtype":"","highlow":"HCLF HPLF"},
    {"foodtype":"Dairy ","description":"Milk (Whole)","servingsize":"8 oz","calories":148,"protein":8,"carb":12,"fat":8,"fiber":0,"sugar":12,"carbtype":"","highlow":""},
    {"foodtype":"Dairy ","description":"Milk (Skim)","servingsize":"1 cup","calories":83,"protein":8,"carb":12,"fat":0.2,"fiber":0,"sugar":12,"carbtype":"Complex","highlow":"HCLF HPLF"},
    {"foodtype":"Dairy ","description":"Milk (2%)","servingsize":"8 oz","calories":124,"protein":8,"carb":12,"fat":4.9,"fiber":0,"sugar":12,"carbtype":"","highlow":"HCLF HPLF"},
    {"foodtype":"Vegetable ","description":"Peas","servingsize":"1 cup","calories":118,"protein":8,"carb":21,"fat":0.6,"fiber":7,"sugar":8,"carbtype":"Complex","highlow":"HCLF HPLF"},
    {"foodtype":"Whole Grains ","description":"Quinoa","servingsize":"1 cup cooked","calories":223,"protein":8,"carb":39,"fat":3.6,"fiber":5,"sugar":1.6,"carbtype":"Complex","highlow":"HCLF HPLF"},
    {"foodtype":"Nuts","description":"Peanut Butter","servingsize":"2 tbsp","calories":188,"protein":8,"carb":6,"fat":16,"fiber":1.9,"sugar":3,"carbtype":"","highlow":""},
    {"foodtype":"Dairy ","description":"Milk (Chocolate 1%)","servingsize":"8 oz","calories":191,"protein":7,"carb":30,"fat":4.8,"fiber":1.8,"sugar":24,"carbtype":"","highlow":"HCLF HPLF"},
    {"foodtype":"Nuts ","description":"Peanuts","servingsize":"1oz","calories":161,"protein":7,"carb":4.6,"fat":14,"fiber":2.4,"sugar":1.1,"carbtype":"","highlow":"HFLC HPLC"},
    {"foodtype":"Egg","description":"Egg","servingsize":"1 large","calories":78,"protein":6,"carb":0.6,"fat":5,"fiber":0,"sugar":0.6,"carbtype":"","highlow":"HFLC HPLC"},
    {"foodtype":"Fruit ","description":"Avocado","servingsize":"1 whole","calories":322,"protein":4,"carb":17,"fat":29,"fiber":14,"sugar":1.3,"carbtype":"","highlow":"HFLP HCLP"},
    {"foodtype":"Nuts ","description":"Almonds","servingsize":"28 almonds","calories":160,"protein":6,"carb":6,"fat":14,"fiber":3,"sugar":1,"carbtype":"","highlow":""},
    {"foodtype":"Whole Grains ","description":"Oatmeal","servingsize":"1 cup cooked","calories":158,"protein":6,"carb":27,"fat":3.2,"fiber":4,"sugar":1.1,"carbtype":"Complex","highlow":"HCLF HPLF"},
    {"foodtype":"Seeds ","description":"Pumpkin","servingsize":"1 oz","calories":126,"protein":5,"carb":15,"fat":6,"fiber":5,"sugar":0,"carbtype":"","highlow":""},
    {"foodtype":"Berries ","description":"Strawberries","servingsize":"1 cup","calories":47,"protein":1,"carb":11,"fat":0.4,"fiber":2.9,"sugar":7,"carbtype":"Complex","highlow":"HCLP HCLF"},
    {"foodtype":"Vegetable ","description":"Mushrooms","servingsize":"1 cup","calories":16,"protein":2.2,"carb":2.3,"fat":0.2,"fiber":0.7,"sugar":1.4,"carbtype":"","highlow":""},
    {"foodtype":"Whole Grains ","description":"Whole Wheat Bread","servingsize":"1 slice","calories":69,"protein":3.6,"carb":12,"fat":0.9,"fiber":1.9,"sugar":1.6,"carbtype":"","highlow":"HCLP HCLF"},
    {"foodtype":"Berries ","description":"Blackberry","servingsize":"1 cup","calories":62,"protein":2,"carb":14,"fat":0.7,"fiber":8,"sugar":7,"carbtype":"","highlow":"HCLP HCLF"},
    {"foodtype":"Greens ","description":"Broccoli","servingsize":"1 cup","calories":31,"protein":2.6,"carb":6,"fat":0.3,"fiber":2.4,"sugar":1.6,"carbtype":"Complex","highlow":"HCLP HCLF"},
    {"foodtype":"Greens ","description":"Kale","servingsize":"1 cup boiled","calories":36,"protein":2.5,"carb":7,"fat":0.5,"fiber":2.6,"sugar":1.6,"carbtype":"","highlow":"HCLP HCLF"},
    {"foodtype":"Whole Grains ","description":"Brown Rice","servingsize":"1 cup","calories":216,"protein":5,"carb":45,"fat":1.8,"fiber":3.5,"sugar":0.7,"carbtype":"Complex","highlow":"HCLF HPLF"},
    {"foodtype":"Greens ","description":"Collard greens","servingsize":"1 cup boiled","calories":62,"protein":5,"carb":11,"fat":1.4,"fiber":8,"sugar":0.8,"carbtype":"","highlow":"HCLF HPLF"},
    {"foodtype":"Greens ","description":"Spinach","servingsize":"1 cup boiled","calories":41,"protein":5,"carb":7,"fat":0.5,"fiber":4.3,"sugar":0.8,"carbtype":"Complex","highlow":"HCLF HPLF"},
    {"foodtype":"Greens ","description":"Brussels sprouts","servingsize":"1 cup","calories":38,"protein":3,"carb":8,"fat":0.3,"fiber":3.3,"sugar":1.9,"carbtype":"","highlow":"HCLP HCLF"},
    {"foodtype":"Greens ","description":"Chard","servingsize":"1 cup boiled","calories":35,"protein":3.3,"carb":7,"fat":0.1,"fiber":3.7,"sugar":1.9,"carbtype":"","highlow":"HCLP HCLF"},
    {"foodtype":"Greens ","description":"Mustard greens","servingsize":"1 cup boiled","calories":37,"protein":3.6,"carb":6,"fat":0.7,"fiber":2.8,"sugar":2,"carbtype":"","highlow":"HCLP HCLF"},
    {"foodtype":"Nuts ","description":"Cashews","servingsize":"1oz","calories":157,"protein":5,"carb":9,"fat":12,"fiber":0.9,"sugar":1.7,"carbtype":"","highlow":""},
    {"foodtype":"Vegetable ","description":"Baked Potato","servingsize":"1 medium","calories":161,"protein":4.3,"carb":37,"fat":0.2,"fiber":3.8,"sugar":2,"carbtype":"Complex","highlow":"HCLP HCLF"},
    {"foodtype":"Greens ","description":"Cabbage","servingsize":"1 cup chopped","calories":22,"protein":1.1,"carb":5,"fat":0.1,"fiber":2.2,"sugar":2.8,"carbtype":"","highlow":"HCLP HCLF"},
    {"foodtype":"Vegetable ","description":"Bell Peppers","servingsize":"1 medium","calories":24,"protein":1,"carb":6,"fat":0.2,"fiber":2,"sugar":2.9,"carbtype":"","highlow":"HCLP HCLF"},
    {"foodtype":"Egg","description":"Egg White","servingsize":"1","calories":17,"protein":3.6,"carb":0.2,"fat":0.1,"fiber":0,"sugar":0.2,"carbtype":"","highlow":"HPLF HPLC"},
    {"foodtype":"Vegetable ","description":"Sweet Potato","servingsize":"1 whole","calories":112,"protein":2,"carb":26,"fat":0.1,"fiber":4,"sugar":6,"carbtype":"Complex","highlow":"HCLP HCLF"},
    {"foodtype":"Berries ","description":"Raspberry","servingsize":"1 cup","calories":65,"protein":1.5,"carb":15,"fat":0.8,"fiber":8,"sugar":5,"carbtype":"","highlow":"HCLP HCLF"}
  ];
});

dietApp.controller('macroCtrl', function ($scope){
    $scope.user = { };

    $scope.goals = {
      loss: {
        title:"Fat Loss"
        ,calories: 0
        ,protein: 0
        ,fats: 0
        ,carbs:0
        ,color: "lossColor"
      }
	    ,current: {
	        title:"Maintain"
	        ,calories: 0
	        ,protein: 0
	        ,fats: 0
	        ,carbs:0
          ,color: "maintainColor"
	    }
	    ,gain:{
	        title:"Muscle Gain"
	        ,calories: 0
	        ,protein: 0
	        ,fats: 0
	        ,carbs:0
          ,color: "gainColor"
	    }
	};

  $scope.goalsMetric = {
    loss: {
      title:"Fat Loss"
      ,calories: 0
      ,protein: 0
      ,fats: 0
      ,carbs:0
      ,color: "lossColor"
    }
    ,current: {
        title:"Maintain"
        ,calories: 0
        ,protein: 0
        ,fats: 0
        ,carbs:0
        ,color: "maintainColor"
    }
    ,gain:{
        title:"Muscle Gain"
        ,calories: 0
        ,protein: 0
        ,fats: 0
        ,carbs:0
        ,color: "gainColor"
    }
};

	$scope.activityLevels = [{
	        title: "Little or No Exercise"
	        ,description: "You avoid exercise"
	        ,value: 1.2
	    }
	    ,{
	        title: "Light Exercise"
	        ,description: "Exercise 1-3 times a week"
	        ,value: 1.375
	    }
	    ,{
	        title: "Moderate Exercise"
	        ,description: "Exercise 3-5 times a week"
	        ,value: 1.55
	    }
	    ,{
	        title: "Heavey Exercise"
	        ,description: "You Exercise 6-7 times a week"
	        ,value: 1.725
	    }
	    ,{
	        title: "Professional Athlete"
	        ,description: "You Exercise approx 2 times a Day"
	        ,value: 1.9
	    }
	];


    $scope.getMetaRate = function(){

      $scope.user.weight = parseFloat($scope.user.weightLB / 2.2046);
      $scope.user.height = parseFloat($scope.user.heightFT / 0.032808) + ($scope.user.heightIN / 2.54);

		var meta;
		if($scope.user.sex === "male"){
			meta = (88.362 + (13.397 * parseFloat(  $scope.user.weight) )
					+(5.799 * parseFloat(  $scope.user.height) )
					-(5.677 * parseFloat(  $scope.user.age) ));

		}else if($scope.user.sex === "female"){
			meta = (447.593 + (9.247 * parseFloat(  $scope.user.weight) )
					+(3.098 * parseFloat(  $scope.user.height) )
					-(4.33 * parseFloat(  $scope.user.age) ));
		}
		else{ meta = null;}

		$scope.user.bmr= meta;

		return (!isNaN(meta) && (meta!=null)) ? parseFloat(meta).toFixed(2) : "";

	};

  $scope.getMetaRateMetric = function(){

  var meta;
  if($scope.user.sex === "male"){
    meta = (88.362 + (13.397 * parseFloat(  $scope.user.weightMetric) )
        +(5.799 * parseFloat(  $scope.user.heightMetric) )
        -(5.677 * parseFloat(  $scope.user.age) ) );

  }else if($scope.user.sex === "female"){
    meta = (447.593 + (9.247 * parseFloat(  $scope.user.weightMetric) )
        +(3.098 * parseFloat(  $scope.user.heightMetric) )
        -(4.33 * parseFloat(  $scope.user.age) ) );
  }
  else{ meta = null;}

  $scope.user.bmrMetric= meta;

  return (!isNaN(meta) && (meta!=null)) ? parseFloat(meta).toFixed(2) : "";

};

	$scope.updateNutrition=function(){
	    if(($scope.user.sex === "male" || $scope.user.sex === "female") && $scope.user.weight>0 && $scope.user.height>0 && $scope.user.age>0 && $scope.user.activityLevel>0){
	        $scope.goals.current.calories = parseFloat($scope.user.bmr * $scope.user.activityLevel);
	        $scope.goals.loss.calories = $scope.goals.current.calories * 0.85;
	        $scope.goals.gain.calories = $scope.goals.current.calories * 1.15;

	        $scope.goals.current.protein = $scope.user.weight*2.204;
	        $scope.goals.loss.protein = $scope.user.weight*2.204;
	        $scope.goals.gain.protein = $scope.user.weight*2.204*1.5;

	        $scope.goals.current.carbs = ($scope.goals.current.calories*0.3)/4;
	        $scope.goals.loss.carbs = ($scope.goals.loss.calories*0.15)/4;
	        $scope.goals.gain.carbs = ($scope.goals.gain.calories*0.3)/4;

	        $scope.goals.current.fats = ($scope.goals.current.calories -($scope.goals.current.protein*4)-($scope.goals.current.carbs*4))/9;
	        $scope.goals.loss.fats = ($scope.goals.loss.calories -($scope.goals.loss.protein*4)-($scope.goals.loss.carbs*4))/9;
	        $scope.goals.gain.fats = ($scope.goals.gain.calories -($scope.goals.gain.protein*4)-($scope.goals.gain.carbs*4))/9;
	    }
	}

  $scope.updateNutritionMetric=function(){
      if(($scope.user.sex === "male" || $scope.user.sex === "female") && $scope.user.weightMetric>0 && $scope.user.heightMetric>0 && $scope.user.age>0 && $scope.user.activityLevel>0){
          $scope.goalsMetric.current.calories = parseFloat($scope.user.bmrMetric * $scope.user.activityLevel);
          $scope.goalsMetric.loss.calories = $scope.goalsMetric.current.calories * 0.85;
          $scope.goalsMetric.gain.calories = $scope.goalsMetric.current.calories * 1.15;

          $scope.goalsMetric.current.protein = $scope.user.weightMetric*2.204;
          $scope.goalsMetric.loss.protein = $scope.user.weightMetric*2.204;
          $scope.goalsMetric.gain.protein = $scope.user.weightMetric*2.204*1.5;

          $scope.goalsMetric.current.carbs = ($scope.goalsMetric.current.calories*0.3)/4;
          $scope.goalsMetric.loss.carbs = ($scope.goalsMetric.loss.calories*0.15)/4;
          $scope.goalsMetric.gain.carbs = ($scope.goalsMetric.gain.calories*0.3)/4;

          $scope.goalsMetric.current.fats = ($scope.goalsMetric.current.calories -($scope.goalsMetric.current.protein*4)-($scope.goalsMetric.current.carbs*4))/9;
          $scope.goalsMetric.loss.fats = ($scope.goalsMetric.loss.calories -($scope.goalsMetric.loss.protein*4)-($scope.goalsMetric.loss.carbs*4))/9;
          $scope.goalsMetric.gain.fats = ($scope.goalsMetric.gain.calories -($scope.goalsMetric.gain.protein*4)-($scope.goalsMetric.gain.carbs*4))/9;
      }
  }

});
