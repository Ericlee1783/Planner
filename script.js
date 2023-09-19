// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
   
    console.log(text,time);
    localStorage.setItem(time,text)
  });

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function updateSchedule () {
    var currentHour = dayjs().hour()
    console.log(currentHour);
    $('.time-block').each(function(){
      var timeBlockHour = parseInt($(this).attr('id').split('-')[1])
      console.log(timeBlockHour)
      if (timeBlockHour < currentHour) {
        $(this).addClass("past")
      } else if (timeBlockHour === currentHour) {
        $(this).removeClass("past")
        $(this).addClass("present")
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future")
        console.log(timeBlockHour)
      }

    })
  }

  updateSchedule();
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
    $('#hour-9 .description').val(localStorage.getItem("hour-9"))
  // TODO: Add code to display the current date in the header of the page.
  setInterval(function(){
    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY HH:mm:ss'))
  },1000)
});
