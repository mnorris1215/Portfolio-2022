+++
advanced_seo = false
aliases = []
author = "Monica Norris"
canonical = ""
categories = ["Web Development"]
date = 2022-02-18T15:35:18Z
excerpt = "Netlify CMS (NCMS) is an open-source content management system developed by the Netlify team. It offers flexibility and simplicity by removing unused tools a lot of similar CMSs contain."
featured_image = "images/articles/dry-up.jpeg"
image_alt = "desert-house"
overline = "Content Management Systems"
seo_title = ""
title = "How to DRY up Netlify CMS configuration files"

+++
Netlify CMS (NCMS) is an open-source content management system developed by the Netlify team. It offers flexibility and simplicity by removing unused tools a lot of similar CMSs contain.

Since NCMS is a single-page React app, it can be added to most static sites: it offers great flexibility. Its simple to use: it is fully contained within just two files: `config.yml` and `index.html`. However, as your site complexity grows, these files become bloated and hard to read.

**This article focuses on keeping NCMS configuration files organized and scalable while maintaining a sense of ease and clarity for a great developer experience**.

To keep this article short and to the point, we'll assume that your site is built, NCMS integration is complete, and now your code needs a bit of organization. To do this, I'll review scaling NCMS configuration files and keeping your preview templates DRY and reusable. With that in mind, let's get started.

### Scaling the config.yml

For smaller sites, all configuration options for NCMS live in the `config.yml` file. As you add new field configurations and the site grows, this file can quickly become out of hand and unmanageable. Therefore, a scalable alternative is needed, and luckily the NCMS team offers one with their latest beta feature additions. NCMS provides a `window.CMS_MANUAL_Init` option to initialize NCMS instead of it automatically loading up. This setting is useful because your defined config options are added to NCMS before it loads, which removes the need for the `config.yml` file.

With the default config file out of the way, you can now contain your settings within an object and set them inside a JavaScript file, thereby allowing you to import/export partial files. I'll get to that later in this article.

In addition to the `window.CMS_MANUAL_INIT` option being set to `true`, set the `load_config_file` option to `false` to let NCMS know not to look for the `config.yml` file. It is not required to complete this step, but setting it provides better performance and avoids a loading error. With these two configurations in place, you can now add your config object to a JS file.

An example of the config object is below.

    import news from '../../cms/pages/p-news.js';
    import evergreen from '../../cms/pages/p-evergreen.js';
    import tools from '../../cms/pages/p-tools.js';
    import contact from '../../cms/pages/p-contact.js';
    import menus from '../../cms/pages/partials/menus.js';
    import siteSettings from '../../cms/pages/partials/siteSettings.js';
    
    // This global flag enables manual initialization.
    
    window.CMS_MANUAL_INIT = true
    const { CMS, initCMS: init } = window
    
    init({
      config:{
        backend:{
          name: 'gitlab',
          branch: 'main',
        },
    
        load_config_file: false,
        media_folder: "assets/images",
        public_folder: "/images",
    
        collections: [
          news,
          evergreen,
          tools,
          contact,
          menus,
          siteSettings
        ]
      }
    })

You may have noticed there are a couple of files imported into this main JS file. **These imports are where the true beauty and scalability happen**. Now that a JS file contains the CMS config object, you can import your collection fields from various files using JavaScript modules. For further information on modules, [explore the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). Continuing with our example, the code block above shows the news object is imported and added to the collections array in the `init` function. As the name implies, this news object contains fields for an editor to add or update content within the news section. Here is what the `p-news.js` file looks like:

    const news = {
      name: "news",
      label: "News",
      label_singular: "News Item",
      folder: "/content/news-clippings",
      preview_path: "/news/",
      create: true,
      editor: { preview: false },
    
      fields: [
        {label: "Title", name: "title", widget: "string"},
        {label: "Excerpt", name: "excerpt", widget: "text" },
        {label: "Publish Date", name: "date", widget: "date" },
        {label: 'Link', name: 'link', widget: 'string', required: false },
        {label: "Thumbnail", name: "thumbnail", widget: "image", required: false },
        {label: "Thumbnail Alt", name: "thumbnail_alt", widget: "string", required: false}
      ]
    
    }
    
    export default news

As you can see above, how we define fields for the news collection is similar to how it would be in the `config.yml` file.

With the examples above, you can see how to build an organized, scalable config file, one not cluttered with collection fields and CMS configurations. Next, we will see how to tackle and declutter the other important file for NCMS, `index.html`.

### Preview templates organization

Custom preview templates live in the `index.html`. Depending on the structure of your site, you may have multiple collections that each share the same custom previews. It quickly becomes tedious to add these previews to each collection definition. Luckily, there is a way to abstract the preview templates into individual files and share them with multiple collections by using JS modules once again. The following example shows an evergreen template shared between various collections defined below.

    import ctaBlock from "./blocks/b-cta.js";
    
    var EvergreenPreview = createClass({
      render: function(){
        let props = this.props;
        let entry = this.props.entry;
        let blocks = this.props.widgetsFor('blocks');
    
        return h('div', {'className': "max-w-7xl mx-auto px-4"},
          h('div', {'className': "p-4"},
            h('div', {"className": "text px-4"}, this.props.widgetFor('body')),
    
            this.props.widgetsFor('blocks').map(function(blocks, index){
              if(blocks){
                blocks.getIn(['data']).toJS()
                // BLOCK CTA TEMPLATE
                if(blocks.getIn(['data', 'type']) == 'cta'){
                    return ctaBlock(blocks, index)
                }
              }
            })
          )
        );
      }
    });
    
    // Register evergreen pages
    CMS.registerPreviewTemplate('page', EvergreenPreview);
    
    // Register news pages with evergreen layout
    CMS.registerPreviewTemplate('news', EvergreenPreview);
    
    // Register contact pages with evergreen layout
    CMS.registerPreviewTemplate('contact', EvergreenPreview);

As you can see, we are using the same abstraction workflow that we used for our configuration files. In the code block above, we are importing the CTA template into our overall evergreen template. For more information on how to build preview templates, the NCMS team does a great way of explaining it in their [docs](https://www.netlifycms.org/docs/customization/). At the end of the code block, we see that we can use our evergreen template for multiple collections. This is especially useful for page-building blocks, a feature for most static sites.

### Conclusion

With NetlifyCMS, you can keep your config and templates clean, clear, and organized using JS modules. Combine this with a proper naming convention, and your project will have the ease of seamless scaling. No more bulk to you have to filter through and no more confusion. With this setup, you can even use the same components in multiple projects, allowing you to build your own NCMS toolkit. This is a powerful addition to your workflow and dramatically reduces developer time. Now, go ahead and enjoy creating templates with ease.