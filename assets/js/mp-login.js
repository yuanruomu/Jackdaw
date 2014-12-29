define(function(require, exports, module) {
    var $ = require('jquery');
    var Placeholders = require('Placeholders');
    var change = function() {
        var headh = $('.head').height(), menuw = $('.menu-wrap').height(), footh = $('.footer').height(), $login_form = $('.login-form');
        // 先解除绑定
        $(window).unbind('resize', change);

        // 需要执行的事件
        $login_form.css({
            top : ($(window).height() - (headh) - (menuw) - (footh) - $login_form.height()) / 2,
            display : 'block'
        });
        // 重新绑定
        setTimeout(function() {
            $(window).bind('resize', change);
        }, 10);
    };
    // 立即执行监控
    $(window).bind('resize', change());

    // 登录注册
    var login = {
        init : function() {
            login.name();
            login.pwd();
        },
        name : function() {
            var $hand = $('#username'), $label = $('#login-body').find('.userl'), 
            $close = $('#login-body').find('.ico-user-close');
            login.action($hand, $label, $close);
        },
        pwd : function() {
            var $hand = $('#password'), $label = $('#login-body').find('.passl'), 
            $close = $('#login-body').find('.ico-password-close');
            login.action($hand, $label, $close);
        },
        action : function($hand, $label, $close) {
            var input = null;

            $hand.focus(function() {
                $label.hide();

            }).keyup(function() {
                $close.fadeIn();

            }).blur(function() {
                input = $(this).val();
                if (!!input.length) {
                    // $close.hide();
                } else {
                    $label.show();
                }
            });
            $close.on('click', function() {
                $hand.val('');
                $(this).hide();
                $label.show();
            });
        }
    };
    
    login.init();
    
    $("#username").focus(function(){
        $(".umes").html("");
    });
    $("#password").focus(function(){
        $(".pmes").html("");
    });
    $("#password").change(function(){
        if($(this).val().length > 0){
            $(".passl").hide();
        }
    });
    
    $("#loginBtn").click(function(e) {
        e.preventDefault();
        $(".umes").html("");
        $(".pmes").html("");
        var username = $.trim($('#username').val());
        var password = $.trim($('#password').val());
        /* if ('' == username || username == '求应号 / 手机号') {
            $(".umes").html("用户名不能为空");
            return;
        }
        if ('' == password) {
            $(".pmes").html("密码不能为空");
            return;
        } */

        $.ajax({
            url : '/security?d=' + new Date(),
            type : 'post',
            dataType : 'json',
            data : {
                username : username,
                password : password
            // remember:true
            },
            cache:false,
            success : function(response) {
                if (response && response.errorCode == 0) {
                    top.location = "/main";
                } else {
                    if ("Bad credentials" == response.errors.username) {
                        $(".umes").html("用户名或密码不正确");
                    } else if ("User is disabled" == response.errors.username) {
                        $(".umes").html("用户已被冻结");
                    } else {
                        $(".umes").html(response.errors.username);
                    }
                }
            }
        });
    });
});