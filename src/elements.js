/**
 * Elements to drag into the visual part.
 */

$("#divElement").draggable();

$("#visual").droppable({ drop: function (event, ui) {
    console.log(event);
    console.log(ui);
}
});