function reset(){$(".register-item").removeClass("has-error"),$(".alert-danger").remove()}function showError(e,a){var t='<small class="help-block alert alert-danger checkright">'+a+"</small>";e.parents(".register-item").addClass("has-error").after(t)}$(function(){var a=function(a){$("#confirmPassword").click(function(e){a.getValidate()||($("#notice").addClass("show").removeClass("hide"),setTimeout(function(){$("#notice").addClass("hide").removeClass("show")},2e3),$("#captcha").append('<small class="help-block alert alert-danger checkright">请先拖动验证码到相应位置！</small>'),setTimeout(function(){$("#captcha").find(".alert-danger").remove()},2e3),e.preventDefault())}),a.appendTo("#captcha"),a.onReady(function(){$("#wait")[0].className="hide"}),a.onSuccess(function(){var e=a.getValidate();$("#challenge").val(e.geetest_challenge),$("#seccode").val(e.geetest_seccode),$("#validate").val(e.geetest_validate)})};$.ajax({url:"/home/register/geetest?t="+(new Date).getTime(),data:{__CSRF__:G_csrf},type:"get",dataType:"json",success:function(e){initGeetest({gt:e.gt,challenge:e.challenge,product:"float",offline:!e.success},a)}})}),$(document).keyup(function(e){13==e.keyCode&&$("#confirmPassword").trigger("click")}),$("#confirmPassword").click(function(){if(reset(),$("#forgetCompleteForm").validate({error:function(e,a){showError(e,a),e.one("keyup",function(){$(this).parents(".form-group").removeClass("has-error has-feedback").find(".errorinfo,.glyphicon-remove").addClass("hidden")})},submitBtn:{flag:!0}})){var e={code:$("#code").val(),password:$("#password").val(),code:$("#code").val(),geetest_challenge:$("#challenge").val(),geetest_seccode:$("#seccode").val(),geetest_validate:$("#validate").val(),__CSRF__:$("#csrf").val()};""!==$("#challenge").val()&&""!==$("#seccode").val()&&""!==$("#validate").val()&&$.ajax({url:"/login/successpassword",data:e,type:"POST",success:function(e){0===e.errno?(alert(e.errmsg),window.location.href="/login.html"):alert(e.errmsg)}})}return!1});