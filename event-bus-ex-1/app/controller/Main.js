Ext.define('EventDomain1.controller.Main', {
    extend: 'Ext.app.Controller',

    requires: [
        'EventDomain1.view.album.Album',
        'EventDomain1.view.search.Search',
        'Ext.container.Viewport',
        'Ext.layout.container.Border'
    ],

    onLaunch: function() {
        new Ext.container.Viewport({
            layout: 'border',
            items: [
                { region: 'north', xtype: 'app-search' },
                { region: 'center', xtype: 'app-album' }
            ]
        });
    }
});
