// program : referance list like C#
const
	program={
		root:require('./root')
	,	app:null
	};

module.exports=program;

program.app=require('./app');


program.app.main(); // entry point