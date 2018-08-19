// business logic
function Location(location, landmark) {
  this.locationName = location;
  this.landmarkName = landmark;
  this.timeYear = timeOfYear;
  this.notesTrip = notes;
}

// user logic

$(document).ready(function () {
  $("form#travel-guide").submit(function (event) {
    event.preventDefault();

    var inputtedLoction = $("input#new-travel-location");
    var inputtedLocation = $("input#new-landmark");
    var inputtedTime = $("input#new-time-of-year");
    var inputtedNotes = $("input#new-notes");

    var newLocation = new Location(inputtedLoction, inputtedLocation, inputtedTime, inputtedNotes);

    $("ul#location").append("<li>" + newLocation.location + "</li>")

    $("#travelLog").last().click(function () {
      $("#destination").show();
      $("#destination h2").text("newLocation.locationName");
      $("#destination").text("newLocation.locationName");
      $("#destination").text("newLocation.landmarkName");
      $("#destination").text("newLocation.timeOfYear");
      $("#destination").text("newLocation.notesTrip");
    });

    $("input#new-travel-location").val("");
    $("input#new-landmark").val("");
    $("input#new-time-of-year").val("");
    $("input#new-notes").val("");

  });
});