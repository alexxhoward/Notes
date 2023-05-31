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
                .setWidth("60.95238095238095em")
                .setHeight("45.714285714285715em")
                .setValue("a")
                .setCustomStyle({
                    "KEY" : {
                        "color" : "#000000",
                        "background-color" : "#778899",
                        "font-weight" : "400",
                        "font-style" : "italic"
                    }
                })
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input18")
                .setLeft("-2.2857142857142856em")
                .setTop("1.4476190476190476em")
                .setWidth("21.333333333333332em")
                .setHeight("1.7523809523809524em")
                .setZIndex(1002)
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
                .setTop("21.257142857142856em")
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
                .setTop("23.542857142857144em")
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
                .setTop("25.82857142857143em")
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
                .setTop("33.44761904761905em")
                .setWidth("4.190476190476191em")
                .setCaption("SAVE"),
                "a"
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox10")
                .setLeft("5.333333333333333em")
                .setTop("28.114285714285714em")
                .setWidth("12em")
                .setCaption("Case Opened"),
                "a"
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox11")
                .setLeft("5.333333333333333em")
                .setTop("31.16190476190476em")
                .setWidth("12em")
                .setCaption("Resolved"),
                "a"
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox12")
                .setLeft("5.333333333333333em")
                .setTop("29.63809523809524em")
                .setWidth("12em")
                .setCaption("Pending"),
                "a"
            );
            
            host.xui_ui_tabs4.append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"xui_ui_dialog2")
                .setLeft("21.333333333333332em")
                .setTop("1.6761904761904762em")
                .setHtml("www.RigCLOUD.com")
                .setCaption("Dialog"),
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