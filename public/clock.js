function foo() {
	document.getElementById('clock').textContent = new Date();
	setTimeout(foo, 100);
}
