const utils = require('./utils');

function _render(req,res,pageData={}) {
	console.log('^^^^ rendering donor');
	let params = {
		template: 'donor',
		pageData: pageData
	};
	utils.render(req,res,params);
}


module.exports = {
	render: _render
}
