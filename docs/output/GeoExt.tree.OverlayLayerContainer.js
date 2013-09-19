Ext.data.JsonP.GeoExt_tree_OverlayLayerContainer({"tagname":"class","name":"GeoExt.tree.OverlayLayerContainer","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"OverlayLayerContainer.js","href":"OverlayLayerContainer.html#GeoExt-tree-OverlayLayerContainer"}],"aliases":{"plugin":["gx_overlaylayercontainer"]},"alternateClassNames":[],"extends":"GeoExt.tree.LayerContainer","mixins":[],"requires":[],"uses":[],"members":[{"name":"loader","tagname":"cfg","owner":"GeoExt.tree.LayerContainer","id":"cfg-loader","meta":{}},{"name":"defaultText","tagname":"property","owner":"GeoExt.tree.OverlayLayerContainer","id":"property-defaultText","meta":{"private":true}},{"name":"init","tagname":"method","owner":"GeoExt.tree.OverlayLayerContainer","id":"method-init","meta":{"private":true}},{"name":"recordIndexToNodeIndex","tagname":"method","owner":"GeoExt.tree.LayerContainer","id":"method-recordIndexToNodeIndex","meta":{"private":true}}],"code_type":"ext_define","id":"class-GeoExt.tree.OverlayLayerContainer","short_doc":"A layer node plugin that will collect all base layers of an OpenLayers\nmap. ...","component":false,"superclasses":["Ext.AbstractPlugin","GeoExt.tree.LayerContainer"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.AbstractPlugin<div class='subclass '><a href='#!/api/GeoExt.tree.LayerContainer' rel='GeoExt.tree.LayerContainer' class='docClass'>GeoExt.tree.LayerContainer</a><div class='subclass '><strong>GeoExt.tree.OverlayLayerContainer</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/OverlayLayerContainer.html#GeoExt-tree-OverlayLayerContainer' target='_blank'>OverlayLayerContainer.js</a></div></pre><div class='doc-contents'><p>A layer node plugin that will collect all base layers of an OpenLayers\nmap. Only layers that have displayInLayerSwitcher set to true will be\nincluded. The node's text defaults to 'Overlays'.</p>\n\n<p>To use this node plugin in a tree node config, configure a node like this:\n    {plugins: \"gx_overlaylayercontainer\", text: \"My overlays\"}</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-loader' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.tree.LayerContainer' rel='GeoExt.tree.LayerContainer' class='defined-in docClass'>GeoExt.tree.LayerContainer</a><br/><a href='source/LayerContainer.html#GeoExt-tree-LayerContainer-cfg-loader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.LayerContainer-cfg-loader' class='name expandable'>loader</a> : <a href=\"#!/api/GeoExt.tree.LayerLoader\" rel=\"GeoExt.tree.LayerLoader\" class=\"docClass\">GeoExt.tree.LayerLoader</a>/Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The loader to use with this container. ...</div><div class='long'><p>The loader to use with this container. If an Object is provided, a\n<a href=\"#!/api/GeoExt.tree.LayerLoader\" rel=\"GeoExt.tree.LayerLoader\" class=\"docClass\">GeoExt.tree.LayerLoader</a>, configured with the the properties from\nthe provided object, will be created. By default, a LayerLoader for\nall layers of the first MapPanel found by the ComponentManager will be\ncreated.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-defaultText' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.OverlayLayerContainer'>GeoExt.tree.OverlayLayerContainer</span><br/><a href='source/OverlayLayerContainer.html#GeoExt-tree-OverlayLayerContainer-property-defaultText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.OverlayLayerContainer-property-defaultText' class='name expandable'>defaultText</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The default text for the target node. ...</div><div class='long'><p>The default text for the target node.</p>\n<p>Defaults to: <code>'Overlays'</code></p><p>Overrides: <a href=\"#!/api/GeoExt.tree.LayerContainer-property-defaultText\" rel=\"GeoExt.tree.LayerContainer-property-defaultText\" class=\"docClass\">GeoExt.tree.LayerContainer.defaultText</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-init' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.OverlayLayerContainer'>GeoExt.tree.OverlayLayerContainer</span><br/><a href='source/OverlayLayerContainer.html#GeoExt-tree-OverlayLayerContainer-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.OverlayLayerContainer-method-init' class='name expandable'>init</a>( <span class='pre'>target</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/GeoExt.tree.LayerContainer-method-init\" rel=\"GeoExt.tree.LayerContainer-method-init\" class=\"docClass\">GeoExt.tree.LayerContainer.init</a></p></div></div></div><div id='method-recordIndexToNodeIndex' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.tree.LayerContainer' rel='GeoExt.tree.LayerContainer' class='defined-in docClass'>GeoExt.tree.LayerContainer</a><br/><a href='source/LayerContainer.html#GeoExt-tree-LayerContainer-method-recordIndexToNodeIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.LayerContainer-method-recordIndexToNodeIndex' class='name expandable'>recordIndexToNodeIndex</a>( <span class='pre'>index</span> ) : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>The record index in the layer store.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The appropriate child node index for the record.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});