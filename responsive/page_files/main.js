//disable varien autocompleter
if (Varien && typeof(Varien) === "object" && "searchForm" in Varien) {
    Varien.searchForm.prototype.initAutocomplete = function(){}
}

var AWSearchautocomplete = Class.create();
AWSearchautocomplete.prototype = {
    autocompleter: null,

    initialize : function(config){
        this.targetElement = $$(config.targetElementSelector).first();
        this.updateChoicesContainer = $$(config.updateChoicesContainerSelector).first();
        this.updateChoicesElement = $$(config.updateChoicesElementSelector).first();
        this.nativeSearchUpdateChoicesElement = $$(config.nativeSearchUpdateChoicesElementSelector).first();

        this.url = config.url;
        this.queryDelay = config.queryDelay;
        this.indicatorImage = config.indicatorImage;
        this.openInNewWindow = config.openInNewWindow;
        this.queryParam = config.queryParam;
        this.newHTMLIdForTargetElement = config.newHTMLIdForTargetElement;

        this.overwriteNativeAutocompleter();
        this.initAutocomplete();
    },

    overwriteNativeAutocompleter: function() {
        this.targetElement.setAttribute('id', this.newHTMLIdForTargetElement);
        this.targetElement.setAttribute('name', this.queryParam);

        if (this.nativeSearchUpdateChoicesElement) {
            this.nativeSearchUpdateChoicesElement.remove();
        }
    },

    initAutocomplete : function(){
        var me = this;
        me.autocompleter = new Ajax.Autocompleter(
            me.targetElement,
            me.updateChoicesElement,
            me.url,
            {
                paramName: me.targetElement.getAttribute('name'),
                method: 'get',
                minChars: 3,
                frequency: me.queryDelay,
                onShow : me.onAutocompleterShow.bind(me),
                onHide : me.onAutocompleterHide.bind(me),
                updateElement : me.onAutocompleterUpdateElement.bind(me)
            }
        );
        me.autocompleter.startIndicator = me.onAutocompleterStartIndicator.bind(me);
        me.autocompleter.stopIndicator = me.onAutocompleterStopIndicator.bind(me);
        me.autocompleter.options.onComplete = me.onAutocompleterRequestComplete.bind(me);

        me.targetElement.observe('keydown', me.onAutocompleterKeyPress.bind(me));
    },

    onAutocompleterShow: function(element, update) {
        var posSC = this.targetElement.cumulativeOffset();
        posSC.top = posSC.top + parseInt(this.targetElement.getHeight()) + 3;
        if (!Prototype.Browser.IE) {
            posSC.left -= (parseInt(this.targetElement.getStyle('padding-left')) + 3);
        }

        this.updateChoicesContainer.setStyle({
            top: posSC.top + "px",
            left: posSC.left + "px"
        });

        //disable form submit
        var form = this.targetElement.up('form');
        if (form) {
            this._nativeFormSubmit = form.submit;
            form.submit = function(e){};
        }

        $(update).show();
        this.updateChoicesContainer.show();
    },

    onAutocompleterHide: function(element, update) {
        this.updateChoicesContainer.hide();

        //enable form submit
        var form = this.targetElement.up('form');
        if (form) {
            form.submit = this._nativeFormSubmit.bind(form);
            this._nativeFormSubmit = null;
        }

        $(update).hide();
        this.autocompleter.lastHideTime = new Date().getTime();
    },

    onAutocompleterUpdateElement: function(element) {
        this.onRowElementClick(element);
        return false;
    },

    onAutocompleterStartIndicator: function() {
        this.targetElement.setStyle({
            backgroundImage: 'url("' + this.indicatorImage + '")'
        });
    },

    onAutocompleterStopIndicator: function() {
        this.targetElement.setStyle({
            backgroundImage: ''
        });
    },

    onAutocompleterKeyPress: function(event) {
        var e = window.event || event;
        if (e.keyCode == Event.KEY_RETURN){
            var el = this.updateChoicesContainer.select('.selected').first();
            if (el && !el.hasClassName('aw-sas-empty')) {
                el.click();
                Event.stop(e);
            } else {
                this.targetElement.up('form').submit();
            }
        }
    },

    onAutocompleterRequestComplete: function(request) {
        if (request.request.parameters.q === this.autocompleter.getToken()) {
            this.autocompleter.onComplete(request);
        }
    },

    onRowElementClick: function(element) {
        var url = element.select('input').first().getValue();
        if (this.openInNewWindow) {
            window.open(url, '_blank');
        } else {
            setLocation(url);
        }
        Event.stop(event);
    }
}
