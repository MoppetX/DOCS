# SVG

## Sarah Dresner / frontend masters





```html
<svg>
 <g fill='white' stroke="black"> 
   // g just stands for GROUP :)
   // works like a div
   // if you have no extra fill/stroke/etc. applied on the elements themselves, you can set them here 
   // in animation: can add classes, move grouped things simultaneously
   
   <path d="M7.3 2.333 3.444z" /> 
   // 'd' stands for drawing
   // 'M' stands for 'move to'
   // the 'z' indicates a CLOSED path
   
 </g> 
  
  <polyline points="14,17 136,37 77,117"/>
  // very similar to polygon
</svg>
```

**preserveAspectRatio**: only use for simple geometric forms you don't mind being squished



####**Path letters**

**M, m** 	   moveTo		start of the path / start of a new path

**L, l**			lineTo			

**H, h**		  horizontal line drawn from current position

**V, v** 		  vertical line 

meaning of upper/lower case: difference between absolute (on axis) and relative (move 30px *from here*) positioning

####Curve Commands

**C, c**		cubic-bezier

**S, s**		reflecting cubic-bezier

**Q, q**		quadratic bezier (both sides share same control point)

**T, t**		command control point that's been reflected

**A, a**		elliptical arc



### Accessibility



--------------

###Optimizing

#### save size:

- simplify paths (95%) - less path points!
- avoid drop shadows use > SVG Filters > AI_Shadow_x
- use (simple) background fields, not tiny little cut-up pieces peaking through your main elements 
- Remove Repeated Gradient Defs:  use [Jake Albaugh’s gradient optimizer](http://codepen.io/jakealbaugh/full/OVrQXY/)
- Reduce the size of your Canvas: somewhere like 100 x 100
- Finally, make sure you're gzipping your files (I usually do this as part of the overall build process
- whole [article](https://css-tricks.com/high-performance-svgs/)

####export

File / export / export as / format: SVG / SVG Options

**Styling**
*internal CSS*
if you have a lot of repeats (color), then this setting will be smaller because it applies a class which grab all relevant elements at once instead of repeating

*Inline CSS*: 
great if you want to work with react

*Presentation Attributes*: 
**use this**; will put styles directly on each element

**Object IDs**
*Layer Names*: use
*Minimal*: not sugested; names everything 'a', 'b', etc.
*Unique*: 

**Decimal**
optimization thing; the lower the number, the lower the precision

**Responsive**
removes `width` and `Height` tags

**Minimal**
'un-prettified'; do NOT use of you want to animate; if you don't may use :)



#### output

illustrator output is not optimal (cluttered): **after export, before implementation, OPTIMIZE:**

- SVGOMG <-
- Peter Collingridges SVG Editor
- SVGO / SVGO GUI

##### SVGOMG
[recommendations for settings](https://css-tricks.com/high-performance-svgs/)
Be mindful of the toggles here. The ones that I find myself checking and unchecking the most are:

- *Clean IDs*
  this will remove any carefully named layers you may have.
- *Collapse useless groups*
  you might have grouped them to animate them all together, or just to keep things organized.
- *Merge paths* 
  nine times out of ten this one is ok, but sometimes merging a lot of paths keeps you from being about to move elements in the DOM around independently.
- *Prettify* 
  This is only necessary when you need to working within the SVG, for animation or other manipulation purposes.
- *round/rewrite Numbers list* & *round/rewrite paths*
  could merge circles
- *remove viewbox*
  don't to it :)

--------------



### Design Principles

1. Design everything first (have on your canvas), reveal later
2. 





-------------------------------

### Resources

PENS

SVG path demo; SVG Path Builder

SVG Essentials