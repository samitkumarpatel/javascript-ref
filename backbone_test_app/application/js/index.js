var TEST = TEST || {};
TEST.index = TEST.index || {};
(function($,index,backbone){
	
	$('#application-area').load('link1.html');
	$('#link1').on('click',loadLink1);
	$('#link2').on('click',loadLink2);
	$('#link3').on('click',loadLink3);
	
	index.Person = backbone.Model.extend({
		default : {
			id : 1001,
			name : 'test',
			age : 18,
			profession : 'normal man'	
		},
		validate : function(attributes){						
			if(attributes.age <0){
				return 'age should not be less then 0';
			}
			if(!attributes.name){
				return 'name should not be blank';
			}			
		}
	});

	index.PersonView = backbone.View.extend({
		tagName : 'li',
		initialize: function() {
    		this.render();
  		},
	  	render: function() {
	  		this.$el.html(this.model.get('id')+'|'+this.model.get('name')+'|'+this.model.get('age')+'|'+this.model.get('profession')+'|');
	  	}
	});

	
		
	function loadLink1(){
		$('#application-area').load('link1.html');
	}

	function loadLink2(){
		$('#application-area').load('link2.html');
	}

	function loadLink3(){
		$('#application-area').load('link3.html');
	}

}(jQuery,TEST.index,Backbone));