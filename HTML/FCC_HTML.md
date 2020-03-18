# FreeCodeCamp

##HMTL



### Use a Retina Image for Higher Resolution Displays

The simplest way to make your images appear "retina" (and optimize them for retina displays) is to define their `width`and `height`values as only half of what the original file is.

####rotation

- `vmin: 70vmin`would be 70% of the viewport's smaller dimension (height vs. width).
- `vmax: 100vmax`would be 100% of the viewport's bigger dimension (height vs. width).



### flex basis

The `flex-basis`property specifies the initial size of the item before CSS makes adjustments with `flex-shrink`or `flex-grow`



### Introduction to the Applied Accessibility Challenges

"Accessibility" generally means having web content and a user interface that can be understood, navigated, and interacted with by a broad audience. Websites should be open and accessible to everyone, regardless of a user's abilities or resources. Some users rely on assistive technology such as a screen reader or voice recognition software. Other users may be able to navigate through a site only using a keyboard. Keeping the needs of various users in mind when developing your project can go a long way towards creating an open web

folks using assistive technologies rely on organized, semantically meaningful markup to better understand your work.



#### embedded landmark features 

header, nav, main, section, article, footer, time, fieldset

#### Headings

Headings with equal (or higher) rank start new implied sections, headings with lower rank start subsections of the previous one.

As an example, a page with an `h2`element followed by several subsections labeled with `h4`tags would confuse a screen reader user. With six choices, it's tempting to use a tag because it looks better in a browser, but you can use CSS to edit the relative sizing.

Each page should always have **one** (and only one)  `h1` element, which is the main subject of your content. This and the other headings are used in part by search engines to understand the topic of the page.

### alt

alt tags should be left empty if the image serves a purely decorative purpose or is already explained with text content. Background images usually fall under the 'decorative' label as well. However, they are typically applied with CSS rules, and therefore not part of the markup screen readers process.

#### radio buttons

It is considered best practice to set a `for`attribute on the `label`element, with a value that matches the value of the `id`attribute of the `input`element. This allows assistive technologies to create a linked relationship between the label and the child `input`element. For example:

``` 
<label for="indoor"> 
 <input id="indoor" type="radio" name="indoor-outdoor">
 Indoor 
</label>
```

#### main

The `main`element is used to wrap (you guessed it) the main content, and there should be only one per page. It's meant to surround the information that's related to the central topic of your page. It's not meant to include items that repeat across pages, like navigation links or banners.

#### article

`Article`is a sectioning element, and is used to wrap independent, self-contained content. The tag works well with blog entries, forum posts, or news articles.

Ask yourself if you removed all surrounding context, would that content still make sense? Similarly for text, would the content hold up if it were in an RSS feed?

#### section

An `article`is for standalone content, and a `section`is for grouping thematically related content. They can be used within each other, as needed. For example, if a book is the `article`, then each chapter is a `section`. When there's no relationship between groups of content, then use a `div`.

#### audio

The `audio`tag supports the `controls`attribute. This shows the browser default play, pause, and other controls, and supports keyboard functionality. This is a boolean attribute, meaning it doesn't need a value, its presence on the tag turns the setting on.

#### figure Element

the `figure`element, along with the related `figcaption`, wrap a visual representation (like an image, diagram, or chart) along with its caption. 

#### fieldset Element 

The `fieldset`tag surrounds the entire grouping of radio buttons to semantically show the choices are part of a set. It often uses a `legend`tag to provide a description for the grouping, which is read by screen readers for each choice in the `fieldset`element.

#### datetime Attribute

HTML5 also introduced the `time`element along with a `datetime`attribute to standardize times. This is an inline element that can wrap a date or time on a page. A valid format of that date is held by the `datetime`attribute. It helps avoid confusion by stating a standardized version of a time, even if it's written in an informal or colloquial manner in the text.


####hide content meant only for screen readers
```
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```

**Note**
The following CSS approaches will NOT do the same thing:

- `display: none;`or `visibility: hidden;`hides content for everyone, including screen reader users
- Zero values for pixel sizes, such as `width: 0px; height: 0px;`removes that element from the flow of your document, meaning screen readers will ignore it

####`accesskey` attribute

HTML offers the `accesskey`attribute to specify a shortcut key to activate or bring focus to an element. This can make navigation more efficient for keyboard-only users. HTML5 allows this attribute to be used on any element, but it's particularly useful when it's used with interactive ones. This includes links, buttons, and form controls.

#### `tabindex` attribute

The HTML `tabindex`attribute has three distinct functions relating to an element's keyboard focus. When it's on a tag, it indicates that element can be focused on. The value (an integer that's positive, negative, or "0") determines the behavior.

Certain elements, such as links and form controls, automatically receive keyboard focus when a user tabs through a page. It's in the same order as the elements come in the HTML source markup. This same functionality can be given to other elements, such as `div`, `span`, and `p`, by placing a `tabindex="0"`attribute on them. using `tabindex`also enables the CSS pseudo-class `:focus`to work on the tag it is placed on.

The `tabindex`attribute also specifies the exact tab order of elements. This is achieved when the value of the attribute is set to a positive number of 1 or higher.

Setting a tabindex="1" will bring keyboard focus to that element first. Then it cycles through the sequence of specified `tabindex`values (2, 3, etc.), before moving to default and `tabindex="0"`items.