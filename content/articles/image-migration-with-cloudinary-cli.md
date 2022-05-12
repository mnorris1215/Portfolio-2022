+++
aliases = []
author = "Monica Norris"
categories = ["Web Development"]
date = 2020-03-02T19:58:28Z
excerpt = "Use Cloudinary's CLI tool for fast, efficient image migration on JAMstack sites."
featured_image = "images/articles/bird-migration.jpeg"
image_alt = "bird-migration"
overline = "Image optimization"
seo_title = ""
slug = ""
title = "Migrate images to the cloud with Cloudinary CLI"

+++
As the rise of JAMstack continues to blast forward this year, many developers are coming to realize the challenges and obstacles that might make migrating their site to the JAMstack more complicated than expected. One undertaking, in particular, is asset migration. There is a multitude of ways you can move images to remote storage, but that does not make the work easy or explicit. Furthermore, many of the currently available tools, like [GCP](https://cloud.google.com/storage/pricing) and [Amazon's S3](https://aws.amazon.com/s3/pricing/), that handle this task can become expensive, depending on multiple factors such as image sizes, number of image files, or the traffic your site attracts.

Thankfully, [Cloudinary](https://cloudinary.com/) serves as the perfect tool to handle all this and more. Cloudinary makes it a breeze to migrate images directly through the browser or an API. Their free plan comes with generous storage capacity and access to powerful features such as image and video transformations, as well as their [Upload](https://cloudinary.com/documentation/image_upload_api_reference) and [Admin](https://cloudinary.com/documentation/admin_api) APIs. Lastly, their well-supported CDN eliminates the worry of long load times and slow speeds.

However, you may have realized uploading images from the browser is time-consuming, and you may have already moved your site from your server, yet did not integrate a CMS. Fear not! Cloudinary has come up with an answer for this as well. Introducing the newest tool in the Cloudinary line: [Cloudinary CLI](https://cloudinary.com/documentation/cloudinary_cli).

> Note: Cloudinary CLI is still in beta. Upgrades or changes may occur after the publishing of this article.

With Cloudinary CLI, you now have the power of Cloudinary's Upload and Admin API, without ever having to set up a separate SDK environment or a serverless function. Not only this, but image transformation becomes a breeze right as you upload your images, no matter if there are few or many.

### GETTING STARTED

Cloudinary gives clear documentation on how to install their CLI [here](https://cloudinary.com/documentation/cloudinary_cli).

Once you have the CLI tool installed, you can quickly test your installation by running:

    cld config

You should see your Cloudinary name, public and secret API key, and a boolean if your account uses a private CDN.

### UPLOADING IMAGES

With the CLI set, you are now ready to start uploading images. To upload an image with Cloudinary's default settings, run:

    cld uploader upload <IMAGE FILE PATH>

This command uploads the asset in your main Cloudinary media library. It's just that simple. In your terminal, Cloudinary gives you the image information, including the URL where you can access your image. One thing to note is the image name changes to a unique public id randomly assigned by Cloudinary. Cloudinary provides this to prevent uploading duplicate images. To keep the original filename, and set other upload parameters as well, you can configure an upload preset.

### CLOUDINARY PRESETS

Navigate to settings in Cloudinary—the gear in the top right-hand corner of the navigation bar—and click on the "Upload" tab at the top. Scroll down to "Upload presets" and click on "Add upload preset".

{{< image_resize  src="/images/articles/cloudinary_presets.png" alt="Cloudinary Presets" >}}

Here, you can set parameters for uploading images. With these optional settings, you can keep the original filename instead of the random character string Cloudinary assigns, specify where Cloudinary should store the image, and restrict the formats that are allowed to be uploaded.

Once you have your preferred parameters set, navigate back to your terminal, and run:

    cld uploader unsigned_upload <IMAGE FILE PATH> <UPLOAD_PRESET NAME>

Check to see if the image is named and stored correctly.

At this point, you have successfully uploaded your image to your Cloudinary account and have set any special rules for the images if desired. You now have access to your image via URL, which allows you to customize and integrate the image into any site easily. For more information on how to customize images via its URL, refer to the docs [here](https://cloudinary.com/documentation/image_transformations).

### SIGNED VS. UNSIGNED

By using Cloudinary's Upload API, you have the power to quickly and efficiently upload images without needing authentication from the API, or having to communicate with a server. The unsigned_upload parameter field allows this functionality. However, if you look at the image URL or in your Cloudinary media library, you may notice the uploaded images keep their original filename, but also have a random six-character string appended to them. This is because unsigned presets are limited in the optional parameters you can assign to them due to security reasons. To bypass this, edit your upload preset and switch to signed. Find this option on the Storage and Access tab.

{{< image_resize  src="/images/articles/signed-v-unsigned.png" alt="SIGNED VS. UNSIGNED" >}}

Once you set your newly signed preset as the default upload preset, can now run this short command when uploading images through the terminal:

    cld uploader upload <IMAGE FILE PATH>

### GO FORTH AND UPLOAD

Hopefully, you have realized just how powerful Cloudinary's CLI tool can be. With this feature, you are now able to upload images to remote storage at lightning-fast speeds. Not only this, but when this process integrates with the build process, exceedingly irritating tasks like image migration now become fun. This tool has opened a new world for asset management, and the fact that it is only in beta hints at the awesomeness that is in store.

Photo by [Jan-Niclas Aberle](https://unsplash.com/@jnaberle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/migration?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
