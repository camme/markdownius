define(['templates'], function(templates) {

    var template = templates("#field-lastname");

    function parse(input) {

        input = input.replace(/\[lastname\]/i, template);

        return input;

    }

    return {
        parse: parse
    };

});
