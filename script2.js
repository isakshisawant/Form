var form= document.getElementById('form');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');

add_more_fields.onclick = function(){
    var newField = document.createElement('div');
	newField.setAttribute('class','input-box');
    form.appendChild(newField);
    var newField = document.createElement('input');
    newField.setAttribute('type','text');
	newField.setAttribute('class','user-details');
	newField.setAttribute('placeholder','Enter Your Product details');
	form.appendChild(newField);
	var newField = document.createElement('input');
	newField.setAttribute('type','text');
	newField.setAttribute('class','user-details');
	newField.setAttribute('placeholder','Enter Your Product features');
	form.appendChild(newField);
    var newField = document.createElement('input');
	newField.setAttribute('type','file');
	newField.setAttribute('class','user-details');
	newField.setAttribute('placeholder','Add Your Pictures');
	form.appendChild(newField);
}

remove_fields.onclick = function(){
	var input_tags = form.getElementsByTagName('input');
    
	if(input_tags.length > 4) {
		form.removeChild(input_tags[(input_tags.length) - 2]);
	}
}