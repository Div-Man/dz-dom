var count = 0;
	var element = document.querySelector('#container');
	var childNodes = element.childNodes;

	function Rec(){
		if(count < childNodes.length){
			var node = (childNodes[count]);
			++count
			
			Rec()
			if(node.nodeType === 3){
					element.removeChild(node)
			}
		}
	
	}

	Rec()
	
module.exports = Rec	