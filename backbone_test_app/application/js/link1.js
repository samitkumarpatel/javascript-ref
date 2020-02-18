var TEST = TEST || {};
TEST.link1 = TEST.link1 || {};
(function($,link1,backbone){
	
	$('#add').on('click',addInModel);

	link1.person = new TEST.index.Person();
		
	function addInModel(){
		link1.person.set('id',$('#id').val());
		link1.person.set('name',$('#name').val());
		link1.person.set('age',$('#age').val());
		link1.person.set('profession',$('#profession').val());
			
		link1.personView = new TEST.index.PersonView({model : link1.person});
			
		$('#result').html(link1.personView.el);
	}

}(jQuery,TEST.link1,Backbone));