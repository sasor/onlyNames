$(document).ready(function(){
	console.log('DOM ready to job');	
	window.collections.people = new OnlyName.Collections.People
	window.collections.people.fetch();	
	console.log('data load');	
});
