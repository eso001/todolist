
var makeEvent = function(){
var field = $('#addStuff').find('input[type="text"]').val();
var name = field.value;
if (name == " ") {
    alert("What the Fuck is This");
} else {
 $('#myList').text("<li>name</li>");
}

};


$('input[type=submit').click(function(){
alert("Hi");
});
