/**
 * 通用extjs-grid打印
 * liugong
 */
Ext.define("Ext.ux.grid.Printer", {
    
    requires: 'Ext.XTemplate',

    statics: {
    	/**
    	 * 打印函数 传入grid对象和打印标题
    	 */
        print: function(grid,title) {
            var columns = [];
            Ext.each(grid.columns, function(c) {
                if(c.items.length > 0) {
                    columns = columns.concat(c.items.items);
                } else {
                    columns.push(c);
                }
            });

            var data = [];
            grid.store.data.each(function(item, row) {
                var convertedData = {};

                for (var key in item.data) {
                    var value = item.data[key];

                    Ext.each(columns, function(column, col) {
                        if (column.dataIndex == key) {
                            var meta = {item: '', tdAttr: '', style: ''};
                            value = column.renderer ? column.renderer.call(grid, value, meta, item, row, col, grid.store, grid.view) : value;
                        }
                    }, this);
                    convertedData[key] = value;
                }

                data.push(convertedData);
            });
            var clearColumns = [];
            Ext.each(columns, function (column) {
                if (!Ext.isEmpty(column.dataIndex) && !column.hidden) {
                    clearColumns.push(column);
                }
            });
            columns = clearColumns;
            
            if (this.stylesheetPath === null) {
                var scriptPath = Ext.Loader.getPath('Ext.ux.grid.Printer');
                this.stylesheetPath = ctx+"/static/css/printer.css";
            }

            var headings = Ext.create('Ext.XTemplate', this.headerTpl).apply(columns);
            var body     = Ext.create('Ext.XTemplate', this.bodyTpl).apply(columns);
            var pluginsBody = '',
                pluginsBodyMarkup = [];
            
            Ext.each(grid.plugins, function(p) {
                if (p.ptype == 'rowexpander') {
                    pluginsBody += p.rowBodyTpl.join('');
                }
            });
            
            if (pluginsBody != '') {
                pluginsBodyMarkup = [
                    '<tr class="{[xindex % 2 === 0 ? "even" : "odd"]}"><td colspan="' + columns.length + '">',
                      pluginsBody,
                    '</td></tr>',
                ];
            }
            
            var htmlMarkup = [
                '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',
                '<html class="' + Ext.baseCSSPrefix + 'ux-grid-printer">',
                  '<head>',
                    '<meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />',
                    '<link href="' + this.stylesheetPath + '" rel="stylesheet" type="text/css" />',
                    '<title>' + title + '</title>',
                  '</head>',
                  '<body class="' + Ext.baseCSSPrefix + 'ux-grid-printer-body">',
                  '<div class="' + Ext.baseCSSPrefix + 'ux-grid-printer-noprint ' + Ext.baseCSSPrefix + 'ux-grid-printer-links">',
                      '<a class="' + Ext.baseCSSPrefix + 'ux-grid-printer-linkprint" href="javascript:void(0);" onclick="window.print();">' + this.printLinkText + '</a>',
                      '<a class="' + Ext.baseCSSPrefix + 'ux-grid-printer-linkclose" href="javascript:void(0);" onclick="window.close();">' + this.closeLinkText + '</a>',
                  '</div>',
                  '<h1>' + this.mainTitle + '</h1>',
                    '<table>',
                      '<tr>',
                        headings,
                      '</tr>',
                      '<tpl for=".">',
                        '<tr class="{[xindex % 2 === 0 ? "even" : "odd"]}">',
                          body,
                        '</tr>',
                        pluginsBodyMarkup.join(''),
                      '</tpl>',
                    '</table>',
                  '</body>',
                '</html>'           
            ];

            var html = Ext.create('Ext.XTemplate', htmlMarkup).apply(data); 

            var win = window.open('', 'printgrid');
            
            win.document.open();
            win.document.write(html);
            win.document.close();
            
            if (this.printAutomatically){
                if(Ext.isIE){
                    window.print();
                } else {
                    win.print();
                }
            }
            
            if (this.closeAutomaticallyAfterPrint){
                if(Ext.isIE){
                    window.close();
                } else {
                    win.close();
                }                
            }
        },

        stylesheetPath: null,
        
        printAutomatically: false,
        
        closeAutomaticallyAfterPrint: false,        
        
        mainTitle: '',
        
        printLinkText: '打印',
        
        closeLinkText: '取消',
        
        headerTpl: [ 
            '<tpl for=".">',
                '<th>{text}</th>',
            '</tpl>',
        ],

        bodyTpl: [
            '<tpl for=".">',
                '<td>\{{dataIndex}\}</td>',
            '</tpl>',
        ]
    }
});
