/**
 * Created with JetBrains WebStorm.
 * User: umerhassan9418hotmai
 * Date: 6/17/13
 * Time: 5:43 PM
 * To change this template use File | Settings | File Templates.
 */

$(function(){

    $(".button").on("click",function(){


        var display,ident;
     ident=$(this).attr('id');
     display=$('#'+ident).val();

      $("#screen").val(display);

    })




}) ;