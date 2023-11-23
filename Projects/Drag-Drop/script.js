/**
 * Global State
 * { Node } placingElement - Element being translated
 * { Node } movingElement - Element visually translated
 */
 let placingElement;
 let movingElement;
 
 /**
  * move: This callback is invoked when the move starts (touchmove / mousemove)
  * @function move
  * @param { Event } event - Fired event
  */
 function move(event) {
    // If there's an moving element
    if(movingElement && placingElement) {
       // grab the location of touch
       const eventLocation = event.targetTouches && event.targetTouches[0] || event;
 
       // assign box new coordinates based on the touch.
       const x = (eventLocation.pageX - (movingElement.offsetWidth / 2)) + 'px';
       const y = (eventLocation.pageY - (movingElement.offsetHeight / 2)) + 'px';
       movingElement.style.transform = `translate(${x}, ${y})`;
 
       // get the element being hovered (you need a class / localName / id to indentify it)
       const target = document.elementsFromPoint(eventLocation.clientX, eventLocation.clientY).find(element => Array.from(element.classList).includes('image-thumbnail'));
 
       // If there's a target then place the node
       if(target) {
          placeNode(placingElement, target)
       }
    }
 }
 
 /**
  * moveStart: This callback is invoked before the move starts (touchstarts / mousedown)
  * @function moveStart
  * @param { Event } event - Fired event
  */
 function moveStart(event) {
    // If there's an moving element
    if(!movingElement && !placingElement && Array.from(event.target.classList).includes('image-thumbnail')) {
       // Event Location
       const eventLocation = event.targetTouches && event.targetTouches[0] || event;
       // Define the global states
       movingElement = event.target.cloneNode();
       placingElement = event.target;
       // Attach Visual Translate
       document.body.appendChild(movingElement);
 
       // assign box new coordinates based on the touch.
       movingElement.classList = ['image-thumbnail-dragging'];
       // assign box new coordinates based on the touch.
       const x = (eventLocation.pageX - (movingElement.offsetWidth / 2)) + 'px';
       const y = (eventLocation.pageY - (movingElement.offsetHeight / 2)) + 'px';
       movingElement.style.willChange = 'transform';
       movingElement.style.transform = `translate(${x}, ${y})`;
    }
 }
 
 /**
  * moveEnd: Callback invoked when the move ends (touchends / mouseup)
  * @function moveEnd
  */
 function moveEnd() {
    // Remove Moving element and clean placing element
    if (movingElement) {
       document.body.removeChild(movingElement);
    }
    movingElement = null;
    placingElement = null;
 }
 
 /**
  * placeNode: This method places the firstNode before or after the nextNode based on the presedence 
  * @function placeNode
  * @param { Node } firstNode - Element to place
  * @param { Node } nextNode - Element in reference to place the element (before / after)
  */
 function placeNode (firstNode, nextNode) {
    if (isBefore(firstNode, nextNode)) {
       nextNode.parentNode.insertBefore(firstNode, nextNode);
    }
    else {
       nextNode.parentNode.insertBefore(firstNode, nextNode.nextSibling);
    }
 }
 
 /**
  * isBefore: This tells if the firstNode is located before or after the nextNode
  * @function isBefore
  * @param { Node } firstNode - Element being dragged
  * @param { Node } nextNode - Element targeted
  */
 function isBefore(firstNode, nextNode) {
    let sibling = firstNode.previousSibling;
    while(sibling) {
       if(sibling === nextNode) {
          return true;
       }
       sibling = sibling.previousSibling;
    }
    return false;
 }
 
 function change(event) {
    const container = event.target.closest('.image-thumbnail');
    if (event.target.checked) {
       container.setAttribute('selected', event.target.checked ? true : null);
    } else {
       container.removeAttribute('selected');
    }
 }