var task = {};

/////////////////////////////////////////////////////////////////////
// metadata
task.name = "runAction";
task.description = "I will run an action and return the connection object";
task.scope = "local";
task.frequency = 0;

/////////////////////////////////////////////////////////////////////
// functional
task.run = function(api, params, next){
	if(params == null){prams = {};}
	
	var connection = {
		type: "task",
		params: params,
		error: false,
		remoteIP: "task",
		action: params.action,
	};
	
	api.processAction(api, connection, function(connection, cont){
		next(true, connection);
	})
};

/////////////////////////////////////////////////////////////////////
// exports
exports.task = task;
