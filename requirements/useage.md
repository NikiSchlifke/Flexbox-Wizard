# User Requirements
## General user experience
An interactive website that enables users to generate a sophisticated Layout without the hassle of managing nested html tags and css rules.

## Benefits
Creating a Flexbox layout is easy as long as there are not too many nested elements and only a few classes or ids. 
But after a reasonable level of complexity it's common to arrive at a unmanageable mess very quickly. 

Knowledge of HTML & CSS is still be required but without the risk of losing sight of a too complicated layout structure.  

## Interface implementation
Users can create nested rectangles that represent a div by default via drawing them with the mouse. 
Classes can be associated with the rectangles via drag & drop. Other attributes might be edited directly in them (for instance giving it an id). Every action can be deleted or undone. 
In addition rectangles themselves can be moved from one parent to another as to change the layout on the fly.

When the layout is finished the HTML and CSS can be copied to the clipboard and pasted into the text editor.

### Nesting
If a rectangle is nested then it will snap to the nearest sensible fraction.
That will be depending on the parent box for instance 1/1, 1/2, 1/3, 2/3, 1/4, 3/4 etc...

Nested rectangles are visually distinguishable based on their level of nesting. Like the 1st is black, the 2nd blue, the 3rd orange, and so on.
Margins between the nested rectangles are set by the application so the nesting structure is clearly visible.