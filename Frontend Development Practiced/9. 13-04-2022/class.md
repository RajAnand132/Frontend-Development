## Topics

### Specificity
- If there are 2 or more CSS rules that point to the same element, the selector with the highest specificity value will "win", and its style declaration will be applied to the element.
 - Inline Styles
 - ID
 - Classes, pseudo-classes and attribute-selectors => .className,:hover,[ href ]
 - Elements and pseudo-elements=> tags and :before

- To calculate specificity start from left and add 100 for every id, 10 for every class and 1 for every element..
- For inline styling you can add 1000. 
- !important is the exception, it takes priority over everything else.
- Equal specificity => Latest rule ones

### Transform
- Transformations => Skew, Rotate, Translate and Scale => all of this can be done in 2d or 3d

### Animations
- Used along with keyframes
- Define an animation name, then in the keyframe show how it works(0% to 100% in terms of time)

### Box-Shadow
- box-shadow: 5px 10px 8px 2px grey inset, 10px 15px 10px 5px red;
 1. First value for horizontal offset
 2. Second value is for vertical offset
 3. Blur
 4. Spread Radius
- We can give the color and inset(inside shadow)
- We can also give multiple comma separated box shadows