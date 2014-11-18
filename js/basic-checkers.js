


$(document).ready(function(){
  // incr = 0;
  // $('li').each(function(index, el){
  //   incr += 1;
  //   if( (incr > 1 && incr <= 8) && (incr % 2)  ){
  //     $(this).append("<div class='red-piece'></div>");
  //   }
$('.red-piece').on('dragstart', handleDragStart).on('dragend', handleDragEnd);
$('.black-piece').on('dragstart', handleDragStart).on('dragend', handleDragEnd);
$('.red-piece').attr('draggable', true);
$('.black-piece').attr('draggable', true);
  });









function handleDragStart(e) {
  console.log(e)
  $(this).css('opacity', '0.4');  // this / e.target is the source node.
      e.dataTransfer.effectAllowed = 'copy';
  var a = $(this).dataTransfer.setData('Text', this.id);
  console.log(a)
}

function handleDragEnd(e) {
  console.log(e)
  $(this).css('opacity', '1');  // this / e.target is the source node.
}


function handleDrop(e) {
  // this/e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    dragSrcEl.innerHTML = this.innerHTML;
    $(this).dataTransfer.getData('text/html');
  }

  return false;
}

