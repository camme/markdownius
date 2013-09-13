define(['templates'], function(templates) {

    var template = templates("#field-custominput");

    function parse(input) {

		var re = /\[INPUT:(.*?)\]/g;

		var match = re.exec(input);

		while (match) {
		
			var itemTemplate = template + "";

			itemTemplate = itemTemplate.replace("{{label}}", match[1]);
			input = input.replace(match[0], itemTemplate);

			match = re.exec(input);

		}

        return input;

    }

    return {
        parse: parse
    };

});
