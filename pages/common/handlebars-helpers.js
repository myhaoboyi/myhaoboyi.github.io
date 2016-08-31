define([
    'handlebars',
    'pages/common/handlebars-compiled',
], function (
	Handlebars,
	HBS
) {

  'use strict';

  /**
  	 * @namespace HandlebarsHelpers
  	 */
  Handlebars.registerHelper('statusChecker', function (context) {
    var status = context;
    var classToUse = '';
    switch (status) {
    case 'Completed':
      break;
    default:
      classToUse = '';
      break;
    }
    return classToUse;
  });

  Handlebars.registerHelper('sourceChecker', function (context) {
    var sourceName = context;
    var classToUse = '';
    switch (sourceName) {
    case 'OCR':
      classToUse = '';
      break;
    case 'EPO Text':
      classToUse = '';
      break;
    case 'IBM-TDB':
      classToUse = '';
      break;
    default:
      classToUse = 'hide';
      break;
    }
    return classToUse;
  });

  return HBS;
});
