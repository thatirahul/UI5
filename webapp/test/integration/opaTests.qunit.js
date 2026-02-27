/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["service/ui5/project1/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
