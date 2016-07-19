function prepend(container, newElement){
		var parent = document.querySelector(container);
		var element = document.createElement(newElement);
		element.innerText = 'Hello'
		parent.insertBefore(element, parent.firstChild)
	}	

prepend('#container', 'div')

module.exports = prepend