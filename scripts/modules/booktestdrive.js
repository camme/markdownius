define(['templates'], function(templates) {

    var template = templates("#field-booktestdrive");

    function parse(input) {

        input = input.replace(/\[booktestdrive\]/i, template);

        return input;

    }

    return {
        parse: parse
    };

});
