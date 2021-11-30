/* Validation for the form, user cannot submit without filling in form Catherine*/


function validateForm()
		{
		var
		x=document.forms["contactform"]["name"]["email"]["number"].value;
		if (x==null || x=="")
		{
		alert("Form must be filled out");
		return false;
		}
		}
		

