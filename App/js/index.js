// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input1")
                .setLeft("-2.2857142857142856em")
                .setTop("1.5238095238095237em")
                .setWidth("21.02857142857143em")
                .setHeight("1.6em")
                .setLabelSize("8em")
                .setLabelCaption("NAME")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input2")
                .setLeft("-2.2857142857142856em")
                .setTop("3.8095238095238093em")
                .setWidth("21.02857142857143em")
                .setHeight("1.6em")
                .setLabelSize("8em")
                .setLabelCaption("RIG")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3")
                .setLeft("-2.2857142857142856em")
                .setTop("6.095238095238095em")
                .setWidth("21.02857142857143em")
                .setHeight("13.790476190476191em")
                .setLabelSize("8em")
                .setLabelCaption("ISSUE")
                .setMultiLines(true)
                .setCustomStyle({
                    "KEY" : {
                        "text-align" : "left",
                        "overflow" : "visible"
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setLeft("-2.2857142857142856em")
                .setTop("20.571428571428573em")
                .setWidth("21.02857142857143em")
                .setHeight("1.6em")
                .setLabelSize("8em")
                .setLabelCaption("PHONE")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input8")
                .setLeft("-2.2857142857142856em")
                .setTop("22.857142857142858em")
                .setWidth("21.02857142857143em")
                .setHeight("1.6em")
                .setLabelSize("8em")
                .setLabelCaption("COMPANY")
                .setMultiLines(true)
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput4")
                .setLeft("-2.2857142857142856em")
                .setTop("25.142857142857142em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("DATE")
                .setType("datetime")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button3")
                .setLeft("6.095238095238095em")
                .setTop("28.19047619047619em")
                .setWidth("4.190476190476191em")
                .setCaption("SAVE")
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox3")
                .setClassName("xui-css-aej")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});