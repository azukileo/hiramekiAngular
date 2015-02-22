var App = angular.module('MAdmin', ['ngRoute', 'ui.bootstrap', 'ui.router', 'oc.lazyLoad',]);
App.config(function($stateProvider, $urlRouterProvider) {
  //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/index");
    //
    // Now set up the states
    $stateProvider
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
                                'vendors/flot-chart/jquery.flot.spline.js']
                     });
                }]
            }
        })
        .state('layout-left-sidebar', {
          url:"/layout-left-sidebar",
          templateUrl: 'templates/states/layout-left-sidebar.html'
        })
        .state('layout-left-sidebar-collapsed', {
          url:"/layout-left-sidebar-collapsed",
          templateUrl: 'templates/states/layout-left-sidebar-collapsed.html'
        })
        .state('layout-right-sidebar', {
          url:"/layout-right-sidebar",
          templateUrl: 'templates/states/layout-right-sidebar.html'
        })
        .state('layout-right-sidebar-collapsed', {
          url:"/layout-right-sidebar-collapsed",
          templateUrl: 'templates/states/layout-right-sidebar-collapsed.html'
        })
        .state('layout-horizontal-menu', {
          url:"/layout-horizontal-menu",
          templateUrl: 'templates/states/layout-horizontal-menu.html'
        })
        .state('layout-horizontal-menu-sidebar', {
          url:"/layout-horizontal-menu-sidebar",
          templateUrl: 'templates/states/layout-horizontal-menu-sidebar.html'
        })
        .state('layout-fixed-topbar', {
          url:"/layout-fixed-topbar",
          templateUrl: 'templates/states/layout-fixed-topbar.html'
        })
        .state('layout-boxed', {
          url:"/layout-boxed",
          templateUrl: 'templates/states/layout-boxed.html'
        })
        .state('layout-hidden-footer', {
          url:"/layout-hidden-footer",
          templateUrl: 'templates/states/layout-hidden-footer.html'
        })
        .state('layout-header-topbar', {
          url:"/layout-header-topbar",
          templateUrl: 'templates/states/layout-header-topbar.html',
          controller: 'LayoutHeaderTopbarController'
        })
        .state('layout-title-breadcrumb', {
          url:"/layout-title-breadcrumb",
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
          url:"/ui-buttons",
          templateUrl: 'templates/states/ui-buttons.html'
        })
        .state('ui-tabs', {
            url: "/ui-tabs", 
            templateUrl: 'templates/states/ui-tabs.html',
            controller: 'UiTabsController'
        })
        .state('ui-panels', {
          url:"/ui-panels",
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
                                'vendors/bootstrap-progressbar/bootstrap-progressbar.min.js']
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
                                'vendors/summernote/summernote.js',]
                     });
                }]
            }
        })
        .state('ui-typography', {
          url:"/ui-typography",
          templateUrl: 'templates/states/ui-typography.html'
        })
        .state('ui-modals', {
          url:"/ui-modals",
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
                                'vendors/nouislider/jquery.nouislider.min.js']
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
                                'vendors/jquery-nestable/jquery.nestable.js']
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
                                'vendors/multi-select/js/jquery.multi-select.js']
                     });
                }]
            }
        })
        .state('ui-icons', {
          url:"/ui-icons",
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
                                'vendors/jquery-notific8/notific8.js']
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
                                'vendors/jquery-toastr/toastr.min.js']
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
                                'vendors/iCheck/custom.min.js']
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
                                'vendors/jquery-treetable/javascripts/src/jquery.treetable.js']
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
                                'vendors/charCount.js']
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
                                'vendors/jquery-bootstrap-wizard/jquery.bootstrap.wizard.min.js']
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
                                'vendors/x-editable/demo-mock.js']
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
                        files: ['vendors/jquery-validate/jquery.validate.min.js' ]
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
                                'vendors/jquery-file-upload/js/cors/jquery.xdr-transport.js']
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
                                'vendors/dropzone/js/dropzone.js']
                     });
                }]
            }
        })
        
        // start front end
        .state('frontend-one-page', {
          url:"/frontend-one-page",
          templateUrl: 'templates/states/frontend-one-page.html'
        })
        
        // start table
        .state('table-basic', {
          url:"/table-basic",
          templateUrl: 'templates/states/table-basic.html'
        })
        .state('table-responsive', {
          url:"/table-responsive",
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
                                'vendors/bootstrap-datepicker/js/bootstrap-datepicker.js']
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
                                'vendors/jquery-tablesorter/jquery.tablesorter.js']
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
                                'vendors/DataTables/jquery.jeditable.js']
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
                                'vendors/DataTables/extensions/TableTools/js/dataTables.tableTools.min.js']
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
                                'vendors/bootstrap-datepicker/js/bootstrap-datepicker.js']
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
                                'vendors/tableExport/jspdf/libs/base64.js']
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
                                'vendors/jplist/html/js/jplist.min.js']
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
                                'vendors/jplist/html/js/jplist.min.js']
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
                                'vendors/jplist/html/js/jplist.min.js']
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
                                'vendors/jplist/html/js/jplist.min.js']
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
                                'vendors/jplist/html/js/jplist.min.js']
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
                                'vendors/jplist/html/js/jplist.min.js']
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
                                'vendors/jplist/html/js/jplist.min.js']
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
                                'vendors/jplist/html/js/jplist.min.js']
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
                                'vendors/jplist/html/js/jplist.min.js']
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
                                'vendors/jplist/html/js/jplist.min.js']
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
                                'vendors/jplist/html/js/jplist.min.js']
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
                                'vendors/jplist/html/js/jplist.min.js']
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
                                'vendors/jplist/html/js/jplist.min.js']
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
                                'vendors/jplist/html/js/jplist.min.js']
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
                                'vendors/lightbox/js/lightbox.min.js']
                     });
                }]
            }
        })
        .state('page-timeline', {
          url:"/page-timeline",
          templateUrl: 'templates/states/page-timeline.html'
        })
        .state('page-blog', {
          url:"/page-blog",
          templateUrl: 'templates/states/page-blog.html'
        })
        .state('page-blog-item', {
          url:"/page-blog-item",
          templateUrl: 'templates/states/page-blog-item.html'
        })
        .state('page-about', {
          url:"/page-about",
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
                                'vendors/fullcalendar/fullcalendar.min.js']
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
                                'vendors/bootstrap-datepicker/js/bootstrap-datepicker.js']
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
                                'vendors/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js']
                     });
                }]
            }
        })
        .state('email-view-mail', {
          url:"/email-view-mail",
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
                                'vendors/flot-chart/jquery.flot.spline.js']
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
                                'vendors/jquery-highcharts/exporting.js']
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
                                'vendors/jquery-highcharts/exporting.js']
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
                                'vendors/jquery-highcharts/exporting.js']
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
                                'vendors/jquery-highcharts/exporting.js']
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
                                'vendors/jquery-highcharts/exporting.js']
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
                                'vendors/jquery-highcharts/exporting.js']
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
                                'vendors/jquery-highcharts/exporting.js']
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
                                'vendors/jquery-highcharts/exporting.js']
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
