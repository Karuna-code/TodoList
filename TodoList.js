//check of specific todos
// $("li").click(function(){
// 	//alert("You were just clicked by your master");
// 	//if li is grey then we change it to black
// 	//else turn it to grey
// 	if($(this).css("color") === "rgb(128, 128, 128)"){

// 		     $(this).css("color", "black");
// 		     $(this).css("textDecoration","none")
// 	}
// 	else {
//           $(this).css({
//            color:"gray",
//         // in JS we don't have a character with -.Instead of that use camelCase
//            textDecoration:"line-through"
//     });
//    }       
    
// });



//Whenever a new li will get added inside ul,this class will fire.It will work equally well with existing li
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});
//EVENT BUBBLING-When a event is fired,it bubbles into it's parent event and triigers the parent event also
//There is a method event.stopPropagation which stops event from bubbling up.
//This method should delete Todo when X is clicked!
$("ul").on("click", "span", function(){
	//if you want fadeout to appear and then remove to function then the best way possible is to include it as a callback func
    $(this).parent().fadeOut(500,function(){
    	$(this).remove()
    });
    event.stopPropagation();
});
//which is an important property with which we are gonna work.It's a character property.13 is for Enter key
$("input[type='text']").keypress(function(event){
   if(event.which === 13){
   	//grabbing new todo text from input
        var todoText=$(this).val();
        $(this).val("");
        //create a new li and add to the list
        // append()-First add the element and second argument is what needs to be added to that element
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" +  todoText + "</li>")
   }
});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})