# CSS

##useful bits & pieces



### lists

By making sure you style both the left padding and left margin of lists, you can find much greater cross-browser consistency in your list indentation.
```css
ul {
margin-left: 0; 
padding-left: 0;
}
```

Specify all the list properties in one declaration:
```css
ul {
  list-style: square inside url("sqpurple.gif");
}
```



### __specificity__

**duplicate** simple selectors to increase specificity when you have nothing more to specify.

```css
#myId#myId span { color: yellow; }
.myClass.myClass span { color: orange; }
```

avoid the use of !important by not using `#someElement` but instead:
```css
[id="someElement"] p {
  color: blue;
}

p.awesome {
  color: red;
}
```


#### !important

overriding inline styles set directly on elements:

```html
<div class="foo" style="color: red;">What color am I?</div>
```
```css
.foo[style*="color: red"] { 
  color: firebrick !important;
}
```





###random

##### round element

border-radius: 50%;



### compatibility

#### Browser Fallbacks

provide another more widely supported value immediately _before_ your declaration. That way an older browser will have something to fall back on, while a newer browser will just interpret whatever declaration comes later in the cascade.

