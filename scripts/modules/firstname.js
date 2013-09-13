define(['templates'], function(templates) {

    var template = templates("#field-firstname");

    function parse(input) {

        input = input.replace(/\[firstname\]/i, template);
        //input = input.replace(/FIRSTNAME/, template);

        return input;

    }

    return {
        parse: parse
    };

});
