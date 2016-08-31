require.config({
	baseUrl: '',
	waitSeconds: 0,
	map: {
		'*': {
			'css': 'vendor/require/css.min'
		}
	},
	paths: {
		//AMD exposed modules
		'jquery': 'vendor/jquery/jquery.min',
		'jquery-ui': 'vendor/jquery-ui/jquery-ui.min',
		'datatables': 'vendor/datatables/jquery.dataTables.min',
		'datatablesBootstrap': 'vendor/datatables/dataTables.bootstrap.min',
		'datatablesButtons': 'vendor/datatables/dataTables.buttons.min',
		'datatablesExport': 'vendor/datatables/buttons.html5.min',
		'datatablesPrint': 'vendor/datatables/buttons.print.min',
		'datatables.plugins': 'pages/common/dataTables.plugins',
		'handlebars': 'vendor/handlebars/handlebars.runtime.min',
		'bootstrap': 'vendor/bootstrap/bootstrap.min',
		'bootstrap-timepicker': 'vendor/bootstrap-timepicker/bootstrap-timepicker',
		'jquery.plugins': 'pages/common/jquery.plugins',
		// Templates
		'handlebars-compiled': 'pages/common/handlebars-helpers'
	}
});


require(['pages/global/globalController'],
	function (globalController) {
		globalController.init();
	});