var TEST = TEST || {};
TEST.link3 = TEST.link3 || {};
(function($,link3,backbone){
	
	link3.Person = backbone.Model.extend({
		id : "1",
		name : "samit"
	});

	link3.InitialTab = backbone.View.extend({
		el:$('#link3-application-area'),
		initialize : function(){
			this.render();
		},
		render : function(){
			this.$el.html(_.template($('#initial-tab').html(),{}));
		}
	});

	link3.NextTab = backbone.View.extend({
		el:$('#link3-application-area'),
		initialize : function(){
			this.render();
		},
		render : function(){
			this.$el.html(_.template($('#next-tab').html(),{}));
		}
	});
	
	link3.NextNextTab = backbone.View.extend({
		el:$('#link3-application-area'),
		initialize : function(){
			this.render();
		},
		render : function(){
			this.$el.html(_.template($('#next-next-tab').html(),{}));
		}
	});	

	link3.Link3View = backbone.Router.extend({
		routes : {
			"" : "defaultTab",
			"next":"nextTab",
			"nextNext":"nextNextTab",
			"prev":"prevTab",
			"prevPrev":"prevPrevTab"
		},
		defaultTab: function(){
			$('#next').html("Next");
			$("#next").attr("href", "#next");
			new link3.InitialTab();
		},
		nextTab:function(){
			$('#next').html("Next-Next");
			$("#next").attr("href", "#nextNext");
			new link3.NextTab();										
		},
		nextNextTab:function(){
			new link3.NextNextTab();
		},
		prevTab:function(){					
			new link3.NextNextTab();				
		}
	});
	new link3.Link3View();
	backbone.history.start();

}(jQuery,TEST.link3,Backbone));