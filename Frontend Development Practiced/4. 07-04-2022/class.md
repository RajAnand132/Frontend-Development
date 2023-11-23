## Intro to CSS - Cascading Style Sheets

What and Why
Different options - how to use it - External, Internal, Inline

### Selectors
1. Simple Selectors
 - Based on name/tag
 - Based on id
 - Based on class

2. CSS Combinators - It explains the relationship between selectors
 - Descendant Selector(space)
 - Child selector(>)
 - Adjacent Sibling(+)
 - General Sibling(~)

3. Pseudo-classes - Define a special state of an element
 - E.g. div:hover, a:visited

4. Pseudo-elements - Used to style specified part of an element
 - ::first-letter and ::first-line
 - ::before and ::after
 - ::marker
 - ::selection

5. Attribute Selector
 - E.g. a [ target ], input[ type= text ] 

## Adding CSS
1. Inline
2. Internal
3. External

### Measurement Units
 - % => Relative to enclosing element
 - cm
 - em - Relative Measurement to height of font
 - ex - Relative Measurement to height of font in lowercase
 - in
 - mm - Milimeters, can be used with word spacing
 - pc - Picas 1 pc = 12 points, Therefore 6 picas per inch
 - pt - Points. 1 point = 1/72nd of a inch
 - px - Pixels

### Colors
 - Hex Code - #RRGGBB
 - Short Hex Code - #RGB
 - RGB % - rgb(rr%,gg%,bb%)
 - RGB Absolute - rgb(rrr,ggg,bbb)
 - keyword - aqua,black,green 
 - RGBA - rgba(rrr,ggg,bbb, 0 to 1) - 4th argument is Opacity, 0 is transparent and 1 is opaque

Priority Wise Low to High => * body tags classes ids
Deep Dive
