'use-strict';

angular.module('dmtool').controller('CharStatsAccordionCtrl', ["$scope", function ($scope) {
  $scope.groups = [
    {
    	title: 'Strength',
    	ability_score: 18,
    	ability_modifier: 4,
    	saving_throws: true,
    	skills: [
	    	{
	    		name: "Acrobatics",
	    		value: true
	    	}
    	]
    },
    {
    	title: 'Dexterity',
    	ability_score: 18,
    	ability_modifier: 4,
    	saving_throws: true,
    	skills: [
	    	{
	    		name: "Athletics",
	    		value: true
	    	},
	    	{
	    		name: "Sleight Of Hand",
	    		value: true
	    	},
	    	{
	    		name: "Stealth",
	    		value: true
	    	}
    	]
    },
    {
    	title: 'Constitution',
    	ability_score: 18,
    	ability_modifier: 4,
    	saving_throws: true,
    	skills: []
    },
    {
    	title: 'Intelligence',
    	ability_score: 18,
    	ability_modifier: 4,
    	saving_throws: true,
    	skills: [
	    	{
	    		name: "Arcana",
	    		value: true
	    	},
	    	{
	    		name: "History",
	    		value: true
	    	},
	    	{
	    		name: "Investigation",
	    		value: true
	    	},
	    	{
	    		name: "Nature",
	    		value: true
	    	},
	    	{
	    		name: "Religion",
	    		value: true
	    	}
    	]
    },
    {
    	title: 'Wisdom',
    	ability_score: 18,
    	ability_modifier: 4,
    	saving_throws: true,
    	skills: [
	    	{
	    		name: "Animal Handling",
	    		value: true
	    	},
	    	{
	    		name: "Insight",
	    		value: true
	    	},
	    	{
	    		name: "Medicine",
	    		value: true
	    	},
	    	{
	    		name: "Perception",
	    		value: true
	    	},
	    	{
	    		name: "Survival",
	    		value: true
	    	}
    	]
    },
    {
    	title: 'Charisma',
    	ability_score: 18,
    	ability_modifier: 4,
    	saving_throws: true,
    	skills: [
	    	{
	    		name: "Deception",
	    		value: true
	    	},
	    	{
	    		name: "Intimidation",
	    		value: true
	    	},
	    	{
	    		name: "Performance",
	    		value: true
	    	},
	    	{
	    		name: "Persuasion",
	    		value: true
	    	}
    	]
    }
  ];
}]);