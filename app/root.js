class root{
	static get example_constant(){
		return 1;
	}
	static set example_writeonly(value){
		console.log(value);
	}
}

module.exports=root;