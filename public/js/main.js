
//-----------------------Kim's Code--------------------------------

$(function () {

    var letters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
    //let data = {letter: [letters]};

    // If option 1 search then show option 1 items and remove options 2 and 3
    $(".opt1").on("click", function () {
        console.log("this selected");
        $(".opt1-questions").removeClass("hidden");
        $(".opt2").addClass("hidden");
        $(".opt3").addClass("hidden");
        $(".opt1").unbind();
    });


    $(".opt2").on("click", function () {
        console.log("this selected");
        $(".opt2-questions").removeClass("hidden");
        $(".opt1").addClass("hidden");
        $(".opt3").addClass("hidden");
        $(".opt2").unbind();
    });

    $(".opt3").on("click", function () {
        console.log("this selected");
        $(".opt3-questions").removeClass("hidden");
        $(".opt1").addClass("hidden");
        $(".opt2").addClass("hidden");
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
    $('#starts-with').on('change', function(){
      console.log("Name1 Value:", $('#name1').val())
    })
    
    $('#opt1-search').on('click', function(){
      let numNames = $('#inputGroupSelect01').val();
      console.log("numNames: ", numNames);
      let firstLetter = $('#name1').val();
      console.log("firstLetterVal:", firstLetter);
      let gender = $('#inputGroupSelect02').val();
      console.log("GenderVal:", gender); 
      let lastName = $('#last-name').val();
      console.log("lastName:", lastName);
    
      // Do an api request depending on conditions above
      if(gender == 1){ //girl
        $.get(`/api/wild/${firstLetter}/f`).then(function(data){
          console.log(data);
          alert("Data: " + data + "\nStatus: " + status);
        });
      } else if(gender == 2){ //boy
        $.get(`/api/wild/${firstLetter}/m`).then(function(data){
          console.log(data);
          alert("Data: " + data + "\nStatus: " + status);
        });
      } else { //all
        $.get(`/api/wild/${firstLetter}/`).then(function(data){
          console.log(data);
          alert("Data: " + data + "\nStatus: " + status);
      });
      }
      
     

    function renderModal(data){

    }
  
  
  });
  //-----------------------------------------------------------------
  
  
});

 // If Random Name search is selected...
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

    // If Random Name search is selected...
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




});


