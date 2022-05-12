+++
title = "Typographic Style Guide"
description = ""
publishDate = "2020-04-24T19:40:12+00:00"
noindex = true
+++
# Typography style guide

The purpose of this guide is to help you, dear editor, see at a glance the full range of type styling options ou have available on your website through the rich text editor.

## Headings

Headings help users to scan and read a page of text. They are numbered 1 through 4, sometimes up to 6, and nest logically, much like an outline.

# First-level heading, [optionally linked](/)

First level headings are often the page title itself. Most content on the page should fall under the first header. Consider starting the page with a second-level heading.

## Second-level heading, [optionally linked](/)

The header above is an `h2` element. More than one may be used per page. Consider using an `h2` unless you need a header level of less importance, or as a sub-header to an existing `h2` element.

### Third-level heading, [optionally linked](/)

The header above is an `h3` element, which may be used for any form of page-level header which falls below the `h2` header in a document's hierarchy.

#### Fourth-level heading, [optionally linked](/)

The header above is an `h4` element, which may be used for any form of page-level header which falls below the `h3` header in a document hierarchy.

***
Sometimes, headers fall immediately after each other. This section exercises the spacing between headers when there are no paragraphs of copy between them. It also tests for word wrap. 

# First-level heading, [optionally linked](/), that might be long enough to wrap one or many times on a page depending on the page width

## Second-level heading, [optionally linked](/), that might be long enough to wrap one or many times on a page depending on the page width

### Third-level heading, [optionally linked](/), that might be long enough to wrap one or many times on a page depending on the page width

#### Fourth-level heading, [optionally linked](/), that might be long enough to wrap one or many times on a page depending on the page width

***

## Grouping content

#### Paragraphs

All paragraphs are wrapped in `p` tags. They [may contain a link.](/)

#### Horizontal rule

The `hr` element represents a paragraph-level break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book.

***

The above line is an example of a horizontal rule.



#### Ordered list

Ordered lists (in HTML, `ol`) are lists that display numbers for each item (in HTML, `li`). 


1. This is an ordered list, [which may contain a link](/)
2. This is the second item, which contains a sub list
   1. This is the sub list, which is also ordered, and [which may contain a link](/)
   2. It has two items.
   3. This third item is intentionally very long, so that we can see how word wrap will work. This third item is intentionally very long, so that we can see how word wrap will work.
3. This is the word wrapped primary list item. This is the word wrapped primary list item. This is the word wrapped primary list item. This is the word wrapped primary list item.
4. This is the final item on this list.

#### Unordered list

Unordered lists (in HTML, `ul`) are lists that don't require numbering. They may be presented as bulleted lists, or with other line item makers. Here is an example list showing the constituent parts of the British Isles:

* United Kingdom of Great Britain and Northern Ireland:
  * England
  * Scotland, [which may contain a link](/)
  * Wales
  * Northern Ireland
* Republic of Ireland
* Isle of Man, [which may contain a link](/)
* Channel Islands:
  * Bailiwick of Guernsey
  * Bailiwick of Jersey


## Text-level Semantics

There are a number of inline elements you may use anywhere within other elements.

### Links and anchors

The `a` element is used to hyperlink text, be that to another page, a named fragment on the current page or any other location on the web. Example:

[Go to the home page](/) or [return to the top of this page](#top).

#### **Bold**, or strong importance

The `strong` element is used to denote text with **strong importance**.

#### _Italics_, or stressed emphasis

The `em` element is used to denote text with stressed emphasis, or an academic reference to a text.

You simply _must_ try the negitoro maki!