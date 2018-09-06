//-----------------------Kim's Code--------------------------------

$(function () {

    var letters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
    //let data = {letter: [letters]};

    // Resets to website location homepage html
    $("#reset").on('click', function refreshPage() {
        window.location.reload();
    });

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
    //console.log(letters);

    let lettersData = {};
    let compiledProject = '';
    let myGeneratedHTML = '';

    function renderLetters(letters) {
        //console.log("data passed")
        lettersData = document.getElementById("lettersTemplate").innerHTML;
        //console.log(projectData)
        compiledProject = Handlebars.compile(lettersData);
        //console.log(compiledProject(myProjects));
        myGeneratedHTML = compiledProject(letters);
        console.log(typeof myGeneratedHTML);
        $("#starts-with").append(myGeneratedHTML);
    }

    function renderLettersTwo(letters) {
        //console.log("data passed")
        lettersData = document.getElementById("lettersTemplate2").innerHTML;
        console.log('this be ' + typeof letterData)
        compiledProject = Handlebars.compile(lettersData);
        //console.log(compiledProject(myProjects));
        myGeneratedHTML = compiledProject(letters);
        console.log(typeof myGeneratedHTML);
        $("#starts-with").append(myGeneratedHTML);
    }

    function renderLettersThree(letters) {
        //console.log("data passed")
        lettersData = document.getElementById("lettersTemplate3").innerHTML;
        //console.log(projectData)
        compiledProject = Handlebars.compile(lettersData);
        //console.log(compiledProject(myProjects));
        myGeneratedHTML = compiledProject(letters);
        console.log(typeof myGeneratedHTML);
        $("#starts-with").append(myGeneratedHTML);
    }

    function renderLettersFour(letters) {
        //console.log("data passed")
        let lettersData = document.getElementById("originTemplate").innerHTML;
        //console.log(projectData)
        let compiledProject = Handlebars.compile(lettersData);
        //console.log(compiledProject(myProjects));
        let myGeneratedHTML = compiledProject(letters);
        console.log(typeof myGeneratedHTML);
        $("#origin-starts-with").append(myGeneratedHTML);
    }

    // Hides the form and children and shows results element
    function displayResult() {
        console.log("displayResult function works");
        $("form").addClass("hidden");
        $("#result-div").removeClass("hidden");

    }

    // If Random Name search is selected...
    $("#inputGroupSelect01").change(function () {

        // Shows search options for random name search
        console.log("option 1 selector 1 was selected");
        $("#starts-with").removeClass("hidden");
        $("#starts-with").html("");

        // Adds appropriate text for first letter search based on number of names selected
        if ($(this).val() === "1") {
            console.log("first letter text added");
            $(".first-letter").append("<p> Enter the letter you wish the first name to begin with: <p>");
            renderLetters(letters);

        } else if ($(this).val() === "2") {
            console.log("first letter text added");
            $(".first-letter").append("<p> Enter the letters you wish the first name and the middle name to begin with: <p>");
            renderLetters(letters);
            renderLettersTwo(letters);

        } else if ($(this).val() === "3") {
            console.log("first letter text added");
            $(".first-letter").append("<p> Enter the letters you wish the first name, the middle name, and the second middle name to begin with: <p>");
            renderLetters(letters);
            renderLettersTwo(letters);
            renderLettersThree(letters);
        }

        // (Craig/Kim) If random name search was selected, grab input values to run query search in database
        $('#opt1-btn').on('click', function () {

            let numNames = $('#inputGroupSelect01').val();
            console.log("numNames: ", numNames);
            let firstLetter = $('#name1 option:selected').val();
            console.log("firstLetterVal:", firstLetter);
            let middleLetter1 = $('#name2 option:selected').val();
            console.log("middleLetterVal1:", middleLetter1);
            let middleLetter2 = $('#name3 option:selected').val();
            console.log("middleLetterVal2:", middleLetter2);
            let gender = $('#inputGroupSelect02').val();
            console.log("GenderVal:", gender);
            let lastName = $('#last-name').val();
            console.log("lastName:", lastName);
            let fullName = '';
            let ranName = {};
            let fullNameArray = [];
            let randomFirstName = '';
            let randomMiddleName = '';
            let randomMiddleName2 = '';
            let ajax1 = false;
            let ajax2 = false;
            let ajax3 = false;

            // (Kim) Input validation for search
            if (firstLetter == 'Please pick a letter.' || middleLetter1 == 'Please pick a letter.' || middleLetter2 == 'Please pick a letter.') {
                alert('Please choose a letter for all fields.');
                return null;
            } else if (gender == 'What gender name?') {
                alert('Please select a gender');
                return null;
            } else if (lastName == null) {
                alert('Please enter a last name');
                return null;
            } else if (!lastName.match('^[a-zA-Z]{3,16}$')) {
                alert('Last name must only contain numbers and be 3-16 characters long. Please re-enter valid last name.');
                return null;
            }

            let displayFullName = function () {
                //Assign variable to combine all names in fullNameArray plus last name
                fullName = fullNameArray.join(' ') + ' ' + lastName;
                console.log('this is fullName: ' + fullName)

                //Add new element that displays the full random name
                displayResult();

                if (fullNameArray.length) {
                    $("#result-div").append(`<h1> Your baby's random name is...</h1><p id="result-deco"> ${fullName} </p>`)
                } else {
                    $("#result-div").append(`<h1> Oh No! There were no names found for your search! Please try again.</h1>`)
                }
            }

            // (Craig/Kim) Do an api request depending on gender selection
            if (gender == 1) { //girl
                console.log('gender search for female')

                $.get(`/api/wild/${firstLetter}/f`).then(function (data) {

                    if (data.length) {
                        console.log(data);

                        //Random selection of single array object from database search filter
                        ranName = data[Math.floor(Math.random() * data.length)];
                        //console.log("random object is " + ranName);

                        //Assign variable to single randomly selected name
                        randomFirstName = ranName.name;
                        console.log('first name is ' + randomFirstName);

                        //Push name to names array
                        fullNameArray.push(randomFirstName)
                    }
                    ajax1 = true;

                });

                if (typeof middleLetter1 == 'string' && middleLetter1.match('^[a-zA-Z]$')) {

                    $.get(`/api/wild/${middleLetter1}/f`).then(function (data) {
                        if (data.length) {
                            //console.log(data);
                            ranName = data[Math.floor(Math.random() * data.length)];
                            randomMiddleName = ranName.name;
                            console.log('middle name 1 is ' + randomMiddleName);
                            fullNameArray.push(randomMiddleName)
                        }
                        ajax2 = true;
                    });
                } else {
                    ajax2 = true;
                }

                if (typeof middleLetter2 == 'string' && middleLetter2.match('^[a-zA-Z]$')) {
                    $.get(`/api/wild/${middleLetter2}/f`).then(function (data) {

                        if (data.length) {
                            //console.log(data);
                            ranName = data[Math.floor(Math.random() * data.length)];
                            randomMiddleName2 = ranName.name;
                            console.log('middle name 2 is ' + randomMiddleName2);
                            fullNameArray.push(randomMiddleName2);
                        }
                        ajax3 = true;
                    });

                } else {
                    ajax3 = true;
                }



            } else if (gender == 2) { //boy

                console.log('gender search for male')

                $.get(`/api/wild/${firstLetter}/m`).then(function (data) {

                    if (data.length) {
                        console.log(data);
                        ranName = data[Math.floor(Math.random() * data.length)];
                        randomFirstName = ranName.name;
                        console.log('first name is ' + randomFirstName);
                        fullNameArray.push(randomFirstName);
                    }

                    ajax1 = true;
                });

                if (typeof middleLetter1 == 'string' && middleLetter1.match('^[a-zA-Z]$')) {

                    $.get(`/api/wild/${middleLetter1}/m`).then(function (data) {

                        if (data.length) {
                            console.log(data);
                            ranName = data[Math.floor(Math.random() * data.length)];
                            randomMiddleName = ranName.name;
                            console.log('middle name 1 is ' + randomMiddleName);
                            fullNameArray.push(randomMiddleName);
                        }
                        ajax2 = true;
                    });
                } else {
                    ajax2 = true;
                }

                if (typeof middleLetter2 == 'string' && middleLetter2.match('^[a-zA-Z]$')) {
                    $.get(`/api/wild/${middleLetter2}/m`).then(function (data) {

                        if (data.length) {
                            //console.log(data);
                            ranName = data[Math.floor(Math.random() * data.length)];
                            randomMiddleName2 = ranName.name;
                            console.log('middle name 2 is ' + randomMiddleName2);
                            fullNameArray.push(randomMiddleName2);
                        }
                        ajax3 = true;
                    });

                } else {
                    ajax3 = true;
                }

            } else { //all
                console.log("gender search for either")

                $.get(`/api/wild/${firstLetter}/`).then(function (data) {

                    if (data.length) {
                        //console.log(data);
                        ranName = data[Math.floor(Math.random() * data.length)];
                        randomFirstName = ranName.name;
                        console.log('first name is ' + randomFirstName);
                        fullNameArray.push(randomFirstName);
                    }
                    ajax1 = true;
                });

                if (typeof middleLetter1 == 'string' && middleLetter1.match('^[a-zA-Z]$')) {

                    $.get(`/api/wild/${middleLetter1}/`).then(function (data) {

                        if (data.length) {
                            //console.log(data);
                            ranName = data[Math.floor(Math.random() * data.length)];
                            randomMiddleName = ranName.name;
                            console.log('middle name 1 is ' + randomMiddleName);
                            fullNameArray.push(randomMiddleName)
                        }
                        ajax2 = true;
                    });
                } else {
                    ajax2 = true;
                }

                if (typeof middleLetter2 == 'string' && middleLetter2.match('^[a-zA-Z]$')) {
                    $.get(`/api/wild/${middleLetter2}/`).then(function (data) {

                        if (data.length) {
                            //console.log(data);
                            ranName = data[Math.floor(Math.random() * data.length)];
                            randomMiddleName2 = ranName.name;
                            console.log('middle name 2 is ' + randomMiddleName2);
                            fullNameArray.push(randomMiddleName2);
                        }
                        ajax3 = true;
                    });

                } else {
                    ajax3 = true;
                }

            };

            // Add a delay to allow ajax response to load before displaying final search name
            let stopThis = setTimeout(function () {
                if (ajax1 && ajax2 && ajax3) {
                    displayFullName();
                    clearTimeout(stopThis);
                }
            }, 500);


        });

    });




    // // If Origin name search is selected...
    // $("#inputGroupSelect04").change(function () {

    //     // Shows search options for random name search
    //     console.log("option 2 selector 1 was selected");
    //     $("#origin-starts-with").removeClass("hidden");
    //     $("#origin-starts-with").html("");

    //     // Appends appropriate text for first letter search
    //     if ($(this).val() === "1") {
    //         console.log("first letter text added");
    //         $(".origin-first-letter").append("<p> Enter the letter you wish the first name to begin with: <p>");
    //     } else if ($(this).val() === "2") {
    //         console.log("first letter text added");
    //         $(".origin-first-letter").append("<p> Enter the letters you wish the first name and the middle name to begin with: <p>");
    //     } else if ($(this).val() === "3") {
    //         console.log("first letter text added");
    //         $(".origin-first-letter").append("<p> Enter the letters you wish the first name, the middle name, and the second middle name to begin with: <p>");
    //     }

    //     // Loops through values of number of names wanted and renders alphabet dropdowns for each
    //     for (let i = 0; i < this.value; i++) {
    //         console.log(i);
    //         renderLettersFour(letters);
    //     }

    //   $("#opt2-btn").on('click', function () {
    //     let opt2NumNames = $('#numNames').val();
    //     let opt2FirstName = $('#origin-first-name').val();
    //     let opt2LastName = $('#origin-last-name').val();
    //     let opt2Gender = $('#inputGroupSelect03').val();
    //     let opt2Sex = "";
    //     if (opt2Gender === "1") opt2Sex = "f"
    //     if (opt2Gender === "2") opt2Sex = "m"
    //     let queryURL = `https://www.behindthename.com/api/lookup.json?name=${opt2FirstName}&key=cr909584168`;
    //     $.get(queryURL).then(function (nameData) { //first query (getting origin info)
    //       console.log(nameData); //info back about name    
    //       let nameOrigin = nameData[0].usages[0].usage_code; //this gets the code of origin, ex sco for scottish
    //       console.log("nameOrigin:", nameOrigin);
    //       let country = nameData[0].usages[0].usage_full;
    //       let queryURL2 = `https://www.behindthename.com/api/random.json?usage=${nameOrigin}&gender=${opt2Sex}&number=6&key=cr909584168`; //gets 6 names of same origin
    //       $.get(queryURL2).then(function (relatedNames) { //new query using last names origin
    //         console.log(relatedNames); //relatedNames is an array of 6 names;
    //         // $(".display-origin-data").removeClass("hidden")
    //         console.log(`${opt2FirstName} is a ${country} name`)
    //         console.log(relatedNames.names[0]);
    //         console.log("typeofvariable", typeof opt2NumNames)
    //         console.log(opt2LastName);
    //         if (opt2NumNames === "1") {
    //           alert(`Welcome baby ${relatedNames.names[0]} ${opt2LastName} `); //OPT2 RESULT
    //         }
    //         if (opt2NumNames === "2") {
    //           alert(`Welcome baby ${relatedNames.names[0]} ${relatedNames.names[1]} ${opt2LastName} `); //OPT2 RESULT
    //         }
    //         if (opt2NumNames === "3") {
    //           alert(`Welcome baby ${relatedNames.names[0]} ${relatedNames.names[1]} ${relatedNames.names[2]} ${opt2LastName} `); //OPT2 RESULT
    //         }
    //       });
    //     });
    //   });

    // });



    //SEARCH BY FILTER OPTION3
    $("#opt3-btn").on("click", function () {
        let gender = $("#inputGroupSelect05").val();
        let year = $("#inputGroupSelect04 option:selected").val();
        console.log("Gender:", gender);
        console.log("Year:", year)

        function displayResult() {
            console.log("displayResult function works");
            $("form").addClass("hidden");
            $("#result-div").removeClass("hidden");
    
        }
       
        if (gender == 3) { //either
            $.get(`/api/year/${year}`).then(function (data) {
            console.log(data);
            //alert("Data: " + data + "\nStatus: " + status);
            }); 
        } else if (gender == 2) { //boy
            $.get(`/api/year/${year}/m`).then(function (data) {
                console.log(data);
                //alert("Data: " + data + "\nStatus: " + status);
            });
        } else if (gender == 1) { //girl
            $.get(`/api/year/${year}/f`).then(function (data) {
                console.log(data);
                //alert("Data: " + data + "\nStatus: " + status);
            });
        }
    });

    
});