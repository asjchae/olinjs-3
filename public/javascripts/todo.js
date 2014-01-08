$(function () {

// Create form
  $('#newform').on('submit', function () {
    $.post("/", $('#newform').serialize());

    var li = $('<li>' + $('#newinput').val() + '</li>');
    $('#todolist').append(li);

// Delete form

    var form = $('<button class="deleteform">Delete</button>');
    $(li).append(form);
  
  	$(form).on('click', function () {
	  	$(this).parent().remove();
    });
  
    return false;
  });

  
});