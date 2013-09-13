define(['templates'], function(templates) {

    var template = templates("#field-row");

    function parse(input) {
        input = input.replace(/(\[.*\]\[.*\])/gi, "<div class='field-row'>$1</div>")
        return input;
    }

    return {
        parse: parse
    };

});
