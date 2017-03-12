/**
 * Elements to drag into the visual part.
 */

function DraggableElement(tagName, id, dropCallBack) {
    self = this;
    self.tagName = tagName;
    self.dropCallBack = dropCallBack;
    self.domElement = $("<"+tagName+">").draggable();
    self.paragraphText = "New "+ tagName;
    self.domElement.append($("<p>").append(self.paragraphText));

    if (typeof id !== "undefined") {
        self.id = id;
        self.domElement.attr("id", self.id);
    }

    this.placeHandle = function (location) {
        if (typeof location === "undefined") {
            location = $("#elements");
        }
        this.domElement.extend({dropCallBack: self.dropCallBack});
        this.domElement.appendTo(location);
    }
}

divHandle = new DraggableElement("div", "divElement", function () {
    console.log("placing div!");
});
divHandle.placeHandle();
//$("#elements").append(divHandle.domElement);

$("#visual").droppable({ drop: function (event, ui) {
    console.log(event);
    console.log(ui);
    console.log(ui.dropCallBack());
}
});