Template.transportationModal.events({

	'click .test': function(e){
	
		var start = $('.startField').val();
		var end = $('.endField').val();
		var mode = $('.active').val();

		Session.setPersistent("usrStart", start);
		Session.setPersistent("usrEnd", end);
		Session.setPersistent("mode", mode);
	},

	'click .car': function(e){
		 $('.car').addClass('active');
		 $('.plane').removeClass('active');
		 $('.transit').removeClass('active');
	},
	'click .plane': function(e){
		 $('.car').removeClass('active');
		 $('.plane').addClass('active');
		 $('.transit').removeClass('active');
	},
	'click .transit': function(e){
		 $('.car').removeClass('active');
		 $('.plane').removeClass('active');
		 $('.transit').addClass('active');
	}




	

});