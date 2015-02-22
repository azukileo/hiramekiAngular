"use strict";
var App = angular.module('MAdmin', ['ngRoute', 'ui.bootstrap', 'ui.router', 'oc.lazyLoad', ]);
App.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/main");
    //
    // Now set up the states
    $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: 'templates/states/index.html',
            controller: 'IndexController'
        })
        .state('signin', {
            url: "/signin",
            templateUrl: 'templates/states/extra-signin.html',
            controller: 'SigninController'
        })
        .state('signup', {
            url: "/signup",
            templateUrl: 'templates/states/extra-signup.html',
            controller: 'SignupController'
        })
        .state('index', {
            url: "/index",
            templateUrl: 'templates/states/main.html',
            controller: 'MainController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'vendors/jquery-tablesorter/jquery.tablesorter.min.js',
                            'vendors/calendar/zabuto_calendar.min.js',
                            'vendors/flot-chart/jquery.flot.categories.js',
                            'vendors/flot-chart/jquery.flot.pie.js',
                            'vendors/flot-chart/jquery.flot.tooltip.js',
                            'vendors/flot-chart/jquery.flot.resize.js',
                            'vendors/flot-chart/jquery.flot.fillbetween.js',
                            'vendors/flot-chart/jquery.flot.stack.js',
                            'vendors/flot-chart/jquery.flot.spline.js'
                        ]
                    });
                }]
            }
        })
        .state('layout-left-sidebar', {
            url: "/layout-left-sidebar",
            templateUrl: 'templates/states/layout-left-sidebar.html'
        })
        .state('layout-left-sidebar-collapsed', {
            url: "/layout-left-sidebar-collapsed",
            templateUrl: 'templates/states/layout-left-sidebar-collapsed.html'
        })
        .state('layout-right-sidebar', {
            url: "/layout-right-sidebar",
            templateUrl: 'templates/states/layout-right-sidebar.html'
        })
        .state('layout-right-sidebar-collapsed', {
            url: "/layout-right-sidebar-collapsed",
            templateUrl: 'templates/states/layout-right-sidebar-collapsed.html'
        })
        .state('layout-horizontal-menu', {
            url: "/layout-horizontal-menu",
            templateUrl: 'templates/states/layout-horizontal-menu.html'
        })
        .state('layout-horizontal-menu-sidebar', {
            url: "/layout-horizontal-menu-sidebar",
            templateUrl: 'templates/states/layout-horizontal-menu-sidebar.html'
        })
        .state('layout-fixed-topbar', {
            url: "/layout-fixed-topbar",
            templateUrl: 'templates/states/layout-fixed-topbar.html'
        })
        .state('layout-boxed', {
            url: "/layout-boxed",
            templateUrl: 'templates/states/layout-boxed.html'
        })
        .state('layout-hidden-footer', {
            url: "/layout-hidden-footer",
            templateUrl: 'templates/states/layout-hidden-footer.html'
        })
        .state('layout-header-topbar', {
            url: "/layout-header-topbar",
            templateUrl: 'templates/states/layout-header-topbar.html',
            controller: 'LayoutHeaderTopbarController'
        })
        .state('layout-title-breadcrumb', {
            url: "/layout-title-breadcrumb",
            templateUrl: 'templates/states/layout-title-breadcrumb.html',
            controller: 'LayoutTitleBreadcrumbController'
        })
        // start ui-element
        .state('ui-generals', {
            url: "/ui-generals",
            templateUrl: 'templates/states/ui-generals.html',
            controller: 'UiGeneralsController'
        })
        .state('ui-buttons', {
            url: "/ui-buttons",
            templateUrl: 'templates/states/ui-buttons.html'
        })
        .state('ui-tabs', {
            url: "/ui-tabs",
            templateUrl: 'templates/states/ui-tabs.html',
            controller: 'UiTabsController'
        })
        .state('ui-panels', {
            url: "/ui-panels",
            templateUrl: 'templates/states/ui-panels.html'
        })
        .state('ui-progressbars', {
            url: "/ui-progressbars",
            templateUrl: 'templates/states/ui-progressbars.html',
            controller: 'UiProgressbarsController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.1.1.min.css',
                            'vendors/bootstrap-progressbar/bootstrap-progressbar.min.js'
                        ]
                    });
                }]
            }
        })
        .state('ui-editors', {
            url: "/ui-editors",
            templateUrl: 'templates/states/ui-editors.html',
            controller: 'UiEditorsController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/bootstrap-markdown/css/bootstrap-markdown.min.css',
                            'vendors/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',
                            'vendors/summernote/summernote.css',
                            'vendors/bootstrap-markdown/js/bootstrap-markdown.js',
                            'vendors/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
                            'vendors/ckeditor/ckeditor.js',
                            'vendors/summernote/summernote.js',
                        ]
                    });
                }]
            }
        })
        .state('ui-typography', {
            url: "/ui-typography",
            templateUrl: 'templates/states/ui-typography.html'
        })
        .state('ui-modals', {
            url: "/ui-modals",
            templateUrl: 'templates/states/ui-modals.html',
            controller: 'UIModalsController',
        })
        .state('ui-sliders', {
            url: "/ui-sliders",
            templateUrl: 'templates/states/ui-sliders.html',
            controller: 'UiSlidersController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/ion.rangeSlider/css/ion.rangeSlider.css',
                            'vendors/nouislider/jquery.nouislider.css',
                            'vendors/ion.rangeSlider/js/ion.rangeSlider.min.js',
                            'vendors/nouislider/jquery.nouislider.min.js'
                        ]
                    });
                }]
            }
        })
        .state('ui-nestable-list', {
            url: "/ui-nestable-list",
            templateUrl: 'templates/states/ui-nestable-list.html',
            controller: 'UiNestableListController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jquery-nestable/nestable.css',
                            'vendors/jquery-nestable/jquery.nestable.js'
                        ]
                    });
                }]
            }
        })
        .state('ui-dropdown-select', {
            url: "/ui-dropdown-select",
            templateUrl: 'templates/states/ui-dropdown-select.html',
            controller: 'UiDropdownSelectController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/select2/select2-madmin.css',
                            'vendors/bootstrap-select/bootstrap-select.min.css',
                            'vendors/multi-select/css/multi-select-madmin.css',
                            'vendors/select2/select2.min.js',
                            'vendors/bootstrap-select/bootstrap-select.min.js',
                            'vendors/multi-select/js/jquery.multi-select.js'
                        ]
                    });
                }]
            }
        })
        .state('ui-icons', {
            url: "/ui-icons",
            templateUrl: 'templates/states/ui-icons.html'
        })
        .state('ui-notific8-notifications', {
            url: "/ui-notific8-notifications",
            templateUrl: 'templates/states/ui-notific8-notifications.html',
            controller: 'UINotific8NotificationsController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jquery-notific8/jquery.notific8.min.css',
                            'vendors/sco.message/sco.message.css',
                            'vendors/jquery-notific8/jquery.notific8.min.js',
                            'vendors/sco.message/sco.message.js',
                            'vendors/jquery-notific8/notific8.js'
                        ]
                    });
                }]
            }
        })
        .state('ui-toastr-notifications', {
            url: "/ui-toastr-notifications",
            templateUrl: 'templates/states/ui-toastr-notifications.html',
            controller: 'UiToastrNotificationsController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jquery-toastr/toastr.min.css',
                            'vendors/jquery-toastr/toastr.min.js'
                        ]
                    });
                }]
            }
        })
        .state('ui-checkbox-radio', {
            url: "/ui-checkbox-radio",
            templateUrl: 'templates/states/ui-checkbox-radio.html',
            controller: 'CheckboxRadioController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/iCheck/skins/all.css',
                            'vendors/iCheck/icheck.min.js',
                            'vendors/iCheck/custom.min.js'
                        ]
                    });
                }]
            }
        })
        .state('ui-treeview', {
            url: "/ui-treeview",
            templateUrl: 'templates/states/ui-treeview.html',
            controller: 'UiTreeviewController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jstree/dist/themes/default/style.min.css',
                            'vendors/jquery-treetable/stylesheets/jquery.treetable.css',
                            'vendors/jquery-treetable/stylesheets/jquery.treetable.theme.custom.css',
                            'vendors/jstree/dist/jstree.min.js',
                            'vendors/jquery-treetable/javascripts/src/jquery.treetable.js'
                        ]
                    });
                }]
            }
        })
        .state('ui-portlets', {
            url: "/ui-portlets",
            templateUrl: 'templates/states/ui-portlets.html',
            controller: 'UiPortletsController'
        })

        // start form
        .state('form-layouts', {
            url: "/form-layouts",
            templateUrl: 'templates/states/form-layouts.html',
            controller: 'FormLayoutsController'
        })
        .state('form-basic', {
            url: "/form-basic",
            templateUrl: 'templates/states/form-basic.html',
            controller: 'FormBasicController'
        })
        .state('form-components', {
            url: "/form-components",
            templateUrl: 'templates/states/form-components.html',
            controller: 'FormComponentsController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/bootstrap-colorpicker/css/colorpicker.css',
                            'vendors/bootstrap-datepicker/css/datepicker.css',
                            'vendors/bootstrap-daterangepicker/daterangepicker-bs3.css',
                            'vendors/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'vendors/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            'vendors/bootstrap-clockface/css/clockface.css',
                            'vendors/bootstrap-switch/css/bootstrap-switch.css',
                            'vendors/bootstrap-datepicker/js/bootstrap-datepicker.js',
                            'vendors/bootstrap-daterangepicker/daterangepicker.js',
                            'vendors/moment/moment.js',
                            'vendors/bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                            'vendors/bootstrap-timepicker/js/bootstrap-timepicker.js',
                            'vendors/bootstrap-clockface/js/clockface.js',
                            'vendors/bootstrap-colorpicker/js/bootstrap-colorpicker.js',
                            'vendors/bootstrap-switch/js/bootstrap-switch.min.js',
                            'vendors/jquery-maskedinput/jquery-maskedinput.js',
                            'vendors/charCount.js'
                        ]
                    });
                }]
            }
        })
        .state('form-wizard', {
            url: "/form-wizard",
            templateUrl: 'templates/states/form-wizard.html',
            controller: 'FormWizardController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jquery-bootstrap-wizard/custom.css',
                            'vendors/jquery-steps/css/jquery.steps.css',
                            'vendors/jquery-validate/jquery.validate.min.js',
                            'vendors/jquery-steps/js/jquery.steps.min.js',
                            'vendors/jquery-bootstrap-wizard/jquery.bootstrap.wizard.min.js'
                        ]
                    });
                }]
            }
        })
        .state('form-xeditable', {
            url: "/form-xeditable",
            templateUrl: 'templates/states/form-xeditable.html',
            controller: 'FormXeditableController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/x-editable/select2/lib/select2-madmin.css',
                            'vendors/bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                            'vendors/x-editable/bootstrap3-editable/css/bootstrap-editable.css',
                            'vendors/x-editable/inputs-ext/address/address.css',
                            'vendors/bootstrap-switch/css/bootstrap-switch.css',
                            'vendors/x-editable/jquery.mockjax.js',
                            'vendors/moment/moment.js',
                            'vendors/x-editable/select2/lib/select2.js',
                            'vendors/bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                            'vendors/x-editable/bootstrap3-editable/js/bootstrap-editable.min.js',
                            'vendors/x-editable/inputs-ext/typeaheadjs/lib/typeahead.js',
                            'vendors/x-editable/inputs-ext/typeaheadjs/typeaheadjs.js',
                            'vendors/x-editable/inputs-ext/wysihtml5/wysihtml5.js',
                            'vendors/x-editable/inputs-ext/address/address.js',
                            'vendors/bootstrap-switch/js/bootstrap-switch.min.js',
                            'vendors/x-editable/demo-mock.js'
                        ]
                    });
                }]
            }
        })
        .state('form-validation', {
            url: "/form-validation",
            templateUrl: 'templates/states/form-validation.html',
            controller: 'FormValidationController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jquery-validate/jquery.validate.min.js']
                    });
                }]
            }
        })
        .state('form-multiple-file-upload', {
            url: "/form-multiple-file-upload",
            templateUrl: 'templates/states/form-multiple-file-upload.html',
            controller: 'FormMultipleFileUploadController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jquery-file-upload/css/jquery.fileupload.css',
                            'vendors/jquery-file-upload/css/jquery.fileupload-ui.css',
                            'vendors/jquery-file-upload/css/blueimp-gallery.min.css',
                            'vendors/jquery-file-upload/js/vendor/jquery.ui.widget.js',
                            'vendors/jquery-file-upload/js/vendor/tmpl.min.js',
                            'vendors/jquery-file-upload/js/vendor/load-image.min.js',
                            'vendors/jquery-file-upload/js/vendor/canvas-to-blob.min.js',
                            'vendors/jquery-file-upload/js/vendor/jquery.blueimp-gallery.min.js',
                            'vendors/jquery-file-upload/js/jquery.iframe-transport.js',
                            'vendors/jquery-file-upload/js/jquery.fileupload.js',
                            'vendors/jquery-file-upload/js/jquery.fileupload-process.js',
                            'vendors/jquery-file-upload/js/jquery.fileupload-image.js',
                            'vendors/jquery-file-upload/js/jquery.fileupload-audio.js',
                            'vendors/jquery-file-upload/js/jquery.fileupload-video.js',
                            'vendors/jquery-file-upload/js/jquery.fileupload-validate.js',
                            'vendors/jquery-file-upload/js/jquery.fileupload-ui.js',
                            'vendors/jquery-file-upload/js/cors/jquery.xdr-transport.js'
                        ]
                    });
                }]
            }
        })
        .state('form-dropzone-file-upload', {
            url: "/form-dropzone-file-upload",
            templateUrl: 'templates/states/form-dropzone-file-upload.html',
            controller: 'FormDropzoneFileUploadController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/dropzone/css/dropzone.css',
                            'vendors/dropzone/js/dropzone.js'
                        ]
                    });
                }]
            }
        })

    // start front end
    .state('frontend-one-page', {
        url: "/frontend-one-page",
        templateUrl: 'templates/states/frontend-one-page.html'
    })

    // start table
    .state('table-basic', {
            url: "/table-basic",
            templateUrl: 'templates/states/table-basic.html'
        })
        .state('table-responsive', {
            url: "/table-responsive",
            templateUrl: 'templates/states/table-responsive.html'
        })
        .state('table-action', {
            url: "/table-action",
            templateUrl: 'templates/states/table-action.html',
            controller: 'TableActionController'
        })
        .state('table-filter', {
            url: "/table-filter",
            templateUrl: 'templates/states/table-filter.html',
            controller: 'TableFilterController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/bootstrap-datepicker/css/datepicker3.css',
                            'vendors/bootstrap-datepicker/js/bootstrap-datepicker.js'
                        ]
                    });
                }]
            }
        })
        .state('table-advanced', {
            url: "/table-advanced",
            templateUrl: 'templates/states/table-advanced.html',
            controller: 'TableAdvancedController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jquery-tablesorter/themes/blue/style-custom.css',
                            'vendors/jquery-tablesorter/jquery.tablesorter.js'
                        ]
                    });
                }]
            }
        })
        .state('table-editable', {
            url: "/table-editable",
            templateUrl: 'templates/states/table-editable.html',
            controller: 'TableEditableController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/DataTables/media/css/jquery.dataTables.css',
                            'vendors/DataTables/media/css/dataTables.bootstrap.css',
                            'vendors/DataTables/media/js/jquery.dataTables.js',
                            'vendors/DataTables/media/js/dataTables.bootstrap.js',
                            'vendors/DataTables/jquery.jeditable.js'
                        ]
                    });
                }]
            }
        })
        .state('table-datatables', {
            url: "/table-datatables",
            templateUrl: 'templates/states/table-datatables.html',
            controller: 'TableDatatablesController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/DataTables/media/css/jquery.dataTables.css',
                            'vendors/DataTables/extensions/TableTools/css/dataTables.tableTools.min.css',
                            'vendors/DataTables/media/css/dataTables.bootstrap.css',
                            'vendors/DataTables/media/js/jquery.dataTables.js',
                            'vendors/DataTables/media/js/dataTables.bootstrap.js',
                            'vendors/DataTables/extensions/TableTools/js/dataTables.tableTools.min.js'
                        ]
                    });
                }]
            }
        })
        .state('table-sample', {
            url: "/table-sample",
            templateUrl: 'templates/states/table-sample.html',
            controller: 'TableSampleController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jquery-tablesorter/themes/blue/style-custom.css',
                            'vendors/bootstrap-datepicker/css/datepicker.css',
                            'vendors/jquery-tablesorter/jquery.tablesorter.js',
                            'vendors/bootstrap-datepicker/js/bootstrap-datepicker.js'
                        ]
                    });
                }]
            }
        })
        .state('table-export', {
            url: "/table-export",
            templateUrl: 'templates/states/table-export.html',
            controller: 'TableExportController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/tableExport/tableExport.js',
                            'vendors/tableExport/jquery.base64.js',
                            'vendors/tableExport/html2canvas.js',
                            'vendors/tableExport/jspdf/libs/sprintf.js',
                            'vendors/tableExport/jspdf/jspdf.js',
                            'vendors/tableExport/jspdf/libs/base64.js'
                        ]
                    });
                }]
            }
        })

    // start data grid
    .state('grid-layout-div', {
            url: "/grid-layout-div",
            templateUrl: 'templates/states/grid-layout-div.html',
            controller: 'GridLayoutDivController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jplist/html/css/jplist-custom.css',
                            'vendors/jplist/html/js/vendor/modernizr.min.js',
                            'vendors/jplist/html/js/jplist.min.js'
                        ]
                    });
                }]
            }
        })
        .state('grid-layout-table-1', {
            url: "/grid-layout-table-1",
            templateUrl: 'templates/states/grid-layout-table-1.html',
            controller: 'GridLayoutTable1Controller',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jplist/html/css/jplist-custom.css',
                            'vendors/jplist/html/js/vendor/modernizr.min.js',
                            'vendors/jplist/html/js/jplist.min.js'
                        ]
                    });
                }]
            }
        })
        .state('grid-layout-table-2', {
            url: "/grid-layout-table-2",
            templateUrl: 'templates/states/grid-layout-table-2.html',
            controller: 'GridLayoutTable2Controller',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jplist/html/css/jplist-custom.css',
                            'vendors/jplist/html/js/vendor/modernizr.min.js',
                            'vendors/jplist/html/js/jplist.min.js'
                        ]
                    });
                }]
            }
        })
        .state('grid-layout-2-table', {
            url: "/grid-layout-2-table",
            templateUrl: 'templates/states/grid-layout-2-table.html',
            controller: 'GridLayout2TableController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jplist/html/css/jplist-custom.css',
                            'vendors/jplist/html/js/vendor/modernizr.min.js',
                            'vendors/jplist/html/js/jplist.min.js'
                        ]
                    });
                }]
            }
        })
        .state('grid-layout-ul-li', {
            url: "/grid-layout-ul-li",
            templateUrl: 'templates/states/grid-layout-ul-li.html',
            controller: 'GridLayoutUlLiController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jplist/html/css/jplist-custom.css',
                            'vendors/jplist/html/js/vendor/modernizr.min.js',
                            'vendors/jplist/html/js/jplist.min.js'
                        ]
                    });
                }]
            }
        })
        .state('grid-filter-with-ul-li', {
            url: "/grid-filter-with-ul-li",
            templateUrl: 'templates/states/grid-filter-with-ul-li.html',
            controller: 'GridFilterWithUiLiController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jplist/html/css/jplist-custom.css',
                            'vendors/jplist/html/js/vendor/modernizr.min.js',
                            'vendors/jplist/html/js/jplist.min.js'
                        ]
                    });
                }]
            }
        })
        .state('grid-filter-with-select', {
            url: "/grid-filter-with-select",
            templateUrl: 'templates/states/grid-filter-with-select.html',
            controller: 'GridFilterWithSelectController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jplist/html/css/jplist-custom.css',
                            'vendors/jplist/html/js/vendor/modernizr.min.js',
                            'vendors/jplist/html/js/jplist.min.js'
                        ]
                    });
                }]
            }
        })
        .state('grid-double-sort', {
            url: "/grid-double-sort",
            templateUrl: 'templates/states/grid-double-sort.html',
            controller: 'GridDoubleSortController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jplist/html/css/jplist-custom.css',
                            'vendors/jplist/html/js/vendor/modernizr.min.js',
                            'vendors/jplist/html/js/jplist.min.js'
                        ]
                    });
                }]
            }
        })
        .state('grid-deep-linking', {
            url: "/grid-deep-linking",
            templateUrl: 'templates/states/grid-deep-linking.html',
            controller: 'GridDeepLinkingController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jplist/html/css/jplist-custom.css',
                            'vendors/jplist/html/js/vendor/modernizr.min.js',
                            'vendors/jplist/html/js/jplist.min.js'
                        ]
                    });
                }]
            }
        })

    .state('grid-pagination-only', {
            url: "/grid-pagination-only",
            templateUrl: 'templates/states/grid-pagination-only.html',
            controller: 'GridPaginationOnlyController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jplist/html/css/jplist-custom.css',
                            'vendors/jplist/html/js/vendor/modernizr.min.js',
                            'vendors/jplist/html/js/jplist.min.js'
                        ]
                    });
                }]
            }
        })
        .state('grid-without-item-per-page', {
            url: "/grid-without-item-per-page",
            templateUrl: 'templates/states/grid-without-item-per-page.html',
            controller: 'GridWithoutItemPerPageController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jplist/html/css/jplist-custom.css',
                            'vendors/jplist/html/js/vendor/modernizr.min.js',
                            'vendors/jplist/html/js/jplist.min.js'
                        ]
                    });
                }]
            }
        })
        .state('grid-hidden-sort', {
            url: "/grid-hidden-sort",
            templateUrl: 'templates/states/grid-hidden-sort.html',
            controller: 'GridHiddenSortController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jplist/html/css/jplist-custom.css',
                            'vendors/jplist/html/js/vendor/modernizr.min.js',
                            'vendors/jplist/html/js/jplist.min.js'
                        ]
                    });
                }]
            }
        })
        .state('grid-range-slider', {
            url: "/grid-range-slider",
            templateUrl: 'templates/states/grid-range-slider.html',
            controller: 'GridRangeSliderController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jplist/html/css/jplist-custom.css',
                            'vendors/jplist/html/js/vendor/modernizr.min.js',
                            'vendors/jplist/html/js/jplist.min.js'
                        ]
                    });
                }]
            }
        })
        .state('grid-datepicker', {
            url: "/grid-datepicker",
            templateUrl: 'templates/states/grid-datepicker.html',
            controller: 'GridDatepickerController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jplist/html/css/jplist-custom.css',
                            'vendors/jplist/html/js/vendor/modernizr.min.js',
                            'vendors/jplist/html/js/jplist.min.js'
                        ]
                    });
                }]
            }
        })

    // start page
    .state('page-gallery', {
            url: "/page-gallery",
            templateUrl: 'templates/states/page-gallery.html',
            controller: 'PageGalleryController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/lightbox/css/lightbox.css',
                            'vendors/mixitup/src/jquery.mixitup.js',
                            'vendors/lightbox/js/lightbox.min.js'
                        ]
                    });
                }]
            }
        })
        .state('page-timeline', {
            url: "/page-timeline",
            templateUrl: 'templates/states/page-timeline.html'
        })
        .state('page-blog', {
            url: "/page-blog",
            templateUrl: 'templates/states/page-blog.html'
        })
        .state('page-blog-item', {
            url: "/page-blog-item",
            templateUrl: 'templates/states/page-blog-item.html'
        })
        .state('page-about', {
            url: "/page-about",
            templateUrl: 'templates/states/page-about.html'
        })
        .state('page-contact', {
            url: "/page-contact",
            templateUrl: 'templates/states/page-contact.html',
            controller: 'PageContactController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/gmaps/gmaps.js']
                    });
                }]
            }
        })
        .state('page-calendar', {
            url: "/page-calendar",
            templateUrl: 'templates/states/page-calendar.html',
            controller: 'PageCalendarController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/fullcalendar/fullcalendar.css',
                            'vendors/fullcalendar/fullcalendar.print.css',
                            'vendors/fullcalendar/fullcalendar.min.js'
                        ]
                    });
                }]
            }
        })

    // start extra
    .state('extra-profile', {
            url: "/extra-profile",
            templateUrl: 'templates/states/extra-profile.html',
            controller: 'ExtraProfileController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/bootstrap-datepicker/css/datepicker.css',
                            'vendors/bootstrap-datepicker/js/bootstrap-datepicker.js'
                        ]
                    });
                }]
            }
        })
        .state('extra-signin', {
            url: "/extra-signin",
            templateUrl: 'templates/states/extra-signin.html',
            controller: 'ExtraSigninController'
        })
        .state('extra-signup', {
            url: "/extra-signup",
            templateUrl: 'templates/states/extra-signup.html',
            controller: 'ExtraSignupController'
        })
        .state('extra-lock-screen', {
            url: "/extra-lock-screen",
            templateUrl: 'templates/states/extra-lock-screen.html',
            controller: 'ExtraLockScreenController'
        })
        .state('extra-user-list', {
            url: "/extra-user-list",
            templateUrl: 'templates/states/extra-user-list.html',
            controller: 'ExtraUserListController'
        })
        .state('extra-invoice', {
            url: "/extra-invoice",
            templateUrl: 'templates/states/extra-invoice.html'
        })
        .state('extra-faq', {
            url: "/extra-faq",
            templateUrl: 'templates/states/extra-faq.html'
        })
        .state('extra-pricing-table', {
            url: "/extra-pricing-table",
            templateUrl: 'templates/states/extra-pricing-table.html'
        })
        .state('extra-blank', {
            url: "/extra-blank",
            templateUrl: 'templates/states/extra-blank.html'
        })
        .state('extra-404', {
            url: "/extra-404",
            templateUrl: 'templates/states/extra-404.html',
            controller: 'Extra404Controller'
        })
        .state('extra-500', {
            url: "/extra-500",
            templateUrl: 'templates/states/extra-500.html',
            controller: 'Extra500Controller'
        })

    // start email
    .state('email-inbox', {
            url: "/email-inbox",
            templateUrl: 'templates/states/email-inbox.html',
            controller: 'EmailInboxController'
        })
        .state('email-compose-mail', {
            url: "/email-compose-mail",
            templateUrl: 'templates/states/email-compose-mail.html',
            controller: 'EmailComposeMailController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',
                            'vendors/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js'
                        ]
                    });
                }]
            }
        })
        .state('email-view-mail', {
            url: "/email-view-mail",
            templateUrl: 'templates/states/email-view-mail.html'
        })

    // start charts
    .state('charts-flotchart', {
            url: "/charts-flotchart",
            templateUrl: 'templates/states/charts-flotchart.html',
            controller: 'ChartsFlotChartController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/flot-chart/jquery.flot.js',
                            'vendors/flot-chart/jquery.flot.categories.js',
                            'vendors/flot-chart/jquery.flot.pie.js',
                            'vendors/flot-chart/jquery.flot.tooltip.js',
                            'vendors/flot-chart/jquery.flot.resize.js',
                            'vendors/flot-chart/jquery.flot.fillbetween.js',
                            'vendors/flot-chart/jquery.flot.stack.js',
                            'vendors/flot-chart/jquery.flot.spline.js'
                        ]
                    });
                }]
            }
        })
        .state('charts-chartjs', {
            url: "/charts-chartjs",
            templateUrl: 'templates/states/charts-chartjs.html',
            controller: 'ChartsChartJsController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/chart.js/Chart.min.js']
                    });
                }]
            }
        })
        .state('charts-highchart-line', {
            url: "/charts-highchart-line",
            templateUrl: 'templates/states/charts-highchart-line.html',
            controller: 'ChartsHighchartLineController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jquery-highcharts/highcharts.js',
                            'vendors/jquery-highcharts/exporting.js'
                        ]
                    });
                }]
            }
        })
        .state('charts-highchart-area', {
            url: "/charts-highchart-area",
            templateUrl: 'templates/states/charts-highchart-area.html',
            controller: 'ChartsHighchartAreaController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jquery-highcharts/highcharts.js',
                            'vendors/jquery-highcharts/highcharts-more.js',
                            'vendors/jquery-highcharts/exporting.js'
                        ]
                    });
                }]
            }
        })
        .state('charts-highchart-column-bar', {
            url: "/charts-highchart-column-bar",
            templateUrl: 'templates/states/charts-highchart-column-bar.html',
            controller: 'ChartsHighchartColumnBarController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jquery-highcharts/highcharts.js',
                            'vendors/jquery-highcharts/highcharts-more.js',
                            'vendors/jquery-highcharts/data.js',
                            'vendors/jquery-highcharts/drilldown.js',
                            'vendors/jquery-highcharts/exporting.js'
                        ]
                    });
                }]
            }
        })
        .state('charts-highchart-pie', {
            url: "/charts-highchart-pie",
            templateUrl: 'templates/states/charts-highchart-pie.html',
            controller: 'ChartsHighchartPieController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jquery-highcharts/highcharts.js',
                            'vendors/jquery-highcharts/data.js',
                            'vendors/jquery-highcharts/drilldown.js',
                            'vendors/jquery-highcharts/exporting.js'
                        ]
                    });
                }]
            }
        })
        .state('charts-highchart-scatter-bubble', {
            url: "/charts-highchart-scatter-bubble",
            templateUrl: 'templates/states/charts-highchart-scatter-bubble.html',
            controller: 'ChartsHighchartScatterBubbleController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jquery-highcharts/highcharts.js',
                            'vendors/jquery-highcharts/highcharts-more.js',
                            'vendors/jquery-highcharts/exporting.js'
                        ]
                    });
                }]
            }
        })
        .state('charts-highchart-dynamic', {
            url: "/charts-highchart-dynamic",
            templateUrl: 'templates/states/charts-highchart-dynamic.html',
            controller: 'ChartsHighchartDynamicController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jquery-highcharts/highcharts.js',
                            'vendors/jquery-highcharts/exporting.js'
                        ]
                    });
                }]
            }
        })
        .state('charts-highchart-combinations', {
            url: "/charts-highchart-combinations",
            templateUrl: 'templates/states/charts-highchart-combinations.html',
            controller: 'ChartsHighchartCombinationController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jquery-highcharts/highcharts.js',
                            'vendors/jquery-highcharts/exporting.js'
                        ]
                    });
                }]
            }
        })
        .state('charts-highchart-more', {
            url: "/charts-highchart-more",
            templateUrl: 'templates/states/charts-highchart-more.html',
            controller: 'ChartsHighchartMoreController',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: ['vendors/jquery-highcharts/highchart.js',
                            'vendors/jquery-highcharts/funnel.js',
                            'vendors/jquery-highcharts/highcharts-more.js',
                            'vendors/jquery-highcharts/data.js',
                            'vendors/jquery-highcharts/exporting.js'
                        ]
                    });
                }]
            }
        })

    // start animation
    .state('animations', {
        url: "/animations",
        templateUrl: 'templates/states/animations.html'
    })

    ;
});


App.controller('AppController', function($scope, $rootScope, $routeParams, $location) {
    $rootScope.style = 'style1';
    $rootScope.theme = 'pink-blue';
    $scope.userIsLogged = false;
    $scope.data = {};
    $scope.effect = '';
    $scope.header = {
        form: false,
        chat: false,
        theme: false,
        footer: true,
        history: false,
        animation: '',
        boxed: '',
        layout_menu: '',
        theme_style: 'style1',
        header_topbar: 'static',
        menu_style: 'sidebar-default',
        menu_collapse: '',
        layout_horizontal_menu: '',

        toggle: function(k) {
            switch (k) {
                case 'chat':
                    $scope.header.chat = !$scope.header.chat;
                    break;
                case 'form':
                    $scope.header.form = !$scope.header.form;
                    break;
                case 'sitebar':
                    $scope.header.menu_style = $scope.header.menu_style ? '' : (($scope.header.layout_menu === '') ? 'sidebar-collapsed' : 'right-side-collapsed');
                    break;
                case 'theme':
                    $scope.header.theme = !$scope.header.theme;
                    break;
                case 'history':
                    $scope.header.history = !$scope.header.history;
                    $scope.header.menu_style = $scope.header.history ? 'sidebar-collapsed' : 'sidebar-default';
                    break;
            }
        },

        collapse: function(c) {
            if (c === 'change') {
                $scope.header.menu_collapse = '';
            } else {
                if ($scope.header.menu_style) {
                    $scope.header.menu_style = '';
                    $scope.header.menu_collapse = $scope.header.menu_collapse ? '' : 'sidebar-collapsed';
                } else {
                    $scope.header.menu_collapse = $scope.header.menu_collapse ? '' : 'sidebar-collapsed';
                }
            }

        }
    };

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $scope.header.animation = 'fadeInUp';
        setTimeout(function() {
            $scope.header.animation = '';
        }, 100);

        $('.sidebar-collapse').removeClass('in').addClass('collapse');

        $scope.data = $.fn.Data.get(toState.url);
        if (-1 == $.inArray(toState.url, ['/extra-500', '/extra-404', '/extra-lock-screen', '/extra-signup', '/extra-signin'])) {
            $('body').removeClass('bounceInLeft');
            $("body>.default-page").show();
            $("body>.extra-page").hide();
        } else {
            window.scrollTo(0, 0);
        }

        $scope.header.boxed = '';
        $scope.header.footer = true;

        $rootScope.style = 'style1';
        $rootScope.theme = 'pink-blue';

        if ('/layout-left-sidebar' === toState.url) {
            $scope.header.layout_menu = '';
            $scope.header.header_topbar = '';
            $scope.header.layout_horizontal_menu = '';
        } else if ('/layout-left-sidebar-collapsed' === toState.url) {
            $scope.header.layout_menu = '';
            $scope.header.header_topbar = 'sidebar-collapsed';
            $scope.header.layout_horizontal_menu = '';
        } else if ('/layout-right-sidebar' === toState.url) {
            $scope.header.layout_menu = 'right-sidebar';
            $scope.header.header_topbar = '';
            $scope.header.layout_horizontal_menu = '';
        } else if ('/layout-right-sidebar-collapsed' === toState.url) {
            $scope.header.layout_menu = 'right-sidebar';
            $scope.header.header_topbar = 'right-side-collapsed';
            $scope.header.layout_horizontal_menu = '';
        } else if ('/layout-horizontal-menu' === toState.url) {
            $scope.header.layout_menu = '';
            $scope.header.header_topbar = 'horizontal-menu-page';
            $scope.header.layout_horizontal_menu = 'horizontal-menu hidden-sm hidden-xs';
        } else if ('/layout-horizontal-menu-sidebar' === toState.url) {
            $scope.header.layout_horizontal_menu = 'horizontal-menu hidden-sm hidden-xs';
        } else if ('/layout-fixed-topbar' === toState.url) {
            $scope.header.layout_menu = '';
            $scope.header.header_topbar = 'fixed-topbar';
            $scope.header.layout_horizontal_menu = '';
        } else if ('/layout-boxed' === toState.url) {
            $scope.header.boxed = 'container';
        } else if ('/layout-hidden-footer' == toState.url) {
            $scope.header.footer = false;
        } else if ($.inArray(toState.url, ['/extra-500', '/extra-404']) >= 0) {
            $rootScope.style = 'style1';
            $rootScope.theme = 'pink-violet';
        }
    });

    $scope.style_change = function() {
        $rootScope.style = $scope.header.theme_style;
    };

    $scope.theme_change = function(t) {
        $rootScope.theme = t;
    };

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.quick-sidebar').css('top', '0');
        } else {
            $('.quick-sidebar').css('top', '50px');
        }
    });
    $('.quick-sidebar > .header-quick-sidebar').slimScroll({
        "height": $(window).height() - 50,
        'width': '280px',
        "wheelStep": 30
    });
    $('#news-ticker-close').click(function(e) {
        $('.news-ticker').remove();
    });

});
App.controller('IndexController', function($scope, $routeParams) {

});
App.controller('SigninController', ['$scope', function($scope){

}]);
App.controller('SignupController', ['$scope', 'constService', 'signupService', function($scope, constService, signupService){
    $scope.gender = null;
    constService.getGender()
    .success(function (data, status, headers){
        if (data) {
            $scope.genders = data;
            console.log(JSON.stringify($scope.genders));
        } else {
            console.log('no data');
        }
    })
    .error(function (data, status, headers) {

    });

    $scope.submitSignup = function () {
        console.log("submit = " + JSON.stringify($scope.signup));
        signupService.submitUser($scope.signup)
        .then(function (status) {
            console.log('登録成功！');
            $location.path('/');
        }, function (err) {
            console.log(' ------- 登録エラー --------');
        });
    }
}]);
App.service('signupService', ['$http', '$q', function($http, $q) {
    var submitUser = function(user) {
        var d = $q.defer();

        $http({
            method: 'POST',
            data: user,
            url: '/user'
        }).success(function (data, status, headers) {
            d.resolve(data);
        }).error(function (data, status, headers) {
            d.reject(data);
        });

        return d.promise;
    };

    return {
        submitUser: submitUser
    }
}]);
App.service('constService', ['$http', '$q', function($http, $q) {
    var getGender = function () {
        return $http({
            method: 'GET',
            url: '/const/gender'
        });
    }

    return {
        getGender: getGender
    }
}]);
App.directive('validPassword', function() {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, controller) {
            controller.$parsers.unshift( function (viewValue, $scope) {
                var noMatch = viewValue !== scope.singupForm.password.$viewValue
                controller.$setValidity('noMatch', !noMatch);
            });
        }
    }
});
App.controller('ChartsChartJsController', function($scope, $routeParams) {
    setTimeout(function() {
        var lineChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                data: [65, 59, 90, 81, 56, 55, 40]
            }, {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [28, 48, 40, 19, 96, 27, 100]
            }]
        };

        new Chart(document.getElementById("line-chart").getContext("2d")).Line(lineChartData);
        //END LINE CHART

        //BEGIN BAR CHART
        var barChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                data: [65, 59, 90, 81, 56, 55, 40]
            }, {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
            }]

        };

        new Chart(document.getElementById("bar-chart").getContext("2d")).Bar(barChartData);
        //END BAR CHART

        //BEGIN RADAR CHART
        var radarChartData = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Partying", "Running"],
            datasets: [{
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                data: [65, 59, 90, 81, 56, 55, 40]
            }, {
                fillColor: "rgba(151,187,205,0.5)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                data: [28, 48, 40, 19, 96, 27, 100]
            }]

        };

        new Chart(document.getElementById("radar-chart").getContext("2d")).Radar(radarChartData, {
            scaleShowLabels: false,
            pointLabelFontSize: 10
        });
        //END RADAR CHART

        //BEGIN POLAR AREA CHART
        var chartData = [{
            value: Math.random(),
            color: "#D97041"
        }, {
            value: Math.random(),
            color: "#C7604C"
        }, {
            value: Math.random(),
            color: "#21323D"
        }, {
            value: Math.random(),
            color: "#9D9B7F"
        }, {
            value: Math.random(),
            color: "#7D4F6D"
        }, {
            value: Math.random(),
            color: "#584A5E"
        }];

        new Chart(document.getElementById("polar-area-chart").getContext("2d")).PolarArea(chartData);
        //END POLAR AREA CHART

        //BEGIN PIE CHART
        var pieData = [{
                value: 30,
                color: "#F38630"
            }, {
                value: 50,
                color: "#E0E4CC"
            }, {
                value: 100,
                color: "#69D2E7"
            }

        ];

        new Chart(document.getElementById("pie-chart").getContext("2d")).Pie(pieData);
        //END PIE CHART

        //BEGIN DOUGHNUT CHART
        var doughnutData = [{
                value: 30,
                color: "#F7464A"
            }, {
                value: 50,
                color: "#46BFBD"
            }, {
                value: 100,
                color: "#FDB45C"
            }, {
                value: 40,
                color: "#949FB1"
            }, {
                value: 120,
                color: "#4D5360"
            }

        ];

        new Chart(document.getElementById("doughnut-chart").getContext("2d")).Doughnut(doughnutData);
    }, 50);

    //BEGIN PORTLET
    $(".portlet").each(function(index, element) {
        var me = $(this);
        $(">.portlet-header>.tools>i", me).click(function(e) {
            if ($(this).hasClass('fa-chevron-up')) {
                $(">.portlet-body", me).slideUp('fast');
                $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            } else if ($(this).hasClass('fa-chevron-down')) {
                $(">.portlet-body", me).slideDown('fast');
                $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else if ($(this).hasClass('fa-cog')) {
                //Show modal
            } else if ($(this).hasClass('fa-refresh')) {
                //$(">.portlet-body", me).hide();
                $(">.portlet-body", me).addClass('wait');

                setTimeout(function() {
                    //$(">.portlet-body>div", me).show();
                    $(">.portlet-body", me).removeClass('wait');
                }, 1000);
            } else if ($(this).hasClass('fa-times')) {
                me.remove();
            }
        });
    });
    //END PORTLET
});
App.controller('ChartsFlotChartController', function($scope, $routeParams) {
    setTimeout(function() {
        var d1_1 = [
            ["Jan", 200],
            ["Feb", 201],
            ["Mar", 199],
            ["Apr", 187],
            ["May", 193],
            ["Jun", 192],
            ["Jul", 206],
            ["Aug", 186],
            ["Sep", 206]
        ];
        var d1_2 = [
            ["Jan", 122],
            ["Feb", 170],
            ["Mar", 163],
            ["Apr", 161],
            ["May", 122],
            ["Jun", 136],
            ["Jul", 130],
            ["Aug", 128],
            ["Sep", 148]
        ];
        var d1_3 = [
            ["Jan", 81],
            ["Feb", 92],
            ["Mar", 98],
            ["Apr", 102],
            ["May", 80],
            ["Jun", 97],
            ["Jul", 86],
            ["Aug", 105],
            ["Sep", 85]
        ];

        $.plot("#line-chart", [{
            data: d1_1,
            label: "Chrome",
            color: "#ffce54"
        }, {
            data: d1_2,
            label: "Firefox",
            color: "#3DB9D3"
        }, {
            data: d1_3,
            label: "Safari",
            color: "#df4782"
        }], {
            series: {
                lines: {
                    show: !0,
                    fill: 0.01
                },
                points: {
                    show: !0,
                    radius: 4
                }
            },
            grid: {
                borderColor: "#fafafa",
                borderWidth: 1,
                hoverable: !0
            },
            tooltip: !0,
            tooltipOpts: {
                content: "%x : %y",
                defaultTheme: false
            },
            xaxis: {
                tickColor: "#fafafa",
                mode: "categories"
            },
            yaxis: {
                tickColor: "#fafafa"
            },
            shadowSize: 0
        });
        //END LINE CHART

        //BEGIN LINE CHART SPLINE
        var d2_1 = [
            ["Jan", 181],
            ["Feb", 184],
            ["Mar", 189],
            ["Apr", 180],
            ["May", 208],
            ["Jun", 183],
            ["Jul", 185],
            ["Aug", 188],
            ["Sep", 202]
        ];
        var d2_2 = [
            ["Jan", 170],
            ["Feb", 152],
            ["Mar", 133],
            ["Apr", 146],
            ["May", 164],
            ["Jun", 151],
            ["Jul", 120],
            ["Aug", 127],
            ["Sep", 161]
        ];
        var d2_3 = [
            ["Jan", 102],
            ["Feb", 91],
            ["Mar", 106],
            ["Apr", 89],
            ["May", 90],
            ["Jun", 94],
            ["Jul", 86],
            ["Aug", 105],
            ["Sep", 88]
        ];
        $.plot("#line-chart-spline", [{
            data: d2_1,
            label: "Chrome",
            color: "#ffce54"
        }, {
            data: d2_2,
            label: "Firefox",
            color: "#3DB9D3"
        }, {
            data: d2_3,
            label: "Safari",
            color: "#df4782"
        }], {
            series: {
                lines: {
                    show: !1
                },
                splines: {
                    show: !0,
                    tension: 0.4,
                    lineWidth: 2,
                    fill: 0
                },
                points: {
                    show: !0,
                    radius: 4
                }
            },
            grid: {
                borderColor: "#fafafa",
                borderWidth: 1,
                hoverable: !0
            },
            tooltip: !0,
            tooltipOpts: {
                content: "%x : %y",
                defaultTheme: false
            },
            xaxis: {
                tickColor: "#fafafa",
                mode: "categories"
            },
            yaxis: {
                tickColor: "#fafafa"
            },
            shadowSize: 0
        });
        //END LINE CHART SPLINE

        //BEGIN BAR CHART
        var d3 = [
            ["Jan", 93],
            ["Feb", 78],
            ["Mar", 47],
            ["Apr", 35],
            ["May", 48],
            ["Jun", 26],
            ["Jul", 49],
            ["Aug", 96],
            ["Sep", 54],
            ["Oct", 99],
            ["Nov", 92],
            ["Dec", 43]
        ];
        $.plot("#bar-chart", [{
            data: d3,
            label: "Revenue",
            color: "#01b6ad"
        }], {
            series: {
                bars: {
                    align: "center",
                    lineWidth: 0,
                    show: !0,
                    barWidth: 0.6,
                    fill: 0.9
                }
            },
            grid: {
                borderColor: "#fafafa",
                borderWidth: 1,
                hoverable: !0
            },
            tooltip: !0,
            tooltipOpts: {
                content: "%x : %y",
                defaultTheme: false
            },
            xaxis: {
                tickColor: "#fafafa",
                mode: "categories"
            },
            yaxis: {
                tickColor: "#fafafa"
            },
            shadowSize: 0
        });
        //END BAR CHART

        //BEGIN BAR CHART STACK
        var d4_1 = [
            ["Jan", 126],
            ["Feb", 73],
            ["Mar", 94],
            ["Apr", 54],
            ["May", 92],
            ["Jun", 141],
            ["Jul", 29],
            ["Aug", 44],
            ["Sep", 30],
            ["Oct", 40],
            ["Nov", 67],
            ["Dec", 92]
        ];
        var d4_2 = [
            ["Jan", 58],
            ["Feb", 61],
            ["Mar", 46],
            ["Apr", 35],
            ["May", 55],
            ["Jun", 46],
            ["Jul", 57],
            ["Aug", 80],
            ["Sep", 100],
            ["Oct", 91],
            ["Nov", 35],
            ["Dec", 57]
        ];
        $.plot("#bar-chart-stack", [{
            data: d4_1,
            label: "New Visitor",
            color: "#3DB9D3"
        }, {
            data: d4_2,
            label: "Returning Visitor",
            color: "#ffce54"
        }], {
            series: {
                stack: !0,
                bars: {
                    align: "center",
                    lineWidth: 0,
                    show: !0,
                    barWidth: 0.6,
                    fill: 0.9
                }
            },
            grid: {
                borderColor: "#fafafa",
                borderWidth: 1,
                hoverable: !0
            },
            tooltip: !0,
            tooltipOpts: {
                content: "%x : %y",
                defaultTheme: false
            },
            xaxis: {
                tickColor: "#fafafa",
                mode: "categories"
            },
            yaxis: {
                tickColor: "#fafafa"
            },
            shadowSize: 0
        });
        //END BAR CHART STACK

        //BEGIN AREA CHART
        var d5_1 = [
            ["Jan", 35],
            ["Feb", 60],
            ["Mar", 85],
            ["Apr", 46],
            ["May", 99],
            ["Jun", 82],
            ["Jul", 96]
        ];
        var d5_2 = [
            ["Jan", 47],
            ["Feb", 74],
            ["Mar", 36],
            ["Apr", 83],
            ["May", 39],
            ["Jun", 10],
            ["Jul", 51]
        ];
        $.plot("#area-chart", [{
            data: d5_1,
            label: "New Visitor",
            color: "#ffce54"
        }, {
            data: d5_2,
            label: "Returning Visitor",
            color: "#87318c"
        }], {
            series: {
                lines: {
                    show: !0,
                    fill: 0.8
                },
                points: {
                    show: !0,
                    radius: 4
                }
            },
            grid: {
                borderColor: "#fafafa",
                borderWidth: 1,
                hoverable: !0
            },
            tooltip: !0,
            tooltipOpts: {
                content: "%x : %y",
                defaultTheme: false
            },
            xaxis: {
                tickColor: "#fafafa",
                mode: "categories"
            },
            yaxis: {
                tickColor: "#fafafa"
            },
            shadowSize: 0
        });
        //END AREA CHART

        //BEGIN AREA CHART SPLINE
        var d6_1 = [
            ["Jan", 67],
            ["Feb", 91],
            ["Mar", 36],
            ["Apr", 150],
            ["May", 28],
            ["Jun", 123],
            ["Jul", 38]
        ];
        var d6_2 = [
            ["Jan", 59],
            ["Feb", 49],
            ["Mar", 45],
            ["Apr", 94],
            ["May", 76],
            ["Jun", 22],
            ["Jul", 31]
        ];
        $.plot("#area-chart-spline", [{
            data: d6_1,
            label: "New Visitor",
            color: "#a01518"
        }, {
            data: d6_2,
            label: "Returning Visitor",
            color: "#01b6ad"
        }], {
            series: {
                lines: {
                    show: !1
                },
                splines: {
                    show: !0,
                    tension: 0.4,
                    lineWidth: 2,
                    fill: 0.8
                },
                points: {
                    show: !0,
                    radius: 4
                }
            },
            grid: {
                borderColor: "#fafafa",
                borderWidth: 1,
                hoverable: !0
            },
            tooltip: !0,
            tooltipOpts: {
                content: "%x : %y",
                defaultTheme: false
            },
            xaxis: {
                tickColor: "#fafafa",
                mode: "categories"
            },
            yaxis: {
                tickColor: "#fafafa"
            },
            shadowSize: 0
        });
        //END AREA CHART SPLINE

        //BEGIN PIE CHART
        var d7_1 = [40];
        var d7_2 = [20];
        var d7_3 = [40];
        $.plot('#pie-chart', [{
            data: d7_1,
            label: "Search Engines",
            color: "#3DB9D3"
        }, {
            data: d7_2,
            label: "Referrals",
            color: "#ffce54"
        }, {
            data: d7_3,
            label: "Direct",
            color: "#fc6e51"
        }], {
            series: {
                pie: {
                    show: true,
                    radius: 1,
                    label: {
                        show: true,
                        radius: 3 / 4,
                        background: {
                            opacity: 0.5,
                            color: '#000'
                        }
                    }
                }
            }
        });
        //END PIE CHART

        //BEGIN PERCENTILES CHART
        var males = {
            "15%": [
                [2, 88.0],
                [3, 93.3],
                [4, 102.0],
                [5, 108.5],
                [6, 115.7],
                [7, 115.6],
                [8, 124.6],
                [9, 130.3],
                [10, 134.3],
                [11, 141.4],
                [12, 146.5],
                [13, 151.7],
                [14, 159.9],
                [15, 165.4],
                [16, 167.8],
                [17, 168.7],
                [18, 169.5],
                [19, 168.0]
            ],
            "90%": [
                [2, 96.8],
                [3, 105.2],
                [4, 113.9],
                [5, 120.8],
                [6, 127.0],
                [7, 133.1],
                [8, 139.1],
                [9, 143.9],
                [10, 151.3],
                [11, 161.1],
                [12, 164.8],
                [13, 173.5],
                [14, 179.0],
                [15, 182.0],
                [16, 186.9],
                [17, 185.2],
                [18, 186.3],
                [19, 186.6]
            ],
            "25%": [
                [2, 89.2],
                [3, 94.9],
                [4, 104.4],
                [5, 111.4],
                [6, 117.5],
                [7, 120.2],
                [8, 127.1],
                [9, 132.9],
                [10, 136.8],
                [11, 144.4],
                [12, 149.5],
                [13, 154.1],
                [14, 163.1],
                [15, 169.2],
                [16, 170.4],
                [17, 171.2],
                [18, 172.4],
                [19, 170.8]
            ],
            "10%": [
                [2, 86.9],
                [3, 92.6],
                [4, 99.9],
                [5, 107.0],
                [6, 114.0],
                [7, 113.5],
                [8, 123.6],
                [9, 129.2],
                [10, 133.0],
                [11, 140.6],
                [12, 145.2],
                [13, 149.7],
                [14, 158.4],
                [15, 163.5],
                [16, 166.9],
                [17, 167.5],
                [18, 167.1],
                [19, 165.3]
            ],
            "mean": [
                [2, 91.9],
                [3, 98.5],
                [4, 107.1],
                [5, 114.4],
                [6, 120.6],
                [7, 124.7],
                [8, 131.1],
                [9, 136.8],
                [10, 142.3],
                [11, 150.0],
                [12, 154.7],
                [13, 161.9],
                [14, 168.7],
                [15, 173.6],
                [16, 175.9],
                [17, 176.6],
                [18, 176.8],
                [19, 176.7]
            ],
            "75%": [
                [2, 94.5],
                [3, 102.1],
                [4, 110.8],
                [5, 117.9],
                [6, 124.0],
                [7, 129.3],
                [8, 134.6],
                [9, 141.4],
                [10, 147.0],
                [11, 156.1],
                [12, 160.3],
                [13, 168.3],
                [14, 174.7],
                [15, 178.0],
                [16, 180.2],
                [17, 181.7],
                [18, 181.3],
                [19, 182.5]
            ],
            "85%": [
                [2, 96.2],
                [3, 103.8],
                [4, 111.8],
                [5, 119.6],
                [6, 125.6],
                [7, 131.5],
                [8, 138.0],
                [9, 143.3],
                [10, 149.3],
                [11, 159.8],
                [12, 162.5],
                [13, 171.3],
                [14, 177.5],
                [15, 180.2],
                [16, 183.8],
                [17, 183.4],
                [18, 183.5],
                [19, 185.5]
            ],
            "50%": [
                [2, 91.9],
                [3, 98.2],
                [4, 106.8],
                [5, 114.6],
                [6, 120.8],
                [7, 125.2],
                [8, 130.3],
                [9, 137.1],
                [10, 141.5],
                [11, 149.4],
                [12, 153.9],
                [13, 162.2],
                [14, 169.0],
                [15, 174.8],
                [16, 176.0],
                [17, 176.8],
                [18, 176.4],
                [19, 177.4]
            ]
        };

        var females = {
            "15%": [
                [2, 84.8],
                [3, 93.7],
                [4, 100.6],
                [5, 105.8],
                [6, 113.3],
                [7, 119.3],
                [8, 124.3],
                [9, 131.4],
                [10, 136.9],
                [11, 143.8],
                [12, 149.4],
                [13, 151.2],
                [14, 152.3],
                [15, 155.9],
                [16, 154.7],
                [17, 157.0],
                [18, 156.1],
                [19, 155.4]
            ],
            "90%": [
                [2, 95.6],
                [3, 104.1],
                [4, 111.9],
                [5, 119.6],
                [6, 127.6],
                [7, 133.1],
                [8, 138.7],
                [9, 147.1],
                [10, 152.8],
                [11, 161.3],
                [12, 166.6],
                [13, 167.9],
                [14, 169.3],
                [15, 170.1],
                [16, 172.4],
                [17, 169.2],
                [18, 171.1],
                [19, 172.4]
            ],
            "25%": [
                [2, 87.2],
                [3, 95.9],
                [4, 101.9],
                [5, 107.4],
                [6, 114.8],
                [7, 121.4],
                [8, 126.8],
                [9, 133.4],
                [10, 138.6],
                [11, 146.2],
                [12, 152.0],
                [13, 153.8],
                [14, 155.7],
                [15, 158.4],
                [16, 157.0],
                [17, 158.5],
                [18, 158.4],
                [19, 158.1]
            ],
            "10%": [
                [2, 84.0],
                [3, 91.9],
                [4, 99.2],
                [5, 105.2],
                [6, 112.7],
                [7, 118.0],
                [8, 123.3],
                [9, 130.2],
                [10, 135.0],
                [11, 141.1],
                [12, 148.3],
                [13, 150.0],
                [14, 150.7],
                [15, 154.3],
                [16, 153.6],
                [17, 155.6],
                [18, 154.7],
                [19, 153.1]
            ],
            "mean": [
                [2, 90.2],
                [3, 98.3],
                [4, 105.2],
                [5, 112.2],
                [6, 119.0],
                [7, 125.8],
                [8, 131.3],
                [9, 138.6],
                [10, 144.2],
                [11, 151.3],
                [12, 156.7],
                [13, 158.6],
                [14, 160.5],
                [15, 162.1],
                [16, 162.9],
                [17, 162.2],
                [18, 163.0],
                [19, 163.1]
            ],
            "75%": [
                [2, 93.2],
                [3, 101.5],
                [4, 107.9],
                [5, 116.6],
                [6, 122.8],
                [7, 129.3],
                [8, 135.2],
                [9, 143.7],
                [10, 148.7],
                [11, 156.9],
                [12, 160.8],
                [13, 163.0],
                [14, 165.0],
                [15, 165.8],
                [16, 168.7],
                [17, 166.2],
                [18, 167.6],
                [19, 168.0]
            ],
            "85%": [
                [2, 94.5],
                [3, 102.8],
                [4, 110.4],
                [5, 119.0],
                [6, 125.7],
                [7, 131.5],
                [8, 137.9],
                [9, 146.0],
                [10, 151.3],
                [11, 159.9],
                [12, 164.0],
                [13, 166.5],
                [14, 167.5],
                [15, 168.5],
                [16, 171.5],
                [17, 168.0],
                [18, 169.8],
                [19, 170.3]
            ],
            "50%": [
                [2, 90.2],
                [3, 98.1],
                [4, 105.2],
                [5, 111.7],
                [6, 118.2],
                [7, 125.6],
                [8, 130.5],
                [9, 138.3],
                [10, 143.7],
                [11, 151.4],
                [12, 156.7],
                [13, 157.7],
                [14, 161.0],
                [15, 162.0],
                [16, 162.8],
                [17, 162.2],
                [18, 162.8],
                [19, 163.3]
            ]
        };

        var data = [{
                label: "Female mean",
                data: females.mean,
                lines: {
                    show: true
                },
                color: "#87318c"
            }, {
                id: "f15%",
                data: females["15%"],
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: false
                },
                color: "#87318c"
            }, {
                id: "f25%",
                data: females["25%"],
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: 0.2
                },
                color: "#87318c",
                fillBetween: "f15%"
            }, {
                id: "f50%",
                data: females["50%"],
                lines: {
                    show: true,
                    lineWidth: 0.5,
                    fill: 0.4,
                    shadowSize: 0
                },
                color: "#87318c",
                fillBetween: "f25%"
            }, {
                id: "f75%",
                data: females["75%"],
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: 0.4
                },
                color: "#87318c",
                fillBetween: "f50%"
            }, {
                id: "f85%",
                data: females["85%"],
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: 0.2
                },
                color: "#87318c",
                fillBetween: "f75%"
            },

            {
                label: "Male mean",
                data: males.mean,
                lines: {
                    show: true
                },
                color: "#01b6ad"
            }, {
                id: "m15%",
                data: males["15%"],
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: false
                },
                color: "#01b6ad"
            }, {
                id: "m25%",
                data: males["25%"],
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: 0.2
                },
                color: "#01b6ad",
                fillBetween: "m15%"
            }, {
                id: "m50%",
                data: males["50%"],
                lines: {
                    show: true,
                    lineWidth: 0.5,
                    fill: 0.4,
                    shadowSize: 0
                },
                color: "#01b6ad",
                fillBetween: "m25%"
            }, {
                id: "m75%",
                data: males["75%"],
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: 0.4
                },
                color: "#01b6ad",
                fillBetween: "m50%"
            }, {
                id: "m85%",
                data: males["85%"],
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: 0.2
                },
                color: "#01b6ad",
                fillBetween: "m75%"
            }
        ];

        $.plot($("#percentiles-chart"), data, {
            grid: {
                borderColor: "#fafafa",
                borderWidth: 1,
                hoverable: !0
            },
            xaxis: {
                tickDecimals: 0
            },
            yaxis: {
                tickFormatter: function(v) {
                    return v + " cm";
                }
            },
            legend: {
                position: "se"
            }
        });
    }, 50);

    //BEGIN PORTLET
    $(".portlet").each(function(index, element) {
        var me = $(this);
        $(">.portlet-header>.tools>i", me).click(function(e) {
            if ($(this).hasClass('fa-chevron-up')) {
                $(">.portlet-body", me).slideUp('fast');
                $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            } else if ($(this).hasClass('fa-chevron-down')) {
                $(">.portlet-body", me).slideDown('fast');
                $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else if ($(this).hasClass('fa-cog')) {
                //Show modal
            } else if ($(this).hasClass('fa-refresh')) {
                $(">.portlet-body", me).addClass('wait');

                setTimeout(function() {
                    $(">.portlet-body", me).removeClass('wait');
                }, 1000);
            } else if ($(this).hasClass('fa-times')) {
                me.remove();
            }
        });
    });
    //END PORTLET
});
App.controller('ChartsHighchartAreaController', function($scope, $routeParams) {
    setTimeout(function() {
        $('#basic-area').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'US and USSR nuclear stockpiles'
            },
            subtitle: {
                text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
                    'thebulletin.metapress.com</a>'
            },
            xAxis: {
                labels: {
                    formatter: function() {
                        return this.value; // clean, unformatted number for year
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Nuclear weapon states'
                },
                labels: {
                    formatter: function() {
                        return this.value / 1000 + 'k';
                    }
                }
            },
            tooltip: {
                pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
            },
            plotOptions: {
                area: {
                    pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'USA',
                data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                    1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                    27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                    26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                    24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                    22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                    10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104
                ]
            }, {
                name: 'USSR/Russia',
                data: [null, null, null, null, null, null, null, null, null, null,
                    5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                    4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                    15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                    33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                    35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                    21000, 20000, 19000, 18000, 18000, 17000, 16000
                ]
            }]
        });

        /* Area with negative values */
        $('#area-with-negative-values').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Area chart with negative values'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Jane',
                data: [2, -2, -3, 2, 1]
            }, {
                name: 'Joe',
                data: [3, 4, 4, -2, 5]
            }]
        });

        /* Stacked area */
        $('#stacked-area').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Historic and Estimated Worldwide Population Growth by Region'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            xAxis: {
                categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'Billions'
                },
                labels: {
                    formatter: function() {
                        return this.value / 1000;
                    }
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' millions'
            },
            plotOptions: {
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },
            series: [{
                name: 'Asia',
                data: [502, 635, 809, 947, 1402, 3634, 5268]
            }, {
                name: 'Africa',
                data: [106, 107, 111, 133, 221, 767, 1766]
            }, {
                name: 'Europe',
                data: [163, 203, 276, 408, 547, 729, 628]
            }, {
                name: 'America',
                data: [18, 31, 54, 156, 339, 818, 1201]
            }, {
                name: 'Oceania',
                data: [2, 2, 2, 6, 13, 30, 46]
            }]
        });

        /* Percentage area */
        $('#percentage-area').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Historic and Estimated Worldwide Population Distribution by Region'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            xAxis: {
                categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'Percent'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
                shared: true
            },
            plotOptions: {
                area: {
                    stacking: 'percent',
                    lineColor: '#ffffff',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#ffffff'
                    }
                }
            },
            series: [{
                name: 'Asia',
                data: [502, 635, 809, 947, 1402, 3634, 5268]
            }, {
                name: 'Africa',
                data: [106, 107, 111, 133, 221, 767, 1766]
            }, {
                name: 'Europe',
                data: [163, 203, 276, 408, 547, 729, 628]
            }, {
                name: 'America',
                data: [18, 31, 54, 156, 339, 818, 1201]
            }, {
                name: 'Oceania',
                data: [2, 2, 2, 6, 13, 30, 46]
            }]
        });

        /* Area with missing points */
        $('#area-with-missing-points').highcharts({
            chart: {
                type: 'area',
                spacingBottom: 30
            },
            title: {
                text: 'Fruit consumption *'
            },
            subtitle: {
                text: '* Jane\'s banana consumption is unknown',
                floating: true,
                align: 'right',
                verticalAlign: 'bottom',
                y: 15
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF'
            },
            xAxis: {
                categories: ['Apples', 'Pears', 'Oranges', 'Bananas', 'Grapes', 'Plums', 'Strawberries', 'Raspberries']
            },
            yAxis: {
                title: {
                    text: 'Y-Axis'
                },
                labels: {
                    formatter: function() {
                        return this.value;
                    }
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>' + this.series.name + '</b><br/>' +
                        this.x + ': ' + this.y;
                }
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.5
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'John',
                data: [0, 1, 4, 4, 5, 2, 3, 7]
            }, {
                name: 'Jane',
                data: [1, 0, 3, null, 3, 1, 2, 1]
            }]
        });

        /* Inverted axes */
        $('#inverted-axes').highcharts({
            chart: {
                type: 'area',
                inverted: true
            },
            title: {
                text: 'Average fruit consumption during one week'
            },
            subtitle: {
                style: {
                    position: 'absolute',
                    right: '0px',
                    bottom: '10px'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF'
            },
            xAxis: {
                categories: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday'
                ]
            },
            yAxis: {
                title: {
                    text: 'Number of units'
                },
                labels: {
                    formatter: function() {
                        return this.value;
                    }
                },
                min: 0
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                name: 'John',
                data: [3, 4, 3, 5, 4, 10, 12]
            }, {
                name: 'Jane',
                data: [1, 3, 4, 3, 3, 5, 4]
            }]
        });

        /*  Area-spline */
        $('#area-spline').highcharts({
            chart: {
                type: 'areaspline'
            },
            title: {
                text: 'Average fruit consumption during one week'
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF'
            },
            xAxis: {
                categories: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday'
                ],
                plotBands: [{ // visualize the weekend
                    from: 4.5,
                    to: 6.5,
                    color: 'rgba(68, 170, 213, .2)'
                }]
            },
            yAxis: {
                title: {
                    text: 'Fruit units'
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' units'
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillOpacity: 0.5
                }
            },
            series: [{
                name: 'John',
                data: [3, 4, 3, 5, 4, 10, 12]
            }, {
                name: 'Jane',
                data: [1, 3, 4, 3, 3, 5, 4]
            }]
        });

        /* Area range */
        $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=range.json&callback=?', function(data) {

            $('#area-range').highcharts({

                chart: {
                    type: 'arearange',
                    zoomType: 'x'
                },

                title: {
                    text: 'Temperature variation by day'
                },

                xAxis: {
                    type: 'datetime'
                },

                yAxis: {
                    title: {
                        text: null
                    }
                },

                tooltip: {
                    crosshairs: true,
                    shared: true,
                    valueSuffix: '°C'
                },

                legend: {
                    enabled: false
                },

                series: [{
                    name: 'Temperatures',
                    data: data
                }]

            });
        });

        /* Area range and line */
        var ranges = [
                [1246406400000, 14.3, 27.7],
                [1246492800000, 14.5, 27.8],
                [1246579200000, 15.5, 29.6],
                [1246665600000, 16.7, 30.7],
                [1246752000000, 16.5, 25.0],
                [1246838400000, 17.8, 25.7],
                [1246924800000, 13.5, 24.8],
                [1247011200000, 10.5, 21.4],
                [1247097600000, 9.2, 23.8],
                [1247184000000, 11.6, 21.8],
                [1247270400000, 10.7, 23.7],
                [1247356800000, 11.0, 23.3],
                [1247443200000, 11.6, 23.7],
                [1247529600000, 11.8, 20.7],
                [1247616000000, 12.6, 22.4],
                [1247702400000, 13.6, 19.6],
                [1247788800000, 11.4, 22.6],
                [1247875200000, 13.2, 25.0],
                [1247961600000, 14.2, 21.6],
                [1248048000000, 13.1, 17.1],
                [1248134400000, 12.2, 15.5],
                [1248220800000, 12.0, 20.8],
                [1248307200000, 12.0, 17.1],
                [1248393600000, 12.7, 18.3],
                [1248480000000, 12.4, 19.4],
                [1248566400000, 12.6, 19.9],
                [1248652800000, 11.9, 20.2],
                [1248739200000, 11.0, 19.3],
                [1248825600000, 10.8, 17.8],
                [1248912000000, 11.8, 18.5],
                [1248998400000, 10.8, 16.1]
            ],
            averages = [
                [1246406400000, 21.5],
                [1246492800000, 22.1],
                [1246579200000, 23],
                [1246665600000, 23.8],
                [1246752000000, 21.4],
                [1246838400000, 21.3],
                [1246924800000, 18.3],
                [1247011200000, 15.4],
                [1247097600000, 16.4],
                [1247184000000, 17.7],
                [1247270400000, 17.5],
                [1247356800000, 17.6],
                [1247443200000, 17.7],
                [1247529600000, 16.8],
                [1247616000000, 17.7],
                [1247702400000, 16.3],
                [1247788800000, 17.8],
                [1247875200000, 18.1],
                [1247961600000, 17.2],
                [1248048000000, 14.4],
                [1248134400000, 13.7],
                [1248220800000, 15.7],
                [1248307200000, 14.6],
                [1248393600000, 15.3],
                [1248480000000, 15.3],
                [1248566400000, 15.8],
                [1248652800000, 15.2],
                [1248739200000, 14.8],
                [1248825600000, 14.4],
                [1248912000000, 15],
                [1248998400000, 13.6]
            ];


        $('#area-range-and-line').highcharts({

            title: {
                text: 'July temperatures'
            },

            xAxis: {
                type: 'datetime'
            },

            yAxis: {
                title: {
                    text: null
                }
            },

            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: '°C'
            },

            legend: {},

            series: [{
                name: 'Temperature',
                data: averages,
                zIndex: 1,
                marker: {
                    fillColor: 'white',
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[0]
                }
            }, {
                name: 'Range',
                data: ranges,
                type: 'arearange',
                lineWidth: 0,
                linkedTo: ':previous',
                color: Highcharts.getOptions().colors[0],
                fillOpacity: 0.3,
                zIndex: 0
            }]
        });
    }, 50);

    //BEGIN PORTLET
    $(".portlet").each(function(index, element) {
        var me = $(this);
        $(">.portlet-header>.tools>i", me).click(function(e) {
            if ($(this).hasClass('fa-chevron-up')) {
                $(">.portlet-body", me).slideUp('fast');
                $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            } else if ($(this).hasClass('fa-chevron-down')) {
                $(">.portlet-body", me).slideDown('fast');
                $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else if ($(this).hasClass('fa-cog')) {
                //Show modal
            } else if ($(this).hasClass('fa-refresh')) {
                //$(">.portlet-body", me).hide();
                $(">.portlet-body", me).addClass('wait');

                setTimeout(function() {
                    //$(">.portlet-body>div", me).show();
                    $(">.portlet-body", me).removeClass('wait');
                }, 1000);
            } else if ($(this).hasClass('fa-times')) {
                me.remove();
            }
        });
    });
    //END PORTLET
});
App.controller('ChartsHighchartColumnBarController', function($scope, $routeParams) {
    setTimeout(function() {
        $('#basic-bar').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Historic World Population by Region'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            xAxis: {
                categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Year 1800',
                data: [107, 31, 635, 203, 2]
            }, {
                name: 'Year 1900',
                data: [133, 156, 947, 408, 6]
            }, {
                name: 'Year 2008',
                data: [973, 914, 4054, 732, 34]
            }]
        });

        /* Stacked bar */
        $('#stacked-bar').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Stacked bar chart'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total fruit consumption'
                }
            },
            legend: {
                backgroundColor: '#FFFFFF',
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Jane',
                data: [2, 2, 3, 2, 1]
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5]
            }]
        });

        /* Bar with negative stack */
        var chart,
            categories = ['0-4', '5-9', '10-14', '15-19',
                '20-24', '25-29', '30-34', '35-39', '40-44',
                '45-49', '50-54', '55-59', '60-64', '65-69',
                '70-74', '75-79', '80-84', '85-89', '90-94',
                '95-99', '100 +'
            ];
        $(document).ready(function() {
            $('#bar-with-negative-stack').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Population pyramid for Germany, midyear 2010'
                },
                subtitle: {
                    text: 'Source: www.census.gov'
                },
                xAxis: [{
                    categories: categories,
                    reversed: false,
                    labels: {
                        step: 1
                    }
                }, { // mirror axis on right side
                    opposite: true,
                    reversed: false,
                    categories: categories,
                    linkedTo: 0,
                    labels: {
                        step: 1
                    }
                }],
                yAxis: {
                    title: {
                        text: null
                    },
                    labels: {
                        formatter: function() {
                            return (Math.abs(this.value) / 1000000) + 'M';
                        }
                    },
                    min: -4000000,
                    max: 4000000
                },

                plotOptions: {
                    series: {
                        stacking: 'normal'
                    }
                },

                tooltip: {
                    formatter: function() {
                        return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                            'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                    }
                },

                series: [{
                    name: 'Male',
                    data: [-1746181, -1884428, -2089758, -2222362, -2537431, -2507081, -2443179, -2664537, -3556505, -3680231, -3143062, -2721122, -2229181, -2227768, -2176300, -1329968, -836804, -354784, -90569, -28367, -3878]
                }, {
                    name: 'Female',
                    data: [1656154, 1787564, 1981671, 2108575, 2403438, 2366003, 2301402, 2519874,
                        3360596, 3493473, 3050775, 2759560, 2304444, 2426504, 2568938, 1785638,
                        1447162, 1005011, 330870, 130632, 21208
                    ]
                }]
            });
        });

        /* Basic column */
        $('#basic-column').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Monthly Average Rainfall'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Rainfall (mm)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Tokyo',
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

            }, {
                name: 'New York',
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

            }, {
                name: 'London',
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

            }, {
                name: 'Berlin',
                data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

            }]
        });

        /* Column with negative values */
        $('#column-with-negative-values').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Column chart with negative values'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Jane',
                data: [2, -2, -3, 2, 1]
            }, {
                name: 'Joe',
                data: [3, 4, 4, -2, 5]
            }]
        });

        /*  Stacked column */
        $('#stacked-column').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Stacked column chart'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total fruit consumption'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -70,
                verticalAlign: 'top',
                y: 20,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Jane',
                data: [2, 2, 3, 2, 1]
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5]
            }]
        });

        /* Stacked and grouped column */
        $('#stacked-and-grouped-column').highcharts({

            chart: {
                type: 'column'
            },

            title: {
                text: 'Total fruit consumtion, grouped by gender'
            },

            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },

            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of fruits'
                }
            },

            tooltip: {
                formatter: function() {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },

            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },

            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2],
                stack: 'male'
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5],
                stack: 'male'
            }, {
                name: 'Jane',
                data: [2, 5, 6, 2, 1],
                stack: 'female'
            }, {
                name: 'Janet',
                data: [3, 0, 4, 4, 3],
                stack: 'female'
            }]
        });

        /* Stacked percentage column */
        $('#stacked-percentage-column').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Stacked column chart'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total fruit consumption'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true
            },
            plotOptions: {
                column: {
                    stacking: 'percent'
                }
            },
            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Jane',
                data: [2, 2, 3, 2, 1]
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5]
            }]
        });

        /* Column with rotated labels */
        $('#column-with-rotated-labels').highcharts({
            chart: {
                type: 'column',
                margin: [50, 50, 100, 80]
            },
            title: {
                text: 'World\'s largest cities per 2008'
            },
            xAxis: {
                categories: [
                    'Tokyo',
                    'Jakarta',
                    'New York',
                    'Seoul',
                    'Manila',
                    'Mumbai',
                    'Sao Paulo',
                    'Mexico City',
                    'Dehli',
                    'Osaka',
                    'Cairo',
                    'Kolkata',
                    'Los Angeles',
                    'Shanghai',
                    'Moscow',
                    'Beijing',
                    'Buenos Aires',
                    'Guangzhou',
                    'Shenzhen',
                    'Istanbul'
                ],
                labels: {
                    rotation: -45,
                    align: 'right',
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
            },
            series: [{
                name: 'Population',
                data: [34.4, 21.8, 20.1, 20, 19.6, 19.5, 19.1, 18.4, 18,
                    17.3, 16.8, 15, 14.7, 14.5, 13.3, 12.8, 12.4, 11.8,
                    11.7, 11.2
                ],
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    x: 4,
                    y: 10,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif',
                        textShadow: '0 0 3px black'
                    }
                }
            }]
        });

        /* Data defined in a HTML table */
        $('#data-defined-in-a-HTML-table').highcharts({
            data: {
                table: document.getElementById('datatable')
            },
            chart: {
                type: 'column'
            },
            title: {
                text: 'Data extracted from a HTML table in the page'
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Units'
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>' + this.series.name + '</b><br/>' +
                        this.y + ' ' + this.x.toLowerCase();
                }
            }
        });

        /* Column range */
        $('#column-range').highcharts({

            chart: {
                type: 'columnrange',
                inverted: true
            },

            title: {
                text: 'Temperature variation by month'
            },

            subtitle: {
                text: 'Observed in Vik i Sogn, Norway, 2009'
            },

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },

            yAxis: {
                title: {
                    text: 'Temperature ( °C )'
                }
            },

            tooltip: {
                valueSuffix: '°C'
            },

            plotOptions: {
                columnrange: {
                    dataLabels: {
                        enabled: true,
                        formatter: function() {
                            return this.y + '°C';
                        }
                    }
                }
            },

            legend: {
                enabled: false
            },

            series: [{
                name: 'Temperatures',
                data: [
                    [-9.7, 9.4],
                    [-8.7, 6.5],
                    [-3.5, 9.4],
                    [-1.4, 19.9],
                    [0.0, 22.6],
                    [2.9, 29.5],
                    [9.2, 30.7],
                    [7.3, 26.5],
                    [4.4, 18.0],
                    [-3.1, 11.4],
                    [-5.2, 10.4],
                    [-13.5, 9.8]
                ]
            }]
        });
    }, 50);

    //BEGIN PORTLET
    $(".portlet").each(function(index, element) {
        var me = $(this);
        $(">.portlet-header>.tools>i", me).click(function(e) {
            if ($(this).hasClass('fa-chevron-up')) {
                $(">.portlet-body", me).slideUp('fast');
                $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            } else if ($(this).hasClass('fa-chevron-down')) {
                $(">.portlet-body", me).slideDown('fast');
                $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else if ($(this).hasClass('fa-cog')) {
                //Show modal
            } else if ($(this).hasClass('fa-refresh')) {
                //$(">.portlet-body", me).hide();
                $(">.portlet-body", me).addClass('wait');

                setTimeout(function() {
                    //$(">.portlet-body>div", me).show();
                    $(">.portlet-body", me).removeClass('wait');
                }, 1000);
            } else if ($(this).hasClass('fa-times')) {
                me.remove();
            }
        });
    });
    //END PORTLET
});

App.controller('ChartsHighchartCombinationController', function($scope, $routeParams) {
    setTimeout(function() {
        $('#column-line-and-pie').highcharts({
            chart: {},
            title: {
                text: 'Combination chart'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
            },
            tooltip: {
                formatter: function() {
                    var s;
                    if (this.point.name) { // the pie chart
                        s = '' +
                            this.point.name + ': ' + this.y + ' fruits';
                    } else {
                        s = '' +
                            this.x + ': ' + this.y;
                    }
                    return s;
                }
            },
            labels: {
                items: [{
                    html: 'Total fruit consumption',
                    style: {
                        left: '40px',
                        top: '8px',
                        color: 'black'
                    }
                }]
            },
            series: [{
                type: 'column',
                name: 'Jane',
                data: [3, 2, 1, 3, 4]
            }, {
                type: 'column',
                name: 'John',
                data: [2, 3, 5, 7, 6]
            }, {
                type: 'column',
                name: 'Joe',
                data: [4, 3, 3, 9, 0]
            }, {
                type: 'spline',
                name: 'Average',
                data: [3, 2.67, 3, 6.33, 3.33],
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            }, {
                type: 'pie',
                name: 'Total consumption',
                data: [{
                    name: 'Jane',
                    y: 13,
                    color: Highcharts.getOptions().colors[0] // Jane's color
                }, {
                    name: 'John',
                    y: 23,
                    color: Highcharts.getOptions().colors[1] // John's color
                }, {
                    name: 'Joe',
                    y: 19,
                    color: Highcharts.getOptions().colors[2] // Joe's color
                }],
                center: [100, 80],
                size: 100,
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }]
        });

        /* Dual axes, line and column */
        $('#dual-axes-line-and-column').highcharts({
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Average Monthly Temperature and Rainfall in Tokyo'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                ]
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}°C',
                    style: {
                        color: '#89A54E'
                    }
                },
                title: {
                    text: 'Temperature',
                    style: {
                        color: '#89A54E'
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: 'Rainfall',
                    style: {
                        color: '#4572A7'
                    }
                },
                labels: {
                    format: '{value} mm',
                    style: {
                        color: '#4572A7'
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 100,
                floating: true,
                backgroundColor: '#FFFFFF'
            },
            series: [{
                name: 'Rainfall',
                color: '#4572A7',
                type: 'column',
                yAxis: 1,
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                tooltip: {
                    valueSuffix: ' mm'
                }

            }, {
                name: 'Temperature',
                color: '#89A54E',
                type: 'spline',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                tooltip: {
                    valueSuffix: '°C'
                }
            }]
        });

        /* Multiple axes */
        $('#multiple-axes').highcharts({
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Average Monthly Weather Data for Tokyo'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                ]
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    formatter: function() {
                        return this.value + '°C';
                    },
                    style: {
                        color: '#89A54E'
                    }
                },
                title: {
                    text: 'Temperature',
                    style: {
                        color: '#89A54E'
                    }
                },
                opposite: true

            }, { // Secondary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Rainfall',
                    style: {
                        color: '#4572A7'
                    }
                },
                labels: {
                    formatter: function() {
                        return this.value + ' mm';
                    },
                    style: {
                        color: '#4572A7'
                    }
                }

            }, { // Tertiary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Sea-Level Pressure',
                    style: {
                        color: '#AA4643'
                    }
                },
                labels: {
                    formatter: function() {
                        return this.value + ' mb';
                    },
                    style: {
                        color: '#AA4643'
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 80,
                floating: true,
                backgroundColor: '#FFFFFF'
            },
            series: [{
                name: 'Rainfall',
                color: '#4572A7',
                type: 'column',
                yAxis: 1,
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                tooltip: {
                    valueSuffix: ' mm'
                }

            }, {
                name: 'Sea-Level Pressure',
                type: 'spline',
                color: '#AA4643',
                yAxis: 2,
                data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
                marker: {
                    enabled: false
                },
                dashStyle: 'shortdot',
                tooltip: {
                    valueSuffix: ' mb'
                }

            }, {
                name: 'Temperature',
                color: '#89A54E',
                type: 'spline',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                tooltip: {
                    valueSuffix: ' °C'
                }
            }]
        });

        /* Scatter with regression line */
        $('#scatter-with-regression-line').highcharts({
            chart: {},
            xAxis: {
                min: -0.5,
                max: 5.5
            },
            yAxis: {
                min: 0
            },
            title: {
                text: 'Scatter plot with regression line'
            },
            series: [{
                type: 'line',
                name: 'Regression Line',
                data: [
                    [0, 1.11],
                    [5, 4.51]
                ],
                marker: {
                    enabled: false
                },
                states: {
                    hover: {
                        lineWidth: 0
                    }
                },
                enableMouseTracking: false
            }, {
                type: 'scatter',
                name: 'Observations',
                data: [1, 1.5, 2.8, 3.5, 3.9, 4.2],
                marker: {
                    radius: 4
                }
            }]
        });
    }, 50);

    //BEGIN PORTLET
    $(".portlet").each(function(index, element) {
        var me = $(this);
        $(">.portlet-header>.tools>i", me).click(function(e) {
            if ($(this).hasClass('fa-chevron-up')) {
                $(">.portlet-body", me).slideUp('fast');
                $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            } else if ($(this).hasClass('fa-chevron-down')) {
                $(">.portlet-body", me).slideDown('fast');
                $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else if ($(this).hasClass('fa-cog')) {
                //Show modal
            } else if ($(this).hasClass('fa-refresh')) {
                //$(">.portlet-body", me).hide();
                $(">.portlet-body", me).addClass('wait');

                setTimeout(function() {
                    //$(">.portlet-body>div", me).show();
                    $(">.portlet-body", me).removeClass('wait');
                }, 1000);
            } else if ($(this).hasClass('fa-times')) {
                me.remove();
            }
        });
    });
    //END PORTLET
});

App.controller('ChartsHighchartDynamicController', function($scope, $routeParams) {
    setTimeout(function() {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        var chart;
        $('#spline-updating-each-second').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function() {
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function() {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Live random data'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function() {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i++) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                })()
            }]
        });

        /* Click to add a point */
        $('#click-to-add-a-point').highcharts({
            chart: {
                type: 'scatter',
                margin: [70, 50, 60, 80],
                events: {
                    click: function(e) {
                        // find the clicked values and the series
                        var x = e.xAxis[0].value,
                            y = e.yAxis[0].value,
                            series = this.series[0];

                        // Add it
                        series.addPoint([x, y]);

                    }
                }
            },
            title: {
                text: 'User supplied data'
            },
            subtitle: {
                text: 'Click the plot area to add a point. Click a point to remove it.'
            },
            xAxis: {
                minPadding: 0.2,
                maxPadding: 0.2,
                maxZoom: 60
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                minPadding: 0.2,
                maxPadding: 0.2,
                maxZoom: 60,
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            plotOptions: {
                series: {
                    lineWidth: 1,
                    point: {
                        events: {
                            'click': function() {
                                if (this.series.data.length > 1) this.remove();
                            }
                        }
                    }
                }
            },
            series: [{
                data: [
                    [20, 20],
                    [80, 80]
                ]
            }]
        });

        /* Master-detail chart */
        var data = [
            0.8446, 0.8445, 0.8444, 0.8451, 0.8418, 0.8264, 0.8258, 0.8232, 0.8233, 0.8258,
            0.8283, 0.8278, 0.8256, 0.8292, 0.8239, 0.8239, 0.8245, 0.8265, 0.8261, 0.8269,
            0.8273, 0.8244, 0.8244, 0.8172, 0.8139, 0.8146, 0.8164, 0.82, 0.8269, 0.8269,
            0.8269, 0.8258, 0.8247, 0.8286, 0.8289, 0.8316, 0.832, 0.8333, 0.8352, 0.8357,
            0.8355, 0.8354, 0.8403, 0.8403, 0.8406, 0.8403, 0.8396, 0.8418, 0.8409, 0.8384,
            0.8386, 0.8372, 0.839, 0.84, 0.8389, 0.84, 0.8423, 0.8423, 0.8435, 0.8422,
            0.838, 0.8373, 0.8316, 0.8303, 0.8303, 0.8302, 0.8369, 0.84, 0.8385, 0.84,
            0.8401, 0.8402, 0.8381, 0.8351, 0.8314, 0.8273, 0.8213, 0.8207, 0.8207, 0.8215,
            0.8242, 0.8273, 0.8301, 0.8346, 0.8312, 0.8312, 0.8312, 0.8306, 0.8327, 0.8282,
            0.824, 0.8255, 0.8256, 0.8273, 0.8209, 0.8151, 0.8149, 0.8213, 0.8273, 0.8273,
            0.8261, 0.8252, 0.824, 0.8262, 0.8258, 0.8261, 0.826, 0.8199, 0.8153, 0.8097,
            0.8101, 0.8119, 0.8107, 0.8105, 0.8084, 0.8069, 0.8047, 0.8023, 0.7965, 0.7919,
            0.7921, 0.7922, 0.7934, 0.7918, 0.7915, 0.787, 0.7861, 0.7861, 0.7853, 0.7867,
            0.7827, 0.7834, 0.7766, 0.7751, 0.7739, 0.7767, 0.7802, 0.7788, 0.7828, 0.7816,
            0.7829, 0.783, 0.7829, 0.7781, 0.7811, 0.7831, 0.7826, 0.7855, 0.7855, 0.7845,
            0.7798, 0.7777, 0.7822, 0.7785, 0.7744, 0.7743, 0.7726, 0.7766, 0.7806, 0.785,
            0.7907, 0.7912, 0.7913, 0.7931, 0.7952, 0.7951, 0.7928, 0.791, 0.7913, 0.7912,
            0.7941, 0.7953, 0.7921, 0.7919, 0.7968, 0.7999, 0.7999, 0.7974, 0.7942, 0.796,
            0.7969, 0.7862, 0.7821, 0.7821, 0.7821, 0.7811, 0.7833, 0.7849, 0.7819, 0.7809,
            0.7809, 0.7827, 0.7848, 0.785, 0.7873, 0.7894, 0.7907, 0.7909, 0.7947, 0.7987,
            0.799, 0.7927, 0.79, 0.7878, 0.7878, 0.7907, 0.7922, 0.7937, 0.786, 0.787,
            0.7838, 0.7838, 0.7837, 0.7836, 0.7806, 0.7825, 0.7798, 0.777, 0.777, 0.7772,
            0.7793, 0.7788, 0.7785, 0.7832, 0.7865, 0.7865, 0.7853, 0.7847, 0.7809, 0.778,
            0.7799, 0.78, 0.7801, 0.7765, 0.7785, 0.7811, 0.782, 0.7835, 0.7845, 0.7844,
            0.782, 0.7811, 0.7795, 0.7794, 0.7806, 0.7794, 0.7794, 0.7778, 0.7793, 0.7808,
            0.7824, 0.787, 0.7894, 0.7893, 0.7882, 0.7871, 0.7882, 0.7871, 0.7878, 0.79,
            0.7901, 0.7898, 0.7879, 0.7886, 0.7858, 0.7814, 0.7825, 0.7826, 0.7826, 0.786,
            0.7878, 0.7868, 0.7883, 0.7893, 0.7892, 0.7876, 0.785, 0.787, 0.7873, 0.7901,
            0.7936, 0.7939, 0.7938, 0.7956, 0.7975, 0.7978, 0.7972, 0.7995, 0.7995, 0.7994,
            0.7976, 0.7977, 0.796, 0.7922, 0.7928, 0.7929, 0.7948, 0.797, 0.7953, 0.7907,
            0.7872, 0.7852, 0.7852, 0.786, 0.7862, 0.7836, 0.7837, 0.784, 0.7867, 0.7867,
            0.7869, 0.7837, 0.7827, 0.7825, 0.7779, 0.7791, 0.779, 0.7787, 0.78, 0.7807,
            0.7803, 0.7817, 0.7799, 0.7799, 0.7795, 0.7801, 0.7765, 0.7725, 0.7683, 0.7641,
            0.7639, 0.7616, 0.7608, 0.759, 0.7582, 0.7539, 0.75, 0.75, 0.7507, 0.7505,
            0.7516, 0.7522, 0.7531, 0.7577, 0.7577, 0.7582, 0.755, 0.7542, 0.7576, 0.7616,
            0.7648, 0.7648, 0.7641, 0.7614, 0.757, 0.7587, 0.7588, 0.762, 0.762, 0.7617,
            0.7618, 0.7615, 0.7612, 0.7596, 0.758, 0.758, 0.758, 0.7547, 0.7549, 0.7613,
            0.7655, 0.7693, 0.7694, 0.7688, 0.7678, 0.7708, 0.7727, 0.7749, 0.7741, 0.7741,
            0.7732, 0.7727, 0.7737, 0.7724, 0.7712, 0.772, 0.7721, 0.7717, 0.7704, 0.769,
            0.7711, 0.774, 0.7745, 0.7745, 0.774, 0.7716, 0.7713, 0.7678, 0.7688, 0.7718,
            0.7718, 0.7728, 0.7729, 0.7698, 0.7685, 0.7681, 0.769, 0.769, 0.7698, 0.7699,
            0.7651, 0.7613, 0.7616, 0.7614, 0.7614, 0.7607, 0.7602, 0.7611, 0.7622, 0.7615,
            0.7598, 0.7598, 0.7592, 0.7573, 0.7566, 0.7567, 0.7591, 0.7582, 0.7585, 0.7613,
            0.7631, 0.7615, 0.76, 0.7613, 0.7627, 0.7627, 0.7608, 0.7583, 0.7575, 0.7562,
            0.752, 0.7512, 0.7512, 0.7517, 0.752, 0.7511, 0.748, 0.7509, 0.7531, 0.7531,
            0.7527, 0.7498, 0.7493, 0.7504, 0.75, 0.7491, 0.7491, 0.7485, 0.7484, 0.7492,
            0.7471, 0.7459, 0.7477, 0.7477, 0.7483, 0.7458, 0.7448, 0.743, 0.7399, 0.7395,
            0.7395, 0.7378, 0.7382, 0.7362, 0.7355, 0.7348, 0.7361, 0.7361, 0.7365, 0.7362,
            0.7331, 0.7339, 0.7344, 0.7327, 0.7327, 0.7336, 0.7333, 0.7359, 0.7359, 0.7372,
            0.736, 0.736, 0.735, 0.7365, 0.7384, 0.7395, 0.7413, 0.7397, 0.7396, 0.7385,
            0.7378, 0.7366, 0.74, 0.7411, 0.7406, 0.7405, 0.7414, 0.7431, 0.7431, 0.7438,
            0.7443, 0.7443, 0.7443, 0.7434, 0.7429, 0.7442, 0.744, 0.7439, 0.7437, 0.7437,
            0.7429, 0.7403, 0.7399, 0.7418, 0.7468, 0.748, 0.748, 0.749, 0.7494, 0.7522,
            0.7515, 0.7502, 0.7472, 0.7472, 0.7462, 0.7455, 0.7449, 0.7467, 0.7458, 0.7427,
            0.7427, 0.743, 0.7429, 0.744, 0.743, 0.7422, 0.7388, 0.7388, 0.7369, 0.7345,
            0.7345, 0.7345, 0.7352, 0.7341, 0.7341, 0.734, 0.7324, 0.7272, 0.7264, 0.7255,
            0.7258, 0.7258, 0.7256, 0.7257, 0.7247, 0.7243, 0.7244, 0.7235, 0.7235, 0.7235,
            0.7235, 0.7262, 0.7288, 0.7301, 0.7337, 0.7337, 0.7324, 0.7297, 0.7317, 0.7315,
            0.7288, 0.7263, 0.7263, 0.7242, 0.7253, 0.7264, 0.727, 0.7312, 0.7305, 0.7305,
            0.7318, 0.7358, 0.7409, 0.7454, 0.7437, 0.7424, 0.7424, 0.7415, 0.7419, 0.7414,
            0.7377, 0.7355, 0.7315, 0.7315, 0.732, 0.7332, 0.7346, 0.7328, 0.7323, 0.734,
            0.734, 0.7336, 0.7351, 0.7346, 0.7321, 0.7294, 0.7266, 0.7266, 0.7254, 0.7242,
            0.7213, 0.7197, 0.7209, 0.721, 0.721, 0.721, 0.7209, 0.7159, 0.7133, 0.7105,
            0.7099, 0.7099, 0.7093, 0.7093, 0.7076, 0.707, 0.7049, 0.7012, 0.7011, 0.7019,
            0.7046, 0.7063, 0.7089, 0.7077, 0.7077, 0.7077, 0.7091, 0.7118, 0.7079, 0.7053,
            0.705, 0.7055, 0.7055, 0.7045, 0.7051, 0.7051, 0.7017, 0.7, 0.6995, 0.6994,
            0.7014, 0.7036, 0.7021, 0.7002, 0.6967, 0.695, 0.695, 0.6939, 0.694, 0.6922,
            0.6919, 0.6914, 0.6894, 0.6891, 0.6904, 0.689, 0.6834, 0.6823, 0.6807, 0.6815,
            0.6815, 0.6847, 0.6859, 0.6822, 0.6827, 0.6837, 0.6823, 0.6822, 0.6822, 0.6792,
            0.6746, 0.6735, 0.6731, 0.6742, 0.6744, 0.6739, 0.6731, 0.6761, 0.6761, 0.6785,
            0.6818, 0.6836, 0.6823, 0.6805, 0.6793, 0.6849, 0.6833, 0.6825, 0.6825, 0.6816,
            0.6799, 0.6813, 0.6809, 0.6868, 0.6933, 0.6933, 0.6945, 0.6944, 0.6946, 0.6964,
            0.6965, 0.6956, 0.6956, 0.695, 0.6948, 0.6928, 0.6887, 0.6824, 0.6794, 0.6794,
            0.6803, 0.6855, 0.6824, 0.6791, 0.6783, 0.6785, 0.6785, 0.6797, 0.68, 0.6803,
            0.6805, 0.676, 0.677, 0.677, 0.6736, 0.6726, 0.6764, 0.6821, 0.6831, 0.6842,
            0.6842, 0.6887, 0.6903, 0.6848, 0.6824, 0.6788, 0.6814, 0.6814, 0.6797, 0.6769,
            0.6765, 0.6733, 0.6729, 0.6758, 0.6758, 0.675, 0.678, 0.6833, 0.6856, 0.6903,
            0.6896, 0.6896, 0.6882, 0.6879, 0.6862, 0.6852, 0.6823, 0.6813, 0.6813, 0.6822,
            0.6802, 0.6802, 0.6784, 0.6748, 0.6747, 0.6747, 0.6748, 0.6733, 0.665, 0.6611,
            0.6583, 0.659, 0.659, 0.6581, 0.6578, 0.6574, 0.6532, 0.6502, 0.6514, 0.6514,
            0.6507, 0.651, 0.6489, 0.6424, 0.6406, 0.6382, 0.6382, 0.6341, 0.6344, 0.6378,
            0.6439, 0.6478, 0.6481, 0.6481, 0.6494, 0.6438, 0.6377, 0.6329, 0.6336, 0.6333,
            0.6333, 0.633, 0.6371, 0.6403, 0.6396, 0.6364, 0.6356, 0.6356, 0.6368, 0.6357,
            0.6354, 0.632, 0.6332, 0.6328, 0.6331, 0.6342, 0.6321, 0.6302, 0.6278, 0.6308,
            0.6324, 0.6324, 0.6307, 0.6277, 0.6269, 0.6335, 0.6392, 0.64, 0.6401, 0.6396,
            0.6407, 0.6423, 0.6429, 0.6472, 0.6485, 0.6486, 0.6467, 0.6444, 0.6467, 0.6509,
            0.6478, 0.6461, 0.6461, 0.6468, 0.6449, 0.647, 0.6461, 0.6452, 0.6422, 0.6422,
            0.6425, 0.6414, 0.6366, 0.6346, 0.635, 0.6346, 0.6346, 0.6343, 0.6346, 0.6379,
            0.6416, 0.6442, 0.6431, 0.6431, 0.6435, 0.644, 0.6473, 0.6469, 0.6386, 0.6356,
            0.634, 0.6346, 0.643, 0.6452, 0.6467, 0.6506, 0.6504, 0.6503, 0.6481, 0.6451,
            0.645, 0.6441, 0.6414, 0.6409, 0.6409, 0.6428, 0.6431, 0.6418, 0.6371, 0.6349,
            0.6333, 0.6334, 0.6338, 0.6342, 0.632, 0.6318, 0.637, 0.6368, 0.6368, 0.6383,
            0.6371, 0.6371, 0.6355, 0.632, 0.6277, 0.6276, 0.6291, 0.6274, 0.6293, 0.6311,
            0.631, 0.6312, 0.6312, 0.6304, 0.6294, 0.6348, 0.6378, 0.6368, 0.6368, 0.6368,
            0.636, 0.637, 0.6418, 0.6411, 0.6435, 0.6427, 0.6427, 0.6419, 0.6446, 0.6468,
            0.6487, 0.6594, 0.6666, 0.6666, 0.6678, 0.6712, 0.6705, 0.6718, 0.6784, 0.6811,
            0.6811, 0.6794, 0.6804, 0.6781, 0.6756, 0.6735, 0.6763, 0.6762, 0.6777, 0.6815,
            0.6802, 0.678, 0.6796, 0.6817, 0.6817, 0.6832, 0.6877, 0.6912, 0.6914, 0.7009,
            0.7012, 0.701, 0.7005, 0.7076, 0.7087, 0.717, 0.7105, 0.7031, 0.7029, 0.7006,
            0.7035, 0.7045, 0.6956, 0.6988, 0.6915, 0.6914, 0.6859, 0.6778, 0.6815, 0.6815,
            0.6843, 0.6846, 0.6846, 0.6923, 0.6997, 0.7098, 0.7188, 0.7232, 0.7262, 0.7266,
            0.7359, 0.7368, 0.7337, 0.7317, 0.7387, 0.7467, 0.7461, 0.7366, 0.7319, 0.7361,
            0.7437, 0.7432, 0.7461, 0.7461, 0.7454, 0.7549, 0.7742, 0.7801, 0.7903, 0.7876,
            0.7928, 0.7991, 0.8007, 0.7823, 0.7661, 0.785, 0.7863, 0.7862, 0.7821, 0.7858,
            0.7731, 0.7779, 0.7844, 0.7866, 0.7864, 0.7788, 0.7875, 0.7971, 0.8004, 0.7857,
            0.7932, 0.7938, 0.7927, 0.7918, 0.7919, 0.7989, 0.7988, 0.7949, 0.7948, 0.7882,
            0.7745, 0.771, 0.775, 0.7791, 0.7882, 0.7882, 0.7899, 0.7905, 0.7889, 0.7879,
            0.7855, 0.7866, 0.7865, 0.7795, 0.7758, 0.7717, 0.761, 0.7497, 0.7471, 0.7473,
            0.7407, 0.7288, 0.7074, 0.6927, 0.7083, 0.7191, 0.719, 0.7153, 0.7156, 0.7158,
            0.714, 0.7119, 0.7129, 0.7129, 0.7049, 0.7095
        ];

        var masterChart,
            detailChart;

        function createMaster() {
            masterChart = $('#master-container').highcharts({
                    chart: {
                        reflow: false,
                        borderWidth: 0,
                        backgroundColor: null,
                        marginLeft: 50,
                        marginRight: 20,
                        zoomType: 'x',
                        events: {

                            // listen to the selection event on the master chart to update the
                            // extremes of the detail chart
                            selection: function(event) {
                                var extremesObject = event.xAxis[0],
                                    min = extremesObject.min,
                                    max = extremesObject.max,
                                    detailData = [],
                                    xAxis = this.xAxis[0];

                                // reverse engineer the last part of the data
                                jQuery.each(this.series[0].data, function(i, point) {
                                    if (point.x > min && point.x < max) {
                                        detailData.push({
                                            x: point.x,
                                            y: point.y
                                        });
                                    }
                                });

                                // move the plot bands to reflect the new detail span
                                xAxis.removePlotBand('mask-before');
                                xAxis.addPlotBand({
                                    id: 'mask-before',
                                    from: Date.UTC(2006, 0, 1),
                                    to: min,
                                    color: 'rgba(0, 0, 0, 0.2)'
                                });

                                xAxis.removePlotBand('mask-after');
                                xAxis.addPlotBand({
                                    id: 'mask-after',
                                    from: max,
                                    to: Date.UTC(2008, 11, 31),
                                    color: 'rgba(0, 0, 0, 0.2)'
                                });


                                detailChart.series[0].setData(detailData);

                                return false;
                            }
                        }
                    },
                    title: {
                        text: null
                    },
                    xAxis: {
                        type: 'datetime',
                        showLastTickLabel: true,
                        maxZoom: 14 * 24 * 3600000, // fourteen days
                        plotBands: [{
                            id: 'mask-before',
                            from: Date.UTC(2006, 0, 1),
                            to: Date.UTC(2008, 7, 1),
                            color: 'rgba(0, 0, 0, 0.2)'
                        }],
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        gridLineWidth: 0,
                        labels: {
                            enabled: false
                        },
                        title: {
                            text: null
                        },
                        min: 0.6,
                        showFirstLabel: false
                    },
                    tooltip: {
                        formatter: function() {
                            return false;
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    credits: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            fillColor: {
                                linearGradient: [0, 0, 0, 70],
                                stops: [
                                    [0, '#4572A7'],
                                    [1, 'rgba(0,0,0,0)']
                                ]
                            },
                            lineWidth: 1,
                            marker: {
                                enabled: false
                            },
                            shadow: false,
                            states: {
                                hover: {
                                    lineWidth: 1
                                }
                            },
                            enableMouseTracking: false
                        }
                    },

                    series: [{
                        type: 'area',
                        name: 'USD to EUR',
                        pointInterval: 24 * 3600 * 1000,
                        pointStart: Date.UTC(2006, 0, 1),
                        data: data
                    }],

                    exporting: {
                        enabled: false
                    }

                }, function(masterChart) {
                    createDetail(masterChart);
                })
                .highcharts(); // return chart instance
        }

        // create the detail chart
        function createDetail(masterChart) {

            // prepare the detail chart
            var detailData = [],
                detailStart = Date.UTC(2008, 7, 1);

            jQuery.each(masterChart.series[0].data, function(i, point) {
                if (point.x >= detailStart) {
                    detailData.push(point.y);
                }
            });

            // create a detail chart referenced by a global variable
            detailChart = $('#detail-container').highcharts({
                chart: {
                    marginBottom: 120,
                    reflow: false,
                    marginLeft: 50,
                    marginRight: 20,
                    style: {
                        position: 'absolute'
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Historical USD to EUR Exchange Rate'
                },
                subtitle: {
                    text: 'Select an area by dragging across the lower chart'
                },
                xAxis: {
                    type: 'datetime'
                },
                yAxis: {
                    title: {
                        text: null
                    },
                    maxZoom: 0.1
                },
                tooltip: {
                    formatter: function() {
                        var point = this.points[0];
                        return '<b>' + point.series.name + '</b><br/>' +
                            Highcharts.dateFormat('%A %B %e %Y', this.x) + ':<br/>' +
                            '1 USD = ' + Highcharts.numberFormat(point.y, 2) + ' EUR';
                    },
                    shared: true
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: true,
                                    radius: 3
                                }
                            }
                        }
                    }
                },
                series: [{
                    name: 'USD to EUR',
                    pointStart: detailStart,
                    pointInterval: 24 * 3600 * 1000,
                    data: detailData
                }],

                exporting: {
                    enabled: false
                }

            }).highcharts(); // return chart
        }

        // make the container smaller and add a second container for the master chart
        var $container = $('#master-detail-chart')
            .css('position', 'relative');

        var $detailContainer = $('<div id="detail-container">')
            .appendTo($container);

        var $masterContainer = $('<div id="master-container">')
            .css({
                position: 'absolute',
                top: 300,
                height: 80,
                width: '100%'
            })
            .appendTo($container);

        // create master and in its callback, create the detail chart
        createMaster();

        $(".page-content").height("1000px");
        $("#master-detail-chart").parent().height("400px");
    }, 50);

    //BEGIN PORTLET
    $(".portlet").each(function(index, element) {
        var me = $(this);
        $(">.portlet-header>.tools>i", me).click(function(e) {
            if ($(this).hasClass('fa-chevron-up')) {
                $(">.portlet-body", me).slideUp('fast');
                $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            } else if ($(this).hasClass('fa-chevron-down')) {
                $(">.portlet-body", me).slideDown('fast');
                $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else if ($(this).hasClass('fa-cog')) {
                //Show modal
            } else if ($(this).hasClass('fa-refresh')) {
                //$(">.portlet-body", me).hide();
                $(">.portlet-body", me).addClass('wait');

                setTimeout(function() {
                    //$(">.portlet-body>div", me).show();
                    $(">.portlet-body", me).removeClass('wait');
                }, 1000);
            } else if ($(this).hasClass('fa-times')) {
                me.remove();
            }
        });
    });
    //END PORTLET
});

App.controller('ChartsHighchartLineController', function($scope, $routeParams) {
    setTimeout(function() {
        $('#ajax-loaded-data').highcharts({
            title: {
                text: 'Monthly Average Temperature',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: WorldClimate.com',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                ]
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'New York',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Berlin',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });

        /* With data labels */
        $('#with-data-labels').highcharts({
            chart: {
                type: 'line'
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                }
            },
            tooltip: {
                enabled: false,
                formatter: function() {
                    return '<b>' + this.series.name + '</b><br/>' +
                        this.x + ': ' + this.y + '°C';
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });

        /* Time series, zoomable */
        $('#time-series-zoomable').highcharts({
            chart: {
                zoomType: 'x',
                spacingRight: 20
            },
            title: {
                text: 'USD to EUR exchange rate from 2006 through 2008'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime',
                maxZoom: 14 * 24 * 3600000, // fourteen days
                title: {
                    text: null
                }
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
                }
            },
            tooltip: {
                shared: true
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    lineWidth: 1,
                    marker: {
                        enabled: false
                    },
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'USD to EUR',
                pointInterval: 24 * 3600 * 1000,
                pointStart: Date.UTC(2006, 0, 1),
                data: [
                    0.8446, 0.8445, 0.8444, 0.8451, 0.8418, 0.8264, 0.8258, 0.8232, 0.8233, 0.8258,
                    0.8283, 0.8278, 0.8256, 0.8292, 0.8239, 0.8239, 0.8245, 0.8265, 0.8261, 0.8269,
                    0.8273, 0.8244, 0.8244, 0.8172, 0.8139, 0.8146, 0.8164, 0.82, 0.8269, 0.8269,
                    0.8269, 0.8258, 0.8247, 0.8286, 0.8289, 0.8316, 0.832, 0.8333, 0.8352, 0.8357,
                    0.8355, 0.8354, 0.8403, 0.8403, 0.8406, 0.8403, 0.8396, 0.8418, 0.8409, 0.8384,
                    0.8386, 0.8372, 0.839, 0.84, 0.8389, 0.84, 0.8423, 0.8423, 0.8435, 0.8422,
                    0.838, 0.8373, 0.8316, 0.8303, 0.8303, 0.8302, 0.8369, 0.84, 0.8385, 0.84,
                    0.8401, 0.8402, 0.8381, 0.8351, 0.8314, 0.8273, 0.8213, 0.8207, 0.8207, 0.8215,
                    0.8242, 0.8273, 0.8301, 0.8346, 0.8312, 0.8312, 0.8312, 0.8306, 0.8327, 0.8282,
                    0.824, 0.8255, 0.8256, 0.8273, 0.8209, 0.8151, 0.8149, 0.8213, 0.8273, 0.8273,
                    0.8261, 0.8252, 0.824, 0.8262, 0.8258, 0.8261, 0.826, 0.8199, 0.8153, 0.8097,
                    0.8101, 0.8119, 0.8107, 0.8105, 0.8084, 0.8069, 0.8047, 0.8023, 0.7965, 0.7919,
                    0.7921, 0.7922, 0.7934, 0.7918, 0.7915, 0.787, 0.7861, 0.7861, 0.7853, 0.7867,
                    0.7827, 0.7834, 0.7766, 0.7751, 0.7739, 0.7767, 0.7802, 0.7788, 0.7828, 0.7816,
                    0.7829, 0.783, 0.7829, 0.7781, 0.7811, 0.7831, 0.7826, 0.7855, 0.7855, 0.7845,
                    0.7798, 0.7777, 0.7822, 0.7785, 0.7744, 0.7743, 0.7726, 0.7766, 0.7806, 0.785,
                    0.7907, 0.7912, 0.7913, 0.7931, 0.7952, 0.7951, 0.7928, 0.791, 0.7913, 0.7912,
                    0.7941, 0.7953, 0.7921, 0.7919, 0.7968, 0.7999, 0.7999, 0.7974, 0.7942, 0.796,
                    0.7969, 0.7862, 0.7821, 0.7821, 0.7821, 0.7811, 0.7833, 0.7849, 0.7819, 0.7809,
                    0.7809, 0.7827, 0.7848, 0.785, 0.7873, 0.7894, 0.7907, 0.7909, 0.7947, 0.7987,
                    0.799, 0.7927, 0.79, 0.7878, 0.7878, 0.7907, 0.7922, 0.7937, 0.786, 0.787,
                    0.7838, 0.7838, 0.7837, 0.7836, 0.7806, 0.7825, 0.7798, 0.777, 0.777, 0.7772,
                    0.7793, 0.7788, 0.7785, 0.7832, 0.7865, 0.7865, 0.7853, 0.7847, 0.7809, 0.778,
                    0.7799, 0.78, 0.7801, 0.7765, 0.7785, 0.7811, 0.782, 0.7835, 0.7845, 0.7844,
                    0.782, 0.7811, 0.7795, 0.7794, 0.7806, 0.7794, 0.7794, 0.7778, 0.7793, 0.7808,
                    0.7824, 0.787, 0.7894, 0.7893, 0.7882, 0.7871, 0.7882, 0.7871, 0.7878, 0.79,
                    0.7901, 0.7898, 0.7879, 0.7886, 0.7858, 0.7814, 0.7825, 0.7826, 0.7826, 0.786,
                    0.7878, 0.7868, 0.7883, 0.7893, 0.7892, 0.7876, 0.785, 0.787, 0.7873, 0.7901,
                    0.7936, 0.7939, 0.7938, 0.7956, 0.7975, 0.7978, 0.7972, 0.7995, 0.7995, 0.7994,
                    0.7976, 0.7977, 0.796, 0.7922, 0.7928, 0.7929, 0.7948, 0.797, 0.7953, 0.7907,
                    0.7872, 0.7852, 0.7852, 0.786, 0.7862, 0.7836, 0.7837, 0.784, 0.7867, 0.7867,
                    0.7869, 0.7837, 0.7827, 0.7825, 0.7779, 0.7791, 0.779, 0.7787, 0.78, 0.7807,
                    0.7803, 0.7817, 0.7799, 0.7799, 0.7795, 0.7801, 0.7765, 0.7725, 0.7683, 0.7641,
                    0.7639, 0.7616, 0.7608, 0.759, 0.7582, 0.7539, 0.75, 0.75, 0.7507, 0.7505,
                    0.7516, 0.7522, 0.7531, 0.7577, 0.7577, 0.7582, 0.755, 0.7542, 0.7576, 0.7616,
                    0.7648, 0.7648, 0.7641, 0.7614, 0.757, 0.7587, 0.7588, 0.762, 0.762, 0.7617,
                    0.7618, 0.7615, 0.7612, 0.7596, 0.758, 0.758, 0.758, 0.7547, 0.7549, 0.7613,
                    0.7655, 0.7693, 0.7694, 0.7688, 0.7678, 0.7708, 0.7727, 0.7749, 0.7741, 0.7741,
                    0.7732, 0.7727, 0.7737, 0.7724, 0.7712, 0.772, 0.7721, 0.7717, 0.7704, 0.769,
                    0.7711, 0.774, 0.7745, 0.7745, 0.774, 0.7716, 0.7713, 0.7678, 0.7688, 0.7718,
                    0.7718, 0.7728, 0.7729, 0.7698, 0.7685, 0.7681, 0.769, 0.769, 0.7698, 0.7699,
                    0.7651, 0.7613, 0.7616, 0.7614, 0.7614, 0.7607, 0.7602, 0.7611, 0.7622, 0.7615,
                    0.7598, 0.7598, 0.7592, 0.7573, 0.7566, 0.7567, 0.7591, 0.7582, 0.7585, 0.7613,
                    0.7631, 0.7615, 0.76, 0.7613, 0.7627, 0.7627, 0.7608, 0.7583, 0.7575, 0.7562,
                    0.752, 0.7512, 0.7512, 0.7517, 0.752, 0.7511, 0.748, 0.7509, 0.7531, 0.7531,
                    0.7527, 0.7498, 0.7493, 0.7504, 0.75, 0.7491, 0.7491, 0.7485, 0.7484, 0.7492,
                    0.7471, 0.7459, 0.7477, 0.7477, 0.7483, 0.7458, 0.7448, 0.743, 0.7399, 0.7395,
                    0.7395, 0.7378, 0.7382, 0.7362, 0.7355, 0.7348, 0.7361, 0.7361, 0.7365, 0.7362,
                    0.7331, 0.7339, 0.7344, 0.7327, 0.7327, 0.7336, 0.7333, 0.7359, 0.7359, 0.7372,
                    0.736, 0.736, 0.735, 0.7365, 0.7384, 0.7395, 0.7413, 0.7397, 0.7396, 0.7385,
                    0.7378, 0.7366, 0.74, 0.7411, 0.7406, 0.7405, 0.7414, 0.7431, 0.7431, 0.7438,
                    0.7443, 0.7443, 0.7443, 0.7434, 0.7429, 0.7442, 0.744, 0.7439, 0.7437, 0.7437,
                    0.7429, 0.7403, 0.7399, 0.7418, 0.7468, 0.748, 0.748, 0.749, 0.7494, 0.7522,
                    0.7515, 0.7502, 0.7472, 0.7472, 0.7462, 0.7455, 0.7449, 0.7467, 0.7458, 0.7427,
                    0.7427, 0.743, 0.7429, 0.744, 0.743, 0.7422, 0.7388, 0.7388, 0.7369, 0.7345,
                    0.7345, 0.7345, 0.7352, 0.7341, 0.7341, 0.734, 0.7324, 0.7272, 0.7264, 0.7255,
                    0.7258, 0.7258, 0.7256, 0.7257, 0.7247, 0.7243, 0.7244, 0.7235, 0.7235, 0.7235,
                    0.7235, 0.7262, 0.7288, 0.7301, 0.7337, 0.7337, 0.7324, 0.7297, 0.7317, 0.7315,
                    0.7288, 0.7263, 0.7263, 0.7242, 0.7253, 0.7264, 0.727, 0.7312, 0.7305, 0.7305,
                    0.7318, 0.7358, 0.7409, 0.7454, 0.7437, 0.7424, 0.7424, 0.7415, 0.7419, 0.7414,
                    0.7377, 0.7355, 0.7315, 0.7315, 0.732, 0.7332, 0.7346, 0.7328, 0.7323, 0.734,
                    0.734, 0.7336, 0.7351, 0.7346, 0.7321, 0.7294, 0.7266, 0.7266, 0.7254, 0.7242,
                    0.7213, 0.7197, 0.7209, 0.721, 0.721, 0.721, 0.7209, 0.7159, 0.7133, 0.7105,
                    0.7099, 0.7099, 0.7093, 0.7093, 0.7076, 0.707, 0.7049, 0.7012, 0.7011, 0.7019,
                    0.7046, 0.7063, 0.7089, 0.7077, 0.7077, 0.7077, 0.7091, 0.7118, 0.7079, 0.7053,
                    0.705, 0.7055, 0.7055, 0.7045, 0.7051, 0.7051, 0.7017, 0.7, 0.6995, 0.6994,
                    0.7014, 0.7036, 0.7021, 0.7002, 0.6967, 0.695, 0.695, 0.6939, 0.694, 0.6922,
                    0.6919, 0.6914, 0.6894, 0.6891, 0.6904, 0.689, 0.6834, 0.6823, 0.6807, 0.6815,
                    0.6815, 0.6847, 0.6859, 0.6822, 0.6827, 0.6837, 0.6823, 0.6822, 0.6822, 0.6792,
                    0.6746, 0.6735, 0.6731, 0.6742, 0.6744, 0.6739, 0.6731, 0.6761, 0.6761, 0.6785,
                    0.6818, 0.6836, 0.6823, 0.6805, 0.6793, 0.6849, 0.6833, 0.6825, 0.6825, 0.6816,
                    0.6799, 0.6813, 0.6809, 0.6868, 0.6933, 0.6933, 0.6945, 0.6944, 0.6946, 0.6964,
                    0.6965, 0.6956, 0.6956, 0.695, 0.6948, 0.6928, 0.6887, 0.6824, 0.6794, 0.6794,
                    0.6803, 0.6855, 0.6824, 0.6791, 0.6783, 0.6785, 0.6785, 0.6797, 0.68, 0.6803,
                    0.6805, 0.676, 0.677, 0.677, 0.6736, 0.6726, 0.6764, 0.6821, 0.6831, 0.6842,
                    0.6842, 0.6887, 0.6903, 0.6848, 0.6824, 0.6788, 0.6814, 0.6814, 0.6797, 0.6769,
                    0.6765, 0.6733, 0.6729, 0.6758, 0.6758, 0.675, 0.678, 0.6833, 0.6856, 0.6903,
                    0.6896, 0.6896, 0.6882, 0.6879, 0.6862, 0.6852, 0.6823, 0.6813, 0.6813, 0.6822,
                    0.6802, 0.6802, 0.6784, 0.6748, 0.6747, 0.6747, 0.6748, 0.6733, 0.665, 0.6611,
                    0.6583, 0.659, 0.659, 0.6581, 0.6578, 0.6574, 0.6532, 0.6502, 0.6514, 0.6514,
                    0.6507, 0.651, 0.6489, 0.6424, 0.6406, 0.6382, 0.6382, 0.6341, 0.6344, 0.6378,
                    0.6439, 0.6478, 0.6481, 0.6481, 0.6494, 0.6438, 0.6377, 0.6329, 0.6336, 0.6333,
                    0.6333, 0.633, 0.6371, 0.6403, 0.6396, 0.6364, 0.6356, 0.6356, 0.6368, 0.6357,
                    0.6354, 0.632, 0.6332, 0.6328, 0.6331, 0.6342, 0.6321, 0.6302, 0.6278, 0.6308,
                    0.6324, 0.6324, 0.6307, 0.6277, 0.6269, 0.6335, 0.6392, 0.64, 0.6401, 0.6396,
                    0.6407, 0.6423, 0.6429, 0.6472, 0.6485, 0.6486, 0.6467, 0.6444, 0.6467, 0.6509,
                    0.6478, 0.6461, 0.6461, 0.6468, 0.6449, 0.647, 0.6461, 0.6452, 0.6422, 0.6422,
                    0.6425, 0.6414, 0.6366, 0.6346, 0.635, 0.6346, 0.6346, 0.6343, 0.6346, 0.6379,
                    0.6416, 0.6442, 0.6431, 0.6431, 0.6435, 0.644, 0.6473, 0.6469, 0.6386, 0.6356,
                    0.634, 0.6346, 0.643, 0.6452, 0.6467, 0.6506, 0.6504, 0.6503, 0.6481, 0.6451,
                    0.645, 0.6441, 0.6414, 0.6409, 0.6409, 0.6428, 0.6431, 0.6418, 0.6371, 0.6349,
                    0.6333, 0.6334, 0.6338, 0.6342, 0.632, 0.6318, 0.637, 0.6368, 0.6368, 0.6383,
                    0.6371, 0.6371, 0.6355, 0.632, 0.6277, 0.6276, 0.6291, 0.6274, 0.6293, 0.6311,
                    0.631, 0.6312, 0.6312, 0.6304, 0.6294, 0.6348, 0.6378, 0.6368, 0.6368, 0.6368,
                    0.636, 0.637, 0.6418, 0.6411, 0.6435, 0.6427, 0.6427, 0.6419, 0.6446, 0.6468,
                    0.6487, 0.6594, 0.6666, 0.6666, 0.6678, 0.6712, 0.6705, 0.6718, 0.6784, 0.6811,
                    0.6811, 0.6794, 0.6804, 0.6781, 0.6756, 0.6735, 0.6763, 0.6762, 0.6777, 0.6815,
                    0.6802, 0.678, 0.6796, 0.6817, 0.6817, 0.6832, 0.6877, 0.6912, 0.6914, 0.7009,
                    0.7012, 0.701, 0.7005, 0.7076, 0.7087, 0.717, 0.7105, 0.7031, 0.7029, 0.7006,
                    0.7035, 0.7045, 0.6956, 0.6988, 0.6915, 0.6914, 0.6859, 0.6778, 0.6815, 0.6815,
                    0.6843, 0.6846, 0.6846, 0.6923, 0.6997, 0.7098, 0.7188, 0.7232, 0.7262, 0.7266,
                    0.7359, 0.7368, 0.7337, 0.7317, 0.7387, 0.7467, 0.7461, 0.7366, 0.7319, 0.7361,
                    0.7437, 0.7432, 0.7461, 0.7461, 0.7454, 0.7549, 0.7742, 0.7801, 0.7903, 0.7876,
                    0.7928, 0.7991, 0.8007, 0.7823, 0.7661, 0.785, 0.7863, 0.7862, 0.7821, 0.7858,
                    0.7731, 0.7779, 0.7844, 0.7866, 0.7864, 0.7788, 0.7875, 0.7971, 0.8004, 0.7857,
                    0.7932, 0.7938, 0.7927, 0.7918, 0.7919, 0.7989, 0.7988, 0.7949, 0.7948, 0.7882,
                    0.7745, 0.771, 0.775, 0.7791, 0.7882, 0.7882, 0.7899, 0.7905, 0.7889, 0.7879,
                    0.7855, 0.7866, 0.7865, 0.7795, 0.7758, 0.7717, 0.761, 0.7497, 0.7471, 0.7473,
                    0.7407, 0.7288, 0.7074, 0.6927, 0.7083, 0.7191, 0.719, 0.7153, 0.7156, 0.7158,
                    0.714, 0.7119, 0.7129, 0.7129, 0.7049, 0.7095
                ]
            }]
        });

        /* Spline with inverted axes */
        $('#spline-with-inverted-axes').highcharts({
            chart: {
                type: 'spline',
                inverted: true
            },
            title: {
                text: 'Atmosphere Temperature by Altitude'
            },
            subtitle: {
                text: 'According to the Standard Atmosphere Model'
            },
            xAxis: {
                reversed: false,
                title: {
                    enabled: true,
                    text: 'Altitude'
                },
                labels: {
                    formatter: function() {
                        return this.value + 'km';
                    }
                },
                maxPadding: 0.05,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                labels: {
                    formatter: function() {
                        return this.value + '°';
                    }
                },
                lineWidth: 2
            },
            legend: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br/>',
                pointFormat: '{point.x} km: {point.y}°C'
            },
            plotOptions: {
                spline: {
                    marker: {
                        enable: false
                    }
                }
            },
            series: [{
                name: 'Temperature',
                data: [
                    [0, 15],
                    [10, -50],
                    [20, -56.5],
                    [30, -46.5],
                    [40, -22.1],
                    [50, -2.5],
                    [60, -27.7],
                    [70, -55.7],
                    [80, -76.5]
                ]
            }]
        });

        /* Spline with symbols */
        $('#spline-with-symbols').highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                ]
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                labels: {
                    formatter: function() {
                        return this.value + '°';
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'Tokyo',
                marker: {
                    symbol: 'square'
                },
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
                    y: 26.5,
                    marker: {
                        symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
                    }
                }, 23.3, 18.3, 13.9, 9.6]

            }, {
                name: 'London',
                marker: {
                    symbol: 'diamond'
                },
                data: [{
                    y: 3.9,
                    marker: {
                        symbol: 'url(http://www.highcharts.com/demo/gfx/snow.png)'
                    }
                }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });

        /* Spline with plot bands */
        $('#spline-with-plot-bands').highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Wind speed during two days'
            },
            subtitle: {
                text: 'October 6th and 7th 2009 at two locations in Vik i Sogn, Norway'
            },
            xAxis: {
                type: 'datetime',
                labels: {
                    overflow: 'justify'
                }
            },
            yAxis: {
                title: {
                    text: 'Wind speed (m/s)'
                },
                min: 0,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                plotBands: [{ // Light air
                    from: 0.3,
                    to: 1.5,
                    color: 'rgba(68, 170, 213, 0.1)',
                    label: {
                        text: 'Light air',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Light breeze
                    from: 1.5,
                    to: 3.3,
                    color: 'rgba(0, 0, 0, 0)',
                    label: {
                        text: 'Light breeze',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Gentle breeze
                    from: 3.3,
                    to: 5.5,
                    color: 'rgba(68, 170, 213, 0.1)',
                    label: {
                        text: 'Gentle breeze',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Moderate breeze
                    from: 5.5,
                    to: 8,
                    color: 'rgba(0, 0, 0, 0)',
                    label: {
                        text: 'Moderate breeze',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Fresh breeze
                    from: 8,
                    to: 11,
                    color: 'rgba(68, 170, 213, 0.1)',
                    label: {
                        text: 'Fresh breeze',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // Strong breeze
                    from: 11,
                    to: 14,
                    color: 'rgba(0, 0, 0, 0)',
                    label: {
                        text: 'Strong breeze',
                        style: {
                            color: '#606060'
                        }
                    }
                }, { // High wind
                    from: 14,
                    to: 15,
                    color: 'rgba(68, 170, 213, 0.1)',
                    label: {
                        text: 'High wind',
                        style: {
                            color: '#606060'
                        }
                    }
                }]
            },
            tooltip: {
                valueSuffix: ' m/s'
            },
            plotOptions: {
                spline: {
                    lineWidth: 4,
                    states: {
                        hover: {
                            lineWidth: 5
                        }
                    },
                    marker: {
                        enabled: false
                    },
                    pointInterval: 3600000, // one hour
                    pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
                }
            },
            series: [{
                name: 'Hestavollane',
                data: [4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 7.4, 6.9, 7.1,
                    7.9, 7.9, 7.5, 6.7, 7.7, 7.7, 7.4, 7.0, 7.1, 5.8, 5.9, 7.4,
                    8.2, 8.5, 9.4, 8.1, 10.9, 10.4, 10.9, 12.4, 12.1, 9.5, 7.5,
                    7.1, 7.5, 8.1, 6.8, 3.4, 2.1, 1.9, 2.8, 2.9, 1.3, 4.4, 4.2,
                    3.0, 3.0
                ]

            }, {
                name: 'Voll',
                data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.3, 0.0,
                    0.0, 0.4, 0.0, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                    0.0, 0.6, 1.2, 1.7, 0.7, 2.9, 4.1, 2.6, 3.7, 3.9, 1.7, 2.3,
                    3.0, 3.3, 4.8, 5.0, 4.8, 5.0, 3.2, 2.0, 0.9, 0.4, 0.3, 0.5, 0.4
                ]
            }],
            navigation: {
                menuItemStyle: {
                    fontSize: '10px'
                }
            }
        });

        /*  Time data with irregular intervals */
        $('#time-data-with-irregular-intervals').highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Snow depth at Vikjafjellet, Norway'
            },
            subtitle: {
                text: 'Irregular time data in Highcharts JS'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: { // don't display the dummy year
                    month: '%e. %b',
                    year: '%b'
                }
            },
            yAxis: {
                title: {
                    text: 'Snow depth (m)'
                },
                min: 0
            },
            tooltip: {
                formatter: function() {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%e. %b', this.x) + ': ' + this.y + ' m';
                }
            },

            series: [{
                name: 'Winter 2007-2008',
                // Define the data points. All series have a dummy year
                // of 1970/71 in order to be compared on the same x axis. Note
                // that in JavaScript, months start at 0 for January, 1 for February etc.
                data: [
                    [Date.UTC(1970, 9, 27), 0],
                    [Date.UTC(1970, 10, 10), 0.6],
                    [Date.UTC(1970, 10, 18), 0.7],
                    [Date.UTC(1970, 11, 2), 0.8],
                    [Date.UTC(1970, 11, 9), 0.6],
                    [Date.UTC(1970, 11, 16), 0.6],
                    [Date.UTC(1970, 11, 28), 0.67],
                    [Date.UTC(1971, 0, 1), 0.81],
                    [Date.UTC(1971, 0, 8), 0.78],
                    [Date.UTC(1971, 0, 12), 0.98],
                    [Date.UTC(1971, 0, 27), 1.84],
                    [Date.UTC(1971, 1, 10), 1.80],
                    [Date.UTC(1971, 1, 18), 1.80],
                    [Date.UTC(1971, 1, 24), 1.92],
                    [Date.UTC(1971, 2, 4), 2.49],
                    [Date.UTC(1971, 2, 11), 2.79],
                    [Date.UTC(1971, 2, 15), 2.73],
                    [Date.UTC(1971, 2, 25), 2.61],
                    [Date.UTC(1971, 3, 2), 2.76],
                    [Date.UTC(1971, 3, 6), 2.82],
                    [Date.UTC(1971, 3, 13), 2.8],
                    [Date.UTC(1971, 4, 3), 2.1],
                    [Date.UTC(1971, 4, 26), 1.1],
                    [Date.UTC(1971, 5, 9), 0.25],
                    [Date.UTC(1971, 5, 12), 0]
                ]
            }, {
                name: 'Winter 2008-2009',
                data: [
                    [Date.UTC(1970, 9, 18), 0],
                    [Date.UTC(1970, 9, 26), 0.2],
                    [Date.UTC(1970, 11, 1), 0.47],
                    [Date.UTC(1970, 11, 11), 0.55],
                    [Date.UTC(1970, 11, 25), 1.38],
                    [Date.UTC(1971, 0, 8), 1.38],
                    [Date.UTC(1971, 0, 15), 1.38],
                    [Date.UTC(1971, 1, 1), 1.38],
                    [Date.UTC(1971, 1, 8), 1.48],
                    [Date.UTC(1971, 1, 21), 1.5],
                    [Date.UTC(1971, 2, 12), 1.89],
                    [Date.UTC(1971, 2, 25), 2.0],
                    [Date.UTC(1971, 3, 4), 1.94],
                    [Date.UTC(1971, 3, 9), 1.91],
                    [Date.UTC(1971, 3, 13), 1.75],
                    [Date.UTC(1971, 3, 19), 1.6],
                    [Date.UTC(1971, 4, 25), 0.6],
                    [Date.UTC(1971, 4, 31), 0.35],
                    [Date.UTC(1971, 5, 7), 0]
                ]
            }, {
                name: 'Winter 2009-2010',
                data: [
                    [Date.UTC(1970, 9, 9), 0],
                    [Date.UTC(1970, 9, 14), 0.15],
                    [Date.UTC(1970, 10, 28), 0.35],
                    [Date.UTC(1970, 11, 12), 0.46],
                    [Date.UTC(1971, 0, 1), 0.59],
                    [Date.UTC(1971, 0, 24), 0.58],
                    [Date.UTC(1971, 1, 1), 0.62],
                    [Date.UTC(1971, 1, 7), 0.65],
                    [Date.UTC(1971, 1, 23), 0.77],
                    [Date.UTC(1971, 2, 8), 0.77],
                    [Date.UTC(1971, 2, 14), 0.79],
                    [Date.UTC(1971, 2, 24), 0.86],
                    [Date.UTC(1971, 3, 4), 0.8],
                    [Date.UTC(1971, 3, 18), 0.94],
                    [Date.UTC(1971, 3, 24), 0.9],
                    [Date.UTC(1971, 4, 16), 0.39],
                    [Date.UTC(1971, 4, 21), 0]
                ]
            }]
        });

        /* Logarithmic axis */
        $('#logarithmic-axis').highcharts({

            chart: {},

            title: {
                text: 'Logarithmic axis demo'
            },

            xAxis: {
                tickInterval: 1
            },

            yAxis: {
                type: 'logarithmic',
                minorTickInterval: 0.1
            },

            tooltip: {
                headerFormat: '<b>{series.name}</b><br />',
                pointFormat: 'x = {point.x}, y = {point.y}'
            },

            series: [{
                data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
                pointStart: 1
            }]
        });

    }, 50);

    //BEGIN PORTLET
    $(".portlet").each(function(index, element) {
        var me = $(this);
        $(">.portlet-header>.tools>i", me).click(function(e) {
            if ($(this).hasClass('fa-chevron-up')) {
                $(">.portlet-body", me).slideUp('fast');
                $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            } else if ($(this).hasClass('fa-chevron-down')) {
                $(">.portlet-body", me).slideDown('fast');
                $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else if ($(this).hasClass('fa-cog')) {
                //Show modal
            } else if ($(this).hasClass('fa-refresh')) {
                //$(">.portlet-body", me).hide();
                $(">.portlet-body", me).addClass('wait');

                setTimeout(function() {
                    //$(">.portlet-body>div", me).show();
                    $(">.portlet-body", me).removeClass('wait');
                }, 1000);
            } else if ($(this).hasClass('fa-times')) {
                me.remove();
            }
        });
    });
    //END PORTLET
});
App.controller('ChartsHighchartMoreController', function($scope, $routeParams) {
    setTimeout(function() {
        $('#angular-gauge').highcharts({
                chart: {
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },

                title: {
                    text: 'Speedometer'
                },

                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#333'],
                                [1, '#FFF']
                            ]
                        },
                        borderWidth: 1,
                        outerRadius: '107%'
                    }, {
                        // default background
                    }, {
                        backgroundColor: '#DDD',
                        borderWidth: 0,
                        outerRadius: '105%',
                        innerRadius: '103%'
                    }]
                },

                // the value axis
                yAxis: {
                    min: 0,
                    max: 200,

                    minorTickInterval: 'auto',
                    minorTickWidth: 1,
                    minorTickLength: 10,
                    minorTickPosition: 'inside',
                    minorTickColor: '#666',

                    tickPixelInterval: 30,
                    tickWidth: 2,
                    tickPosition: 'inside',
                    tickLength: 10,
                    tickColor: '#666',
                    labels: {
                        step: 2,
                        rotation: 'auto'
                    },
                    title: {
                        text: 'km/h'
                    },
                    plotBands: [{
                        from: 0,
                        to: 120,
                        color: '#55BF3B' // green
                    }, {
                        from: 120,
                        to: 160,
                        color: '#DDDF0D' // yellow
                    }, {
                        from: 160,
                        to: 200,
                        color: '#DF5353' // red
                    }]
                },

                series: [{
                    name: 'Speed',
                    data: [80],
                    tooltip: {
                        valueSuffix: ' km/h'
                    }
                }]

            },
            // Add some life
            function(chart) {
                if (!chart.renderer.forExport) {
                    setInterval(function() {
                        var point = chart.series[0].points[0],
                            newVal,
                            inc = Math.round((Math.random() - 0.5) * 20);

                        newVal = point.y + inc;
                        if (newVal < 0 || newVal > 200) {
                            newVal = point.y - inc;
                        }

                        point.update(newVal);

                    }, 3000);
                }
            });

        /* Clock */
        $(function() {
            /**
             * Get the current time
             */
            function getNow() {
                var now = new Date();

                return {
                    hours: now.getHours() + now.getMinutes() / 60,
                    minutes: now.getMinutes() * 12 / 60 + now.getSeconds() * 12 / 3600,
                    seconds: now.getSeconds() * 12 / 60
                };
            }

            /**
             * Pad numbers
             */
            function pad(number, length) {
                // Create an array of the remaining length +1 and join it with 0's
                return new Array((length || 2) + 1 - String(number).length).join(0) + number;
            }

            var now = getNow();

            // Create the chart
            $('#clock').highcharts({

                    chart: {
                        type: 'gauge',
                        plotBackgroundColor: null,
                        plotBackgroundImage: null,
                        plotBorderWidth: 0,
                        plotShadow: false,
                        height: 200
                    },

                    credits: {
                        enabled: false
                    },

                    title: {
                        text: 'The Highcharts clock'
                    },

                    pane: {
                        background: [{
                            // default background
                        }, {
                            // reflex for supported browsers
                            backgroundColor: Highcharts.svg ? {
                                radialGradient: {
                                    cx: 0.5,
                                    cy: -0.4,
                                    r: 1.9
                                },
                                stops: [
                                    [0.5, 'rgba(255, 255, 255, 0.2)'],
                                    [0.5, 'rgba(200, 200, 200, 0.2)']
                                ]
                            } : null
                        }]
                    },

                    yAxis: {
                        labels: {
                            distance: -20
                        },
                        min: 0,
                        max: 12,
                        lineWidth: 0,
                        showFirstLabel: false,

                        minorTickInterval: 'auto',
                        minorTickWidth: 1,
                        minorTickLength: 5,
                        minorTickPosition: 'inside',
                        minorGridLineWidth: 0,
                        minorTickColor: '#666',

                        tickInterval: 1,
                        tickWidth: 2,
                        tickPosition: 'inside',
                        tickLength: 10,
                        tickColor: '#666',
                        title: {
                            text: 'Powered by<br/>Highcharts',
                            style: {
                                color: '#BBB',
                                fontWeight: 'normal',
                                fontSize: '8px',
                                lineHeight: '10px'
                            },
                            y: 10
                        }
                    },

                    tooltip: {
                        formatter: function() {
                            return this.series.chart.tooltipText;
                        }
                    },

                    series: [{
                        data: [{
                            id: 'hour',
                            y: now.hours,
                            dial: {
                                radius: '60%',
                                baseWidth: 4,
                                baseLength: '95%',
                                rearLength: 0
                            }
                        }, {
                            id: 'minute',
                            y: now.minutes,
                            dial: {
                                baseLength: '95%',
                                rearLength: 0
                            }
                        }, {
                            id: 'second',
                            y: now.seconds,
                            dial: {
                                radius: '100%',
                                baseWidth: 1,
                                rearLength: '20%'
                            }
                        }],
                        animation: false,
                        dataLabels: {
                            enabled: false
                        }
                    }]
                },

                // Move
                function(chart) {
                    setInterval(function() {
                        var hour = chart.get('hour'),
                            minute = chart.get('minute'),
                            second = chart.get('second'),
                            now = getNow(),
                            animation = false;

                        if (now.seconds === 0) {
                            animation = {
                                easing: 'easeOutElastic'
                            };
                        }

                        // Cache the tooltip text
                        chart.tooltipText =
                            pad(Math.floor(now.hours), 2) + ':' +
                            pad(Math.floor(now.minutes * 5), 2) + ':' +
                            pad(now.seconds * 5, 2);

                        hour.update(now.hours, true, animation);
                        minute.update(now.minutes, true, animation);
                        second.update(now.seconds, true, animation);

                    }, 1000);

                });
        });

        // Extend jQuery with some easing (copied from jQuery UI)
        /*$.extend($.easing, {
            easeOutElastic: function (x, t, b, c, d) {
                var s=1.70158;var p=0;var a=c;
                if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
                if (a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
            }
        });*/

        /* Gauge with dual axes */
        $('#gauge-with-dual-axes').highcharts({
                chart: {
                    type: 'gauge',
                    alignTicks: false,
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },

                title: {
                    text: 'Speedometer with dual axes'
                },

                pane: {
                    startAngle: -150,
                    endAngle: 150
                },

                yAxis: [{
                    min: 0,
                    max: 200,
                    lineColor: '#339',
                    tickColor: '#339',
                    minorTickColor: '#339',
                    offset: -25,
                    lineWidth: 2,
                    labels: {
                        distance: -20,
                        rotation: 'auto'
                    },
                    tickLength: 5,
                    minorTickLength: 5,
                    endOnTick: false
                }, {
                    min: 0,
                    max: 124,
                    tickPosition: 'outside',
                    lineColor: '#933',
                    lineWidth: 2,
                    minorTickPosition: 'outside',
                    tickColor: '#933',
                    minorTickColor: '#933',
                    tickLength: 5,
                    minorTickLength: 5,
                    labels: {
                        distance: 12,
                        rotation: 'auto'
                    },
                    offset: -20,
                    endOnTick: false
                }],

                series: [{
                    name: 'Speed',
                    data: [80],
                    dataLabels: {
                        formatter: function() {
                            var kmh = this.y,
                                mph = Math.round(kmh * 0.621);
                            return '<span style="color:#339">' + kmh + ' km/h</span><br/>' + '<span style="color:#933">' + mph + ' mph</span>';
                        },
                        backgroundColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#DDD'],
                                [1, '#FFF']
                            ]
                        }
                    },
                    tooltip: {
                        valueSuffix: ' km/h'
                    }
                }]

            },
            // Add some life
            function(chart) {
                setInterval(function() {
                    var point = chart.series[0].points[0],
                        newVal, inc = Math.round((Math.random() - 0.5) * 20);

                    newVal = point.y + inc;
                    if (newVal < 0 || newVal > 200) {
                        newVal = point.y - inc;
                    }

                    point.update(newVal);

                }, 3000);

            });

        /* VU meter */
        $('#VU-meter').highcharts({
                chart: {
                    type: 'gauge',
                    plotBorderWidth: 1,
                    plotBackgroundColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, '#FFF4C6'],
                            [0.3, '#FFFFFF'],
                            [1, '#FFF4C6']
                        ]
                    },
                    plotBackgroundImage: null,
                    height: 200
                },

                title: {
                    text: 'VU meter'
                },

                pane: [{
                    startAngle: -45,
                    endAngle: 45,
                    background: null,
                    center: ['25%', '145%'],
                    size: 300
                }, {
                    startAngle: -45,
                    endAngle: 45,
                    background: null,
                    center: ['75%', '145%'],
                    size: 300
                }],

                yAxis: [{
                    min: -20,
                    max: 6,
                    minorTickPosition: 'outside',
                    tickPosition: 'outside',
                    labels: {
                        rotation: 'auto',
                        distance: 20
                    },
                    plotBands: [{
                        from: 0,
                        to: 6,
                        color: '#C02316',
                        innerRadius: '100%',
                        outerRadius: '105%'
                    }],
                    pane: 0,
                    title: {
                        text: 'VU<br/><span style="font-size:8px">Channel A</span>',
                        y: -40
                    }
                }, {
                    min: -20,
                    max: 6,
                    minorTickPosition: 'outside',
                    tickPosition: 'outside',
                    labels: {
                        rotation: 'auto',
                        distance: 20
                    },
                    plotBands: [{
                        from: 0,
                        to: 6,
                        color: '#C02316',
                        innerRadius: '100%',
                        outerRadius: '105%'
                    }],
                    pane: 1,
                    title: {
                        text: 'VU<br/><span style="font-size:8px">Channel B</span>',
                        y: -40
                    }
                }],

                plotOptions: {
                    gauge: {
                        dataLabels: {
                            enabled: false
                        },
                        dial: {
                            radius: '100%'
                        }
                    }
                },


                series: [{
                    data: [-20],
                    yAxis: 0
                }, {
                    data: [-20],
                    yAxis: 1
                }]

            },

            // Let the music play
            function(chart) {
                setInterval(function() {
                    var left = chart.series[0].points[0],
                        right = chart.series[1].points[0],
                        leftVal, rightVal,
                        inc = (Math.random() - 0.5) * 3;

                    leftVal = left.y + inc;
                    rightVal = leftVal + inc / 3;
                    if (leftVal < -20 || leftVal > 6) {
                        leftVal = left.y - inc;
                    }
                    if (rightVal < -20 || rightVal > 6) {
                        rightVal = leftVal;
                    }

                    left.update(leftVal, false);
                    right.update(rightVal, false);
                    chart.redraw();

                }, 500);

            });

        /* Polar chart */
        $('#polar-chart').highcharts({

            chart: {
                polar: true
            },

            title: {
                text: 'Highcharts Polar Chart'
            },

            pane: {
                startAngle: 0,
                endAngle: 360
            },

            xAxis: {
                tickInterval: 45,
                min: 0,
                max: 360,
                labels: {
                    formatter: function() {
                        return this.value + '°';
                    }
                }
            },

            yAxis: {
                min: 0
            },

            plotOptions: {
                series: {
                    pointStart: 0,
                    pointInterval: 45
                },
                column: {
                    pointPadding: 0,
                    groupPadding: 0
                }
            },

            series: [{
                type: 'column',
                name: 'Column',
                data: [8, 7, 6, 5, 4, 3, 2, 1],
                pointPlacement: 'between'
            }, {
                type: 'line',
                name: 'Line',
                data: [1, 2, 3, 4, 5, 6, 7, 8]
            }, {
                type: 'area',
                name: 'Area',
                data: [1, 8, 2, 7, 3, 6, 4, 5]
            }]
        });

        /* Spiderweb */
        $('#spiderweb').highcharts({

            chart: {
                polar: true,
                type: 'line'
            },

            title: {
                text: 'Budget vs spending',
                x: -80
            },

            pane: {
                size: '80%'
            },

            xAxis: {
                categories: ['Sales', 'Marketing', 'Development', 'Customer Support',
                    'Information Technology', 'Administration'
                ],
                tickmarkPlacement: 'on',
                lineWidth: 0
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },

            legend: {
                align: 'right',
                verticalAlign: 'top',
                y: 70,
                layout: 'vertical'
            },

            series: [{
                name: 'Allocated Budget',
                data: [43000, 19000, 60000, 35000, 17000, 10000],
                pointPlacement: 'on'
            }, {
                name: 'Actual Spending',
                data: [50000, 39000, 42000, 31000, 26000, 14000],
                pointPlacement: 'on'
            }]

        });

        /* Wind rose */
        $('#wind-rose').highcharts({
            data: {
                table: 'freq',
                startRow: 1,
                endRow: 17,
                endColumn: 7
            },

            chart: {
                polar: true,
                type: 'column'
            },

            title: {
                text: 'Wind rose for South Shore Met Station, Oregon'
            },

            subtitle: {
                text: 'Source: or.water.usgs.gov'
            },

            pane: {
                size: '85%'
            },

            legend: {
                reversed: true,
                align: 'right',
                verticalAlign: 'top',
                y: 100,
                layout: 'vertical'
            },

            xAxis: {
                tickmarkPlacement: 'on'
            },

            yAxis: {
                min: 0,
                endOnTick: false,
                showLastLabel: true,
                title: {
                    text: 'Frequency (%)'
                },
                labels: {
                    formatter: function() {
                        return this.value + '%';
                    }
                }
            },

            tooltip: {
                valueSuffix: '%',
                followPointer: true
            },

            plotOptions: {
                series: {
                    stacking: 'normal',
                    shadow: false,
                    groupPadding: 0,
                    pointPlacement: 'on'
                }
            }
        });

        /* Box plot */
        $('#box-plot').highcharts({

            chart: {
                type: 'boxplot'
            },

            title: {
                text: 'Highcharts Box Plot Example'
            },

            legend: {
                enabled: false
            },

            xAxis: {
                categories: ['1', '2', '3', '4', '5'],
                title: {
                    text: 'Experiment No.'
                }
            },

            yAxis: {
                title: {
                    text: 'Observations'
                },
                plotLines: [{
                    value: 932,
                    color: 'red',
                    width: 1,
                    label: {
                        text: 'Theoretical mean: 932',
                        align: 'center',
                        style: {
                            color: 'gray'
                        }
                    }
                }]
            },

            series: [{
                name: 'Observations',
                data: [
                    [760, 801, 848, 895, 965],
                    [733, 853, 939, 980, 1080],
                    [714, 762, 817, 870, 918],
                    [724, 802, 806, 871, 950],
                    [834, 836, 864, 882, 910]
                ],
                tooltip: {
                    headerFormat: '<em>Experiment No {point.key}</em><br/>'
                }
            }, {
                name: 'Outlier',
                color: Highcharts.getOptions().colors[0],
                type: 'scatter',
                data: [ // x, y positions where 0 is the first category
                    [0, 644],
                    [4, 718],
                    [4, 951],
                    [4, 969]
                ],
                marker: {
                    fillColor: 'white',
                    lineWidth: 1,
                    lineColor: Highcharts.getOptions().colors[0]
                },
                tooltip: {
                    pointFormat: 'Observation: {point.y}'
                }
            }]

        });

        /* Error bar */
        $('#error-bar').highcharts({
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Temperature vs Rainfall'
            },
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    formatter: function() {
                        return this.value + '°C';
                    },
                    style: {
                        color: '#89A54E'
                    }
                },
                title: {
                    text: 'Temperature',
                    style: {
                        color: '#89A54E'
                    }
                }
            }, { // Secondary yAxis
                title: {
                    text: 'Rainfall',
                    style: {
                        color: '#4572A7'
                    }
                },
                labels: {
                    formatter: function() {
                        return this.value + ' mm';
                    },
                    style: {
                        color: '#4572A7'
                    }
                },
                opposite: true
            }],

            tooltip: {
                shared: true
            },

            series: [{
                name: 'Rainfall',
                color: '#4572A7',
                type: 'column',
                yAxis: 1,
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                tooltip: {
                    pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f} mm</b> '
                }
            }, {
                name: 'Rainfall error',
                type: 'errorbar',
                yAxis: 1,
                data: [
                    [48, 51],
                    [68, 73],
                    [92, 110],
                    [128, 136],
                    [140, 150],
                    [171, 179],
                    [135, 143],
                    [142, 149],
                    [204, 220],
                    [189, 199],
                    [95, 110],
                    [52, 56]
                ],
                tooltip: {
                    pointFormat: '(error range: {point.low}-{point.high} mm)<br/>'
                }
            }, {
                name: 'Temperature',
                color: '#89A54E',
                type: 'spline',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                tooltip: {
                    pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}°C</b> '
                }
            }, {
                name: 'Temperature error',
                type: 'errorbar',
                data: [
                    [6, 8],
                    [5.9, 7.6],
                    [9.4, 10.4],
                    [14.1, 15.9],
                    [18.0, 20.1],
                    [21.0, 24.0],
                    [23.2, 25.3],
                    [26.1, 27.8],
                    [23.2, 23.9],
                    [18.0, 21.1],
                    [12.9, 14.0],
                    [7.6, 10.0]
                ],
                tooltip: {
                    pointFormat: '(error range: {point.low}-{point.high}°C)<br/>'
                }
            }]
        });

        /* Waterfall */
        $('#waterfall').highcharts({
            chart: {
                type: 'waterfall'
            },

            title: {
                text: 'Highcharts Waterfall'
            },

            xAxis: {
                type: 'category'
            },

            yAxis: {
                title: {
                    text: 'USD'
                }
            },

            legend: {
                enabled: false
            },

            tooltip: {
                pointFormat: '<b>${point.y:,.2f}</b> USD'
            },

            series: [{
                upColor: Highcharts.getOptions().colors[2],
                color: Highcharts.getOptions().colors[3],
                data: [{
                    name: 'Start',
                    y: 120000
                }, {
                    name: 'Product Revenue',
                    y: 569000
                }, {
                    name: 'Service Revenue',
                    y: 231000
                }, {
                    name: 'Positive Balance',
                    isIntermediateSum: true,
                    color: Highcharts.getOptions().colors[1]
                }, {
                    name: 'Fixed Costs',
                    y: -342000
                }, {
                    name: 'Variable Costs',
                    y: -233000
                }, {
                    name: 'Balance',
                    isSum: true,
                    color: Highcharts.getOptions().colors[1]
                }],
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
                    },
                    style: {
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        textShadow: '0px 0px 3px black'
                    }
                },
                pointPadding: 0
            }]
        });

        /* Funnel chart */
        $('#funnel-chart').highcharts({
            chart: {
                type: 'funnel',
                marginRight: 100
            },
            title: {
                text: 'Sales funnel',
                x: -50
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b> ({point.y:,.0f})',
                        color: 'black',
                        softConnector: true
                    },
                    neckWidth: '30%',
                    neckHeight: '25%'

                    //-- Other available options
                    // height: pixels or percent
                    // width: pixels or percent
                }
            },
            legend: {
                enabled: false
            },
            series: [{
                name: 'Unique users',
                data: [
                    ['Website visits', 15654],
                    ['Downloads', 4064],
                    ['Requested price list', 1987],
                    ['Invoice sent', 976],
                    ['Finalized', 846]
                ]
            }]
        });

        /* General drawing */
        $(function() {
            var chart = new Highcharts.Chart({
                chart: {
                    renderTo: 'general-drawing',
                    events: {
                        load: function() {

                            // Draw the flow chart
                            var ren = this.renderer,
                                colors = Highcharts.getOptions().colors,
                                rightArrow = ['M', 0, 0, 'L', 100, 0, 'L', 95, 5, 'M', 100, 0, 'L', 95, -5],
                                leftArrow = ['M', 100, 0, 'L', 0, 0, 'L', 5, 5, 'M', 0, 0, 'L', 5, -5];



                            // Separator, client from service
                            ren.path(['M', 120, 40, 'L', 120, 330])
                                .attr({
                                    'stroke-width': 2,
                                    stroke: 'silver',
                                    dashstyle: 'dash'
                                })
                                .add();

                            // Separator, CLI from service
                            ren.path(['M', 420, 40, 'L', 420, 330])
                                .attr({
                                    'stroke-width': 2,
                                    stroke: 'silver',
                                    dashstyle: 'dash'
                                })
                                .add();

                            // Headers
                            ren.label('Web client', 20, 40)
                                .css({
                                    fontWeight: 'bold'
                                })
                                .add();
                            ren.label('Web service / CLI', 220, 40)
                                .css({
                                    fontWeight: 'bold'
                                })
                                .add();
                            ren.label('Command line client', 440, 40)
                                .css({
                                    fontWeight: 'bold'
                                })
                                .add();

                            // SaaS client label
                            ren.label('SaaS client<br/>(browser or<br/>script)', 10, 82)
                                .attr({
                                    fill: colors[0],
                                    stroke: 'white',
                                    'stroke-width': 2,
                                    padding: 5,
                                    r: 5
                                })
                                .css({
                                    color: 'white'
                                })
                                .add()
                                .shadow(true);

                            // Arrow from SaaS client to Phantom JS
                            ren.path(rightArrow)
                                .attr({
                                    'stroke-width': 2,
                                    stroke: colors[3]
                                })
                                .translate(95, 95)
                                .add();

                            ren.label('POST options in JSON', 90, 75)
                                .css({
                                    fontSize: '10px',
                                    color: colors[3]
                                })
                                .add();

                            ren.label('PhantomJS', 210, 82)
                                .attr({
                                    r: 5,
                                    width: 100,
                                    fill: colors[1]
                                })
                                .css({
                                    color: 'white',
                                    fontWeight: 'bold'
                                })
                                .add();

                            // Arrow from Phantom JS to Batik
                            ren.path(['M', 250, 110, 'L', 250, 185, 'L', 245, 180, 'M', 250, 185, 'L', 255, 180])
                                .attr({
                                    'stroke-width': 2,
                                    stroke: colors[3]
                                })
                                .add();

                            ren.label('SVG', 255, 120)
                                .css({
                                    color: colors[3],
                                    fontSize: '10px'
                                })
                                .add();

                            ren.label('Batik', 210, 200)
                                .attr({
                                    r: 5,
                                    width: 100,
                                    fill: colors[1]
                                })
                                .css({
                                    color: 'white',
                                    fontWeight: 'bold'
                                })
                                .add();

                            // Arrow from Batik to SaaS client
                            ren.path(['M', 235, 185, 'L', 235, 155, 'C', 235, 130, 235, 130, 215, 130,
                                    'L', 95, 130, 'L', 100, 125, 'M', 95, 130, 'L', 100, 135
                                ])
                                .attr({
                                    'stroke-width': 2,
                                    stroke: colors[3]
                                })
                                .add();

                            ren.label('Rasterized image', 100, 110)
                                .css({
                                    color: colors[3],
                                    fontSize: '10px'
                                })
                                .add();

                            // Browser label
                            ren.label('Browser<br/>running<br/>Highcharts', 10, 180)
                                .attr({
                                    fill: colors[0],
                                    stroke: 'white',
                                    'stroke-width': 2,
                                    padding: 5,
                                    r: 5
                                })
                                .css({
                                    color: 'white',
                                    width: '100px'
                                })
                                .add()
                                .shadow(true);



                            // Arrow from Browser to Batik
                            ren.path(rightArrow)
                                .attr({
                                    'stroke-width': 2,
                                    stroke: colors[1]
                                })
                                .translate(95, 205)
                                .add();

                            ren.label('POST SVG', 110, 185)
                                .css({
                                    color: colors[1],
                                    fontSize: '10px'
                                })
                                .add();

                            // Arrow from Batik to Browser
                            ren.path(leftArrow)
                                .attr({
                                    'stroke-width': 2,
                                    stroke: colors[1]
                                })
                                .translate(95, 215)
                                .add();

                            ren.label('Rasterized image', 100, 215)
                                .css({
                                    color: colors[1],
                                    fontSize: '10px'
                                })
                                .add();

                            // Script label
                            ren.label('Script', 450, 82)
                                .attr({
                                    fill: colors[2],
                                    stroke: 'white',
                                    'stroke-width': 2,
                                    padding: 5,
                                    r: 5
                                })
                                .css({
                                    color: 'white',
                                    width: '100px'
                                })
                                .add()
                                .shadow(true);

                            // Arrow from Script to PhantomJS
                            ren.path(leftArrow)
                                .attr({
                                    'stroke-width': 2,
                                    stroke: colors[2]
                                })
                                .translate(330, 90)
                                .add();

                            ren.label('Command', 340, 70)
                                .css({
                                    color: colors[2],
                                    fontSize: '10px'
                                })
                                .add();

                            // Arrow from PhantomJS to Script
                            ren.path(rightArrow)
                                .attr({
                                    'stroke-width': 2,
                                    stroke: colors[2]
                                })
                                .translate(330, 100)
                                .add();

                            ren.label('Rasterized image', 330, 100)
                                .css({
                                    color: colors[2],
                                    fontSize: '10px'
                                })
                                .add();


                        }
                    }
                },
                title: {
                    text: 'Highcharts export server overview'
                }

            });
        });
    }, 50);

    //BEGIN PORTLET
    $(".portlet").each(function(index, element) {
        var me = $(this);
        $(">.portlet-header>.tools>i", me).click(function(e) {
            if ($(this).hasClass('fa-chevron-up')) {
                $(">.portlet-body", me).slideUp('fast');
                $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            } else if ($(this).hasClass('fa-chevron-down')) {
                $(">.portlet-body", me).slideDown('fast');
                $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else if ($(this).hasClass('fa-cog')) {
                //Show modal
            } else if ($(this).hasClass('fa-refresh')) {
                //$(">.portlet-body", me).hide();
                $(">.portlet-body", me).addClass('wait');

                setTimeout(function() {
                    //$(">.portlet-body>div", me).show();
                    $(">.portlet-body", me).removeClass('wait');
                }, 1000);
            } else if ($(this).hasClass('fa-times')) {
                me.remove();
            }
        });
    });
    //END PORTLET
});
App.controller('ChartsHighchartPieController', function($scope, $routeParams) {
    setTimeout(function() {
        /* Pie Chart */
        $('#pie-chart').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Browser market shares at a specific website, 2010'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['Firefox', 45.0],
                    ['IE', 26.8], {
                        name: 'Chrome',
                        y: 12.8,
                        sliced: true,
                        selected: true
                    },
                    ['Safari', 8.5],
                    ['Opera', 6.2],
                    ['Others', 0.7]
                ]
            }]
        });

        /* Pie with gradient fill */
        // Radialize the colors
        Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function(color) {
            return {
                radialGradient: {
                    cx: 0.5,
                    cy: 0.3,
                    r: 0.7
                },
                stops: [
                    [0, color],
                    [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
                ]
            };
        });

        // Build the chart
        $('#pie-with-gradient-fill').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Browser market shares at a specific website, 2010'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        formatter: function() {
                            return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['Firefox', 45.0],
                    ['IE', 26.8], {
                        name: 'Chrome',
                        y: 12.8,
                        sliced: true,
                        selected: true
                    },
                    ['Safari', 8.5],
                    ['Opera', 6.2],
                    ['Others', 0.7]
                ]
            }]
        });

        /* Pie with legend */
        $('#pie-with-legend').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Browser market shares at a specific website, 2010'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                    ['Firefox', 45.0],
                    ['IE', 26.8], {
                        name: 'Chrome',
                        y: 12.8,
                        sliced: true,
                        selected: true
                    },
                    ['Safari', 8.5],
                    ['Opera', 6.2],
                    ['Others', 0.7]
                ]
            }]
        });

        /* Donut chart */
        var colors = Highcharts.getOptions().colors,
            categories = ['MSIE', 'Firefox', 'Chrome', 'Safari', 'Opera'],
            name = 'Browser brands',
            data = [{
                y: 55.11,
                color: colors[0],
                drilldown: {
                    name: 'MSIE versions',
                    categories: ['MSIE 6.0', 'MSIE 7.0', 'MSIE 8.0', 'MSIE 9.0'],
                    data: [10.85, 7.35, 33.06, 2.81],
                    color: colors[0]
                }
            }, {
                y: 21.63,
                color: colors[1],
                drilldown: {
                    name: 'Firefox versions',
                    categories: ['Firefox 2.0', 'Firefox 3.0', 'Firefox 3.5', 'Firefox 3.6', 'Firefox 4.0'],
                    data: [0.20, 0.83, 1.58, 13.12, 5.43],
                    color: colors[1]
                }
            }, {
                y: 11.94,
                color: colors[2],
                drilldown: {
                    name: 'Chrome versions',
                    categories: ['Chrome 5.0', 'Chrome 6.0', 'Chrome 7.0', 'Chrome 8.0', 'Chrome 9.0',
                        'Chrome 10.0', 'Chrome 11.0', 'Chrome 12.0'
                    ],
                    data: [0.12, 0.19, 0.12, 0.36, 0.32, 9.91, 0.50, 0.22],
                    color: colors[2]
                }
            }, {
                y: 7.15,
                color: colors[3],
                drilldown: {
                    name: 'Safari versions',
                    categories: ['Safari 5.0', 'Safari 4.0', 'Safari Win 5.0', 'Safari 4.1', 'Safari/Maxthon',
                        'Safari 3.1', 'Safari 4.1'
                    ],
                    data: [4.55, 1.42, 0.23, 0.21, 0.20, 0.19, 0.14],
                    color: colors[3]
                }
            }, {
                y: 2.14,
                color: colors[4],
                drilldown: {
                    name: 'Opera versions',
                    categories: ['Opera 9.x', 'Opera 10.x', 'Opera 11.x'],
                    data: [0.12, 0.37, 1.65],
                    color: colors[4]
                }
            }];


        // Build the data arrays
        var browserData = [];
        var versionsData = [];
        for (var i = 0; i < data.length; i++) {

            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });

            // add version data
            for (var j = 0; j < data[i].drilldown.data.length; j++) {
                var brightness = 0.2 - (j / data[i].drilldown.data.length) / 5;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.Color(data[i].color).brighten(brightness).get()
                });
            }
        }

        // Create the chart
        $('#donut-chart').highcharts({
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Browser market share, April, 2011'
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            series: [{
                name: 'Browsers',
                data: browserData,
                size: '60%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'white',
                    distance: -30
                }
            }, {
                name: 'Versions',
                data: versionsData,
                size: '80%',
                innerSize: '60%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1
                        return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
                    }
                }
            }]
        });

        /* Semi circle donut */
        $('#semi-circle-donut').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: 'Browser<br>shares',
                align: 'center',
                verticalAlign: 'middle',
                y: 50
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white',
                            textShadow: '0px 1px 2px black'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%']
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                innerSize: '50%',
                data: [
                    ['Firefox', 45.0],
                    ['IE', 26.8],
                    ['Chrome', 12.8],
                    ['Safari', 8.5],
                    ['Opera', 6.2],
                    ['Others', 0.7]
                ]
            }]
        });
    }, 50);

    //BEGIN PORTLET
    $(".portlet").each(function(index, element) {
        var me = $(this);
        $(">.portlet-header>.tools>i", me).click(function(e) {
            if ($(this).hasClass('fa-chevron-up')) {
                $(">.portlet-body", me).slideUp('fast');
                $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            } else if ($(this).hasClass('fa-chevron-down')) {
                $(">.portlet-body", me).slideDown('fast');
                $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else if ($(this).hasClass('fa-cog')) {
                //Show modal
            } else if ($(this).hasClass('fa-refresh')) {
                //$(">.portlet-body", me).hide();
                $(">.portlet-body", me).addClass('wait');

                setTimeout(function() {
                    //$(">.portlet-body>div", me).show();
                    $(">.portlet-body", me).removeClass('wait');
                }, 1000);
            } else if ($(this).hasClass('fa-times')) {
                me.remove();
            }
        });
    });
    //END PORTLET
});
App.controller('ChartsHighchartScatterBubbleController', function($scope, $routeParams) {
    setTimeout(function() {
        $('#scatter-plot').highcharts({
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Height Versus Weight of 507 Individuals by Gender'
            },
            subtitle: {
                text: 'Source: Heinz  2003'
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Height (cm)'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Weight (kg)'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                backgroundColor: '#FFFFFF',
                borderWidth: 1
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: '{point.x} cm, {point.y} kg'
                    }
                }
            },
            series: [{
                name: 'Female',
                color: 'rgba(223, 83, 83, .5)',
                data: [
                    [161.2, 51.6],
                    [167.5, 59.0],
                    [159.5, 49.2],
                    [157.0, 63.0],
                    [155.8, 53.6],
                    [170.0, 59.0],
                    [159.1, 47.6],
                    [166.0, 69.8],
                    [176.2, 66.8],
                    [160.2, 75.2],
                    [172.5, 55.2],
                    [170.9, 54.2],
                    [172.9, 62.5],
                    [153.4, 42.0],
                    [160.0, 50.0],
                    [147.2, 49.8],
                    [168.2, 49.2],
                    [175.0, 73.2],
                    [157.0, 47.8],
                    [167.6, 68.8],
                    [159.5, 50.6],
                    [175.0, 82.5],
                    [166.8, 57.2],
                    [176.5, 87.8],
                    [170.2, 72.8],
                    [174.0, 54.5],
                    [173.0, 59.8],
                    [179.9, 67.3],
                    [170.5, 67.8],
                    [160.0, 47.0],
                    [154.4, 46.2],
                    [162.0, 55.0],
                    [176.5, 83.0],
                    [160.0, 54.4],
                    [152.0, 45.8],
                    [162.1, 53.6],
                    [170.0, 73.2],
                    [160.2, 52.1],
                    [161.3, 67.9],
                    [166.4, 56.6],
                    [168.9, 62.3],
                    [163.8, 58.5],
                    [167.6, 54.5],
                    [160.0, 50.2],
                    [161.3, 60.3],
                    [167.6, 58.3],
                    [165.1, 56.2],
                    [160.0, 50.2],
                    [170.0, 72.9],
                    [157.5, 59.8],
                    [167.6, 61.0],
                    [160.7, 69.1],
                    [163.2, 55.9],
                    [152.4, 46.5],
                    [157.5, 54.3],
                    [168.3, 54.8],
                    [180.3, 60.7],
                    [165.5, 60.0],
                    [165.0, 62.0],
                    [164.5, 60.3],
                    [156.0, 52.7],
                    [160.0, 74.3],
                    [163.0, 62.0],
                    [165.7, 73.1],
                    [161.0, 80.0],
                    [162.0, 54.7],
                    [166.0, 53.2],
                    [174.0, 75.7],
                    [172.7, 61.1],
                    [167.6, 55.7],
                    [151.1, 48.7],
                    [164.5, 52.3],
                    [163.5, 50.0],
                    [152.0, 59.3],
                    [169.0, 62.5],
                    [164.0, 55.7],
                    [161.2, 54.8],
                    [155.0, 45.9],
                    [170.0, 70.6],
                    [176.2, 67.2],
                    [170.0, 69.4],
                    [162.5, 58.2],
                    [170.3, 64.8],
                    [164.1, 71.6],
                    [169.5, 52.8],
                    [163.2, 59.8],
                    [154.5, 49.0],
                    [159.8, 50.0],
                    [173.2, 69.2],
                    [170.0, 55.9],
                    [161.4, 63.4],
                    [169.0, 58.2],
                    [166.2, 58.6],
                    [159.4, 45.7],
                    [162.5, 52.2],
                    [159.0, 48.6],
                    [162.8, 57.8],
                    [159.0, 55.6],
                    [179.8, 66.8],
                    [162.9, 59.4],
                    [161.0, 53.6],
                    [151.1, 73.2],
                    [168.2, 53.4],
                    [168.9, 69.0],
                    [173.2, 58.4],
                    [171.8, 56.2],
                    [178.0, 70.6],
                    [164.3, 59.8],
                    [163.0, 72.0],
                    [168.5, 65.2],
                    [166.8, 56.6],
                    [172.7, 105.2],
                    [163.5, 51.8],
                    [169.4, 63.4],
                    [167.8, 59.0],
                    [159.5, 47.6],
                    [167.6, 63.0],
                    [161.2, 55.2],
                    [160.0, 45.0],
                    [163.2, 54.0],
                    [162.2, 50.2],
                    [161.3, 60.2],
                    [149.5, 44.8],
                    [157.5, 58.8],
                    [163.2, 56.4],
                    [172.7, 62.0],
                    [155.0, 49.2],
                    [156.5, 67.2],
                    [164.0, 53.8],
                    [160.9, 54.4],
                    [162.8, 58.0],
                    [167.0, 59.8],
                    [160.0, 54.8],
                    [160.0, 43.2],
                    [168.9, 60.5],
                    [158.2, 46.4],
                    [156.0, 64.4],
                    [160.0, 48.8],
                    [167.1, 62.2],
                    [158.0, 55.5],
                    [167.6, 57.8],
                    [156.0, 54.6],
                    [162.1, 59.2],
                    [173.4, 52.7],
                    [159.8, 53.2],
                    [170.5, 64.5],
                    [159.2, 51.8],
                    [157.5, 56.0],
                    [161.3, 63.6],
                    [162.6, 63.2],
                    [160.0, 59.5],
                    [168.9, 56.8],
                    [165.1, 64.1],
                    [162.6, 50.0],
                    [165.1, 72.3],
                    [166.4, 55.0],
                    [160.0, 55.9],
                    [152.4, 60.4],
                    [170.2, 69.1],
                    [162.6, 84.5],
                    [170.2, 55.9],
                    [158.8, 55.5],
                    [172.7, 69.5],
                    [167.6, 76.4],
                    [162.6, 61.4],
                    [167.6, 65.9],
                    [156.2, 58.6],
                    [175.2, 66.8],
                    [172.1, 56.6],
                    [162.6, 58.6],
                    [160.0, 55.9],
                    [165.1, 59.1],
                    [182.9, 81.8],
                    [166.4, 70.7],
                    [165.1, 56.8],
                    [177.8, 60.0],
                    [165.1, 58.2],
                    [175.3, 72.7],
                    [154.9, 54.1],
                    [158.8, 49.1],
                    [172.7, 75.9],
                    [168.9, 55.0],
                    [161.3, 57.3],
                    [167.6, 55.0],
                    [165.1, 65.5],
                    [175.3, 65.5],
                    [157.5, 48.6],
                    [163.8, 58.6],
                    [167.6, 63.6],
                    [165.1, 55.2],
                    [165.1, 62.7],
                    [168.9, 56.6],
                    [162.6, 53.9],
                    [164.5, 63.2],
                    [176.5, 73.6],
                    [168.9, 62.0],
                    [175.3, 63.6],
                    [159.4, 53.2],
                    [160.0, 53.4],
                    [170.2, 55.0],
                    [162.6, 70.5],
                    [167.6, 54.5],
                    [162.6, 54.5],
                    [160.7, 55.9],
                    [160.0, 59.0],
                    [157.5, 63.6],
                    [162.6, 54.5],
                    [152.4, 47.3],
                    [170.2, 67.7],
                    [165.1, 80.9],
                    [172.7, 70.5],
                    [165.1, 60.9],
                    [170.2, 63.6],
                    [170.2, 54.5],
                    [170.2, 59.1],
                    [161.3, 70.5],
                    [167.6, 52.7],
                    [167.6, 62.7],
                    [165.1, 86.3],
                    [162.6, 66.4],
                    [152.4, 67.3],
                    [168.9, 63.0],
                    [170.2, 73.6],
                    [175.2, 62.3],
                    [175.2, 57.7],
                    [160.0, 55.4],
                    [165.1, 104.1],
                    [174.0, 55.5],
                    [170.2, 77.3],
                    [160.0, 80.5],
                    [167.6, 64.5],
                    [167.6, 72.3],
                    [167.6, 61.4],
                    [154.9, 58.2],
                    [162.6, 81.8],
                    [175.3, 63.6],
                    [171.4, 53.4],
                    [157.5, 54.5],
                    [165.1, 53.6],
                    [160.0, 60.0],
                    [174.0, 73.6],
                    [162.6, 61.4],
                    [174.0, 55.5],
                    [162.6, 63.6],
                    [161.3, 60.9],
                    [156.2, 60.0],
                    [149.9, 46.8],
                    [169.5, 57.3],
                    [160.0, 64.1],
                    [175.3, 63.6],
                    [169.5, 67.3],
                    [160.0, 75.5],
                    [172.7, 68.2],
                    [162.6, 61.4],
                    [157.5, 76.8],
                    [176.5, 71.8],
                    [164.4, 55.5],
                    [160.7, 48.6],
                    [174.0, 66.4],
                    [163.8, 67.3]
                ]

            }, {
                name: 'Male',
                color: 'rgba(119, 152, 191, .5)',
                data: [
                    [174.0, 65.6],
                    [175.3, 71.8],
                    [193.5, 80.7],
                    [186.5, 72.6],
                    [187.2, 78.8],
                    [181.5, 74.8],
                    [184.0, 86.4],
                    [184.5, 78.4],
                    [175.0, 62.0],
                    [184.0, 81.6],
                    [180.0, 76.6],
                    [177.8, 83.6],
                    [192.0, 90.0],
                    [176.0, 74.6],
                    [174.0, 71.0],
                    [184.0, 79.6],
                    [192.7, 93.8],
                    [171.5, 70.0],
                    [173.0, 72.4],
                    [176.0, 85.9],
                    [176.0, 78.8],
                    [180.5, 77.8],
                    [172.7, 66.2],
                    [176.0, 86.4],
                    [173.5, 81.8],
                    [178.0, 89.6],
                    [180.3, 82.8],
                    [180.3, 76.4],
                    [164.5, 63.2],
                    [173.0, 60.9],
                    [183.5, 74.8],
                    [175.5, 70.0],
                    [188.0, 72.4],
                    [189.2, 84.1],
                    [172.8, 69.1],
                    [170.0, 59.5],
                    [182.0, 67.2],
                    [170.0, 61.3],
                    [177.8, 68.6],
                    [184.2, 80.1],
                    [186.7, 87.8],
                    [171.4, 84.7],
                    [172.7, 73.4],
                    [175.3, 72.1],
                    [180.3, 82.6],
                    [182.9, 88.7],
                    [188.0, 84.1],
                    [177.2, 94.1],
                    [172.1, 74.9],
                    [167.0, 59.1],
                    [169.5, 75.6],
                    [174.0, 86.2],
                    [172.7, 75.3],
                    [182.2, 87.1],
                    [164.1, 55.2],
                    [163.0, 57.0],
                    [171.5, 61.4],
                    [184.2, 76.8],
                    [174.0, 86.8],
                    [174.0, 72.2],
                    [177.0, 71.6],
                    [186.0, 84.8],
                    [167.0, 68.2],
                    [171.8, 66.1],
                    [182.0, 72.0],
                    [167.0, 64.6],
                    [177.8, 74.8],
                    [164.5, 70.0],
                    [192.0, 101.6],
                    [175.5, 63.2],
                    [171.2, 79.1],
                    [181.6, 78.9],
                    [167.4, 67.7],
                    [181.1, 66.0],
                    [177.0, 68.2],
                    [174.5, 63.9],
                    [177.5, 72.0],
                    [170.5, 56.8],
                    [182.4, 74.5],
                    [197.1, 90.9],
                    [180.1, 93.0],
                    [175.5, 80.9],
                    [180.6, 72.7],
                    [184.4, 68.0],
                    [175.5, 70.9],
                    [180.6, 72.5],
                    [177.0, 72.5],
                    [177.1, 83.4],
                    [181.6, 75.5],
                    [176.5, 73.0],
                    [175.0, 70.2],
                    [174.0, 73.4],
                    [165.1, 70.5],
                    [177.0, 68.9],
                    [192.0, 102.3],
                    [176.5, 68.4],
                    [169.4, 65.9],
                    [182.1, 75.7],
                    [179.8, 84.5],
                    [175.3, 87.7],
                    [184.9, 86.4],
                    [177.3, 73.2],
                    [167.4, 53.9],
                    [178.1, 72.0],
                    [168.9, 55.5],
                    [157.2, 58.4],
                    [180.3, 83.2],
                    [170.2, 72.7],
                    [177.8, 64.1],
                    [172.7, 72.3],
                    [165.1, 65.0],
                    [186.7, 86.4],
                    [165.1, 65.0],
                    [174.0, 88.6],
                    [175.3, 84.1],
                    [185.4, 66.8],
                    [177.8, 75.5],
                    [180.3, 93.2],
                    [180.3, 82.7],
                    [177.8, 58.0],
                    [177.8, 79.5],
                    [177.8, 78.6],
                    [177.8, 71.8],
                    [177.8, 116.4],
                    [163.8, 72.2],
                    [188.0, 83.6],
                    [198.1, 85.5],
                    [175.3, 90.9],
                    [166.4, 85.9],
                    [190.5, 89.1],
                    [166.4, 75.0],
                    [177.8, 77.7],
                    [179.7, 86.4],
                    [172.7, 90.9],
                    [190.5, 73.6],
                    [185.4, 76.4],
                    [168.9, 69.1],
                    [167.6, 84.5],
                    [175.3, 64.5],
                    [170.2, 69.1],
                    [190.5, 108.6],
                    [177.8, 86.4],
                    [190.5, 80.9],
                    [177.8, 87.7],
                    [184.2, 94.5],
                    [176.5, 80.2],
                    [177.8, 72.0],
                    [180.3, 71.4],
                    [171.4, 72.7],
                    [172.7, 84.1],
                    [172.7, 76.8],
                    [177.8, 63.6],
                    [177.8, 80.9],
                    [182.9, 80.9],
                    [170.2, 85.5],
                    [167.6, 68.6],
                    [175.3, 67.7],
                    [165.1, 66.4],
                    [185.4, 102.3],
                    [181.6, 70.5],
                    [172.7, 95.9],
                    [190.5, 84.1],
                    [179.1, 87.3],
                    [175.3, 71.8],
                    [170.2, 65.9],
                    [193.0, 95.9],
                    [171.4, 91.4],
                    [177.8, 81.8],
                    [177.8, 96.8],
                    [167.6, 69.1],
                    [167.6, 82.7],
                    [180.3, 75.5],
                    [182.9, 79.5],
                    [176.5, 73.6],
                    [186.7, 91.8],
                    [188.0, 84.1],
                    [188.0, 85.9],
                    [177.8, 81.8],
                    [174.0, 82.5],
                    [177.8, 80.5],
                    [171.4, 70.0],
                    [185.4, 81.8],
                    [185.4, 84.1],
                    [188.0, 90.5],
                    [188.0, 91.4],
                    [182.9, 89.1],
                    [176.5, 85.0],
                    [175.3, 69.1],
                    [175.3, 73.6],
                    [188.0, 80.5],
                    [188.0, 82.7],
                    [175.3, 86.4],
                    [170.5, 67.7],
                    [179.1, 92.7],
                    [177.8, 93.6],
                    [175.3, 70.9],
                    [182.9, 75.0],
                    [170.8, 93.2],
                    [188.0, 93.2],
                    [180.3, 77.7],
                    [177.8, 61.4],
                    [185.4, 94.1],
                    [168.9, 75.0],
                    [185.4, 83.6],
                    [180.3, 85.5],
                    [174.0, 73.9],
                    [167.6, 66.8],
                    [182.9, 87.3],
                    [160.0, 72.3],
                    [180.3, 88.6],
                    [167.6, 75.5],
                    [186.7, 101.4],
                    [175.3, 91.1],
                    [175.3, 67.3],
                    [175.9, 77.7],
                    [175.3, 81.8],
                    [179.1, 75.5],
                    [181.6, 84.5],
                    [177.8, 76.6],
                    [182.9, 85.0],
                    [177.8, 102.5],
                    [184.2, 77.3],
                    [179.1, 71.8],
                    [176.5, 87.9],
                    [188.0, 94.3],
                    [174.0, 70.9],
                    [167.6, 64.5],
                    [170.2, 77.3],
                    [167.6, 72.3],
                    [188.0, 87.3],
                    [174.0, 80.0],
                    [176.5, 82.3],
                    [180.3, 73.6],
                    [167.6, 74.1],
                    [188.0, 85.9],
                    [180.3, 73.2],
                    [167.6, 76.3],
                    [183.0, 65.9],
                    [183.0, 90.9],
                    [179.1, 89.1],
                    [170.2, 62.3],
                    [177.8, 82.7],
                    [179.1, 79.1],
                    [190.5, 98.2],
                    [177.8, 84.1],
                    [180.3, 83.2],
                    [180.3, 83.2]
                ]
            }]
        });

        /* Bubble chart */
        $('#bubble-chart').highcharts({
            chart: {
                type: 'bubble',
                zoomType: 'xy'
            },

            title: {
                text: 'Highcharts Bubbles'
            },

            series: [{
                data: [
                    [97, 36, 79],
                    [94, 74, 60],
                    [68, 76, 58],
                    [64, 87, 56],
                    [68, 27, 73],
                    [74, 99, 42],
                    [7, 93, 87],
                    [51, 69, 40],
                    [38, 23, 33],
                    [57, 86, 31]
                ]
            }, {
                data: [
                    [25, 10, 87],
                    [2, 75, 59],
                    [11, 54, 8],
                    [86, 55, 93],
                    [5, 3, 58],
                    [90, 63, 44],
                    [91, 33, 17],
                    [97, 3, 56],
                    [15, 67, 48],
                    [54, 25, 81]
                ]
            }, {
                data: [
                    [47, 47, 21],
                    [20, 12, 4],
                    [6, 76, 91],
                    [38, 30, 60],
                    [57, 98, 64],
                    [61, 17, 80],
                    [83, 60, 13],
                    [67, 78, 75],
                    [64, 12, 10],
                    [30, 77, 82]
                ]
            }]

        });

        /* 3D bubbles */
        $('#threeD-bubbles').highcharts({

            chart: {
                type: 'bubble',
                plotBorderWidth: 1,
                zoomType: 'xy'
            },

            title: {
                text: 'Highcharts bubbles with radial gradient fill'
            },

            xAxis: {
                gridLineWidth: 1
            },

            yAxis: {
                startOnTick: false,
                endOnTick: false
            },

            series: [{
                data: [
                    [9, 81, 63],
                    [98, 5, 89],
                    [51, 50, 73],
                    [41, 22, 14],
                    [58, 24, 20],
                    [78, 37, 34],
                    [55, 56, 53],
                    [18, 45, 70],
                    [42, 44, 28],
                    [3, 52, 59],
                    [31, 18, 97],
                    [79, 91, 63],
                    [93, 23, 23],
                    [44, 83, 22]
                ],
                marker: {
                    fillColor: {
                        radialGradient: {
                            cx: 0.4,
                            cy: 0.3,
                            r: 0.7
                        },
                        stops: [
                            [0, 'rgba(255,255,255,0.5)'],
                            [1, 'rgba(69,114,167,0.5)']
                        ]
                    }
                }
            }, {
                data: [
                    [42, 38, 20],
                    [6, 18, 1],
                    [1, 93, 55],
                    [57, 2, 90],
                    [80, 76, 22],
                    [11, 74, 96],
                    [88, 56, 10],
                    [30, 47, 49],
                    [57, 62, 98],
                    [4, 16, 16],
                    [46, 10, 11],
                    [22, 87, 89],
                    [57, 91, 82],
                    [45, 15, 98]
                ],
                marker: {
                    fillColor: {
                        radialGradient: {
                            cx: 0.4,
                            cy: 0.3,
                            r: 0.7
                        },
                        stops: [
                            [0, 'rgba(255,255,255,0.5)'],
                            [1, 'rgba(170,70,67,0.5)']
                        ]
                    }
                }
            }]

        });
    }, 50);

    //BEGIN PORTLET
    $(".portlet").each(function(index, element) {
        var me = $(this);
        $(">.portlet-header>.tools>i", me).click(function(e) {
            if ($(this).hasClass('fa-chevron-up')) {
                $(">.portlet-body", me).slideUp('fast');
                $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            } else if ($(this).hasClass('fa-chevron-down')) {
                $(">.portlet-body", me).slideDown('fast');
                $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else if ($(this).hasClass('fa-cog')) {
                //Show modal
            } else if ($(this).hasClass('fa-refresh')) {
                //$(">.portlet-body", me).hide();
                $(">.portlet-body", me).addClass('wait');

                setTimeout(function() {
                    //$(">.portlet-body>div", me).show();
                    $(">.portlet-body", me).removeClass('wait');
                }, 1000);
            } else if ($(this).hasClass('fa-times')) {
                me.remove();
            }
        });
    });
    //END PORTLET
});;
(function($) {
    $.fn.Data = function() {};
    var $this = $.fn.Data;

    $.fn.Data.pages = {
        '/index': {
            title: 'Dashboard',
            'breadcrumb': ['Dashboard']
        },
        '/layout-left-sidebar': {
            title: 'Left Sidebar',
            'breadcrumb': ['Layouts', 'Left Sidebar']
        },
        '/layout-left-sidebar-collapsed': {
            title: 'Left Sidebar Collapsed',
            'breadcrumb': ['Layouts', 'Left Sidebar Collapsed']
        },
        '/layout-right-sidebar': {
            title: 'Right Sidebar',
            'breadcrumb': ['Layouts', 'Right Sidebar']
        },
        '/layout-right-sidebar-collapsed': {
            title: 'Right Sidebar Collapsed',
            'breadcrumb': ['Layouts', 'Right Sidebar Collapsed']
        },
        '/layout-horizontal-menu': {
            title: 'Horizontal Menu',
            'breadcrumb': ['Layouts', 'Horizontal Menu']
        },
        '/layout-horizontal-menu-sidebar': {
            title: 'Horizontal Menu & Sidebar',
            'breadcrumb': ['Layouts', 'Horizontal Menu & Sidebar']
        },
        '/layout-boxed': {
            title: 'Boxed Layout',
            'breadcrumb': ['Layouts', 'Boxed Layout']
        },
        '/layout-fixed-topbar': {
            title: 'Fixed Topbar',
            'breadcrumb': ['Layouts', 'Fixed Topbar']
        },
        '/layout-hidden-footer': {
            title: 'Hidden Footer',
            'breadcrumb': ['Layouts', 'Hidden Footer']
        },
        '/layout-header-topbar': {
            title: 'Header Topbar',
            'breadcrumb': ['Layouts', 'Header Topbar']
        },
        '/layout-title-breadcrumb': {
            title: 'Title & Breadcrumb',
            'breadcrumb': ['Layouts', 'Title & Breadcrumb']
        },
        '/ui-generals': {
            title: 'Generals',
            'breadcrumb': ['UI', 'Generals']
        },
        '/ui-buttons': {
            title: 'Buttons',
            'breadcrumb': ['UI', 'Buttons']
        },
        '/ui-panels': {
            title: 'Panels',
            'breadcrumb': ['UI', 'Panels']
        },
        '/ui-tabs': {
            title: 'Tabs',
            'breadcrumb': ['UI', 'Tabs']
        },
        '/ui-progressbars': {
            title: 'Progress Bars',
            'breadcrumb': ['UI', 'Progress Bars']
        },
        '/ui-sliders': {
            title: 'Sliders',
            'breadcrumb': ['UI', 'Sliders']
        },
        '/ui-editors': {
            title: 'Editors',
            'breadcrumb': ['UI', 'Editors']
        },
        '/ui-modals': {
            title: 'Modals',
            'breadcrumb': ['UI', 'Modals']
        },
        '/ui-icons': {
            title: 'Icons',
            'breadcrumb': ['UI', 'Icons']
        },
        '/ui-typography': {
            title: 'Typography',
            'breadcrumb': ['UI', 'Typography']
        },
        '/ui-notific8-notifications': {
            title: 'Notific8 & Sco.message',
            'breadcrumb': ['UI', 'Notific8 & Sco.message']
        },
        '/ui-toastr-notifications': {
            title: 'Toastr Notifications',
            'breadcrumb': ['UI', 'Toastr Notifications']
        },
        '/ui-checkbox-radio': {
            title: 'Checkbox & Radio',
            'breadcrumb': ['UI', 'Checkbox & Radio']
        },
        '/ui-treeview': {
            title: 'Tree View',
            'breadcrumb': ['UI', 'Tree View']
        },
        '/ui-portlets': {
            title: 'Portlets',
            'breadcrumb': ['UI', 'Portlets']
        },
        '/ui-nestable-list': {
            title: 'Nestable List',
            'breadcrumb': ['UI', 'Nestable List']
        },
        '/ui-dropdown-select': {
            title: 'Dropdown Select',
            'breadcrumb': ['UI', 'Dropdown Select']
        },
        '/form-layouts': {
            title: 'Form Layouts',
            'breadcrumb': ['Forms', 'Form Layouts']
        },
        '/form-basic': {
            title: 'Basic Forms',
            'breadcrumb': ['Forms', 'Basic Forms']
        },
        '/form-components': {
            title: 'Form Components',
            'breadcrumb': ['Forms', 'Form Components']
        },
        '/form-wizard': {
            title: 'Form Wizard',
            'breadcrumb': ['Forms', 'Form Wizard']
        },
        '/form-xeditable': {
            title: 'Form Xeditable',
            'breadcrumb': ['Forms', 'Form Xeditable']
        },
        '/form-validation': {
            title: 'Form Validation',
            'breadcrumb': ['Forms', 'Form Validation']
        },
        '/form-multiple-file-upload': {
            title: 'Multiple File Upload',
            'breadcrumb': ['Forms', 'Multiple File Upload']
        },
        '/form-dropzone-file-upload': {
            title: 'Dropzone File Upload',
            'breadcrumb': ['Forms', 'Dropzone File Upload']
        },
        '/frontend-one-page': {
            title: 'One Page',
            'breadcrumb': ['Frontend', 'One Page']
        },
        '/table-basic': {
            title: 'Basic Tables',
            'breadcrumb': ['Tables', 'Basic Tables']
        },
        '/table-responsive': {
            title: 'Responsive Tables',
            'breadcrumb': ['Tables', 'Responsive Tables']
        },
        '/table-action': {
            title: 'Action Tables',
            'breadcrumb': ['Tables', 'Action Tables']
        },
        '/table-editable': {
            title: 'Edit Tables',
            'breadcrumb': ['Tables', 'Edit Tables']
        },
        '/table-datatables': {
            title: 'DataTables',
            'breadcrumb': ['Tables', 'DataTables']
        },
        '/table-filter': {
            title: 'Filter Tables',
            'breadcrumb': ['Tables', 'Filter Tables']
        },
        '/table-advanced': {
            title: 'Tables Advanced',
            'breadcrumb': ['Tables', 'Tables Advanced']
        },
        '/table-sample': {
            title: 'Sample Tables',
            'breadcrumb': ['Tables', 'Sample Tables']
        },
        '/table-export': {
            title: 'Export Tables',
            'breadcrumb': ['Tables', 'Export Tables']
        },
        '/grid-layout-div': {
            title: 'DIVs Layout',
            'breadcrumb': ['Grids', 'DIVs Layout']
        },
        '/grid-layout-table-1': {
            title: 'Table Demo 1',
            'breadcrumb': ['Grids', 'Table Demo 1']
        },
        '/grid-layout-table-2': {
            title: 'Table Demo 2',
            'breadcrumb': ['Grids', 'Table Demo 2']
        },
        '/grid-layout-2-table': {
            title: 'Two Tables',
            'breadcrumb': ['Grids', 'Two Tables']
        },
        '/grid-layout-ul-li': {
            title: 'UL LI',
            'breadcrumb': ['Grids', 'UL LI']
        },
        '/grid-filter-with-ul-li': {
            title: 'Dropdown Filters With UL/LI',
            'breadcrumb': ['Grids', 'Dropdown Filters With UL/LI']
        },
        '/grid-filter-with-select': {
            title: 'Dropdown Filters With SELECT',
            'breadcrumb': ['Grids', 'Dropdown Filters With SELECT']
        },
        '/grid-double-sort': {
            title: 'Double Sort',
            'breadcrumb': ['Grids', 'Double Sort']
        },
        '/grid-deep-linking': {
            title: 'Deep Linking',
            'breadcrumb': ['Grids', 'Deep Linking']
        },
        '/grid-pagination-only': {
            title: 'Pagination Only',
            'breadcrumb': ['Grids', 'Pagination Only']
        },
        '/grid-without-item-per-page': {
            title: 'Pagination Without \'Items per Page\' Dropdown',
            'breadcrumb': ['Grids', 'Pagination Without \'Items per Page\' Dropdown']
        },
        '/grid-hidden-sort': {
            title: 'Hidden Sort',
            'breadcrumb': ['Grids', 'Hidden Sort']
        },
        '/grid-range-slider': {
            title: 'jQuery UI - Range Slider',
            'breadcrumb': ['Grids', 'jQuery UI - Range Slider']
        },
        '/grid-datepicker': {
            title: 'jQuery UI - Date Picker Filter',
            'breadcrumb': ['Grids', 'jQuery UI - Date Picker Filter']
        },
        '/page-gallery': {
            title: 'Gallery Page',
            'breadcrumb': ['Pages', 'Gallery Page']
        },
        '/page-timeline': {
            title: 'TimeLine Page',
            'breadcrumb': ['Pages', 'TimeLine Page']
        },
        '/page-blog': {
            title: 'Blog Page',
            'breadcrumb': ['Pages', 'Blog Page']
        },
        '/page-blog-item': {
            title: 'Blog Item Page',
            'breadcrumb': ['Pages', 'Blog Item Page']
        },
        '/page-calendar': {
            title: 'Calendar Page',
            'breadcrumb': ['Pages', 'Calendar Page']
        },
        '/page-about': {
            title: 'About Us',
            'breadcrumb': ['Pages', 'About Us']
        },
        '/page-contact': {
            title: 'Contact Us',
            'breadcrumb': ['Pages', 'Contact Us']
        },
        '/extra-profile': {
            title: 'User Profile',
            'breadcrumb': ['Extra', 'User Profile']
        },
        '/extra-signin': {
            title: 'Sign In',
            'breadcrumb': ['Extra', 'Sign In']
        },
        '/extra-signup': {
            title: 'Sign Up',
            'breadcrumb': ['Extra', 'Sign Up']
        },
        '/extra-lock-screen': {
            title: 'Lock Screen',
            'breadcrumb': ['Extra', 'Lock Screen']
        },
        '/extra-user-list': {
            title: 'User List',
            'breadcrumb': ['Extra', 'User List']
        },
        '/extra-invoice': {
            title: 'Invoice',
            'breadcrumb': ['Extras', 'Invoice']
        },
        '/extra-faq': {
            title: 'FAQ',
            'breadcrumb': ['Extras', 'FAQ']
        },
        '/extra-pricing-table': {
            title: 'Pricing Table',
            'breadcrumb': ['Extras', 'Pricing Table']
        },
        '/extra-404': {
            title: '404 Page',
            'breadcrumb': ['Extras', '404 Page']
        },
        '/extra-500': {
            title: '500 Page',
            'breadcrumb': ['Extras', '500 Page']
        },
        '/extra-blank': {
            title: 'Page Blank',
            'breadcrumb': ['Extras', 'Page Blank']
        },
        '/email-inbox': {
            title: 'MaiBox',
            'breadcrumb': ['Emails', 'MaiBox']
        },
        '/email-compose-mail': {
            title: 'Compose mail',
            'breadcrumb': ['Emails', 'Compose mail']
        },
        '/email-view-mail': {
            title: 'Mailbox',
            'breadcrumb': ['Emails', 'Mailbox']
        },
        '/charts-flotchart': {
            title: 'Flot Charts',
            'breadcrumb': ['Charts', 'Flot Charts']
        },
        '/charts-chartjs': {
            title: 'Chartjs',
            'breadcrumb': ['Charts', 'Chartjs']
        },
        '/charts-highchart-line': {
            title: 'Line Charts',
            'breadcrumb': ['Charts', 'Line Charts']
        },
        '/charts-highchart-area': {
            title: 'Area Charts',
            'breadcrumb': ['Charts', 'Area Charts']
        },
        '/charts-highchart-column-bar': {
            title: 'Column & Bar Charts',
            'breadcrumb': ['Charts', 'Column & Bar Charts']
        },
        '/charts-highchart-pie': {
            title: 'Pie Charts',
            'breadcrumb': ['Charts', 'Pie Charts']
        },
        '/charts-highchart-scatter-bubble': {
            title: 'Scatter & Bubble Charts',
            'breadcrumb': ['Charts', 'Scatter & Bubble Charts']
        },
        '/charts-highchart-dynamic': {
            title: 'Dynamic Charts',
            'breadcrumb': ['Charts', 'Dynamic Charts']
        },
        '/charts-highchart-combinations': {
            title: 'Combinations',
            'breadcrumb': ['Charts', 'Combinations']
        },
        '/charts-highchart-more': {
            title: 'More Chart Types',
            'breadcrumb': ['Charts', 'More Chart Types']
        },
        '/animations': {
            title: 'Css Animations',
            'breadcrumb': ['Animations', 'Css Animations']
        }
    };

    $.fn.Data.get = function(id) {
        if (id && $this.pages[id]) {
            return $this.pages[id];
        }
    };

    $.fn.Data.checkbox = function() {
        if ($('#demo-checkbox-radio').length <= 0) {
            $('input[type="checkbox"]:not(".switch")').iCheck({
                checkboxClass: 'icheckbox_minimal-grey',
                increaseArea: '20%' // optional
            });
            $('input[type="radio"]:not(".switch")').iCheck({
                radioClass: 'iradio_minimal-grey',
                increaseArea: '20%' // optional
            });
        }
    };
})(jQuery);
App.controller('EmailComposeMailController', function($scope, $routeParams) {
    $('.wysihtml5').wysihtml5();
});
App.controller('EmailInboxController', function($scope, $routeParams) {
    $.fn.Data.checkbox();
});
App.controller('Extra404Controller', function($scope, $routeParams) {
    $('body').addClass('bounceInLeft');
    $("body>.default-page").hide();
    $("body>.extra-page").html($(".page-content").html()).show();
});
App.controller('Extra500Controller', function($scope, $routeParams) {
    $('body').addClass('bounceInLeft');
    $("body>.default-page").hide();
    $("body>.extra-page").html($(".page-content").html()).show();
});
App.controller('ExtraLockScreenController', function($scope, $routeParams) {
    $('body').addClass('bounceInLeft');
    $("body>.default-page").hide();
    $("body>.extra-page").html($(".page-content").html()).show();
});
App.controller('ExtraProfileController', function($scope, $routeParams) {
    $('.datepicker-normal').datepicker();
    $.fn.Data.checkbox();
});
App.controller('ExtraSigninController', function($scope, $routeParams) {

    $("body>.default-page").replaceWith($('#signin-page'));

    $('input[type="checkbox"]').iCheck({
        checkboxClass: 'icheckbox_minimal-grey',
        increaseArea: '20%' // optional
    });

});
App.controller('ExtraSignupController', function($scope, $routeParams) {
    $("body>.default-page").replaceWith($('#signup-page'));

    $('input[type="checkbox"]').iCheck({
        checkboxClass: 'icheckbox_minimal-grey',
        increaseArea: '20%' // optional
    });
    $('input[type="radio"]').iCheck({
        radioClass: 'iradio_minimal-grey',
        increaseArea: '20%' // optional
    });

    $("#signup-form").validate({
        rules: {
            username: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 3,
                maxlength: 20
            },
            passwordConfirm: {
                required: true,
                minlength: 3,
                maxlength: 20,
                equalTo: '#password'
            },
            firstname: {
                required: true
            },
            lastname: {
                required: true
            },
            gender: {
                required: true
            }
        },

        // Messages for form validation
        messages: {
            login: {
                required: 'Please enter your login'
            },
            email: {
                required: 'Please enter your email address',
                email: 'Please enter a VALID email address'
            },
            password: {
                required: 'Please enter your password'
            },
            passwordConfirm: {
                required: 'Please enter your password one more time',
                equalTo: 'Please enter the same password as above'
            },
            firstname: {
                required: 'Please select your first name'
            },
            lastname: {
                required: 'Please select your last name'
            },
            gender: {
                required: 'Please select your gender'
            }
        },

        // Do not change code below
        errorPlacement: function(error, element) {
            error.insertAfter(element.parent());
        }
    });
});
App.controller('ExtraUserListController', function($scope, $rootScope, $routeParams, $location) {
    //BEGIN PORTLET
    $(".portlet").each(function(index, element) {
        var me = $(this);
        $(">.portlet-header>.tools>i", me).click(function(e) {
            if ($(this).hasClass('fa-chevron-up')) {
                $(">.portlet-body", me).slideUp('fast');
                $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            } else if ($(this).hasClass('fa-chevron-down')) {
                $(">.portlet-body", me).slideDown('fast');
                $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else if ($(this).hasClass('fa-cog')) {
                //Show modal
            } else if ($(this).hasClass('fa-refresh')) {
                $(">.portlet-body", me).addClass('wait');

                setTimeout(function() {
                    $(">.portlet-body", me).removeClass('wait');
                }, 1000);
            } else if ($(this).hasClass('fa-times')) {
                me.remove();
            }
        });
    });
    //END PORTLET
});
App.controller('FormBasicController', function($scope, $routeParams) {
    if ($('#demo-checkbox-radio').length <= 0) {
        $('input[type="checkbox"]:not(".switch")').iCheck({
            checkboxClass: 'icheckbox_minimal-grey',
            increaseArea: '20%' // optional
        });
        $('input[type="radio"]:not(".switch")').iCheck({
            radioClass: 'iradio_minimal-grey',
            increaseArea: '20%' // optional
        });
    }
});
App.controller('FormComponentsController', function($scope, $routeParams) {
    setTimeout(function() {
        //BEGIN PLUGINS DATE RANGE PICKER
        $('input[name="daterangepicker-default"]').daterangepicker();
        $('input[name="daterangepicker-date-time"]').daterangepicker({
            timePicker: true,
            timePickerIncrement: 30,
            format: 'MM/DD/YYYY h:mm A'
        });
        $('.reportrange').daterangepicker({
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                    'Last 7 Days': [moment().subtract('days', 6), moment()],
                    'Last 30 Days': [moment().subtract('days', 29), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                },
                startDate: moment().subtract('days', 29),
                endDate: moment()
            },
            function(start, end) {
                $('.reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            }
        );
        $('.reportrange span').html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
        //END PLUGINS DATE RANGE PICKER

        //BEGIN PLUGINS DATE PICKER
        $('.datepicker-default').datepicker();
        $('.datepicker-years').datepicker({
            startView: 1,
            minViewMode: 2
        });
        $('.input-daterange').datepicker({
            format: "dd-mm-yyyy"
        });
        $('.datepicker-inline').datepicker({
            format: "dd-mm-yyyy",
            startView: 2,
            minViewMode: 1
        });
        //END PLUGINS DATE PICKER

        //BEGIN PLUGINS DATETIME PICKER
        $('.datetimepicker-default').datetimepicker();
        $('.datetimepicker-disable-date').datetimepicker({
            pickDate: false
        });
        $('.datetimepicker-disable-time').datetimepicker({
            pickTime: false
        });
        $('.datetimepicker-start').datetimepicker();
        $('.datetimepicker-end').datetimepicker();
        $('.datetimepicker-start').on("change.dp", function(e) {
            $('.datetimepicker-end').data("DateTimePicker").setStartDate(e.date);
        });
        $('.datetimepicker-end').on("change.dp", function(e) {
            $('.datetimepicker-start').data("DateTimePicker").setEndDate(e.date);
        });
        //END PLUGINS DATETIME PICKER

        //BEGIN PLUGINS TIME PICKER
        $('.timepicker-default').timepicker();
        $('.timepicker-24hr').timepicker({
            autoclose: true,
            minuteStep: 1,
            showSeconds: true,
            showMeridian: false
        });
        //END PLUGINS TIME PICKER

        //BEGIN PLUGINS CLOCKFACE TIME PICKER
        $('.clockface-default').clockface();
        $('.clockface-component').clockface({
            format: 'HH:mm',
            trigger: 'manual'
        });

        $('#btn-clockface-component').click(function(e) {
            e.stopPropagation();
            $('.clockface-component').clockface('toggle');
        });

        $('.clockface-inline').clockface({
            format: 'H:mm'
        }).clockface('show', '14:30');
        //END PLUGINS CLOCKFACE TIME PICKER


        //BEGIN PLUGINS COLOR PICKER
        $('.colorpicker-default').colorpicker();
        $('.colorpicker-rgba').colorpicker();
        $('.colorpicker-component').colorpicker({
            format: 'hex'
        }).on('changeColor', function(ev) {
            $('.colorpicker-component span i').css('color', ev.color.toHex());
            $('.colorpicker-component input').val(ev.color.toHex());
        });
        //END PLUGINS COLOR PICKER

        // BEGIN PLUGIN MASK INPUT
        $("#date").mask("99/99/9999");
        $("#phone").mask("(999) 999-9999");
        $("#product-key").mask("(aa) 99-999");
        // END PLUGIN MASK INPUT

        //$("[name='my-checkbox']").bootstrapSwitch();
        setTimeout(function() {
            $('.make-switch').bootstrapSwitch();
        }, 50);

        //BEGIN CHECKBOX & RADIO
        if ($('#demo-checkbox-radio').length <= 0) {
            $('input[type="checkbox"]:not(".switch")').iCheck({
                checkboxClass: 'icheckbox_minimal-grey',
                increaseArea: '20%' // optional
            });

            $('input[type="radio"]:not(".switch")').iCheck({
                radioClass: 'iradio_minimal-grey',
                increaseArea: '20%' // optional
            });
        }
        //END CHECKBOX & RADIO
        //BEGIN CHARACTER COUNT
        $("#message1, #message2").charCount();
        $("#message3").charCount({
            allowed: 50,
            warning: 20,
            counterText: 'Characters left: '
        });
        //END CHARACTER COUNT
        //BEGIN PORTLET
        $(".portlet").each(function(index, element) {
            var me = $(this);
            $(">.portlet-header>.tools>i", me).click(function(e) {
                if ($(this).hasClass('fa-chevron-up')) {
                    $(">.portlet-body", me).slideUp('fast');
                    $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
                } else if ($(this).hasClass('fa-chevron-down')) {
                    $(">.portlet-body", me).slideDown('fast');
                    $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
                } else if ($(this).hasClass('fa-cog')) {
                    //Show modal
                } else if ($(this).hasClass('fa-refresh')) {
                    //$(">.portlet-body", me).hide();
                    $(">.portlet-body", me).addClass('wait');

                    setTimeout(function() {
                        //$(">.portlet-body>div", me).show();
                        $(">.portlet-body", me).removeClass('wait');
                    }, 1000);
                } else if ($(this).hasClass('fa-times')) {
                    me.remove();
                }
            });
        });
        //END PORTLET
    }, 100);
});
App.controller('FormDropzoneFileUploadController', function($scope, $routeParams) {

});
App.controller('FormLayoutsController', function($scope, $routeParams) {
    $.fn.Data.checkbox();
    $("ul.nav-tabs a").click(function(e) {
        e.preventDefault();
    });
});
App.controller('FormMultipleFileUploadController', function($scope, $routeParams) {
    $.fn.Data.checkbox();

    // Initialize the jQuery File Upload widget:
    $('#fileupload').fileupload({
        disableImageResize: false,
        // Uncomment the following to send cross-domain cookies:
        //xhrFields: {withCredentials: true},
        url: '../vendors/jquery-file-upload/server/php/'
    });

    // Enable iframe cross-domain access via redirect option:
    $('#fileupload').fileupload(
        'option',
        'redirect',
        window.location.href.replace(
            /\/[^\/]*$/,
            '/cors/result.html?%s'
        )
    );

    // Demo settings:
    $('#fileupload').fileupload('option', {
        url: '../vendors/jquery-file-upload/server/php/',
        // Enable image resizing, except for Android and Opera,
        // which actually support image resizing, but fail to
        // send Blob objects via XHR requests:
        disableImageResize: /Android(?!.*Chrome)|Opera/
            .test(window.navigator.userAgent),
        maxFileSize: 5000000,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
    });
    // Upload server status check for browsers with CORS support:
    if ($.support.cors) {
        $.ajax({
            url: '../vendors/jquery-file-upload/server/php/',
            type: 'HEAD'
        }).fail(function() {
            $('<div class="alert alert-danger"/>')
                .text('Upload server currently unavailable - ' +
                    new Date())
                .appendTo('#fileupload');
        });
    }
});
App.controller('FormValidationController', function($scope, $routeParams) {
    $(".form-validate").validate({
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });
    $(".form-validate-signin").validate({
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });
    $(".form-validate-signup").validate({
        rules: {
            age: {
                range: [0, 100]
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element);
        }
    });
});
App.controller('FormWizardController', function($scope, $routeParams) {
    $.fn.Data.checkbox();

    var wizard_1 = $("#wizard-1").steps({
        transitionEffect: "slideLeft"
    });
    wizard_1.steps("add", {
        title: "Account",
        content: '<fieldset><legend>Account Information</legend><div class="form-group"><label for="userName">User name *</label><div><input id="userName" name="userName" type="text" class="form-control required"></div></div><div class="form-group"><label for="password">Password *</label><div><input id="password" name="password" type="text" class="form-control required"></div></div><div class="form-group"><label for="confirm">Confirm Password *</label><div><input id="confirm" name="confirm" type="text" class="form-control required"></div></div></fieldset>'
    });
    wizard_1.steps("add", {
        title: "Profile",
        content: '<fieldset><legend>Profile Information</legend><div class="form-group"><label for="name">First name *</label><div><input id="name" name="name" type="text" class="form-control required"></div></div><div class="form-group"><label for="surname">Last name *</label><div><input id="surname" name="surname" type="text" class="form-control required"></div></div><div class="form-group"><label for="email">Email *</label><div><input id="email" name="email" type="text" class="form-control required email"></div></div><div class="form-group"><label for="address">Address</label><div><input id="address" name="address" type="text" class="form-control"></div></div><div class="form-group"><label for="age">Age (The warning step will show up if age is less than 18) *</label><div><input id="age" name="age" type="text" class="form-control required number"></div></div></fieldset>'
    });
    wizard_1.steps("add", {
        title: "Warning",
        content: '<fieldset><legend>You are to young</legend><p>Please go away ;-)</p></fieldset>'
    });
    wizard_1.steps("add", {
        title: "Finish",
        content: '<fieldset><legend>Terms and Conditions</legend><input id="acceptTerms" name="acceptTerms" type="checkbox" class="required"> <label for="acceptTerms">I agree with the Terms and Conditions.</label></fieldset>'
    });

    $("#form-2").validate({
        rules: {
            userName: {
                required: true
            },
            password: {
                required: true,
                minlength: 3,
                maxlength: 20
            },
            confirm: {
                required: true,
                minlength: 3,
                maxlength: 20,
                equalTo: '#password'
            }
        },
        messages: {
            userName: {
                required: 'Please enter your userName'
            },
            password: {
                required: 'Please enter your password'
            },
            confirm: {
                equalTo: "#password"
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element.parent());
        }
    });
    var wizard_2 = $("#wizard-2").steps({
        transitionEffect: "slideLeft",
        onStepChanging: function(event, currentIndex, newIndex) {
            $("#form-2").validate().settings.ignore = ":disabled,:hidden";
            return $("#form-2").valid();
        },
        onFinishing: function(event, currentIndex) {
            $("#form-2").validate().settings.ignore = ":disabled";
            return $("#form-2").valid();
        },
        onFinished: function(event, currentIndex) {
            alert("Submitted!");
        }
    });
    wizard_2.steps("add", {
        title: "Account",
        content: '<fieldset><legend>Account Information</legend><div class="form-group"><label for="userName">User name *</label><div><input id="userName" name="userName" type="text" class="form-control required"></div></div><div class="form-group"><label for="password">Password *</label><div><input id="password" name="password" type="text" class="form-control required"></div></div><div class="form-group"><label for="confirm">Confirm Password *</label><div><input id="confirm" name="confirm" type="text" class="form-control required"></div></div></fieldset>'
    });
    wizard_2.steps("add", {
        title: "Profile",
        content: '<fieldset><legend>Profile Information</legend><div class="form-group"><label for="name">First name *</label><div><input id="name" name="name" type="text" class="form-control required"></div></div><div class="form-group"><label for="surname">Last name *</label><div><input id="surname" name="surname" type="text" class="form-control required"></div></div><div class="form-group"><label for="email">Email *</label><div><input id="email" name="email" type="text" class="form-control required email"></div></div><div class="form-group"><label for="address">Address</label><div><input id="address" name="address" type="text" class="form-control"></div></div><div class="form-group"><label for="age">Age (The warning step will show up if age is less than 18) *</label><div><input id="age" name="age" type="text" class="form-control required number"></div></div></fieldset>'
    });
    wizard_2.steps("add", {
        title: "Warning",
        content: '<fieldset><legend>You are to young</legend><p>Please go away ;-)</p></fieldset>'
    });
    wizard_2.steps("add", {
        title: "Finish",
        content: '<fieldset><legend>Terms and Conditions</legend><input id="acceptTerms" name="acceptTerms" type="checkbox" class="required"> <label for="acceptTerms">I agree with the Terms and Conditions.</label></fieldset>'
    });

    $("#form-3").validate({
        rules: {
            userName1: {
                required: true
            },
            password1: {
                required: true,
                minlength: 3,
                maxlength: 20
            },
            confirm1: {
                required: true,
                minlength: 3,
                maxlength: 20,
                equalTo: '#password1'
            }
        },
        messages: {
            userName1: {
                required: 'Please enter your userName'
            },
            password1: {
                required: 'Please enter your password'
            },
            confirm1: {
                equalTo: "#password1"
            }
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element.parent());
        }
    });
    var wizard_3 = $("#wizard-3").steps({
        transitionEffect: "slideLeft",
        stepsOrientation: "vertical",
        onStepChanging: function(event, currentIndex, newIndex) {
            $("#form-3").validate().settings.ignore = ":disabled,:hidden";
            return $("#form-3").valid();
        },
        onFinishing: function(event, currentIndex) {
            $("#form-3").validate().settings.ignore = ":disabled";
            return $("#form-3").valid();
        },
        onFinished: function(event, currentIndex) {
            alert("Submitted!");
        }
    });
    wizard_3.steps("add", {
        title: "Account",
        content: '<fieldset><legend>Account Information</legend><div class="form-group"><label for="userName1">User name *</label><div><input id="userName1" name="userName1" type="text" class="form-control required"></div></div><div class="form-group"><label for="password1">Password *</label><div><input id="password1" name="password1" type="text" class="form-control required"></div></div><div class="form-group"><label for="confirm1">Confirm Password *</label><div><input id="confirm1" name="confirm1" type="text" class="form-control required"></div></div></fieldset>'
    });
    wizard_3.steps("add", {
        title: "Profile",
        content: '<fieldset><legend>Profile Information</legend><div class="form-group"><label for="name1">First name *</label><div><input id="name1" name="name1" type="text" class="form-control required"></div></div><div class="form-group"><label for="surname1">Last name *</label><div><input id="surname1" name="surname1" type="text" class="form-control required"></div></div><div class="form-group"><label for="email1">Email *</label><div><input id="email1" name="email1" type="text" class="form-control required email"></div></div><div class="form-group"><label for="address1">Address</label><div><input id="address1" name="address1" type="text" class="form-control"></div></div><div class="form-group"><label for="age1">Age (The warning step will show up if age is less than 18) *</label><div><input id="age1" name="age1" type="text" class="form-control required number"></div></div></fieldset>'
    });
    wizard_3.steps("add", {
        title: "Warning",
        content: '<fieldset><legend>You are to young</legend><p>Please go away ;-)</p></fieldset>'
    });
    wizard_3.steps("add", {
        title: "Finish",
        content: '<fieldset><legend>Terms and Conditions</legend><input id="acceptTerms1" name="acceptTerms1" type="checkbox" class="required"> <label for="acceptTerms1">I agree with the Terms and Conditions.</label></fieldset>'
    });

    var wizard_4 = $("#wizard-4").steps({
        transitionEffect: "slide"
    });
    wizard_4.steps("add", {
        title: "Async Step",
        contentMode: "async",
        contentUrl: "/vendors/jquery-steps/data/AsyncContent.html"
    });
    wizard_4.steps("add", {
        title: "Second Step",
        content: '<section><p>Donec mi sapien, hendrerit nec egestas a, rutrum vitae dolor. Nullam venenatis diam ac ligula elementum pellentesque. In lobortis sollicitudin felis non eleifend. Morbi tristique tellus est, sed tempor elit. Morbi varius, nulla quis condimentum dictum, nisi elit condimentum magna, nec venenatis urna quam in nisi. Integer hendrerit sapien a diam adipiscing consectetur. In euismod augue ullamcorper leo dignissim quis elementum arcu porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum leo velit, blandit ac tempor nec, ultrices id diam. Donec metus lacus, rhoncus sagittis iaculis nec, malesuada a diam.Donec non pulvinar urna. Aliquam id velit lacus.</p></section>'
    });
    wizard_4.steps("add", {
        title: "Third Step",
        content: '<section><p>Morbi ornare tellus at elit ultrices id dignissim lorem elementum. Sed eget nisl at justo condimentum dapibus. Fusce eros justo, pellentesque non euismod ac, rutrum sed quam. Ut non mi tortor. Vestibulum eleifend varius ullamcorper. Aliquam erat volutpat. Donec diam massa, porta vel dictum sit amet, iaculis ac massa. Sed elementum dui commodo lectus sollicitudin in auctor mauris venenatis.</p></section>'
    });
    wizard_4.steps("add", {
        title: "Forth Step",
        content: '<section><p>Quisque at sem turpis, id sagittis diam. Suspendisse malesuada eros posuere mauris vehicula vulputate. Aliquam sed sem tortor. Quisque sed felis ut mauris feugiat iaculis nec ac lectus. Sed consequat vestibulum purus, imperdiet varius est pellentesque vitae. Suspendisse consequat cursus eros, vitae tempus enim euismod non. Nullam ut commodo tortor.</p></section>'
    });

    /*************************************************/
    /************ #rootwizard-custom-arrow ***********/
    $('#rootwizard-tabdetail2').bootstrapWizard({
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;
            var $percent = ($current / $total) * 100;
            $('#rootwizard-tabdetail2').find('.bar').css({
                width: $percent + '%'
            });
        },
        'onNext': function(tab, navigation, index) {

            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function() {
                if (!$(this).val()) {
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    $approved = 0;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
        },
        'onTabClick': function(tab, navigation, index) {
            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function() {
                if (!$(this).val()) {
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    $approved = 0;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
            // Add class visited to style css
            if (tab.attr("class") == "visited") {
                tab.removeClass("visited");
            } else {
                tab.addClass("visited");
            }
        },
        'tabClass': 'nav nav-pills',
        'nextSelector': '.button-next',
        'previousSelector': '.button-previous'
    });
    /************ #rootwizard-custom-circle ***********/
    $('#rootwizard-custom-circle').bootstrapWizard({
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;
            var $percent = ($current / $total) * 100;
            $('#rootwizard-custom-circle').find('.bar').css({
                width: $percent + '%'
            });
        },
        'onNext': function(tab, navigation, index) {

            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function() {
                if (!$(this).val()) {
                    $(this).css('border-color', 'red');
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    $approved = 0;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
        },
        'onTabClick': function(tab, navigation, index) {
            // select id of current tab content
            var $id = tab.find("a").attr("href");
            var $approved = 1;
            // Check all input validation
            $($id + " input").each(function() {
                if (!$(this).val()) {
                    $(this).css('border-color', 'red');
                    $(this).parent().parent().find("i.alert").removeClass("alert-hide");
                    $approved = 0;
                } else {
                    $(this).parent().parent().find("i.alert").addClass("alert-hide");
                }
            });
            if ($approved !== 1) return false;
            // Add class visited to style css
            if (tab.attr("class") == "visited") {
                tab.removeClass("visited");
            } else {
                tab.addClass("visited");
            }
        },
        'tabClass': 'bwizard-steps-o',
        'nextSelector': '.button-next',
        'previousSelector': '.button-previous'
    });

    //BEGIN PORTLET
    $(".portlet").each(function(index, element) {
        var me = $(this);
        $(">.portlet-header>.tools>i", me).click(function(e) {
            if ($(this).hasClass('fa-chevron-up')) {
                $(">.portlet-body", me).slideUp('fast');
                $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            } else if ($(this).hasClass('fa-chevron-down')) {
                $(">.portlet-body", me).slideDown('fast');
                $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else if ($(this).hasClass('fa-cog')) {
                //Show modal
            } else if ($(this).hasClass('fa-refresh')) {
                //$(">.portlet-body", me).hide();
                $(">.portlet-body", me).addClass('wait');

                setTimeout(function() {
                    //$(">.portlet-body>div", me).show();
                    $(">.portlet-body", me).removeClass('wait');
                }, 1000);
            } else if ($(this).hasClass('fa-times')) {
                me.remove();
            }
        });
    });
    //END PORTLET
});
App.controller('FormXeditableController', function($scope, $routeParams) {
    setTimeout(function() {
        $('.make-switch').bootstrapSwitch();

        if ($('#demo-checkbox-radio').length <= 0) {
            $('input[type="checkbox"]:not(".switch")').iCheck({
                checkboxClass: 'icheckbox_minimal-grey',
                increaseArea: '20%' // optional
            });

            $('input[type="radio"]:not(".switch")').iCheck({
                radioClass: 'iradio_minimal-grey',
                increaseArea: '20%' // optional
            });
        }
        //defaults
        $.fn.editable.defaults.inputclass = 'form-control';
        $.fn.editable.defaults.url = '/post';

        if (getURL('mode') == 'inline') {
            $("#inline-editing").iCheck('check');
            $.fn.editable.defaults.mode = 'inline';
        } else {
            $("#inline-editing").iCheck('uncheck');
            $.fn.editable.defaults.mode = 'popup';
        }

        //editables
        $('#username').editable({
            url: '/post',
            type: 'text',
            pk: 1,
            name: 'username',
            title: 'Enter username'
        });

        $('#firstname').editable({
            validate: function(value) {
                if ($.trim(value) === '') return 'This field is required';
            }
        });

        $('#sex').editable({
            prepend: "not selected",
            source: [{
                value: 1,
                text: 'Male'
            }, {
                value: 2,
                text: 'Female'
            }],
            display: function(value, sourceData) {
                var colors = {
                        "": "gray",
                        1: "green",
                        2: "blue"
                    },
                    elem = $.grep(sourceData, function(o) {
                        return o.value == value;
                    });

                if (elem.length) {
                    $(this).text(elem[0].text).css("color", colors[value]);
                } else {
                    $(this).empty();
                }
            }
        });

        $('#status').editable();

        $('#group').editable({
            showbuttons: false
        });

        $('#vacation').editable({
            datepicker: {
                todayBtn: 'linked'
            }
        });

        $('#dob').editable();

        $('#event').editable({
            placement: 'right',
            combodate: {
                firstItem: 'name'
            }
        });

        $('#meeting_start').editable({
            format: 'yyyy-mm-dd hh:ii',
            viewformat: 'dd/mm/yyyy hh:ii',
            validate: function(v) {
                if (v && v.getDate() == 10) return 'Day cant be 10!';
            },
            datetimepicker: {
                todayBtn: 'linked',
                weekStart: 1
            }
        });

        $('#comments').editable({
            showbuttons: 'bottom'
        });

        $('#note').editable();
        $('#pencil').click(function(e) {
            e.stopPropagation();
            e.preventDefault();
            $('#note').editable('toggle');
        });

        $('#state').editable({
            source: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
        });

        $('#state2').editable({
            value: 'California',
            typeahead: {
                name: 'state',
                local: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
            }
        });

        $('#fruits').editable({
            pk: 1,
            limit: 3,
            source: [{
                value: 1,
                text: 'banana'
            }, {
                value: 2,
                text: 'peach'
            }, {
                value: 3,
                text: 'apple'
            }, {
                value: 4,
                text: 'watermelon'
            }, {
                value: 5,
                text: 'orange'
            }]
        });

        $('#tags').editable({
            inputclass: 'input-large',
            select2: {
                tags: ['html', 'javascript', 'css', 'ajax'],
                tokenSeparators: [",", " "]
            }
        });

        var countries = [];
        $.each({
            "BD": "Bangladesh",
            "BE": "Belgium",
            "BF": "Burkina Faso",
            "BG": "Bulgaria",
            "BA": "Bosnia and Herzegovina",
            "BB": "Barbados",
            "WF": "Wallis and Futuna",
            "BL": "Saint Bartelemey",
            "BM": "Bermuda",
            "BN": "Brunei Darussalam",
            "BO": "Bolivia",
            "BH": "Bahrain",
            "BI": "Burundi",
            "BJ": "Benin",
            "BT": "Bhutan",
            "JM": "Jamaica",
            "BV": "Bouvet Island",
            "BW": "Botswana",
            "WS": "Samoa",
            "BR": "Brazil",
            "BS": "Bahamas",
            "JE": "Jersey",
            "BY": "Belarus",
            "O1": "Other Country",
            "LV": "Latvia",
            "RW": "Rwanda",
            "RS": "Serbia",
            "TL": "Timor-Leste",
            "RE": "Reunion",
            "LU": "Luxembourg",
            "TJ": "Tajikistan",
            "RO": "Romania",
            "PG": "Papua New Guinea",
            "GW": "Guinea-Bissau",
            "GU": "Guam",
            "GT": "Guatemala",
            "GS": "South Georgia and the South Sandwich Islands",
            "GR": "Greece",
            "GQ": "Equatorial Guinea",
            "GP": "Guadeloupe",
            "JP": "Japan",
            "GY": "Guyana",
            "GG": "Guernsey",
            "GF": "French Guiana",
            "GE": "Georgia",
            "GD": "Grenada",
            "GB": "United Kingdom",
            "GA": "Gabon",
            "SV": "El Salvador",
            "GN": "Guinea",
            "GM": "Gambia",
            "GL": "Greenland",
            "GI": "Gibraltar",
            "GH": "Ghana",
            "OM": "Oman",
            "TN": "Tunisia",
            "JO": "Jordan",
            "HR": "Croatia",
            "HT": "Haiti",
            "HU": "Hungary",
            "HK": "Hong Kong",
            "HN": "Honduras",
            "HM": "Heard Island and McDonald Islands",
            "VE": "Venezuela",
            "PR": "Puerto Rico",
            "PS": "Palestinian Territory",
            "PW": "Palau",
            "PT": "Portugal",
            "SJ": "Svalbard and Jan Mayen",
            "PY": "Paraguay",
            "IQ": "Iraq",
            "PA": "Panama",
            "PF": "French Polynesia",
            "BZ": "Belize",
            "PE": "Peru",
            "PK": "Pakistan",
            "PH": "Philippines",
            "PN": "Pitcairn",
            "TM": "Turkmenistan",
            "PL": "Poland",
            "PM": "Saint Pierre and Miquelon",
            "ZM": "Zambia",
            "EH": "Western Sahara",
            "RU": "Russian Federation",
            "EE": "Estonia",
            "EG": "Egypt",
            "TK": "Tokelau",
            "ZA": "South Africa",
            "EC": "Ecuador",
            "IT": "Italy",
            "VN": "Vietnam",
            "SB": "Solomon Islands",
            "EU": "Europe",
            "ET": "Ethiopia",
            "SO": "Somalia",
            "ZW": "Zimbabwe",
            "SA": "Saudi Arabia",
            "ES": "Spain",
            "ER": "Eritrea",
            "ME": "Montenegro",
            "MD": "Moldova, Republic of",
            "MG": "Madagascar",
            "MF": "Saint Martin",
            "MA": "Morocco",
            "MC": "Monaco",
            "UZ": "Uzbekistan",
            "MM": "Myanmar",
            "ML": "Mali",
            "MO": "Macao",
            "MN": "Mongolia",
            "MH": "Marshall Islands",
            "MK": "Macedonia",
            "MU": "Mauritius",
            "MT": "Malta",
            "MW": "Malawi",
            "MV": "Maldives",
            "MQ": "Martinique",
            "MP": "Northern Mariana Islands",
            "MS": "Montserrat",
            "MR": "Mauritania",
            "IM": "Isle of Man",
            "UG": "Uganda",
            "TZ": "Tanzania, United Republic of",
            "MY": "Malaysia",
            "MX": "Mexico",
            "IL": "Israel",
            "FR": "France",
            "IO": "British Indian Ocean Territory",
            "FX": "France, Metropolitan",
            "SH": "Saint Helena",
            "FI": "Finland",
            "FJ": "Fiji",
            "FK": "Falkland Islands (Malvinas)",
            "FM": "Micronesia, Federated States of",
            "FO": "Faroe Islands",
            "NI": "Nicaragua",
            "NL": "Netherlands",
            "NO": "Norway",
            "NA": "Namibia",
            "VU": "Vanuatu",
            "NC": "New Caledonia",
            "NE": "Niger",
            "NF": "Norfolk Island",
            "NG": "Nigeria",
            "NZ": "New Zealand",
            "NP": "Nepal",
            "NR": "Nauru",
            "NU": "Niue",
            "CK": "Cook Islands",
            "CI": "Cote d'Ivoire",
            "CH": "Switzerland",
            "CO": "Colombia",
            "CN": "China",
            "CM": "Cameroon",
            "CL": "Chile",
            "CC": "Cocos (Keeling) Islands",
            "CA": "Canada",
            "CG": "Congo",
            "CF": "Central African Republic",
            "CD": "Congo, The Democratic Republic of the",
            "CZ": "Czech Republic",
            "CY": "Cyprus",
            "CX": "Christmas Island",
            "CR": "Costa Rica",
            "CV": "Cape Verde",
            "CU": "Cuba",
            "SZ": "Swaziland",
            "SY": "Syrian Arab Republic",
            "KG": "Kyrgyzstan",
            "KE": "Kenya",
            "SR": "Suriname",
            "KI": "Kiribati",
            "KH": "Cambodia",
            "KN": "Saint Kitts and Nevis",
            "KM": "Comoros",
            "ST": "Sao Tome and Principe",
            "SK": "Slovakia",
            "KR": "Korea, Republic of",
            "SI": "Slovenia",
            "KP": "Korea, Democratic People's Republic of",
            "KW": "Kuwait",
            "SN": "Senegal",
            "SM": "San Marino",
            "SL": "Sierra Leone",
            "SC": "Seychelles",
            "KZ": "Kazakhstan",
            "KY": "Cayman Islands",
            "SG": "Singapore",
            "SE": "Sweden",
            "SD": "Sudan",
            "DO": "Dominican Republic",
            "DM": "Dominica",
            "DJ": "Djibouti",
            "DK": "Denmark",
            "VG": "Virgin Islands, British",
            "DE": "Germany",
            "YE": "Yemen",
            "DZ": "Algeria",
            "US": "United States",
            "UY": "Uruguay",
            "YT": "Mayotte",
            "UM": "United States Minor Outlying Islands",
            "LB": "Lebanon",
            "LC": "Saint Lucia",
            "LA": "Lao People's Democratic Republic",
            "TV": "Tuvalu",
            "TW": "Taiwan",
            "TT": "Trinidad and Tobago",
            "TR": "Turkey",
            "LK": "Sri Lanka",
            "LI": "Liechtenstein",
            "A1": "Anonymous Proxy",
            "TO": "Tonga",
            "LT": "Lithuania",
            "A2": "Satellite Provider",
            "LR": "Liberia",
            "LS": "Lesotho",
            "TH": "Thailand",
            "TF": "French Southern Territories",
            "TG": "Togo",
            "TD": "Chad",
            "TC": "Turks and Caicos Islands",
            "LY": "Libyan Arab Jamahiriya",
            "VA": "Holy See (Vatican City State)",
            "VC": "Saint Vincent and the Grenadines",
            "AE": "United Arab Emirates",
            "AD": "Andorra",
            "AG": "Antigua and Barbuda",
            "AF": "Afghanistan",
            "AI": "Anguilla",
            "VI": "Virgin Islands, U.S.",
            "IS": "Iceland",
            "IR": "Iran, Islamic Republic of",
            "AM": "Armenia",
            "AL": "Albania",
            "AO": "Angola",
            "AN": "Netherlands Antilles",
            "AQ": "Antarctica",
            "AP": "Asia/Pacific Region",
            "AS": "American Samoa",
            "AR": "Argentina",
            "AU": "Australia",
            "AT": "Austria",
            "AW": "Aruba",
            "IN": "India",
            "AX": "Aland Islands",
            "AZ": "Azerbaijan",
            "IE": "Ireland",
            "ID": "Indonesia",
            "UA": "Ukraine",
            "QA": "Qatar",
            "MZ": "Mozambique"
        }, function(k, v) {
            countries.push({
                id: k,
                text: v
            });
        });
        $('#country').editable({
            source: countries,
            select2: {
                width: 200,
                placeholder: 'Select country',
                allowClear: true
            }
        });



        $('#address').editable({
            inputclass: 'form-control',
            url: '/post',
            value: {
                city: "Moscow",
                street: "Lenina",
                building: "12"
            },
            validate: function(value) {
                if (value.city === '') return 'city is required!';
            },
            display: function(value) {
                if (!value) {
                    $(this).empty();
                    return;
                }
                var html = '<b>' + $('<div>').text(value.city).html() + '</b>, ' + $('<div>').text(value.street).html() + ' st., bld. ' + $('<div>').text(value.building).html();
                $(this).html(html);
            }
        });

        $('#user .editable').on('hidden', function(e, reason) {
            if (reason === 'save' || reason === 'nochange') {
                var $next = $(this).closest('tr').next().find('.editable');
                if ($('#autoopen').is(':checked')) {
                    setTimeout(function() {
                        $next.editable('show');
                    }, 300);
                } else {
                    $next.focus();
                }
            }
        });

        //enable / disable
        $('#enable').on('switch-change', function() {
            $('#user .editable').editable('toggleDisabled');
        });

        // inline editing
        $('#inline-editing').on('ifChecked ifUnchecked', function(event) {
            if (event.type == 'ifChecked') {
                window.location.href = 'form-xeditable.html?mode=inline';
            } else {
                window.location.href = 'form-xeditable.html';
            }
        });

        function getURL(name) {
            var searchString = window.location.search.substring(1),
                i, val, params = searchString.split("&");
            for (i = 0; i < params.length; i++) {
                val = params[i].split("=");
                if (val[0] == name) {
                    return unescape(val[1]);
                }
            }
            return null;
        }
    }, 50);


});
App.controller('GridDatepickerController', function($scope, $routeParams) {
    $('#grid-datepicker').jplist({
        itemsBox: '.list',
        itemPath: '.list-item',
        panelPath: '.jplist-panel',
        //save plugin state
        storage: 'localstorage', //'', 'cookies', 'localstorage'
        storageName: 'date-picker-range-filter',
        controlTypes: {
            'date-picker-range-filter': {
                className: 'DatePickerRangeFilter',
                options: {
                    datepicker: function(input, options) {
                        //set options
                        options.dateFormat = 'mm/dd/yy';
                        input.datepicker(options);
                    }
                }
            }
        }
    });
});
App.controller('GridDeepLinkingController', function($scope, $routeParams) {
    $.fn.Data.checkbox();
    setTimeout(function() {
        $('#grid-deep-linking').jplist({
            itemsBox: '.list',
            itemPath: '.list-item',
            panelPath: '.jplist-panel',
            //deep linking
            deepLinking: true
        });
    }, 500);

});
App.controller('GridDoubleSortController', function($scope, $routeParams) {
    $('#grid-double-sort').jplist({
        itemsBox: '.list',
        itemPath: '.list-item',
        panelPath: '.jplist-panel'
    });
});
App.controller('GridFilterWithSelectController', function($scope, $routeParams) {
    $('#grid-filter-with-select').jplist({
        itemsBox: '.list',
        itemPath: '.list-item',
        panelPath: '.jplist-panel'
    });
});
App.controller('GridFilterWithUiLiController', function($scope, $routeParams) {
    $('#grid-filter-with-ul-li').jplist({
        itemsBox: '.list',
        itemPath: '.list-item',
        panelPath: '.jplist-panel',
        //save plugin state
        storage: 'localstorage', //'', 'cookies', 'localstorage'
        storageName: 'drop-down-filters-ul-li'
    });
});
App.controller('GridHiddenSortController', function($scope, $routeParams) {
    $('#grid-hidden-sort').jplist({
        itemsBox: '.list',
        itemPath: '.list-item',
        panelPath: '.jplist-panel'
    });
});
App.controller('GridLayout2TableController', function($scope, $routeParams) {
    $('#grid-layout-first-table').jplist({
        itemsBox: '.demo-tbl',
        itemPath: '.tbl-item',
        panelPath: '.jplist-panel'
    });

    $('#grid-layout-second-table').jplist({
        itemsBox: '.demo-tbl',
        itemPath: '.tbl-item',
        panelPath: '.jplist-panel'
    });
});
App.controller('GridLayoutDivController', function($scope, $routeParams) {
    $('#grid-layout-div').jplist({
        itemsBox: '.list',
        itemPath: '.list-item',
        panelPath: '.jplist-panel',
        //save plugin state
        storage: 'localstorage', //'', 'cookies', 'localstorage'
        storageName: 'jplist-div-layout'
    });
});


App.controller('GridLayoutTable1Controller', function($scope, $routeParams) {
    $('#grid-layout-table-1').jplist({
        itemsBox: '.demo-tbl',
        itemPath: '.tbl-item',
        panelPath: '.jplist-panel',
        //save plugin state
        storage: 'localstorage', //'', 'cookies', 'localstorage'
        storageName: 'jplist-tabl'
    });
});
App.controller('GridLayoutTable2Controller', function($scope, $routeParams) {
    $('#grid-layout-table-2').jplist({
        itemsBox: '.demo-tbl tbody',
        itemPath: '.tbl-item',
        panelPath: '.jplist-panel',
        //save plugin state
        storage: 'localstorage', //'', 'cookies', 'localstorage'
        storageName: 'jplist-table-2',
        redrawCallback: function() {
            $('.tbl-item').each(function(index, el) {
                if (index % 2 === 0) {
                    $(el).addClass('even');
                } else {
                    $(el).addClass('odd');
                }
            });
        }
    });
});
App.controller('GridLayoutUlLiController', function($scope, $routeParams) {
    $('#grid-layout-ul-li').jplist({
        itemsBox: '.ul-li-list',
        itemPath: '.list-item',
        panelPath: '.jplist-panel',
        //save plugin state
        storage: 'localstorage', //'', 'cookies', 'localstorage'
        storageName: 'jplist-ul-li'
    });
});
App.controller('GridPaginationOnlyController', function($scope, $routeParams) {
    $('#grid-pagination-only').jplist({
        itemsBox: '.list',
        itemPath: '.list-item',
        panelPath: '.jplist-panel'
    });
});
App.controller('GridRangeSliderController', function($scope, $routeParams) {
    $('#grid-range-slider').jplist({
        itemsBox: '.list',
        itemPath: '.list-item',
        panelPath: '.jplist-panel',
        controlTypes: {
            //likes range slider
            'range-slider-likes': {
                className: 'RangeSlider',
                options: {
                    //jquery ui range slider
                    ui_slider: function($slider, $prev, $next) {
                        $slider.slider({
                            min: 0,
                            max: 350,
                            range: true,
                            values: [0, 350],
                            slide: function(event, ui) {
                                $prev.text(ui.values[0] + ' likes');
                                $next.text(ui.values[1] + ' likes');
                            }
                        });
                    },
                    set_values: function($slider, $prev, $next) {
                        $prev.text($slider.slider('values', 0) + ' likes');
                        $next.text($slider.slider('values', 1) + ' likes');
                    }
                }
            },

            //prices range slider
            'range-slider-prices': {
                className: 'RangeSlider',
                options: {
                    //jquery ui range slider
                    ui_slider: function($slider, $prev, $next) {
                        $slider.slider({
                            min: 0,
                            max: 100,
                            range: true,
                            values: [0, 100],
                            slide: function(event, ui) {
                                $prev.text('$' + ui.values[0]);
                                $next.text('$' + ui.values[1]);
                            }
                        });
                    },
                    set_values: function($slider, $prev, $next) {
                        $prev.text('$' + $slider.slider('values', 0));
                        $next.text('$' + $slider.slider('values', 1));
                    }
                }
            },

            //views range slider
            'range-slider-views': {
                className: 'RangeSlider',
                options: {
                    //jquery ui range slider
                    ui_slider: function($slider, $prev, $next) {
                        $slider.slider({
                            min: 0,
                            max: 4000,
                            range: true,
                            values: [0, 4000],
                            slide: function(event, ui) {
                                $prev.text(ui.values[0] + ' views');
                                $next.text(ui.values[1] + ' views');
                            }
                        });
                    },
                    set_values: function($slider, $prev, $next) {
                        $prev.text($slider.slider('values', 0) + ' views');
                        $next.text($slider.slider('values', 1) + ' views');
                    }
                }
            }
        }
    });
});
App.controller('GridWithoutItemPerPageController', function($scope, $routeParams) {
    $('#grid-without-item-per-page').jplist({
        itemsBox: '.list',
        itemPath: '.list-item',
        panelPath: '.jplist-panel'
    });
});
App.controller('LayoutHeaderTopbarController', function($scope, $routeParams) {
    $scope.layout_header_topbar_update = function() {
        $('#header-topbar-page .option-demo').hover(function() {
            $(this).append("<div class='demo-layout animated fadeInUp'><i class='fa fa-magic mrs'></i>Demo</div>");
        }, function() {
            $('.demo-layout').remove();
        });

        $('#header-topbar-page .demo-layout').live('click', function() {
            var HtmlOption = $(this).parent().detach();
            $('#header-topbar-option-demo').html(HtmlOption).addClass('animated flash').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $(this).removeClass('animated flash');
            });

            $('#header-topbar-option-demo .option-demo').unbind('hover');
            return false;
        });
    };
});
App.controller('LayoutTitleBreadcrumbController', function($scope, $routeParams) {
    $('.option-demo').hover(function() {
        $(this).append("<div class='demo-layout animated fadeInUp'><i class='fa fa-magic mrs'></i>Demo</div>");
    }, function() {
        $('.demo-layout').remove();
    });
    $('#title-breadcrumb-page .demo-layout').live('click', function() {
        var HtmlOption = $(this).parent().html();
        $('#title-breadcrumb-option-demo').html(HtmlOption).addClass('animated flash').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('animated flash');
        });
        $('#title-breadcrumb-option-demo').find('.demo-layout').remove();
        return false;
    });
});
App.controller('MainController', function($scope, $routeParams) {
    setTimeout(function() {
        $.fn.Data.checkbox();

        //BEGIN CALENDAR
        $("#my-calendar").zabuto_calendar({
            language: "en"
        });
        //END CALENDAR

        //BEGIN TO-DO-LIST
        $('.todo-list').slimScroll({
            "width": '100%',
            "height": '250px',
            "wheelStep": 30 // Integer value for mouse wheel delta. Default: 20
        });
        $(".sortable").sortable();
        $(".sortable").disableSelection();
        //END TO-DO-LIST

        //BEGIN CHAT FORM
        $('.chat-scroller').slimScroll({
            "width": '100%',
            "height": '270px',
            "wheelStep": 30,
            "scrollTo": "100px"
        });

        $('.chat-form input#input-chat').on("keypress", function(e) {
            var $obj = $(this);
            var $me = $obj.parents('.portlet-body').find('ul.chats');

            if (e.which == 13) {
                var content = $obj.val();

                if (content !== "") {
                    $me.addClass(content);
                    var d = new Date();
                    var h = d.getHours();
                    var m = d.getMinutes();
                    if (m < 10) m = "0" + m;
                    $obj.val(""); // CLEAR TEXT ON TEXTAREA

                    var element = "";
                    element += "<li class='in'>";
                    element += "<img class='avatar' src='https://s3.amazonaws.com/uifaces/faces/twitter/kolage/48.jpg'>";
                    element += "<div class='message'>";
                    element += "<span class='chat-arrow'></span>";
                    element += "<a class='chat-name' href='#'>Admin &nbsp;</a>";
                    element += "<span class='chat-datetime'>at July 6, 2014" + h + ":" + m + "</span>";
                    element += "<span class='chat-body'>" + content + "</span>";
                    element += "</div>";
                    element += "</li>";

                    $me.append(element);
                    var height = 0;
                    $me.find('li').each(function(i, value) {
                        height += parseInt($(this).height());
                    });

                    height += '';
                    //alert(height);
                    $('.chat-scroller').slimScroll({
                        scrollTo: height,
                        "wheelStep": 30,
                    });
                }
            }
        });
        $('.chat-form span#btn-chat').on("click", function(e) {
            e.preventDefault();
            var $obj = $(this).parents('.chat-form').find('input#input-chat');
            var $me = $obj.parents('.portlet-body').find('ul.chats');
            var content = $obj.val();

            if (content !== "") {
                $me.addClass(content);
                var d = new Date();
                var h = d.getHours();
                var m = d.getMinutes();
                if (m < 10) m = "0" + m;
                $obj.val(""); // CLEAR TEXT ON TEXTAREA

                var element = "";
                element += "<li class='in'>";
                element += "<img class='avatar' src='https://s3.amazonaws.com/uifaces/faces/twitter/kolage/48.jpg'>";
                element += "<div class='message'>";
                element += "<span class='chat-arrow'></span>";
                element += "<a class='chat-name' href='#'>Admin &nbsp;</a>";
                element += "<span class='chat-datetime'>at July 6, 2014" + h + ":" + m + "</span>";
                element += "<span class='chat-body'>" + content + "</span>";
                element += "</div>";
                element += "</li>";

                $me.append(element);
                var height = 0;
                $me.find('li').each(function(i, value) {
                    height += parseInt($(this).height());
                });
                height += '';

                $('.chat-scroller').slimScroll({
                    scrollTo: height,
                    "wheelStep": 30,
                });
            }

        });
        //END CHAT FORM

        //BEGIN COUNTER FOR SUMMARY BOX
        counterNum($(".profit h4 span:first-child"), 189, 112, 1, 30);
        counterNum($(".income h4 span:first-child"), 636, 812, 1, 50);
        counterNum($(".task h4 span:first-child"), 103, 155, 1, 100);
        counterNum($(".visit h4 span:first-child"), 310, 376, 1, 500);

        function counterNum(obj, start, end, step, duration) {
                $(obj).html(start);
                setInterval(function() {
                    var val = Number($(obj).html());
                    if (val < end) {
                        $(obj).html(val + step);
                    } else {
                        clearInterval();
                    }
                }, duration);
            }
            //END COUNTER FOR SUMMARY BOX
            // MESSAGE ON TOP
        $('#message_trigger_ok').on('click', function(e) {
            e.preventDefault();
            $.scojs_message('This is an info message', $.scojs_message.TYPE_OK);
        });
        // NOTIFIC8
        // Get random message from array
        var msg_list = ['<p class="fa fa-magic" style="font-size: 35px; float:left;margin-top: 10px;margin-right: 10px;"></p> Use theme setting <i class="fa fa-cog"></i> to create best theme for you',
            '<p class="fa fa-magic" style="font-size: 35px; float:left;margin-top: 10px;margin-right: 10px;"></p> When you choose your best theme, we will remember it in all pages for you'
        ];
        var style_list = ['teal', 'amethyst', 'ruby', 'tangerine', 'lemon', 'lime'];

        var style_rand = style_list[Math.floor(Math.random() * (style_list.length))];
        var msg_rand = msg_list[Math.floor(Math.random() * (msg_list.length))];
        setTimeout(function() {
            $.notific8(msg_rand, {
                theme: style_rand,
                life: 4000
            });
        }, 5000);

    }, 50);
});
App.controller('NoneController', function($scope, $routeParams) {

});
App.controller('PageCalendarController', function($scope, $routeParams) {
    $.fn.Data.checkbox();

    var eventDrag = function(el) {
        // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end
        var eventObject = {
            title: $.trim(el.text()) // use the element's text as the event title
        };

        // store the Event Object in the DOM element so we can get to it later
        el.data('eventObject', eventObject);

        // make the event draggable using jQuery UI
        el.draggable({
            zIndex: 999,
            revert: true, // will cause the event to go back to its
            revertDuration: 0 //  original position after the drag
        });
    };

    $('#external-events div.external-event').each(function() {
        eventDrag($(this));
    });

    /* initialize the calendar
     -----------------------------------------------------------------*/
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar !!!
        drop: function(date, allDay) { // this function is called when something is dropped

            // retrieve the dropped element's stored Event Object
            var originalEventObject = $(this).data('eventObject');

            // we need to copy it, so that multiple events don't have a reference to the same object
            var copiedEventObject = $.extend({}, originalEventObject);

            // assign it the date that was reported
            copiedEventObject.start = date;
            copiedEventObject.allDay = allDay;

            // render the event on the calendar
            // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
            $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }

        }
    });

    var addEvent = function(name) {
        name = name.length === 0 ? "Untitled Event" : name;
        var html = $('<div class="external-event label label-default">' + name + '</div>');
        $('#event-box').append(html);
        eventDrag(html);
    };

    $('#event-add').on('click', function() {
        var name = $('#event-name').val();
        addEvent(name);
    });

    $(".page-content").css("padding-bottom", "120px");
});
App.controller('PageContactController', function($scope, $routeParams) {
    var map = new GMaps({
        div: '#gmaps',
        lat: -12.043333,
        lng: -77.028333
    });

    var infoWindow = new google.maps.InfoWindow({
        content: '<p><strong>Loop, Inc.</strong> <br>7275 Crescent Canyon St</p>'
    });

    map.addMarker({
        lat: -12.043333,
        lng: -77.028333,
        title: 'Company',
        map: map.map,
        infoWindow: infoWindow
    });
});
App.controller('PageGalleryController', function($scope, $routeParams) {
    $scope.update_gallery = function() {
        $('.mix-grid').mixItUp();
    };
});
App.controller('TableActionController', function($scope, $routeParams) {
    $scope.table_action_update = function() {
        $(".spinner").spinner();
        $.fn.Data.checkbox();

        //BEGIN CHECKBOX TABLE
        $('.checkall').on('ifChecked ifUnchecked', function(event) {
            if (event.type == 'ifChecked') {
                $(this).closest('table').find('input[type=checkbox]').iCheck('check');
            } else {
                $(this).closest('table').find('input[type=checkbox]').iCheck('uncheck');
            }
        });
        //END CHECKBOX TABLE
    };
});
App.controller('TableAdvancedController', function($scope, $routeParams) {
    $scope.table_advanced_update = function() {
        $(".tablesorter").tablesorter({
            headers: {
                0: {
                    sorter: false
                }
            }
        });
        $("table.tb-sticky-header").stickyTableHeaders();

        if ($('#demo-checkbox-radio').length <= 0) {
            $('input[type="checkbox"]:not(".switch")').iCheck({
                checkboxClass: 'icheckbox_minimal-grey',
                increaseArea: '20%' // optional
            });
            $('input[type="radio"]:not(".switch")').iCheck({
                radioClass: 'iradio_minimal-grey',
                increaseArea: '20%' // optional
            });
        }

        //BEGIN CHECKBOX TABLE
        $('.checkall').on('ifChecked ifUnchecked', function(event) {
            if (event.type == 'ifChecked') {
                $(this).closest('table').find('input[type=checkbox]').iCheck('check');
            } else {
                $(this).closest('table').find('input[type=checkbox]').iCheck('uncheck');
            }
        });
        //END CHECKBOX TABLE
    };
});

;
(function($, window, undefined) {
    'use strict';
    var name = 'stickyTableHeaders';
    var defaults = {
        fixedOffset: 0
    };

    function Plugin(el, options) {
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Listen for destroyed, call teardown
        base.$el.bind('destroyed',
            $.proxy(base.teardown, base));

        // Cache DOM refs for performance reasons
        base.$window = $(window);
        base.$clonedHeader = null;
        base.$originalHeader = null;

        // Keep track of state
        base.isSticky = false;
        base.leftOffset = null;
        base.topOffset = null;

        base.init = function() {
            base.options = $.extend({}, defaults, options);

            base.$el.each(function() {
                var $this = $(this);

                // remove padding on <table> to fix issue #7
                $this.css('padding', 0);

                base.$originalHeader = $('thead:first', this);
                base.$clonedHeader = base.$originalHeader.clone();

                base.$clonedHeader.addClass('tableFloatingHeader');
                base.$clonedHeader.css('display', 'none');

                base.$originalHeader.addClass('tableFloatingHeaderOriginal');

                base.$originalHeader.after(base.$clonedHeader);

                base.$printStyle = $('<style type="text/css" media="print">' +
                    '.tableFloatingHeader{display:none !important;}' +
                    '.tableFloatingHeaderOriginal{position:static !important;}' +
                    '</style>');
                $('head').append(base.$printStyle);
            });

            base.updateWidth();
            base.toggleHeaders();

            base.bind();
        };

        base.destroy = function() {
            base.$el.unbind('destroyed', base.teardown);
            base.teardown();
        };

        base.teardown = function() {
            if (base.isSticky) {
                base.$originalHeader.css('position', 'static');
            }
            $.removeData(base.el, 'plugin_' + name);
            base.unbind();

            base.$clonedHeader.remove();
            base.$originalHeader.removeClass('tableFloatingHeaderOriginal');
            base.$originalHeader.css('visibility', 'visible');
            base.$printStyle.remove();

            base.el = null;
            base.$el = null;
        };

        base.bind = function() {
            base.$window.on('scroll.' + name, base.toggleHeaders);
            base.$window.on('resize.' + name, base.toggleHeaders);
            base.$window.on('resize.' + name, base.updateWidth);
        };

        base.unbind = function() {
            // unbind window events by specifying handle so we don't remove too much
            base.$window.off('.' + name, base.toggleHeaders);
            base.$window.off('.' + name, base.updateWidth);
            base.$el.off('.' + name);
            base.$el.find('*').off('.' + name);
        };

        base.toggleHeaders = function() {
            base.$el.each(function() {
                var $this = $(this);

                var newTopOffset = isNaN(base.options.fixedOffset) ?
                    base.options.fixedOffset.height() : base.options.fixedOffset;

                var offset = $this.offset();
                var scrollTop = base.$window.scrollTop() + newTopOffset;
                var scrollLeft = base.$window.scrollLeft();

                if ((scrollTop > offset.top) && (scrollTop < offset.top + $this.height() - base.$clonedHeader.height())) {
                    var newLeft = offset.left - scrollLeft;
                    if (base.isSticky && (newLeft === base.leftOffset) && (newTopOffset === base.topOffset)) {
                        return;
                    }

                    base.$originalHeader.css({
                        'position': 'fixed',
                        'top': newTopOffset,
                        'margin-top': 0,
                        'left': newLeft,
                        'z-index': 1 // #18: opacity bug
                    });
                    base.$clonedHeader.css('display', '');
                    base.isSticky = true;
                    base.leftOffset = newLeft;
                    base.topOffset = newTopOffset;

                    // make sure the width is correct: the user might have resized the browser while in static mode
                    base.updateWidth();
                } else if (base.isSticky) {
                    base.$originalHeader.css('position', 'static');
                    base.$clonedHeader.css('display', 'none');
                    base.isSticky = false;
                }
            });
        };

        base.updateWidth = function() {
            if (!base.isSticky) {
                return;
            }
            // Copy cell widths from clone
            var $origHeaders = $('th,td', base.$originalHeader);
            $('th,td', base.$clonedHeader).each(function(index) {

                var width, $this = $(this);

                if ($this.css('box-sizing') === 'border-box') {
                    width = $this.outerWidth(); // #39: border-box bug
                } else {
                    width = $this.width();
                }

                $origHeaders.eq(index).css({
                    'min-width': width,
                    'max-width': width
                });
            });

            // Copy row width from whole table
            base.$originalHeader.css('width', base.$clonedHeader.width());
        };

        base.updateOptions = function(options) {
            base.options = $.extend({}, defaults, options);
            base.updateWidth();
            base.toggleHeaders();
        };

        // Run initializer
        base.init();
    }

    // A plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[name] = function(options) {
        return this.each(function() {
            var instance = $.data(this, 'plugin_' + name);
            if (instance) {
                if (typeof options === "string") {
                    instance[options].apply(instance);
                } else {
                    instance.updateOptions(options);
                }
            } else if (options !== 'destroy') {
                $.data(this, 'plugin_' + name, new Plugin(this, options));
            }
        });
    };

})(jQuery, window);
App.controller('TableDatatablesController', function($scope, $routeParams) {
    setTimeout(function() {
        // Init
        var spinner = $(".spinner").spinner();
        var table = $('#table_id').dataTable({
            "lengthMenu": [
                [5, 10, 25, 50, -1],
                [5, 10, 25, 50, "All"]
            ]
        });

        var tableTools = new $.fn.dataTable.TableTools(table, {
            "sSwfPath": "../vendors/DataTables/extensions/TableTools/swf/copy_csv_xls_pdf.swf",
            "buttons": [
                "copy",
                "csv",
                "xls",
                "pdf", {
                    "type": "print",
                    "buttonText": "Print me!"
                }
            ]
        });
        $(".DTTT_container").css("float", "right");

        if ($('#demo-checkbox-radio').length <= 0) {
            $('input[type="checkbox"]:not(".switch")').iCheck({
                checkboxClass: 'icheckbox_minimal-grey',
                increaseArea: '20%' // optional
            });

            $('input[type="radio"]:not(".switch")').iCheck({
                radioClass: 'iradio_minimal-grey',
                increaseArea: '20%' // optional
            });
        }

        //BEGIN CHECKBOX TABLE
        $('.checkall').on('ifChecked ifUnchecked', function(event) {
            if (event.type == 'ifChecked') {
                $(this).closest('table').find('input[type=checkbox]').iCheck('check');
            } else {
                $(this).closest('table').find('input[type=checkbox]').iCheck('uncheck');
            }
        });
        //END CHECKBOX TABLE
    }, 50);

});
App.controller('TableEditableController', function($scope, $routeParams) {
    setTimeout(function() {
        var oTable = $('#example1').dataTable();

        var nEditing = null;

        $('#example1').on('click', 'a.edit', function(e) {
            e.preventDefault();
            var nRow = $(this).parents('tr')[0];
            if (nEditing !== null && nEditing != nRow) {
                rollbackRow(oTable, nEditing);
                editRow(oTable, nRow);
                nEditing = nRow;
            } else if (nEditing == nRow && this.innerHTML == "Save") {
                saveRow(oTable, nEditing);
                nEditing = null;
            } else {
                editRow(oTable, nRow);
                nEditing = nRow;
            }
        });

        function editRow(oTable, nRow) {
            var aData = oTable.fnGetData(nRow);
            var rTds = $('>td', nRow);
            rTds[0].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[0] + '">';
            rTds[1].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[1] + '">';
            rTds[2].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[2] + '">';
            rTds[3].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[3] + '">';
            rTds[4].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[4] + '">';
            rTds[5].innerHTML = '<a class="edit" href="">Save</a>';
            rTds[6].innerHTML = '<a class="cancel" href="">Cancel</a>';
        }

        function saveRow(oTable, nRow) {
            var rInputs = $('input', nRow);
            oTable.fnUpdate(rInputs[0].value, nRow, 0, false);
            oTable.fnUpdate(rInputs[1].value, nRow, 1, false);
            oTable.fnUpdate(rInputs[2].value, nRow, 2, false);
            oTable.fnUpdate(rInputs[3].value, nRow, 3, false);
            oTable.fnUpdate(rInputs[4].value, nRow, 4, false);
            oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 5, false);
            oTable.fnUpdate('<a class="delete" href="">Delete</a>', nRow, 6, false);
            oTable.fnDraw();
        }

        $('#example1').on('click', 'a.delete', function(e) {
            e.preventDefault();
            if (confirm("Are you sure to delete this row ?") === false) {
                return;
            }
            var nRow = $(this).parents('tr')[0];
            oTable.fnDeleteRow(nRow);
        });

        $('#example1').on('click', 'a.cancel', function(e) {
            e.preventDefault();
            if ($(this).attr("data-mode") == "new") {
                var nRow = $(this).parents('tr')[0];
                oTable.fnDeleteRow(nRow);
            } else {
                rollbackRow(oTable, nEditing);
                nEditing = null;
            }
        });

        function rollbackRow(oTable, nRow) {
            var aData = oTable.fnGetData(nRow);
            var rTds = $('>td', nRow);
            for (var i = 0, iLen = rTds.length; i < iLen; i++) {
                oTable.fnUpdate(aData[i], nRow, i, false);
            }
            oTable.fnDraw();
        }

        $(".DTTT_container").hide();
    }, 50);

});
App.controller('TableExportController', function($scope, $routeParams) {

});
App.controller('TableFilterController', function($scope, $routeParams) {
    $('.datepicker-filter').datepicker({
        autoclose: true
    });
    if ($('#demo-checkbox-radio').length <= 0) {
        $('input[type="checkbox"]:not(".switch")').iCheck({
            checkboxClass: 'icheckbox_minimal-grey',
            increaseArea: '20%' // optional
        });
        $('input[type="radio"]:not(".switch")').iCheck({
            radioClass: 'iradio_minimal-grey',
            increaseArea: '20%' // optional
        });
    }

    //BEGIN CHECKBOX TABLE
    $('.checkall').on('ifChecked ifUnchecked', function(event) {
        if (event.type == 'ifChecked') {
            $(this).closest('table').find('input[type=checkbox]').iCheck('check');
        } else {
            $(this).closest('table').find('input[type=checkbox]').iCheck('uncheck');
        }
    });
    //END CHECKBOX TABLE
});
App.controller('TableSampleController', function($scope, $routeParams) {
    var spinner = $(".spinner").spinner();
    //BEGIN JQUERY TABLE SORTER
    $(".tablesorter").tablesorter({
        headers: {
            0: {
                sorter: false
            }
        }
    });
    //END JQUERY TABLE SORTER

    //BEGIN JQUERY DATE PICKER
    $('.datepicker-filter').datepicker({
        autoclose: true
    });
    //END JQUERY DATE PICKER

    $('.submit-action').click(function(e) {
        if ($('.table-group-action-select').val() > 0) {
            $('.tb-alert-success').fadeIn();
            $('.tb-alert-error').fadeOut();
        } else {
            $('.tb-alert-success').fadeOut();
            $('.tb-alert-error').fadeIn();
        }
    });

    //BEGIN PAGING TABLE
    pager(0);

    $(".gw-prev").click(function(e) {
        if (!$(this).hasClass('disabled')) {
            pager(-1);
            load();
        }
    });
    $(".gw-next").click(function(e) {
        if (!$(this).hasClass('disabled')) {
            pager(1);
            load();
        }
    });
    $(".gw-pageSize").change(function(e) {
        load();
    });
    //END PAGING TABLE

    function pager(p) {
        var page = Math.max(1, (parseInt($(".gw-page").val()) + p));
        $(".gw-page").val(page);

        if (1 == page) {
            $(".gw-prev").addClass('disabled');
        } else {
            $(".gw-prev").removeClass('disabled');
        }

        if (10 == page) {
            $(".gw-next").addClass('disabled');
        } else {
            $(".gw-next").removeClass('disabled');
        }
    }

    function load() {
        var checkbox = [
            '<input type="checkbox"/>'
        ];
        var name = [
            'Harry Foster',
            'Patricia Wells',
            'Megan Gordon',
            'Diana Richards'
        ];
        var status = [
            '<span class="label label-sm label-success">Approved</span>',
            '<span class="label label-sm label-info">Pending</span>',
            '<span class="label label-sm label-warning">Suspended</span>',
            '<span class="label label-sm label-danger">Blocked</span>'
        ];
        var country = [
            'France',
            'England',
            'United States',
            'Canada'
        ];
        var gender = [
            'Male',
            'Female'
        ];
        var order = [
            '32',
            '68',
            '95',
            '20'
        ];
        var date = [
            '14-05-2014',
            '26-02-2014',
            '12-04-2014',
            '21-03-2014'
        ];
        var price = [
            '$232.30',
            '$652.50',
            '$395.50',
            '$245.90'
        ];

        $(".grid-view tbody > tr").remove();

        var pageSize = parseInt($(".gw-pageSize").val());
        var page = parseInt($(".gw-page").val());
        var s = (page - 1) * pageSize;

        var html = $(".gw-row").val();
        var result = '';
        var m = s + pageSize;
        for (s; s < m; s++) {
            var r = Math.floor((Math.random() * 3) + 1);
            var k = Math.floor((Math.random() * 3) + 1);
            var h = Math.floor((Math.random() * 2));
            result += html.replace("{checkbox}", checkbox).replace("{index}", s).replace("{name}", name[k]).replace("{country}", country[r]).replace("{gender}", gender[h]).replace("{order}", order[r]).replace("{date}", date[k]).replace("{price}", price[k]).replace("{status}", status[r]);
        }

        $(".grid-view tbody").html(result);
        var spinner = $(".spinner").spinner();
        $('.grid-view tbody tr td input[type="checkbox"]').iCheck({
            checkboxClass: 'icheckbox_minimal-grey',
            increaseArea: '20%' // optional
        });
    }

    if ($('#demo-checkbox-radio').length <= 0) {
        $('input[type="checkbox"]:not(".switch")').iCheck({
            checkboxClass: 'icheckbox_minimal-grey',
            increaseArea: '20%' // optional
        });

        $('input[type="radio"]:not(".switch")').iCheck({
            radioClass: 'iradio_minimal-grey',
            increaseArea: '20%' // optional
        });
    }

    //BEGIN CHECKBOX TABLE
    $('.checkall').on('ifChecked ifUnchecked', function(event) {
        if (event.type == 'ifChecked') {
            $(this).closest('table').find('input[type=checkbox]').iCheck('check');
        } else {
            $(this).closest('table').find('input[type=checkbox]').iCheck('uncheck');
        }
    });
    //END CHECKBOX TABLE
});
App.controller('CheckboxRadioController', function($scope, $routeParams) {
    $scope.updateCheckbox = function() {
        $('#minimal-skin input').iCheck({
            checkboxClass: 'icheckbox_minimal',
            radioClass: 'iradio_minimal',
            increaseArea: '20%' // optional
        });
        $('#square-skin input').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green'
        });
        $('#flat-skin input').iCheck({
            checkboxClass: 'icheckbox_flat-red',
            radioClass: 'iradio_flat-red'
        });
        $('#line-skin input').each(function() {
            var self = $(this),
                label = self.next(),
                label_text = label.text();

            label.remove();
            self.iCheck({
                checkboxClass: 'icheckbox_line-blue',
                radioClass: 'iradio_line-blue',
                insert: '<div class="icheck_line-icon"></div>' + label_text
            });
        });
        $('#polaris-skin input').iCheck({
            checkboxClass: 'icheckbox_polaris',
            radioClass: 'iradio_polaris',
            increaseArea: '-10%'
        });
        $('#futurico-skin input').iCheck({
            checkboxClass: 'icheckbox_futurico',
            radioClass: 'iradio_futurico',
            increaseArea: '20%'
        });

        $('.colors li').click(function() {
            color_change($(this));
        });
    };
});
App.controller('UiDropdownSelectController', function($scope, $routeParams) {
    setTimeout(function() {
        //BEGIN PLUGINS SELECT2
        $('.select2-category').select2({
            placeholder: "Select an option",
            allowClear: true
        });
        $(".select2-tagging-support").select2({
            tags: ["red", "green", "blue", "yellow", "green"]
        });
        $(".select2-multi-value").select2();
        $('.select2-size').select2({
            placeholder: "Select an option",
            allowClear: true
        });

        function movieFormatResult(movie) {
            var markup = "<table class='movie-result'><tr>";
            if (movie.posters !== undefined && movie.posters.thumbnail !== undefined) {
                markup += "<td valign='top'><img src='" + movie.posters.thumbnail + "' style='margin-right: 10px;' /></td>";
            }
            markup += "<td valign='top'><strong style='margin-bottom: 7px;'>" + movie.title + "</strong>";
            if (movie.critics_consensus !== undefined) {
                markup += "<div class='movie-synopsis' style='font-size: 12px;'>" + movie.critics_consensus + "</div>";
            } else if (movie.synopsis !== undefined) {
                markup += "<div class='movie-synopsis' style='font-size: 12px;'>" + movie.synopsis + "</div>";
            }
            markup += "</td></tr></table>";
            return markup;
        }

        function movieFormatSelection(movie) {
            return movie.title;
        }

        $(".select2-loading-remote-data").select2({
            placeholder: "Search for a movie",
            minimumInputLength: 1,
            ajax: { // instead of writing the function to execute the request we use Select2's convenient helper
                url: "http://api.rottentomatoes.com/api/public/v1.0/movies.json",
                dataType: 'jsonp',
                data: function(term, page) {
                    return {
                        q: term, // search term
                        page_limit: 10,
                        apikey: "ju6z9mjyajq2djue3gbvv26t" // please do not use so this example keeps working
                    };
                },
                results: function(data, page) { // parse the results into the format expected by Select2.
                    // since we are using custom formatting functions we do not need to alter remote JSON data
                    return {
                        results: data.movies
                    };
                }
            },
            initSelection: function(element, callback) {
                // the input tag has a value attribute preloaded that points to a preselected movie's id
                // this function resolves that id attribute to an object that select2 can render
                // using its formatResult renderer - that way the movie name is shown preselected
                var id = $(element).val();
                if (id !== "") {
                    $.ajax("http://api.rottentomatoes.com/api/public/v1.0/movies/" + id + ".json", {
                        data: {
                            apikey: "ju6z9mjyajq2djue3gbvv26t"
                        },
                        dataType: "jsonp"
                    }).done(function(data) {
                        callback(data);
                    });
                }
            },
            formatResult: movieFormatResult, // omitted for brevity, see the source of this page
            formatSelection: movieFormatSelection, // omitted for brevity, see the source of this page
            dropdownCssClass: "bigdrop", // apply css that makes the dropdown taller
            escapeMarkup: function(m) {
                    return m;
                } // we do not want to escape markup since we are displaying html in results
        });
        $(".select2-loading-data").select2({
            minimumInputLength: 1,
            query: function(query) {
                var data = {
                        results: []
                    },
                    i, j, s;
                for (i = 1; i < 5; i++) {
                    s = "";
                    for (j = 0; j < i; j++) {
                        s = s + query.term;
                    }
                    data.results.push({
                        id: query.term + i,
                        text: s
                    });
                }
                query.callback(data);
            }
        });
        //END PLUGINS SELECT2

        //BEGIN PLUGINS BOOTSTRAP SELECT
        $('.selectpicker').selectpicker({
            iconBase: 'fa',
            tickIcon: 'fa-check'
        });
        //END PLUGINS BOOTSTRAP SELECT

        //BEGIN PLUGINS MULTI SELECT
        $('#pre-selected-options').multiSelect();
        $('#callbacks').multiSelect({
            afterSelect: function(values) {
                alert("Select value: " + values);
            },
            afterDeselect: function(values) {
                alert("Deselect value: " + values);
            }
        });
        $('#keep-order').multiSelect({
            keepOrder: true
        });
        $('#public-methods').multiSelect();
        $('#select-all').click(function() {
            $('#public-methods').multiSelect('select_all');
            return false;
        });
        $('#deselect-all').click(function() {
            $('#public-methods').multiSelect('deselect_all');
            return false;
        });
        var arr = [];

        for (var i = 0; i < 20; i++) {
            arr[i] = 'elem_' + (i + 1);
        }
        $('#select-20').click(function() {
            $('#public-methods').multiSelect('select', arr);
            return false;
        });
        $('#deselect-20').click(function() {
            $('#public-methods').multiSelect('deselect', arr);
            return false;
        });
        $('#refresh').on('click', function() {
            $('#public-methods').multiSelect('refresh');
            return false;
        });
        $('#add-option').on('click', function() {
            $('#public-methods').multiSelect('addOption', {
                value: 21,
                text: 'test 21',
                index: 0
            });
            return false;
        });
        $('#optgroup').multiSelect({
            selectableOptgroup: true
        });
        //END PLUGINS MULTI SELECT
    }, 500);
});
App.controller('UiEditorsController', function($scope, $routeParams) {
    //BEGIN BOOTSTRAP WYSIWYG5
    $('.wysihtml5').wysihtml5();
    //END BOOTSTRAP WYSIWYG5

    //BEGIN CKEDITOR
    CKEDITOR.replace('editor1');
    CKEDITOR.disableAutoInline = true;
    //END CKEDITOR

    //BEGIN SUMMERNOTE EDITOR
    $('#summernote-default').summernote();
    $('#summernote-edit').click(function() {
        $('.click2edit').summernote({
            focus: true
        });
    });
    $('#summernote-save').click(function() {
        var aHTML = $('.click2edit').code(); //save HTML If you need(aHTML: array).
        $('.click2edit').destroy();
    });
    //END SUMMERNOTE EDITOR

    $("[data-provide='markdown']").markdown({
        autofocus: false,
        savable: false
    });
});
App.controller('UiGeneralsController', function($scope, $routeParams) {
    var timeout = setTimeout(function() {
        var msg = '<p class="fa fa-lightbulb-o" style="font-size: 35px; float:left;margin-top: 10px;margin-right: 10px;"></p> Resize your web browser to see mobile & tablet tabs version';
        $.notific8(msg);
    }, 3000);

    $scope.loadInputGroupTab = function() {
        if ($('#demo-checkbox-radio').length <= 0) {
            $('input[type="checkbox"]:not(".switch")').iCheck({
                checkboxClass: 'icheckbox_minimal-grey',
                increaseArea: '20%' // optional
            });
            $('input[type="radio"]:not(".switch")').iCheck({
                radioClass: 'iradio_minimal-grey',
                increaseArea: '20%' // optional
            });
        }
    };

});
App.controller('UIModalsController', function($scope, $routeParams) {
    $("a[href='#modal-notlong']").click(function(e) {
        e.preventDefault();
    });
});
App.controller('UiNestableListController', function($scope, $routeParams) {
    var updateOutput = function(e) {
        var list = e.length ? e : $(e.target),
            output = list.data('output');
        if (window.JSON) {
            output.val(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
        } else {
            output.val('JSON browser support required for this demo.');
        }
    };

    // activate Nestable for list 1
    $('#nestable').nestable({
        group: 1
    }).on('change', updateOutput);

    // activate Nestable for list 2
    $('#nestable2').nestable({
        group: 1
    }).on('change', updateOutput);

    // output initial serialised data
    updateOutput($('#nestable').data('output', $('#nestable-output')));
    updateOutput($('#nestable2').data('output', $('#nestable2-output')));

    $('#nestable-menu').on('click', function(e) {
        var target = $(e.target),
            action = target.data('action');
        if (action === 'expand-all') {
            $('.dd').nestable('expandAll');
        }
        if (action === 'collapse-all') {
            $('.dd').nestable('collapseAll');
        }
    });

    $('#nestable3').nestable();
});
App.controller('UINotific8NotificationsController', function($scope, $routeParams) {
    $.fn.Data.checkbox();

    WS.jQuery.notific8.init();

    $('#message_trigger_ok').on('click', function(e) {
        e.preventDefault();
        $.scojs_message('The system has been updated with many new features', $.scojs_message.TYPE_OK);
    });
    $('#message_trigger_err').on('click', function(e) {
        e.preventDefault();
        $.scojs_message('The system is not working for maintenance', $.scojs_message.TYPE_ERROR);
    });
});
App.controller('UiPortletsController', function($scope, $routeParams) {
    $('.portlet-scroll').slimScroll({
        "height": "250",
        "alwaysVisible": true
    });

    $(".column").sortable({
        connectWith: ".column",
        opacity: 0.8,
        coneHelperSize: true,
        placeholder: 'sortable-placeholder',
        forcePlaceholderSize: true,
        tolerance: "pointer"
    });

    $(".column").disableSelection();


    //BEGIN PORTLET
    $(".portlet").each(function(index, element) {
        var me = $(this);
        $(">.portlet-header>.tools>i", me).click(function(e) {
            if ($(this).hasClass('fa-chevron-up')) {
                $(">.portlet-body", me).slideUp('fast');
                $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            } else if ($(this).hasClass('fa-chevron-down')) {
                $(">.portlet-body", me).slideDown('fast');
                $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            } else if ($(this).hasClass('fa-cog')) {
                //Show modal
            } else if ($(this).hasClass('fa-refresh')) {
                //$(">.portlet-body", me).hide();
                $(">.portlet-body", me).addClass('wait');

                setTimeout(function() {
                    //$(">.portlet-body>div", me).show();
                    $(">.portlet-body", me).removeClass('wait');
                }, 1000);
            } else if ($(this).hasClass('fa-times')) {
                me.remove();
            }
        });
    });
    //END PORTLET
});
App.controller('UiProgressbarsController', function($scope, $routeParams) {
    $scope.update_progressbar = function() {
        setTimeout(function() {
            var $ps = $('.m-multi-trigger .progress-bar');
            $('#m-multi-trigger-0').click(function() {
                $ps.attr('aria-valuetransitiongoal', 0).progressbar();
            });
            $('#m-multi-trigger-50').click(function() {
                $ps.attr('aria-valuetransitiongoal', 50).progressbar();
            });
            $('#m-multi-trigger-100').click(function() {
                $ps.attr('aria-valuetransitiongoal', 100).progressbar();
            });
        }, 50);
        setTimeout(function() {
            $('#refresh-speed-progressbars .progress-bar').progressbar({
                display_text: 'center',
                use_percentage: false,
                refresh_speed: 2000
            });
            $('#delayed-progressbars .progress-bar').progressbar({
                transition_delay: 3000
            });
            $('#percentage-format .progress-bar').progressbar({
                display_text: 'center',
                percent_format: function(p) {
                    return p + ' percent';
                }
            });
            $('#amount-format .progress-bar').progressbar({
                display_text: 'center',
                use_percentage: false,
                amount_format: function(p, t) {
                    return p + ' of ' + t;
                }
            });
            $('#filled-text .progress-bar').progressbar({
                display_text: 'fill'
            });
            $('#filled-text-nonpercentage .progress-bar').progressbar({
                display_text: 'fill',
                use_percentage: false
            });
            $('#center-text .progress-bar').progressbar({
                display_text: 'center'
            });
            $('#center-text-nonpercentage .progress-bar').progressbar({
                display_text: 'center',
                use_percentage: false
            });
            $('#vertical-center-text .progress-bar').progressbar({
                display_text: 'center'
            });
            $('#vertical-center-text-nonpercentage .progress-bar').progressbar({
                display_text: 'center',
                use_percentage: false
            });
            $('#vertical-filled-text .progress-bar').progressbar({
                display_text: 'fill'
            });
            $('#vertical-filled-text-nonpercentage .progress-bar').progressbar({
                display_text: 'fill',
                use_percentage: false
            });
        }, 100);
        setTimeout(function() {
            $('.progress-bar').progressbar();
        }, 150);
    };
});
App.controller('UiSlidersController', function($scope, $routeParams) {
    $scope.ui_slider_tab = function() {
        //BEGIN JQUERY UI SLIDERS DEFAULT
        $("#slider-default").slider();
        // END JQUERY UI SLIDERS DEFAULT

        //BEGIN MULTIPLE SLIDERS
        $("#slider-multi >  span").each(function() {
            // read initial values from markup and remove that
            var value = parseInt($(this).text(), 10);
            $(this).empty().slider({
                value: value,
                range: "min",
                animate: true,
                orientation: "vertical"
            });
        });
        //END MULTIPLE SLIDERS

        //END RANGE SLIDER
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function(event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
        //END RANGE SLIDER

        //BEGIN RANGE MAXIMUM
        $("#slider-range-max").slider({
            range: "max",
            min: 1,
            max: 10,
            value: 2,
            slide: function(event, ui) {
                $("#amount-max").val(ui.value);
            }
        });
        $("#amount-max").val($("#slider-range-max").slider("value"));
        //END RANGE MAXIMUM

        //BEGIN RANGE MINIMUM
        $("#slider-range-min").slider({
            range: "min",
            value: 37,
            min: 1,
            max: 700,
            slide: function(event, ui) {
                $("#amount-min").val("$" + ui.value);
            }
        });
        $("#amount-min").val("$" + $("#slider-range-min").slider("value"));
        //END RANGE MINIMUM

        //BEGIN SNAP TO INCREMENTS
        $("#slider-snap").slider({
            value: 100,
            min: 0,
            max: 500,
            step: 50,
            slide: function(event, ui) {
                $("#amount-snap").val("$" + ui.value);
            }
        });
        $("#amount-snap").val("$" + $("#slider-snap").slider("value"));
        //END SNAP TO INCREMENTS

        //BEGIN VERTICAL SLIDER
        $("#slider-vertical").slider({
            orientation: "vertical",
            range: "min",
            min: 0,
            max: 100,
            value: 60,
            slide: function(event, ui) {
                $("#amount-vertical").val(ui.value);
            }
        });
        $("#amount-vertical").val($("#slider-vertical").slider("value"));
        //END VERTICAL SLIDER

        //BEGIN VERTICAL RANGE SLIDER
        $("#slider-vertical-range").slider({
            orientation: "vertical",
            range: true,
            values: [17, 67],
            slide: function(event, ui) {
                $("#amount-vertical-range").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount-vertical-range").val("$" + $("#slider-vertical-range").slider("values", 0) +
            " - $" + $("#slider-vertical-range").slider("values", 1));
        //END VERTICAL RANGE SLIDER
    };

    $scope.noui_slider_tab = function() {
        //BEGIN NOUI SLIDER DEFAULT
        $('#noui-slider-default').noUiSlider({
            start: [4000, 8000],
            range: {
                'min': [2000],
                'max': [10000]
            }
        });
        //END NOUI SLIDER DEFAULT

        //BEGIN NOUI SLIDER RANGE
        $('#noui-slider-range').noUiSlider({
            start: [4000],
            range: {
                'min': [2000],
                'max': [10000]
            },
            serialization: {
                lower: [
                    $.Link({
                        target: $("#slider1val")
                    })
                ]
            }
        });
        //END NOUI SLIDER RANGE

        //BEGIN NOUI SLIDER STEPPING & SNAPPING TO VALUE
        $('#noui-slider-step-snap').noUiSlider({
            start: [4000],
            step: 1000,
            range: {
                'min': [2000],
                'max': [10000]
            },
            serialization: {
                lower: [
                    $.Link({
                        target: $("#slider2val")
                    })
                ]
            }
        });
        //END NOUI SLIDER STEPPING & SNAPPING TO VALUE
    };

    $scope.ion_range_slider_tab = function() {
        //BEGIN ION RANGE SLIDER
        $("#example-1").ionRangeSlider({
            type: "single",
            step: 100,
            postfix: " light years",
            from: 55000,
            hideText: true
        });
        $("#example-2").ionRangeSlider({
            min: 0,
            max: 5000,
            from: 1000,
            to: 4000,
            type: 'double',
            step: 1,
            prefix: "$",
            prettify: false,
            hasGrid: true
        });
        $("#example-3").ionRangeSlider();
        $("#example-4").ionRangeSlider({
            min: 0,
            max: 10,
            type: 'single',
            step: 0.1,
            postfix: " mm",
            prettify: false,
            hasGrid: true
        });
        $("#example-5").ionRangeSlider({
            min: -50,
            max: 50,
            from: 0,
            type: 'single',
            step: 1,
            postfix: "°",
            prettify: false,
            hasGrid: true
        });
        $("#example-6").ionRangeSlider({
            values: [
                "January", "February", "March",
                "April", "May", "June",
                "July", "August", "September",
                "October", "November", "December"
            ],
            type: 'single',
            hasGrid: true
        });
        //END ION RANGE SLIDER
    };

});
App.controller('UiTabsController', function($scope, $routeParams) {
    //BEGIN ACCORDION WITH ICONS
    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find("i.indicator")
            .toggleClass('glyphicon-chevron-left glyphicon-chevron-down');
    }
    $('#accordion1').on('hidden.bs.collapse', toggleChevron);
    $('#accordion1').on('shown.bs.collapse', toggleChevron);
    //END ACCORDION WITH ICONS

    //BEGIN JQUERY SLIMSCROLL
    $('.scrollspy-example').slimScroll({
        "height": "200",
        "railVisible": true,
        "alwaysVisible": true
    });
    //END JQUERY SLIMSCROLL
});
App.controller('UiToastrNotificationsController', function($scope, $routeParams) {
    var i = -1;
    var toastCount = 0;
    var $toastlast;

    var getMessage = function() {
        var msgs = ['My name is Inigo Montoya. You killed my father. Prepare to die!',
            '<div><input class="input-small" value="textbox"/>&nbsp;<a href="http://johnpapa.net" target="_blank">This is a hyperlink</a></div><div><button type="button" id="okBtn" class="btn btn-primary">Close me</button><button type="button" id="surpriseBtn" class="btn" style="margin: 0 8px 0 8px">Surprise me</button></div>',
            'Are you the six fingered man?',
            'Inconceivable!',
            'I do not think that means what you think it means.',
            'Have fun storming the castle!'
        ];
        i++;
        if (i === msgs.length) {
            i = 0;
        }

        return msgs[i];
    };
    $('#showtoast').click(function() {
        var shortCutFunction = $("#toastTypeGroup input:radio:checked").val();
        var msg = $('#message').val();
        var title = $('#title').val() || '';
        var $showDuration = $('#showDuration');
        var $hideDuration = $('#hideDuration');
        var $timeOut = $('#timeOut');
        var $extendedTimeOut = $('#extendedTimeOut');
        var $showEasing = $('#showEasing');
        var $hideEasing = $('#hideEasing');
        var $showMethod = $('#showMethod');
        var $hideMethod = $('#hideMethod');
        var toastIndex = toastCount++;

        toastr.options = {
            closeButton: $('#closeButton').prop('checked'),
            debug: $('#debugInfo').prop('checked'),
            positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',
            onclick: null
        };

        if ($('#addBehaviorOnToastClick').prop('checked')) {
            toastr.options.onclick = function() {
                alert('You can perform some custom action after a toast goes away');
            };
        }

        if ($showDuration.val().length) {
            toastr.options.showDuration = $showDuration.val();
        }

        if ($hideDuration.val().length) {
            toastr.options.hideDuration = $hideDuration.val();
        }

        if ($timeOut.val().length) {
            toastr.options.timeOut = $timeOut.val();
        }

        if ($extendedTimeOut.val().length) {
            toastr.options.extendedTimeOut = $extendedTimeOut.val();
        }

        if ($showEasing.val().length) {
            toastr.options.showEasing = $showEasing.val();
        }

        if ($hideEasing.val().length) {
            toastr.options.hideEasing = $hideEasing.val();
        }

        if ($showMethod.val().length) {
            toastr.options.showMethod = $showMethod.val();
        }

        if ($hideMethod.val().length) {
            toastr.options.hideMethod = $hideMethod.val();
        }

        if (!msg) {
            msg = getMessage();
        }

        $("#toastrOptions").text("Command: toastr[" + shortCutFunction + "](\"" + msg + (title ? "\", \"" + title : '') + "\")\n\ntoastr.options = " + JSON.stringify(toastr.options, null, 2));

        var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
        $toastlast = $toast;
        if ($toast.find('#okBtn').length) {
            $toast.delegate('#okBtn', 'click', function() {
                alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
                $toast.remove();
            });
        }
        if ($toast.find('#surpriseBtn').length) {
            $toast.delegate('#surpriseBtn', 'click', function() {
                alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
            });
        }
    });

    function getLastToast() {
        return $toastlast;
    }
    $('#clearlasttoast').click(function() {
        toastr.clear(getLastToast());
    });
    $('#cleartoasts').click(function() {
        toastr.clear();
    });

    if ($('#demo-checkbox-radio').length <= 0) {
        $('input[type="checkbox"]:not(".switch")').iCheck({
            checkboxClass: 'icheckbox_minimal-grey',
            increaseArea: '20%' // optional
        });
        $('input[type="radio"]:not(".switch")').iCheck({
            radioClass: 'iradio_minimal-grey',
            increaseArea: '20%' // optional
        });
    }

});
App.controller('UiTreeviewController', function($scope, $routeParams) {
    $scope.jstree_tab = function() {
        //BEGIN JSTREEVIEW
        $('#tree1, #tree2, #tree3, #tree4, #tree6').jstree();
        $('#tree5').jstree({
            'core': {
                'data': {
                    'url': 'vendors/jstree/docs/assets/ajax_nodes.html',
                    'data': function(node) {
                        return {
                            'id': node.id
                        };
                    }
                }
            }
        });
        $('#tree7').jstree({
            'plugins': ["wholerow", "checkbox"],
            'core': {
                'data': [{
                        "text": "Same but with checkboxes",
                        "children": [{
                            "text": "initially selected",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "custom icon URL",
                            "icon": "http://jstree.com/tree-icon.png"
                        }, {
                            "text": "initially open",
                            "state": {
                                "opened": true
                            },
                            "children": ["Another node"]
                        }, {
                            "text": "custom icon class",
                            "icon": "glyphicon glyphicon-leaf"
                        }]
                    },
                    "And wholerow selection"
                ]
            }
        });
        $("#tree8").jstree({
            "checkbox": {
                "keep_selected_style": false
            },
            "plugins": ["checkbox"]
        });
        $("#tree9").jstree({
            "core": {
                "check_callback": true
            },
            "plugins": ["contextmenu"]
        });
        $("#tree10").jstree({
            "core": {
                "check_callback": true
            },
            "plugins": ["dnd"]
        });
        $("#tree11").jstree({
            "plugins": ["search"]
        });
        var to = false;
        $('#input-tree11').keyup(function() {
            if (to) {
                clearTimeout(to);
            }
            to = setTimeout(function() {
                var v = $('#input-tree11').val();
                $('#tree11').jstree(true).search(v);
            }, 250);
        });
        $("#tree12").jstree({
            "plugins": ["sort"]
        });
        $("#tree13").jstree({
            "state": {
                "key": "demo2"
            },
            "plugins": ["state"]
        });
        $("#tree14").jstree({
            "types": {
                "default": {
                    "icon": "glyphicon glyphicon-flash"
                },
                "demo": {
                    "icon": "glyphicon glyphicon-ok"
                }
            },
            "plugins": ["types"]
        });
        $("#tree15").jstree({
            "core": {
                "check_callback": true
            },
            "plugins": ["unique", "dnd"]
        });
        $("#tree16").jstree({
            "plugins": ["wholerow"]
        });
        //END JSTREEVIEW
    };

    $scope.family_treeview_tab = function() {
        //BEGIN FAMILY TREEVIEW VERTICAL
        //$('.family-tree-vertical li').hide();
        $('.family-tree-vertical li:first').show();
        $('.family-tree-vertical li').on('click', function(e) {
            var children = $(this).find('> ul > li');
            if (children.is(":visible")) children.hide('fast');
            else children.show('fast');
            e.stopPropagation();
        });
        //END FAMILY TREEVIEW VERTICAL

        //BEGIN FAMILY TREEVIEW HORIZONTAL
        //$('.family-tree-horizontal li').hide();
        $('.family-tree-horizontal li:first').show();
        $('.family-tree-horizontal li').on('click', function(e) {
            var children = $(this).find('> ul > li');
            if (children.is(":visible")) children.hide('fast');
            else children.show('fast');
            e.stopPropagation();
        });
        //END FAMILY TREEVIEW HORIZONTAL
    };

    $scope.treetable_tab = function() {
        //BEGIN JQUERY TREETABLE
        $("#example-basic").treetable({
            expandable: true
        });
        $("#example-basic-static").treetable();
        $("#example-basic-expandable").treetable({
            expandable: true
        });
        $("#example-advanced").treetable({
            expandable: true
        });
        // Highlight selected row
        $("#example-advanced tbody").on("mousedown", "tr", function() {
            $(".selected").not(this).removeClass("selected");
            $(this).toggleClass("selected");
        });
        // Drag & Drop Example Code
        $("#example-advanced .file, #example-advanced .folder").draggable({
            helper: "clone",
            opacity: 0.75,
            refreshPositions: true, // Performance?
            revert: "invalid",
            revertDuration: 300,
            scroll: true
        });
        $("#example-advanced .folder").each(function() {
            $(this).parents("#example-advanced tr").droppable({
                accept: ".file, .folder",
                drop: function(e, ui) {
                    var droppedEl = ui.draggable.parents("tr");
                    $("#example-advanced").treetable("move", droppedEl.data("ttId"), $(this).data("ttId"));
                },
                hoverClass: "accept",
                over: function(e, ui) {
                    var droppedEl = ui.draggable.parents("tr");
                    if (this != droppedEl[0] && !$(this).is(".expanded")) {
                        $("#example-advanced").treetable("expandNode", $(this).data("ttId"));
                    }
                }
            });
        });
        $("form#reveal").submit(function() {
            var nodeId = $("#revealNodeId").val();

            try {
                $("#example-advanced").treetable("reveal", nodeId);
            } catch (error) {
                alert(error.message);
            }

            return false;
        });
        //END JQUERY TREETABLE
    };
});
App.directive("ngAccordion", function($parse, $compile) {
    return {
        link: function($scope, element, attributes) {
            $scope._accordion = {
                status: [],
                collapse: {}
            };

            $scope._accordion.collapse = function(i) {
                for (var j = 0; j < $scope._accordion.status.length; j++) {
                    if (i == j)
                        continue;
                    $scope._accordion.status[j] = true;
                }
                $scope._accordion.status[i] = !$scope._accordion.status[i];
            };

            $(">div", attributes.$$element).each(function(index, item) {
                $scope._accordion.status[index] = true;
                $(">.panel-heading>a", item).attr({
                    'ng-click': '_accordion.collapse(' + index + ')',
                    'index': index
                });
                $(">.panel-collapse", item).attr({
                    'collapse': '_accordion.status[' + index + ']',
                    'index': index
                });
            });

            element.html($compile(element.html())($scope));
        }
    };
});
App.directive("ngAnimation", function($parse, $compile) {
    return {
        link: function($scope, element, attributes) {
            $scope._animation_change = function(v) {
                $scope.header.effect = v;
            };

            attributes.$$element.find('button').each(function(index, value) {
                $(this).attr({
                    'ng-click': "_animation_change('" + $(this).attr('data-value') + "')"
                });
            });

            element.html($compile(element.html())($scope));
        }
    };
});
App.directive("ngAreachartspline", function() {
    return {
        link: function($scope, element, attributes) {
            //BEGIN AREA CHART SPLINE
            var d6_1 = [
                ["Jan", 67],
                ["Feb", 91],
                ["Mar", 36],
                ["Apr", 150],
                ["May", 28],
                ["Jun", 123],
                ["Jul", 38]
            ];
            var d6_2 = [
                ["Jan", 59],
                ["Feb", 49],
                ["Mar", 45],
                ["Apr", 94],
                ["May", 76],
                ["Jun", 22],
                ["Jul", 31]
            ];
            $.plot("#area-chart-spline", [{
                data: d6_1,
                label: "Upload",
                color: "#ffce54"
            }, {
                data: d6_2,
                label: "Download",
                color: "#01b6ad"
            }], {
                series: {
                    lines: {
                        show: !1
                    },
                    splines: {
                        show: !0,
                        tension: 0.4,
                        lineWidth: 2,
                        fill: 0.8
                    },
                    points: {
                        show: !0,
                        radius: 4
                    }
                },
                grid: {
                    borderColor: "#fafafa",
                    borderWidth: 1,
                    hoverable: !0
                },
                tooltip: !0,
                tooltipOpts: {
                    content: "%x : %y",
                    defaultTheme: true
                },
                xaxis: {
                    tickColor: "#fafafa",
                    mode: "categories"
                },
                yaxis: {
                    tickColor: "#fafafa"
                },
                shadowSize: 0
            });
            //END AREA CHART SPLINE
        }
    };
});
App.directive("ngDropzone", function($parse, $compile) {
    return {
        link: function($scope, element, attributes) {
            $(attributes.$$element).dropzone({
                url: "http://www.torrentplease.com/dropzone.php",
                maxFilesize: 100,
                paramName: "uploadfile",
                maxThumbnailFilesize: 5,
                init: function() {
                    //$scope.files.push({file: 'added'}); // here works
                    this.on('success', function(file, json) {});

                    this.on('addedfile', function(file) {
                        $scope.$apply(function() {
                            //alert(file);
                            //$scope.files.push({file: 'added'});
                        });
                    });

                    this.on('drop', function(file) {
                        //alert('file');
                    });

                }

            });
        }
    };
});

App.directive("ngGeneraltab", function() {
    return {
        link: function(scope, element, attrs) {
            element.click(function(e) {
                e.preventDefault();
            });
        }
    };
});
App.directive("ngMenu", function($parse, $compile) {
    return {
        link: function($scope, element, attributes) {
            $scope._menu = {
                status: [],
                collapse: {},
                hover: []
            };

            $scope._menu.mouseleave = function() {
                for (var j = 0; j < $scope._menu.hover.length; j++) {
                    $scope._menu.hover[j] = '';
                }
            };
            $scope._menu.mouseover = function(i) {
                for (var j = 0; j < $scope._menu.hover.length; j++) {
                    $scope._menu.hover[j] = '';
                }
                $scope._menu.hover[i] = 'nav-hover';
            };
            $scope._menu.collapse = function(i) {
                $scope._menu.status[i] = !$scope._menu.status[i];

                var current = attributes.$$element.find('a[index=' + i + ']');

                current.parent('li').addClass('active').siblings().removeClass('active').children('ul').each(function() {
                    $scope._menu.status[$(this).attr('index')] = true;
                });

                if (current.hasClass('btn-fullscreen')) {
                    if (!document.fullscreenElement &&
                        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                        if (document.documentElement.requestFullscreen) {
                            document.documentElement.requestFullscreen();
                        } else if (document.documentElement.msRequestFullscreen) {
                            document.documentElement.msRequestFullscreen();
                        } else if (document.documentElement.mozRequestFullScreen) {
                            document.documentElement.mozRequestFullScreen();
                        } else if (document.documentElement.webkitRequestFullscreen) {
                            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                        }
                    } else {
                        if (document.exitFullscreen) {
                            document.exitFullscreen();
                        } else if (document.msExitFullscreen) {
                            document.msExitFullscreen();
                        } else if (document.mozCancelFullScreen) {
                            document.mozCancelFullScreen();
                        } else if (document.webkitExitFullscreen) {
                            document.webkitExitFullscreen();
                        }
                    }
                }
            };

            attributes.$$element.find('li').children('a').each(function(index, value) {
                $scope._menu.status[index] = true;
                $(this).attr({
                    'ng-click': '_menu.collapse(' + index + ')',
                    'index': index
                });
                $('>ul', $(this).parent('li')).attr({
                    'collapse': '_menu.status[' + index + ']',
                    'index': index
                });
            });

            $(">li", attributes.$$element).each(function(index, value) {
                $scope._menu.hover[index] = '';
                $(this).attr({
                    'ng-mouseleave': '_menu.mouseleave()',
                    'ng-mouseover': '_menu.mouseover(' + index + ')',
                    'ng-class': '_menu.hover[' + index + ']'
                });
            });

            element.html($compile(element.html())($scope));
        }
    };
});
App.directive("ngTab", function($parse, $compile) {
    return {
        link: function($scope, element, attributes) {
            $("a", element).click(function(e) {
                e.preventDefault();
            });
        }
    };
});
App.directive("ngTheme", function($parse, $compile) {
    return {
        link: function($scope, element, attributes) {}
    };
});
App.directive("ngZabutocalendar", function($parse, $compile) {
    return {
        link: function($scope, element, attributes) {
            //BEGIN CALENDAR
            $("#my-calendar").zabuto_calendar({
                language: "en"
            });
            //END CALENDAR
        }
    };
});
App.directive("scrollSpy", function($window) {
    return {
        restrict: 'A',
        controller: function($scope) {
            $scope.spies = [];
            this.addSpy = function(spyObj) {
                $scope.spies.push(spyObj);
            };
        },
        link: function(scope, elem, attrs) {
            var spyElems;
            spyElems = [];

            scope.$watch('spies', function(spies) {
                var spy, _i, _len, _results;
                _results = [];

                for (_i = 0, _len = spies.length; _i < _len; _i++) {
                    spy = spies[_i];

                    if (spyElems[spy.id] === null) {
                        _results.push(spyElems[spy.id] = elem.find('#' + spy.id));
                    }
                }
                return _results;
            });

            $($window).scroll(function() {
                var highlightSpy, pos, spy, _i, _len, _ref;
                highlightSpy = null;
                _ref = scope.spies;

                // cycle through `spy` elements to find which to highlight
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    spy = _ref[_i];
                    spy.out();

                    // catch case where a `spy` does not have an associated `id` anchor
                    if (spyElems === null || spyElems[spy.id] === null || spyElems[spy.id].offset() === undefined) {
                        continue;
                    }

                    if ((pos = spyElems[spy.id].offset().top) - $window.scrollY <= 0) {
                        // the window has been scrolled past the top of a spy element
                        spy.pos = pos;

                        if (highlightSpy === null) {
                            highlightSpy = spy;
                        }
                        if (highlightSpy.pos < spy.pos) {
                            highlightSpy = spy;
                        }
                    }
                }

                // select the last `spy` if the scrollbar is at the bottom of the page
                if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
                    spy.pos = pos;
                    highlightSpy = spy;
                }

                return highlightSpy !== null ? highlightSpy["in"]() : void 0;
            });
        }
    };
});

App.directive('spy', function($location, $anchorScroll) {
    return {
        restrict: "A",
        require: "^scrollSpy",
        link: function(scope, elem, attrs, affix) {
            elem.click(function() {
                $location.hash(attrs.spy);
                $anchorScroll();
            });

            affix.addSpy({
                id: attrs.spy,
                in : function() {
                    elem.addClass('active');
                },
                out: function() {
                    elem.removeClass('active');
                }
            });
        }
    };
});
