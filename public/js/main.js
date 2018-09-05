//-----------------------Kim's Code--------------------------------

$(function () {

    var letters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
    //let data = {letter: [letters]};

    // If option 1 search then show option 1 items and remove options 2 and 3
    $(".opt1").change(function () {
        console.log("this selected");
        $(".intro").addClass("hidden");
        $(".opt1-questions").removeClass("hidden");
        $("form").addClass("form-drop");
        $("form").removeClass("form-row");
        $(".opt2").addClass("hidden");
        $(".opt3").addClass("hidden");
        $(".initial-opts").addClass("hidden");
        $(".opt1").unbind();
    });


    $(".opt2").change(function () {
        console.log("this selected");
        $(".intro").addClass("hidden");
        $(".opt2-questions").removeClass("hidden");
        $("form").addClass("form-drop");
        $("form").removeClass("form-row");
        $(".opt1").addClass("hidden");
        $(".opt3").addClass("hidden");
        $(".initial-opts").addClass("hidden");
        $(".opt2").unbind();
    });

    $(".opt3").change(function () {
        console.log("this selected");
        $(".intro").addClass("hidden");
        $(".opt3-questions").removeClass("hidden");
        $("form").addClass("form-drop");
        $("form").removeClass("form-row");
        $(".opt1").addClass("hidden");
        $(".opt2").addClass("hidden");
        $(".initial-opts").addClass("hidden");
        $(".opt3").unbind();
    });

    // Use function using handlebars to populate alphabet in dropdown menu
    console.log(letters);

    function renderLetters(letters) {
        //console.log("data passed")
        let lettersData = document.getElementById("lettersTemplate").innerHTML;
        //console.log(projectData)
        let compiledProject = Handlebars.compile(lettersData);
        //console.log(compiledProject(myProjects));
        let myGeneratedHTML = compiledProject(letters);
        console.log(typeof myGeneratedHTML);
        $("#starts-with").append(myGeneratedHTML);
    }

    function renderLettersTwo(letters) {
        //console.log("data passed")
        let lettersData = document.getElementById("originTemplate").innerHTML;
        //console.log(projectData)
        let compiledProject = Handlebars.compile(lettersData);
        //console.log(compiledProject(myProjects));
        let myGeneratedHTML = compiledProject(letters);
        console.log(typeof myGeneratedHTML);
        $("#origin-starts-with").append(myGeneratedHTML);
    }

    // If Random Name search is selected...
    $("#inputGroupSelect01").change(function () {

        // Shows search options for random name search
        console.log("option 1 selector 1 was selected");
        $("#starts-with").removeClass("hidden");
        $("#starts-with").html("");

        // Appends appropriate text for first letter search
        if ($(this).val() === "1") {
            console.log("first letter text added");
            $(".first-letter").append("<p> Enter the letter you wish the first name to begin with: <p>");
        } else if ($(this).val() === "2") {
            console.log("first letter text added");
            $(".first-letter").append("<p> Enter the letters you wish the first name and the middle name to begin with: <p>");
        } else if ($(this).val() === "3") {
            console.log("first letter text added");
            $(".first-letter").append("<p> Enter the letters you wish the first name, the middle name, and the second middle name to begin with: <p>");
        }

        // Loops through values of number of names wanted and renders alphabet dropdowns for each
        for (let i = 0; i < this.value; i++) {
            console.log(i);
            renderLetters(letters);
        }
    });


    //Craig utilities
    $('#starts-with').on('change', function () {
        console.log("Name1 Value:", $('#name1').val())
    })

    $('#opt1-btn').on('click', function () {
        let numNames = $('#inputGroupSelect01').val();
        console.log("numNames: ", numNames);
        let firstLetter = $('#name1').val();
        console.log("firstLetterVal:", firstLetter);
        let gender = $('#inputGroupSelect02').val();
        console.log("GenderVal:", gender);
        let lastName = $('#last-name').val();
        console.log("lastName:", lastName);

        // Do an api request depending on conditions above
        if (gender == 1) { //girl
            $.get(`/api/wild/${firstLetter}/f`).then(function (data) {
                console.log(data);
                alert("Data: " + data + "\nStatus: " + status);
            });
        } else if (gender == 2) { //boy
            $.get(`/api/wild/${firstLetter}/m`).then(function (data) {
                console.log(data);
                alert("Data: " + data + "\nStatus: " + status);
            });
        } else { //all
            $.get(`/api/wild/${firstLetter}/`).then(function (data) {
                console.log(data);
                alert("Data: " + data + "\nStatus: " + status);
            });
        }
    });

    }
  
  
  });


    function renderModal(data) {

    }
    $("#opt2-search").on('click', function () {
        let opt2NumNames = $('#numNames').val();
        let opt2FirstName = $('#origin-first-name').val();
        let opt2LastName = $('#origin-last-name').val();
        let opt2Gender = $('#inputGroupSelect03').val();

        let opt2Sex = "";
        if (opt2Gender === "1") opt2Sex = "f"
        if (opt2Gender === "2") opt2Sex = "m"


        console.log("buttonisclick");

        let queryURL = `https://www.behindthename.com/api/lookup.json?name=${opt2FirstName}&key=cr909584168`;

        $.get(queryURL).then(function (nameData) { //first query (getting origin info)
            console.log(nameData); //info back about name    
            let nameOrigin = nameData[0].usages[0].usage_code; //this gets the code of origin, ex sco for scottish
            console.log("nameOrigin:", nameOrigin);
            let country = nameData[0].usages[0].usage_full;
            let queryURL2 = `https://www.behindthename.com/api/random.json?usage=${nameOrigin}&gender=${opt2Sex}&number=6&key=cr909584168`; //gets 6 names of same origin

            $.get(queryURL2).then(function (relatedNames) { //new query using last names origin
                console.log(relatedNames); //relatedNames is an array of 6 names;
                // $(".display-origin-data").removeClass("hidden")
                $('#lastnamep').text(`${opt2FirstName} is a ${country} name`)
                console.log(relatedNames.names[0]);
                console.log("typeofvariable",typeof opt2NumNames)
                console.log(opt2LastName);
                if (opt2NumNames === "1") {
                    $('#congratsp').text(`Welcome baby ${relatedNames.names[0]} ${opt2LastName} `);
                }

                if (opt2NumNames === "2") {
                    $('#congratsp').text(`Welcome baby ${relatedNames.names[0]} ${relatedNames.names[1]} ${opt2LastName} `);
                }

                if (opt2NumNames === "3") {
                    $('#congratsp').text(`Welcome baby ${relatedNames.names[0]} ${relatedNames.names[1]} ${relatedNames.names[2]} ${opt2LastName} `);
                }
            });
        });

    });

});
//-----------------------------------------------------------------




// If Origin name search is selected...
$("#inputGroupSelect04").change(function () {

    // Shows search options for random name search
    console.log("option 2 selector 1 was selected");
    $("#origin-starts-with").removeClass("hidden");
    $("#origin-starts-with").html("");

    // Appends appropriate text for first letter search
    if ($(this).val() === "1") {
        console.log("first letter text added");
        $(".origin-first-letter").append("<p> Enter the letter you wish the first name to begin with: <p>");
    } else if ($(this).val() === "2") {
        console.log("first letter text added");
        $(".origin-first-letter").append("<p> Enter the letters you wish the first name and the middle name to begin with: <p>");
    } else if ($(this).val() === "3") {
        console.log("first letter text added");
        $(".origin-first-letter").append("<p> Enter the letters you wish the first name, the middle name, and the second middle name to begin with: <p>");
    }

    // Loops through values of number of names wanted and renders alphabet dropdowns for each
    for (let i = 0; i < this.value; i++) {
        console.log(i);
        renderLettersTwo(letters);
    }
});