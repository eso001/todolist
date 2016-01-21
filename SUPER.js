



var makeEvent = function(){
var name = $('#addStuff').find('input[type="text"]').val();
var listItem = $("<li class='lister'></li>")
var editButton = $("<button class='edit button' type='button'>edit</button>");
var deleteButton = $("<input type='button' class='delete button' value='x'>");
var $name = listItem.text(name);
if (name == "") {
    alert("What the Fuck is This");
} else {
 $name.appendTo($('#myList'));
 editButton.appendTo($name);
 deleteButton.appendTo($name);
}

};
var clearValue = function() {
 $('#addStuff').find('input[type="text"]').val("");

};

var deleter = function() {
$(this).closest('.lister').remove();

};
$(document).ready( function() {

$('.buttonZORD').on('click', function(){
makeEvent();
clearValue();
return false;
});
 $('#myList').on('click', "input.delete", function(){
$(this).closest('.lister').remove();
 });
 $('#myList').on('click',"button.edit", function(){
var change = prompt("What would you like to change this entry to?");
var $name = $(this).closest('.lister').text(change);
var editButton = $("<button class='edit button' type='button'>edit</button>");
var deleteButton = $("<input type='button' class='delete button' value='x'>");
 editButton.appendTo($name);
 deleteButton.appendTo($name);

 });
});