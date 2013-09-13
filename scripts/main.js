require([
    'lib/markdown', 
    'modules/preprocessor', 
    'modules/firstname', 
    'modules/lastname',
    'modules/booktestdrive',
    'modules/savebutton'
    ], function(ignore, pre, firstname, lastname, booktestdrive, savebutton) {

    var extenders = [pre, firstname, lastname, booktestdrive, savebutton];

    function Editor(input, preview) {

        this.update = function () {

            localStorage.markdowniusContent = input.value;

            var html = markdown.toHTML(input.value + "\n\n[SAVE]");

            for(var i = 0, ii = extenders.length; i < ii; i++){
                var extender = extenders[i];
                html = extender.parse(html);
            }

            preview.innerHTML = html;

        };
        input.editor = this;
        this.update();

        input.addEventListener("keyup", this.update, false);

        

    }

    var $ = function (id) { return document.getElementById(id); };

    var full = false;

    $("full").addEventListener("click", function() {

        full = !full;

        if (full) {
            $("edit").style.display = "none";
            $("full").innerHTML = "SHOW EDIT";
        }
        else {
            $("edit").style.display = "block";
            $("full").innerHTML = "HIDE EDIT";
        }
    }, false);


    if(localStorage.markdowniusContent) {
        $("edit").value = localStorage.markdowniusContent;
    }

    new Editor($("edit"), $("preview"));

    });
