/*!
 * artDialog
 * Date: 2014-06-29
 * https://github.com/aui/artDialog
 * (c) 2009-2014 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://www.gnu.org/licenses/lgpl-2.1.html
 */
define(function (require) {

//var $ = require('jquery');
var Popup = require('./popup');
var defaults = require('./dialog-config');
var css = defaults.cssUri;


// css loader: RequireJS & SeaJS
if (css) {
    var fn = require[require.toUrl ? 'toUrl' : 'resolve'];
    if (fn) {
        css = fn(css);
        css = '<link rel="stylesheet" href="' + css + '" />';
        if ($('base')[0]) {
            $('base').before(css);
        } else {
            $('head').append(css);
        } 
    }
}


var _count = 0;
var _expando = new Date() - 0; // Data.now()
var _isIE6 = !('minWidth' in $('html')[0].style);
var _isMobile = 'createTouch' in document && !('onmousemove' in document)
    || /(iPhone|iPad|iPod)/i.test(navigator.userAgent);
var _isFixed = !_isIE6 && !_isMobile;


var artDialog = function (options, ok, cancel) {

    var originalOptions = options = options || {};
    

    if (typeof options === 'string' || options.nodeType === 1) {
    
        options = {content: options, fixed: !_isMobile};
    }
    

    options = $.extend(true, {}, artDialog.defaults, options);
    options._ = originalOptions;

    var id = options.id = options.id || _expando + _count;
    var api = artDialog.get(id);
    
    
    // �������ͬ���ĶԻ��������ֱ�ӷ���
    if (api) {
        return api.focus();
    }
    
    
    // Ŀǰ�����ƶ��豸��fixed֧�ֲ��ã����ô�����
    if (!_isFixed) {
        options.fixed = false;
    }


    // ��ݹر�֧�֣�����Ի�������ٹرնԻ���
    if (options.quickClose) {
        options.modal = true;
        if (!originalOptions.backdropOpacity) {
            options.backdropOpacity = 0;
        }
    }
    

    // ��ť��
    if (!$.isArray(options.button)) {
        options.button = [];
    }


    // ȡ����ť
    if (cancel !== undefined) {
        options.cancel = cancel;
    }
    
    if (options.cancel) {
        options.button.push({
            id: 'cancel',
            value: options.cancelValue,
            callback: options.cancel,
            display: options.cancelDisplay
        });
    }
    
    
    // ȷ����ť
    if (ok !== undefined) {
        options.ok = ok;
    }
    
    if (options.ok) {
        options.button.push({
            id: 'ok',
            value: options.okValue,
            callback: options.ok,
            autofocus: true
        });
    }
    

    return artDialog.list[id] = new artDialog.create(options);
};

var popup = function () {};
popup.prototype = Popup.prototype;
var prototype = artDialog.prototype = new popup();

artDialog.create = function (options) {
    var that = this;

    $.extend(this, new Popup());

    var $popup = $(this.node).html(options.innerHTML);

    this.options = options;
    this._popup = $popup;

    
    $.each(options, function (name, value) {
        if (typeof that[name] === 'function') {
            that[name](value);
        } else {
            that[name] = value;
        }
    });


    // ���� zIndex ȫ������
    if (options.zIndex) {
        Popup.zIndex = options.zIndex;
    }


    // ���� ARIA ��Ϣ
    $popup.attr({
        'aria-labelledby': this._$('title')
            .attr('id', 'title:' + this.id).attr('id'),
        'aria-describedby': this._$('content')
            .attr('id', 'content:' + this.id).attr('id')
    });


    // �رհ�ť
    this._$('close')
    .css('display', this.cancel === false ? 'none' : '')
    .attr('title', this.cancelValue)
    .on('click', function (event) {
        that._trigger('cancel');
        event.preventDefault();
    });
    

    // ����Ӿ�����
    this._$('dialog').addClass(this.skin);
    this._$('body').css('padding', this.padding);


    // ��ť����
    $popup.on('click', '[data-id]', function (event) {
        var $this = $(this);
        if (!$this.attr('disabled')) {// IE BUG
            that._trigger($this.data('id'));
        }
    
        event.preventDefault();
    });


    // ��������Զ��رնԻ���
    if (options.quickClose) {
        $(this.backdrop).on(
            'onmousedown' in document ? 'mousedown' : 'click',
            function () {
            that._trigger('cancel');
        });
    }


    // ESC ��ݼ��رնԻ���
    this._esc = function (event) {
        var target = event.target;
        var nodeName = target.nodeName;
        var rinput = /^input|textarea$/i;
        var isTop = Popup.current === that;
        var keyCode = event.keyCode;

        // ��������״̬�� ESC ������ر�
        if (!isTop || rinput.test(nodeName) && target.type !== 'button') {
            return;
        }
        
        if (keyCode === 27) {
            that._trigger('cancel');
        }
    };

    $(document).on('keydown', this._esc);
    this.addEventListener('remove', function () {
        $(document).off('keydown', this._esc);
        delete artDialog.list[this.id];
    });


    _count ++;
    
    artDialog.oncreate(this);

    return this;
};


artDialog.create.prototype = prototype;



$.extend(prototype, {

    /**
     * ��ʾ�Ի���
     * @name artDialog.prototype.show
     * @param   {HTMLElement Object, Event Object}  ָ��λ�ã���ѡ��
     */
    
    /**
     * ��ʾ�Ի���ģ̬��
     * @name artDialog.prototype.showModal
     * @param   {HTMLElement Object, Event Object}  ָ��λ�ã���ѡ��
     */

    /**
     * �رնԻ���
     * @name artDialog.prototype.close
     * @param   {String, Number}    ����ֵ���ɱ� onclose �¼���ȡ����ѡ��
     */

    /**
     * ���ٶԻ���
     * @name artDialog.prototype.remove
     */

    /**
     * ���öԻ���λ��
     * @name artDialog.prototype.reset
     */

    /**
     * �öԻ���۽���ͬʱ�ö���
     * @name artDialog.prototype.focus
     */

    /**
     * �öԻ���ʧ����ͬʱ�ö���
     * @name artDialog.prototype.blur
     */

    /**
     * ����¼�
     * @param   {String}    �¼�����
     * @param   {Function}  ��������
     * @name artDialog.prototype.addEventListener
     */

    /**
     * ɾ���¼�
     * @param   {String}    �¼�����
     * @param   {Function}  ��������
     * @name artDialog.prototype.removeEventListener
     */

    /**
     * �Ի�����ʾ�¼����� show()��showModal() ִ��
     * @name artDialog.prototype.onshow
     * @event
     */

    /**
     * �ر��¼����� close() ִ��
     * @name artDialog.prototype.onclose
     * @event
     */

    /**
     * ����ǰ�¼����� remove() ǰִ��
     * @name artDialog.prototype.onbeforeremove
     * @event
     */

    /**
     * �����¼����� remove() ִ��
     * @name artDialog.prototype.onremove
     * @event
     */

    /**
     * �����¼����� reset() ִ��
     * @name artDialog.prototype.onreset
     * @event
     */

    /**
     * �����¼����� foucs() ִ��
     * @name artDialog.prototype.onfocus
     * @event
     */

    /**
     * ʧ���¼����� blur() ִ��
     * @name artDialog.prototype.onblur
     * @event
     */

    
    /**
     * ��������
     * @param    {String, HTMLElement}   ����
     */
    content: function (html) {
    
        this._$('content').empty('')
        [typeof html === 'object' ? 'append' : 'html'](html);
                
        return this.reset();
    },
    
    
    /**
     * ���ñ���
     * @param    {String}   ��������
     */
    title: function (text) {
        this._$('title').text(text);
        this._$('header')[text ? 'show' : 'hide']();
        return this;
    },


    /** ���ÿ�� */
    width: function (value) {
        this._$('content').css('width', value);
        return this.reset();
    },


    /** ���ø߶� */
    height: function (value) {
        this._$('content').css('height', value);
        return this.reset();
    },


    /**
     * ���ð�ť��
     * @param   {Array, String}
     */
    button: function (args) {
        args = args || [];
        var that = this;
        var html = '';
        var number = 0;
        this.callbacks = {};

        
           
        if (typeof args === 'string') {
            html = args;
        } else {
            $.each(args, function (i, val) {

                val.id = val.id || val.value;
                that.callbacks[val.id] = val.callback;

                var style = '';

                if (val.display === false) {
                    style = ' style="display:none"';
                } else {
                    number ++;
                }

                html +=
                  '<button'
                + ' type="button"'
                + ' data-id="' + val.id + '"'
                + style
                + (val.disabled ? ' disabled' : '')
                + (val.autofocus ? ' autofocus class="ui-dialog-autofocus"' : '')
                + '>'
                +   val.value
                + '</button>';

            });
        }

        this._$('footer')[number ? 'show' : 'hide']();
        this._$('button').html(html);
        
        return this;
    },


    statusbar: function (html) {
        this._$('statusbar')
        .html(html)[html ? 'show' : 'hide']();

        return this;
    },


    _$: function (i) {
        return this._popup.find('[i=' + i + ']');
    },
    
    
    // ������ť�ص�����
    _trigger: function (id) {
    
        var fn = this.callbacks[id];
            
        return typeof fn !== 'function' || fn.call(this) !== false ?
            this.close().remove() : this;
    }
    
});



artDialog.oncreate = $.noop;



/** ���ĶԻ���API */
artDialog.getCurrent = function () {
    return Popup.current;
};



/**
 * ���� ID ��ȡĳ�Ի��� API
 * @param    {String}    �Ի��� ID
 * @return   {Object}    �Ի��� API (ʵ��)
 */
artDialog.get = function (id) {
    return id === undefined
    ? artDialog.list
    : artDialog.list[id];
};

artDialog.list = {};



/**
 * Ĭ������
 */
artDialog.defaults = defaults;



return artDialog;

});


