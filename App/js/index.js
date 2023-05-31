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
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button3")
                .setLeft("6.095238095238095em")
                .setTop("35.80952380952381em")
                .setWidth("4.190476190476191em")
                .setCaption("SAVE")
            );
            
            append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs4")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "Notes",
                        "imageClass" : "xui-icon-xui"
                    },
                    {
                        "id" : "b",
                        "caption" : "Email Temps"
                    },
                    {
                        "id" : "c",
                        "caption" : "page3"
                    },
                    {
                        "id" : "d",
                        "caption" : "page4",
                        "closeBtn" : true,
                        "optBtn" : "xui-uicmd-opt",
                        "popBtn" : true
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setValue("a")
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input18")
                .setLeft("-2.2857142857142856em")
                .setTop("1.4476190476190476em")
                .setWidth("21.02857142857143em")
                .setHeight("1.6em")
                .setLabelSize("8em")
                .setLabelCaption("NAME")
                .setMultiLines(true)
                .setExcelCellId("NAME")
                .setExcelCellFormula("NOTE"),
                "a"
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input19")
                .setLeft("-2.2857142857142856em")
                .setTop("3.7333333333333334em")
                .setWidth("21.333333333333332em")
                .setHeight("1.6em")
                .setLabelSize("8em")
                .setLabelCaption("RIG")
                .setMultiLines(true),
                "a"
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input20")
                .setLeft("-2.2857142857142856em")
                .setTop("6.019047619047619em")
                .setWidth("21.333333333333332em")
                .setHeight("14.476190476190476em")
                .setLabelSize("8em")
                .setLabelCaption("ISSUE")
                .setMultiLines(true)
                .setCustomStyle({
                    "KEY" : {
                        "text-align" : "left",
                        "overflow" : "visible"
                    }
                }),
                "a"
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input21")
                .setLeft("-2.2857142857142856em")
                .setTop("20.495238095238093em")
                .setWidth("21.02857142857143em")
                .setHeight("1.6em")
                .setLabelSize("8em")
                .setLabelCaption("PHONE")
                .setMultiLines(true),
                "a"
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input22")
                .setLeft("-2.2857142857142856em")
                .setTop("22.78095238095238em")
                .setWidth("21.02857142857143em")
                .setHeight("1.6em")
                .setLabelSize("8em")
                .setLabelCaption("COMPANY")
                .setMultiLines(true),
                "a"
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput8")
                .setLeft("-2.2857142857142856em")
                .setTop("25.066666666666666em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("DATE")
                .setType("datetime"),
                "a"
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button8")
                .setLeft("6.095238095238095em")
                .setTop("32.68571428571428em")
                .setWidth("4.190476190476191em")
                .setCaption("SAVE"),
                "a"
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox10")
                .setLeft("5.333333333333333em")
                .setTop("27.35238095238095em")
                .setWidth("12em")
                .setCaption("Case Opened"),
                "a"
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox11")
                .setLeft("5.333333333333333em")
                .setTop("30.4em")
                .setWidth("12em")
                .setCaption("Resolved"),
                "a"
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox12")
                .setLeft("5.333333333333333em")
                .setTop("28.876190476190477em")
                .setWidth("12em")
                .setCaption("Pending"),
                "a"
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