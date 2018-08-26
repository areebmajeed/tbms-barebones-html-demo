"use strict";

(function () {
    var span = document.createElement('span');

    span.className = 'fa';
    span.style.display = 'none';
    document.body.insertBefore(span, document.body.firstChild);

    function css(element, property) {
        return window.getComputedStyle(element, null).getPropertyValue(property);
    }

    if (css(span, 'font-family') !== 'FontAwesome') {
        var headHTML = document.head.innerHTML;
        headHTML += '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">';
        document.head.innerHTML = headHTML;
    }

    document.body.removeChild(span);

})();

$(document).ready(function () {
    init();
});

function init() {

    $('[data-toggle="popover"]').popover();
    $('[data-toggle=tooltip]').tooltip({container: 'body'});

}