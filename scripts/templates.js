define(['lib/text!templates.html'], function(templates) {


    var virtualBody = document.createElement("div");

    virtualBody.innerHTML = templates;

    return function(fieldId) {

        var dom = virtualBody.querySelector(fieldId);

        return dom ? dom.outerHTML : "";

    };


});
