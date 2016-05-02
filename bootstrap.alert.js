$(function () {
    $('<div class="modal hide" id="modal_alert"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4></h4></div><div class="modal-body"></div><div class="modal-footer"><a href="#" class="btn" data-dismiss="modal" aria-hidden="true">关闭</a></div></div>').appendTo(document.body);
    $('<div class="modal hide" id="modal_confirm"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4></h4></div><div class="modal-body"></div><div class="modal-footer"><a href="#" class="btn btn-primary" id="btn-confirm-ok"  data-dismiss="modal" aria-hidden="true">确定</a><a href="#" class="btn" data-dismiss="modal" aria-hidden="true">取消</a></div></div>').appendTo(document.body);
    $('<div class="modal hide" id="modal_mask"><div class="modal-header"><h4></h4></div><div class="modal-body"></div><div class="modal-footer"></div></div>').appendTo(document.body);
    $.alert = function (msg, title, callback, options) {
        options = options || {};
        title = title || "提示";
        var $modal = $("#modal_alert");
        $modal.find(".modal-header").find("h4").html(title);
        $modal.find(".modal-body").html(msg);
        $modal.off("hidden").on("hidden", callback);
        $modal.modal(options);
    };
    $.confirm_options = {confirm_clicked: false};
    $.confirm = function (msg, title, confirm_callback, cancel_callback, options) {
        var $modal = $("#modal_confirm");
        options = options || {};
        title = title || "提示";
        $modal.find(".modal-header").find("h4").html(title);
        $modal.find(".modal-body").html(msg);
        $.confirm_options.confirm_callback = confirm_callback;
        $.confirm_options.cancel_callback = cancel_callback;

        $("#btn-confirm-ok").off("click").on("click", function () {
            $.confirm_options.confirm_clicked = true;
        });
        $modal.modal(options);
    };
    $("#modal_confirm").on("hidden", function () {
        if ($.confirm_options.confirm_clicked && $.confirm_options.confirm_callback) {
            $.confirm_options.confirm_clicked = false;
            $.confirm_options.confirm_callback();
        }
        else if (!$.confirm_options.confirm_clicked && $.confirm_options.cancel_callback) {
            $.confirm_options.cancel_callback();
        }
    });
    $.mask = function (options) {
        var $modal = $("#modal_mask");
        if ($.type(options) == 'string') {
            switch (options) {
                case "close":
                case "hide":
                    $modal.modal('hide');
                    break;
            }
        }
        else {
            options = $.extend({title: "提示", msg: '', timeout: 0}, options);
            $modal.find(".modal-header").find("h4").html(options.title);
            $modal.find(".modal-body").html(options.msg);
            $modal.modal({keyboard: false, backdrop: 'static'});
            if (options.timeout) {
                setTimeout(function () {
                    $modal.modal('hide');
                }, options.timeout)
            }
        }
    }
});
