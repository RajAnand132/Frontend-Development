## Topics

### Flexbox
- Before flexbox, we had 4 layout modes
 1. Block => Sections in a webpage
 2. Inline => Text
 3. Table => 2D table data
 4. Positioned => for explicit positioning of an element

Flex box layout module => makes it easier to design flexible and responsive layouts without using float or positioning

- Whenever you need flexible layout(rows or columns), give property display:flex to the parent container
- flex-direction: row(default) | column | row-reverse | column-reverse
- flex-wrap: nowrap(default) | wrap | wrap-reverse
- flex-flow: row wrap-reverse (combine the above two properties)
- justify-content: flex-start | center | flex-end | space-around | space-between
- align-items:stretch | flex-start | center | flex-end | baseline
- align-content:stretch | flex-start | flex-end | space-around | space-between | center
- Perfect centering => use justify-content:center and align-items:center in the parent component

### Not so popular properties
- flex-basis=> specifies the initial length of a flexible item
- flex-grow=> It specifies how much the item will grow relative to the rest of the flexible items inside the same container
- flex-shrink=> It specifies how much the item will shrink relative to the rest of the flexible items inside the same container

---

## Grid Layout
It offers a grid-based layout, with rows and columns making it easier to design webpages without having to use floats and positioning

- Give parent container display:grid
- grid-template-columns: auto 50px 30px; This means 3 columns with first as auto width, 2nd as 50px, 3rd as 30px. Can also use grid-template-rows
- grid-column-start: 2; grid-column-end: 4; Can be given to grid-items. Can define the length and starting point of a grid item. Shorthand is grid-column: 2 / 4;
- Gap => gap between grid items, row-gap and column-gap.
- justify-content: start | space-evenly | space-around | space-between | center | end;
- align-content: start | space-evenly | space-around | space-between | center | end; => align rows in the grid
- grid-template-areas=> give names to particular divs and then use them here