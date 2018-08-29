
//-----------------------Kim's Code--------------------------------
$(function () {

  let letters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
  //let data = {letter: [letters]};

  // If option 1 search then show option 1 items and remove options 2 and 3
  $(".opt1").on('click', function (event) {
    console.log("this selected")
    $(".opt1-questions").removeClass("hidden");
    $(".opt2").addClass("hidden");
    $(".opt3").addClass("hidden");
    $(".opt1").unbind();
  });


  $(".opt2").on('click', function () {
    console.log("this selected")
    $(".opt2-questions").removeClass("hidden");
    $(".opt1").addClass("hidden");
    $(".opt3").addClass("hidden");
    $(".opt2").unbind();
  });

  $(".opt3").on('click', function () {
    console.log("this selected")
    $(".opt3-questions").removeClass("hidden");
    $(".opt1").addClass("hidden");
    $(".opt2").addClass("hidden");
    $(".opt3").unbind();
  });

  console.log(letters);
  function renderLetters(letters) {
    //console.log("data passed")
    let lettersData = document.getElementById("lettersTemplate").innerHTML;
    //console.log(projectData)
    let compiledProject = Handlebars.compile(lettersData);
    //console.log(compiledProject(myProjects));
    let myGeneratedHTML = compiledProject(letters);
    console.log(typeof myGeneratedHTML);
    $("#starts-with").html(myGeneratedHTML);
  }

  $("#inputGroupSelect01").change(function () {
    let selectedVal = this.value;
  //  let myGeneratedHTML = "";

    if (selectedVal = 1) {
    console.log('selector 1 was selected');
    $("#starts-with").removeClass("hidden");    
    renderLetters(letters);
    renderLetters(letters);

    }
    
  });



});
//-----------------------------------------------------------------


// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function (example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function () {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function (id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function () {
  API.getExamples().then(function (data) {
    var $examples = data.map(function (example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function () {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function () {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);


