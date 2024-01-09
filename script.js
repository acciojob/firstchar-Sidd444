function firstChar(text) {
  // your code here
  if(text.length===0) return "";
   let f="";
	for(let i=0;i<text.length;i++){
		if(f==="" && text[i]!==" ") f=text[i];
	}
	return f;
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));   
 