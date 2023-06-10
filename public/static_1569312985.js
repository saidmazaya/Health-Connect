var ad_count = 0;
var ad_string = "";

function place_ad(width, height, position) {
    ad_count += 1;
    ad_string += "/AAMB" + ad_count + "/aamsz=" + width + "x" + height + "/pos=" + position;
    document.writeln('<div style="position:relative;width:' + width + 'px;height:' + height + 'px;" id="atlas' + ad_count + '"></div>');
}

function load_ads(url) {
    var aamRnd = Math.round(Math.random() * 1000000);
    document.write('<SCR' + 'IPT SRC="' + url + '/acc_random=' + aamRnd + '/pageid=' + aamRnd + ad_string + '?" type="text/JavaScript" language="JavaScript">');
    document.write('</SCR' + 'IPT>');
}

function generate_ads() {
    for (a = 1; a <= ad_count; a++) {
        document.write('<div id="INVatlas' + a + '" style="display:none">' + eval('AAMB' + a) + '</div>');
    }
}

function populate_ads() {
    for (a = 1; a <= ad_count; a++) {
        document.getElementById('atlas' + a).appendChild(document.getElementById('INVatlas' + a)).style.display = '';
    }
}

function place_if_ad(url, width, height, tile, position, ad_id) {
    document.write("<iframe id='" + position + "Frame' src='http://ad.doubleclick.net/adi/" + url + "dc_ref=" + encodeURIComponent(location.hostname + location.pathname) + ";ord=" + ord + "?' width='" + width + "' height='" + height + "' marginwidth='0' marginheight='0' frameborder='0' scrolling='no'>");
    document.write('</iframe>');
    document.write("<noscript><a href='http://ad.doubleclick.net/jump/" + url + "ord=" + ord + "?' target='_blank'><img src='http://ad.doubleclick.net/ad/" + url + ";ord=" + ord + "?' width='" + width + "' height='" + height + "' border='0' alt='doubleclick ad'></a></noscript>");
}

function place_js_ad(url, width, height, tile) {
    document.write("<scr" + "ipt language='JavaScript' src='//ad.doubleclick.net/adj/" + url + "!c=med;ord=" + ord + "?' type='text/javascript'></scr" + "ipt>");
    document.write("<noscript><a href='//ad.doubleclick.net/jump/" + url + "!c=med;ord=" + ord + "?' target='_blank'><img src='//ad.doubleclick.net/ad/edh.medhelp/default;tile=" + tile + ";sz=" + width + "x" + height + ";!c=med;ord=" + ord + "?' width='" + width + "' height='" + height + "' border='0' alt='doubleclick ad'></a></noscript>");
}

function place_interstitial_ad(url, width, height, tile, position) {
    var intFrame = document.createElement('iframe');
    var intAdContainer = document.getElementById('intFrameContainer');
    intFrame.src = 'http://ad.doubleclick.net/adi/' + url + 'dc_ref=' + encodeURIComponent(location.href) + ';ord=' + ord + '?';
    intFrame.width = width;
    intFrame.height = height;
    intFrame.marginWidth = '0';
    intFrame.marginHeight = '0';
    intFrame.frameBorder = '0';
    intFrame.scrolling = 'no';
    intFrame.id = 'interstitial_iframe';
    intAdContainer.appendChild(intFrame);
}

function place_ybot_mh_refreshable_dart_ad(url, width, height, tile, position) {
    var intFrame = document.createElement('iframe');
    var intAdContainer = document.getElementById(tile + '_ad');
    intFrame.id = 'ad_' + position;
    intFrame.src = '/mh_dart_ad.htm?' + url + 'dc_ref=' + encodeURIComponent(location.href) + ';ord=' + ord + '?';
    intFrame.setAttribute('noresize', 'noresize');
    intFrame.scrolling = 'no';
    intFrame.setAttribute('hspace', '0');
    intFrame.setAttribute('vspace', '0');
    intFrame.frameBorder = '0';
    intFrame.marginHeight = '0';
    intFrame.marginWidth = '0';
    intFrame.width = width;
    intFrame.height = height;
    intFrame.setAttribute('allowtransparency', 'true');
    intAdContainer.appendChild(intFrame);
}

function place_direct_ad(url, width, height, position) {
    random = Math.round(Math.random() * 100000000);
    if (!pageNum) var pageNum = Math.round(Math.random() * 100000000);
    document.write('<IFRAME id="ad_' + position + '" SRC="' + url + '/pos=' + position + '"');
    document.write(' NORESIZE SCROLLING=NO HSPACE=0 VSPACE=0 FRAMEBORDER=0 MARGINHEIGHT=0 MARGINWIDTH=0 WIDTH=' + width + ' HEIGHT=' + height + ' allowTransparency="true"></IFRAME>');
}

function place_mh_dart_ad(url, width, height, tile) {
    document.write("<scr" + "ipt language='JavaScript' src='http://ad.doubleclick.net/adj/" + url + "ord=" + ord + "?' type='text/javascript'></scr" + "ipt>");
    document.write("<noscript><a href='http://ad.doubleclick.net/jump/" + url + "ord=" + ord + "?' target='_blank'><img src='http://ad.doubleclick.net/ad/" + url + ";ord=" + ord + "?' width='" + width + "' height='" + height + "' border='0' alt='doubleclick ad'></a></noscript>");
}
var Prototype = {
    Version: '1.7',
    Browser: (function() {
        var ua = navigator.userAgent;
        var isOpera = Object.prototype.toString.call(window.opera) == '[object Opera]';
        return {
            IE: !!window.attachEvent && !isOpera,
            Opera: isOpera,
            WebKit: ua.indexOf('AppleWebKit/') > -1,
            Gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1,
            MobileSafari: /Apple.*Mobile/.test(ua)
        }
    })(),
    BrowserFeatures: {
        XPath: !!document.evaluate,
        SelectorsAPI: !!document.querySelector,
        ElementExtensions: (function() {
            var constructor = window.Element || window.HTMLElement;
            return !!(constructor && constructor.prototype);
        })(),
        SpecificElementExtensions: (function() {
            if (typeof window.HTMLDivElement !== 'undefined')
                return true;
            var div = document.createElement('div'),
                form = document.createElement('form'),
                isSupported = false;
            if (div['__proto__'] && (div['__proto__'] !== form['__proto__'])) {
                isSupported = true;
            }
            div = form = null;
            return isSupported;
        })()
    },
    ScriptFragment: '<script[^>]*>([\\S\\s]*?)<\/script>',
    JSONFilter: /^\/\*-secure-([\s\S]*)\*\/\s*$/,
    emptyFunction: function() {},
    K: function(x) {
        return x
    }
};
if (Prototype.Browser.MobileSafari)
    Prototype.BrowserFeatures.SpecificElementExtensions = false;
var Abstract = {};
var Try = {
    these: function() {
        var returnValue;
        for (var i = 0, length = arguments.length; i < length; i++) {
            var lambda = arguments[i];
            try {
                returnValue = lambda();
                break;
            } catch (e) {}
        }
        return returnValue;
    }
};
var Class = (function() {
    var IS_DONTENUM_BUGGY = (function() {
        for (var p in {
                toString: 1
            }) {
            if (p === 'toString') return false;
        }
        return true;
    })();

    function subclass() {};

    function create() {
        var parent = null,
            properties = $A(arguments);
        if (Object.isFunction(properties[0]))
            parent = properties.shift();

        function klass() {
            this.initialize.apply(this, arguments);
        }
        Object.extend(klass, Class.Methods);
        klass.superclass = parent;
        klass.subclasses = [];
        if (parent) {
            subclass.prototype = parent.prototype;
            klass.prototype = new subclass;
            parent.subclasses.push(klass);
        }
        for (var i = 0, length = properties.length; i < length; i++)
            klass.addMethods(properties[i]);
        if (!klass.prototype.initialize)
            klass.prototype.initialize = Prototype.emptyFunction;
        klass.prototype.constructor = klass;
        return klass;
    }

    function addMethods(source) {
        var ancestor = this.superclass && this.superclass.prototype,
            properties = Object.keys(source);
        if (IS_DONTENUM_BUGGY) {
            if (source.toString != Object.prototype.toString)
                properties.push("toString");
            if (source.valueOf != Object.prototype.valueOf)
                properties.push("valueOf");
        }
        for (var i = 0, length = properties.length; i < length; i++) {
            var property = properties[i],
                value = source[property];
            if (ancestor && Object.isFunction(value) && value.argumentNames()[0] == "$super") {
                var method = value;
                value = (function(m) {
                    return function() {
                        return ancestor[m].apply(this, arguments);
                    };
                })(property).wrap(method);
                value.valueOf = method.valueOf.bind(method);
                value.toString = method.toString.bind(method);
            }
            this.prototype[property] = value;
        }
        return this;
    }
    return {
        create: create,
        Methods: {
            addMethods: addMethods
        }
    };
})();
(function() {
    var _toString = Object.prototype.toString,
        NULL_TYPE = 'Null',
        UNDEFINED_TYPE = 'Undefined',
        BOOLEAN_TYPE = 'Boolean',
        NUMBER_TYPE = 'Number',
        STRING_TYPE = 'String',
        OBJECT_TYPE = 'Object',
        FUNCTION_CLASS = '[object Function]',
        BOOLEAN_CLASS = '[object Boolean]',
        NUMBER_CLASS = '[object Number]',
        STRING_CLASS = '[object String]',
        ARRAY_CLASS = '[object Array]',
        DATE_CLASS = '[object Date]',
        NATIVE_JSON_STRINGIFY_SUPPORT = window.JSON && typeof JSON.stringify === 'function' && JSON.stringify(0) === '0' && typeof JSON.stringify(Prototype.K) === 'undefined';

    function Type(o) {
        switch (o) {
            case null:
                return NULL_TYPE;
            case (void 0):
                return UNDEFINED_TYPE;
        }
        var type = typeof o;
        switch (type) {
            case 'boolean':
                return BOOLEAN_TYPE;
            case 'number':
                return NUMBER_TYPE;
            case 'string':
                return STRING_TYPE;
        }
        return OBJECT_TYPE;
    }

    function extend(destination, source) {
        for (var property in source)
            destination[property] = source[property];
        return destination;
    }

    function inspect(object) {
        try {
            if (isUndefined(object)) return 'undefined';
            if (object === null) return 'null';
            return object.inspect ? object.inspect() : String(object);
        } catch (e) {
            if (e instanceof RangeError) return '...';
            throw e;
        }
    }

    function toJSON(value) {
        return Str('', {
            '': value
        }, []);
    }

    function Str(key, holder, stack) {
        var value = holder[key],
            type = typeof value;
        if (Type(value) === OBJECT_TYPE && typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }
        var _class = _toString.call(value);
        switch (_class) {
            case NUMBER_CLASS:
            case BOOLEAN_CLASS:
            case STRING_CLASS:
                value = value.valueOf();
        }
        switch (value) {
            case null:
                return 'null';
            case true:
                return 'true';
            case false:
                return 'false';
        }
        type = typeof value;
        switch (type) {
            case 'string':
                return value.inspect(true);
            case 'number':
                return isFinite(value) ? String(value) : 'null';
            case 'object':
                for (var i = 0, length = stack.length; i < length; i++) {
                    if (stack[i] === value) {
                        throw new TypeError();
                    }
                }
                stack.push(value);
                var partial = [];
                if (_class === ARRAY_CLASS) {
                    for (var i = 0, length = value.length; i < length; i++) {
                        var str = Str(i, value, stack);
                        partial.push(typeof str === 'undefined' ? 'null' : str);
                    }
                    partial = '[' + partial.join(',') + ']';
                } else {
                    var keys = Object.keys(value);
                    for (var i = 0, length = keys.length; i < length; i++) {
                        var key = keys[i],
                            str = Str(key, value, stack);
                        if (typeof str !== "undefined") {
                            partial.push(key.inspect(true) + ':' + str);
                        }
                    }
                    partial = '{' + partial.join(',') + '}';
                }
                stack.pop();
                return partial;
        }
    }

    function stringify(object) {
        return JSON.stringify(object);
    }

    function toQueryString(object) {
        return $H(object).toQueryString();
    }

    function toHTML(object) {
        return object && object.toHTML ? object.toHTML() : String.interpret(object);
    }

    function keys(object) {
        if (Type(object) !== OBJECT_TYPE) {
            throw new TypeError();
        }
        var results = [];
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                results.push(property);
            }
        }
        return results;
    }

    function values(object) {
        var results = [];
        for (var property in object)
            results.push(object[property]);
        return results;
    }

    function clone(object) {
        return extend({}, object);
    }

    function isElement(object) {
        return !!(object && object.nodeType == 1);
    }

    function isArray(object) {
        return _toString.call(object) === ARRAY_CLASS;
    }
    var hasNativeIsArray = (typeof Array.isArray == 'function') && Array.isArray([]) && !Array.isArray({});
    if (hasNativeIsArray) {
        isArray = Array.isArray;
    }

    function isHash(object) {
        return object instanceof Hash;
    }

    function isFunction(object) {
        return _toString.call(object) === FUNCTION_CLASS;
    }

    function isString(object) {
        return _toString.call(object) === STRING_CLASS;
    }

    function isNumber(object) {
        return _toString.call(object) === NUMBER_CLASS;
    }

    function isDate(object) {
        return _toString.call(object) === DATE_CLASS;
    }

    function isUndefined(object) {
        return typeof object === "undefined";
    }
    extend(Object, {
        extend: extend,
        inspect: inspect,
        toJSON: NATIVE_JSON_STRINGIFY_SUPPORT ? stringify : toJSON,
        toQueryString: toQueryString,
        toHTML: toHTML,
        keys: Object.keys || keys,
        values: values,
        clone: clone,
        isElement: isElement,
        isArray: isArray,
        isHash: isHash,
        isFunction: isFunction,
        isString: isString,
        isNumber: isNumber,
        isDate: isDate,
        isUndefined: isUndefined
    });
})();
Object.extend(Function.prototype, (function() {
    var slice = Array.prototype.slice;

    function update(array, args) {
        var arrayLength = array.length,
            length = args.length;
        while (length--) array[arrayLength + length] = args[length];
        return array;
    }

    function merge(array, args) {
        array = slice.call(array, 0);
        return update(array, args);
    }

    function argumentNames() {
        var names = this.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1].replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '').replace(/\s+/g, '').split(',');
        return names.length == 1 && !names[0] ? [] : names;
    }

    function bind(context) {
        if (arguments.length < 2 && Object.isUndefined(arguments[0])) return this;
        var __method = this,
            args = slice.call(arguments, 1);
        return function() {
            var a = merge(args, arguments);
            return __method.apply(context, a);
        }
    }

    function bindAsEventListener(context) {
        var __method = this,
            args = slice.call(arguments, 1);
        return function(event) {
            var a = update([event || window.event], args);
            return __method.apply(context, a);
        }
    }

    function curry() {
        if (!arguments.length) return this;
        var __method = this,
            args = slice.call(arguments, 0);
        return function() {
            var a = merge(args, arguments);
            return __method.apply(this, a);
        }
    }

    function delay(timeout) {
        var __method = this,
            args = slice.call(arguments, 1);
        timeout = timeout * 1000;
        return window.setTimeout(function() {
            return __method.apply(__method, args);
        }, timeout);
    }

    function defer() {
        var args = update([0.01], arguments);
        return this.delay.apply(this, args);
    }

    function wrap(wrapper) {
        var __method = this;
        return function() {
            var a = update([__method.bind(this)], arguments);
            return wrapper.apply(this, a);
        }
    }

    function methodize() {
        if (this._methodized) return this._methodized;
        var __method = this;
        return this._methodized = function() {
            var a = update([this], arguments);
            return __method.apply(null, a);
        };
    }
    return {
        argumentNames: argumentNames,
        bind: bind,
        bindAsEventListener: bindAsEventListener,
        curry: curry,
        delay: delay,
        defer: defer,
        wrap: wrap,
        methodize: methodize
    }
})());
(function(proto) {
    function toISOString() {
        return this.getUTCFullYear() + '-' +
            (this.getUTCMonth() + 1).toPaddedString(2) + '-' +
            this.getUTCDate().toPaddedString(2) + 'T' +
            this.getUTCHours().toPaddedString(2) + ':' +
            this.getUTCMinutes().toPaddedString(2) + ':' +
            this.getUTCSeconds().toPaddedString(2) + 'Z';
    }

    function toJSON() {
        return this.toISOString();
    }
    if (!proto.toISOString) proto.toISOString = toISOString;
    if (!proto.toJSON) proto.toJSON = toJSON;
})(Date.prototype);
RegExp.prototype.match = RegExp.prototype.test;
RegExp.escape = function(str) {
    return String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};
var PeriodicalExecuter = Class.create({
    initialize: function(callback, frequency) {
        this.callback = callback;
        this.frequency = frequency;
        this.currentlyExecuting = false;
        this.registerCallback();
    },
    registerCallback: function() {
        this.timer = setInterval(this.onTimerEvent.bind(this), this.frequency * 1000);
    },
    execute: function() {
        this.callback(this);
    },
    stop: function() {
        if (!this.timer) return;
        clearInterval(this.timer);
        this.timer = null;
    },
    onTimerEvent: function() {
        if (!this.currentlyExecuting) {
            try {
                this.currentlyExecuting = true;
                this.execute();
                this.currentlyExecuting = false;
            } catch (e) {
                this.currentlyExecuting = false;
                throw e;
            }
        }
    }
});
Object.extend(String, {
    interpret: function(value) {
        return value == null ? '' : String(value);
    },
    specialChar: {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '\\': '\\\\'
    }
});
Object.extend(String.prototype, (function() {
    var NATIVE_JSON_PARSE_SUPPORT = window.JSON && typeof JSON.parse === 'function' && JSON.parse('{"test": true}').test;

    function prepareReplacement(replacement) {
        if (Object.isFunction(replacement)) return replacement;
        var template = new Template(replacement);
        return function(match) {
            return template.evaluate(match)
        };
    }

    function gsub(pattern, replacement) {
        var result = '',
            source = this,
            match;
        replacement = prepareReplacement(replacement);
        if (Object.isString(pattern))
            pattern = RegExp.escape(pattern);
        if (!(pattern.length || pattern.source)) {
            replacement = replacement('');
            return replacement + source.split('').join(replacement) + replacement;
        }
        while (source.length > 0) {
            if (match = source.match(pattern)) {
                result += source.slice(0, match.index);
                result += String.interpret(replacement(match));
                source = source.slice(match.index + match[0].length);
            } else {
                result += source, source = '';
            }
        }
        return result;
    }

    function sub(pattern, replacement, count) {
        replacement = prepareReplacement(replacement);
        count = Object.isUndefined(count) ? 1 : count;
        return this.gsub(pattern, function(match) {
            if (--count < 0) return match[0];
            return replacement(match);
        });
    }

    function scan(pattern, iterator) {
        this.gsub(pattern, iterator);
        return String(this);
    }

    function truncate(length, truncation) {
        length = length || 30;
        truncation = Object.isUndefined(truncation) ? '...' : truncation;
        return this.length > length ? this.slice(0, length - truncation.length) + truncation : String(this);
    }

    function strip() {
        return this.replace(/^\s+/, '').replace(/\s+$/, '');
    }

    function stripTags() {
        return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, '');
    }

    function stripScripts() {
        return this.replace(new RegExp(Prototype.ScriptFragment, 'img'), '');
    }

    function extractScripts() {
        var matchAll = new RegExp(Prototype.ScriptFragment, 'img'),
            matchOne = new RegExp(Prototype.ScriptFragment, 'im');
        return (this.match(matchAll) || []).map(function(scriptTag) {
            return (scriptTag.match(matchOne) || ['', ''])[1];
        });
    }

    function evalScripts() {
        return this.extractScripts().map(function(script) {
            return eval(script)
        });
    }

    function escapeHTML() {
        return this.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function unescapeHTML() {
        return this.stripTags().replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    }

    function toQueryParams(separator) {
        var match = this.strip().match(/([^?#]*)(#.*)?$/);
        if (!match) return {};
        return match[1].split(separator || '&').inject({}, function(hash, pair) {
            if ((pair = pair.split('='))[0]) {
                var key = decodeURIComponent(pair.shift()),
                    value = pair.length > 1 ? pair.join('=') : pair[0];
                if (value != undefined) value = decodeURIComponent(value);
                if (key in hash) {
                    if (!Object.isArray(hash[key])) hash[key] = [hash[key]];
                    hash[key].push(value);
                } else hash[key] = value;
            }
            return hash;
        });
    }

    function toArray() {
        return this.split('');
    }

    function succ() {
        return this.slice(0, this.length - 1) +
            String.fromCharCode(this.charCodeAt(this.length - 1) + 1);
    }

    function times(count) {
        return count < 1 ? '' : new Array(count + 1).join(this);
    }

    function camelize() {
        return this.replace(/-+(.)?/g, function(match, chr) {
            return chr ? chr.toUpperCase() : '';
        });
    }

    function capitalize() {
        return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
    }

    function underscore() {
        return this.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/-/g, '_').toLowerCase();
    }

    function dasherize() {
        return this.replace(/_/g, '-');
    }

    function inspect(useDoubleQuotes) {
        var escapedString = this.replace(/[\x00-\x1f\\]/g, function(character) {
            if (character in String.specialChar) {
                return String.specialChar[character];
            }
            return '\\u00' + character.charCodeAt().toPaddedString(2, 16);
        });
        if (useDoubleQuotes) return '"' + escapedString.replace(/"/g, '\\"') + '"';
        return "'" + escapedString.replace(/'/g, '\\\'') + "'";
    }

    function unfilterJSON(filter) {
        return this.replace(filter || Prototype.JSONFilter, '$1');
    }

    function isJSON() {
        var str = this;
        if (str.blank()) return false;
        str = str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
        str = str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
        str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
        return (/^[\],:{}\s]*$/).test(str);
    }

    function evalJSON(sanitize) {
        var json = this.unfilterJSON(),
            cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        if (cx.test(json)) {
            json = json.replace(cx, function(a) {
                return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            });
        }
        try {
            if (!sanitize || json.isJSON()) return eval('(' + json + ')');
        } catch (e) {}
        throw new SyntaxError('Badly formed JSON string: ' + this.inspect());
    }

    function parseJSON() {
        var json = this.unfilterJSON();
        return JSON.parse(json);
    }

    function include(pattern) {
        return this.indexOf(pattern) > -1;
    }

    function startsWith(pattern) {
        return this.lastIndexOf(pattern, 0) === 0;
    }

    function endsWith(pattern) {
        var d = this.length - pattern.length;
        return d >= 0 && this.indexOf(pattern, d) === d;
    }

    function empty() {
        return this == '';
    }

    function blank() {
        return /^\s*$/.test(this);
    }

    function interpolate(object, pattern) {
        return new Template(this, pattern).evaluate(object);
    }
    return {
        gsub: gsub,
        sub: sub,
        scan: scan,
        truncate: truncate,
        strip: String.prototype.trim || strip,
        stripTags: stripTags,
        stripScripts: stripScripts,
        extractScripts: extractScripts,
        evalScripts: evalScripts,
        escapeHTML: escapeHTML,
        unescapeHTML: unescapeHTML,
        toQueryParams: toQueryParams,
        parseQuery: toQueryParams,
        toArray: toArray,
        succ: succ,
        times: times,
        camelize: camelize,
        capitalize: capitalize,
        underscore: underscore,
        dasherize: dasherize,
        inspect: inspect,
        unfilterJSON: unfilterJSON,
        isJSON: isJSON,
        evalJSON: NATIVE_JSON_PARSE_SUPPORT ? parseJSON : evalJSON,
        include: include,
        startsWith: startsWith,
        endsWith: endsWith,
        empty: empty,
        blank: blank,
        interpolate: interpolate
    };
})());
var Template = Class.create({
    initialize: function(template, pattern) {
        this.template = template.toString();
        this.pattern = pattern || Template.Pattern;
    },
    evaluate: function(object) {
        if (object && Object.isFunction(object.toTemplateReplacements))
            object = object.toTemplateReplacements();
        return this.template.gsub(this.pattern, function(match) {
            if (object == null) return (match[1] + '');
            var before = match[1] || '';
            if (before == '\\') return match[2];
            var ctx = object,
                expr = match[3],
                pattern = /^([^.[]+|\[((?:.*?[^\\])?)\])(\.|\[|$)/;
            match = pattern.exec(expr);
            if (match == null) return before;
            while (match != null) {
                var comp = match[1].startsWith('[') ? match[2].replace(/\\\\]/g, ']') : match[1];
                ctx = ctx[comp];
                if (null == ctx || '' == match[3]) break;
                expr = expr.substring('[' == match[3] ? match[1].length : match[0].length);
                match = pattern.exec(expr);
            }
            return before + String.interpret(ctx);
        });
    }
});
Template.Pattern = /(^|.|\r|\n)(#\{(.*?)\})/;
var $break = {};
var Enumerable = (function() {
    function each(iterator, context) {
        var index = 0;
        try {
            this._each(function(value) {
                iterator.call(context, value, index++);
            });
        } catch (e) {
            if (e != $break) throw e;
        }
        return this;
    }

    function eachSlice(number, iterator, context) {
        var index = -number,
            slices = [],
            array = this.toArray();
        if (number < 1) return array;
        while ((index += number) < array.length)
            slices.push(array.slice(index, index + number));
        return slices.collect(iterator, context);
    }

    function all(iterator, context) {
        iterator = iterator || Prototype.K;
        var result = true;
        this.each(function(value, index) {
            result = result && !!iterator.call(context, value, index);
            if (!result) throw $break;
        });
        return result;
    }

    function any(iterator, context) {
        iterator = iterator || Prototype.K;
        var result = false;
        this.each(function(value, index) {
            if (result = !!iterator.call(context, value, index))
                throw $break;
        });
        return result;
    }

    function collect(iterator, context) {
        iterator = iterator || Prototype.K;
        var results = [];
        this.each(function(value, index) {
            results.push(iterator.call(context, value, index));
        });
        return results;
    }

    function detect(iterator, context) {
        var result;
        this.each(function(value, index) {
            if (iterator.call(context, value, index)) {
                result = value;
                throw $break;
            }
        });
        return result;
    }

    function findAll(iterator, context) {
        var results = [];
        this.each(function(value, index) {
            if (iterator.call(context, value, index))
                results.push(value);
        });
        return results;
    }

    function grep(filter, iterator, context) {
        iterator = iterator || Prototype.K;
        var results = [];
        if (Object.isString(filter))
            filter = new RegExp(RegExp.escape(filter));
        this.each(function(value, index) {
            if (filter.match(value))
                results.push(iterator.call(context, value, index));
        });
        return results;
    }

    function include(object) {
        if (Object.isFunction(this.indexOf))
            if (this.indexOf(object) != -1) return true;
        var found = false;
        this.each(function(value) {
            if (value == object) {
                found = true;
                throw $break;
            }
        });
        return found;
    }

    function inGroupsOf(number, fillWith) {
        fillWith = Object.isUndefined(fillWith) ? null : fillWith;
        return this.eachSlice(number, function(slice) {
            while (slice.length < number) slice.push(fillWith);
            return slice;
        });
    }

    function inject(memo, iterator, context) {
        this.each(function(value, index) {
            memo = iterator.call(context, memo, value, index);
        });
        return memo;
    }

    function invoke(method) {
        var args = $A(arguments).slice(1);
        return this.map(function(value) {
            return value[method].apply(value, args);
        });
    }

    function max(iterator, context) {
        iterator = iterator || Prototype.K;
        var result;
        this.each(function(value, index) {
            value = iterator.call(context, value, index);
            if (result == null || value >= result)
                result = value;
        });
        return result;
    }

    function min(iterator, context) {
        iterator = iterator || Prototype.K;
        var result;
        this.each(function(value, index) {
            value = iterator.call(context, value, index);
            if (result == null || value < result)
                result = value;
        });
        return result;
    }

    function partition(iterator, context) {
        iterator = iterator || Prototype.K;
        var trues = [],
            falses = [];
        this.each(function(value, index) {
            (iterator.call(context, value, index) ? trues : falses).push(value);
        });
        return [trues, falses];
    }

    function pluck(property) {
        var results = [];
        this.each(function(value) {
            results.push(value[property]);
        });
        return results;
    }

    function reject(iterator, context) {
        var results = [];
        this.each(function(value, index) {
            if (!iterator.call(context, value, index))
                results.push(value);
        });
        return results;
    }

    function sortBy(iterator, context) {
        return this.map(function(value, index) {
            return {
                value: value,
                criteria: iterator.call(context, value, index)
            };
        }).sort(function(left, right) {
            var a = left.criteria,
                b = right.criteria;
            return a < b ? -1 : a > b ? 1 : 0;
        }).pluck('value');
    }

    function toArray() {
        return this.map();
    }

    function zip() {
        var iterator = Prototype.K,
            args = $A(arguments);
        if (Object.isFunction(args.last()))
            iterator = args.pop();
        var collections = [this].concat(args).map($A);
        return this.map(function(value, index) {
            return iterator(collections.pluck(index));
        });
    }

    function size() {
        return this.toArray().length;
    }

    function inspect() {
        return '#<Enumerable:' + this.toArray().inspect() + '>';
    }
    return {
        each: each,
        eachSlice: eachSlice,
        all: all,
        every: all,
        any: any,
        some: any,
        collect: collect,
        map: collect,
        detect: detect,
        findAll: findAll,
        select: findAll,
        filter: findAll,
        grep: grep,
        include: include,
        member: include,
        inGroupsOf: inGroupsOf,
        inject: inject,
        invoke: invoke,
        max: max,
        min: min,
        partition: partition,
        pluck: pluck,
        reject: reject,
        sortBy: sortBy,
        toArray: toArray,
        entries: toArray,
        zip: zip,
        size: size,
        inspect: inspect,
        find: detect
    };
})();

function $A(iterable) {
    if (!iterable) return [];
    if ('toArray' in Object(iterable)) return iterable.toArray();
    var length = iterable.length || 0,
        results = new Array(length);
    while (length--) results[length] = iterable[length];
    return results;
}

function $w(string) {
    if (!Object.isString(string)) return [];
    string = string.strip();
    return string ? string.split(/\s+/) : [];
}
Array.from = $A;
(function() {
    var arrayProto = Array.prototype,
        slice = arrayProto.slice,
        _each = arrayProto.forEach;

    function each(iterator, context) {
        for (var i = 0, length = this.length >>> 0; i < length; i++) {
            if (i in this) iterator.call(context, this[i], i, this);
        }
    }
    if (!_each) _each = each;

    function clear() {
        this.length = 0;
        return this;
    }

    function first() {
        return this[0];
    }

    function last() {
        return this[this.length - 1];
    }

    function compact() {
        return this.select(function(value) {
            return value != null;
        });
    }

    function flatten() {
        return this.inject([], function(array, value) {
            if (Object.isArray(value))
                return array.concat(value.flatten());
            array.push(value);
            return array;
        });
    }

    function without() {
        var values = slice.call(arguments, 0);
        return this.select(function(value) {
            return !values.include(value);
        });
    }

    function reverse(inline) {
        return (inline === false ? this.toArray() : this)._reverse();
    }

    function uniq(sorted) {
        return this.inject([], function(array, value, index) {
            if (0 == index || (sorted ? array.last() != value : !array.include(value)))
                array.push(value);
            return array;
        });
    }

    function intersect(array) {
        return this.uniq().findAll(function(item) {
            return array.detect(function(value) {
                return item === value
            });
        });
    }

    function clone() {
        return slice.call(this, 0);
    }

    function size() {
        return this.length;
    }

    function inspect() {
        return '[' + this.map(Object.inspect).join(', ') + ']';
    }

    function indexOf(item, i) {
        i || (i = 0);
        var length = this.length;
        if (i < 0) i = length + i;
        for (; i < length; i++)
            if (this[i] === item) return i;
        return -1;
    }

    function lastIndexOf(item, i) {
        i = isNaN(i) ? this.length : (i < 0 ? this.length + i : i) + 1;
        var n = this.slice(0, i).reverse().indexOf(item);
        return (n < 0) ? n : i - n - 1;
    }

    function concat() {
        var array = slice.call(this, 0),
            item;
        for (var i = 0, length = arguments.length; i < length; i++) {
            item = arguments[i];
            if (Object.isArray(item) && !('callee' in item)) {
                for (var j = 0, arrayLength = item.length; j < arrayLength; j++)
                    array.push(item[j]);
            } else {
                array.push(item);
            }
        }
        return array;
    }
    Object.extend(arrayProto, Enumerable);
    if (!arrayProto._reverse)
        arrayProto._reverse = arrayProto.reverse;
    Object.extend(arrayProto, {
        _each: _each,
        clear: clear,
        first: first,
        last: last,
        compact: compact,
        flatten: flatten,
        without: without,
        reverse: reverse,
        uniq: uniq,
        intersect: intersect,
        clone: clone,
        toArray: clone,
        size: size,
        inspect: inspect
    });
    var CONCAT_ARGUMENTS_BUGGY = (function() {
        return [].concat(arguments)[0][0] !== 1;
    })(1, 2)
    if (CONCAT_ARGUMENTS_BUGGY) arrayProto.concat = concat;
    if (!arrayProto.indexOf) arrayProto.indexOf = indexOf;
    if (!arrayProto.lastIndexOf) arrayProto.lastIndexOf = lastIndexOf;
})();

function $H(object) {
    return new Hash(object);
};
var Hash = Class.create(Enumerable, (function() {
    function initialize(object) {
        this._object = Object.isHash(object) ? object.toObject() : Object.clone(object);
    }

    function _each(iterator) {
        for (var key in this._object) {
            var value = this._object[key],
                pair = [key, value];
            pair.key = key;
            pair.value = value;
            iterator(pair);
        }
    }

    function set(key, value) {
        return this._object[key] = value;
    }

    function get(key) {
        if (this._object[key] !== Object.prototype[key])
            return this._object[key];
    }

    function unset(key) {
        var value = this._object[key];
        delete this._object[key];
        return value;
    }

    function toObject() {
        return Object.clone(this._object);
    }

    function keys() {
        return this.pluck('key');
    }

    function values() {
        return this.pluck('value');
    }

    function index(value) {
        var match = this.detect(function(pair) {
            return pair.value === value;
        });
        return match && match.key;
    }

    function merge(object) {
        return this.clone().update(object);
    }

    function update(object) {
        return new Hash(object).inject(this, function(result, pair) {
            result.set(pair.key, pair.value);
            return result;
        });
    }

    function toQueryPair(key, value) {
        if (Object.isUndefined(value)) return key;
        return key + '=' + encodeURIComponent(String.interpret(value));
    }

    function toQueryString() {
        return this.inject([], function(results, pair) {
            var key = encodeURIComponent(pair.key),
                values = pair.value;
            if (values && typeof values == 'object') {
                if (Object.isArray(values)) {
                    var queryValues = [];
                    for (var i = 0, len = values.length, value; i < len; i++) {
                        value = values[i];
                        queryValues.push(toQueryPair(key, value));
                    }
                    return results.concat(queryValues);
                }
            } else results.push(toQueryPair(key, values));
            return results;
        }).join('&');
    }

    function inspect() {
        return '#<Hash:{' + this.map(function(pair) {
            return pair.map(Object.inspect).join(': ');
        }).join(', ') + '}>';
    }

    function clone() {
        return new Hash(this);
    }
    return {
        initialize: initialize,
        _each: _each,
        set: set,
        get: get,
        unset: unset,
        toObject: toObject,
        toTemplateReplacements: toObject,
        keys: keys,
        values: values,
        index: index,
        merge: merge,
        update: update,
        toQueryString: toQueryString,
        inspect: inspect,
        toJSON: toObject,
        clone: clone
    };
})());
Hash.from = $H;
Object.extend(Number.prototype, (function() {
    function toColorPart() {
        return this.toPaddedString(2, 16);
    }

    function succ() {
        return this + 1;
    }

    function times(iterator, context) {
        $R(0, this, true).each(iterator, context);
        return this;
    }

    function toPaddedString(length, radix) {
        var string = this.toString(radix || 10);
        return '0'.times(length - string.length) + string;
    }

    function abs() {
        return Math.abs(this);
    }

    function round() {
        return Math.round(this);
    }

    function ceil() {
        return Math.ceil(this);
    }

    function floor() {
        return Math.floor(this);
    }
    return {
        toColorPart: toColorPart,
        succ: succ,
        times: times,
        toPaddedString: toPaddedString,
        abs: abs,
        round: round,
        ceil: ceil,
        floor: floor
    };
})());

function $R(start, end, exclusive) {
    return new ObjectRange(start, end, exclusive);
}
var ObjectRange = Class.create(Enumerable, (function() {
    function initialize(start, end, exclusive) {
        this.start = start;
        this.end = end;
        this.exclusive = exclusive;
    }

    function _each(iterator) {
        var value = this.start;
        while (this.include(value)) {
            iterator(value);
            value = value.succ();
        }
    }

    function include(value) {
        if (value < this.start)
            return false;
        if (this.exclusive)
            return value < this.end;
        return value <= this.end;
    }
    return {
        initialize: initialize,
        _each: _each,
        include: include
    };
})());
var Ajax = {
    getTransport: function() {
        return Try.these(function() {
            return new XMLHttpRequest()
        }, function() {
            return new ActiveXObject('Msxml2.XMLHTTP')
        }, function() {
            return new ActiveXObject('Microsoft.XMLHTTP')
        }) || false;
    },
    activeRequestCount: 0
};
Ajax.Responders = {
    responders: [],
    _each: function(iterator) {
        this.responders._each(iterator);
    },
    register: function(responder) {
        if (!this.include(responder))
            this.responders.push(responder);
    },
    unregister: function(responder) {
        this.responders = this.responders.without(responder);
    },
    dispatch: function(callback, request, transport, json) {
        this.each(function(responder) {
            if (Object.isFunction(responder[callback])) {
                try {
                    responder[callback].apply(responder, [request, transport, json]);
                } catch (e) {}
            }
        });
    }
};
Object.extend(Ajax.Responders, Enumerable);
Ajax.Responders.register({
    onCreate: function() {
        Ajax.activeRequestCount++
    },
    onComplete: function() {
        Ajax.activeRequestCount--
    }
});
Ajax.Base = Class.create({
    initialize: function(options) {
        this.options = {
            method: 'post',
            asynchronous: true,
            contentType: 'application/x-www-form-urlencoded',
            encoding: 'UTF-8',
            parameters: '',
            evalJSON: true,
            evalJS: true
        };
        Object.extend(this.options, options || {});
        this.options.method = this.options.method.toLowerCase();
        if (Object.isHash(this.options.parameters))
            this.options.parameters = this.options.parameters.toObject();
    }
});
Ajax.Request = Class.create(Ajax.Base, {
    _complete: false,
    initialize: function($super, url, options) {
        $super(options);
        this.transport = Ajax.getTransport();
        this.request(url);
    },
    request: function(url) {
        this.url = url;
        this.method = this.options.method;
        var params = Object.isString(this.options.parameters) ? this.options.parameters : Object.toQueryString(this.options.parameters);
        if (!['get', 'post'].include(this.method)) {
            params += (params ? '&' : '') + "_method=" + this.method;
            this.method = 'post';
        }
        if (params && this.method === 'get') {
            this.url += (this.url.include('?') ? '&' : '?') + params;
        }
        this.parameters = params.toQueryParams();
        try {
            var response = new Ajax.Response(this);
            if (this.options.onCreate) this.options.onCreate(response);
            Ajax.Responders.dispatch('onCreate', this, response);
            this.transport.open(this.method.toUpperCase(), this.url, this.options.asynchronous);
            if (this.options.asynchronous) this.respondToReadyState.bind(this).defer(1);
            this.transport.onreadystatechange = this.onStateChange.bind(this);
            this.setRequestHeaders();
            this.body = this.method == 'post' ? (this.options.postBody || params) : null;
            this.transport.send(this.body);
            if (!this.options.asynchronous && this.transport.overrideMimeType)
                this.onStateChange();
        } catch (e) {
            this.dispatchException(e);
        }
    },
    onStateChange: function() {
        var readyState = this.transport.readyState;
        if (readyState > 1 && !((readyState == 4) && this._complete))
            this.respondToReadyState(this.transport.readyState);
    },
    setRequestHeaders: function() {
        var headers = {
            'X-Requested-With': 'XMLHttpRequest',
            'X-Prototype-Version': Prototype.Version,
            'Accept': 'text/javascript, text/html, application/xml, text/xml, */*'
        };
        if (this.method == 'post') {
            headers['Content-type'] = this.options.contentType +
                (this.options.encoding ? '; charset=' + this.options.encoding : '');
            if (this.transport.overrideMimeType && (navigator.userAgent.match(/Gecko\/(\d{4})/) || [0, 2005])[1] < 2005)
                headers['Connection'] = 'close';
        }
        if (typeof this.options.requestHeaders == 'object') {
            var extras = this.options.requestHeaders;
            if (Object.isFunction(extras.push))
                for (var i = 0, length = extras.length; i < length; i += 2)
                    headers[extras[i]] = extras[i + 1];
            else
                $H(extras).each(function(pair) {
                    headers[pair.key] = pair.value
                });
        }
        for (var name in headers)
            this.transport.setRequestHeader(name, headers[name]);
    },
    success: function() {
        var status = this.getStatus();
        return !status || (status >= 200 && status < 300) || status == 304;
    },
    getStatus: function() {
        try {
            if (this.transport.status === 1223) return 204;
            return this.transport.status || 0;
        } catch (e) {
            return 0
        }
    },
    respondToReadyState: function(readyState) {
        var state = Ajax.Request.Events[readyState],
            response = new Ajax.Response(this);
        if (state == 'Complete') {
            try {
                this._complete = true;
                (this.options['on' + response.status] || this.options['on' + (this.success() ? 'Success' : 'Failure')] || Prototype.emptyFunction)(response, response.headerJSON);
            } catch (e) {
                this.dispatchException(e);
            }
            var contentType = response.getHeader('Content-type');
            if (this.options.evalJS == 'force' || (this.options.evalJS && this.isSameOrigin() && contentType && contentType.match(/^\s*(text|application)\/(x-)?(java|ecma)script(;.*)?\s*$/i)))
                this.evalResponse();
        }
        try {
            (this.options['on' + state] || Prototype.emptyFunction)(response, response.headerJSON);
            Ajax.Responders.dispatch('on' + state, this, response, response.headerJSON);
        } catch (e) {
            this.dispatchException(e);
        }
        if (state == 'Complete') {
            this.transport.onreadystatechange = Prototype.emptyFunction;
        }
    },
    isSameOrigin: function() {
        var m = this.url.match(/^\s*https?:\/\/[^\/]*/);
        return !m || (m[0] == '#{protocol}//#{domain}#{port}'.interpolate({
            protocol: location.protocol,
            domain: document.domain,
            port: location.port ? ':' + location.port : ''
        }));
    },
    getHeader: function(name) {
        try {
            return this.transport.getResponseHeader(name) || null;
        } catch (e) {
            return null;
        }
    },
    evalResponse: function() {
        try {
            return eval((this.transport.responseText || '').unfilterJSON());
        } catch (e) {
            this.dispatchException(e);
        }
    },
    dispatchException: function(exception) {
        (this.options.onException || Prototype.emptyFunction)(this, exception);
        Ajax.Responders.dispatch('onException', this, exception);
    }
});
Ajax.Request.Events = ['Uninitialized', 'Loading', 'Loaded', 'Interactive', 'Complete'];
Ajax.Response = Class.create({
    initialize: function(request) {
        this.request = request;
        var transport = this.transport = request.transport,
            readyState = this.readyState = transport.readyState;
        if ((readyState > 2 && !Prototype.Browser.IE) || readyState == 4) {
            this.status = this.getStatus();
            this.statusText = this.getStatusText();
            this.responseText = String.interpret(transport.responseText);
            this.headerJSON = this._getHeaderJSON();
        }
        if (readyState == 4) {
            var xml = transport.responseXML;
            this.responseXML = Object.isUndefined(xml) ? null : xml;
            this.responseJSON = this._getResponseJSON();
        }
    },
    status: 0,
    statusText: '',
    getStatus: Ajax.Request.prototype.getStatus,
    getStatusText: function() {
        try {
            return this.transport.statusText || '';
        } catch (e) {
            return ''
        }
    },
    getHeader: Ajax.Request.prototype.getHeader,
    getAllHeaders: function() {
        try {
            return this.getAllResponseHeaders();
        } catch (e) {
            return null
        }
    },
    getResponseHeader: function(name) {
        return this.transport.getResponseHeader(name);
    },
    getAllResponseHeaders: function() {
        return this.transport.getAllResponseHeaders();
    },
    _getHeaderJSON: function() {
        var json = this.getHeader('X-JSON');
        if (!json) return null;
        json = decodeURIComponent(escape(json));
        try {
            return json.evalJSON(this.request.options.sanitizeJSON || !this.request.isSameOrigin());
        } catch (e) {
            this.request.dispatchException(e);
        }
    },
    _getResponseJSON: function() {
        var options = this.request.options;
        if (!options.evalJSON || (options.evalJSON != 'force' && !(this.getHeader('Content-type') || '').include('application/json')) || this.responseText.blank())
            return null;
        try {
            return this.responseText.evalJSON(options.sanitizeJSON || !this.request.isSameOrigin());
        } catch (e) {
            this.request.dispatchException(e);
        }
    }
});
Ajax.Updater = Class.create(Ajax.Request, {
    initialize: function($super, container, url, options) {
        this.container = {
            success: (container.success || container),
            failure: (container.failure || (container.success ? null : container))
        };
        options = Object.clone(options);
        var onComplete = options.onComplete;
        options.onComplete = (function(response, json) {
            this.updateContent(response.responseText);
            if (Object.isFunction(onComplete)) onComplete(response, json);
        }).bind(this);
        $super(url, options);
    },
    updateContent: function(responseText) {
        var receiver = this.container[this.success() ? 'success' : 'failure'],
            options = this.options;
        if (!options.evalScripts) responseText = responseText.stripScripts();
        if (receiver = $p(receiver)) {
            if (options.insertion) {
                if (Object.isString(options.insertion)) {
                    var insertion = {};
                    insertion[options.insertion] = responseText;
                    receiver.insert(insertion);
                } else options.insertion(receiver, responseText);
            } else receiver.update(responseText);
        }
    }
});
Ajax.PeriodicalUpdater = Class.create(Ajax.Base, {
    initialize: function($super, container, url, options) {
        $super(options);
        this.onComplete = this.options.onComplete;
        this.frequency = (this.options.frequency || 2);
        this.decay = (this.options.decay || 1);
        this.updater = {};
        this.container = container;
        this.url = url;
        this.start();
    },
    start: function() {
        this.options.onComplete = this.updateComplete.bind(this);
        this.onTimerEvent();
    },
    stop: function() {
        this.updater.options.onComplete = undefined;
        clearTimeout(this.timer);
        (this.onComplete || Prototype.emptyFunction).apply(this, arguments);
    },
    updateComplete: function(response) {
        if (this.options.decay) {
            this.decay = (response.responseText == this.lastText ? this.decay * this.options.decay : 1);
            this.lastText = response.responseText;
        }
        this.timer = this.onTimerEvent.bind(this).delay(this.decay * this.frequency);
    },
    onTimerEvent: function() {
        this.updater = new Ajax.Updater(this.container, this.url, this.options);
    }
});

function $p(element) {
    if (arguments.length > 1) {
        for (var i = 0, elements = [], length = arguments.length; i < length; i++)
            elements.push($p(arguments[i]));
        return elements;
    }
    if (Object.isString(element))
        element = document.getElementById(element);
    return Element.extend(element);
}
if (Prototype.BrowserFeatures.XPath) {
    document._getElementsByXPath = function(expression, parentElement) {
        var results = [];
        var query = document.evaluate(expression, $p(parentElement) || document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        for (var i = 0, length = query.snapshotLength; i < length; i++)
            results.push(Element.extend(query.snapshotItem(i)));
        return results;
    };
}
if (!Node) var Node = {};
if (!Node.ELEMENT_NODE) {
    Object.extend(Node, {
        ELEMENT_NODE: 1,
        ATTRIBUTE_NODE: 2,
        TEXT_NODE: 3,
        CDATA_SECTION_NODE: 4,
        ENTITY_REFERENCE_NODE: 5,
        ENTITY_NODE: 6,
        PROCESSING_INSTRUCTION_NODE: 7,
        COMMENT_NODE: 8,
        DOCUMENT_NODE: 9,
        DOCUMENT_TYPE_NODE: 10,
        DOCUMENT_FRAGMENT_NODE: 11,
        NOTATION_NODE: 12
    });
}
(function(global) {
    function shouldUseCache(tagName, attributes) {
        if (tagName === 'select') return false;
        if ('type' in attributes) return false;
        return true;
    }
    var HAS_EXTENDED_CREATE_ELEMENT_SYNTAX = (function() {
        try {
            var el = document.createElement('<input name="x">');
            return el.tagName.toLowerCase() === 'input' && el.name === 'x';
        } catch (err) {
            return false;
        }
    })();
    var element = global.Element;
    global.Element = function(tagName, attributes) {
        attributes = attributes || {};
        tagName = tagName.toLowerCase();
        var cache = Element.cache;
        if (HAS_EXTENDED_CREATE_ELEMENT_SYNTAX && attributes.name) {
            tagName = '<' + tagName + ' name="' + attributes.name + '">';
            delete attributes.name;
            return Element.writeAttribute(document.createElement(tagName), attributes);
        }
        if (!cache[tagName]) cache[tagName] = Element.extend(document.createElement(tagName));
        var node = shouldUseCache(tagName, attributes) ? cache[tagName].cloneNode(false) : document.createElement(tagName);
        return Element.writeAttribute(node, attributes);
    };
    Object.extend(global.Element, element || {});
    if (element) global.Element.prototype = element.prototype;
})(this);
Element.idCounter = 1;
Element.cache = {};
Element._purgeElement = function(element) {
    var uid = element._prototypeUID;
    if (uid) {
        Element.stopObserving(element);
        element._prototypeUID = void 0;
        delete Element.Storage[uid];
    }
}
Element.Methods = {
    visible: function(element) {
        return $p(element).style.display != 'none';
    },
    toggle: function(element) {
        element = $p(element);
        Element[Element.visible(element) ? 'hide' : 'show'](element);
        return element;
    },
    hide: function(element) {
        element = $p(element);
        element.style.display = 'none';
        return element;
    },
    show: function(element) {
        element = $p(element);
        element.style.display = '';
        return element;
    },
    remove: function(element) {
        element = $p(element);
        element.parentNode.removeChild(element);
        return element;
    },
    update: (function() {
        var SELECT_ELEMENT_INNERHTML_BUGGY = (function() {
            var el = document.createElement("select"),
                isBuggy = true;
            el.innerHTML = "<option value=\"test\">test</option>";
            if (el.options && el.options[0]) {
                isBuggy = el.options[0].nodeName.toUpperCase() !== "OPTION";
            }
            el = null;
            return isBuggy;
        })();
        var TABLE_ELEMENT_INNERHTML_BUGGY = (function() {
            try {
                var el = document.createElement("table");
                if (el && el.tBodies) {
                    el.innerHTML = "<tbody><tr><td>test</td></tr></tbody>";
                    var isBuggy = typeof el.tBodies[0] == "undefined";
                    el = null;
                    return isBuggy;
                }
            } catch (e) {
                return true;
            }
        })();
        var LINK_ELEMENT_INNERHTML_BUGGY = (function() {
            try {
                var el = document.createElement('div');
                el.innerHTML = "<link>";
                var isBuggy = (el.childNodes.length === 0);
                el = null;
                return isBuggy;
            } catch (e) {
                return true;
            }
        })();
        var ANY_INNERHTML_BUGGY = SELECT_ELEMENT_INNERHTML_BUGGY || TABLE_ELEMENT_INNERHTML_BUGGY || LINK_ELEMENT_INNERHTML_BUGGY;
        var SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING = (function() {
            var s = document.createElement("script"),
                isBuggy = false;
            try {
                s.appendChild(document.createTextNode(""));
                isBuggy = !s.firstChild || s.firstChild && s.firstChild.nodeType !== 3;
            } catch (e) {
                isBuggy = true;
            }
            s = null;
            return isBuggy;
        })();

        function update(element, content) {
            element = $p(element);
            var purgeElement = Element._purgeElement;
            var descendants = element.getElementsByTagName('*'),
                i = descendants.length;
            while (i--) purgeElement(descendants[i]);
            if (content && content.toElement)
                content = content.toElement();
            if (Object.isElement(content))
                return element.update().insert(content);
            content = Object.toHTML(content);
            var tagName = element.tagName.toUpperCase();
            if (tagName === 'SCRIPT' && SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING) {
                element.text = content;
                return element;
            }
            if (ANY_INNERHTML_BUGGY) {
                if (tagName in Element._insertionTranslations.tags) {
                    while (element.firstChild) {
                        element.removeChild(element.firstChild);
                    }
                    Element._getContentFromAnonymousElement(tagName, content.stripScripts()).each(function(node) {
                        element.appendChild(node)
                    });
                } else if (LINK_ELEMENT_INNERHTML_BUGGY && Object.isString(content) && content.indexOf('<link') > -1) {
                    while (element.firstChild) {
                        element.removeChild(element.firstChild);
                    }
                    var nodes = Element._getContentFromAnonymousElement(tagName, content.stripScripts(), true);
                    nodes.each(function(node) {
                        element.appendChild(node)
                    });
                } else {
                    element.innerHTML = content.stripScripts();
                }
            } else {
                element.innerHTML = content.stripScripts();
            }
            content.evalScripts.bind(content).defer();
            return element;
        }
        return update;
    })(),
    replace: function(element, content) {
        element = $p(element);
        if (content && content.toElement) content = content.toElement();
        else if (!Object.isElement(content)) {
            content = Object.toHTML(content);
            var range = element.ownerDocument.createRange();
            range.selectNode(element);
            content.evalScripts.bind(content).defer();
            content = range.createContextualFragment(content.stripScripts());
        }
        element.parentNode.replaceChild(content, element);
        return element;
    },
    insert: function(element, insertions) {
        element = $p(element);
        if (Object.isString(insertions) || Object.isNumber(insertions) || Object.isElement(insertions) || (insertions && (insertions.toElement || insertions.toHTML)))
            insertions = {
                bottom: insertions
            };
        var content, insert, tagName, childNodes;
        for (var position in insertions) {
            content = insertions[position];
            position = position.toLowerCase();
            insert = Element._insertionTranslations[position];
            if (content && content.toElement) content = content.toElement();
            if (Object.isElement(content)) {
                insert(element, content);
                continue;
            }
            content = Object.toHTML(content);
            tagName = ((position == 'before' || position == 'after') ? element.parentNode : element).tagName.toUpperCase();
            childNodes = Element._getContentFromAnonymousElement(tagName, content.stripScripts());
            if (position == 'top' || position == 'after') childNodes.reverse();
            childNodes.each(insert.curry(element));
            content.evalScripts.bind(content).defer();
        }
        return element;
    },
    wrap: function(element, wrapper, attributes) {
        element = $p(element);
        if (Object.isElement(wrapper))
            $p(wrapper).writeAttribute(attributes || {});
        else if (Object.isString(wrapper)) wrapper = new Element(wrapper, attributes);
        else wrapper = new Element('div', wrapper);
        if (element.parentNode)
            element.parentNode.replaceChild(wrapper, element);
        wrapper.appendChild(element);
        return wrapper;
    },
    inspect: function(element) {
        element = $p(element);
        var result = '<' + element.tagName.toLowerCase();
        $H({
            'id': 'id',
            'className': 'class'
        }).each(function(pair) {
            var property = pair.first(),
                attribute = pair.last(),
                value = (element[property] || '').toString();
            if (value) result += ' ' + attribute + '=' + value.inspect(true);
        });
        return result + '>';
    },
    recursivelyCollect: function(element, property, maximumLength) {
        element = $p(element);
        maximumLength = maximumLength || -1;
        var elements = [];
        while (element = element[property]) {
            if (element.nodeType == 1)
                elements.push(Element.extend(element));
            if (elements.length == maximumLength)
                break;
        }
        return elements;
    },
    ancestors: function(element) {
        return Element.recursivelyCollect(element, 'parentNode');
    },
    descendants: function(element) {
        return Element.select(element, "*");
    },
    firstDescendant: function(element) {
        element = $p(element).firstChild;
        while (element && element.nodeType != 1) element = element.nextSibling;
        return $p(element);
    },
    immediateDescendants: function(element) {
        var results = [],
            child = $p(element).firstChild;
        while (child) {
            if (child.nodeType === 1) {
                results.push(Element.extend(child));
            }
            child = child.nextSibling;
        }
        return results;
    },
    previousSiblings: function(element, maximumLength) {
        return Element.recursivelyCollect(element, 'previousSibling');
    },
    nextSiblings: function(element) {
        return Element.recursivelyCollect(element, 'nextSibling');
    },
    siblings: function(element) {
        element = $p(element);
        return Element.previousSiblings(element).reverse().concat(Element.nextSiblings(element));
    },
    match: function(element, selector) {
        element = $p(element);
        if (Object.isString(selector))
            return Prototype.Selector.match(element, selector);
        return selector.match(element);
    },
    up: function(element, expression, index) {
        element = $p(element);
        if (arguments.length == 1) return $p(element.parentNode);
        var ancestors = Element.ancestors(element);
        return Object.isNumber(expression) ? ancestors[expression] : Prototype.Selector.find(ancestors, expression, index);
    },
    down: function(element, expression, index) {
        element = $p(element);
        if (arguments.length == 1) return Element.firstDescendant(element);
        return Object.isNumber(expression) ? Element.descendants(element)[expression] : Element.select(element, expression)[index || 0];
    },
    previous: function(element, expression, index) {
        element = $p(element);
        if (Object.isNumber(expression)) index = expression, expression = false;
        if (!Object.isNumber(index)) index = 0;
        if (expression) {
            return Prototype.Selector.find(element.previousSiblings(), expression, index);
        } else {
            return element.recursivelyCollect("previousSibling", index + 1)[index];
        }
    },
    next: function(element, expression, index) {
        element = $p(element);
        if (Object.isNumber(expression)) index = expression, expression = false;
        if (!Object.isNumber(index)) index = 0;
        if (expression) {
            return Prototype.Selector.find(element.nextSiblings(), expression, index);
        } else {
            var maximumLength = Object.isNumber(index) ? index + 1 : 1;
            return element.recursivelyCollect("nextSibling", index + 1)[index];
        }
    },
    select: function(element) {
        element = $p(element);
        var expressions = Array.prototype.slice.call(arguments, 1).join(', ');
        return Prototype.Selector.select(expressions, element);
    },
    adjacent: function(element) {
        element = $p(element);
        var expressions = Array.prototype.slice.call(arguments, 1).join(', ');
        return Prototype.Selector.select(expressions, element.parentNode).without(element);
    },
    identify: function(element) {
        element = $p(element);
        var id = Element.readAttribute(element, 'id');
        if (id) return id;
        do {
            id = 'anonymous_element_' + Element.idCounter++
        } while ($p(id));
        Element.writeAttribute(element, 'id', id);
        return id;
    },
    readAttribute: function(element, name) {
        element = $p(element);
        if (Prototype.Browser.IE) {
            var t = Element._attributeTranslations.read;
            if (t.values[name]) return t.values[name](element, name);
            if (t.names[name]) name = t.names[name];
            if (name.include(':')) {
                return (!element.attributes || !element.attributes[name]) ? null : element.attributes[name].value;
            }
        }
        return element.getAttribute(name);
    },
    writeAttribute: function(element, name, value) {
        element = $p(element);
        var attributes = {},
            t = Element._attributeTranslations.write;
        if (typeof name == 'object') attributes = name;
        else attributes[name] = Object.isUndefined(value) ? true : value;
        for (var attr in attributes) {
            name = t.names[attr] || attr;
            value = attributes[attr];
            if (t.values[attr]) name = t.values[attr](element, value);
            if (value === false || value === null)
                element.removeAttribute(name);
            else if (value === true)
                element.setAttribute(name, name);
            else element.setAttribute(name, value);
        }
        return element;
    },
    getHeight: function(element) {
        return Element.getDimensions(element).height;
    },
    getWidth: function(element) {
        return Element.getDimensions(element).width;
    },
    classNames: function(element) {
        return new Element.ClassNames(element);
    },
    hasClassName: function(element, className) {
        if (!(element = $p(element))) return;
        var elementClassName = element.className;
        return (elementClassName.length > 0 && (elementClassName == className || new RegExp("(^|\\s)" + className + "(\\s|$)").test(elementClassName)));
    },
    addClassName: function(element, className) {
        if (!(element = $p(element))) return;
        if (!Element.hasClassName(element, className))
            element.className += (element.className ? ' ' : '') + className;
        return element;
    },
    removeClassName: function(element, className) {
        if (!(element = $p(element))) return;
        element.className = element.className.replace(new RegExp("(^|\\s+)" + className + "(\\s+|$)"), ' ').strip();
        return element;
    },
    toggleClassName: function(element, className) {
        if (!(element = $p(element))) return;
        return Element[Element.hasClassName(element, className) ? 'removeClassName' : 'addClassName'](element, className);
    },
    cleanWhitespace: function(element) {
        element = $p(element);
        var node = element.firstChild;
        while (node) {
            var nextNode = node.nextSibling;
            if (node.nodeType == 3 && !/\S/.test(node.nodeValue))
                element.removeChild(node);
            node = nextNode;
        }
        return element;
    },
    empty: function(element) {
        return $p(element).innerHTML.blank();
    },
    descendantOf: function(element, ancestor) {
        element = $p(element), ancestor = $p(ancestor);
        if (element.compareDocumentPosition)
            return (element.compareDocumentPosition(ancestor) & 8) === 8;
        if (ancestor.contains)
            return ancestor.contains(element) && ancestor !== element;
        while (element = element.parentNode)
            if (element == ancestor) return true;
        return false;
    },
    scrollTo: function(element) {
        element = $p(element);
        var pos = Element.cumulativeOffset(element);
        window.scrollTo(pos[0], pos[1]);
        return element;
    },
    getStyle: function(element, style) {
        element = $p(element);
        style = style == 'float' ? 'cssFloat' : style.camelize();
        var value = element.style[style];
        if (!value || value == 'auto') {
            var css = document.defaultView.getComputedStyle(element, null);
            value = css ? css[style] : null;
        }
        if (style == 'opacity') return value ? parseFloat(value) : 1.0;
        return value == 'auto' ? null : value;
    },
    getOpacity: function(element) {
        return $p(element).getStyle('opacity');
    },
    setStyle: function(element, styles) {
        element = $p(element);
        var elementStyle = element.style,
            match;
        if (Object.isString(styles)) {
            element.style.cssText += ';' + styles;
            return styles.include('opacity') ? element.setOpacity(styles.match(/opacity:\s*(\d?\.?\d*)/)[1]) : element;
        }
        for (var property in styles)
            if (property == 'opacity') element.setOpacity(styles[property]);
            else
                elementStyle[(property == 'float' || property == 'cssFloat') ? (Object.isUndefined(elementStyle.styleFloat) ? 'cssFloat' : 'styleFloat') : property] = styles[property];
        return element;
    },
    setOpacity: function(element, value) {
        element = $p(element);
        element.style.opacity = (value == 1 || value === '') ? '' : (value < 0.00001) ? 0 : value;
        return element;
    },
    makePositioned: function(element) {
        element = $p(element);
        var pos = Element.getStyle(element, 'position');
        if (pos == 'static' || !pos) {
            element._madePositioned = true;
            element.style.position = 'relative';
            if (Prototype.Browser.Opera) {
                element.style.top = 0;
                element.style.left = 0;
            }
        }
        return element;
    },
    undoPositioned: function(element) {
        element = $p(element);
        if (element._madePositioned) {
            element._madePositioned = undefined;
            element.style.position = element.style.top = element.style.left = element.style.bottom = element.style.right = '';
        }
        return element;
    },
    makeClipping: function(element) {
        element = $p(element);
        if (element._overflow) return element;
        element._overflow = Element.getStyle(element, 'overflow') || 'auto';
        if (element._overflow !== 'hidden')
            element.style.overflow = 'hidden';
        return element;
    },
    undoClipping: function(element) {
        element = $p(element);
        if (!element._overflow) return element;
        element.style.overflow = element._overflow == 'auto' ? '' : element._overflow;
        element._overflow = null;
        return element;
    },
    clonePosition: function(element, source) {
        var options = Object.extend({
            setLeft: true,
            setTop: true,
            setWidth: true,
            setHeight: true,
            offsetTop: 0,
            offsetLeft: 0
        }, arguments[2] || {});
        source = $p(source);
        var p = Element.viewportOffset(source),
            delta = [0, 0],
            parent = null;
        element = $p(element);
        if (Element.getStyle(element, 'position') == 'absolute') {
            parent = Element.getOffsetParent(element);
            delta = Element.viewportOffset(parent);
        }
        if (parent == document.body) {
            delta[0] -= document.body.offsetLeft;
            delta[1] -= document.body.offsetTop;
        }
        if (options.setLeft) element.style.left = (p[0] - delta[0] + options.offsetLeft) + 'px';
        if (options.setTop) element.style.top = (p[1] - delta[1] + options.offsetTop) + 'px';
        if (options.setWidth) element.style.width = source.offsetWidth + 'px';
        if (options.setHeight) element.style.height = source.offsetHeight + 'px';
        return element;
    }
};
Object.extend(Element.Methods, {
    getElementsBySelector: Element.Methods.select,
    childElements: Element.Methods.immediateDescendants
});
Element._attributeTranslations = {
    write: {
        names: {
            className: 'class',
            htmlFor: 'for'
        },
        values: {}
    }
};
if (Prototype.Browser.Opera) {
    Element.Methods.getStyle = Element.Methods.getStyle.wrap(function(proceed, element, style) {
        switch (style) {
            case 'height':
            case 'width':
                if (!Element.visible(element)) return null;
                var dim = parseInt(proceed(element, style), 10);
                if (dim !== element['offset' + style.capitalize()])
                    return dim + 'px';
                var properties;
                if (style === 'height') {
                    properties = ['border-top-width', 'padding-top', 'padding-bottom', 'border-bottom-width'];
                } else {
                    properties = ['border-left-width', 'padding-left', 'padding-right', 'border-right-width'];
                }
                return properties.inject(dim, function(memo, property) {
                    var val = proceed(element, property);
                    return val === null ? memo : memo - parseInt(val, 10);
                }) + 'px';
            default:
                return proceed(element, style);
        }
    });
    Element.Methods.readAttribute = Element.Methods.readAttribute.wrap(function(proceed, element, attribute) {
        if (attribute === 'title') return element.title;
        return proceed(element, attribute);
    });
} else if (Prototype.Browser.IE) {
    Element.Methods.getStyle = function(element, style) {
        element = $p(element);
        style = (style == 'float' || style == 'cssFloat') ? 'styleFloat' : style.camelize();
        var value = element.style[style];
        if (!value && element.currentStyle) value = element.currentStyle[style];
        if (style == 'opacity') {
            if (value = (element.getStyle('filter') || '').match(/alpha\(opacity=(.*)\)/))
                if (value[1]) return parseFloat(value[1]) / 100;
            return 1.0;
        }
        if (value == 'auto') {
            if ((style == 'width' || style == 'height') && (element.getStyle('display') != 'none'))
                return element['offset' + style.capitalize()] + 'px';
            return null;
        }
        return value;
    };
    Element.Methods.setOpacity = function(element, value) {
        function stripAlpha(filter) {
            return filter.replace(/alpha\([^\)]*\)/gi, '');
        }
        element = $p(element);
        var currentStyle = element.currentStyle;
        if ((currentStyle && !currentStyle.hasLayout) || (!currentStyle && element.style.zoom == 'normal'))
            element.style.zoom = 1;
        var filter = element.getStyle('filter'),
            style = element.style;
        if (value == 1 || value === '') {
            (filter = stripAlpha(filter)) ? style.filter = filter: style.removeAttribute('filter');
            return element;
        } else if (value < 0.00001) value = 0;
        style.filter = stripAlpha(filter) + 'alpha(opacity=' + (value * 100) + ')';
        return element;
    };
    Element._attributeTranslations = (function() {
        var classProp = 'className',
            forProp = 'for',
            el = document.createElement('div');
        el.setAttribute(classProp, 'x');
        if (el.className !== 'x') {
            el.setAttribute('class', 'x');
            if (el.className === 'x') {
                classProp = 'class';
            }
        }
        el = null;
        el = document.createElement('label');
        el.setAttribute(forProp, 'x');
        if (el.htmlFor !== 'x') {
            el.setAttribute('htmlFor', 'x');
            if (el.htmlFor === 'x') {
                forProp = 'htmlFor';
            }
        }
        el = null;
        return {
            read: {
                names: {
                    'class': classProp,
                    'className': classProp,
                    'for': forProp,
                    'htmlFor': forProp
                },
                values: {
                    _getAttr: function(element, attribute) {
                        return element.getAttribute(attribute);
                    },
                    _getAttr2: function(element, attribute) {
                        return element.getAttribute(attribute, 2);
                    },
                    _getAttrNode: function(element, attribute) {
                        var node = element.getAttributeNode(attribute);
                        return node ? node.value : "";
                    },
                    _getEv: (function() {
                        var el = document.createElement('div'),
                            f;
                        el.onclick = Prototype.emptyFunction;
                        var value = el.getAttribute('onclick');
                        if (String(value).indexOf('{') > -1) {
                            f = function(element, attribute) {
                                attribute = element.getAttribute(attribute);
                                if (!attribute) return null;
                                attribute = attribute.toString();
                                attribute = attribute.split('{')[1];
                                attribute = attribute.split('}')[0];
                                return attribute.strip();
                            };
                        } else if (value === '') {
                            f = function(element, attribute) {
                                attribute = element.getAttribute(attribute);
                                if (!attribute) return null;
                                return attribute.strip();
                            };
                        }
                        el = null;
                        return f;
                    })(),
                    _flag: function(element, attribute) {
                        return $p(element).hasAttribute(attribute) ? attribute : null;
                    },
                    style: function(element) {
                        return element.style.cssText.toLowerCase();
                    },
                    title: function(element) {
                        return element.title;
                    }
                }
            }
        }
    })();
    Element._attributeTranslations.write = {
        names: Object.extend({
            cellpadding: 'cellPadding',
            cellspacing: 'cellSpacing'
        }, Element._attributeTranslations.read.names),
        values: {
            checked: function(element, value) {
                element.checked = !!value;
            },
            style: function(element, value) {
                element.style.cssText = value ? value : '';
            }
        }
    };
    Element._attributeTranslations.has = {};
    $w('colSpan rowSpan vAlign dateTime accessKey tabIndex ' + 'encType maxLength readOnly longDesc frameBorder').each(function(attr) {
        Element._attributeTranslations.write.names[attr.toLowerCase()] = attr;
        Element._attributeTranslations.has[attr.toLowerCase()] = attr;
    });
    (function(v) {
        Object.extend(v, {
            href: v._getAttr2,
            src: v._getAttr2,
            type: v._getAttr,
            action: v._getAttrNode,
            disabled: v._flag,
            checked: v._flag,
            readonly: v._flag,
            multiple: v._flag,
            onload: v._getEv,
            onunload: v._getEv,
            onclick: v._getEv,
            ondblclick: v._getEv,
            onmousedown: v._getEv,
            onmouseup: v._getEv,
            onmouseover: v._getEv,
            onmousemove: v._getEv,
            onmouseout: v._getEv,
            onfocus: v._getEv,
            onblur: v._getEv,
            onkeypress: v._getEv,
            onkeydown: v._getEv,
            onkeyup: v._getEv,
            onsubmit: v._getEv,
            onreset: v._getEv,
            onselect: v._getEv,
            onchange: v._getEv
        });
    })(Element._attributeTranslations.read.values);
    if (Prototype.BrowserFeatures.ElementExtensions) {
        (function() {
            function _descendants(element) {
                var nodes = element.getElementsByTagName('*'),
                    results = [];
                for (var i = 0, node; node = nodes[i]; i++)
                    if (node.tagName !== "!")
                        results.push(node);
                return results;
            }
            Element.Methods.down = function(element, expression, index) {
                element = $p(element);
                if (arguments.length == 1) return element.firstDescendant();
                return Object.isNumber(expression) ? _descendants(element)[expression] : Element.select(element, expression)[index || 0];
            }
        })();
    }
} else if (Prototype.Browser.Gecko && /rv:1\.8\.0/.test(navigator.userAgent)) {
    Element.Methods.setOpacity = function(element, value) {
        element = $p(element);
        element.style.opacity = (value == 1) ? 0.999999 : (value === '') ? '' : (value < 0.00001) ? 0 : value;
        return element;
    };
} else if (Prototype.Browser.WebKit) {
    Element.Methods.setOpacity = function(element, value) {
        element = $p(element);
        element.style.opacity = (value == 1 || value === '') ? '' : (value < 0.00001) ? 0 : value;
        if (value == 1)
            if (element.tagName.toUpperCase() == 'IMG' && element.width) {
                element.width++;
                element.width--;
            } else try {
                var n = document.createTextNode(' ');
                element.appendChild(n);
                element.removeChild(n);
            } catch (e) {}
        return element;
    };
}
if ('outerHTML' in document.documentElement) {
    Element.Methods.replace = function(element, content) {
        element = $p(element);
        if (content && content.toElement) content = content.toElement();
        if (Object.isElement(content)) {
            element.parentNode.replaceChild(content, element);
            return element;
        }
        content = Object.toHTML(content);
        var parent = element.parentNode,
            tagName = parent.tagName.toUpperCase();
        if (Element._insertionTranslations.tags[tagName]) {
            var nextSibling = element.next(),
                fragments = Element._getContentFromAnonymousElement(tagName, content.stripScripts());
            parent.removeChild(element);
            if (nextSibling)
                fragments.each(function(node) {
                    parent.insertBefore(node, nextSibling)
                });
            else
                fragments.each(function(node) {
                    parent.appendChild(node)
                });
        } else element.outerHTML = content.stripScripts();
        content.evalScripts.bind(content).defer();
        return element;
    };
}
Element._returnOffset = function(l, t) {
    var result = [l, t];
    result.left = l;
    result.top = t;
    return result;
};
Element._getContentFromAnonymousElement = function(tagName, html, force) {
    var div = new Element('div'),
        t = Element._insertionTranslations.tags[tagName];
    var workaround = false;
    if (t) workaround = true;
    else if (force) {
        workaround = true;
        t = ['', '', 0];
    }
    if (workaround) {
        div.innerHTML = '&nbsp;' + t[0] + html + t[1];
        div.removeChild(div.firstChild);
        for (var i = t[2]; i--;) {
            div = div.firstChild;
        }
    } else {
        div.innerHTML = html;
    }
    return $A(div.childNodes);
};
Element._insertionTranslations = {
    before: function(element, node) {
        element.parentNode.insertBefore(node, element);
    },
    top: function(element, node) {
        element.insertBefore(node, element.firstChild);
    },
    bottom: function(element, node) {
        element.appendChild(node);
    },
    after: function(element, node) {
        element.parentNode.insertBefore(node, element.nextSibling);
    },
    tags: {
        TABLE: ['<table>', '</table>', 1],
        TBODY: ['<table><tbody>', '</tbody></table>', 2],
        TR: ['<table><tbody><tr>', '</tr></tbody></table>', 3],
        TD: ['<table><tbody><tr><td>', '</td></tr></tbody></table>', 4],
        SELECT: ['<select>', '</select>', 1]
    }
};
(function() {
    var tags = Element._insertionTranslations.tags;
    Object.extend(tags, {
        THEAD: tags.TBODY,
        TFOOT: tags.TBODY,
        TH: tags.TD
    });
})();
Element.Methods.Simulated = {
    hasAttribute: function(element, attribute) {
        attribute = Element._attributeTranslations.has[attribute] || attribute;
        var node = $p(element).getAttributeNode(attribute);
        return !!(node && node.specified);
    }
};
Element.Methods.ByTag = {};
Object.extend(Element, Element.Methods);
(function(div) {
    if (!Prototype.BrowserFeatures.ElementExtensions && div['__proto__']) {
        window.HTMLElement = {};
        window.HTMLElement.prototype = div['__proto__'];
        Prototype.BrowserFeatures.ElementExtensions = true;
    }
    div = null;
})(document.createElement('div'));
Element.extend = (function() {
    function checkDeficiency(tagName) {
        if (typeof window.Element != 'undefined') {
            var proto = window.Element.prototype;
            if (proto) {
                var id = '_' + (Math.random() + '').slice(2),
                    el = document.createElement(tagName);
                proto[id] = 'x';
                var isBuggy = (el[id] !== 'x');
                delete proto[id];
                el = null;
                return isBuggy;
            }
        }
        return false;
    }

    function extendElementWith(element, methods) {
        for (var property in methods) {
            var value = methods[property];
            if (Object.isFunction(value) && !(property in element))
                element[property] = value.methodize();
        }
    }
    var HTMLOBJECTELEMENT_PROTOTYPE_BUGGY = checkDeficiency('object');
    if (Prototype.BrowserFeatures.SpecificElementExtensions) {
        if (HTMLOBJECTELEMENT_PROTOTYPE_BUGGY) {
            return function(element) {
                if (element && typeof element._extendedByPrototype == 'undefined') {
                    var t = element.tagName;
                    if (t && (/^(?:object|applet|embed)$/i.test(t))) {
                        extendElementWith(element, Element.Methods);
                        extendElementWith(element, Element.Methods.Simulated);
                        extendElementWith(element, Element.Methods.ByTag[t.toUpperCase()]);
                    }
                }
                return element;
            }
        }
        return Prototype.K;
    }
    var Methods = {},
        ByTag = Element.Methods.ByTag;
    var extend = Object.extend(function(element) {
        if (!element || typeof element._extendedByPrototype != 'undefined' || element.nodeType != 1 || element == window) return element;
        var methods = Object.clone(Methods),
            tagName = element.tagName.toUpperCase();
        if (ByTag[tagName]) Object.extend(methods, ByTag[tagName]);
        extendElementWith(element, methods);
        element._extendedByPrototype = Prototype.emptyFunction;
        return element;
    }, {
        refresh: function() {
            if (!Prototype.BrowserFeatures.ElementExtensions) {
                Object.extend(Methods, Element.Methods);
                Object.extend(Methods, Element.Methods.Simulated);
            }
        }
    });
    extend.refresh();
    return extend;
})();
if (document.documentElement.hasAttribute) {
    Element.hasAttribute = function(element, attribute) {
        return element.hasAttribute(attribute);
    };
} else {
    Element.hasAttribute = Element.Methods.Simulated.hasAttribute;
}
Element.addMethods = function(methods) {
    var F = Prototype.BrowserFeatures,
        T = Element.Methods.ByTag;
    if (!methods) {
        Object.extend(Form, Form.Methods);
        Object.extend(Form.Element, Form.Element.Methods);
        Object.extend(Element.Methods.ByTag, {
            "FORM": Object.clone(Form.Methods),
            "INPUT": Object.clone(Form.Element.Methods),
            "SELECT": Object.clone(Form.Element.Methods),
            "TEXTAREA": Object.clone(Form.Element.Methods),
            "BUTTON": Object.clone(Form.Element.Methods)
        });
    }
    if (arguments.length == 2) {
        var tagName = methods;
        methods = arguments[1];
    }
    if (!tagName) Object.extend(Element.Methods, methods || {});
    else {
        if (Object.isArray(tagName)) tagName.each(extend);
        else extend(tagName);
    }

    function extend(tagName) {
        tagName = tagName.toUpperCase();
        if (!Element.Methods.ByTag[tagName])
            Element.Methods.ByTag[tagName] = {};
        Object.extend(Element.Methods.ByTag[tagName], methods);
    }

    function copy(methods, destination, onlyIfAbsent) {
        onlyIfAbsent = onlyIfAbsent || false;
        for (var property in methods) {
            var value = methods[property];
            if (!Object.isFunction(value)) continue;
            if (!onlyIfAbsent || !(property in destination))
                destination[property] = value.methodize();
        }
    }

    function findDOMClass(tagName) {
        var klass;
        var trans = {
            "OPTGROUP": "OptGroup",
            "TEXTAREA": "TextArea",
            "P": "Paragraph",
            "FIELDSET": "FieldSet",
            "UL": "UList",
            "OL": "OList",
            "DL": "DList",
            "DIR": "Directory",
            "H1": "Heading",
            "H2": "Heading",
            "H3": "Heading",
            "H4": "Heading",
            "H5": "Heading",
            "H6": "Heading",
            "Q": "Quote",
            "INS": "Mod",
            "DEL": "Mod",
            "A": "Anchor",
            "IMG": "Image",
            "CAPTION": "TableCaption",
            "COL": "TableCol",
            "COLGROUP": "TableCol",
            "THEAD": "TableSection",
            "TFOOT": "TableSection",
            "TBODY": "TableSection",
            "TR": "TableRow",
            "TH": "TableCell",
            "TD": "TableCell",
            "FRAMESET": "FrameSet",
            "IFRAME": "IFrame"
        };
        if (trans[tagName]) klass = 'HTML' + trans[tagName] + 'Element';
        if (window[klass]) return window[klass];
        klass = 'HTML' + tagName + 'Element';
        if (window[klass]) return window[klass];
        klass = 'HTML' + tagName.capitalize() + 'Element';
        if (window[klass]) return window[klass];
        var element = document.createElement(tagName),
            proto = element['__proto__'] || element.constructor.prototype;
        element = null;
        return proto;
    }
    var elementPrototype = window.HTMLElement ? HTMLElement.prototype : Element.prototype;
    if (F.ElementExtensions) {
        copy(Element.Methods, elementPrototype);
        copy(Element.Methods.Simulated, elementPrototype, true);
    }
    if (F.SpecificElementExtensions) {
        for (var tag in Element.Methods.ByTag) {
            var klass = findDOMClass(tag);
            if (Object.isUndefined(klass)) continue;
            copy(T[tag], klass.prototype);
        }
    }
    Object.extend(Element, Element.Methods);
    delete Element.ByTag;
    if (Element.extend.refresh) Element.extend.refresh();
    Element.cache = {};
};
document.viewport = {
    getDimensions: function() {
        return {
            width: this.getWidth(),
            height: this.getHeight()
        };
    },
    getScrollOffsets: function() {
        return Element._returnOffset(window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft, window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
    }
};
(function(viewport) {
    var B = Prototype.Browser,
        doc = document,
        element, property = {};

    function getRootElement() {
        if (B.WebKit && !doc.evaluate)
            return document;
        if (B.Opera && window.parseFloat(window.opera.version()) < 9.5)
            return document.body;
        return document.documentElement;
    }

    function define(D) {
        if (!element) element = getRootElement();
        property[D] = 'client' + D;
        viewport['get' + D] = function() {
            return element[property[D]]
        };
        return viewport['get' + D]();
    }
    viewport.getWidth = define.curry('Width');
    viewport.getHeight = define.curry('Height');
})(document.viewport);
Element.Storage = {
    UID: 1
};
Element.addMethods({
    getStorage: function(element) {
        if (!(element = $p(element))) return;
        var uid;
        if (element === window) {
            uid = 0;
        } else {
            if (typeof element._prototypeUID === "undefined")
                element._prototypeUID = Element.Storage.UID++;
            uid = element._prototypeUID;
        }
        if (!Element.Storage[uid])
            Element.Storage[uid] = $H();
        return Element.Storage[uid];
    },
    store: function(element, key, value) {
        if (!(element = $p(element))) return;
        if (arguments.length === 2) {
            Element.getStorage(element).update(key);
        } else {
            Element.getStorage(element).set(key, value);
        }
        return element;
    },
    retrieve: function(element, key, defaultValue) {
        if (!(element = $p(element))) return;
        var hash = Element.getStorage(element),
            value = hash.get(key);
        if (Object.isUndefined(value)) {
            hash.set(key, defaultValue);
            value = defaultValue;
        }
        return value;
    },
    clone: function(element, deep) {
        if (!(element = $p(element))) return;
        var clone = element.cloneNode(deep);
        clone._prototypeUID = void 0;
        if (deep) {
            var descendants = Element.select(clone, '*'),
                i = descendants.length;
            while (i--) {
                descendants[i]._prototypeUID = void 0;
            }
        }
        return Element.extend(clone);
    },
    purge: function(element) {
        if (!(element = $p(element))) return;
        var purgeElement = Element._purgeElement;
        purgeElement(element);
        var descendants = element.getElementsByTagName('*'),
            i = descendants.length;
        while (i--) purgeElement(descendants[i]);
        return null;
    }
});
(function() {
    function toDecimal(pctString) {
        var match = pctString.match(/^(\d+)%?$/i);
        if (!match) return null;
        return (Number(match[1]) / 100);
    }

    function getPixelValue(value, property, context) {
        var element = null;
        if (Object.isElement(value)) {
            element = value;
            value = element.getStyle(property);
        }
        if (value === null) {
            return null;
        }
        if ((/^(?:-)?\d+(\.\d+)?(px)?$/i).test(value)) {
            return window.parseFloat(value);
        }
        var isPercentage = value.include('%'),
            isViewport = (context === document.viewport);
        if (/\d/.test(value) && element && element.runtimeStyle && !(isPercentage && isViewport)) {
            var style = element.style.left,
                rStyle = element.runtimeStyle.left;
            element.runtimeStyle.left = element.currentStyle.left;
            element.style.left = value || 0;
            value = element.style.pixelLeft;
            element.style.left = style;
            element.runtimeStyle.left = rStyle;
            return value;
        }
        if (element && isPercentage) {
            context = context || element.parentNode;
            var decimal = toDecimal(value);
            var whole = null;
            var position = element.getStyle('position');
            var isHorizontal = property.include('left') || property.include('right') || property.include('width');
            var isVertical = property.include('top') || property.include('bottom') || property.include('height');
            if (context === document.viewport) {
                if (isHorizontal) {
                    whole = document.viewport.getWidth();
                } else if (isVertical) {
                    whole = document.viewport.getHeight();
                }
            } else {
                if (isHorizontal) {
                    whole = $p(context).measure('width');
                } else if (isVertical) {
                    whole = $p(context).measure('height');
                }
            }
            return (whole === null) ? 0 : whole * decimal;
        }
        return 0;
    }

    function toCSSPixels(number) {
        if (Object.isString(number) && number.endsWith('px')) {
            return number;
        }
        return number + 'px';
    }

    function isDisplayed(element) {
        var originalElement = element;
        while (element && element.parentNode) {
            var display = element.getStyle('display');
            if (display === 'none') {
                return false;
            }
            element = $p(element.parentNode);
        }
        return true;
    }
    var hasLayout = Prototype.K;
    if ('currentStyle' in document.documentElement) {
        hasLayout = function(element) {
            if (!element.currentStyle.hasLayout) {
                element.style.zoom = 1;
            }
            return element;
        };
    }

    function cssNameFor(key) {
        if (key.include('border')) key = key + '-width';
        return key.camelize();
    }
    Element.Layout = Class.create(Hash, {
        initialize: function($super, element, preCompute) {
            $super();
            this.element = $p(element);
            Element.Layout.PROPERTIES.each(function(property) {
                this._set(property, null);
            }, this);
            if (preCompute) {
                this._preComputing = true;
                this._begin();
                Element.Layout.PROPERTIES.each(this._compute, this);
                this._end();
                this._preComputing = false;
            }
        },
        _set: function(property, value) {
            return Hash.prototype.set.call(this, property, value);
        },
        set: function(property, value) {
            throw "Properties of Element.Layout are read-only.";
        },
        get: function($super, property) {
            var value = $super(property);
            return value === null ? this._compute(property) : value;
        },
        _begin: function() {
            if (this._prepared) return;
            var element = this.element;
            if (isDisplayed(element)) {
                this._prepared = true;
                return;
            }
            var originalStyles = {
                position: element.style.position || '',
                width: element.style.width || '',
                visibility: element.style.visibility || '',
                display: element.style.display || ''
            };
            element.store('prototype_original_styles', originalStyles);
            var position = element.getStyle('position'),
                width = element.getStyle('width');
            if (width === "0px" || width === null) {
                element.style.display = 'block';
                width = element.getStyle('width');
            }
            var context = (position === 'fixed') ? document.viewport : element.parentNode;
            element.setStyle({
                position: 'absolute',
                visibility: 'hidden',
                display: 'block'
            });
            var positionedWidth = element.getStyle('width');
            var newWidth;
            if (width && (positionedWidth === width)) {
                newWidth = getPixelValue(element, 'width', context);
            } else if (position === 'absolute' || position === 'fixed') {
                newWidth = getPixelValue(element, 'width', context);
            } else {
                var parent = element.parentNode,
                    pLayout = $p(parent).getLayout();
                newWidth = pLayout.get('width') -
                    this.get('margin-left') -
                    this.get('border-left') -
                    this.get('padding-left') -
                    this.get('padding-right') -
                    this.get('border-right') -
                    this.get('margin-right');
            }
            element.setStyle({
                width: newWidth + 'px'
            });
            this._prepared = true;
        },
        _end: function() {
            var element = this.element;
            var originalStyles = element.retrieve('prototype_original_styles');
            element.store('prototype_original_styles', null);
            element.setStyle(originalStyles);
            this._prepared = false;
        },
        _compute: function(property) {
            var COMPUTATIONS = Element.Layout.COMPUTATIONS;
            if (!(property in COMPUTATIONS)) {
                throw "Property not found.";
            }
            return this._set(property, COMPUTATIONS[property].call(this, this.element));
        },
        toObject: function() {
            var args = $A(arguments);
            var keys = (args.length === 0) ? Element.Layout.PROPERTIES : args.join(' ').split(' ');
            var obj = {};
            keys.each(function(key) {
                if (!Element.Layout.PROPERTIES.include(key)) return;
                var value = this.get(key);
                if (value != null) obj[key] = value;
            }, this);
            return obj;
        },
        toHash: function() {
            var obj = this.toObject.apply(this, arguments);
            return new Hash(obj);
        },
        toCSS: function() {
            var args = $A(arguments);
            var keys = (args.length === 0) ? Element.Layout.PROPERTIES : args.join(' ').split(' ');
            var css = {};
            keys.each(function(key) {
                if (!Element.Layout.PROPERTIES.include(key)) return;
                if (Element.Layout.COMPOSITE_PROPERTIES.include(key)) return;
                var value = this.get(key);
                if (value != null) css[cssNameFor(key)] = value + 'px';
            }, this);
            return css;
        },
        inspect: function() {
            return "#<Element.Layout>";
        }
    });
    Object.extend(Element.Layout, {
        PROPERTIES: $w('height width top left right bottom border-left border-right border-top border-bottom padding-left padding-right padding-top padding-bottom margin-top margin-bottom margin-left margin-right padding-box-width padding-box-height border-box-width border-box-height margin-box-width margin-box-height'),
        COMPOSITE_PROPERTIES: $w('padding-box-width padding-box-height margin-box-width margin-box-height border-box-width border-box-height'),
        COMPUTATIONS: {
            'height': function(element) {
                if (!this._preComputing) this._begin();
                var bHeight = this.get('border-box-height');
                if (bHeight <= 0) {
                    if (!this._preComputing) this._end();
                    return 0;
                }
                var bTop = this.get('border-top'),
                    bBottom = this.get('border-bottom');
                var pTop = this.get('padding-top'),
                    pBottom = this.get('padding-bottom');
                if (!this._preComputing) this._end();
                return bHeight - bTop - bBottom - pTop - pBottom;
            },
            'width': function(element) {
                if (!this._preComputing) this._begin();
                var bWidth = this.get('border-box-width');
                if (bWidth <= 0) {
                    if (!this._preComputing) this._end();
                    return 0;
                }
                var bLeft = this.get('border-left'),
                    bRight = this.get('border-right');
                var pLeft = this.get('padding-left'),
                    pRight = this.get('padding-right');
                if (!this._preComputing) this._end();
                return bWidth - bLeft - bRight - pLeft - pRight;
            },
            'padding-box-height': function(element) {
                var height = this.get('height'),
                    pTop = this.get('padding-top'),
                    pBottom = this.get('padding-bottom');
                return height + pTop + pBottom;
            },
            'padding-box-width': function(element) {
                var width = this.get('width'),
                    pLeft = this.get('padding-left'),
                    pRight = this.get('padding-right');
                return width + pLeft + pRight;
            },
            'border-box-height': function(element) {
                if (!this._preComputing) this._begin();
                var height = element.offsetHeight;
                if (!this._preComputing) this._end();
                return height;
            },
            'border-box-width': function(element) {
                if (!this._preComputing) this._begin();
                var width = element.offsetWidth;
                if (!this._preComputing) this._end();
                return width;
            },
            'margin-box-height': function(element) {
                var bHeight = this.get('border-box-height'),
                    mTop = this.get('margin-top'),
                    mBottom = this.get('margin-bottom');
                if (bHeight <= 0) return 0;
                return bHeight + mTop + mBottom;
            },
            'margin-box-width': function(element) {
                var bWidth = this.get('border-box-width'),
                    mLeft = this.get('margin-left'),
                    mRight = this.get('margin-right');
                if (bWidth <= 0) return 0;
                return bWidth + mLeft + mRight;
            },
            'top': function(element) {
                var offset = element.positionedOffset();
                return offset.top;
            },
            'bottom': function(element) {
                var offset = element.positionedOffset(),
                    parent = element.getOffsetParent(),
                    pHeight = parent.measure('height');
                var mHeight = this.get('border-box-height');
                return pHeight - mHeight - offset.top;
            },
            'left': function(element) {
                var offset = element.positionedOffset();
                return offset.left;
            },
            'right': function(element) {
                var offset = element.positionedOffset(),
                    parent = element.getOffsetParent(),
                    pWidth = parent.measure('width');
                var mWidth = this.get('border-box-width');
                return pWidth - mWidth - offset.left;
            },
            'padding-top': function(element) {
                return getPixelValue(element, 'paddingTop');
            },
            'padding-bottom': function(element) {
                return getPixelValue(element, 'paddingBottom');
            },
            'padding-left': function(element) {
                return getPixelValue(element, 'paddingLeft');
            },
            'padding-right': function(element) {
                return getPixelValue(element, 'paddingRight');
            },
            'border-top': function(element) {
                return getPixelValue(element, 'borderTopWidth');
            },
            'border-bottom': function(element) {
                return getPixelValue(element, 'borderBottomWidth');
            },
            'border-left': function(element) {
                return getPixelValue(element, 'borderLeftWidth');
            },
            'border-right': function(element) {
                return getPixelValue(element, 'borderRightWidth');
            },
            'margin-top': function(element) {
                return getPixelValue(element, 'marginTop');
            },
            'margin-bottom': function(element) {
                return getPixelValue(element, 'marginBottom');
            },
            'margin-left': function(element) {
                return getPixelValue(element, 'marginLeft');
            },
            'margin-right': function(element) {
                return getPixelValue(element, 'marginRight');
            }
        }
    });
    if ('getBoundingClientRect' in document.documentElement) {
        Object.extend(Element.Layout.COMPUTATIONS, {
            'right': function(element) {
                var parent = hasLayout(element.getOffsetParent());
                var rect = element.getBoundingClientRect(),
                    pRect = parent.getBoundingClientRect();
                return (pRect.right - rect.right).round();
            },
            'bottom': function(element) {
                var parent = hasLayout(element.getOffsetParent());
                var rect = element.getBoundingClientRect(),
                    pRect = parent.getBoundingClientRect();
                return (pRect.bottom - rect.bottom).round();
            }
        });
    }
    Element.Offset = Class.create({
        initialize: function(left, top) {
            this.left = left.round();
            this.top = top.round();
            this[0] = this.left;
            this[1] = this.top;
        },
        relativeTo: function(offset) {
            return new Element.Offset(this.left - offset.left, this.top - offset.top);
        },
        inspect: function() {
            return "#<Element.Offset left: #{left} top: #{top}>".interpolate(this);
        },
        toString: function() {
            return "[#{left}, #{top}]".interpolate(this);
        },
        toArray: function() {
            return [this.left, this.top];
        }
    });

    function getLayout(element, preCompute) {
        return new Element.Layout(element, preCompute);
    }

    function measure(element, property) {
        return $p(element).getLayout().get(property);
    }

    function getDimensions(element) {
        element = $p(element);
        var display = Element.getStyle(element, 'display');
        if (display && display !== 'none') {
            return {
                width: element.offsetWidth,
                height: element.offsetHeight
            };
        }
        var style = element.style;
        var originalStyles = {
            visibility: style.visibility,
            position: style.position,
            display: style.display
        };
        var newStyles = {
            visibility: 'hidden',
            display: 'block'
        };
        if (originalStyles.position !== 'fixed')
            newStyles.position = 'absolute';
        Element.setStyle(element, newStyles);
        var dimensions = {
            width: element.offsetWidth,
            height: element.offsetHeight
        };
        Element.setStyle(element, originalStyles);
        return dimensions;
    }

    function getOffsetParent(element) {
        element = $p(element);
        if (isDocument(element) || isDetached(element) || isBody(element) || isHtml(element))
            return $p(document.body);
        var isInline = (Element.getStyle(element, 'display') === 'inline');
        if (!isInline && element.offsetParent) return $p(element.offsetParent);
        while ((element = element.parentNode) && element !== document.body) {
            if (Element.getStyle(element, 'position') !== 'static') {
                return isHtml(element) ? $p(document.body) : $p(element);
            }
        }
        return $p(document.body);
    }

    function cumulativeOffset(element) {
        element = $p(element);
        var valueT = 0,
            valueL = 0;
        if (element.parentNode) {
            do {
                valueT += element.offsetTop || 0;
                valueL += element.offsetLeft || 0;
                element = element.offsetParent;
            } while (element);
        }
        return new Element.Offset(valueL, valueT);
    }

    function positionedOffset(element) {
        element = $p(element);
        var layout = element.getLayout();
        var valueT = 0,
            valueL = 0;
        do {
            valueT += element.offsetTop || 0;
            valueL += element.offsetLeft || 0;
            element = element.offsetParent;
            if (element) {
                if (isBody(element)) break;
                var p = Element.getStyle(element, 'position');
                if (p !== 'static') break;
            }
        } while (element);
        valueL -= layout.get('margin-top');
        valueT -= layout.get('margin-left');
        return new Element.Offset(valueL, valueT);
    }

    function cumulativeScrollOffset(element) {
        var valueT = 0,
            valueL = 0;
        do {
            valueT += element.scrollTop || 0;
            valueL += element.scrollLeft || 0;
            element = element.parentNode;
        } while (element);
        return new Element.Offset(valueL, valueT);
    }

    function viewportOffset(forElement) {
        element = $p(element);
        var valueT = 0,
            valueL = 0,
            docBody = document.body;
        var element = forElement;
        do {
            valueT += element.offsetTop || 0;
            valueL += element.offsetLeft || 0;
            if (element.offsetParent == docBody && Element.getStyle(element, 'position') == 'absolute') break;
        } while (element = element.offsetParent);
        element = forElement;
        do {
            if (element != docBody) {
                valueT -= element.scrollTop || 0;
                valueL -= element.scrollLeft || 0;
            }
        } while (element = element.parentNode);
        return new Element.Offset(valueL, valueT);
    }

    function absolutize(element) {
        element = $p(element);
        if (Element.getStyle(element, 'position') === 'absolute') {
            return element;
        }
        var offsetParent = getOffsetParent(element);
        var eOffset = element.viewportOffset(),
            pOffset = offsetParent.viewportOffset();
        var offset = eOffset.relativeTo(pOffset);
        var layout = element.getLayout();
        element.store('prototype_absolutize_original_styles', {
            left: element.getStyle('left'),
            top: element.getStyle('top'),
            width: element.getStyle('width'),
            height: element.getStyle('height')
        });
        element.setStyle({
            position: 'absolute',
            top: offset.top + 'px',
            left: offset.left + 'px',
            width: layout.get('width') + 'px',
            height: layout.get('height') + 'px'
        });
        return element;
    }

    function relativize(element) {
        element = $p(element);
        if (Element.getStyle(element, 'position') === 'relative') {
            return element;
        }
        var originalStyles = element.retrieve('prototype_absolutize_original_styles');
        if (originalStyles) element.setStyle(originalStyles);
        return element;
    }
    if (Prototype.Browser.IE) {
        getOffsetParent = getOffsetParent.wrap(function(proceed, element) {
            element = $p(element);
            if (isDocument(element) || isDetached(element) || isBody(element) || isHtml(element))
                return $p(document.body);
            var position = element.getStyle('position');
            if (position !== 'static') return proceed(element);
            element.setStyle({
                position: 'relative'
            });
            var value = proceed(element);
            element.setStyle({
                position: position
            });
            return value;
        });
        positionedOffset = positionedOffset.wrap(function(proceed, element) {
            element = $p(element);
            if (!element.parentNode) return new Element.Offset(0, 0);
            var position = element.getStyle('position');
            if (position !== 'static') return proceed(element);
            var offsetParent = element.getOffsetParent();
            if (offsetParent && offsetParent.getStyle('position') === 'fixed')
                hasLayout(offsetParent);
            element.setStyle({
                position: 'relative'
            });
            var value = proceed(element);
            element.setStyle({
                position: position
            });
            return value;
        });
    } else if (Prototype.Browser.Webkit) {
        cumulativeOffset = function(element) {
            element = $p(element);
            var valueT = 0,
                valueL = 0;
            do {
                valueT += element.offsetTop || 0;
                valueL += element.offsetLeft || 0;
                if (element.offsetParent == document.body)
                    if (Element.getStyle(element, 'position') == 'absolute') break;
                element = element.offsetParent;
            } while (element);
            return new Element.Offset(valueL, valueT);
        };
    }
    Element.addMethods({
        getLayout: getLayout,
        measure: measure,
        getDimensions: getDimensions,
        getOffsetParent: getOffsetParent,
        cumulativeOffset: cumulativeOffset,
        positionedOffset: positionedOffset,
        cumulativeScrollOffset: cumulativeScrollOffset,
        viewportOffset: viewportOffset,
        absolutize: absolutize,
        relativize: relativize
    });

    function isBody(element) {
        return element.nodeName.toUpperCase() === 'BODY';
    }

    function isHtml(element) {
        return element.nodeName.toUpperCase() === 'HTML';
    }

    function isDocument(element) {
        return element.nodeType === Node.DOCUMENT_NODE;
    }

    function isDetached(element) {
        return element !== document.body && !Element.descendantOf(element, document.body);
    }
    if ('getBoundingClientRect' in document.documentElement) {
        Element.addMethods({
            viewportOffset: function(element) {
                element = $p(element);
                if (isDetached(element)) return new Element.Offset(0, 0);
                var rect = element.getBoundingClientRect(),
                    docEl = document.documentElement;
                return new Element.Offset(rect.left - docEl.clientLeft, rect.top - docEl.clientTop);
            }
        });
    }
})();
window.$$ = function() {
    var expression = $A(arguments).join(', ');
    return Prototype.Selector.select(expression, document);
};
Prototype.Selector = (function() {
    function select() {
        throw new Error('Method "Prototype.Selector.select" must be defined.');
    }

    function match() {
        throw new Error('Method "Prototype.Selector.match" must be defined.');
    }

    function find(elements, expression, index) {
        index = index || 0;
        var match = Prototype.Selector.match,
            length = elements.length,
            matchIndex = 0,
            i;
        for (i = 0; i < length; i++) {
            if (match(elements[i], expression) && index == matchIndex++) {
                return Element.extend(elements[i]);
            }
        }
    }

    function extendElements(elements) {
        for (var i = 0, length = elements.length; i < length; i++) {
            Element.extend(elements[i]);
        }
        return elements;
    }
    var K = Prototype.K;
    return {
        select: select,
        match: match,
        find: find,
        extendElements: (Element.extend === K) ? K : extendElements,
        extendElement: Element.extend
    };
})();
Prototype._original_property = window.Sizzle;
(function() {
    var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        done = 0,
        toString = Object.prototype.toString,
        hasDuplicate = false,
        baseHasDuplicate = true;
    [0, 0].sort(function() {
        baseHasDuplicate = false;
        return 0;
    });
    var Sizzle = function(selector, context, results, seed) {
        results = results || [];
        var origContext = context = context || document;
        if (context.nodeType !== 1 && context.nodeType !== 9) {
            return [];
        }
        if (!selector || typeof selector !== "string") {
            return results;
        }
        var parts = [],
            m, set, checkSet, check, mode, extra, prune = true,
            contextXML = isXML(context),
            soFar = selector;
        while ((chunker.exec(""), m = chunker.exec(soFar)) !== null) {
            soFar = m[3];
            parts.push(m[1]);
            if (m[2]) {
                extra = m[3];
                break;
            }
        }
        if (parts.length > 1 && origPOS.exec(selector)) {
            if (parts.length === 2 && Expr.relative[parts[0]]) {
                set = posProcess(parts[0] + parts[1], context);
            } else {
                set = Expr.relative[parts[0]] ? [context] : Sizzle(parts.shift(), context);
                while (parts.length) {
                    selector = parts.shift();
                    if (Expr.relative[selector])
                        selector += parts.shift();
                    set = posProcess(selector, set);
                }
            }
        } else {
            if (!seed && parts.length > 1 && context.nodeType === 9 && !contextXML && Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1])) {
                var ret = Sizzle.find(parts.shift(), context, contextXML);
                context = ret.expr ? Sizzle.filter(ret.expr, ret.set)[0] : ret.set[0];
            }
            if (context) {
                var ret = seed ? {
                    expr: parts.pop(),
                    set: makeArray(seed)
                } : Sizzle.find(parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML);
                set = ret.expr ? Sizzle.filter(ret.expr, ret.set) : ret.set;
                if (parts.length > 0) {
                    checkSet = makeArray(set);
                } else {
                    prune = false;
                }
                while (parts.length) {
                    var cur = parts.pop(),
                        pop = cur;
                    if (!Expr.relative[cur]) {
                        cur = "";
                    } else {
                        pop = parts.pop();
                    }
                    if (pop == null) {
                        pop = context;
                    }
                    Expr.relative[cur](checkSet, pop, contextXML);
                }
            } else {
                checkSet = parts = [];
            }
        }
        if (!checkSet) {
            checkSet = set;
        }
        if (!checkSet) {
            throw "Syntax error, unrecognized expression: " + (cur || selector);
        }
        if (toString.call(checkSet) === "[object Array]") {
            if (!prune) {
                results.push.apply(results, checkSet);
            } else if (context && context.nodeType === 1) {
                for (var i = 0; checkSet[i] != null; i++) {
                    if (checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && contains(context, checkSet[i]))) {
                        results.push(set[i]);
                    }
                }
            } else {
                for (var i = 0; checkSet[i] != null; i++) {
                    if (checkSet[i] && checkSet[i].nodeType === 1) {
                        results.push(set[i]);
                    }
                }
            }
        } else {
            makeArray(checkSet, results);
        }
        if (extra) {
            Sizzle(extra, origContext, results, seed);
            Sizzle.uniqueSort(results);
        }
        return results;
    };
    Sizzle.uniqueSort = function(results) {
        if (sortOrder) {
            hasDuplicate = baseHasDuplicate;
            results.sort(sortOrder);
            if (hasDuplicate) {
                for (var i = 1; i < results.length; i++) {
                    if (results[i] === results[i - 1]) {
                        results.splice(i--, 1);
                    }
                }
            }
        }
        return results;
    };
    Sizzle.matches = function(expr, set) {
        return Sizzle(expr, null, null, set);
    };
    Sizzle.find = function(expr, context, isXML) {
        var set, match;
        if (!expr) {
            return [];
        }
        for (var i = 0, l = Expr.order.length; i < l; i++) {
            var type = Expr.order[i],
                match;
            if ((match = Expr.leftMatch[type].exec(expr))) {
                var left = match[1];
                match.splice(1, 1);
                if (left.substr(left.length - 1) !== "\\") {
                    match[1] = (match[1] || "").replace(/\\/g, "");
                    set = Expr.find[type](match, context, isXML);
                    if (set != null) {
                        expr = expr.replace(Expr.match[type], "");
                        break;
                    }
                }
            }
        }
        if (!set) {
            set = context.getElementsByTagName("*");
        }
        return {
            set: set,
            expr: expr
        };
    };
    Sizzle.filter = function(expr, set, inplace, not) {
        var old = expr,
            result = [],
            curLoop = set,
            match, anyFound, isXMLFilter = set && set[0] && isXML(set[0]);
        while (expr && set.length) {
            for (var type in Expr.filter) {
                if ((match = Expr.match[type].exec(expr)) != null) {
                    var filter = Expr.filter[type],
                        found, item;
                    anyFound = false;
                    if (curLoop == result) {
                        result = [];
                    }
                    if (Expr.preFilter[type]) {
                        match = Expr.preFilter[type](match, curLoop, inplace, result, not, isXMLFilter);
                        if (!match) {
                            anyFound = found = true;
                        } else if (match === true) {
                            continue;
                        }
                    }
                    if (match) {
                        for (var i = 0;
                            (item = curLoop[i]) != null; i++) {
                            if (item) {
                                found = filter(item, match, i, curLoop);
                                var pass = not ^ !!found;
                                if (inplace && found != null) {
                                    if (pass) {
                                        anyFound = true;
                                    } else {
                                        curLoop[i] = false;
                                    }
                                } else if (pass) {
                                    result.push(item);
                                    anyFound = true;
                                }
                            }
                        }
                    }
                    if (found !== undefined) {
                        if (!inplace) {
                            curLoop = result;
                        }
                        expr = expr.replace(Expr.match[type], "");
                        if (!anyFound) {
                            return [];
                        }
                        break;
                    }
                }
            }
            if (expr == old) {
                if (anyFound == null) {
                    throw "Syntax error, unrecognized expression: " + expr;
                } else {
                    break;
                }
            }
            old = expr;
        }
        return curLoop;
    };
    var Expr = Sizzle.selectors = {
        order: ["ID", "NAME", "TAG"],
        match: {
            ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
            CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
            TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
            CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
            PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
        },
        leftMatch: {},
        attrMap: {
            "class": "className",
            "for": "htmlFor"
        },
        attrHandle: {
            href: function(elem) {
                return elem.getAttribute("href");
            }
        },
        relative: {
            "+": function(checkSet, part, isXML) {
                var isPartStr = typeof part === "string",
                    isTag = isPartStr && !/\W/.test(part),
                    isPartStrNotTag = isPartStr && !isTag;
                if (isTag && !isXML) {
                    part = part.toUpperCase();
                }
                for (var i = 0, l = checkSet.length, elem; i < l; i++) {
                    if ((elem = checkSet[i])) {
                        while ((elem = elem.previousSibling) && elem.nodeType !== 1) {}
                        checkSet[i] = isPartStrNotTag || elem && elem.nodeName === part ? elem || false : elem === part;
                    }
                }
                if (isPartStrNotTag) {
                    Sizzle.filter(part, checkSet, true);
                }
            },
            ">": function(checkSet, part, isXML) {
                var isPartStr = typeof part === "string";
                if (isPartStr && !/\W/.test(part)) {
                    part = isXML ? part : part.toUpperCase();
                    for (var i = 0, l = checkSet.length; i < l; i++) {
                        var elem = checkSet[i];
                        if (elem) {
                            var parent = elem.parentNode;
                            checkSet[i] = parent.nodeName === part ? parent : false;
                        }
                    }
                } else {
                    for (var i = 0, l = checkSet.length; i < l; i++) {
                        var elem = checkSet[i];
                        if (elem) {
                            checkSet[i] = isPartStr ? elem.parentNode : elem.parentNode === part;
                        }
                    }
                    if (isPartStr) {
                        Sizzle.filter(part, checkSet, true);
                    }
                }
            },
            "": function(checkSet, part, isXML) {
                var doneName = done++,
                    checkFn = dirCheck;
                if (!/\W/.test(part)) {
                    var nodeCheck = part = isXML ? part : part.toUpperCase();
                    checkFn = dirNodeCheck;
                }
                checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML);
            },
            "~": function(checkSet, part, isXML) {
                var doneName = done++,
                    checkFn = dirCheck;
                if (typeof part === "string" && !/\W/.test(part)) {
                    var nodeCheck = part = isXML ? part : part.toUpperCase();
                    checkFn = dirNodeCheck;
                }
                checkFn("previousSibling", part, doneName, checkSet, nodeCheck, isXML);
            }
        },
        find: {
            ID: function(match, context, isXML) {
                if (typeof context.getElementById !== "undefined" && !isXML) {
                    var m = context.getElementById(match[1]);
                    return m ? [m] : [];
                }
            },
            NAME: function(match, context, isXML) {
                if (typeof context.getElementsByName !== "undefined") {
                    var ret = [],
                        results = context.getElementsByName(match[1]);
                    for (var i = 0, l = results.length; i < l; i++) {
                        if (results[i].getAttribute("name") === match[1]) {
                            ret.push(results[i]);
                        }
                    }
                    return ret.length === 0 ? null : ret;
                }
            },
            TAG: function(match, context) {
                return context.getElementsByTagName(match[1]);
            }
        },
        preFilter: {
            CLASS: function(match, curLoop, inplace, result, not, isXML) {
                match = " " + match[1].replace(/\\/g, "") + " ";
                if (isXML) {
                    return match;
                }
                for (var i = 0, elem;
                    (elem = curLoop[i]) != null; i++) {
                    if (elem) {
                        if (not ^ (elem.className && (" " + elem.className + " ").indexOf(match) >= 0)) {
                            if (!inplace)
                                result.push(elem);
                        } else if (inplace) {
                            curLoop[i] = false;
                        }
                    }
                }
                return false;
            },
            ID: function(match) {
                return match[1].replace(/\\/g, "");
            },
            TAG: function(match, curLoop) {
                for (var i = 0; curLoop[i] === false; i++) {}
                return curLoop[i] && isXML(curLoop[i]) ? match[1] : match[1].toUpperCase();
            },
            CHILD: function(match) {
                if (match[1] == "nth") {
                    var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(match[2] == "even" && "2n" || match[2] == "odd" && "2n+1" || !/\D/.test(match[2]) && "0n+" + match[2] || match[2]);
                    match[2] = (test[1] + (test[2] || 1)) - 0;
                    match[3] = test[3] - 0;
                }
                match[0] = done++;
                return match;
            },
            ATTR: function(match, curLoop, inplace, result, not, isXML) {
                var name = match[1].replace(/\\/g, "");
                if (!isXML && Expr.attrMap[name]) {
                    match[1] = Expr.attrMap[name];
                }
                if (match[2] === "~=") {
                    match[4] = " " + match[4] + " ";
                }
                return match;
            },
            PSEUDO: function(match, curLoop, inplace, result, not) {
                if (match[1] === "not") {
                    if ((chunker.exec(match[3]) || "").length > 1 || /^\w/.test(match[3])) {
                        match[3] = Sizzle(match[3], null, null, curLoop);
                    } else {
                        var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);
                        if (!inplace) {
                            result.push.apply(result, ret);
                        }
                        return false;
                    }
                } else if (Expr.match.POS.test(match[0]) || Expr.match.CHILD.test(match[0])) {
                    return true;
                }
                return match;
            },
            POS: function(match) {
                match.unshift(true);
                return match;
            }
        },
        filters: {
            enabled: function(elem) {
                return elem.disabled === false && elem.type !== "hidden";
            },
            disabled: function(elem) {
                return elem.disabled === true;
            },
            checked: function(elem) {
                return elem.checked === true;
            },
            selected: function(elem) {
                elem.parentNode.selectedIndex;
                return elem.selected === true;
            },
            parent: function(elem) {
                return !!elem.firstChild;
            },
            empty: function(elem) {
                return !elem.firstChild;
            },
            has: function(elem, i, match) {
                return !!Sizzle(match[3], elem).length;
            },
            header: function(elem) {
                return /h\d/i.test(elem.nodeName);
            },
            text: function(elem) {
                return "text" === elem.type;
            },
            radio: function(elem) {
                return "radio" === elem.type;
            },
            checkbox: function(elem) {
                return "checkbox" === elem.type;
            },
            file: function(elem) {
                return "file" === elem.type;
            },
            password: function(elem) {
                return "password" === elem.type;
            },
            submit: function(elem) {
                return "submit" === elem.type;
            },
            image: function(elem) {
                return "image" === elem.type;
            },
            reset: function(elem) {
                return "reset" === elem.type;
            },
            button: function(elem) {
                return "button" === elem.type || elem.nodeName.toUpperCase() === "BUTTON";
            },
            input: function(elem) {
                return /input|select|textarea|button/i.test(elem.nodeName);
            }
        },
        setFilters: {
            first: function(elem, i) {
                return i === 0;
            },
            last: function(elem, i, match, array) {
                return i === array.length - 1;
            },
            even: function(elem, i) {
                return i % 2 === 0;
            },
            odd: function(elem, i) {
                return i % 2 === 1;
            },
            lt: function(elem, i, match) {
                return i < match[3] - 0;
            },
            gt: function(elem, i, match) {
                return i > match[3] - 0;
            },
            nth: function(elem, i, match) {
                return match[3] - 0 == i;
            },
            eq: function(elem, i, match) {
                return match[3] - 0 == i;
            }
        },
        filter: {
            PSEUDO: function(elem, match, i, array) {
                var name = match[1],
                    filter = Expr.filters[name];
                if (filter) {
                    return filter(elem, i, match, array);
                } else if (name === "contains") {
                    return (elem.textContent || elem.innerText || "").indexOf(match[3]) >= 0;
                } else if (name === "not") {
                    var not = match[3];
                    for (var i = 0, l = not.length; i < l; i++) {
                        if (not[i] === elem) {
                            return false;
                        }
                    }
                    return true;
                }
            },
            CHILD: function(elem, match) {
                var type = match[1],
                    node = elem;
                switch (type) {
                    case 'only':
                    case 'first':
                        while ((node = node.previousSibling)) {
                            if (node.nodeType === 1) return false;
                        }
                        if (type == 'first') return true;
                        node = elem;
                    case 'last':
                        while ((node = node.nextSibling)) {
                            if (node.nodeType === 1) return false;
                        }
                        return true;
                    case 'nth':
                        var first = match[2],
                            last = match[3];
                        if (first == 1 && last == 0) {
                            return true;
                        }
                        var doneName = match[0],
                            parent = elem.parentNode;
                        if (parent && (parent.sizcache !== doneName || !elem.nodeIndex)) {
                            var count = 0;
                            for (node = parent.firstChild; node; node = node.nextSibling) {
                                if (node.nodeType === 1) {
                                    node.nodeIndex = ++count;
                                }
                            }
                            parent.sizcache = doneName;
                        }
                        var diff = elem.nodeIndex - last;
                        if (first == 0) {
                            return diff == 0;
                        } else {
                            return (diff % first == 0 && diff / first >= 0);
                        }
                }
            },
            ID: function(elem, match) {
                return elem.nodeType === 1 && elem.getAttribute("id") === match;
            },
            TAG: function(elem, match) {
                return (match === "*" && elem.nodeType === 1) || elem.nodeName === match;
            },
            CLASS: function(elem, match) {
                return (" " + (elem.className || elem.getAttribute("class")) + " ").indexOf(match) > -1;
            },
            ATTR: function(elem, match) {
                var name = match[1],
                    result = Expr.attrHandle[name] ? Expr.attrHandle[name](elem) : elem[name] != null ? elem[name] : elem.getAttribute(name),
                    value = result + "",
                    type = match[2],
                    check = match[4];
                return result == null ? type === "!=" : type === "=" ? value === check : type === "*=" ? value.indexOf(check) >= 0 : type === "~=" ? (" " + value + " ").indexOf(check) >= 0 : !check ? value && result !== false : type === "!=" ? value != check : type === "^=" ? value.indexOf(check) === 0 : type === "$=" ? value.substr(value.length - check.length) === check : type === "|=" ? value === check || value.substr(0, check.length + 1) === check + "-" : false;
            },
            POS: function(elem, match, i, array) {
                var name = match[2],
                    filter = Expr.setFilters[name];
                if (filter) {
                    return filter(elem, i, match, array);
                }
            }
        }
    };
    var origPOS = Expr.match.POS;
    for (var type in Expr.match) {
        Expr.match[type] = new RegExp(Expr.match[type].source + /(?![^\[]*\])(?![^\(]*\))/.source);
        Expr.leftMatch[type] = new RegExp(/(^(?:.|\r|\n)*?)/.source + Expr.match[type].source);
    }
    var makeArray = function(array, results) {
        array = Array.prototype.slice.call(array, 0);
        if (results) {
            results.push.apply(results, array);
            return results;
        }
        return array;
    };
    try {
        Array.prototype.slice.call(document.documentElement.childNodes, 0);
    } catch (e) {
        makeArray = function(array, results) {
            var ret = results || [];
            if (toString.call(array) === "[object Array]") {
                Array.prototype.push.apply(ret, array);
            } else {
                if (typeof array.length === "number") {
                    for (var i = 0, l = array.length; i < l; i++) {
                        ret.push(array[i]);
                    }
                } else {
                    for (var i = 0; array[i]; i++) {
                        ret.push(array[i]);
                    }
                }
            }
            return ret;
        };
    }
    var sortOrder;
    if (document.documentElement.compareDocumentPosition) {
        sortOrder = function(a, b) {
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
                if (a == b) {
                    hasDuplicate = true;
                }
                return 0;
            }
            var ret = a.compareDocumentPosition(b) & 4 ? -1 : a === b ? 0 : 1;
            if (ret === 0) {
                hasDuplicate = true;
            }
            return ret;
        };
    } else if ("sourceIndex" in document.documentElement) {
        sortOrder = function(a, b) {
            if (!a.sourceIndex || !b.sourceIndex) {
                if (a == b) {
                    hasDuplicate = true;
                }
                return 0;
            }
            var ret = a.sourceIndex - b.sourceIndex;
            if (ret === 0) {
                hasDuplicate = true;
            }
            return ret;
        };
    } else if (document.createRange) {
        sortOrder = function(a, b) {
            if (!a.ownerDocument || !b.ownerDocument) {
                if (a == b) {
                    hasDuplicate = true;
                }
                return 0;
            }
            var aRange = a.ownerDocument.createRange(),
                bRange = b.ownerDocument.createRange();
            aRange.setStart(a, 0);
            aRange.setEnd(a, 0);
            bRange.setStart(b, 0);
            bRange.setEnd(b, 0);
            var ret = aRange.compareBoundaryPoints(Range.START_TO_END, bRange);
            if (ret === 0) {
                hasDuplicate = true;
            }
            return ret;
        };
    }
    (function() {
        var form = document.createElement("div"),
            id = "script" + (new Date).getTime();
        form.innerHTML = "<a name='" + id + "'/>";
        var root = document.documentElement;
        root.insertBefore(form, root.firstChild);
        if (!!document.getElementById(id)) {
            Expr.find.ID = function(match, context, isXML) {
                if (typeof context.getElementById !== "undefined" && !isXML) {
                    var m = context.getElementById(match[1]);
                    return m ? m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ? [m] : undefined : [];
                }
            };
            Expr.filter.ID = function(elem, match) {
                var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                return elem.nodeType === 1 && node && node.nodeValue === match;
            };
        }
        root.removeChild(form);
        root = form = null;
    })();
    (function() {
        var div = document.createElement("div");
        div.appendChild(document.createComment(""));
        if (div.getElementsByTagName("*").length > 0) {
            Expr.find.TAG = function(match, context) {
                var results = context.getElementsByTagName(match[1]);
                if (match[1] === "*") {
                    var tmp = [];
                    for (var i = 0; results[i]; i++) {
                        if (results[i].nodeType === 1) {
                            tmp.push(results[i]);
                        }
                    }
                    results = tmp;
                }
                return results;
            };
        }
        div.innerHTML = "<a href='#'></a>";
        if (div.firstChild && typeof div.firstChild.getAttribute !== "undefined" && div.firstChild.getAttribute("href") !== "#") {
            Expr.attrHandle.href = function(elem) {
                return elem.getAttribute("href", 2);
            };
        }
        div = null;
    })();
    if (document.querySelectorAll)(function() {
        var oldSizzle = Sizzle,
            div = document.createElement("div");
        div.innerHTML = "<p class='TEST'></p>";
        if (div.querySelectorAll && div.querySelectorAll(".TEST").length === 0) {
            return;
        }
        Sizzle = function(query, context, extra, seed) {
            context = context || document;
            if (!seed && context.nodeType === 9 && !isXML(context)) {
                try {
                    return makeArray(context.querySelectorAll(query), extra);
                } catch (e) {}
            }
            return oldSizzle(query, context, extra, seed);
        };
        for (var prop in oldSizzle) {
            Sizzle[prop] = oldSizzle[prop];
        }
        div = null;
    })();
    if (document.getElementsByClassName && document.documentElement.getElementsByClassName)(function() {
        var div = document.createElement("div");
        div.innerHTML = "<div class='test e'></div><div class='test'></div>";
        if (div.getElementsByClassName("e").length === 0)
            return;
        div.lastChild.className = "e";
        if (div.getElementsByClassName("e").length === 1)
            return;
        Expr.order.splice(1, 0, "CLASS");
        Expr.find.CLASS = function(match, context, isXML) {
            if (typeof context.getElementsByClassName !== "undefined" && !isXML) {
                return context.getElementsByClassName(match[1]);
            }
        };
        div = null;
    })();

    function dirNodeCheck(dir, cur, doneName, checkSet, nodeCheck, isXML) {
        var sibDir = dir == "previousSibling" && !isXML;
        for (var i = 0, l = checkSet.length; i < l; i++) {
            var elem = checkSet[i];
            if (elem) {
                if (sibDir && elem.nodeType === 1) {
                    elem.sizcache = doneName;
                    elem.sizset = i;
                }
                elem = elem[dir];
                var match = false;
                while (elem) {
                    if (elem.sizcache === doneName) {
                        match = checkSet[elem.sizset];
                        break;
                    }
                    if (elem.nodeType === 1 && !isXML) {
                        elem.sizcache = doneName;
                        elem.sizset = i;
                    }
                    if (elem.nodeName === cur) {
                        match = elem;
                        break;
                    }
                    elem = elem[dir];
                }
                checkSet[i] = match;
            }
        }
    }

    function dirCheck(dir, cur, doneName, checkSet, nodeCheck, isXML) {
        var sibDir = dir == "previousSibling" && !isXML;
        for (var i = 0, l = checkSet.length; i < l; i++) {
            var elem = checkSet[i];
            if (elem) {
                if (sibDir && elem.nodeType === 1) {
                    elem.sizcache = doneName;
                    elem.sizset = i;
                }
                elem = elem[dir];
                var match = false;
                while (elem) {
                    if (elem.sizcache === doneName) {
                        match = checkSet[elem.sizset];
                        break;
                    }
                    if (elem.nodeType === 1) {
                        if (!isXML) {
                            elem.sizcache = doneName;
                            elem.sizset = i;
                        }
                        if (typeof cur !== "string") {
                            if (elem === cur) {
                                match = true;
                                break;
                            }
                        } else if (Sizzle.filter(cur, [elem]).length > 0) {
                            match = elem;
                            break;
                        }
                    }
                    elem = elem[dir];
                }
                checkSet[i] = match;
            }
        }
    }
    var contains = document.compareDocumentPosition ? function(a, b) {
        return a.compareDocumentPosition(b) & 16;
    } : function(a, b) {
        return a !== b && (a.contains ? a.contains(b) : true);
    };
    var isXML = function(elem) {
        return elem.nodeType === 9 && elem.documentElement.nodeName !== "HTML" || !!elem.ownerDocument && elem.ownerDocument.documentElement.nodeName !== "HTML";
    };
    var posProcess = function(selector, context) {
        var tmpSet = [],
            later = "",
            match, root = context.nodeType ? [context] : context;
        while ((match = Expr.match.PSEUDO.exec(selector))) {
            later += match[0];
            selector = selector.replace(Expr.match.PSEUDO, "");
        }
        selector = Expr.relative[selector] ? selector + "*" : selector;
        for (var i = 0, l = root.length; i < l; i++) {
            Sizzle(selector, root[i], tmpSet);
        }
        return Sizzle.filter(later, tmpSet);
    };
    window.Sizzle = Sizzle;
})();;
(function(engine) {
    var extendElements = Prototype.Selector.extendElements;

    function select(selector, scope) {
        return extendElements(engine(selector, scope || document));
    }

    function match(element, selector) {
        return engine.matches(selector, [element]).length == 1;
    }
    Prototype.Selector.engine = engine;
    Prototype.Selector.select = select;
    Prototype.Selector.match = match;
})(Sizzle);
window.Sizzle = Prototype._original_property;
delete Prototype._original_property;
var Form = {
    reset: function(form) {
        form = $p(form);
        form.reset();
        return form;
    },
    serializeElements: function(elements, options) {
        if (typeof options != 'object') options = {
            hash: !!options
        };
        else if (Object.isUndefined(options.hash)) options.hash = true;
        var key, value, submitted = false,
            submit = options.submit,
            accumulator, initial;
        if (options.hash) {
            initial = {};
            accumulator = function(result, key, value) {
                if (key in result) {
                    if (!Object.isArray(result[key])) result[key] = [result[key]];
                    result[key].push(value);
                } else result[key] = value;
                return result;
            };
        } else {
            initial = '';
            accumulator = function(result, key, value) {
                return result + (result ? '&' : '') + encodeURIComponent(key) + '=' + encodeURIComponent(value);
            }
        }
        return elements.inject(initial, function(result, element) {
            if (!element.disabled && element.name) {
                key = element.name;
                value = $p(element).getValue();
                if (value != null && element.type != 'file' && (element.type != 'submit' || (!submitted && submit !== false && (!submit || key == submit) && (submitted = true)))) {
                    result = accumulator(result, key, value);
                }
            }
            return result;
        });
    }
};
Form.Methods = {
    serialize: function(form, options) {
        return Form.serializeElements(Form.getElements(form), options);
    },
    getElements: function(form) {
        var elements = $p(form).getElementsByTagName('*'),
            element, arr = [],
            serializers = Form.Element.Serializers;
        for (var i = 0; element = elements[i]; i++) {
            arr.push(element);
        }
        return arr.inject([], function(elements, child) {
            if (serializers[child.tagName.toLowerCase()])
                elements.push(Element.extend(child));
            return elements;
        })
    },
    getInputs: function(form, typeName, name) {
        form = $p(form);
        var inputs = form.getElementsByTagName('input');
        if (!typeName && !name) return $A(inputs).map(Element.extend);
        for (var i = 0, matchingInputs = [], length = inputs.length; i < length; i++) {
            var input = inputs[i];
            if ((typeName && input.type != typeName) || (name && input.name != name))
                continue;
            matchingInputs.push(Element.extend(input));
        }
        return matchingInputs;
    },
    disable: function(form) {
        form = $p(form);
        Form.getElements(form).invoke('disable');
        return form;
    },
    enable: function(form) {
        form = $p(form);
        Form.getElements(form).invoke('enable');
        return form;
    },
    findFirstElement: function(form) {
        var elements = $p(form).getElements().findAll(function(element) {
            return 'hidden' != element.type && !element.disabled;
        });
        var firstByIndex = elements.findAll(function(element) {
            return element.hasAttribute('tabIndex') && element.tabIndex >= 0;
        }).sortBy(function(element) {
            return element.tabIndex
        }).first();
        return firstByIndex ? firstByIndex : elements.find(function(element) {
            return /^(?:input|select|textarea)$/i.test(element.tagName);
        });
    },
    focusFirstElement: function(form) {
        form = $p(form);
        var element = form.findFirstElement();
        if (element) element.activate();
        return form;
    },
    request: function(form, options) {
        form = $p(form), options = Object.clone(options || {});
        var params = options.parameters,
            action = form.readAttribute('action') || '';
        if (action.blank()) action = window.location.href;
        options.parameters = form.serialize(true);
        if (params) {
            if (Object.isString(params)) params = params.toQueryParams();
            Object.extend(options.parameters, params);
        }
        if (form.hasAttribute('method') && !options.method)
            options.method = form.method;
        return new Ajax.Request(action, options);
    }
};
Form.Element = {
    focus: function(element) {
        $p(element).focus();
        return element;
    },
    select: function(element) {
        $p(element).select();
        return element;
    }
};
Form.Element.Methods = {
    serialize: function(element) {
        element = $p(element);
        if (!element.disabled && element.name) {
            var value = element.getValue();
            if (value != undefined) {
                var pair = {};
                pair[element.name] = value;
                return Object.toQueryString(pair);
            }
        }
        return '';
    },
    getValue: function(element) {
        element = $p(element);
        var method = element.tagName.toLowerCase();
        return Form.Element.Serializers[method](element);
    },
    setValue: function(element, value) {
        element = $p(element);
        var method = element.tagName.toLowerCase();
        Form.Element.Serializers[method](element, value);
        return element;
    },
    clear: function(element) {
        $p(element).value = '';
        return element;
    },
    present: function(element) {
        return $p(element).value != '';
    },
    activate: function(element) {
        element = $p(element);
        try {
            element.focus();
            if (element.select && (element.tagName.toLowerCase() != 'input' || !(/^(?:button|reset|submit)$/i.test(element.type))))
                element.select();
        } catch (e) {}
        return element;
    },
    disable: function(element) {
        element = $p(element);
        element.disabled = true;
        return element;
    },
    enable: function(element) {
        element = $p(element);
        element.disabled = false;
        return element;
    }
};
var Field = Form.Element;
var $F = Form.Element.Methods.getValue;
Form.Element.Serializers = (function() {
    function input(element, value) {
        switch (element.type.toLowerCase()) {
            case 'checkbox':
            case 'radio':
                return inputSelector(element, value);
            default:
                return valueSelector(element, value);
        }
    }

    function inputSelector(element, value) {
        if (Object.isUndefined(value))
            return element.checked ? element.value : null;
        else element.checked = !!value;
    }

    function valueSelector(element, value) {
        if (Object.isUndefined(value)) return element.value;
        else element.value = value;
    }

    function select(element, value) {
        if (Object.isUndefined(value))
            return (element.type === 'select-one' ? selectOne : selectMany)(element);
        var opt, currentValue, single = !Object.isArray(value);
        for (var i = 0, length = element.length; i < length; i++) {
            opt = element.options[i];
            currentValue = this.optionValue(opt);
            if (single) {
                if (currentValue == value) {
                    opt.selected = true;
                    return;
                }
            } else opt.selected = value.include(currentValue);
        }
    }

    function selectOne(element) {
        var index = element.selectedIndex;
        return index >= 0 ? optionValue(element.options[index]) : null;
    }

    function selectMany(element) {
        var values, length = element.length;
        if (!length) return null;
        for (var i = 0, values = []; i < length; i++) {
            var opt = element.options[i];
            if (opt.selected) values.push(optionValue(opt));
        }
        return values;
    }

    function optionValue(opt) {
        return Element.hasAttribute(opt, 'value') ? opt.value : opt.text;
    }
    return {
        input: input,
        inputSelector: inputSelector,
        textarea: valueSelector,
        select: select,
        selectOne: selectOne,
        selectMany: selectMany,
        optionValue: optionValue,
        button: valueSelector
    };
})();
Abstract.TimedObserver = Class.create(PeriodicalExecuter, {
    initialize: function($super, element, frequency, callback) {
        $super(callback, frequency);
        this.element = $p(element);
        this.lastValue = this.getValue();
    },
    execute: function() {
        var value = this.getValue();
        if (Object.isString(this.lastValue) && Object.isString(value) ? this.lastValue != value : String(this.lastValue) != String(value)) {
            this.callback(this.element, value);
            this.lastValue = value;
        }
    }
});
Form.Element.Observer = Class.create(Abstract.TimedObserver, {
    getValue: function() {
        return Form.Element.getValue(this.element);
    }
});
Form.Observer = Class.create(Abstract.TimedObserver, {
    getValue: function() {
        return Form.serialize(this.element);
    }
});
Abstract.EventObserver = Class.create({
    initialize: function(element, callback) {
        this.element = $p(element);
        this.callback = callback;
        this.lastValue = this.getValue();
        if (this.element.tagName.toLowerCase() == 'form')
            this.registerFormCallbacks();
        else
            this.registerCallback(this.element);
    },
    onElementEvent: function() {
        var value = this.getValue();
        if (this.lastValue != value) {
            this.callback(this.element, value);
            this.lastValue = value;
        }
    },
    registerFormCallbacks: function() {
        Form.getElements(this.element).each(this.registerCallback, this);
    },
    registerCallback: function(element) {
        if (element.type) {
            switch (element.type.toLowerCase()) {
                case 'checkbox':
                case 'radio':
                    Event.observe(element, 'click', this.onElementEvent.bind(this));
                    break;
                default:
                    Event.observe(element, 'change', this.onElementEvent.bind(this));
                    break;
            }
        }
    }
});
Form.Element.EventObserver = Class.create(Abstract.EventObserver, {
    getValue: function() {
        return Form.Element.getValue(this.element);
    }
});
Form.EventObserver = Class.create(Abstract.EventObserver, {
    getValue: function() {
        return Form.serialize(this.element);
    }
});
(function() {
    var Event = {
        KEY_BACKSPACE: 8,
        KEY_TAB: 9,
        KEY_RETURN: 13,
        KEY_ESC: 27,
        KEY_LEFT: 37,
        KEY_UP: 38,
        KEY_RIGHT: 39,
        KEY_DOWN: 40,
        KEY_DELETE: 46,
        KEY_HOME: 36,
        KEY_END: 35,
        KEY_PAGEUP: 33,
        KEY_PAGEDOWN: 34,
        KEY_INSERT: 45,
        cache: {}
    };
    var docEl = document.documentElement;
    var MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED = 'onmouseenter' in docEl && 'onmouseleave' in docEl;
    var isIELegacyEvent = function(event) {
        return false;
    };
    if (window.attachEvent) {
        if (window.addEventListener) {
            isIELegacyEvent = function(event) {
                return !(event instanceof window.Event);
            };
        } else {
            isIELegacyEvent = function(event) {
                return true;
            };
        }
    }
    var _isButton;

    function _isButtonForDOMEvents(event, code) {
        return event.which ? (event.which === code + 1) : (event.button === code);
    }
    var legacyButtonMap = {
        0: 1,
        1: 4,
        2: 2
    };

    function _isButtonForLegacyEvents(event, code) {
        return event.button === legacyButtonMap[code];
    }

    function _isButtonForWebKit(event, code) {
        switch (code) {
            case 0:
                return event.which == 1 && !event.metaKey;
            case 1:
                return event.which == 2 || (event.which == 1 && event.metaKey);
            case 2:
                return event.which == 3;
            default:
                return false;
        }
    }
    if (window.attachEvent) {
        if (!window.addEventListener) {
            _isButton = _isButtonForLegacyEvents;
        } else {
            _isButton = function(event, code) {
                return isIELegacyEvent(event) ? _isButtonForLegacyEvents(event, code) : _isButtonForDOMEvents(event, code);
            }
        }
    } else if (Prototype.Browser.WebKit) {
        _isButton = _isButtonForWebKit;
    } else {
        _isButton = _isButtonForDOMEvents;
    }

    function isLeftClick(event) {
        return _isButton(event, 0)
    }

    function isMiddleClick(event) {
        return _isButton(event, 1)
    }

    function isRightClick(event) {
        return _isButton(event, 2)
    }

    function element(event) {
        event = Event.extend(event);
        var node = event.target,
            type = event.type,
            currentTarget = event.currentTarget;
        if (currentTarget && currentTarget.tagName) {
            if (type === 'load' || type === 'error' || (type === 'click' && currentTarget.tagName.toLowerCase() === 'input' && currentTarget.type === 'radio'))
                node = currentTarget;
        }
        if (node.nodeType == Node.TEXT_NODE)
            node = node.parentNode;
        return Element.extend(node);
    }

    function findElement(event, expression) {
        var element = Event.element(event);
        if (!expression) return element;
        while (element) {
            if (Object.isElement(element) && Prototype.Selector.match(element, expression)) {
                return Element.extend(element);
            }
            element = element.parentNode;
        }
    }

    function pointer(event) {
        return {
            x: pointerX(event),
            y: pointerY(event)
        };
    }

    function pointerX(event) {
        var docElement = document.documentElement,
            body = document.body || {
                scrollLeft: 0
            };
        return event.pageX || (event.clientX +
            (docElement.scrollLeft || body.scrollLeft) -
            (docElement.clientLeft || 0));
    }

    function pointerY(event) {
        var docElement = document.documentElement,
            body = document.body || {
                scrollTop: 0
            };
        return event.pageY || (event.clientY +
            (docElement.scrollTop || body.scrollTop) -
            (docElement.clientTop || 0));
    }

    function stop(event) {
        Event.extend(event);
        event.preventDefault();
        event.stopPropagation();
        event.stopped = true;
    }
    Event.Methods = {
        isLeftClick: isLeftClick,
        isMiddleClick: isMiddleClick,
        isRightClick: isRightClick,
        element: element,
        findElement: findElement,
        pointer: pointer,
        pointerX: pointerX,
        pointerY: pointerY,
        stop: stop
    };
    var methods = Object.keys(Event.Methods).inject({}, function(m, name) {
        m[name] = Event.Methods[name].methodize();
        return m;
    });
    if (window.attachEvent) {
        function _relatedTarget(event) {
            var element;
            switch (event.type) {
                case 'mouseover':
                case 'mouseenter':
                    element = event.fromElement;
                    break;
                case 'mouseout':
                case 'mouseleave':
                    element = event.toElement;
                    break;
                default:
                    return null;
            }
            return Element.extend(element);
        }
        var additionalMethods = {
            stopPropagation: function() {
                this.cancelBubble = true
            },
            preventDefault: function() {
                this.returnValue = false
            },
            inspect: function() {
                return '[object Event]'
            }
        };
        Event.extend = function(event, element) {
            if (!event) return false;
            if (!isIELegacyEvent(event)) return event;
            if (event._extendedByPrototype) return event;
            event._extendedByPrototype = Prototype.emptyFunction;
            var pointer = Event.pointer(event);
            Object.extend(event, {
                target: event.srcElement || element,
                relatedTarget: _relatedTarget(event),
                pageX: pointer.x,
                pageY: pointer.y
            });
            Object.extend(event, methods);
            Object.extend(event, additionalMethods);
            return event;
        };
    } else {
        Event.extend = Prototype.K;
    }
    if (window.addEventListener) {
        Event.prototype = window.Event.prototype || document.createEvent('HTMLEvents').__proto__;
        Object.extend(Event.prototype, methods);
    }

    function _createResponder(element, eventName, handler) {
        var registry = Element.retrieve(element, 'prototype_event_registry');
        if (Object.isUndefined(registry)) {
            CACHE.push(element);
            registry = Element.retrieve(element, 'prototype_event_registry', $H());
        }
        var respondersForEvent = registry.get(eventName);
        if (Object.isUndefined(respondersForEvent)) {
            respondersForEvent = [];
            registry.set(eventName, respondersForEvent);
        }
        if (respondersForEvent.pluck('handler').include(handler)) return false;
        var responder;
        if (eventName.include(":")) {
            responder = function(event) {
                if (Object.isUndefined(event.eventName))
                    return false;
                if (event.eventName !== eventName)
                    return false;
                Event.extend(event, element);
                handler.call(element, event);
            };
        } else {
            if (!MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED && (eventName === "mouseenter" || eventName === "mouseleave")) {
                if (eventName === "mouseenter" || eventName === "mouseleave") {
                    responder = function(event) {
                        Event.extend(event, element);
                        var parent = event.relatedTarget;
                        while (parent && parent !== element) {
                            try {
                                parent = parent.parentNode;
                            } catch (e) {
                                parent = element;
                            }
                        }
                        if (parent === element) return;
                        handler.call(element, event);
                    };
                }
            } else {
                responder = function(event) {
                    Event.extend(event, element);
                    handler.call(element, event);
                };
            }
        }
        responder.handler = handler;
        respondersForEvent.push(responder);
        return responder;
    }

    function _destroyCache() {
        for (var i = 0, length = CACHE.length; i < length; i++) {
            Event.stopObserving(CACHE[i]);
            CACHE[i] = null;
        }
    }
    var CACHE = [];
    if (Prototype.Browser.IE)
        window.attachEvent('onunload', _destroyCache);
    if (Prototype.Browser.WebKit)
        window.addEventListener('unload', Prototype.emptyFunction, false);
    var _getDOMEventName = Prototype.K,
        translations = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
    if (!MOUSEENTER_MOUSELEAVE_EVENTS_SUPPORTED) {
        _getDOMEventName = function(eventName) {
            return (translations[eventName] || eventName);
        };
    }

    function observe(element, eventName, handler) {
        element = $p(element);
        var responder = _createResponder(element, eventName, handler);
        if (!responder) return element;
        if (eventName.include(':')) {
            if (element.addEventListener)
                element.addEventListener("dataavailable", responder, false);
            else {
                element.attachEvent("ondataavailable", responder);
                element.attachEvent("onlosecapture", responder);
            }
        } else {
            var actualEventName = _getDOMEventName(eventName);
            if (element.addEventListener)
                element.addEventListener(actualEventName, responder, false);
            else
                element.attachEvent("on" + actualEventName, responder);
        }
        return element;
    }

    function stopObserving(element, eventName, handler) {
        element = $p(element);
        var registry = Element.retrieve(element, 'prototype_event_registry');
        if (!registry) return element;
        if (!eventName) {
            registry.each(function(pair) {
                var eventName = pair.key;
                stopObserving(element, eventName);
            });
            return element;
        }
        var responders = registry.get(eventName);
        if (!responders) return element;
        if (!handler) {
            responders.each(function(r) {
                stopObserving(element, eventName, r.handler);
            });
            return element;
        }
        var i = responders.length,
            responder;
        while (i--) {
            if (responders[i].handler === handler) {
                responder = responders[i];
                break;
            }
        }
        if (!responder) return element;
        if (eventName.include(':')) {
            if (element.removeEventListener)
                element.removeEventListener("dataavailable", responder, false);
            else {
                element.detachEvent("ondataavailable", responder);
                element.detachEvent("onlosecapture", responder);
            }
        } else {
            var actualEventName = _getDOMEventName(eventName);
            if (element.removeEventListener)
                element.removeEventListener(actualEventName, responder, false);
            else
                element.detachEvent('on' + actualEventName, responder);
        }
        registry.set(eventName, responders.without(responder));
        return element;
    }

    function fire(element, eventName, memo, bubble) {
        element = $p(element);
        if (Object.isUndefined(bubble))
            bubble = true;
        if (element == document && document.createEvent && !element.dispatchEvent)
            element = document.documentElement;
        var event;
        if (document.createEvent) {
            event = document.createEvent('HTMLEvents');
            event.initEvent('dataavailable', bubble, true);
        } else {
            event = document.createEventObject();
            event.eventType = bubble ? 'ondataavailable' : 'onlosecapture';
        }
        event.eventName = eventName;
        event.memo = memo || {};
        if (document.createEvent)
            element.dispatchEvent(event);
        else
            element.fireEvent(event.eventType, event);
        return Event.extend(event);
    }
    Event.Handler = Class.create({
        initialize: function(element, eventName, selector, callback) {
            this.element = $p(element);
            this.eventName = eventName;
            this.selector = selector;
            this.callback = callback;
            this.handler = this.handleEvent.bind(this);
        },
        start: function() {
            Event.observe(this.element, this.eventName, this.handler);
            return this;
        },
        stop: function() {
            Event.stopObserving(this.element, this.eventName, this.handler);
            return this;
        },
        handleEvent: function(event) {
            var element = Event.findElement(event, this.selector);
            if (element) this.callback.call(this.element, event, element);
        }
    });

    function on(element, eventName, selector, callback) {
        element = $p(element);
        if (Object.isFunction(selector) && Object.isUndefined(callback)) {
            callback = selector, selector = null;
        }
        return new Event.Handler(element, eventName, selector, callback).start();
    }
    Object.extend(Event, Event.Methods);
    Object.extend(Event, {
        fire: fire,
        observe: observe,
        stopObserving: stopObserving,
        on: on
    });
    Element.addMethods({
        fire: fire,
        observe: observe,
        stopObserving: stopObserving,
        on: on
    });
    Object.extend(document, {
        fire: fire.methodize(),
        observe: observe.methodize(),
        stopObserving: stopObserving.methodize(),
        on: on.methodize(),
        loaded: false
    });
    if (window.Event) Object.extend(window.Event, Event);
    else window.Event = Event;
})();
(function() {
    var timer;

    function fireContentLoadedEvent() {
        if (document.loaded) return;
        if (timer) window.clearTimeout(timer);
        document.loaded = true;
        document.fire('dom:loaded');
    }

    function checkReadyState() {
        if (document.readyState === 'complete') {
            document.stopObserving('readystatechange', checkReadyState);
            fireContentLoadedEvent();
        }
    }

    function pollDoScroll() {
        try {
            document.documentElement.doScroll('left');
        } catch (e) {
            timer = pollDoScroll.defer();
            return;
        }
        fireContentLoadedEvent();
    }
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
    } else {
        document.observe('readystatechange', checkReadyState);
        if (window == top)
            timer = pollDoScroll.defer();
    }
    Event.observe(window, 'load', fireContentLoadedEvent);
})();
Element.addMethods();
Hash.toQueryString = Object.toQueryString;
var Toggle = {
    display: Element.toggle
};
Element.Methods.childOf = Element.Methods.descendantOf;
var Insertion = {
    Before: function(element, content) {
        return Element.insert(element, {
            before: content
        });
    },
    Top: function(element, content) {
        return Element.insert(element, {
            top: content
        });
    },
    Bottom: function(element, content) {
        return Element.insert(element, {
            bottom: content
        });
    },
    After: function(element, content) {
        return Element.insert(element, {
            after: content
        });
    }
};
var $continue = new Error('"throw $continue" is deprecated, use "return" instead');
var Position = {
    includeScrollOffsets: false,
    prepare: function() {
        this.deltaX = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
        this.deltaY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    },
    within: function(element, x, y) {
        if (this.includeScrollOffsets)
            return this.withinIncludingScrolloffsets(element, x, y);
        this.xcomp = x;
        this.ycomp = y;
        this.offset = Element.cumulativeOffset(element);
        return (y >= this.offset[1] && y < this.offset[1] + element.offsetHeight && x >= this.offset[0] && x < this.offset[0] + element.offsetWidth);
    },
    withinIncludingScrolloffsets: function(element, x, y) {
        var offsetcache = Element.cumulativeScrollOffset(element);
        this.xcomp = x + offsetcache[0] - this.deltaX;
        this.ycomp = y + offsetcache[1] - this.deltaY;
        this.offset = Element.cumulativeOffset(element);
        return (this.ycomp >= this.offset[1] && this.ycomp < this.offset[1] + element.offsetHeight && this.xcomp >= this.offset[0] && this.xcomp < this.offset[0] + element.offsetWidth);
    },
    overlap: function(mode, element) {
        if (!mode) return 0;
        if (mode == 'vertical')
            return ((this.offset[1] + element.offsetHeight) - this.ycomp) / element.offsetHeight;
        if (mode == 'horizontal')
            return ((this.offset[0] + element.offsetWidth) - this.xcomp) / element.offsetWidth;
    },
    cumulativeOffset: Element.Methods.cumulativeOffset,
    positionedOffset: Element.Methods.positionedOffset,
    absolutize: function(element) {
        Position.prepare();
        return Element.absolutize(element);
    },
    relativize: function(element) {
        Position.prepare();
        return Element.relativize(element);
    },
    realOffset: Element.Methods.cumulativeScrollOffset,
    offsetParent: Element.Methods.getOffsetParent,
    page: Element.Methods.viewportOffset,
    clone: function(source, target, options) {
        options = options || {};
        return Element.clonePosition(target, source, options);
    }
};
if (!document.getElementsByClassName) document.getElementsByClassName = function(instanceMethods) {
    function iter(name) {
        return name.blank() ? null : "[contains(concat(' ', @class, ' '), ' " + name + " ')]";
    }
    instanceMethods.getElementsByClassName = Prototype.BrowserFeatures.XPath ? function(element, className) {
        className = className.toString().strip();
        var cond = /\s/.test(className) ? $w(className).map(iter).join('') : iter(className);
        return cond ? document._getElementsByXPath('.//*' + cond, element) : [];
    } : function(element, className) {
        className = className.toString().strip();
        var elements = [],
            classNames = (/\s/.test(className) ? $w(className) : null);
        if (!classNames && !className) return elements;
        var nodes = $p(element).getElementsByTagName('*');
        className = ' ' + className + ' ';
        for (var i = 0, child, cn; child = nodes[i]; i++) {
            if (child.className && (cn = ' ' + child.className + ' ') && (cn.include(className) || (classNames && classNames.all(function(name) {
                    return !name.toString().blank() && cn.include(' ' + name + ' ');
                }))))
                elements.push(Element.extend(child));
        }
        return elements;
    };
    return function(className, parentElement) {
        return $p(parentElement || document.body).getElementsByClassName(className);
    };
}(Element.Methods);
Element.ClassNames = Class.create();
Element.ClassNames.prototype = {
    initialize: function(element) {
        this.element = $p(element);
    },
    _each: function(iterator) {
        this.element.className.split(/\s+/).select(function(name) {
            return name.length > 0;
        })._each(iterator);
    },
    set: function(className) {
        this.element.className = className;
    },
    add: function(classNameToAdd) {
        if (this.include(classNameToAdd)) return;
        this.set($A(this).concat(classNameToAdd).join(' '));
    },
    remove: function(classNameToRemove) {
        if (!this.include(classNameToRemove)) return;
        this.set($A(this).without(classNameToRemove).join(' '));
    },
    toString: function() {
        return $A(this).join(' ');
    }
};
Object.extend(Element.ClassNames.prototype, Enumerable);
(function() {
    window.Selector = Class.create({
        initialize: function(expression) {
            this.expression = expression.strip();
        },
        findElements: function(rootElement) {
            return Prototype.Selector.select(this.expression, rootElement);
        },
        match: function(element) {
            return Prototype.Selector.match(element, this.expression);
        },
        toString: function() {
            return this.expression;
        },
        inspect: function() {
            return "#<Selector: " + this.expression + ">";
        }
    });
    Object.extend(Selector, {
        matchElements: function(elements, expression) {
            var match = Prototype.Selector.match,
                results = [];
            for (var i = 0, length = elements.length; i < length; i++) {
                var element = elements[i];
                if (match(element, expression)) {
                    results.push(Element.extend(element));
                }
            }
            return results;
        },
        findElement: function(elements, expression, index) {
            index = index || 0;
            var matchIndex = 0,
                element;
            for (var i = 0, length = elements.length; i < length; i++) {
                element = elements[i];
                if (Prototype.Selector.match(element, expression) && index === matchIndex++) {
                    return Element.extend(element);
                }
            }
        },
        findChildElements: function(element, expressions) {
            var selector = expressions.toArray().join(', ');
            return Prototype.Selector.select(selector, element || document);
        }
    });
})();
String.prototype.parseColor = function() {
    var a = "#";
    if (this.slice(0, 4) == "rgb(") {
        var c = this.slice(4, this.length - 1).split(",");
        var b = 0;
        do {
            a += parseInt(c[b]).toColorPart()
        } while (++b < 3)
    } else {
        if (this.slice(0, 1) == "#") {
            if (this.length == 4) {
                for (var b = 1; b < 4; b++) {
                    a += (this.charAt(b) + this.charAt(b)).toLowerCase()
                }
            }
            if (this.length == 7) {
                a = this.toLowerCase()
            }
        }
    }
    return (a.length == 7 ? a : (arguments[0] || this))
};
Element.collectTextNodes = function(a) {
    return $A($p(a).childNodes).collect(function(b) {
        return (b.nodeType == 3 ? b.nodeValue : (b.hasChildNodes() ? Element.collectTextNodes(b) : ""))
    }).flatten().join("")
};
Element.collectTextNodesIgnoreClass = function(a, b) {
    return $A($p(a).childNodes).collect(function(c) {
        return (c.nodeType == 3 ? c.nodeValue : ((c.hasChildNodes() && !Element.hasClassName(c, b)) ? Element.collectTextNodesIgnoreClass(c, b) : ""))
    }).flatten().join("")
};
Element.setContentZoom = function(a, b) {
    a = $p(a);
    a.setStyle({
        fontSize: (b / 100) + "em"
    });
    if (Prototype.Browser.WebKit) {
        window.scrollBy(0, 0)
    }
    return a
};
Element.getInlineOpacity = function(a) {
    return $p(a).style.opacity || ""
};
Element.forceRerendering = function(a) {
    try {
        a = $p(a);
        var c = document.createTextNode(" ");
        a.appendChild(c);
        a.removeChild(c)
    } catch (b) {}
};
var Effect = {
    _elementDoesNotExistError: {
        name: "ElementDoesNotExistError",
        message: "The specified DOM element does not exist, but is required for this effect to operate"
    },
    Transitions: {
        linear: Prototype.K,
        sinoidal: function(a) {
            return (-Math.cos(a * Math.PI) / 2) + 0.5
        },
        reverse: function(a) {
            return 1 - a
        },
        flicker: function(a) {
            var a = ((-Math.cos(a * Math.PI) / 4) + 0.75) + Math.random() / 4;
            return a > 1 ? 1 : a
        },
        wobble: function(a) {
            return (-Math.cos(a * Math.PI * (9 * a)) / 2) + 0.5
        },
        pulse: function(b, a) {
            return (-Math.cos((b * ((a || 5) - 0.5) * 2) * Math.PI) / 2) + 0.5
        },
        spring: function(a) {
            return 1 - (Math.cos(a * 4.5 * Math.PI) * Math.exp(-a * 6))
        },
        none: function(a) {
            return 0
        },
        full: function(a) {
            return 1
        }
    },
    DefaultOptions: {
        duration: 1,
        fps: 100,
        sync: false,
        from: 0,
        to: 1,
        delay: 0,
        queue: "parallel"
    },
    tagifyText: function(a) {
        var b = "position:relative";
        if (Prototype.Browser.IE) {
            b += ";zoom:1"
        }
        a = $p(a);
        $A(a.childNodes).each(function(c) {
            if (c.nodeType == 3) {
                c.nodeValue.toArray().each(function(d) {
                    a.insertBefore(new Element("span", {
                        style: b
                    }).update(d == " " ? String.fromCharCode(160) : d), c)
                });
                Element.remove(c)
            }
        })
    },
    multiple: function(b, c) {
        var e;
        if (((typeof b == "object") || Object.isFunction(b)) && (b.length)) {
            e = b
        } else {
            e = $p(b).childNodes
        }
        var a = Object.extend({
            speed: 0.1,
            delay: 0
        }, arguments[2] || {});
        var d = a.delay;
        $A(e).each(function(g, f) {
            new c(g, Object.extend(a, {
                delay: f * a.speed + d
            }))
        })
    },
    PAIRS: {
        slide: ["SlideDown", "SlideUp"],
        blind: ["BlindDown", "BlindUp"],
        appear: ["Appear", "Fade"]
    },
    toggle: function(b, c, a) {
        b = $p(b);
        c = (c || "appear").toLowerCase();
        return Effect[Effect.PAIRS[c][b.visible() ? 1 : 0]](b, Object.extend({
            queue: {
                position: "end",
                scope: (b.id || "global"),
                limit: 1
            }
        }, a || {}))
    }
};
Effect.DefaultOptions.transition = Effect.Transitions.sinoidal;
Effect.ScopedQueue = Class.create(Enumerable, {
    initialize: function() {
        this.effects = [];
        this.interval = null
    },
    _each: function(a) {
        this.effects._each(a)
    },
    add: function(b) {
        var c = new Date().getTime();
        var a = Object.isString(b.options.queue) ? b.options.queue : b.options.queue.position;
        switch (a) {
            case "front":
                this.effects.findAll(function(d) {
                    return d.state == "idle"
                }).each(function(d) {
                    d.startOn += b.finishOn;
                    d.finishOn += b.finishOn
                });
                break;
            case "with-last":
                c = this.effects.pluck("startOn").max() || c;
                break;
            case "end":
                c = this.effects.pluck("finishOn").max() || c;
                break
        }
        b.startOn += c;
        b.finishOn += c;
        if (!b.options.queue.limit || (this.effects.length < b.options.queue.limit)) {
            this.effects.push(b)
        }
        if (!this.interval) {
            this.interval = setInterval(this.loop.bind(this), 15)
        }
    },
    remove: function(a) {
        this.effects = this.effects.reject(function(b) {
            return b == a
        });
        if (this.effects.length == 0) {
            clearInterval(this.interval);
            this.interval = null
        }
    },
    loop: function() {
        var c = new Date().getTime();
        for (var b = 0, a = this.effects.length; b < a; b++) {
            this.effects[b] && this.effects[b].loop(c)
        }
    }
});
Effect.Queues = {
    instances: $H(),
    get: function(a) {
        if (!Object.isString(a)) {
            return a
        }
        return this.instances.get(a) || this.instances.set(a, new Effect.ScopedQueue())
    }
};
Effect.Queue = Effect.Queues.get("global");
Effect.Base = Class.create({
    position: null,
    start: function(a) {
        if (a && a.transition === false) {
            a.transition = Effect.Transitions.linear
        }
        this.options = Object.extend(Object.extend({}, Effect.DefaultOptions), a || {});
        this.currentFrame = 0;
        this.state = "idle";
        this.startOn = this.options.delay * 1000;
        this.finishOn = this.startOn + (this.options.duration * 1000);
        this.fromToDelta = this.options.to - this.options.from;
        this.totalTime = this.finishOn - this.startOn;
        this.totalFrames = this.options.fps * this.options.duration;
        this.render = (function() {
            function b(d, c) {
                if (d.options[c + "Internal"]) {
                    d.options[c + "Internal"](d)
                }
                if (d.options[c]) {
                    d.options[c](d)
                }
            }
            return function(c) {
                if (this.state === "idle") {
                    this.state = "running";
                    b(this, "beforeSetup");
                    if (this.setup) {
                        this.setup()
                    }
                    b(this, "afterSetup")
                }
                if (this.state === "running") {
                    c = (this.options.transition(c) * this.fromToDelta) + this.options.from;
                    this.position = c;
                    b(this, "beforeUpdate");
                    if (this.update) {
                        this.update(c)
                    }
                    b(this, "afterUpdate")
                }
            }
        })();
        this.event("beforeStart");
        if (!this.options.sync) {
            Effect.Queues.get(Object.isString(this.options.queue) ? "global" : this.options.queue.scope).add(this)
        }
    },
    loop: function(c) {
        if (c >= this.startOn) {
            if (c >= this.finishOn) {
                this.render(1);
                this.cancel();
                this.event("beforeFinish");
                if (this.finish) {
                    this.finish()
                }
                this.event("afterFinish");
                return
            }
            var b = (c - this.startOn) / this.totalTime,
                a = (b * this.totalFrames).round();
            if (a > this.currentFrame) {
                this.render(b);
                this.currentFrame = a
            }
        }
    },
    cancel: function() {
        if (!this.options.sync) {
            Effect.Queues.get(Object.isString(this.options.queue) ? "global" : this.options.queue.scope).remove(this)
        }
        this.state = "finished"
    },
    event: function(a) {
        if (this.options[a + "Internal"]) {
            this.options[a + "Internal"](this)
        }
        if (this.options[a]) {
            this.options[a](this)
        }
    },
    inspect: function() {
        var a = $H();
        for (property in this) {
            if (!Object.isFunction(this[property])) {
                a.set(property, this[property])
            }
        }
        return "#<Effect:" + a.inspect() + ",options:" + $H(this.options).inspect() + ">"
    }
});
Effect.Parallel = Class.create(Effect.Base, {
    initialize: function(a) {
        this.effects = a || [];
        this.start(arguments[1])
    },
    update: function(a) {
        this.effects.invoke("render", a)
    },
    finish: function(a) {
        this.effects.each(function(b) {
            b.render(1);
            b.cancel();
            b.event("beforeFinish");
            if (b.finish) {
                b.finish(a)
            }
            b.event("afterFinish")
        })
    }
});
Effect.Tween = Class.create(Effect.Base, {
    initialize: function(c, f, e) {
        c = Object.isString(c) ? $p(c) : c;
        var b = $A(arguments),
            d = b.last(),
            a = b.length == 5 ? b[3] : null;
        this.method = Object.isFunction(d) ? d.bind(c) : Object.isFunction(c[d]) ? c[d].bind(c) : function(g) {
            c[d] = g
        };
        this.start(Object.extend({
            from: f,
            to: e
        }, a || {}))
    },
    update: function(a) {
        this.method(a)
    }
});
Effect.Event = Class.create(Effect.Base, {
    initialize: function() {
        this.start(Object.extend({
            duration: 0
        }, arguments[0] || {}))
    },
    update: Prototype.emptyFunction
});
Effect.Opacity = Class.create(Effect.Base, {
    initialize: function(b) {
        this.element = $p(b);
        if (!this.element) {
            throw (Effect._elementDoesNotExistError)
        }
        if (Prototype.Browser.IE && (!this.element.currentStyle.hasLayout)) {
            this.element.setStyle({
                zoom: 1
            })
        }
        var a = Object.extend({
            from: this.element.getOpacity() || 0,
            to: 1
        }, arguments[1] || {});
        this.start(a)
    },
    update: function(a) {
        this.element.setOpacity(a)
    }
});
Effect.Move = Class.create(Effect.Base, {
    initialize: function(b) {
        this.element = $p(b);
        if (!this.element) {
            throw (Effect._elementDoesNotExistError)
        }
        var a = Object.extend({
            x: 0,
            y: 0,
            mode: "relative"
        }, arguments[1] || {});
        this.start(a)
    },
    setup: function() {
        this.element.makePositioned();
        this.originalLeft = parseFloat(this.element.getStyle("left") || "0");
        this.originalTop = parseFloat(this.element.getStyle("top") || "0");
        if (this.options.mode == "absolute") {
            this.options.x = this.options.x - this.originalLeft;
            this.options.y = this.options.y - this.originalTop
        }
    },
    update: function(a) {
        this.element.setStyle({
            left: (this.options.x * a + this.originalLeft).round() + "px",
            top: (this.options.y * a + this.originalTop).round() + "px"
        })
    }
});
Effect.MoveBy = function(b, a, c) {
    return new Effect.Move(b, Object.extend({
        x: c,
        y: a
    }, arguments[3] || {}))
};
Effect.Scale = Class.create(Effect.Base, {
    initialize: function(b, c) {
        this.element = $p(b);
        if (!this.element) {
            throw (Effect._elementDoesNotExistError)
        }
        var a = Object.extend({
            scaleX: true,
            scaleY: true,
            scaleContent: true,
            scaleFromCenter: false,
            scaleMode: "box",
            scaleFrom: 100,
            scaleTo: c
        }, arguments[2] || {});
        this.start(a)
    },
    setup: function() {
        this.restoreAfterFinish = this.options.restoreAfterFinish || false;
        this.elementPositioning = this.element.getStyle("position");
        this.originalStyle = {};
        ["top", "left", "width", "height", "fontSize"].each(function(b) {
            this.originalStyle[b] = this.element.style[b]
        }.bind(this));
        this.originalTop = this.element.offsetTop;
        this.originalLeft = this.element.offsetLeft;
        var a = this.element.getStyle("font-size") || "100%";
        ["em", "px", "%", "pt"].each(function(b) {
            if (a.indexOf(b) > 0) {
                this.fontSize = parseFloat(a);
                this.fontSizeType = b
            }
        }.bind(this));
        this.factor = (this.options.scaleTo - this.options.scaleFrom) / 100;
        this.dims = null;
        if (this.options.scaleMode == "box") {
            this.dims = [this.element.offsetHeight, this.element.offsetWidth]
        }
        if (/^content/.test(this.options.scaleMode)) {
            this.dims = [this.element.scrollHeight, this.element.scrollWidth]
        }
        if (!this.dims) {
            this.dims = [this.options.scaleMode.originalHeight, this.options.scaleMode.originalWidth]
        }
    },
    update: function(a) {
        var b = (this.options.scaleFrom / 100) + (this.factor * a);
        if (this.options.scaleContent && this.fontSize) {
            this.element.setStyle({
                fontSize: this.fontSize * b + this.fontSizeType
            })
        }
        this.setDimensions(this.dims[0] * b, this.dims[1] * b)
    },
    finish: function(a) {
        if (this.restoreAfterFinish) {
            this.element.setStyle(this.originalStyle)
        }
    },
    setDimensions: function(a, e) {
        var f = {};
        if (this.options.scaleX) {
            f.width = e.round() + "px"
        }
        if (this.options.scaleY) {
            f.height = a.round() + "px"
        }
        if (this.options.scaleFromCenter) {
            var c = (a - this.dims[0]) / 2;
            var b = (e - this.dims[1]) / 2;
            if (this.elementPositioning == "absolute") {
                if (this.options.scaleY) {
                    f.top = this.originalTop - c + "px"
                }
                if (this.options.scaleX) {
                    f.left = this.originalLeft - b + "px"
                }
            } else {
                if (this.options.scaleY) {
                    f.top = -c + "px"
                }
                if (this.options.scaleX) {
                    f.left = -b + "px"
                }
            }
        }
        this.element.setStyle(f)
    }
});
Effect.Highlight = Class.create(Effect.Base, {
    initialize: function(b) {
        this.element = $p(b);
        if (!this.element) {
            throw (Effect._elementDoesNotExistError)
        }
        var a = Object.extend({
            startcolor: "#ffff99"
        }, arguments[1] || {});
        this.start(a)
    },
    setup: function() {
        if (this.element.getStyle("display") == "none") {
            this.cancel();
            return
        }
        this.oldStyle = {};
        if (!this.options.keepBackgroundImage) {
            this.oldStyle.backgroundImage = this.element.getStyle("background-image");
            this.element.setStyle({
                backgroundImage: "none"
            })
        }
        if (!this.options.endcolor) {
            this.options.endcolor = this.element.getStyle("background-color").parseColor("#ffffff")
        }
        if (!this.options.restorecolor) {
            this.options.restorecolor = this.element.getStyle("background-color")
        }
        this._base = $R(0, 2).map(function(a) {
            return parseInt(this.options.startcolor.slice(a * 2 + 1, a * 2 + 3), 16)
        }.bind(this));
        this._delta = $R(0, 2).map(function(a) {
            return parseInt(this.options.endcolor.slice(a * 2 + 1, a * 2 + 3), 16) - this._base[a]
        }.bind(this))
    },
    update: function(a) {
        this.element.setStyle({
            backgroundColor: $R(0, 2).inject("#", function(b, c, d) {
                return b + ((this._base[d] + (this._delta[d] * a)).round().toColorPart())
            }.bind(this))
        })
    },
    finish: function() {
        this.element.setStyle(Object.extend(this.oldStyle, {
            backgroundColor: this.options.restorecolor
        }))
    }
});
Effect.ScrollTo = function(c) {
    var b = arguments[1] || {},
        a = document.viewport.getScrollOffsets(),
        d = $p(c).cumulativeOffset();
    if (b.offset) {
        d[1] += b.offset
    }
    return new Effect.Tween(null, a.top, d[1], b, function(e) {
        scrollTo(a.left, e.round())
    })
};
Effect.Fade = function(c) {
    c = $p(c);
    var a = c.getInlineOpacity();
    var b = Object.extend({
        from: c.getOpacity() || 1,
        to: 0,
        afterFinishInternal: function(d) {
            if (d.options.to != 0) {
                return
            }
            d.element.hide().setStyle({
                opacity: a
            })
        }
    }, arguments[1] || {});
    return new Effect.Opacity(c, b)
};
Effect.Appear = function(b) {
    b = $p(b);
    var a = Object.extend({
        from: (b.getStyle("display") == "none" ? 0 : b.getOpacity() || 0),
        to: 1,
        afterFinishInternal: function(c) {
            c.element.forceRerendering()
        },
        beforeSetup: function(c) {
            c.element.setOpacity(c.options.from).show()
        }
    }, arguments[1] || {});
    return new Effect.Opacity(b, a)
};
Effect.Puff = function(b) {
    b = $p(b);
    var a = {
        opacity: b.getInlineOpacity(),
        position: b.getStyle("position"),
        top: b.style.top,
        left: b.style.left,
        width: b.style.width,
        height: b.style.height
    };
    return new Effect.Parallel([new Effect.Scale(b, 200, {
        sync: true,
        scaleFromCenter: true,
        scaleContent: true,
        restoreAfterFinish: true
    }), new Effect.Opacity(b, {
        sync: true,
        to: 0
    })], Object.extend({
        duration: 1,
        beforeSetupInternal: function(c) {
            Position.absolutize(c.effects[0].element)
        },
        afterFinishInternal: function(c) {
            c.effects[0].element.hide().setStyle(a)
        }
    }, arguments[1] || {}))
};
Effect.BlindUp = function(a) {
    a = $p(a);
    a.makeClipping();
    return new Effect.Scale(a, 0, Object.extend({
        scaleContent: false,
        scaleX: false,
        restoreAfterFinish: true,
        afterFinishInternal: function(b) {
            b.element.hide().undoClipping()
        }
    }, arguments[1] || {}))
};
Effect.BlindDown = function(b) {
    b = $p(b);
    var a = b.getDimensions();
    return new Effect.Scale(b, 100, Object.extend({
        scaleContent: false,
        scaleX: false,
        scaleFrom: 0,
        scaleMode: {
            originalHeight: a.height,
            originalWidth: a.width
        },
        restoreAfterFinish: true,
        afterSetup: function(c) {
            c.element.makeClipping().setStyle({
                height: "0px"
            }).show()
        },
        afterFinishInternal: function(c) {
            c.element.undoClipping()
        }
    }, arguments[1] || {}))
};
Effect.SwitchOff = function(b) {
    b = $p(b);
    var a = b.getInlineOpacity();
    return new Effect.Appear(b, Object.extend({
        duration: 0.4,
        from: 0,
        transition: Effect.Transitions.flicker,
        afterFinishInternal: function(c) {
            new Effect.Scale(c.element, 1, {
                duration: 0.3,
                scaleFromCenter: true,
                scaleX: false,
                scaleContent: false,
                restoreAfterFinish: true,
                beforeSetup: function(d) {
                    d.element.makePositioned().makeClipping()
                },
                afterFinishInternal: function(d) {
                    d.element.hide().undoClipping().undoPositioned().setStyle({
                        opacity: a
                    })
                }
            })
        }
    }, arguments[1] || {}))
};
Effect.DropOut = function(b) {
    b = $p(b);
    var a = {
        top: b.getStyle("top"),
        left: b.getStyle("left"),
        opacity: b.getInlineOpacity()
    };
    return new Effect.Parallel([new Effect.Move(b, {
        x: 0,
        y: 100,
        sync: true
    }), new Effect.Opacity(b, {
        sync: true,
        to: 0
    })], Object.extend({
        duration: 0.5,
        beforeSetup: function(c) {
            c.effects[0].element.makePositioned()
        },
        afterFinishInternal: function(c) {
            c.effects[0].element.hide().undoPositioned().setStyle(a)
        }
    }, arguments[1] || {}))
};
Effect.Shake = function(d) {
    d = $p(d);
    var b = Object.extend({
        distance: 20,
        duration: 0.5
    }, arguments[1] || {});
    var e = parseFloat(b.distance);
    var c = parseFloat(b.duration) / 10;
    var a = {
        top: d.getStyle("top"),
        left: d.getStyle("left")
    };
    return new Effect.Move(d, {
        x: e,
        y: 0,
        duration: c,
        afterFinishInternal: function(f) {
            new Effect.Move(f.element, {
                x: -e * 2,
                y: 0,
                duration: c * 2,
                afterFinishInternal: function(g) {
                    new Effect.Move(g.element, {
                        x: e * 2,
                        y: 0,
                        duration: c * 2,
                        afterFinishInternal: function(h) {
                            new Effect.Move(h.element, {
                                x: -e * 2,
                                y: 0,
                                duration: c * 2,
                                afterFinishInternal: function(i) {
                                    new Effect.Move(i.element, {
                                        x: e * 2,
                                        y: 0,
                                        duration: c * 2,
                                        afterFinishInternal: function(j) {
                                            new Effect.Move(j.element, {
                                                x: -e,
                                                y: 0,
                                                duration: c,
                                                afterFinishInternal: function(k) {
                                                    k.element.undoPositioned().setStyle(a)
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
};
Effect.SlideDown = function(c) {
    c = $p(c).cleanWhitespace();
    var a = c.down().getStyle("bottom");
    var b = c.getDimensions();
    return new Effect.Scale(c, 100, Object.extend({
        scaleContent: false,
        scaleX: false,
        scaleFrom: window.opera ? 0 : 1,
        scaleMode: {
            originalHeight: b.height,
            originalWidth: b.width
        },
        restoreAfterFinish: true,
        afterSetup: function(d) {
            d.element.makePositioned();
            d.element.down().makePositioned();
            if (window.opera) {
                d.element.setStyle({
                    top: ""
                })
            }
            d.element.makeClipping().setStyle({
                height: "0px"
            }).show()
        },
        afterUpdateInternal: function(d) {
            d.element.down().setStyle({
                bottom: (d.dims[0] - d.element.clientHeight) + "px"
            })
        },
        afterFinishInternal: function(d) {
            d.element.undoClipping().undoPositioned();
            d.element.down().undoPositioned().setStyle({
                bottom: a
            })
        }
    }, arguments[1] || {}))
};
Effect.SlideUp = function(c) {
    c = $p(c).cleanWhitespace();
    var a = c.down().getStyle("bottom");
    var b = c.getDimensions();
    return new Effect.Scale(c, window.opera ? 0 : 1, Object.extend({
        scaleContent: false,
        scaleX: false,
        scaleMode: "box",
        scaleFrom: 100,
        scaleMode: {
            originalHeight: b.height,
            originalWidth: b.width
        },
        restoreAfterFinish: true,
        afterSetup: function(d) {
            d.element.makePositioned();
            d.element.down().makePositioned();
            if (window.opera) {
                d.element.setStyle({
                    top: ""
                })
            }
            d.element.makeClipping().show()
        },
        afterUpdateInternal: function(d) {
            d.element.down().setStyle({
                bottom: (d.dims[0] - d.element.clientHeight) + "px"
            })
        },
        afterFinishInternal: function(d) {
            d.element.hide().undoClipping().undoPositioned();
            d.element.down().undoPositioned().setStyle({
                bottom: a
            })
        }
    }, arguments[1] || {}))
};
Effect.Squish = function(a) {
    return new Effect.Scale(a, window.opera ? 1 : 0, {
        restoreAfterFinish: true,
        beforeSetup: function(b) {
            b.element.makeClipping()
        },
        afterFinishInternal: function(b) {
            b.element.hide().undoClipping()
        }
    })
};
Effect.Grow = function(c) {
    c = $p(c);
    var b = Object.extend({
        direction: "center",
        moveTransition: Effect.Transitions.sinoidal,
        scaleTransition: Effect.Transitions.sinoidal,
        opacityTransition: Effect.Transitions.full
    }, arguments[1] || {});
    var a = {
        top: c.style.top,
        left: c.style.left,
        height: c.style.height,
        width: c.style.width,
        opacity: c.getInlineOpacity()
    };
    var g = c.getDimensions();
    var h, f;
    var e, d;
    switch (b.direction) {
        case "top-left":
            h = f = e = d = 0;
            break;
        case "top-right":
            h = g.width;
            f = d = 0;
            e = -g.width;
            break;
        case "bottom-left":
            h = e = 0;
            f = g.height;
            d = -g.height;
            break;
        case "bottom-right":
            h = g.width;
            f = g.height;
            e = -g.width;
            d = -g.height;
            break;
        case "center":
            h = g.width / 2;
            f = g.height / 2;
            e = -g.width / 2;
            d = -g.height / 2;
            break
    }
    return new Effect.Move(c, {
        x: h,
        y: f,
        duration: 0.01,
        beforeSetup: function(i) {
            i.element.hide().makeClipping().makePositioned()
        },
        afterFinishInternal: function(i) {
            new Effect.Parallel([new Effect.Opacity(i.element, {
                sync: true,
                to: 1,
                from: 0,
                transition: b.opacityTransition
            }), new Effect.Move(i.element, {
                x: e,
                y: d,
                sync: true,
                transition: b.moveTransition
            }), new Effect.Scale(i.element, 100, {
                scaleMode: {
                    originalHeight: g.height,
                    originalWidth: g.width
                },
                sync: true,
                scaleFrom: window.opera ? 1 : 0,
                transition: b.scaleTransition,
                restoreAfterFinish: true
            })], Object.extend({
                beforeSetup: function(j) {
                    j.effects[0].element.setStyle({
                        height: "0px"
                    }).show()
                },
                afterFinishInternal: function(j) {
                    j.effects[0].element.undoClipping().undoPositioned().setStyle(a)
                }
            }, b))
        }
    })
};
Effect.Shrink = function(c) {
    c = $p(c);
    var b = Object.extend({
        direction: "center",
        moveTransition: Effect.Transitions.sinoidal,
        scaleTransition: Effect.Transitions.sinoidal,
        opacityTransition: Effect.Transitions.none
    }, arguments[1] || {});
    var a = {
        top: c.style.top,
        left: c.style.left,
        height: c.style.height,
        width: c.style.width,
        opacity: c.getInlineOpacity()
    };
    var f = c.getDimensions();
    var e, d;
    switch (b.direction) {
        case "top-left":
            e = d = 0;
            break;
        case "top-right":
            e = f.width;
            d = 0;
            break;
        case "bottom-left":
            e = 0;
            d = f.height;
            break;
        case "bottom-right":
            e = f.width;
            d = f.height;
            break;
        case "center":
            e = f.width / 2;
            d = f.height / 2;
            break
    }
    return new Effect.Parallel([new Effect.Opacity(c, {
        sync: true,
        to: 0,
        from: 1,
        transition: b.opacityTransition
    }), new Effect.Scale(c, window.opera ? 1 : 0, {
        sync: true,
        transition: b.scaleTransition,
        restoreAfterFinish: true
    }), new Effect.Move(c, {
        x: e,
        y: d,
        sync: true,
        transition: b.moveTransition
    })], Object.extend({
        beforeStartInternal: function(g) {
            g.effects[0].element.makePositioned().makeClipping()
        },
        afterFinishInternal: function(g) {
            g.effects[0].element.hide().undoClipping().undoPositioned().setStyle(a)
        }
    }, b))
};
Effect.Pulsate = function(c) {
    c = $p(c);
    var b = arguments[1] || {},
        a = c.getInlineOpacity(),
        e = b.transition || Effect.Transitions.linear,
        d = function(f) {
            return 1 - e((-Math.cos((f * (b.pulses || 5) * 2) * Math.PI) / 2) + 0.5)
        };
    return new Effect.Opacity(c, Object.extend(Object.extend({
        duration: 2,
        from: 0,
        afterFinishInternal: function(f) {
            f.element.setStyle({
                opacity: a
            })
        }
    }, b), {
        transition: d
    }))
};
Effect.Fold = function(b) {
    b = $p(b);
    var a = {
        top: b.style.top,
        left: b.style.left,
        width: b.style.width,
        height: b.style.height
    };
    b.makeClipping();
    return new Effect.Scale(b, 5, Object.extend({
        scaleContent: false,
        scaleX: false,
        afterFinishInternal: function(c) {
            new Effect.Scale(b, 1, {
                scaleContent: false,
                scaleY: false,
                afterFinishInternal: function(d) {
                    d.element.hide().undoClipping().setStyle(a)
                }
            })
        }
    }, arguments[1] || {}))
};
Effect.Morph = Class.create(Effect.Base, {
    initialize: function(c) {
        this.element = $p(c);
        if (!this.element) {
            throw (Effect._elementDoesNotExistError)
        }
        var a = Object.extend({
            style: {}
        }, arguments[1] || {});
        if (!Object.isString(a.style)) {
            this.style = $H(a.style)
        } else {
            if (a.style.include(":")) {
                this.style = a.style.parseStyle()
            } else {
                this.element.addClassName(a.style);
                this.style = $H(this.element.getStyles());
                this.element.removeClassName(a.style);
                var b = this.element.getStyles();
                this.style = this.style.reject(function(d) {
                    return d.value == b[d.key]
                });
                a.afterFinishInternal = function(d) {
                    d.element.addClassName(d.options.style);
                    d.transforms.each(function(e) {
                        d.element.style[e.style] = ""
                    })
                }
            }
        }
        this.start(a)
    },
    setup: function() {
        function a(b) {
            if (!b || ["rgba(0, 0, 0, 0)", "transparent"].include(b)) {
                b = "#ffffff"
            }
            b = b.parseColor();
            return $R(0, 2).map(function(c) {
                return parseInt(b.slice(c * 2 + 1, c * 2 + 3), 16)
            })
        }
        this.transforms = this.style.map(function(g) {
            var f = g[0],
                e = g[1],
                d = null;
            if (e.parseColor("#zzzzzz") != "#zzzzzz") {
                e = e.parseColor();
                d = "color"
            } else {
                if (f == "opacity") {
                    e = parseFloat(e);
                    if (Prototype.Browser.IE && (!this.element.currentStyle.hasLayout)) {
                        this.element.setStyle({
                            zoom: 1
                        })
                    }
                } else {
                    if (Element.CSS_LENGTH.test(e)) {
                        var c = e.match(/^([\+\-]?[0-9\.]+)(.*)$/);
                        e = parseFloat(c[1]);
                        d = (c.length == 3) ? c[2] : null
                    }
                }
            }
            var b = this.element.getStyle(f);
            return {
                style: f.camelize(),
                originalValue: d == "color" ? a(b) : parseFloat(b || 0),
                targetValue: d == "color" ? a(e) : e,
                unit: d
            }
        }.bind(this)).reject(function(b) {
            return ((b.originalValue == b.targetValue) || (b.unit != "color" && (isNaN(b.originalValue) || isNaN(b.targetValue))))
        })
    },
    update: function(a) {
        var d = {},
            b, c = this.transforms.length;
        while (c--) {
            d[(b = this.transforms[c]).style] = b.unit == "color" ? "#" + (Math.round(b.originalValue[0] + (b.targetValue[0] - b.originalValue[0]) * a)).toColorPart() + (Math.round(b.originalValue[1] + (b.targetValue[1] - b.originalValue[1]) * a)).toColorPart() + (Math.round(b.originalValue[2] + (b.targetValue[2] - b.originalValue[2]) * a)).toColorPart() : (b.originalValue + (b.targetValue - b.originalValue) * a).toFixed(3) + (b.unit === null ? "" : b.unit)
        }
        this.element.setStyle(d, true)
    }
});
Effect.Transform = Class.create({
    initialize: function(a) {
        this.tracks = [];
        this.options = arguments[1] || {};
        this.addTracks(a)
    },
    addTracks: function(a) {
        a.each(function(b) {
            b = $H(b);
            var c = b.values().first();
            this.tracks.push($H({
                ids: b.keys().first(),
                effect: Effect.Morph,
                options: {
                    style: c
                }
            }))
        }.bind(this));
        return this
    },
    play: function() {
        return new Effect.Parallel(this.tracks.map(function(a) {
            var d = a.get("ids"),
                c = a.get("effect"),
                b = a.get("options");
            var e = [$p(d) || $$(d)].flatten();
            return e.map(function(f) {
                return new c(f, Object.extend({
                    sync: true
                }, b))
            })
        }).flatten(), this.options)
    }
});
Element.CSS_PROPERTIES = $w("backgroundColor backgroundPosition borderBottomColor borderBottomStyle borderBottomWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderSpacing borderTopColor borderTopStyle borderTopWidth bottom clip color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop markerOffset maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex");
Element.CSS_LENGTH = /^(([\+\-]?[0-9\.]+)(em|ex|px|in|cm|mm|pt|pc|\%))|0$/;
String.__parseStyleElement = document.createElement("div");
String.prototype.parseStyle = function() {
    var b, a = $H();
    if (Prototype.Browser.WebKit) {
        b = new Element("div", {
            style: this
        }).style
    } else {
        String.__parseStyleElement.innerHTML = '<div style="' + this + '"></div>';
        b = String.__parseStyleElement.childNodes[0].style
    }
    Element.CSS_PROPERTIES.each(function(c) {
        if (b[c]) {
            a.set(c, b[c])
        }
    });
    if (Prototype.Browser.IE && this.include("opacity")) {
        a.set("opacity", this.match(/opacity:\s*((?:0|1)?(?:\.\d*)?)/)[1])
    }
    return a
};
if (document.defaultView && document.defaultView.getComputedStyle) {
    Element.getStyles = function(b) {
        var a = document.defaultView.getComputedStyle($p(b), null);
        return Element.CSS_PROPERTIES.inject({}, function(c, d) {
            c[d] = a[d];
            return c
        })
    }
} else {
    Element.getStyles = function(b) {
        b = $p(b);
        var a = b.currentStyle,
            c;
        c = Element.CSS_PROPERTIES.inject({}, function(d, e) {
            d[e] = a[e];
            return d
        });
        if (!c.opacity) {
            c.opacity = b.getOpacity()
        }
        return c
    }
}
Effect.Methods = {
    morph: function(a, b) {
        a = $p(a);
        new Effect.Morph(a, Object.extend({
            style: b
        }, arguments[2] || {}));
        return a
    },
    visualEffect: function(c, e, b) {
        c = $p(c);
        var d = e.dasherize().camelize(),
            a = d.charAt(0).toUpperCase() + d.substring(1);
        new Effect[a](c, b);
        return c
    },
    highlight: function(b, a) {
        b = $p(b);
        new Effect.Highlight(b, a);
        return b
    }
};
$w("fade appear grow shrink fold blindUp blindDown slideUp slideDown pulsate shake puff squish switchOff dropOut").each(function(a) {
    Effect.Methods[a] = function(c, b) {
        c = $p(c);
        Effect[a.charAt(0).toUpperCase() + a.substring(1)](c, b);
        return c
    }
});
$w("getInlineOpacity forceRerendering setContentZoom collectTextNodes collectTextNodesIgnoreClass getStyles").each(function(a) {
    Effect.Methods[a] = Element[a]
});
Element.addMethods(Effect.Methods);
if (typeof Effect == "undefined") {
    throw ("controls.js requires including script.aculo.us' effects.js library")
}
var Autocompleter = {};
Autocompleter.Base = Class.create({
    baseInitialize: function(b, c, a) {
        b = $p(b);
        this.element = b;
        this.update = $p(c);
        this.hasFocus = false;
        this.changed = false;
        this.active = false;
        this.index = 0;
        this.entryCount = 0;
        this.oldElementValue = this.element.value;
        if (this.setOptions) {
            this.setOptions(a)
        } else {
            this.options = a || {}
        }
        this.options.paramName = this.options.paramName || this.element.name;
        this.options.tokens = this.options.tokens || [];
        this.options.frequency = this.options.frequency || 0.4;
        this.options.minChars = this.options.minChars || 1;
        this.options.onShow = this.options.onShow || function(d, e) {
            if (!e.style.position || e.style.position == "absolute") {
                e.style.position = "absolute";
                Position.clone(d, e, {
                    setHeight: false,
                    offsetTop: d.offsetHeight
                })
            }
            Effect.Appear(e, {
                duration: 0.15
            })
        };
        this.options.onHide = this.options.onHide || function(d, e) {
            new Effect.Fade(e, {
                duration: 0.15
            })
        };
        if (typeof(this.options.tokens) == "string") {
            this.options.tokens = new Array(this.options.tokens)
        }
        if (!this.options.tokens.include("\n")) {
            this.options.tokens.push("\n")
        }
        this.observer = null;
        this.element.setAttribute("autocomplete", "off");
        Element.hide(this.update);
        Event.observe(this.element, "blur", this.onBlur.bindAsEventListener(this));
        Event.observe(this.element, "keydown", this.onKeyPress.bindAsEventListener(this))
    },
    show: function() {
        if (Element.getStyle(this.update, "display") == "none") {
            this.options.onShow(this.element, this.update)
        }
        if (!this.iefix && (Prototype.Browser.IE) && (Element.getStyle(this.update, "position") == "absolute")) {
            new Insertion.After(this.update, '<iframe id="' + this.update.id + '_iefix" style="display:none;position:absolute;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);" src="javascript:false;" frameborder="0" scrolling="no"></iframe>');
            this.iefix = $p(this.update.id + "_iefix")
        }
        if (this.iefix) {
            setTimeout(this.fixIEOverlapping.bind(this), 50)
        }
    },
    fixIEOverlapping: function() {
        Position.clone(this.update, this.iefix, {
            setTop: (!this.update.style.height)
        });
        this.iefix.style.zIndex = 1;
        this.update.style.zIndex = 2;
        Element.show(this.iefix)
    },
    hide: function() {
        this.stopIndicator();
        if (Element.getStyle(this.update, "display") != "none") {
            this.options.onHide(this.element, this.update)
        }
        if (this.iefix) {
            Element.hide(this.iefix)
        }
    },
    startIndicator: function() {
        if (this.options.indicator) {
            Element.show(this.options.indicator)
        }
    },
    stopIndicator: function() {
        if (this.options.indicator) {
            Element.hide(this.options.indicator)
        }
    },
    onKeyPress: function(a) {
        if (this.active) {
            switch (a.keyCode) {
                case Event.KEY_TAB:
                case Event.KEY_RETURN:
                    this.selectEntry();
                    Event.stop(a);
                case Event.KEY_ESC:
                    this.hide();
                    this.active = false;
                    Event.stop(a);
                    return;
                case Event.KEY_LEFT:
                case Event.KEY_RIGHT:
                    return;
                case Event.KEY_UP:
                    this.markPrevious();
                    this.render();
                    Event.stop(a);
                    return;
                case Event.KEY_DOWN:
                    this.markNext();
                    this.render();
                    Event.stop(a);
                    return
            }
        } else {
            if (a.keyCode == Event.KEY_TAB || a.keyCode == Event.KEY_RETURN || (Prototype.Browser.WebKit > 0 && a.keyCode == 0)) {
                return
            }
        }
        this.changed = true;
        this.hasFocus = true;
        if (this.observer) {
            clearTimeout(this.observer)
        }
        this.observer = setTimeout(this.onObserverEvent.bind(this), this.options.frequency * 1000)
    },
    activate: function() {
        this.changed = false;
        this.hasFocus = true;
        this.getUpdatedChoices()
    },
    onHover: function(b) {
        var a = Event.findElement(b, "LI");
        if (this.index != a.autocompleteIndex) {
            this.index = a.autocompleteIndex;
            this.render()
        }
        Event.stop(b)
    },
    onClick: function(b) {
        var a = Event.findElement(b, "LI");
        this.index = a.autocompleteIndex;
        this.selectEntry();
        this.hide()
    },
    onBlur: function(a) {
        setTimeout(this.hide.bind(this), 250);
        this.hasFocus = false;
        this.active = false
    },
    render: function() {
        if (this.entryCount > 0) {
            for (var a = 0; a < this.entryCount; a++) {
                this.index == a ? Element.addClassName(this.getEntry(a), "selected") : Element.removeClassName(this.getEntry(a), "selected")
            }
            if (this.hasFocus) {
                this.show();
                this.active = true
            }
        } else {
            this.active = false;
            this.hide()
        }
    },
    markPrevious: function() {
        if (this.index > 0) {
            this.index--
        } else {
            this.index = this.entryCount - 1
        }
        this.getEntry(this.index).scrollIntoView(true)
    },
    markNext: function() {
        if (this.index < this.entryCount - 1) {
            this.index++
        } else {
            this.index = 0
        }
        this.getEntry(this.index).scrollIntoView(false)
    },
    getEntry: function(a) {
        return this.update.firstChild.childNodes[a]
    },
    getCurrentEntry: function() {
        return this.getEntry(this.index)
    },
    selectEntry: function() {
        this.active = false;
        this.updateElement(this.getCurrentEntry())
    },
    updateElement: function(f) {
        if (this.options.updateElement) {
            this.options.updateElement(f);
            return
        }
        var d = "";
        if (this.options.select) {
            var a = $p(f).select("." + this.options.select) || [];
            if (a.length > 0) {
                d = Element.collectTextNodes(a[0], this.options.select)
            }
        } else {
            d = Element.collectTextNodesIgnoreClass(f, "informal")
        }
        var c = this.getTokenBounds();
        if (c[0] != -1) {
            var e = this.element.value.substr(0, c[0]);
            var b = this.element.value.substr(c[0]).match(/^\s+/);
            if (b) {
                e += b[0]
            }
            this.element.value = e + d + this.element.value.substr(c[1])
        } else {
            this.element.value = d
        }
        this.oldElementValue = this.element.value;
        this.element.focus();
        if (this.options.afterUpdateElement) {
            this.options.afterUpdateElement(this.element, f)
        }
    },
    updateChoices: function(c) {
        if (!this.changed && this.hasFocus) {
            this.update.innerHTML = c;
            Element.cleanWhitespace(this.update);
            Element.cleanWhitespace(this.update.down());
            if (this.update.firstChild && this.update.down().childNodes) {
                this.entryCount = this.update.down().childNodes.length;
                for (var a = 0; a < this.entryCount; a++) {
                    var b = this.getEntry(a);
                    b.autocompleteIndex = a;
                    this.addObservers(b)
                }
            } else {
                this.entryCount = 0
            }
            this.stopIndicator();
            this.index = 0;
            if (this.entryCount == 1 && this.options.autoSelect) {
                this.selectEntry();
                this.hide()
            } else {
                this.render()
            }
        }
    },
    addObservers: function(a) {
        Event.observe(a, "mouseover", this.onHover.bindAsEventListener(this));
        Event.observe(a, "click", this.onClick.bindAsEventListener(this))
    },
    onObserverEvent: function() {
        this.changed = false;
        this.tokenBounds = null;
        if (this.getToken().length >= this.options.minChars) {
            this.getUpdatedChoices()
        } else {
            this.active = false;
            this.hide()
        }
        this.oldElementValue = this.element.value
    },
    getToken: function() {
        var a = this.getTokenBounds();
        return this.element.value.substring(a[0], a[1]).strip()
    },
    getTokenBounds: function() {
        if (null != this.tokenBounds) {
            return this.tokenBounds
        }
        var e = this.element.value;
        if (e.strip().empty()) {
            return [-1, 0]
        }
        var f = arguments.callee.getFirstDifferencePos(e, this.oldElementValue);
        var h = (f == this.oldElementValue.length ? 1 : 0);
        var d = -1,
            c = e.length;
        var g;
        for (var b = 0, a = this.options.tokens.length; b < a; ++b) {
            g = e.lastIndexOf(this.options.tokens[b], f + h - 1);
            if (g > d) {
                d = g
            }
            g = e.indexOf(this.options.tokens[b], f + h);
            if (-1 != g && g < c) {
                c = g
            }
        }
        return (this.tokenBounds = [d + 1, c])
    }
});
Autocompleter.Base.prototype.getTokenBounds.getFirstDifferencePos = function(c, a) {
    var d = Math.min(c.length, a.length);
    for (var b = 0; b < d; ++b) {
        if (c[b] != a[b]) {
            return b
        }
    }
    return d
};
Ajax.Autocompleter = Class.create(Autocompleter.Base, {
    initialize: function(c, d, b, a) {
        this.baseInitialize(c, d, a);
        this.options.asynchronous = true;
        this.options.onComplete = this.onComplete.bind(this);
        this.options.defaultParams = this.options.parameters || null;
        this.url = b
    },
    getUpdatedChoices: function() {
        this.startIndicator();
        var a = encodeURIComponent(this.options.paramName) + "=" + encodeURIComponent(this.getToken());
        this.options.parameters = this.options.callback ? this.options.callback(this.element, a) : a;
        if (this.options.defaultParams) {
            this.options.parameters += "&" + this.options.defaultParams
        }
        new Ajax.Request(this.url, this.options)
    },
    onComplete: function(a) {
        this.updateChoices(a.responseText)
    }
});
Autocompleter.Local = Class.create(Autocompleter.Base, {
    initialize: function(b, d, c, a) {
        this.baseInitialize(b, d, a);
        this.options.array = c
    },
    getUpdatedChoices: function() {
        this.updateChoices(this.options.selector(this))
    },
    setOptions: function(a) {
        this.options = Object.extend({
            choices: 10,
            partialSearch: true,
            partialChars: 2,
            ignoreCase: true,
            fullSearch: false,
            selector: function(b) {
                var d = [];
                var c = [];
                var h = b.getToken();
                var g = 0;
                for (var e = 0; e < b.options.array.length && d.length < b.options.choices; e++) {
                    var f = b.options.array[e];
                    var j = b.options.ignoreCase ? f.toLowerCase().indexOf(h.toLowerCase()) : f.indexOf(h);
                    while (j != -1) {
                        if (j == 0 && f.length != h.length) {
                            d.push("<li><strong>" + f.substr(0, h.length) + "</strong>" + f.substr(h.length) + "</li>");
                            break
                        } else {
                            if (h.length >= b.options.partialChars && b.options.partialSearch && j != -1) {
                                if (b.options.fullSearch || /\s/.test(f.substr(j - 1, 1))) {
                                    c.push("<li>" + f.substr(0, j) + "<strong>" + f.substr(j, h.length) + "</strong>" + f.substr(j + h.length) + "</li>");
                                    break
                                }
                            }
                        }
                        j = b.options.ignoreCase ? f.toLowerCase().indexOf(h.toLowerCase(), j + 1) : f.indexOf(h, j + 1)
                    }
                }
                if (c.length) {
                    d = d.concat(c.slice(0, b.options.choices - d.length))
                }
                return "<ul>" + d.join("") + "</ul>"
            }
        }, a || {})
    }
});
Field.scrollFreeActivate = function(a) {
    setTimeout(function() {
        Field.activate(a)
    }, 1)
};
Ajax.InPlaceEditor = Class.create({
    initialize: function(c, b, a) {
        this.url = b;
        this.element = c = $p(c);
        this.prepareOptions();
        this._controls = {};
        arguments.callee.dealWithDeprecatedOptions(a);
        Object.extend(this.options, a || {});
        if (!this.options.formId && this.element.id) {
            this.options.formId = this.element.id + "-inplaceeditor";
            if ($p(this.options.formId)) {
                this.options.formId = ""
            }
        }
        if (this.options.externalControl) {
            this.options.externalControl = $p(this.options.externalControl)
        }
        if (!this.options.externalControl) {
            this.options.externalControlOnly = false
        }
        this._originalBackground = this.element.getStyle("background-color") || "transparent";
        this.element.title = this.options.clickToEditText;
        this._boundCancelHandler = this.handleFormCancellation.bind(this);
        this._boundComplete = (this.options.onComplete || Prototype.emptyFunction).bind(this);
        this._boundFailureHandler = this.handleAJAXFailure.bind(this);
        this._boundSubmitHandler = this.handleFormSubmission.bind(this);
        this._boundWrapperHandler = this.wrapUp.bind(this);
        this.registerListeners()
    },
    checkForEscapeOrReturn: function(a) {
        if (!this._editing || a.ctrlKey || a.altKey || a.shiftKey) {
            return
        }
        if (Event.KEY_ESC == a.keyCode) {
            this.handleFormCancellation(a)
        } else {
            if (Event.KEY_RETURN == a.keyCode) {
                this.handleFormSubmission(a)
            }
        }
    },
    createControl: function(g, c, b) {
        var e = this.options[g + "Control"];
        var f = this.options[g + "Text"];
        if ("button" == e) {
            var a = document.createElement("input");
            a.type = "submit";
            a.value = f;
            a.className = "editor_" + g + "_button";
            if ("cancel" == g) {
                a.onclick = this._boundCancelHandler
            }
            this._form.appendChild(a);
            this._controls[g] = a
        } else {
            if ("link" == e) {
                var d = document.createElement("a");
                d.href = "#";
                d.appendChild(document.createTextNode(f));
                d.onclick = "cancel" == g ? this._boundCancelHandler : this._boundSubmitHandler;
                d.className = "editor_" + g + "_link";
                if (b) {
                    d.className += " " + b
                }
                this._form.appendChild(d);
                this._controls[g] = d
            }
        }
    },
    createEditField: function() {
        var c = (this.options.loadTextURL ? this.options.loadingText : this.getText());
        var b;
        if (1 >= this.options.rows && !/\r|\n/.test(this.getText())) {
            b = document.createElement("input");
            b.type = "text";
            var a = this.options.size || this.options.cols || 0;
            if (0 < a) {
                b.size = a
            }
        } else {
            b = document.createElement("textarea");
            b.rows = (1 >= this.options.rows ? this.options.autoRows : this.options.rows);
            b.cols = this.options.cols || 40
        }
        b.name = this.options.paramName;
        b.value = c;
        b.className = "editor_field";
        if (this.options.submitOnBlur) {
            b.onblur = this._boundSubmitHandler
        }
        this._controls.editor = b;
        if (this.options.loadTextURL) {
            this.loadExternalText()
        }
        this._form.appendChild(this._controls.editor)
    },
    createForm: function() {
        var b = this;

        function a(d, e) {
            var c = b.options["text" + d + "Controls"];
            if (!c || e === false) {
                return
            }
            b._form.appendChild(document.createTextNode(c))
        }
        this._form = $p(document.createElement("form"));
        this._form.id = this.options.formId;
        this._form.addClassName(this.options.formClassName);
        this._form.onsubmit = this._boundSubmitHandler;
        this.createEditField();
        if ("textarea" == this._controls.editor.tagName.toLowerCase()) {
            this._form.appendChild(document.createElement("br"))
        }
        if (this.options.onFormCustomization) {
            this.options.onFormCustomization(this, this._form)
        }
        a("Before", this.options.okControl || this.options.cancelControl);
        this.createControl("ok", this._boundSubmitHandler);
        a("Between", this.options.okControl && this.options.cancelControl);
        this.createControl("cancel", this._boundCancelHandler, "editor_cancel");
        a("After", this.options.okControl || this.options.cancelControl)
    },
    destroy: function() {
        if (this._oldInnerHTML) {
            this.element.innerHTML = this._oldInnerHTML
        }
        this.leaveEditMode();
        this.unregisterListeners()
    },
    enterEditMode: function(a) {
        if (this._saving || this._editing) {
            return
        }
        this._editing = true;
        this.triggerCallback("onEnterEditMode");
        if (this.options.externalControl) {
            this.options.externalControl.hide()
        }
        this.element.hide();
        this.createForm();
        this.element.parentNode.insertBefore(this._form, this.element);
        if (!this.options.loadTextURL) {
            this.postProcessEditField()
        }
        if (a) {
            Event.stop(a)
        }
    },
    enterHover: function(a) {
        if (this.options.hoverClassName) {
            this.element.addClassName(this.options.hoverClassName)
        }
        if (this._saving) {
            return
        }
        this.triggerCallback("onEnterHover")
    },
    getText: function() {
        return this.element.innerHTML.unescapeHTML()
    },
    handleAJAXFailure: function(a) {
        this.triggerCallback("onFailure", a);
        if (this._oldInnerHTML) {
            this.element.innerHTML = this._oldInnerHTML;
            this._oldInnerHTML = null
        }
    },
    handleFormCancellation: function(a) {
        this.wrapUp();
        if (a) {
            Event.stop(a)
        }
    },
    handleFormSubmission: function(d) {
        var b = this._form;
        var c = $F(this._controls.editor);
        this.prepareSubmission();
        var f = this.options.callback(b, c) || "";
        if (Object.isString(f)) {
            f = f.toQueryParams()
        }
        f.editorId = this.element.id;
        if (this.options.htmlResponse) {
            var a = Object.extend({
                evalScripts: true
            }, this.options.ajaxOptions);
            Object.extend(a, {
                parameters: f,
                onComplete: this._boundWrapperHandler,
                onFailure: this._boundFailureHandler
            });
            new Ajax.Updater({
                success: this.element
            }, this.url, a)
        } else {
            var a = Object.extend({
                method: "get"
            }, this.options.ajaxOptions);
            Object.extend(a, {
                parameters: f,
                onComplete: this._boundWrapperHandler,
                onFailure: this._boundFailureHandler
            });
            new Ajax.Request(this.url, a)
        }
        if (d) {
            Event.stop(d)
        }
    },
    leaveEditMode: function() {
        this.element.removeClassName(this.options.savingClassName);
        this.removeForm();
        this.leaveHover();
        this.element.style.backgroundColor = this._originalBackground;
        this.element.show();
        if (this.options.externalControl) {
            this.options.externalControl.show()
        }
        this._saving = false;
        this._editing = false;
        this._oldInnerHTML = null;
        this.triggerCallback("onLeaveEditMode")
    },
    leaveHover: function(a) {
        if (this.options.hoverClassName) {
            this.element.removeClassName(this.options.hoverClassName)
        }
        if (this._saving) {
            return
        }
        this.triggerCallback("onLeaveHover")
    },
    loadExternalText: function() {
        this._form.addClassName(this.options.loadingClassName);
        this._controls.editor.disabled = true;
        var a = Object.extend({
            method: "get"
        }, this.options.ajaxOptions);
        Object.extend(a, {
            parameters: "editorId=" + encodeURIComponent(this.element.id),
            onComplete: Prototype.emptyFunction,
            onSuccess: function(c) {
                this._form.removeClassName(this.options.loadingClassName);
                var b = c.responseText;
                if (this.options.stripLoadedTextTags) {
                    b = b.stripTags()
                }
                this._controls.editor.value = b;
                this._controls.editor.disabled = false;
                this.postProcessEditField()
            }.bind(this),
            onFailure: this._boundFailureHandler
        });
        new Ajax.Request(this.options.loadTextURL, a)
    },
    postProcessEditField: function() {
        var a = this.options.fieldPostCreation;
        if (a) {
            $p(this._controls.editor)["focus" == a ? "focus" : "activate"]()
        }
    },
    prepareOptions: function() {
        this.options = Object.clone(Ajax.InPlaceEditor.DefaultOptions);
        Object.extend(this.options, Ajax.InPlaceEditor.DefaultCallbacks);
        [this._extraDefaultOptions].flatten().compact().each(function(a) {
            Object.extend(this.options, a)
        }.bind(this))
    },
    prepareSubmission: function() {
        this._saving = true;
        this.removeForm();
        this.leaveHover();
        this.showSaving()
    },
    registerListeners: function() {
        this._listeners = {};
        var a;
        $H(Ajax.InPlaceEditor.Listeners).each(function(b) {
            a = this[b.value].bind(this);
            this._listeners[b.key] = a;
            if (!this.options.externalControlOnly) {
                this.element.observe(b.key, a)
            }
            if (this.options.externalControl) {
                this.options.externalControl.observe(b.key, a)
            }
        }.bind(this))
    },
    removeForm: function() {
        if (!this._form) {
            return
        }
        this._form.remove();
        this._form = null;
        this._controls = {}
    },
    showSaving: function() {
        this._oldInnerHTML = this.element.innerHTML;
        this.element.innerHTML = this.options.savingText;
        this.element.addClassName(this.options.savingClassName);
        this.element.style.backgroundColor = this._originalBackground;
        this.element.show()
    },
    triggerCallback: function(b, a) {
        if ("function" == typeof this.options[b]) {
            this.options[b](this, a)
        }
    },
    unregisterListeners: function() {
        $H(this._listeners).each(function(a) {
            if (!this.options.externalControlOnly) {
                this.element.stopObserving(a.key, a.value)
            }
            if (this.options.externalControl) {
                this.options.externalControl.stopObserving(a.key, a.value)
            }
        }.bind(this))
    },
    wrapUp: function(a) {
        this.leaveEditMode();
        this._boundComplete(a, this.element)
    }
});
Object.extend(Ajax.InPlaceEditor.prototype, {
    dispose: Ajax.InPlaceEditor.prototype.destroy
});
Ajax.InPlaceCollectionEditor = Class.create(Ajax.InPlaceEditor, {
    initialize: function($super, c, b, a) {
        this._extraDefaultOptions = Ajax.InPlaceCollectionEditor.DefaultOptions;
        $super(c, b, a)
    },
    createEditField: function() {
        var a = document.createElement("select");
        a.name = this.options.paramName;
        a.size = 1;
        this._controls.editor = a;
        this._collection = this.options.collection || [];
        if (this.options.loadCollectionURL) {
            this.loadCollection()
        } else {
            this.checkForExternalText()
        }
        this._form.appendChild(this._controls.editor)
    },
    loadCollection: function() {
        this._form.addClassName(this.options.loadingClassName);
        this.showLoadingText(this.options.loadingCollectionText);
        var options = Object.extend({
            method: "get"
        }, this.options.ajaxOptions);
        Object.extend(options, {
            parameters: "editorId=" + encodeURIComponent(this.element.id),
            onComplete: Prototype.emptyFunction,
            onSuccess: function(transport) {
                var js = transport.responseText.strip();
                if (!/^\[.*\]$/.test(js)) {
                    throw ("Server returned an invalid collection representation.")
                }
                this._collection = eval(js);
                this.checkForExternalText()
            }.bind(this),
            onFailure: this.onFailure
        });
        new Ajax.Request(this.options.loadCollectionURL, options)
    },
    showLoadingText: function(b) {
        this._controls.editor.disabled = true;
        var a = this._controls.editor.firstChild;
        if (!a) {
            a = document.createElement("option");
            a.value = "";
            this._controls.editor.appendChild(a);
            a.selected = true
        }
        a.update((b || "").stripScripts().stripTags())
    },
    checkForExternalText: function() {
        this._text = this.getText();
        if (this.options.loadTextURL) {
            this.loadExternalText()
        } else {
            this.buildOptionList()
        }
    },
    loadExternalText: function() {
        this.showLoadingText(this.options.loadingText);
        var a = Object.extend({
            method: "get"
        }, this.options.ajaxOptions);
        Object.extend(a, {
            parameters: "editorId=" + encodeURIComponent(this.element.id),
            onComplete: Prototype.emptyFunction,
            onSuccess: function(b) {
                this._text = b.responseText.strip();
                this.buildOptionList()
            }.bind(this),
            onFailure: this.onFailure
        });
        new Ajax.Request(this.options.loadTextURL, a)
    },
    buildOptionList: function() {
        this._form.removeClassName(this.options.loadingClassName);
        this._collection = this._collection.map(function(d) {
            return 2 === d.length ? d : [d, d].flatten()
        });
        var b = ("value" in this.options) ? this.options.value : this._text;
        var a = this._collection.any(function(d) {
            return d[0] == b
        }.bind(this));
        this._controls.editor.update("");
        var c;
        this._collection.each(function(e, d) {
            c = document.createElement("option");
            c.value = e[0];
            c.selected = a ? e[0] == b : 0 == d;
            c.appendChild(document.createTextNode(e[1]));
            this._controls.editor.appendChild(c)
        }.bind(this));
        this._controls.editor.disabled = false;
        Field.scrollFreeActivate(this._controls.editor)
    }
});
Ajax.InPlaceEditor.prototype.initialize.dealWithDeprecatedOptions = function(a) {
    if (!a) {
        return
    }

    function b(c, d) {
        if (c in a || d === undefined) {
            return
        }
        a[c] = d
    }
    b("cancelControl", (a.cancelLink ? "link" : (a.cancelButton ? "button" : a.cancelLink == a.cancelButton == false ? false : undefined)));
    b("okControl", (a.okLink ? "link" : (a.okButton ? "button" : a.okLink == a.okButton == false ? false : undefined)));
    b("highlightColor", a.highlightcolor);
    b("highlightEndColor", a.highlightendcolor)
};
Object.extend(Ajax.InPlaceEditor, {
    DefaultOptions: {
        ajaxOptions: {},
        autoRows: 3,
        cancelControl: "link",
        cancelText: "cancel",
        clickToEditText: "Click to edit",
        externalControl: null,
        externalControlOnly: false,
        fieldPostCreation: "activate",
        formClassName: "inplaceeditor-form",
        formId: null,
        highlightColor: "#ffff99",
        highlightEndColor: "#ffffff",
        hoverClassName: "",
        htmlResponse: true,
        loadingClassName: "inplaceeditor-loading",
        loadingText: "Loading...",
        okControl: "button",
        okText: "ok",
        paramName: "value",
        rows: 1,
        savingClassName: "inplaceeditor-saving",
        savingText: "Saving...",
        size: 0,
        stripLoadedTextTags: false,
        submitOnBlur: false,
        textAfterControls: "",
        textBeforeControls: "",
        textBetweenControls: ""
    },
    DefaultCallbacks: {
        callback: function(a) {
            return Form.serialize(a)
        },
        onComplete: function(b, a) {
            new Effect.Highlight(a, {
                startcolor: this.options.highlightColor,
                keepBackgroundImage: true
            })
        },
        onEnterEditMode: null,
        onEnterHover: function(a) {
            a.element.style.backgroundColor = a.options.highlightColor;
            if (a._effect) {
                a._effect.cancel()
            }
        },
        onFailure: function(b, a) {
            alert("Error communication with the server: " + b.responseText.stripTags())
        },
        onFormCustomization: null,
        onLeaveEditMode: null,
        onLeaveHover: function(a) {
            a._effect = new Effect.Highlight(a.element, {
                startcolor: a.options.highlightColor,
                endcolor: a.options.highlightEndColor,
                restorecolor: a._originalBackground,
                keepBackgroundImage: true
            })
        }
    },
    Listeners: {
        click: "enterEditMode",
        keydown: "checkForEscapeOrReturn",
        mouseover: "enterHover",
        mouseout: "leaveHover"
    }
});
Ajax.InPlaceCollectionEditor.DefaultOptions = {
    loadingCollectionText: "Loading options..."
};
Form.Element.DelayedObserver = Class.create({
    initialize: function(b, a, c) {
        this.delay = a || 0.5;
        this.element = $p(b);
        this.callback = c;
        this.timer = null;
        this.lastValue = $F(this.element);
        Event.observe(this.element, "keyup", this.delayedListener.bindAsEventListener(this))
    },
    delayedListener: function(a) {
        if (this.lastValue == $F(this.element)) {
            return
        }
        if (this.timer) {
            clearTimeout(this.timer)
        }
        this.timer = setTimeout(this.onTimerEvent.bind(this), this.delay * 1000);
        this.lastValue = $F(this.element)
    },
    onTimerEvent: function() {
        this.timer = null;
        this.callback(this.element, $F(this.element))
    }
});
var fileLoadingImage = "images/loading.gif";
var fileBottomNavCloseImage = "images/closelabel.gif";
var overlayOpacity = 0.6;
var animate = true;
var resizeSpeed = 7;
var borderSize = 10;
overlayDuration = 0;
resizeDuration = 0;
Object.extend(Element, {
    getWidth: function(a) {
        a = $p(a);
        return a.offsetWidth
    },
    setWidth: function(b, a) {
        b = $p(b);
        b.style.width = a + "px"
    },
    setHeight: function(a, b) {
        a = $p(a);
        a.style.height = b + "px"
    },
    setTop: function(b, a) {
        b = $p(b);
        b.style.top = a + "px"
    },
    setLeft: function(b, a) {
        b = $p(b);
        b.style.left = a + "px"
    },
    setSrc: function(a, b) {
        a = $p(a);
        a.src = b
    },
    setHref: function(b, a) {
        b = $p(b);
        b.href = a
    },
    setInnerHTML: function(a, b) {
        a = $p(a);
        a.innerHTML = b
    }
});
Array.prototype.removeDuplicates = function() {
    for (i = 0; i < this.length; i++) {
        for (j = this.length - 1; j > i; j--) {
            if (this[i][0] == this[j][0]) {
                this.splice(j, 1)
            }
        }
    }
};
Array.prototype.empty = function() {
    for (i = 0; i <= this.length; i++) {
        this.shift()
    }
};
var Lightbox = Class.create();
Lightbox.prototype = {
    initialize: function() {
        var b = document.getElementsByTagName("body").item(0);
        var c = document.createElement("div");
        c.setAttribute("id", "overlay");
        c.style.display = "none";
        c.onclick = function() {
            if (!myLightbox.modal) {
                myLightbox.end()
            }
        };
        b.appendChild(c);
        var a = document.createElement("div");
        a.setAttribute("id", "lightbox");
        a.style.display = "none";
        a.onclick = function(f) {
            if (!f) {
                var f = window.event
            }
            var d = Event.element(f).id;
            if (d == "lightbox" && !myLightbox.modal) {
                myLightbox.end()
            }
        };
        b.appendChild(a)
    },
    start: function(d, c, f) {
        if (f) {
            this.modal = f
        } else {
            this.modal = false
        }
        if (c == null) {
            c = overlayOpacity
        }
        hideSelectBoxes();
        hideFlash();
        var b = getPageSize();
        Element.setWidth("overlay", b[0]);
        Element.setHeight("overlay", b[1]);
        new Effect.Appear("overlay", {
            duration: overlayDuration,
            from: 0,
            to: c
        });
        $p("lightbox").innerHTML = $p(d).innerHTML;
        descendants = $p("lightbox").descendants();
        for (i = 0; i != descendants.length; i++) {
            if (descendants[i].name != null && descendants[i].name.indexOf("lb_") == 0) {
                descendants[i].name = descendants[i].name.substring(3)
            }
            if (descendants[i].id != null && descendants[i].id.indexOf("lb_") == 0) {
                descendants[i].id = descendants[i].id.substring(3)
            }
        }
        var a = getPageScroll();
        var g = a[1] + (b[3] / 10);
        var e = a[0];
        Element.setTop("lightbox", g);
        Element.setLeft("lightbox", e);
        Element.show("lightbox")
    },
    end: function() {
        Element.hide("lightbox");
        new Effect.Fade("overlay", {
            duration: overlayDuration
        });
        showSelectBoxes();
        showFlash()
    }
};

function getPageScroll() {
    var b, a;
    if (self.pageYOffset) {
        a = self.pageYOffset;
        b = self.pageXOffset
    } else {
        if (document.documentElement && document.documentElement.scrollTop) {
            a = document.documentElement.scrollTop;
            b = document.documentElement.scrollLeft
        } else {
            if (document.body) {
                a = document.body.scrollTop;
                b = document.body.scrollLeft
            }
        }
    }
    arrayPageScroll = new Array(b, a);
    return arrayPageScroll
}

function getPageSize() {
    var c, a;
    if (window.innerHeight && window.scrollMaxY) {
        c = window.innerWidth + window.scrollMaxX;
        a = window.innerHeight + window.scrollMaxY
    } else {
        if (document.body.scrollHeight > document.body.offsetHeight) {
            c = document.body.scrollWidth;
            a = document.body.scrollHeight
        } else {
            c = document.body.offsetWidth;
            a = document.body.offsetHeight
        }
    }
    var b, d;
    if (self.innerHeight) {
        if (document.documentElement.clientWidth) {
            b = document.documentElement.clientWidth
        } else {
            b = self.innerWidth
        }
        d = self.innerHeight
    } else {
        if (document.documentElement && document.documentElement.clientHeight) {
            b = document.documentElement.clientWidth;
            d = document.documentElement.clientHeight
        } else {
            if (document.body) {
                b = document.body.clientWidth;
                d = document.body.clientHeight
            }
        }
    }
    if (a < d) {
        pageHeight = d
    } else {
        pageHeight = a
    }
    if (c < b) {
        pageWidth = c
    } else {
        pageWidth = b
    }
    arrayPageSize = new Array(pageWidth, pageHeight, b, d);
    return arrayPageSize
}

function getKey(a) {
    if (a == null) {
        keycode = event.keyCode
    } else {
        keycode = a.which
    }
    key = String.fromCharCode(keycode).toLowerCase();
    if (key == "x") {}
}

function listenKey() {
    document.onkeypress = getKey
}

function showSelectBoxes() {
    var a = document.getElementsByTagName("select");
    for (i = 0; i != a.length; i++) {
        a[i].style.visibility = "visible"
    }
}

function hideSelectBoxes() {
    var a = document.getElementsByTagName("select");
    for (i = 0; i != a.length; i++) {
        a[i].style.visibility = "hidden"
    }
}

function showFlash() {
    var hide_tags = ["object", "embed", "iframe"];
    hide_tags.each(function(tag_name) {
        $j(tag_name).each(function(index, e) {
            $j(e).css('visibility', 'visible');
        });
    });
}

function hideFlash() {
    var hide_tags = ["object", "embed", "iframe"];
    hide_tags.each(function(tag_name) {
        $j(tag_name).each(function(index, e) {
            if ($j(e).parents('.do_not_hide_flash').length == 0) {
                $j(e).css('visibility', 'hidden');
            }
        });
    });
}

function pause(c) {
    var b = new Date();
    a = null;
    do {
        var a = new Date()
    } while (a - b < c)
}

function initLightbox() {
    if ((typeof myLightbox) == "undefined") {
        myLightbox = new Lightbox()
    }
}
Event.observe(window, "load", initLightbox, false);
Ajax.Responders.register({
    onCreate: function(request) {
        var csrf_meta_tag = $$('meta[name=csrf-token]')[0];
        if (csrf_meta_tag) {
            var header = 'X-CSRF-Token',
                token = csrf_meta_tag.readAttribute('content');
            if (!request.options.requestHeaders) {
                request.options.requestHeaders = {};
            }
            request.options.requestHeaders[header] = token;
        }
    }
});

function CSRFProtection(xhr) {
    var token = $j('meta[name="csrf-token"]').attr('content');
    if (token) xhr.setRequestHeader('X-CSRF-Token', token);
}
if (typeof($j) !== 'undefined') {
    if ('ajaxPrefilter' in $j) {
        $j.ajaxPrefilter(function(options, originalOptions, xhr) {
            CSRFProtection(xhr);
        });
    } else {
        $j(document).ajaxSend(function(e, xhr) {
            CSRFProtection(xhr);
        });
    }
}
document.observe('dom:loaded', function() {
    if ($p('top_nav_links')) {
        document.observe('click', function(event, el) {
            if (el = event.findElement('.leave_note_icon')) {
                var note_user = el.getAttribute("data-user");
                var note_login = el.getAttribute("data-login");
                if ($p('notes_hover_container').empty()) {
                    new Ajax.Updater('notes_hover_container', '/notes/hover', {
                        method: 'get',
                        evalScripts: true,
                        onComplete: function() {
                            leaveNoteHover(note_user, note_login);
                        }
                    });
                } else {
                    leaveNoteHover(note_user, note_login);
                }
            }
        });
        $$('.reply_link').each(function(link) {
            link.observe('click', function(event) {
                var reply_user = Event.element(event).getAttribute('data-login');
                $p('post_to').value = reply_user;
            });
        });
    }
});

function leaveNoteHover(id, login) {
    $$('#notes_hover_user').each(function(item) {
        item.innerHTML = login;
    });
    $$('.note_id').each(function(item) {
        item.value = id;
    });
    myLightbox.start('notes_hover');
}

function moveListFields(action, items_changed, left, right) {
    var fields_left = $p(left);
    var fields_right = $p(right);
    var movedFields = [];
    var source;
    var target;
    if (action == 'remove') {
        movedFields = findSelectedOptions(fields_left);
        source = left;
        target = right;
    } else {
        movedFields = findSelectedOptions(fields_right);
        source = right;
        target = left;
    }
    for (var i = 0; i < movedFields.length; i++) {
        var item = movedFields[i];
        moveOption(source, target, item);
    }
    var rightFields = $$('#' + right + ' option');
    var rightFieldNames = [];
    rightFields.each(function(field) {
        rightFieldNames.push(field.value);
    });
    $p(items_changed).value = Object.toJSON(rightFieldNames);
}

function findSelectedOptions(element) {
    var selectedOptions = [];
    var len = element.options.length;
    for (var i = 0; i < len; i++) {
        if (element.options[i].selected) {
            selectedOptions.push(element.options[i]);
        }
    }
    return selectedOptions;
}

function moveOption(source, target, item) {
    var groupName = item.parentNode.label;
    var group = $$('#' + target + ' .og_' + groupName)[0];
    var children = $p(group).getElementsByTagName('option');
    for (var i = 0; i < children.length; i++) {
        if (item.text < children[i].text) {
            group.insertBefore(item, children[i]);
            return;
        }
    }
    group.appendChild(item);
}

function showPostReport(id, containerId) {
    var cId = (typeof containerId == 'undefined') ? 'posts_show_middle' : containerId;
    var children = $p(cId).getElementsByClassName('post_data_pha');
    for (var i = 0; i < children.length; i++) {
        children[i].hide();
    }
    $p(id).show();
}

function form_submitting(id, form_id) {
    var frm = $p('lightbox').getElementsByClassName(id + form_id)[0];
    var green_button = frm.getElementsBySelector('[id=smgr_button' + form_id + ']')[0];
    green_button.replace('<b>Submitting</b> <span><img src="/RoR/images/wait_arrows.gif"></span>');
    return true;
}

function refreshAds() {
    var ord = Math.round(Math.random() * 10000000000000000);
    var page_id = "pageid=" + ord;
    var ord_param = "ord=" + ord;
    var re = /dart_ad\.htm/;
    if (current = document.getElementById('ad_leader')) {
        if (re.test(current.src)) {
            current.src = current.src.replace(/ord=\d+/, ord_param);
        } else {
            current.src = current.src.replace(/pageid=\d+/, page_id);
        }
    }
    if (current = document.getElementById('ad_skyscraper')) {
        if (re.test(current.src)) {
            current.src = current.src.replace(/ord=\d+/, ord_param);
        } else {
            current.src = current.src.replace(/pageid=\d+/, page_id);
        }
    }
    if (current = document.getElementById('ad_square')) {
        if (re.test(current.src)) {
            current.src = current.src.replace(/ord=\d+/, ord_param);
        } else {
            current.src = current.src.replace(/pageid=\d+/, page_id);
        }
    }
}
String.prototype.escapeHTML = function() {
    return (this.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/"/g, '&quot;'));
};

function toggle_disable(id, disable) {
    $p(id).disabled = disable;
}

function set_default_message(id, message) {
    obj = $p(id);
    if (obj.value == '') {
        obj.value = message;
        obj.setStyle({
            color: '#d9d9d9'
        });
    }
}

function clear_default_message(id, message) {
    obj = $p(id);
    if (obj.value == message) {
        obj.value = '';
        obj.setStyle({
            color: '#333'
        });
    }
}

function show_relative_name(prefix_id, container_id) {
    if ($p(container_id + prefix_id + 'relative_id').value == "0") {
        $p(container_id).getElementsBySelector('.rel_name')[0].show();
    } else {
        $p(container_id).getElementsBySelector('.rel_name')[0].hide();
    }
    return false;
}

function handle_conditions(parent_div, sub_div, handle_tags) {
    toggle_expander(sub_div, '');
    toggle_checkbox_false(parent_div, sub_div, handle_tags);
}

function toggle_checkbox_false(parent_div, sub_div, handle_tags) {
    if ($p(parent_div).checked == false) {
        var f = $$('div#' + sub_div + ' input');
        for (var i = 0; i < f.length; i++) {
            f[i].checked = false;
            if (handle_tags) {
                delete_tag(1, f[i].value);
            }
        }
    }
    return false;
}

function toggle_expander(section, names) {
    if ($p(section).style.display == "none") {
        $p(section).show();
        if ($p(section + '_arrow')) {
            $p(section + '_arrow').className = 'expand_up';
            if (names.length > 0) {
                $p(section + '_arrow').innerHTML = names[1];
            }
        }
    } else {
        $p(section).hide();
        if ($p(section + '_arrow')) {
            $p(section + '_arrow').className = 'expand_down';
            if (names.length > 0) {
                $p(section + '_arrow').innerHTML = names[0];
            }
        }
    }
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
    location.reload(true);
}
cookie_name = 'Preferences';

function delete_cookie() {
    var cookie_date = new Date();
    cookie_date.setTime(cookie_date.getTime() - 1);
    document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
    location.reload(true);
}

function hide() {
    document.getElementById('cover').style.display = "none";
    document.getElementById('loginpopup').style.display = "none";
    document.body.style.overflow = "auto";
}

function show() {
    document.getElementById('cover').style.display = "block";
    document.getElementById('loginpopup').style.display = "block";
    document.body.style.overflow = "hidden";
}
var current_lightbox;

function validate_email(email) {
    var emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return email.match(emailRegEx);
}

function emailThisPage(id) {
    Dialog.info($p(id).innerHTML, {
        className: "alphacube",
        width: 300,
        id: "emailThis",
        recenterAuto: false,
        showEffectOptions: {
            duration: 0
        },
        hideEffectOptions: {
            duration: 0
        },
        onShow: initEvent
    });
}

function contactUs(id) {
    Dialog.info($p(id).innerHTML, {
        className: "alphacube",
        width: 350,
        id: "contactUs",
        recenterAuto: false,
        showEffectOptions: {
            duration: 0
        },
        hideEffectOptions: {
            duration: 0
        },
        onShow: initEvent
    });
}

function initEvent() {
    Event.observe("overlay_modal", "click", function() {
        Windows.closeAllModalWindows();
    });
}

function update_tag_fields(uid) {
    tag_sub_element(uid, 'hidden_tag_list').value = tags[uid].join(",");
    tag_sub_element(uid, 'tag_list').innerHTML = tags[uid].collect(function(t) {
        return '<div class="tag"><span>' + t.escapeHTML() + '</span><a title="Delete tag" class="mh-icon" onclick="delete_tag(' + uid + ', \'' + t.escapeHTML().gsub(/'/, "\\'") + '\')"></a></div>';
    }).join(" ");
}

function tag_sub_element(uid, element_class) {
    return $$('.tag_controls_' + uid + ' .' + element_class)[0];
}

function add_tag(uid, tag_name) {
    tag_name = tag_name.replace(/^\s+|\s+$/g, "");
    tag_names = tags[1].map(function(name) {
        return name.toLowerCase();
    });
    if (tag_name.length > 0 && !tag_names.include(tag_name.toLowerCase())) {
        tags[uid].push(tag_name);
        update_tag_fields(uid);
    }
    return false;
}

function toggle_tag_from_checkbox(uid) {
    tag_name_element = tag_sub_element(uid, 'chk_bx');
    tag_name = tag_name_element.value;
    if (tag_name_element.checked == true) {
        add_tag(1, tag_name);
    } else {
        delete_tag(1, tag_name);
    }
    return false;
}

function add_tag_from_input(uid) {
    tag_name_element = tag_sub_element(uid, 'tag_name');
    tag_name = tag_name_element.value;
    add_tag(uid, tag_name);
    tag_name_element.value = '';
    return false;
}

function delete_tag(uid, deleted_tag) {
    tags[uid] = tags[uid].without(deleted_tag);
    update_tag_fields(uid);
}

function imgOver(id, position) {
    document.getElementById(id).style.backgroundPosition = position;
}

function imgOut(id) {
    document.getElementById(id).style.backgroundPosition = "0px 0px";
}

function confirmDelete(id) {
    Dialog.info($p(id).innerHTML, {
        className: "alert",
        width: 320,
        id: "confirmMsg",
        recenterAuto: false,
        showEffectOptions: {
            duration: 0
        },
        hideEffectOptions: {
            duration: 0
        }
    });
}

function HoverArray() {
    this.event_handler = function(event) {
        var sub_nav_menu = this[$A(arguments)[1]];
        if (typeof(sub_nav_menu) !== 'undefined') {
            sub_nav_menu.toggle_hover(event);
        }
    };
    this.hoverize_link = function(link_id, hover_name) {
        Event.observe(link_id, 'mouseout', this.event_handler.bindAsEventListener(this, hover_name));
        Event.observe(link_id, 'mousemove', this.event_handler.bindAsEventListener(this, hover_name));
    };
    this.hoverize_link_onclick = function(link_id, hover_name) {
        Event.observe(link_id, 'mouseout', this.event_handler.bindAsEventListener(this, hover_name));
        Event.observe(link_id, 'click', this.event_handler.bindAsEventListener(this, hover_name));
    };
    this.late_bind_link = function(hover_name) {
        return this.event_handler.bindAsEventListener(this, hover_name);
    };
}
HoverArray.prototype = new Array();
var hover_boxes = new HoverArray();

function HoverBox(hover_name, position_cb, options) {
    options = options || {};
    this.link_tid = null;
    this.link_hid = null;
    this.current_hover_id = null;
    this.hover_name = hover_name;
    this.hover_box_id = hover_name + "_hover_box";
    this.immediate = options.immediate;
    this.immediate_show_only = options.immediate_show_only;
    this.populator_map = options.populator_map;
    this.hide_timer = options.hide_timer;
    this.is_background_hover = options.is_background_hover;
    this.hide_background_hover = options.hide_background_hover;
    this.parent_background = options.parent_background;
    this.after_hide = options.after_hide;
    this.after_show = options.after_show;
    this.hover_shell = options.hover_shell
    this.current_link_id = "";
    this.hover_box = null;
    this.hovers_html = {};
    this.hovers_inputs = new Hash();
    this.hide_hover = function() {
        this.hide_tid = null;
        current_hover_id = this.current_hover_id;
        if (current_hover_id) {
            if (!this.is_background_hover || this.hide_background_hover) {
                Element.hide($p(this.hover_box_id));
                this.current_hover_id = null;
            }
            if (this.parent_background) {
                this.parent_background.hide_background_hover = true;
            }
        }
        showSelectBoxes();
        showFlash();
        if (this.after_hide) {
            this.after_hide(current_hover_id);
        }
    };
    this.position_hover = position_cb || function(hover_box, parent_box) {
        Position.clone(parent_box, hover_box, {
            setHeight: false,
            setWidth: false,
            offsetTop: 22,
            offsetLeft: 0
        });
    };
    this.show_hover = function(id, parent_id) {
        if (this.hide_tid) {
            clearTimeout(this.hide_tid);
            this.hide_tid = null;
        }
        var hover_box = $p(this.hover_box_id);
        if (id == this.current_hover_id && hover_box.visible()) {
            return;
        }
        this.link_tid = null;
        this.current_hover_id = id;
        if (this.is_background_hover) {
            this.hide_background_hover = true;
        }
        if (this.parent_background) {
            this.parent_background.hide_background_hover = false;
        }
        hover_box.show();
        this.position_hover(hover_box, $p(parent_id));
        if (this.populator_map) {
            this.populate(parent_id, hover_box);
        } else {
            hover_box.innerHTML = $p(this.current_hover_id).innerHTML;
        }
        instrumentZones(hover_box.select(".click_zone"));
        hideSelectBoxes();
        hideFlash();
        if (this.after_show) {
            this.after_show(id);
        }
    };
    this.populate_success = function() {
        var hover_box = this;
        return function(transport) {
            var url = transport.request.url
            hover_box.hovers_html[url] = transport.responseText;
            if (url == hover_box.current_hover_url) {
                hover_box.update_shell(hover_box.hover_box, transport.responseText);
                setTimeout(function() {
                    transport.responseText.evalScripts();
                }, 10);
            }
        };
    }
    this.populate = function(link_id, hover_box) {
        if (this.current_hover_url) {
            this.hovers_html[this.current_hover_url] = this.get_shell_html(this.hover_box);
            this.hovers_inputs.set(this.current_hover_url, this.get_shell_inputs(this.hover_box));
        }
        this.current_hover_url = this.populator_map(link_id);
        this.current_link_id = link_id;
        this.hover_box = hover_box;
        if (this.hover_shell) {
            hover_box.innerHTML = $p(this.hover_shell).innerHTML;
            hover_box.show();
        }
        if (this.hovers_html[this.current_hover_url]) {
            this.update_shell(this.hover_box, this.hovers_html[this.current_hover_url]);
        } else {
            new Ajax.Request(this.current_hover_url, {
                method: 'get',
                onSuccess: this.populate_success()
            });
        }
    }
    this.get_shell_html = function(hover_box) {
        var replaceable = hover_box.down(".replaceable");
        if (replaceable) {
            return hover_box.down(".replaceable").innerHTML;
        } else {
            return hover_box.innerHTML;
        }
    }
    this.update_shell = function(hover_box, html) {
        var replaceable = hover_box.down(".replaceable");
        if (replaceable) {
            hover_box.down(".replaceable").innerHTML = html;
        } else {
            hover_box.innerHTML = html;
        }
        html.evalScripts();
        if (this.hovers_inputs.get(this.current_hover_url)) {
            this.hovers_inputs.get(this.current_hover_url).each(function(pair) {
                if ($p(pair.key).type == 'checkbox') {
                    $p(pair.key).checked = pair.value;
                } else {
                    $p(pair.key).value = pair.value;
                }
            });
        }
    }
    this.get_shell_inputs = function(hover_box) {
        var current_inputs = new Hash();
        hover_box.getElementsBySelector('input[type="text"]').each(function(element) {
            current_inputs.set(element.id, element.value);
        });
        hover_box.getElementsBySelector('input[type="checkbox"]').each(function(element) {
            current_inputs.set(element.id, element.checked);
        });
        return current_inputs;
    }
    this.clear_timers = function() {
        if (this.hide_tid) {
            clearTimeout(this.hide_tid);
            this.hide_tid = null;
        }
        if (this.link_tid) {
            clearTimeout(this.link_tid);
            this.link_tid = null;
        }
    };
    this.manage_hover = function(event) {
        this.clear_timers();
        if (event.type == "mouseout") {
            if (this.current_hover_id) {
                this.hide_tid = setTimeout("hover_boxes['" + this.hover_name + "'].hide_hover()", this.hide_timer || 200);
            }
        }
    };
    this.toggle_hover = function(event) {
        element = Event.element(event);
        while (element != null && element.id == "") {
            element = element.parentNode;
        }
        hover_box_id = "hb_" + element.id;
        if (event.type == "mouseout") {
            this.clear_timers();
            if (this.current_hover_id) {
                if (this.immediate) {
                    this.hide_hover();
                } else {
                    this.hide_tid = setTimeout("hover_boxes['" + this.hover_name + "'].hide_hover()", this.hide_timer || 400);
                }
            }
        } else if (event.type == "click") {
            if (this.link_tid) {
                clearTimeout(this.link_tid);
            }
            this.show_hover(hover_box_id, element.id);
        } else if (event.type == "mousemove") {
            if (this.link_tid) {
                clearTimeout(this.link_tid);
            }
            if (this.immediate || this.immediate_show_only)
                this.show_hover(hover_box_id, element.id);
            else
                this.link_tid = setTimeout("hover_boxes['" + this.hover_name + "'].show_hover('" + hover_box_id + "','" + element.id + "')", 200);
        }
    };
    hover_boxes[hover_name] = this;
    document.write("<div id='" + this.hover_box_id + "' style='display:none'></div>");
    if (!options.not_sticky) {
        Event.observe(this.hover_box_id, 'mouseover', this.manage_hover.bindAsEventListener(this));
        Event.observe(this.hover_box_id, 'mouseout', this.manage_hover.bindAsEventListener(this));
    }
    return true;
}

function position_up_hover(hover_element, parent_element) {
    offsetLeft = (Position.cumulativeOffset(parent_element)[0] > 500) ? -300 : 55;
    Position.clone(parent_element, hover_element, {
        setHeight: false,
        setWidth: false,
        offsetTop: 25,
        offsetLeft: offsetLeft
    });
}

function position_member_rating_hover(hover_element, parent_element) {
    offsetLeft = (Position.cumulativeOffset(parent_element)[0] > 500) ? -50 : 55;
    Position.clone(parent_element, hover_element, {
        setHeight: false,
        setWidth: false,
        offsetTop: 25,
        offsetLeft: offsetLeft
    });
}

function position_help_hover(hover_element, parent_element) {
    Position.clone(parent_element, hover_element, {
        setHeight: false,
        setWidth: false,
        offsetTop: 20,
        offsetLeft: 10
    });
}

function position_privacy_hover(hover_element, parent_element) {
    Position.clone(parent_element, hover_element, {
        setHeight: false,
        setWidth: false,
        offsetTop: 17,
        offsetLeft: 0
    });
}

function position_settings_hover(hover_element, parent_element) {
    Position.clone(parent_element, hover_element, {
        setHeight: false,
        setWidth: false,
        offsetTop: 10,
        offsetLeft: -40
    });
}

function position_sub_nav_hover(hover_element, parent_element) {
    Position.clone(parent_element, hover_element, {
        setHeight: false,
        setWidth: false,
        offsetTop: 52,
        offsetLeft: 0
    });
}

function text_on_blur(object, text) {
    if (object.value == '') {
        object.value = text;
        object.style.color = '#999';
    }
}

function text_on_focus(object, text) {
    if (object.value == text) {
        object.value = '';
        object.style.color = '#333333';
    }
}
slideBoxes = new Hash();

function SlideBox(box, containerBox, hide_flash, effect, duration) {
    this.box = box;
    this.hide_tid = null;
    this.show_tid = null;
    this.visible = false;
    this.hide_flash = hide_flash;
    this.effect = (typeof(effect) != "undefined" ? effect : 'blind');
    this.duration = (typeof(duration) != "undefined" ? duration : 0.5);
    this.toggle_slide = function(event) {
        if (event.type == "mouseout") {
            this.clear_timers();
            this.hide_tid = setTimeout("slideBoxes['" + this.box.id + "'].hide()", 300);
        } else {
            this.clear_timers();
            this.show_tid = setTimeout("slideBoxes['" + this.box.id + "'].show()", 100);
        }
    };
    this.show = function() {
        show_tid = null;
        this.clear_timers();
        if (this.visible) return;
        if (this.hide_flash) {
            hideFlash();
        }
        hideSelectBoxes();
        if (effect == 'fade') {
            Effect.Appear(this.box, {
                duration: this.duration
            });
        } else {
            Effect.BlindDown(this.box, {
                duration: this.duration
            });
        }
        this.visible = true;
    };
    this.hide = function() {
        hide_tid = null;
        this.clear_timers();
        if (!this.visible) return;
        if (effect == 'fade') {
            Effect.Fade(this.box, {
                duration: this.duration
            });
        } else {
            Effect.BlindUp(this.box, {
                duration: this.duration
            });
        }
        if (this.hide_flash) {
            showFlash();
        }
        showSelectBoxes();
        this.visible = false;
    };
    this.clear_timers = function() {
        if (this.hide_tid) {
            clearTimeout(this.hide_tid);
            this.hide_tid = null;
        }
        if (this.show_tid) {
            clearTimeout(this.show_tid);
            this.show_tid = null;
        }
    };
    Event.observe(containerBox.id, 'mouseover', this.toggle_slide.bindAsEventListener(this));
    Event.observe(containerBox.id, 'mouseout', this.toggle_slide.bindAsEventListener(this));
    slideBoxes[box.id] = this;
}

function more_less(what) {
    [what + '_more', what + '_less'].each(Element.toggle);
    Effect.toggle(what + '_content', 'blind', {
        duration: 0.3
    });
}

function setFontSize(size) {
    var universe = $p('universe');
    var newClassName = "fontsizer_" + size;
    universe.removeClassName('fontsizer_small');
    universe.removeClassName('fontsizer_medium');
    universe.removeClassName('fontsizer_large');
    universe.addClassName(newClassName);
    createCookie('font_size', size);
    var sizes = ['small', 'medium', 'large'];
    for (var i = 0; i < 3; i++) {
        fsElement = $p('font_sizer_' + sizes[i] + '_link');
        fsElement.removeClassName('font_sizer_' + sizes[i] + '_link');
        fsElement.removeClassName('font_sizer_' + sizes[i] + '_link_selected');
        if (sizes[i] == size) {
            fsElement.addClassName('font_sizer_' + sizes[i] + '_link_selected');
        } else {
            fsElement.addClassName('font_sizer_' + sizes[i] + '_link');
        }
    }
}

function createCookie(name, value, expiry) {
    var expiry_time = typeof(expiry) != 'undefined' ? expiry * 1000 : (30 * 24 * 60 * 60 * 1000);
    var date = new Date();
    date.setTime(date.getTime() + expiry_time);
    var expires = "; expires=" + date.toGMTString();
    document.cookie = name + "=" + value + expires + "; path=/";
}

function TutorialLightBox(config, form_layout, user_tracker_after_render_cb) {
    this.config = config;
    this.page = -1;
    this.form_layout = form_layout;
    if (user_tracker_after_render_cb == null) {
        this.after_render_cb = function() {};
    } else {
        this.after_render_cb = user_tracker_after_render_cb;
    }
    this.tutorialLightbox = null;
    this.start = function() {
        hideFlash();
        if ((typeof myLightbox) == 'undefined') {
            initLightbox();
        }
        this.tutorialLightbox = myLightbox;
        this.tutorialLightbox.start(this.form_layout, 0.2);
        this.page = -1;
        this.next();
    };
    this.close = function() {
        this.tutorialLightbox.end();
        showFlash();
    };
    this.next = function() {
        this.page = this.page + 1;
        this.render();
    };
    this.prev = function() {
        this.page = this.page - 1;
        this.render();
    };
    this.render = function() {
        if (this.page == 0) {
            Element.hide('tutorial_b');
        } else {
            Element.show('tutorial_b');
        }
        if (this.page == this.config.length - 1) {
            Element.hide('tutorial_n');
        } else {
            Element.show('tutorial_n');
        }
        $p('tutorial_text').innerHTML = $p(this.config[this.page][1]).innerHTML;
        $p('gen_tutorial').setStyle({
            'left': '0px',
            'top': '0px',
            'position': 'static'
        });
        if (this.config[this.page][2] == 'R') {
            $p('lightbox').style.width = '0px';
            $p('gen_tutorial').style.marginLeft = '0px';
            $p('gen_tutorial').style.marginRight = '0px';
            width = $p('gen_tutorial').getWidth();
            targetElement = $p(this.config[this.page][0]);
            heightOffset = targetElement.getHeight() / 2;
            Position.clone($p(this.config[this.page][0]), $p('lightbox'), {
                setHeight: false,
                setWidth: false,
                offsetTop: this.config[this.page][4] - 13 - heightOffset,
                offsetLeft: -width + this.config[this.page][3]
            });
            Position.clone($p(this.config[this.page][0]), $p('trk_tut_bx_r_arr'), {
                setHeight: false,
                setWidth: false,
                offsetTop: this.config[this.page][4] - heightOffset,
                offsetLeft: -3 + this.config[this.page][3]
            });
            Element.show('trk_tut_bx_r_arr');
            Element.hide('trk_tut_bx_t_arr');
            new Effect.ScrollTo(this.config[this.page][0], {
                offset: -100 + this.config[this.page][4] - 13 - heightOffset
            });
        } else if (this.config[this.page][2] == 'L') {
            $p('lightbox').style.width = '0px';
            $p('gen_tutorial').style.marginLeft = '0px';
            $p('gen_tutorial').style.marginRight = '0px';
            targetElement = $p(this.config[this.page][0]);
            heightOffset = targetElement.getHeight() / 2;
            Position.clone($p(this.config[this.page][0]), $p('lightbox'), {
                setHeight: false,
                setWidth: false,
                offsetTop: this.config[this.page][4] - 13 - heightOffset,
                offsetLeft: 20 + this.config[this.page][3]
            });
            Position.clone($p(this.config[this.page][0]), $p('trk_tut_bx_t_arr'), {
                setHeight: false,
                setWidth: false,
                offsetTop: this.config[this.page][4] - heightOffset,
                offsetLeft: -7 + this.config[this.page][3]
            });
            Element.show('trk_tut_bx_t_arr');
            Element.hide('trk_tut_bx_r_arr');
            new Effect.ScrollTo(this.config[this.page][0], {
                offset: -100 + this.config[this.page][4] - 13 - heightOffset
            });
        } else if (this.config[this.page][2] == 'T') {
            $p('lightbox').style.width = '0px';
            $p('gen_tutorial').style.marginLeft = '0px';
            $p('gen_tutorial').style.marginRight = '0px';
            height = $p(this.config[this.page][0]).getHeight();
            Position.clone($p(this.config[this.page][0]), $p('lightbox'), {
                setHeight: false,
                setWidth: false,
                offsetTop: this.config[this.page][4] + height,
                offsetLeft: this.config[this.page][3]
            });
            Position.clone($p(this.config[this.page][0]), $p('trk_tut_bx_t_arr'), {
                setHeight: false,
                setWidth: false,
                offsetTop: this.config[this.page][4] + height - 16,
                offsetLeft: this.config[this.page][3]
            });
            Element.hide('trk_tut_bx_r_arr');
            Element.show('trk_tut_bx_t_arr');
            new Effect.ScrollTo(this.config[this.page][0], {
                offset: -100 + this.config[this.page][4]
            });
        } else {
            $p('gen_tutorial').style.marginLeft = 'auto';
            $p('gen_tutorial').style.marginRight = 'auto';
            Position.clone($p(this.config[this.page][0]), $p('lightbox'), {
                setHeight: false,
                setWidth: false,
                offsetTop: 0,
                offsetLeft: 0
            });
            $p('lightbox').style.left = '0px';
            $p('lightbox').style.width = '100%';
            Element.hide('trk_tut_bx_r_arr');
            Element.hide('trk_tut_bx_t_arr');
            new Effect.ScrollTo(this.config[this.page][0], {
                offset: -100
            });
        }
        this.after_render_cb();
    };
}

function default_after_render_cb(lb) {
    if (this.page == this.config.length - 1) {
        Element.show('tutorial_n');
        $p('tutorial_n').getElementsBySelector('.btn_r_txt')[0].innerHTML = 'Done';
        $p('tutorial_n').href = "javascript:myLightbox.end();";
    } else {
        $p('tutorial_n').getElementsBySelector('.btn_r_txt')[0].innerHTML = 'Next';
        $p('tutorial_n').href = "javascript:tutorial_lb.next();";
    }
}

function trim(val) {
    return val.replace(/^\s+|\s+$/g, "");
}

function validate_field_length(field_id, length, disabled_text_id) {
    disabled_text_element = typeof(disabled_text_id) != 'undefined' ? $p(disabled_text_id) : $p('disabled_text');
    if ($p(field_id).value.length > length) {
        disabled_text_element.show();
        return false;
    } else {
        disabled_text_element.hide();
        return true;
    }
}

function toggle_more_text(obj, show_less) {
    if (show_less) {
        Element.show(obj + '_less');
        Element.hide(obj + '_more');
    } else {
        Element.show(obj + '_more');
        Element.hide(obj + '_less');
    }
}

function blind_more_text(obj, show_less) {
    if (show_less) {
        Element.hide(obj + '_more');
        Element.show(obj + '_less');
        new Effect.BlindDown(obj + '_text');
    } else {
        new Effect.BlindUp(obj + '_text');
        Element.hide(obj + '_less');
        Element.show(obj + '_more');
    }
}

function enableScripts(name) {
    eval("magic" + name + "RunScripts = true;");
}

function disableScripts(name) {
    eval("magic" + name + "RunScripts = false;");
}

function toggleDateSelect(idPrefix, disable) {
    var date_items = ["1i", "2i", "3i"];
    for (var index = 0; index < date_items.length; ++index) {
        $p(idPrefix + date_items[index]).disabled = disable;
        $p(idPrefix + date_items[index]).value = "";
    }
}

function clear_fields(field_id) {
    $p(field_id).value = '';
}

function strike_through_toggle(id) {
    var elem = $p(id);
    if (elem.style.textDecoration == 'line-through') {
        elem.style.textDecoration = 'none';
    } else {
        elem.style.textDecoration = 'line-through';
    }
}

function characterLimiter(divToLimit, characterLimit) {
    $p(divToLimit + '_counter').innerHTML = characterLimit;
    Event.observe(divToLimit, "keyup", updateCharacterLimiter);
    var watchElement = function() {
        interval = window.setInterval(function() {
            updateCharacterLimiter();
        }, 500);
    };
    var unwatchElement = function() {
        clearInterval(interval);
    };
    Event.observe(divToLimit, 'focus', watchElement);
    Event.observe(divToLimit, 'blur', unwatchElement);

    function updateCharacterLimiter(event) {
        var target = $p(divToLimit);
        var length = target.value.length;
        var divToLimitCounter = $p(divToLimit + '_counter');
        if (length < characterLimit) {
            divToLimitCounter.innerHTML = characterLimit - length;
            divToLimitCounter.addClassName('char_limit_safe');
            divToLimitCounter.removeClassName('char_limit_unsafe');
            return true;
        } else if (length == characterLimit) {
            divToLimitCounter.innerHTML = 0;
            divToLimitCounter.addClassName('char_limit_unsafe');
            divToLimitCounter.removeClassName('char_limit_safe');
        } else {
            target.value = target.value.substring(0, characterLimit);
            divToLimitCounter.innerHTML = 0;
            divToLimitCounter.addClassName('char_limit_unsafe');
            divToLimitCounter.removeClassName('char_limit_safe');
            return false;
        }
    }
}

function shouldAutoScrollDown(objDiv) {
    return (objDiv.scrollHeight - objDiv.getHeight() - 10) <= objDiv.scrollTop;
}
var PeriodicUpdater = Class.create({
    initialize: function(divToUpdate, interval, file, params, options) {
        this.divToUpdate = divToUpdate;
        this.interval = interval;
        this.file = file;
        this.pendingRequest = false;
        this.pauseLockCount = 0;
        this.disabled = false;
        if (typeof(options) == 'undefined') {
            this.options = {};
        } else {
            this.options = options;
        }
        this.params = params;
        this.periodicExecuter = new PeriodicalExecuter(this.getUpdate.bind(this), this.interval);
    },
    onSuccess: function() {
        var updater = this;
        return function(transport) {
            if (transport.status != 0) {
                if (updater.pauseLockCount == 0) {
                    var objDiv = $p(updater.divToUpdate);
                    var updateScrollTop = false;
                    if (shouldAutoScrollDown(objDiv)) {
                        updateScrollTop = true;
                    }
                    if (updater.options['position'] == 'bottom') {
                        $p(updater.options['insert_position']).insert({
                            before: transport.responseText
                        });
                    } else {
                        $p(updater.divToUpdate).innerHTML = transport.responseText;
                        setTimeout(function() {
                            transport.responseText.evalScripts();
                        }, 10);
                    }
                    if (updateScrollTop) {
                        objDiv.scrollTop = objDiv.scrollHeight;
                    }
                }
            }
        };
    },
    onComplete: function() {
        var updater = this;
        return function(transport) {
            updater.pendingRequest = false;
        };
    },
    lock: function() {
        this.pauseLockCount += 1;
    },
    unlock: function() {
        this.pauseLockCount -= 1;
    },
    stop: function() {
        this.periodicExecuter.stop();
    },
    updateInterval: function(interval) {
        if (interval != this.interval) {
            this.periodicExecuter.stop();
            this.interval = interval
            this.periodicExecuter = new PeriodicalExecuter(this.getUpdate.bind(this), interval);
        }
    },
    setParams: function(params) {
        this.params = params;
    },
    getUpdate: function() {
        if (!this.pendingRequest) {
            this.pendingRequest = true;
            new Ajax.Request(this.file, {
                method: 'post',
                parameters: this.params,
                onSuccess: this.onSuccess(),
                onComplete: this.onComplete()
            });
        }
    }
});

function display_txt_fld_list(keywords, value, fld) {
    var suggested_choices = [];
    keywords.each(function(k) {
        if (k.toLowerCase().startsWith(value.toLowerCase()) && value.length >= 1) {
            suggested_choices.push(k);
        }
    });
    formatted_choices = format_choices(suggested_choices);
    return formatted_choices;
};

function format_choices(choices) {
    text = '';
    text += '<ul>';
    choices.each(function(c) {
        text += '<li>' + c + '</li>';
    });
    return text += '</ul>';
};
Ajax.RemoteAutocompleter = Class.create(Autocompleter.Base, {
    initialize: function(element, update, options) {
        this.baseInitialize(element, update, options);
        this.choices = options.choices;
    },
    getUpdatedChoices: function() {
        choices = display_txt_fld_list(this.choices, this.getToken(), 'to');
        this.updateChoices(choices);
    }
});

function privacy_manager_set_privacy(id, value, privacy_manager_id, table_name) {
    hover_boxes['privacy'].hide_hover();
    pm_box = $p(privacy_manager_id);
    pm_box.className = 'privacy_manager_box';
    $p('pm_' + privacy_manager_id + '_pro_ind').show();
    var privacyManagerSetPrivacyonComplete = function(id) {
        var _hb_id = 'hb_' + id;
        var _id = id;
        return function(transport) {
            $p(_hb_id).innerHTML = transport.responseText;
            setTimeout(function() {
                transport.responseText.evalScripts();
            }, 10);
        };
    };
    var params = {
        id: id
    };
    params[table_name + "[view_privacy_setting]"] = value;
    new Ajax.Request('/' + table_name + '/set_privacy', {
        method: 'post',
        parameters: params,
        onComplete: privacyManagerSetPrivacyonComplete(privacy_manager_id)
    });
};

function privacy_manager_update(id, icon_class) {
    pm_box = $p(id);
    pm_box.addClassName('icon_link_img_std');
    $p('pm_' + id + '_pro_ind').hide();
    pm_box.addClassName(icon_class);
};

function clear_announcement(key, value, expiry) {
    createCookie(key, value, expiry);
    $p('ann_panel').hide();
    return false;
};

function setDateSelectValue(event) {
    var divId = event.element().id.gsub(/(.*)_.*/, '#{1}');
    var day = $p(divId + '_day').value;
    var month = $p(divId + '_month').value;
    var year = $p(divId + '_year').value;
    if (day != "" && month != "" && year != "") {
        $p(divId).value = [year, month, day].join("-");
    } else {
        $p(divId).value = "";
    }
}

function isNumeric(string) {
    return (parseFloat(string) == string);
}

function isInteger(string) {
    return (string.match(/^\d+$/) !== null);
}

function processPartialNumerical(textField) {
    if (textField.value.endsWith(".")) {
        if (textField.value == ".") {
            textField.value = "0.";
        }
        return true;
    }
    if (!isNumeric(textField.value)) {
        return false;
    }
    return true;
}

function userProfileHoverLinkToUrl(linkId) {
    var userId = linkId.split("_")[1];
    return "/user_profiles/hover/" + userId;
}

function updateAddictedToOthersTextBox(event) {
    var element = Event.element(event);
    if (element.value == 'Others') {
        $p('temp_other_tracker_setup_field_Addicted_to').disabled = !element.checked;
    }
}

function calculateAddictedToOther(event) {
    var addictions = [];
    var othersSelected = false;
    $p('edit_form').getElementsBySelector(".temp_chk_addicted_to").each(function(node) {
        if (node.checked) {
            if (node.value == 'Others') {
                othersSelected = true;
            } else {
                addictions.push(node.value);
            }
        }
    });
    normalized_names = addictions.map(function(name) {
        return name.toLowerCase();
    });
    if (othersSelected) {
        $p('temp_other_tracker_setup_field_Addicted_to').value.split(',').each(function(item) {
            value = item.replace(/^\s+|\s+$/g, "");
            if (value.length > 0) {
                if (!normalized_names.include(value.toLowerCase())) {
                    addictions.push(value);
                    normalized_names.push(value.toLowerCase());
                }
            }
        });
    }
    $p('tracker_setup_field_Addicted-to').value = addictions.join(",");
    return true;
}

function validate_email_fields() {
    var email_errors = new Array();
    if ($p("sender_name").value.length == 0) {
        email_errors.push("Your name");
    }
    if ($p("sender_email") && !validate_email($p("sender_email").value)) {
        email_errors.push("Your email");
    }
    if (!validate_email($p("recipient_email").value)) {
        email_errors.push("Friend's email");
    }
    if ($p("verification_code").value.length == 0) {
        email_errors.push("Code");
    }
    if (email_errors.length > 0) {
        var error_message = 'Invalid ';
        for (var index = 0; index < email_errors.length; ++index) {
            var item = email_errors[index];
            error_message += item;
            if (index != email_errors.length - 1)
                error_message += ', ';
        }
        $p('ef_errors').innerHTML = error_message;
        $p('ef_errors').show();
    } else {
        $p('ef_errors').hide();
        $p('ef_submit_btn').hide();
        $p('ef_submitting').show();
    }
    return email_errors.length == 0;
}

function saveUserData(userId, relativeId, timestamp, values, sourceId, sourceType, onSuccess) {
    var userData = new Hash(values);
    var timestampString = (timestamp.getFullYear()) + "/" + (timestamp.getMonth() + 1) + "/" + timestamp.getDate() + " " + timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds();
    var params = {
        'user_id': userId,
        'timestamp': timestampString,
        'source_id': sourceId,
        'source_type': sourceType
    };
    if (relativeId !== null) {
        params['relative_id'] = relativeId;
    }
    if (userData.size() === 0) {
        return;
    }
    userData.each(function(pair) {
        params["user_data[" + pair.key + "]"] = pair.value;
    }.bind(this));
    new Ajax.Request('/user_data/save', {
        method: 'post',
        parameters: params,
        onSuccess: function(transport) {
            var errors = transport.responseText.evalJSON();
            if (onSuccess !== null) {
                onSuccess(errors);
            }
        }
    });
}

function hideUserAppBridge(currentHoverId) {
    $$('.ads_disc_anchor, .ads_disc_lwr_square, .ads_disc_square').each(function(element) {
        if (!element.up('#user_app_selector_hover_box')) {
            element.show();
        }
    });
}

function showUserAppBridge(id) {
    $$('.ads_disc_anchor, .ads_disc_lwr_square, .ads_disc_square').each(function(element) {
        if (!element.up('#user_app_selector_hover_box')) {
            element.hide();
        }
    });
    var currentUserApp = $p(id.substring(3))
    $p("user_app_bridge").show();
    Position.clone(currentUserApp, $p("user_app_bridge"), {
        setHeight: false,
        setWidth: false,
        offsetTop: 0,
        offsetLeft: 152
    });
    currentUserApp.firstDescendant().className = "ual_row_hover";
    $$('.ual_user_app_box').each(function(element) {
        if (element.id != currentUserApp.id) {
            element.firstDescendant().className = "ual_row";
        }
    });
}

function openNewWindow(url) {
    popupWin = window.open(url, 'share_this', 'scrollbars=1, width=700, height=480, left=0, top=0');
}

function ObfuscatedLink(id, encodedUrl) {
    this.linkId = id;
    this.encodedUrl = encodedUrl;
    this.linkElement = $p(this.linkId);
    this.fillHref = function() {
        this.linkElement.href = decode64(this.encodedUrl);
    };
    this.linkElement.observe("mouseover", this.fillHref.bindAsEventListener(this));
};

function eventPointerOffset(event, referenceID) {
    var ctrPos = $p('universe').cumulativeOffset();
    var leftOffset = Event.pointerX(event) - ctrPos[0];
    var topOffset = Event.pointerY(event) - ctrPos[1];
    return ([leftOffset, topOffset]);
};
var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function encode64(input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }
        output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
    }
    return output.toString();
}

function decode64(input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output += (String.fromCharCode(chr1));
        if (enc3 != 64) {
            output += (String.fromCharCode(chr2));
        }
        if (enc4 != 64) {
            output += (String.fromCharCode(chr3));
        }
    }
    return output.toString();
}

function report_this_complete(id) {
    Element.hide(id + '_pro_ind');
    hover_boxes['report_abuse'].hide_hover();
    $p(id).style.display = 'none';
    $p('selected_' + id).style.display = '';
}
$usc = new Hash();
$horizontalScrollers = new Hash();

function HorizontalScroller(idPrefix, initialValue) {
    this.idPrefix = idPrefix;
    this.initialValue = initialValue;
    this.initPosition = 0;
    this.initTrackPos = 0;
    this.contentWidth = $p(this.idPrefix + '_content').getWidth();
    this.boxWidth = $p(this.idPrefix + '_scrollable').getWidth();
    var leftMax = this.contentWidth - this.boxWidth;
    var leftMin = 0;
    if (this.initialValue <= this.boxWidth / 2) {
        this.initPosition = leftMin;
        this.initTrackPos = 0;
    } else if (this.initialValue >= (this.contentWidth - this.boxWidth / 2)) {
        this.initPosition = leftMax;
        this.initTrackPos = 1;
    } else {
        this.initPosition = this.initialValue - this.boxWidth / 2;
        this.initTrackPos = (this.initialValue - this.boxWidth / 2) / (this.contentWidth - this.boxWidth);
    }
    var scrollBox = $p(this.idPrefix + '_content');
    scrollBox.setStyle({
        left: '-' + this.initPosition + 'px'
    });
    this.sliderChange = function(value) {
        var scrollBox = $p(this.idPrefix + '_content');
        var realValue = value * (this.contentWidth - this.boxWidth);
        scrollBox.setStyle({
            left: '-' + realValue + 'px'
        });
    };
    this.slider = new Control.Slider(this.idPrefix + '_handle', this.idPrefix + '_track', {
        sliderValue: this.initTrackPos,
        onSlide: function(value) {
            $horizontalScrollers.get(idPrefix).sliderChange(value);
        },
        onChange: function(value) {
            $horizontalScrollers.get(idPrefix).sliderChange(value);
        }
    });
    if (this.contentWidth <= this.boxWidth) {
        this.slider.setDisabled();
        $p(this.idPrefix + '_track').hide();
    }
    $horizontalScrollers.set(idPrefix, this);
};

function getIEVersion() {
    var version = 999;
    if (navigator.appVersion.indexOf("MSIE") != -1) {
        version = parseFloat(navigator.appVersion.split("MSIE")[1]);
    }
    return version;
};
var $wordWheels = new Hash();

function WordWheel(fieldId, keywords, wordwheelFunction, wordwheelOptions) {
    this.fieldId = fieldId;
    this.containerDiv = $p("ww_" + this.fieldId);
    this.resultsDiv = $p(this.fieldId + "_results");
    this.keywords = keywords;
    eval(wordwheelFunction).call(this, wordwheelOptions);
    $wordWheels.set(this.fieldId, this);
    this.matchKeywords = function(value) {
        var suggestedKeywords = [];
        value.split(' ').each(function(v) {
            Object.keys(this.keywords).each(function(k) {
                if (k.toLowerCase().startsWith(v.toLowerCase()) && v.length >= 3) {
                    suggestedKeywords.push(k);
                }
            });
        }.bind(this));
        suggestedKeywords.compact();
        var suggestions = [];
        suggestedKeywords.each(function(keyword) {
            suggestions = suggestions.concat(this.keywords[keyword]).uniq();
        }.bind(this));
        this.onMatch(suggestions);
    };
    new Form.Element.Observer(fieldId, 0.3, function(element, value) {
        $wordWheels.get(element.id).matchKeywords(value);
    });
    this.clearField = function() {
        $p(this.fieldId).value = "";
        $p(this.fieldId).focus();
    };
    this.reset = function() {
        this.clearField();
        this.resultsDiv.hide();
    };
    var clearControl = this.containerDiv.select(".text_field_drop_down_clear")[0];
    if (typeof(clearControl) != "undefined") {
        clearControl.observe("click", this.clearField.bindAsEventListener(this));
    }
};

function HealthToolsWordwheel(wordwheelOptions) {
    this.keywordsInfo = wordwheelOptions['keywords_info'];
    this.onMatch = function(suggestions) {
        var suggested_trackers = [];
        var tracker_ids = suggestions;
        tracker_ids.each(function(id) {
            var newTracker = new Hash();
            newTracker.set('id', id);
            newTracker.set('name', this.keywordsInfo[id]['name']);
            newTracker.set('url', this.keywordsInfo[id]['url']);
            newTracker.set('icon_name', this.keywordsInfo[id]['icon_name']);
            newTracker.set('description', this.keywordsInfo[id]['description']);
            suggested_trackers.push(newTracker);
        }.bind(this));
        if (suggested_trackers.size() > 0) {
            suggested_trackers = suggested_trackers.sortBy(function(s) {
                return s.get('name')
            });
            $p('apps_filter_results').innerHTML = this.updateTrackersFilter(suggested_trackers);
            $p('apps_filter_results').show();
        } else {
            $p('apps_filter_results').hide();
        }
    };
    this.updateTrackersFilter = function(trackers) {
        var size = trackers.size();
        var results = '';
        var count = 1;
        results = "<div class='filter'>";
        trackers.each(function(tracker) {
            results += "<div class='trk_fil_elmt";
            if (count !== size) {
                results += " spacer";
            }
            results += "'>";
            results += "<div class='trk_icon'>";
            results += "<div class='jumbo_icon " + tracker.get('icon_name') + "_jumbo_icon'><img src='/RoR/images/blank.png'></div>";
            results += "</div>";
            results += "<div class='trk_info'>";
            results += "<div class='trk_name'>";
            results += "<a href='" + tracker.get('url') + "'>" + tracker.get('name') + "</a>";
            results += "</div>";
            results += "<div class='trk_desc'>" + tracker.get('description') + "</div>";
            results += "</div>";
            results += "</div>";
            count += 1;
        });
        results += '</div>';
        return results;
    };
};

function startSeoEditor() {
    if ((typeof myLightbox) == 'undefined') {
        initLightbox();
    }
    myLightbox.start('seo_edit');
    return false;
}

function MyRating(myRating) {
    this.myRating = myRating;
    var self = this;
    $j('#ratings_hover .icon_link_img_n').on('mouseover', function() {
        self.updateMyRating($j(this));
    }).on('mouseout', function() {
        self.undoMyRating();
    });
    $j('.my_star_rating').on('click', function() {
        $j('#ratings_hover #sr_pro_ind').show();
    });
    this.updateMyRating = function(element) {
        var val = element.attr('id').split('_').last();
        this.updateRating(val);
    }
    this.undoMyRating = function() {
        this.updateRating(this.myRating);
    }
    this.updateRating = function(val) {
        for (var i = 1; i <= 5; i++) {
            if (val >= i) {
                $j('#my_sr_' + i).removeClass('star_uns').addClass('star_s');
            } else {
                $j('#my_sr_' + i).removeClass('star_s').addClass('star_uns');
            }
        }
    }
    this.rateComplete = function(val) {
        $j('#sr_pro_ind').hide();
        this.updateRating(val);
        this.myRating = val;
        $j('#ratings_hover').hide();
    }
}

function showUnitEditting() {
    $j('#screen_cover').remove();
    $j('#floating_box').remove();
    $j('body').append("<div id='screen_cover'></div>");
    $j('#universe').append("<div id='floating_box'></div>");
    $j('#floating_box').html($j('#unit_setting_template').html());
    $j('#floating_box').css('margin-left', '-' + $j('#floating_box').width() / 2 + 'px').css('top', '50px');
    $j('#floating_box .preferences_setting .select_button .option').each(function() {
        $j(this).on('click', function() {
            $j(this).parent().children().removeClass('on').addClass('off');
            $j(this).removeClass('off').addClass('on');
            $j(this).parents('.unit_set').find('input').val($j(this).data('value'));
        });
    });
    $j('#floating_box .preferences_setting .save_btn').one('click', function() {
        $j('#floating_box .preferences_setting form').submit();
        return false;
    });
    $j('#floating_box .preferences_setting .cancel_btn, #floating_box .preferences_setting .close_btn').on('click', function() {
        $j('#floating_box').remove();
        $j('#screen_cover').remove();
    });
    $j('body').scrollTop(0);
}
(function(a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cv(a) {
        if (!ck[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                cl || (cl = c.createElement("iframe"), cl.frameBorder = cl.width = cl.height = 0), b.appendChild(cl);
                if (!cm || !cl.createElement) cm = (cl.contentWindow || cl.contentDocument).document, cm.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), cm.close();
                d = cm.createElement(a), cm.body.appendChild(d), e = f.css(d, "display"), b.removeChild(cl)
            }
            ck[a] = e
        }
        return ck[a]
    }

    function cu(a, b) {
        var c = {};
        f.each(cq.concat.apply([], cq.slice(0, b)), function() {
            c[this] = a
        });
        return c
    }

    function ct() {
        cr = b
    }

    function cs() {
        setTimeout(ct, 0);
        return cr = f.now()
    }

    function cj() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function ci() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function cc(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {},
            g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1)
                for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*") k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }!n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function cb(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)
            for (i in e)
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function ca(a, b, c, d) {
        if (f.isArray(b)) f.each(b, function(b, e) {
            c || bE.test(a) ? d(a, e) : ca(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
        });
        else if (!c && b != null && typeof b == "object")
            for (var e in b) ca(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }

    function b_(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function b$(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === bT,
            l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = b$(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = b$(a, c, d, e, "*", g));
        return l
    }

    function bZ(a) {
        return function(b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bP),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function bC(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? bx : by,
            g = 0,
            h = e.length;
        if (d > 0) {
            if (c !== "border")
                for (; g < h; g++) c || (d -= parseFloat(f.css(a, "padding" + e[g])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + e[g])) || 0 : d -= parseFloat(f.css(a, "border" + e[g] + "Width")) || 0;
            return d + "px"
        }
        d = bz(a, b, b);
        if (d < 0 || d == null) d = a.style[b] || 0;
        d = parseFloat(d) || 0;
        if (c)
            for (; g < h; g++) d += parseFloat(f.css(a, "padding" + e[g])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + e[g] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + e[g])) || 0);
        return d + "px"
    }

    function bp(a, b) {
        b.src ? f.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
            if (c === "object") b.outerHTML = a.outerHTML;
            else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                if (c === "option") b.selected = a.defaultSelected;
                else if (c === "input" || c === "textarea") b.defaultValue = a.defaultValue
            } else a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
            b.removeAttribute(f.expando)
        }
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a),
                h = f._data(b, g),
                i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i)
                    for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c + (i[c][d].namespace ? "." : "") + i[c][d].namespace, i[c][d], i[c][d].data)
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a, function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a, function(a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function(a) {
                return a.nodeType === 1
            });
            if (O.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function(a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function n(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            g = b + "mark",
            h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function() {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? parseFloat(d) : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {}
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b = g[a] = {},
            c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function() {
            function J() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(J, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function(a, b) {
                    return new e.fn.init(a, b, h)
                },
                f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                n = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                q = /(?:^|:|,)(?:\s*\[)+/g,
                r = /(webkit)[ \/]([\w.]+)/,
                s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                t = /(msie) ([\w.]+)/,
                u = /(mozilla)(?:.*? rv:([\w.]+))?/,
                v = /-([a-z]|[0-9])/ig,
                w = /^-ms-/,
                x = function(a, b) {
                    return (b + "").toUpperCase()
                },
                y = d.userAgent,
                z, A, B, C = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                F = Array.prototype.slice,
                G = String.prototype.trim,
                H = Array.prototype.indexOf,
                I = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function(a, d, f) {
                    var g, h, j, k;
                    if (!a) return this;
                    if (a.nodeType) {
                        this.context = this[0] = a, this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body) {
                        this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                        return this
                    }
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2]) return f.find(a);
                                this.length = 1, this[0] = h
                            }
                            this.context = c, this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a)) return f.ready(a);
                    a.selector !== b && (this.selector = a.selector, this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7.1",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return F.call(this, 0)
                },
                get: function(a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function(a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function(a, b) {
                    return e.each(this, a, b)
                },
                ready: function(a) {
                    e.bindReady(), A.add(a);
                    return this
                },
                eq: function(a) {
                    a = +a;
                    return a === -1 ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                },
                map: function(a) {
                    return this.pushStack(e.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function() {
                var a, c, d, f, g, h, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++)
                    if ((a = arguments[j]) != null)
                        for (c in a) {
                            d = i[c], f = a[c];
                            if (i === f) continue;
                            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                        }
                return i
            }, e.extend({
                noConflict: function(b) {
                    a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                    return e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function(a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body) return setTimeout(e.ready, 1);
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0) return;
                        A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
                    }
                },
                bindReady: function() {
                    if (!A) {
                        A = e.Callbacks("once memory");
                        if (c.readyState === "complete") return setTimeout(e.ready, 1);
                        if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1);
                        else if (c.attachEvent) {
                            c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                            var b = !1;
                            try {
                                b = a.frameElement == null
                            } catch (d) {}
                            c.documentElement.doScroll && b && J()
                        }
                    }
                },
                isFunction: function(a) {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray || function(a) {
                    return e.type(a) === "array"
                },
                isWindow: function(a) {
                    return a && typeof a == "object" && "setInterval" in a
                },
                isNumeric: function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function(a) {
                    return a == null ? String(a) : I[C.call(a)] || "object"
                },
                isPlainObject: function(a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a);
                    return d === b || D.call(a, d)
                },
                isEmptyObject: function(a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function(a) {
                    throw new Error(a)
                },
                parseJSON: function(b) {
                    if (typeof b != "string" || !b) return null;
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                    if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function("return " + b))();
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function(c) {
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (g) {
                        d = b
                    }(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                    return d
                },
                noop: function() {},
                globalEval: function(b) {
                    b && j.test(b) && (a.execScript || function(b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function(a) {
                    return a.replace(w, "ms-").replace(v, x)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function(a, c, d) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a)
                                if (c.apply(a[f], d) === !1) break
                        } else
                            for (; g < h;)
                                if (c.apply(a[g++], d) === !1) break
                    } else if (i) {
                        for (f in a)
                            if (c.call(a[f], f, a[f]) === !1) break
                    } else
                        for (; g < h;)
                            if (c.call(a[g], g, a[g++]) === !1) break;
                    return a
                },
                trim: G ? function(a) {
                    return a == null ? "" : G.call(a)
                } : function(a) {
                    return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                },
                makeArray: function(a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function(a, b, c) {
                    var d;
                    if (b) {
                        if (H) return H.call(b, a, c);
                        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function(a, c) {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number")
                        for (var f = c.length; e < f; e++) a[d++] = c[e];
                    else
                        while (c[e] !== b) a[d++] = c[e++];
                    a.length = d;
                    return a
                },
                grep: function(a, b, c) {
                    var d = [],
                        e;
                    c = !!c;
                    for (var f = 0, g = a.length; f < g; f++) e = !!b(a[f], f), c !== e && d.push(a[f]);
                    return d
                },
                map: function(a, c, d) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k)
                        for (; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f);
                    else
                        for (g in a) f = c(a[g], g, d), f != null && (h[h.length] = f);
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function(a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!e.isFunction(a)) return b;
                    var f = F.call(arguments, 2),
                        g = function() {
                            return a.apply(c, f.concat(F.call(arguments)))
                        };
                    g.guid = a.guid = a.guid || g.guid || e.guid++;
                    return g
                },
                access: function(a, c, d, f, g, h) {
                    var i = a.length;
                    if (typeof c == "object") {
                        for (var j in c) e.access(a, j, c[j], f, g, d);
                        return a
                    }
                    if (d !== b) {
                        f = !h && f && e.isFunction(d);
                        for (var k = 0; k < i; k++) g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                        return a
                    }
                    return i ? g(a[0], c) : b
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(a) {
                    a = a.toLowerCase();
                    var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function() {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(d, f) {
                        f && f instanceof e && !(f instanceof a) && (f = a(f));
                        return e.fn.init.call(this, d, f, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                I["[object " + b + "]"] = b.toLowerCase()
            }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function() {
                c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
            } : c.attachEvent && (B = function() {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
            });
            return e
        }(),
        g = {};
    f.Callbacks = function(a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
            d = [],
            e, i, j, k, l, m = function(b) {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++) g = b[d], h = f.type(g), h === "array" ? m(g) : h === "function" && (!a.unique || !o.has(g)) && c.push(g)
            },
            n = function(b, f) {
                f = f || [], e = !a.memory || [b, f], i = !0, l = j || 0, j = 0, k = c.length;
                for (; c && l < k; l++)
                    if (c[l].apply(b, f) === !1 && a.stopOnFalse) {
                        e = !0;
                        break
                    }
                i = !1, c && (a.once ? e === !0 ? o.disable() : c = [] : d && d.length && (e = d.shift(), o.fireWith(e[0], e[1])))
            },
            o = {
                add: function() {
                    if (c) {
                        var a = c.length;
                        m(arguments), i ? k = c.length : e && e !== !0 && (j = a, n(e[0], e[1]))
                    }
                    return this
                },
                remove: function() {
                    if (c) {
                        var b = arguments,
                            d = 0,
                            e = b.length;
                        for (; d < e; d++)
                            for (var f = 0; f < c.length; f++)
                                if (b[d] === c[f]) {
                                    i && f <= k && (k--, f <= l && l--), c.splice(f--, 1);
                                    if (a.unique) break
                                }
                    }
                    return this
                },
                has: function(a) {
                    if (c) {
                        var b = 0,
                            d = c.length;
                        for (; b < d; b++)
                            if (a === c[b]) return !0
                    }
                    return !1
                },
                empty: function() {
                    c = [];
                    return this
                },
                disable: function() {
                    c = d = e = b;
                    return this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    d = b, (!e || e === !0) && o.disable();
                    return this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(b, c) {
                    d && (i ? a.once || d.push([b, c]) : (!a.once || !e) && n(b, c));
                    return this
                },
                fire: function() {
                    o.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!e
                }
            };
        return o
    };
    var i = [].slice;
    f.extend({
        Deferred: function(a) {
            var b = f.Callbacks("once memory"),
                c = f.Callbacks("once memory"),
                d = f.Callbacks("memory"),
                e = "pending",
                g = {
                    resolve: b,
                    reject: c,
                    notify: d
                },
                h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function() {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function(a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    },
                    always: function() {
                        i.done.apply(i, arguments).fail.apply(i, arguments);
                        return this
                    },
                    pipe: function(a, b, c) {
                        return f.Deferred(function(d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function(a, b) {
                                var c = b[0],
                                    e = b[1],
                                    g;
                                f.isFunction(c) ? i[a](function() {
                                    g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (a == null) a = h;
                        else
                            for (var b in h) a[b] = h[b];
                        return a
                    }
                },
                i = h.promise({}),
                j;
            for (j in g) i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
            i.done(function() {
                e = "resolved"
            }, c.disable, d.lock).fail(function() {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        },
        when: function(a) {
            function m(a) {
                return function(b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }

            function l(a) {
                return function(c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = Array(d),
                g = d,
                h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
                k = j.promise();
            if (d > 1) {
                for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }), f.support = function() {
        var b, d, e, g, h, i, j, k, l, m, n, o, p, q = c.createElement("div"),
            r = c.documentElement;
        q.setAttribute("className", "t"), q.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = q.getElementsByTagName("*"), e = q.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = q.getElementsByTagName("input")[0], b = {
            leadingWhitespace: q.firstChild.nodeType === 3,
            tbody: !q.getElementsByTagName("tbody").length,
            htmlSerialize: !!q.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: q.className !== "t",
            enctype: !!c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete q.test
        } catch (s) {
            b.deleteExpando = !1
        }!q.addEventListener && q.attachEvent && q.fireEvent && (q.attachEvent("onclick", function() {
            b.noCloneEvent = !1
        }), q.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), q.appendChild(i), k = c.createDocumentFragment(), k.appendChild(q.lastChild), b.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, k.removeChild(i), k.appendChild(q), q.innerHTML = "", a.getComputedStyle && (j = c.createElement("div"), j.style.width = "0", j.style.marginRight = "0", q.style.width = "2px", q.appendChild(j), b.reliableMarginRight = (parseInt((a.getComputedStyle(j, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0);
        if (q.attachEvent)
            for (o in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                }) n = "on" + o, p = n in q, p || (q.setAttribute(n, "return;"), p = typeof q[n] == "function"), b[o + "Bubbles"] = p;
        k.removeChild(q), k = g = h = j = q = i = null, f(function() {
            var a, d, e, g, h, i, j, k, m, n, o, r = c.getElementsByTagName("body")[0];
            !r || (j = 1, k = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", m = "visibility:hidden;border:0;", n = "style='" + k + "border:5px solid #000;padding:0;'", o = "<div " + n + "><div></div></div>" + "<table " + n + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", a = c.createElement("div"), a.style.cssText = m + "width:0;height:0;position:static;top:0;margin-top:" + j + "px", r.insertBefore(a, r.firstChild), q = c.createElement("div"), a.appendChild(q), q.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", l = q.getElementsByTagName("td"), p = l[0].offsetHeight === 0, l[0].style.display = "", l[1].style.display = "none", b.reliableHiddenOffsets = p && l[0].offsetHeight === 0, q.innerHTML = "", q.style.width = q.style.paddingLeft = "1px", f.boxModel = b.boxModel = q.offsetWidth === 2, typeof q.style.zoom != "undefined" && (q.style.display = "inline", q.style.zoom = 1, b.inlineBlockNeedsLayout = q.offsetWidth === 2, q.style.display = "", q.innerHTML = "<div style='width:4px;'></div>", b.shrinkWrapBlocks = q.offsetWidth !== 2), q.style.cssText = k + m, q.innerHTML = o, d = q.firstChild, e = d.firstChild, h = d.nextSibling.firstChild.firstChild, i = {
                doesNotAddBorder: e.offsetTop !== 5,
                doesAddBorderForTableAndCells: h.offsetTop === 5
            }, e.style.position = "fixed", e.style.top = "20px", i.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", i.subtractsBorderForOverflowNotVisible = e.offsetTop === -5, i.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j, r.removeChild(a), q = a = null, f.extend(b, i))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function(a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando,
                    k = typeof c == "string",
                    l = a.nodeType,
                    m = l ? f.cache : a,
                    n = l ? a[j] : a[j] && j,
                    o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) return g.events;
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function(a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando,
                    i = a.nodeType,
                    j = i ? f.cache : a,
                    k = i ? a[h] : h;
                if (!j[k]) return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d)) return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function(a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), f.fn.extend({
        data: function(a, c) {
            var d, e, g, h = null;
            if (typeof a == "undefined") {
                if (this.length) {
                    h = f.data(this[0]);
                    if (this[0].nodeType === 1 && !f._data(this[0], "parsedAttrs")) {
                        e = this[0].attributes;
                        for (var i = 0, j = e.length; i < j; i++) g = e[i].name, g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)), l(this[0], g, h[g]));
                        f._data(this[0], "parsedAttrs", !0)
                    }
                }
                return h
            }
            if (typeof a == "object") return this.each(function() {
                f.data(this, a)
            });
            d = a.split("."), d[1] = d[1] ? "." + d[1] : "";
            if (c === b) {
                h = this.triggerHandler("getData" + d[1] + "!", [d[0]]), h === b && this.length && (h = f.data(this[0], a), h = l(this[0], a, h));
                return h === b && d[1] ? this.data(d[0]) : h
            }
            return this.each(function() {
                var b = f(this),
                    e = [d[0], c];
                b.triggerHandler("setData" + d[1] + "!", e), f.data(this, a, c), b.triggerHandler("changeData" + d[1] + "!", e)
            })
        },
        removeData: function(a) {
            return this.each(function() {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function(a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },
        queue: function(a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function() {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function(a, c) {
            typeof a != "string" && (c = a, a = "fx");
            if (c === b) return f.queue(this[0], a);
            return this.each(function() {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                f.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--)
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++, l.add(m);
            m();
            return d.promise()
        }
    });
    var o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute,
        w, x, y;
    f.fn.extend({
        attr: function(a, b) {
            return f.access(this, a, b, !0, f.attr)
        },
        removeAttr: function(a) {
            return this.each(function() {
                f.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return f.access(this, a, b, !0, f.prop)
        },
        removeProp: function(a) {
            a = f.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1) e.className = a;
                        else {
                            g = " " + e.className + " ";
                            for (h = 0, i = b.length; h < i; h++) ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                            e.className = f.trim(g)
                        }
                }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className)
                        if (a) {
                            h = (" " + g.className + " ").replace(o, " ");
                            for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                            g.className = f.trim(h)
                        } else g.className = ""
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            if (f.isFunction(a)) return this.each(function(c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function() {
                if (c === "string") {
                    var e, g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(p);
                    while (e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, g = this[0]; {
                if (!!arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function(d) {
                        var g = f(this),
                            h;
                        if (this.nodeType === 1) {
                            e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function(a) {
                                return a == null ? "" : a + ""
                            })), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                            if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
                        }
                    })
                }
                if (g) {
                    c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
                }
            }
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, g = a.selectedIndex,
                        h = [],
                        i = a.options,
                        j = a.type === "select-one";
                    if (g < 0) return null;
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) return f(i[g]).val();
                    return h
                },
                set: function(a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function() {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!!a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) return f(a)[c](d);
                if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
                i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
                g = a.getAttribute(c);
                return g === null ? b : g
            }
        },
        removeAttr: function(a, b) {
            var c, d, e, g, h = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; h < g; h++) e = d[h], e && (c = f.propFix[e] || e, f.attr(a, e, ""), a.removeAttribute(v ? e : c), u.test(e) && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b), c && (a.value = c);
                        return b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    if (w && f.nodeName(a, "button")) return w.get(a, b);
                    return b in a ? a.value : null
                },
                set: function(a, b, c) {
                    if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!!a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function(a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, v || (y = {
        name: !0,
        id: !0
    }, w = f.valHooks.button = {
        get: function(a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        },
        set: function(a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function(a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function(a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function(a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            get: function(a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function(a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i,
        A = /^([^\.]*)?(?:\.(.+))?$/,
        B = /\bhover(\.\S+)?\b/,
        C = /^key/,
        D = /^(?:mouse|contextmenu)|click/,
        E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        G = function(a) {
            var b = F.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        },
        H = function(a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        },
        I = function(a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
    f.event = {
            add: function(a, c, d, e, g) {
                var h, i, j, k, l, m, n, o, p, q, r, s;
                if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                    d.handler && (p = d, d = p.handler), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function(a) {
                        return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                    }, i.elem = a), c = f.trim(I(c)).split(" ");
                    for (k = 0; k < c.length; k++) {
                        l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                            type: m,
                            origType: l[1],
                            data: e,
                            handler: d,
                            guid: d.guid,
                            selector: g,
                            quick: G(g),
                            namespace: n.join(".")
                        }, p), r = j[m];
                        if (!r) {
                            r = j[m] = [], r.delegateCount = 0;
                            if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                        }
                        s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                    }
                    a = null
                }
            },
            global: {},
            remove: function(a, b, c, d, e) {
                var g = f.hasData(a) && f._data(a),
                    h, i, j, k, l, m, n, o, p, q, r, s;
                if (!!g && !!(o = g.events)) {
                    b = f.trim(I(b || "")).split(" ");
                    for (h = 0; h < b.length; h++) {
                        i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                        if (!j) {
                            for (j in o) f.event.remove(a, j + b[h], c, d, !0);
                            continue
                        }
                        p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                        for (n = 0; n < r.length; n++) s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                        r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                    }
                    f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(c, d, e, g) {
                if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                    var h = c.type || c,
                        i = [],
                        j, k, l, m, n, o, p, q, r, s;
                    if (E.test(h + f.event.triggered)) return;
                    h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                    if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                    c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
                    if (!e) {
                        j = f.cache;
                        for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                        return
                    }
                    c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                    if (p.trigger && p.trigger.apply(e, d) === !1) return;
                    r = [
                        [e, p.bindType || h]
                    ];
                    if (!g && !p.noBubble && !f.isWindow(e)) {
                        s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                        for (; m; m = m.parentNode) r.push([m, s]), n = m;
                        n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                    }
                    for (l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                    c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                    return c.result
                }
            },
            dispatch: function(c) {
                c = f.event.fix(c || a.event);
                var d = (f._data(this, "events") || {})[c.type] || [],
                    e = d.delegateCount,
                    g = [].slice.call(arguments, 0),
                    h = !c.exclusive && !c.namespace,
                    i = [],
                    j, k, l, m, n, o, p, q, r, s, t;
                g[0] = c, c.delegateTarget = this;
                if (e && !c.target.disabled && (!c.button || c.type !== "click")) {
                    m = f(this), m.context = this.ownerDocument || this;
                    for (l = c.target; l != this; l = l.parentNode || this) {
                        o = {}, q = [], m[0] = l;
                        for (j = 0; j < e; j++) r = d[j], s = r.selector, o[s] === b && (o[s] = r.quick ? H(l, r.quick) : m.is(s)), o[s] && q.push(r);
                        q.length && i.push({
                            elem: l,
                            matches: q
                        })
                    }
                }
                d.length > e && i.push({
                    elem: this,
                    matches: d.slice(e)
                });
                for (j = 0; j < i.length && !c.isPropagationStopped(); j++) {
                    p = i[j], c.currentTarget = p.elem;
                    for (k = 0; k < p.matches.length && !c.isImmediatePropagationStopped(); k++) {
                        r = p.matches[k];
                        if (h || !c.namespace && !r.namespace || c.namespace_re && c.namespace_re.test(r.namespace)) c.data = r.data, c.handleObj = r, n = ((f.event.special[r.origType] || {}).handle || r.handler).apply(p.elem, g), n !== b && (c.result = n, n === !1 && (c.preventDefault(), c.stopPropagation()))
                    }
                }
                return c.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                    return a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, d) {
                    var e, f, g, h = d.button,
                        i = d.fromElement;
                    a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                    return a
                }
            },
            fix: function(a) {
                if (a[f.expando]) return a;
                var d, e, g = a,
                    h = f.event.fixHooks[a.type] || {},
                    i = h.props ? this.props.concat(h.props) : this.props;
                a = f.Event(g);
                for (d = i.length; d;) e = i[--d], a[e] = g[e];
                a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
                return h.filter ? h.filter(a, g) : a
            },
            special: {
                ready: {
                    setup: f.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(a, b, c) {
                        f.isWindow(this) && (this.onbeforeunload = c)
                    },
                    teardown: function(a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = f.extend(new f.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        }, f.Event = function(a, b) {
            if (!(this instanceof f.Event)) return new f.Event(a, b);
            a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
        }, f.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = K;
                var a = this.originalEvent;
                !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = K;
                var a = this.originalEvent;
                !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = K, this.stopPropagation()
            },
            isDefaultPrevented: J,
            isPropagationStopped: J,
            isImmediatePropagationStopped: J
        }, f.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            f.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c = this,
                        d = a.relatedTarget,
                        e = a.handleObj,
                        g = e.selector,
                        h;
                    if (!d || d !== c && !f.contains(c, d)) a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
                    return h
                }
            }
        }), f.support.submitBubbles || (f.event.special.submit = {
            setup: function() {
                if (f.nodeName(this, "form")) return !1;
                f.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target,
                        d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                    d && !d._submit_attached && (f.event.add(d, "submit._submit", function(a) {
                        this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0)
                    }), d._submit_attached = !0)
                })
            },
            teardown: function() {
                if (f.nodeName(this, "form")) return !1;
                f.event.remove(this, "._submit")
            }
        }), f.support.changeBubbles || (f.event.special.change = {
            setup: function() {
                if (z.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change", function(a) {
                        a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), f.event.add(this, "click._change", function(a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                    });
                    return !1
                }
                f.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function(a) {
                        this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                    }), b._change_attached = !0)
                })
            },
            handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                f.event.remove(this, "._change");
                return z.test(this.nodeName)
            }
        }), f.support.focusinBubbles || f.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var d = 0,
                e = function(a) {
                    f.event.simulate(b, a.target, f.event.fix(a), !0)
                };
            f.event.special[b] = {
                setup: function() {
                    d++ === 0 && c.addEventListener(a, e, !0)
                },
                teardown: function() {
                    --d === 0 && c.removeEventListener(a, e, !0)
                }
            }
        }), f.fn.extend({
            on: function(a, c, d, e, g) {
                var h, i;
                if (typeof a == "object") {
                    typeof c != "string" && (d = c, c = b);
                    for (i in a) this.on(i, c, d, a[i], g);
                    return this
                }
                d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
                if (e === !1) e = J;
                else if (!e) return this;
                g === 1 && (h = e, e = function(a) {
                    f().off(a);
                    return h.apply(this, arguments)
                }, e.guid = h.guid || (h.guid = f.guid++));
                return this.each(function() {
                    f.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on.call(this, a, b, c, d, 1)
            },
            off: function(a, c, d) {
                if (a && a.preventDefault && a.handleObj) {
                    var e = a.handleObj;
                    f(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler);
                    return this
                }
                if (typeof a == "object") {
                    for (var g in a) this.off(g, c, a[g]);
                    return this
                }
                if (c === !1 || typeof c == "function") d = c, c = b;
                d === !1 && (d = J);
                return this.each(function() {
                    f.event.remove(this, a, d, c)
                })
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            live: function(a, b, c) {
                f(this.context).on(a, this.selector, b, c);
                return this
            },
            die: function(a, b) {
                f(this.context).off(a, this.selector || "**", b);
                return this
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    f.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                if (this[0]) return f.event.trigger(a, b, this[0], !0)
            },
            toggle: function(a) {
                var b = arguments,
                    c = a.guid || f.guid++,
                    d = 0,
                    e = function(c) {
                        var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                        f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                        return b[e].apply(this, arguments) || !1
                    };
                e.guid = c;
                while (d < b.length) b[d++].guid = c;
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            f.fn[b] = function(a, c) {
                c == null && (c = a, a = null);
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
        }),
        function() {
            function x(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            if (j.nodeType === 1) {
                                g || (j[d] = c, j.sizset = h);
                                if (typeof b != "string") {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else if (m.filter(b, [j]).length > 0) {
                                    k = j;
                                    break
                                }
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }

            function w(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                            if (j.nodeName.toLowerCase() === b) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }
            var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                d = "sizcache" + (Math.random() + "").replace(".", ""),
                e = 0,
                g = Object.prototype.toString,
                h = !1,
                i = !0,
                j = /\\/g,
                k = /\r\n/g,
                l = /\W/;
            [0, 0].sort(function() {
                i = !1;
                return 0
            });
            var m = function(b, d, e, f) {
                e = e || [], d = d || c;
                var h = d;
                if (d.nodeType !== 1 && d.nodeType !== 9) return [];
                if (!b || typeof b != "string") return e;
                var i, j, k, l, n, q, r, t, u = !0,
                    v = m.isXML(d),
                    w = [],
                    x = b;
                do {
                    a.exec(""), i = a.exec(x);
                    if (i) {
                        x = i[3], w.push(i[1]);
                        if (i[2]) {
                            l = i[3];
                            break
                        }
                    }
                } while (i);
                if (w.length > 1 && p.exec(b))
                    if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
                    else {
                        j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                        while (w.length) b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
                    }
                else {
                    !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                    if (d) {
                        n = f ? {
                            expr: w.pop(),
                            set: s(f)
                        } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                        while (w.length) q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                    } else k = w = []
                }
                k || (k = j), k || m.error(q || b);
                if (g.call(k) === "[object Array]")
                    if (!u) e.push.apply(e, k);
                    else if (d && d.nodeType === 1)
                    for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
                else
                    for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]);
                else s(k, e);
                l && (m(l, h, e, f), m.uniqueSort(e));
                return e
            };
            m.uniqueSort = function(a) {
                if (u) {
                    h = i, a.sort(u);
                    if (h)
                        for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
                }
                return a
            }, m.matches = function(a, b) {
                return m(a, null, null, b)
            }, m.matchesSelector = function(a, b) {
                return m(b, null, null, [a]).length > 0
            }, m.find = function(a, b, c) {
                var d, e, f, g, h, i;
                if (!a) return [];
                for (e = 0, f = o.order.length; e < f; e++) {
                    h = o.order[e];
                    if (g = o.leftMatch[h].exec(a)) {
                        i = g[1], g.splice(1, 1);
                        if (i.substr(i.length - 1) !== "\\") {
                            g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                            if (d != null) {
                                a = a.replace(o.match[h], "");
                                break
                            }
                        }
                    }
                }
                d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
                return {
                    set: d,
                    expr: a
                }
            }, m.filter = function(a, c, d, e) {
                var f, g, h, i, j, k, l, n, p, q = a,
                    r = [],
                    s = c,
                    t = c && c[0] && m.isXML(c[0]);
                while (a && c.length) {
                    for (h in o.filter)
                        if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                            k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                            if (l.substr(l.length - 1) === "\\") continue;
                            s === r && (r = []);
                            if (o.preFilter[h]) {
                                f = o.preFilter[h](f, s, d, r, e, t);
                                if (!f) g = i = !0;
                                else if (f === !0) continue
                            }
                            if (f)
                                for (n = 0;
                                    (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                            if (i !== b) {
                                d || (s = r), a = a.replace(o.match[h], "");
                                if (!g) return [];
                                break
                            }
                        }
                    if (a === q)
                        if (g == null) m.error(a);
                        else break;
                    q = a
                }
                return s
            }, m.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            };
            var n = m.getText = function(a) {
                    var b, c, d = a.nodeType,
                        e = "";
                    if (d) {
                        if (d === 1 || d === 9) {
                            if (typeof a.textContent == "string") return a.textContent;
                            if (typeof a.innerText == "string") return a.innerText.replace(k, "");
                            for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                        } else if (d === 3 || d === 4) return a.nodeValue
                    } else
                        for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
                    return e
                },
                o = m.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function(a) {
                            return a.getAttribute("href")
                        },
                        type: function(a) {
                            return a.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function(a, b) {
                            var c = typeof b == "string",
                                d = c && !l.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var f = 0, g = a.length, h; f < g; f++)
                                if (h = a[f]) {
                                    while ((h = h.previousSibling) && h.nodeType !== 1);
                                    a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                                }
                            e && m.filter(b, a, !0)
                        },
                        ">": function(a, b) {
                            var c, d = typeof b == "string",
                                e = 0,
                                f = a.length;
                            if (d && !l.test(b)) {
                                b = b.toLowerCase();
                                for (; e < f; e++) {
                                    c = a[e];
                                    if (c) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                    }
                                }
                            } else {
                                for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && m.filter(b, a, !0)
                            }
                        },
                        "": function(a, b, c) {
                            var d, f = e++,
                                g = x;
                            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                        },
                        "~": function(a, b, c) {
                            var d, f = e++,
                                g = x;
                            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                        }
                    },
                    find: {
                        ID: function(a, b, c) {
                            if (typeof b.getElementById != "undefined" && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : []
                            }
                        },
                        NAME: function(a, b) {
                            if (typeof b.getElementsByName != "undefined") {
                                var c = [],
                                    d = b.getElementsByName(a[1]);
                                for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                                return c.length === 0 ? null : c
                            }
                        },
                        TAG: function(a, b) {
                            if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                        }
                    },
                    preFilter: {
                        CLASS: function(a, b, c, d, e, f) {
                            a = " " + a[1].replace(j, "") + " ";
                            if (f) return a;
                            for (var g = 0, h;
                                (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                            return !1
                        },
                        ID: function(a) {
                            return a[1].replace(j, "")
                        },
                        TAG: function(a, b) {
                            return a[1].replace(j, "").toLowerCase()
                        },
                        CHILD: function(a) {
                            if (a[1] === "nth") {
                                a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                            } else a[2] && m.error(a[0]);
                            a[0] = e++;
                            return a
                        },
                        ATTR: function(a, b, c, d, e, f) {
                            var g = a[1] = a[1].replace(j, "");
                            !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                            return a
                        },
                        PSEUDO: function(b, c, d, e, f) {
                            if (b[1] === "not")
                                if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, c);
                                else {
                                    var g = m.filter(b[3], c, d, !0 ^ f);
                                    d || e.push.apply(e, g);
                                    return !1
                                }
                            else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
                            return b
                        },
                        POS: function(a) {
                            a.unshift(!0);
                            return a
                        }
                    },
                    filters: {
                        enabled: function(a) {
                            return a.disabled === !1 && a.type !== "hidden"
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            return a.checked === !0
                        },
                        selected: function(a) {
                            a.parentNode && a.parentNode.selectedIndex;
                            return a.selected === !0
                        },
                        parent: function(a) {
                            return !!a.firstChild
                        },
                        empty: function(a) {
                            return !a.firstChild
                        },
                        has: function(a, b, c) {
                            return !!m(c[3], a).length
                        },
                        header: function(a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function(a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                        },
                        radio: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                        },
                        checkbox: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                        },
                        file: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "file" === a.type
                        },
                        password: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "password" === a.type
                        },
                        submit: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "submit" === a.type
                        },
                        image: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "image" === a.type
                        },
                        reset: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "reset" === a.type
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && "button" === a.type || b === "button"
                        },
                        input: function(a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        },
                        focus: function(a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(a, b) {
                            return b === 0
                        },
                        last: function(a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function(a, b) {
                            return b % 2 === 0
                        },
                        odd: function(a, b) {
                            return b % 2 === 1
                        },
                        lt: function(a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function(a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function(a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function(a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function(a, b, c, d) {
                            var e = b[1],
                                f = o.filters[e];
                            if (f) return f(a, c, b, d);
                            if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                            if (e === "not") {
                                var g = b[3];
                                for (var h = 0, i = g.length; h < i; h++)
                                    if (g[h] === a) return !1;
                                return !0
                            }
                            m.error(e)
                        },
                        CHILD: function(a, b) {
                            var c, e, f, g, h, i, j, k = b[1],
                                l = a;
                            switch (k) {
                                case "only":
                                case "first":
                                    while (l = l.previousSibling)
                                        if (l.nodeType === 1) return !1;
                                    if (k === "first") return !0;
                                    l = a;
                                case "last":
                                    while (l = l.nextSibling)
                                        if (l.nodeType === 1) return !1;
                                    return !0;
                                case "nth":
                                    c = b[2], e = b[3];
                                    if (c === 1 && e === 0) return !0;
                                    f = b[0], g = a.parentNode;
                                    if (g && (g[d] !== f || !a.nodeIndex)) {
                                        i = 0;
                                        for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
                                        g[d] = f
                                    }
                                    j = a.nodeIndex - e;
                                    return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                            }
                        },
                        ID: function(a, b) {
                            return a.nodeType === 1 && a.getAttribute("id") === b
                        },
                        TAG: function(a, b) {
                            return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                        },
                        CLASS: function(a, b) {
                            return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                        },
                        ATTR: function(a, b) {
                            var c = b[1],
                                d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                                e = d + "",
                                f = b[2],
                                g = b[4];
                            return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                        },
                        POS: function(a, b, c, d) {
                            var e = b[2],
                                f = o.setFilters[e];
                            if (f) return f(a, c, b, d)
                        }
                    }
                },
                p = o.match.POS,
                q = function(a, b) {
                    return "\\" + (b - 0 + 1)
                };
            for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
            var s = function(a, b) {
                a = Array.prototype.slice.call(a, 0);
                if (b) {
                    b.push.apply(b, a);
                    return b
                }
                return a
            };
            try {
                Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                s = function(a, b) {
                    var c = 0,
                        d = b || [];
                    if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                    else if (typeof a.length == "number")
                        for (var e = a.length; c < e; c++) d.push(a[c]);
                    else
                        for (; a[c]; c++) d.push(a[c]);
                    return d
                }
            }
            var u, v;
            c.documentElement.compareDocumentPosition ? u = function(a, b) {
                    if (a === b) {
                        h = !0;
                        return 0
                    }
                    if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
                    return a.compareDocumentPosition(b) & 4 ? -1 : 1
                } : (u = function(a, b) {
                    if (a === b) {
                        h = !0;
                        return 0
                    }
                    if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                    var c, d, e = [],
                        f = [],
                        g = a.parentNode,
                        i = b.parentNode,
                        j = g;
                    if (g === i) return v(a, b);
                    if (!g) return -1;
                    if (!i) return 1;
                    while (j) e.unshift(j), j = j.parentNode;
                    j = i;
                    while (j) f.unshift(j), j = j.parentNode;
                    c = e.length, d = f.length;
                    for (var k = 0; k < c && k < d; k++)
                        if (e[k] !== f[k]) return v(e[k], f[k]);
                    return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
                }, v = function(a, b, c) {
                    if (a === b) return c;
                    var d = a.nextSibling;
                    while (d) {
                        if (d === b) return -1;
                        d = d.nextSibling
                    }
                    return 1
                }),
                function() {
                    var a = c.createElement("div"),
                        d = "script" + (new Date).getTime(),
                        e = c.documentElement;
                    a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function(a, c, d) {
                        if (typeof c.getElementById != "undefined" && !d) {
                            var e = c.getElementById(a[1]);
                            return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                        }
                    }, o.filter.ID = function(a, b) {
                        var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                        return a.nodeType === 1 && c && c.nodeValue === b
                    }), e.removeChild(a), e = a = null
                }(),
                function() {
                    var a = c.createElement("div");
                    a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                        var c = b.getElementsByTagName(a[1]);
                        if (a[1] === "*") {
                            var d = [];
                            for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                            c = d
                        }
                        return c
                    }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
                        return a.getAttribute("href", 2)
                    }), a = null
                }(), c.querySelectorAll && function() {
                    var a = m,
                        b = c.createElement("div"),
                        d = "__sizzle__";
                    b.innerHTML = "<p class='TEST'></p>";
                    if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                        m = function(b, e, f, g) {
                            e = e || c;
                            if (!g && !m.isXML(e)) {
                                var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                                    if (h[1]) return s(e.getElementsByTagName(b), f);
                                    if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
                                }
                                if (e.nodeType === 9) {
                                    if (b === "body" && e.body) return s([e.body], f);
                                    if (h && h[3]) {
                                        var i = e.getElementById(h[3]);
                                        if (!i || !i.parentNode) return s([], f);
                                        if (i.id === h[3]) return s([i], f)
                                    }
                                    try {
                                        return s(e.querySelectorAll(b), f)
                                    } catch (j) {}
                                } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                    var k = e,
                                        l = e.getAttribute("id"),
                                        n = l || d,
                                        p = e.parentNode,
                                        q = /^\s*[+~]/.test(b);
                                    l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                                    try {
                                        if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                                    } catch (r) {} finally {
                                        l || k.removeAttribute("id")
                                    }
                                }
                            }
                            return a(b, e, f, g)
                        };
                        for (var e in a) m[e] = a[e];
                        b = null
                    }
                }(),
                function() {
                    var a = c.documentElement,
                        b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                    if (b) {
                        var d = !b.call(c.createElement("div"), "div"),
                            e = !1;
                        try {
                            b.call(c.documentElement, "[test!='']:sizzle")
                        } catch (f) {
                            e = !0
                        }
                        m.matchesSelector = function(a, c) {
                            c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                            if (!m.isXML(a)) try {
                                if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                    var f = b.call(a, c);
                                    if (f || !d || a.document && a.document.nodeType !== 11) return f
                                }
                            } catch (g) {}
                            return m(c, null, null, [a]).length > 0
                        }
                    }
                }(),
                function() {
                    var a = c.createElement("div");
                    a.innerHTML = "<div class='test e'></div><div class='test'></div>";
                    if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                        a.lastChild.className = "e";
                        if (a.getElementsByClassName("e").length === 1) return;
                        o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) {
                            if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                        }, a = null
                    }
                }(), c.documentElement.contains ? m.contains = function(a, b) {
                    return a !== b && (a.contains ? a.contains(b) : !0)
                } : c.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
                    return !!(a.compareDocumentPosition(b) & 16)
                } : m.contains = function() {
                    return !1
                }, m.isXML = function(a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return b ? b.nodeName !== "HTML" : !1
                };
            var y = function(a, b, c) {
                var d, e = [],
                    f = "",
                    g = b.nodeType ? [b] : b;
                while (d = o.match.PSEUDO.exec(a)) f += d[0], a = a.replace(o.match.PSEUDO, "");
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
                return m.filter(f, e)
            };
            m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
        }();
    var L = /Until$/,
        M = /^(?:parents|prevUntil|prevAll)/,
        N = /,/,
        O = /^.[^:#\[\.,]*$/,
        P = Array.prototype.slice,
        Q = f.expr.match.POS,
        R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function(a) {
            var b = this,
                c, d;
            if (typeof a != "string") return f(a).filter(function() {
                for (c = 0, d = b.length; c < d; c++)
                    if (f.contains(b[c], this)) return !0
            });
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0)
                    for (h = g; h < e.length; h++)
                        for (i = 0; i < g; i++)
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
            }
            return e
        },
        has: function(a) {
            var b = f(a);
            return this.filter(function() {
                for (var a = 0, c = b.length; a < c; a++)
                    if (f.contains(this, b[a])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({
                        selector: a[d],
                        elem: g,
                        level: h
                    });
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function(a) {
            if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function(a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function(a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return f.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return f.sibling(a.firstChild)
        },
        contents: function(a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function(a, b) {
        f.fn[a] = function(c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({
        filter: function(a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g), g = g[c];
            return e
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c])
                if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ba = /<(?:script|style)/i,
        bb = /<(?:script|object|embed|option|style)/i,
        bc = new RegExp("<(?:" + V + ")", "i"),
        bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
        be = /\/(java|ecma)script/i,
        bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
        bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function(a) {
            if (f.isFunction(a)) return this.each(function(b) {
                var c = f(this);
                c.text(a.call(this, b, c.text()))
            });
            if (typeof a != "object" && a !== b) return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
            return f.text(this)
        },
        wrapAll: function(a) {
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function() {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = f.isFunction(a);
            return this.each(function(c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f.clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        },
        remove: function(a, b) {
            for (var c = 0, d;
                (d = this[c]) != null; c++)
                if (!a || f.filter(a, [d]).length) !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var a = 0, b;
                (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        },
        clone: function(a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function() {
                return f.clone(this, a, b)
            })
        },
        html: function(a) {
            if (a === b) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, "") : null;
            if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Y, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; c < d; c++) this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch (e) {
                    this.empty().append(a)
                }
            } else f.isFunction(a) ? this.each(function(b) {
                var c = f(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            return this
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) return this.each(function(b) {
                    var c = f(this),
                        d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function() {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            var e, g, h, i, j = a[0],
                k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) return this.each(function() {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function(e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, bp)
            }
            return this
        }
    }), f.buildFragment = function(a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {
            fragment: e,
            cacheable: g
        }
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        f.fn[a] = function(c) {
            var d = [],
                e = f(c),
                g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function(a, b, c) {
            var d, e, g, h = f.support.html5Clone || !bc.test("<" + a.nodeName) ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h), d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g])
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g) bj(d[g], e[g])
                }
            }
            d = e = null;
            return h
        },
        clean: function(a, b, d, e) {
            var g;
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            var h = [],
                i;
            for (var j = 0, k;
                (k = a[j]) != null; j++) {
                typeof k == "number" && (k += "");
                if (!k) continue;
                if (typeof k == "string")
                    if (!_.test(k)) k = b.createTextNode(k);
                    else {
                        k = k.replace(Y, "<$1></$2>");
                        var l = (Z.exec(k) || ["", ""])[1].toLowerCase(),
                            m = bg[l] || bg._default,
                            n = m[0],
                            o = b.createElement("div");
                        b === c ? bh.appendChild(o) : U(b).appendChild(o), o.innerHTML = m[1] + k + m[2];
                        while (n--) o = o.lastChild;
                        if (!f.support.tbody) {
                            var p = $.test(k),
                                q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                            for (i = q.length - 1; i >= 0; --i) f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                        }!f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild), k = o.childNodes
                    }
                var r;
                if (!f.support.appendChecked)
                    if (k[0] && typeof(r = k.length) == "number")
                        for (i = 0; i < r; i++) bn(k[i]);
                    else bn(k);
                k.nodeType ? h.push(k) : h = f.merge(h, k)
            }
            if (d) {
                g = function(a) {
                    return !a.type || be.test(a.type)
                };
                for (j = 0; h[j]; j++)
                    if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
                    else {
                        if (h[j].nodeType === 1) {
                            var s = f.grep(h[j].getElementsByTagName("script"), g);
                            h.splice.apply(h, [j + 1, 0].concat(s))
                        }
                        d.appendChild(h[j])
                    }
            }
            return h
        },
        cleanData: function(a) {
            var b, c, d = f.cache,
                e = f.event.special,
                g = f.support.deleteExpando;
            for (var h = 0, i;
                (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bq = /alpha\([^)]*\)/i,
        br = /opacity=([^)]*)/,
        bs = /([A-Z]|^ms)/g,
        bt = /^-?\d+(?:px)?$/i,
        bu = /^-?\d/,
        bv = /^([\-+])=([\-+.\de]+)/,
        bw = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bx = ["Left", "Right"],
        by = ["Top", "Bottom"],
        bz, bA, bB;
    f.fn.css = function(a, c) {
        if (arguments.length === 2 && c === b) return this;
        return f.access(this, a, c, !0, function(a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = bz(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c),
                    j = a.style,
                    k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bv.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                    j[c] = d
                } catch (l) {}
            }
        },
        css: function(a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (bz) return bz(a, c)
        },
        swap: function(a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        }
    }), f.curCSS = f.css, f.each(["height", "width"], function(a, b) {
        f.cssHooks[b] = {
            get: function(a, c, d) {
                var e;
                if (c) {
                    if (a.offsetWidth !== 0) return bC(a, b, d);
                    f.swap(a, bw, function() {
                        e = bC(a, b, d)
                    });
                    return e
                }
            },
            set: function(a, b) {
                if (!bt.test(b)) return b;
                b = parseFloat(b);
                if (b >= 0) return b + "px"
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function(a, b) {
            return br.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bq, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bq.test(g) ? g.replace(bq, e) : g + " " + e
        }
    }), f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function(a, b) {
                var c;
                f.swap(a, {
                    display: "inline-block"
                }, function() {
                    b ? c = bz(a, "margin-right", "marginRight") : c = a.style.marginRight
                });
                return c
            }
        })
    }), c.defaultView && c.defaultView.getComputedStyle && (bA = function(a, b) {
        var c, d, e;
        b = b.replace(bs, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b)));
        return c
    }), c.documentElement.currentStyle && (bB = function(a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        f === null && g && (e = g[b]) && (f = e), !bt.test(f) && bu.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), bz = bA || bB, f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function(a) {
        return !f.expr.filters.hidden(a)
    });
    var bD = /%20/g,
        bE = /\[\]$/,
        bF = /\r?\n/g,
        bG = /#.*$/,
        bH = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bI = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bJ = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bK = /^(?:GET|HEAD)$/,
        bL = /^\/\//,
        bM = /\?/,
        bN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bO = /^(?:select|textarea)/i,
        bP = /\s+/,
        bQ = /([?&])_=[^&]*/,
        bR = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bS = f.fn.load,
        bT = {},
        bU = {},
        bV, bW, bX = ["*/"] + ["*"];
    try {
        bV = e.href
    } catch (bY) {
        bV = c.createElement("a"), bV.href = "", bV = bV.href
    }
    bW = bR.exec(bV.toLowerCase()) || [], f.fn.extend({
        load: function(a, c, d) {
            if (typeof a != "string" && bS) return bS.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function(a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bN, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || bO.test(this.nodeName) || bI.test(this.type))
            }).map(function(a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bF, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bF, "\r\n")
                }
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        f.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function(a, c) {
        f[c] = function(a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }), f.extend({
        getScript: function(a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            b ? b_(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b_(a, b);
            return a
        },
        ajaxSettings: {
            url: bV,
            isLocal: bJ.test(bW[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bX
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bZ(bT),
        ajaxTransport: bZ(bU),
        ajax: function(a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                        x = l ? cb(d, v, l) : b,
                        y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                        }
                        if (a === 304) w = "notmodified", o = !0;
                        else try {
                            r = cc(d, x), w = "success", o = !0
                        } catch (A) {
                            w = "parsererror", u = A
                        }
                    } else {
                        u = w;
                        if (!w || a) w = "error", a < 0 && (a = 0)
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f.Callbacks("once memory"),
                j = d.statusCode || {},
                k, l = {},
                m = {},
                n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bH.exec(n)) o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function(a) {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function(a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function(a) {
                if (a) {
                    var b;
                    if (s < 2)
                        for (b in a) j[b] = [j[b], a[b]];
                    else b = a[v.status], v.then(b, b)
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bG, "").replace(bL, bW[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bP), d.crossDomain == null && (r = bR.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bW[1] && r[2] == bW[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bW[3] || (bW[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), b$(bT, d, c, v);
            if (s === 2) return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bK.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bM.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                        y = d.url.replace(bQ, "$1_=" + x);
                    d.url = y + (y === d.url ? (bM.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bX + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[u](d[u]);
            p = b$(bU, d, c, v);
            if (!p) w(-1, "No Transport");
            else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function() {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (s < 2) w(-1, z);
                    else throw z
                }
            }
            return v
        },
        param: function(a, c) {
            var d = [],
                e = function(a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (var g in a) ca(g, a[g], c, e);
            return d.join("&").replace(bD, "+")
        }
    }), f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cd = f.now(),
        ce = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return f.expando + "_" + cd++
        }
    }), f.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ce.test(b.url) || e && ce.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(ce, l), b.url === j && (e && (k = k.replace(ce, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function(a) {
                g = [a]
            }, d.always(function() {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function() {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function(f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function(a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                    }, e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var cf = a.ActiveXObject ? function() {
            for (var a in ch) ch[a](0, 1)
        } : !1,
        cg = 0,
        ch;
    f.ajaxSettings.xhr = a.ActiveXObject ? function() {
            return !this.isLocal && ci() || cj()
        } : ci,
        function(a) {
            f.extend(f.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function(c) {
            if (!c.crossDomain || f.support.cors) {
                var d;
                return {
                    send: function(e, g) {
                        var h = c.xhr(),
                            i, j;
                        c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                        if (c.xhrFields)
                            for (j in c.xhrFields) h[j] = c.xhrFields[j];
                        c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (j in e) h.setRequestHeader(j, e[j])
                        } catch (k) {}
                        h.send(c.hasContent && c.data || null), d = function(a, e) {
                            var j, k, l, m, n;
                            try {
                                if (d && (e || h.readyState === 4)) {
                                    d = b, i && (h.onreadystatechange = f.noop, cf && delete ch[i]);
                                    if (e) h.readyState !== 4 && h.abort();
                                    else {
                                        j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                                        try {
                                            k = h.statusText
                                        } catch (o) {
                                            k = ""
                                        }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                    }
                                }
                            } catch (p) {
                                e || g(-1, p)
                            }
                            m && g(j, k, m, l)
                        }, !c.async || h.readyState === 4 ? d() : (i = ++cg, cf && (ch || (ch = {}, f(a).unload(cf)), ch[i] = d), h.onreadystatechange = d)
                    },
                    abort: function() {
                        d && d(0, 1)
                    }
                }
            }
        });
    var ck = {},
        cl, cm, cn = /^(?:toggle|show|hide)$/,
        co = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        cp, cq = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        cr;
    f.fn.extend({
        show: function(a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(cu("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cv(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function(a, b, c) {
            if (a || a === 0) return this.animate(cu("hide", 3), a, b, c);
            var d, e, g = 0,
                h = this.length;
            for (; g < h; g++) d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function(a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(cu("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cv(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) j = new f.fx(this, b, i), h = a[i], cn.test(h) ? (o = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), o ? (f._data(this, "toggle" + i, o === "show" ? "hide" : "show"), j[o]()) : j[h]()) : (k = co.exec(h), l = j.cur(), k ? (m = parseFloat(k[2]), n = k[3] || (f.cssNumber[i] ? "" : "px"), n !== "px" && (f.style(this, i, (m || 1) + n), l = (m || 1) / j.cur() * l, f.style(this, i, l + n)), k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l), j.custom(l, m, n)) : j.custom(l, h, ""));
                return !0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function(a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function() {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }
                var b, c = !1,
                    e = f.timers,
                    g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null)
                    for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: cu("show", 1),
        slideUp: cu("hide", 1),
        slideToggle: cu("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        f.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function(a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            d.old = d.complete, d.complete = function(a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function(a, b, c, d) {
                return c + d * a
            },
            swing: function(a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function(a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this,
                g = f.fx;
            this.startTime = cr || cs(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function() {
                e.options.hide && f._data(e.elem, "fxshow" + e.prop) === b && f._data(e.elem, "fxshow" + e.prop, e.start)
            }, h() && f.timers.push(h) && !cp && (cp = setInterval(g.tick, g.interval))
        },
        show: function() {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b, c, d, e = cr || cs(),
                g = !0,
                h = this.elem,
                i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function(a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show)
                        for (b in i.animatedProperties) f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function() {
            var a, b = f.timers,
                c = 0;
            for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(cp), cp = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(["width", "height"], function(a, b) {
        f.fx.step[b] = function(a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        }
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
        return f.grep(f.timers, function(b) {
            return a === b.elem
        }).length
    });
    var cw = /^t(?:able|d|h)$/i,
        cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? f.fn.offset = function(a) {
        var b = this[0],
            c;
        if (a) return this.each(function(b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        try {
            c = b.getBoundingClientRect()
        } catch (d) {}
        var e = b.ownerDocument,
            g = e.documentElement;
        if (!c || !f.contains(g, b)) return c ? {
            top: c.top,
            left: c.left
        } : {
            top: 0,
            left: 0
        };
        var h = e.body,
            i = cy(e),
            j = g.clientTop || h.clientTop || 0,
            k = g.clientLeft || h.clientLeft || 0,
            l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop,
            m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft,
            n = c.top + l - j,
            o = c.left + m - k;
        return {
            top: n,
            left: o
        }
    } : f.fn.offset = function(a) {
        var b = this[0];
        if (a) return this.each(function(b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        var c, d = b.offsetParent,
            e = b,
            g = b.ownerDocument,
            h = g.documentElement,
            i = g.body,
            j = g.defaultView,
            k = j ? j.getComputedStyle(b, null) : b.currentStyle,
            l = b.offsetTop,
            m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
            if (f.support.fixedPosition && k.position === "fixed") break;
            c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c
        }
        if (k.position === "relative" || k.position === "static") l += i.offsetTop, m += i.offsetLeft;
        f.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
        return {
            top: l,
            left: m
        }
    }, f.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
                g = e.offset(),
                h = f.css(a, "top"),
                i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
                k = {},
                l = {},
                m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = cx.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }), f.each(["Left", "Top"], function(a, c) {
        var d = "scroll" + c;
        f.fn[d] = function(c) {
            var e, g;
            if (c === b) {
                e = this[0];
                if (!e) return null;
                g = cy(e);
                return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
            }
            return this.each(function() {
                g = cy(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
            })
        }
    }), f.each(["Height", "Width"], function(a, c) {
        var d = c.toLowerCase();
        f.fn["inner" + c] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, d, "padding")) : this[d]() : null
        }, f.fn["outer" + c] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : this[d]() : null
        }, f.fn[d] = function(a) {
            var e = this[0];
            if (!e) return a == null ? null : this;
            if (f.isFunction(a)) return this.each(function(b) {
                var c = f(this);
                c[d](a.call(this, b, c[d]()))
            });
            if (f.isWindow(e)) {
                var g = e.document.documentElement["client" + c],
                    h = e.document.body;
                return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
            }
            if (e.nodeType === 9) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b) {
                var i = f.css(e, d),
                    j = parseFloat(i);
                return f.isNumeric(j) ? j : i
            }
            return this.css(d, typeof a == "string" ? a : a + "px")
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return f
    })
})(window);
var $j = jQuery.noConflict();
(function($j, undefined) {
    var rails;
    $j.rails = rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]',
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])',
        disableSelector: 'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',
        enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',
        requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',
        fileInputSelector: 'input:file',
        linkDisableSelector: 'a[data-disable-with]',
        CSRFProtection: function(xhr) {
            var token = $j('meta[name="csrf-token"]').attr('content');
            if (token) xhr.setRequestHeader('X-CSRF-Token', token);
        },
        fire: function(obj, name, data) {
            var event = $j.Event(name);
            obj.trigger(event, data);
            return event.result !== false;
        },
        confirm: function(message) {
            return confirm(message);
        },
        ajax: function(options) {
            return $j.ajax(options);
        },
        handleRemote: function(element) {
            var method, url, data, crossDomain = element.data('cross-domain') || null,
                dataType = element.data('type') || ($j.ajaxSettings && $j.ajaxSettings.dataType),
                options;
            if (rails.fire(element, 'ajax:before')) {
                if (element.is('form')) {
                    method = element.attr('method');
                    url = element.attr('action');
                    data = element.serializeArray();
                    var button = element.data('ujs:submit-button');
                    if (button) {
                        data.push(button);
                        element.data('ujs:submit-button', null);
                    }
                } else if (element.is(rails.inputChangeSelector)) {
                    method = element.data('method');
                    url = element.data('url');
                    data = element.serialize();
                    if (element.data('params')) data = data + "&" + element.data('params');
                } else {
                    method = element.data('method');
                    url = element.attr('href');
                    data = element.data('params') || null;
                }
                options = {
                    type: method || 'GET',
                    data: data,
                    dataType: dataType,
                    crossDomain: crossDomain,
                    beforeSend: function(xhr, settings) {
                        if (settings.dataType === undefined) {
                            xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
                        }
                        return rails.fire(element, 'ajax:beforeSend', [xhr, settings]);
                    },
                    success: function(data, status, xhr) {
                        element.trigger('ajax:success', [data, status, xhr]);
                    },
                    complete: function(xhr, status) {
                        element.trigger('ajax:complete', [xhr, status]);
                    },
                    error: function(xhr, status, error) {
                        element.trigger('ajax:error', [xhr, status, error]);
                    }
                };
                if (url) {
                    options.url = url;
                }
                return rails.ajax(options);
            } else {
                return false;
            }
        },
        handleMethod: function(link) {
            var href = link.attr('href'),
                method = link.data('method'),
                target = link.attr('target'),
                csrf_token = $j('meta[name=csrf-token]').attr('content'),
                csrf_param = $j('meta[name=csrf-param]').attr('content'),
                form = $j('<form method="post" action="' + href + '"></form>'),
                metadata_input = '<input name="_method" value="' + method + '" type="hidden" />';
            if (csrf_param !== undefined && csrf_token !== undefined) {
                metadata_input += '<input name="' + csrf_param + '" value="' + csrf_token + '" type="hidden" />';
            }
            if (target) {
                form.attr('target', target);
            }
            form.hide().append(metadata_input).appendTo('body');
            form.submit();
        },
        disableFormElements: function(form) {
            form.find(rails.disableSelector).each(function() {
                var element = $j(this),
                    method = element.is('button') ? 'html' : 'val';
                element.data('ujs:enable-with', element[method]());
                element[method](element.data('disable-with'));
                element.prop('disabled', true);
            });
        },
        enableFormElements: function(form) {
            form.find(rails.enableSelector).each(function() {
                var element = $j(this),
                    method = element.is('button') ? 'html' : 'val';
                if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
                element.prop('disabled', false);
            });
        },
        allowAction: function(element) {
            var message = element.data('confirm'),
                answer = false,
                callback;
            if (!message) {
                return true;
            }
            if (rails.fire(element, 'confirm')) {
                answer = rails.confirm(message);
                callback = rails.fire(element, 'confirm:complete', [answer]);
            }
            return answer && callback;
        },
        blankInputs: function(form, specifiedSelector, nonBlank) {
            var inputs = $j(),
                input, selector = specifiedSelector || 'input,textarea';
            form.find(selector).each(function() {
                input = $j(this);
                if (nonBlank ? input.val() : !input.val()) {
                    inputs = inputs.add(input);
                }
            });
            return inputs.length ? inputs : false;
        },
        nonBlankInputs: function(form, specifiedSelector) {
            return rails.blankInputs(form, specifiedSelector, true);
        },
        stopEverything: function(e) {
            $j(e.target).trigger('ujs:everythingStopped');
            e.stopImmediatePropagation();
            return false;
        },
        callFormSubmitBindings: function(form, event) {
            var events = form.data('events'),
                continuePropagation = true;
            if (events !== undefined && events['submit'] !== undefined) {
                $j.each(events['submit'], function(i, obj) {
                    if (typeof obj.handler === 'function') return continuePropagation = obj.handler(event);
                });
            }
            return continuePropagation;
        },
        disableElement: function(element) {
            element.data('ujs:enable-with', element.html());
            element.html(element.data('disable-with'));
            element.bind('click.railsDisable', function(e) {
                return rails.stopEverything(e)
            });
        },
        enableElement: function(element) {
            if (element.data('ujs:enable-with') !== undefined) {
                element.html(element.data('ujs:enable-with'));
                element.data('ujs:enable-with', false);
            }
            element.unbind('click.railsDisable');
        }
    };
    $j.ajaxPrefilter(function(options, originalOptions, xhr) {
        if (!options.crossDomain) {
            rails.CSRFProtection(xhr);
        }
    });
    $j(document).delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($j(this));
    });
    $j(document).delegate(rails.linkClickSelector, 'click.rails', function(e) {
        var link = $j(this),
            method = link.data('method'),
            data = link.data('params');
        if (!rails.allowAction(link)) return rails.stopEverything(e);
        if (link.is(rails.linkDisableSelector)) rails.disableElement(link);
        if (link.data('remote') !== undefined) {
            if ((e.metaKey || e.ctrlKey) && (!method || method === 'GET') && !data) {
                return true;
            }
            if (rails.handleRemote(link) === false) {
                rails.enableElement(link);
            }
            return false;
        } else if (link.data('method')) {
            rails.handleMethod(link);
            return false;
        }
    });
    $j(document).delegate(rails.inputChangeSelector, 'change.rails', function(e) {
        var link = $j(this);
        if (!rails.allowAction(link)) return rails.stopEverything(e);
        rails.handleRemote(link);
        return false;
    });
    $j(document).delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
        var form = $j(this),
            remote = form.data('remote') !== undefined,
            blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector),
            nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (!rails.allowAction(form)) return rails.stopEverything(e);
        if (blankRequiredInputs && form.attr("novalidate") == undefined && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
            return rails.stopEverything(e);
        }
        if (remote) {
            if (nonBlankFileInputs) {
                return rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);
            }
            if (!$j.support.submitBubbles && $j().jquery < '1.7' && rails.callFormSubmitBindings(form, e) === false) return rails.stopEverything(e);
            rails.handleRemote(form);
            return false;
        } else {
            setTimeout(function() {
                rails.disableFormElements(form);
            }, 13);
        }
    });
    $j(document).delegate(rails.formInputClickSelector, 'click.rails', function(event) {
        var button = $j(this);
        if (!rails.allowAction(button)) return rails.stopEverything(event);
        var name = button.attr('name'),
            data = name ? {
                name: name,
                value: button.val()
            } : null;
        button.closest('form').data('ujs:submit-button', data);
    });
    $j(document).delegate(rails.formSubmitSelector, 'ajax:beforeSend.rails', function(event) {
        if (this == event.target) rails.disableFormElements($j(this));
    });
    $j(document).delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
        if (this == event.target) rails.enableFormElements($j(this));
    });
})(jQuery);
$j('#mobile_top_nav').ready(function() {
    $j('#search_button').click(function() {
        $j('#top_nav_search_box').toggle();
        $j('#mobile_top_nav .login_panel #search_button').toggleClass('search_open');
    });
    $j('#menu_button').click(function() {
        $j('#mobile_top_nav').toggleClass('menu');
    });
});