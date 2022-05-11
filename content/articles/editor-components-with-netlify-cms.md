+++
author = "Monica Norris"
canonical = ""
categories = ["Web Development"]
date = 2021-08-17T20:41:14Z
excerpt = "Developers can build editor-friendly custom Editor Components in Netlify CMS that handle a range of content or media needs."
featured_image = "images/articles/puzzle-pieces.jpeg"
image_caption = ""
noindex = false
title = "Master Netlify CMS: custom editor components"

+++

{{< image_resize  src="/images/articles/custom-editor-component.png" alt="Custom Editor Components" >}}

Developers working in Netlify CMS can now create and configure custom Editor Components with flexible custom attributes. In this article, we'll develop a custom component with attributes, display it as a component in the editor pane, and render it in the preview pane, just as it would on the front-end. Editor friendly!

Let's get started.  But first:

### What is Netlify CMS?

[Netlify CMS](https://www.netlifycms.org) is an open-source content management solution built on a Git workflow. It is a headless CMS that supports the modern way to build websites and apps — the [Jamstack](https://jamstack.org) —  and works with many site generator platforms, including Hugo, Gatsby, NextJS, and more.


The Jamstack architecture provides better performance, higher security, increased scalability, and a better developer experience. **Now we get a great editor experience, too**: Netlify CMS offers an easy-to-use editing interface for content, built as a single-page React app with custom configurable UI widgets and editor plugins.

## Let's build an Editor Component

Let's see how that works by creating an Editor Component: a custom video component that a Hugo [shortcode](https://gohugo.io/content-management/shortcodes/) will support.

#### Create the video shortcode

For the sake of this article, we will assume a basic knowledge of [Hugo shortcodes](https://gohugo.io/content-management/shortcodes/). You can either use Hugo’s internal video shortcode or develop your own. Add your shortcode to `layouts/shortcodes`.

#### Register the shortcode as an Editor Component

Navigate to Netlify CMS (NCMS)'s `index.html` in your `admin` folder.

Create a `script` tag, and add `CMS.registerEditorComponent({})` — NCMS by default exposes a global object `window.CMS` that you can use to create  previews, editor plugins, and widgets. `registerEditorComponent` lets you add a block component to the Markdown editor.

`registerEditorComponent` has 7 params. From the [NCMS Custom Widgets docs](https://www.netlifycms.org/docs/custom-widgets/), they are:

1. **id**: the internal id of the component. For our video component, let's call this `videos`.
2. **label**: the label of our component in the editor window.  Let's call this `Videos`.
3. **fields**: fields the editor fills out. Note you can add as many as you like, but each must correspond to an NCMS [widget](https://www.netlifycms.org/docs/widgets/). For this example, we only need one field to capture the video link.
```
CMS.registerEditorComponent({
  id:"videos",
  label: "Videos",
  fields:[{
    name: "link",
    label: "link",
    widget: "string"
  }],
```
4. **pattern**: the Regex pattern used to search for instances of this block in the markdown document. Create a regex pattern that matches the Hugo shortcode:
```
pattern: /{{</* videos link="(.*)" */>}}/,
```
5. **fromBlock**: populates the custom widget in the CMS markdown editor. Given an object with one property for each field defined in `fields`, return the string you want to insert into your markdown. There is only one field within our component, so let's assign that to a variable named `link:`
```
  fromBlock: function(match){
    return{
      link: match[1]
    };
  },
```
6. **toBlock**: serializes the data from the custom editor component to the markdown editor. Now we can take the link variable created in the previous step and combine it with our shortcode defined in our `pattern` like so:
```
  toBlock: ({link}) =>
    `{{</* videos link="${link}" */>}}`,
```

   **Note well**: `pattern` and `toBlock` must be identical, aside from the variable replacement.

7. **toPreview**: Preview output for this component. It can be a string or a React Component. Ignore the Tailwind classes shown below:
```
  toPreview: ({link}) => {
    return `
    <div class="flex flex-wrap w-full justify-center px-4">
      <div class="videos-wrapper mx-auto">
       <div class="pt-5">
         <iframe width="560" height="315" src=${link} frameborder="0";
            allow="accelerometer; autoplay;
                   clipboard-write; encrypted-media;
                   gyroscope; picture-in-picture" allowfullscreen>
         </iframe>
       </div>
      </div>
    </div>
    `
  }
```
***

Here is the completed code:

```
<script>
 CMS.registerEditorComponent({
   id:"videos",
   label: "Videos",
   fields:[{
      name: "link",
      label: "link",
      widget: "string"
   }],
   pattern: /{{</* videos link="(.*)" */>}}/,
   fromBlock: function(match){
      return{
         link: match[1]
      };
   },
   toBlock: ({link}) =>
      `{{</* videos link="${link}" */>}}`,

   toPreview: ({link}) => {
    return `
      <div class="flex flex-wrap w-full justify-center px-4">
         <div class="videos-wrapper mx-auto">
            <div class="pt-5">
               <iframe width="560" height="315" src=${link}
                  frameborder="0";
                  allow="accelerometer; autoplay;
                        clipboard-write; encrypted-media;
                        gyroscope; picture-in-picture" allowfullscreen>
               </iframe>
            </div>
         </div>
      </div>
     `
   }
 })
</script>
```

#### That's it!

When you refresh the CMS, the custom Video Editor Component will render within the markdown editor on the left, thanks to the `toBlock`:

{{< image_resize  src="/images/articles/toBlock.png" alt="toBlock" >}}

And thanks to the `toPreview`, the component will be rendered and executed in NCMS's preview pane on the right. Here, we added another `field` to capture optional captions below a video:

{{< image_resize  src="/images/articles/toPreview.png" alt="toPreview" >}}

We'd love to hear about your experiences creating custom editor components. Let us know!
