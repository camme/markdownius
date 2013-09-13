define(['templates'], function(templates) {

    var template = templates("#field-savebutton");

    function parse(input) {

        input = input.replace(/\[save\]/i, template);

        return input;

    }

    return {
        parse: parse
    };

});
