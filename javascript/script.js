$(document).ready(function () {
    $("#create").on("click", function (event) {
        event.preventDefault();
        var userText = $("#memeInput").val();
        var spongeCase = toSpongeCase(userText);
        $(".result").append(spongeCase);

    });

    function toSpongeCase(userText) {
        var spongeArray = userText.split("")

        var i;
        for (i = 0; i < spongeArray.length; i++) {
            if (i %2 == 0) {
                spongeArray[i] = spongeArray[i].toUpperCase();
            } else {
                spongeArray[i] = spongeArray[i].toLowerCase();
            }
        };
        return spongeArray;
    };

});




