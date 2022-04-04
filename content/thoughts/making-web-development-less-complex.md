+++
author = "Monica Norris"
categories = ["Web Development"]
date = 2019-10-24T00:00:00Z
description = "JAMstack is a new site architecture that delivers greater speed, security, scalability, and content archiving. In September, Monica went to San Francisco to attend the JAMStack 2019 conference and learned it's making real waves."
featured_image = "ND-2020/content/articles/making-web-development-less-complex/20191017_104751.jpg"
highlight = false
name = "featured_image"
omit_header_text = true
overline = "Jamstack"
title = "How can the Jamstack make web development less complex?"

+++
>> JAMstack is a new site architecture that delivers greater speed, security, scalability, and content archiving.


  If you have been paying attention to the developer world, you may have heard the buzz of [JAMstack](https://www.jamstack.org). This hot concept has been gaining traction for a few years, and after attending the latest [JAMStack conference 2019](https://jamstackconf.com/sf/), I can say that JAMstack is here to stay. Influential companies are quickly adopting this new architecture, and their successes easily convince why to adopt the JAMstack way.

  In this article, I highlight ideas from key speakers at the 2019 JAMstack conference, and how their contributions will lead us all into the JAMstack future.


### What is JAMstack?

   __Matt Billman from Netlify__ introduces us to the idea. JAMstack decouples the frontend from the backend of a site. Contrast this with a traditional, dynamic site architecture, which includes managing a database, configuring a server, building the markup, and having an OS bundle it all. This creates a nightmare for scaling, while speed, performance, and security can suffer. These traditional annoyances can be the downfall of a business, for speed is now an expectation and no longer a privilege.

   > JAMstack inspires developers to change traditional thought processes in site building—and how stable that build will be in the future.


   But with the JAMstack site architecture, these problems are easily solved — no need to manage a database when you can let someone else handle your storage. The same concept applies to the server. Generated markup also comes into play, for if you want a site to be faster, generation is the key. This points to the power of the build step, the more tasks handled during the build, the quicker the site becomes.


{{< image_resize  src="/images/articles/matt_billman.jpeg" alt="Matt Billman" >}}


### The blurry lines between dynamic and static site architectures

  __Debbie O’Brien from [Patterson Agency](https://www.patterson.agency/)__ helps us understand the difference between static and dynamic site architectures. Every dynamic site is static at some point. A website is only dynamic when it is completing an action—for example, adding a product to a shopping cart—otherwise, it is static. So why not create a dynamic component and integrate it into a static site? You can achieve this by developing a single page application and adding it to your pre-rendered site. How can you do this? One way is to use Nuxt’s fetch method. A project built with the [Nuxt framework](https://nuxtjs.org/) lets you have overall pre-rendered markup, and you fill in dynamic components when necessary. These page components use the fetch method to call an API every time before the page renders. It is only the component that calls the API, so there is no worry that the fully static pages will make unnecessary API calls as well. In this way, you can have a static site that is dynamic, true to the JAMstack way.

### The new architecture of Git-based CMS

  Can a fully functional CMS adopt the JAMstack principles? Absolutely. __Sean Erquhart from Netlify__ explains the beauty of a Git-powered CMS. A monolithic CMS handles editing, storage, rendering, and serving. It was the traditional bridge over the gap between the user and the developer. However, now we see new architectures where Continus Integration / Continuous Delivery (CI/CD) processes replace the server, while a static site generator (SSG) takes care of the rendering process. This is known as a headless CMS. Git develops this architecture a bit further by replacing the need for a database. Instead, content is handled through the Git repository. SSG’s become the new CMS.

  Now, editing is the new gap. SSG’s expect markdown for content directly in the repo, which is excellent for the developer, but a nightmare for the user — no one wants a user to touch a repository. Here comes the beauty of a Git-based CMS. It is a non-technical interface: it lets editors use well-understood text editing tools to write markdown and push commits, all through the browser. The user now has an easy interface for editing, and the developer has the privilege of using an SSG. A new bridge is built, and it leads to a peaceful world.

### Can the old guard — WordPress, Drupal — keep up?

  … but some insist WordPress is still the way to go. Does this mean we have to abandon our JAMstack journey? __Amit Rathi from [MobiDev](https://mobidev.biz/)__ doesn’t believe so. He argues that some users still  want the comfort of the admin page that WordPress offers and don’t care how the site is created. You can still incorporate a static site generator, while keeping the WordPress admin page the same.

  {{< image_resize  src="/images/articles/headless_wordpress.jpeg" alt="Headless WordPress" >}}


  WordPress is far from perfect, however, and there are challenges when using it. Of course, a server is still needed—WordPress runs in PHP, so it must have a server to run in. WordPress has a REST API that can be used. Ultimately, though, Amit’s advice is to avoid WordPress when possible.


### Is front-end the new full-stack?

{{< image_resize  src="/images/articles/frontend_fullstack.jpeg" alt="Frontend Fullstack" >}}



   > JAMstack is about empowerment.

A frontend developer can now ultimately build and deploy a site, without having to depend on a backend developer for configuration. __[CodePen’s](https://codepen.io/) Chris Coyier__ even argues that frontend is the new full-stack, for the role is continually expanding as new ideas arise. As front end developers move forward into a JAMstack future, we’ll adopt the mindset that we can integrate components and services from other companies to accomplish what we couldn’t before. There are no limitations to what developers can accomplish, for there are now tools to help us in every step of our site’s life. That is the true beauty of JAMstack, and what each talk emphasized at the 2019 JAMstack conference.
