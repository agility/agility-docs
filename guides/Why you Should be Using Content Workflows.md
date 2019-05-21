# Why You Should Have a Content Workflow
Content can power not only websites, but mobile apps, digital signage, IoT devices, and much more. 

It's more important than ever to ensure what you are publishing is consistent and meets your business requirements. 

**Content Workflows** aren't limited to just approving content before it gets published. Whether you want to integrate your content with other services or automate approvals, they can empower your team, increase the quality of content, save time and make you more productive.


## Benefits
Implementing **Content Workflows** can provide the following benefits:
- Reduce content errors
- Produce more consistent content
- Improve team cohesion
- Provides an opportunity for teaching and sharing
- Increased productivity by automating workflows (using Custom Content Workflows)


## Using Agility's Built-in Content Workflow
Agility provides a **Content Workflow** process *out-of-the-box* that provides a gated workflow for publishing. Content must be approved before it is published. 

Example:
>1. The editor creates and saves content.
>2. Editor clicks *Request Approval* button.
>3. The manager receives an email alert notifying them that content is *Awaiting Approval*.
>4. Manager reviews the content and clicks *Approve*.
>5. Editor receives an email notifying them that the content is now approved, and can now be published.
>6. Editor *Publishes* the content.

For a detailed walkthrough on how to set this up, see our guide [Setting Up Approval Workflow](https://help.agilitycms.com/hc/en-us/articles/360028545191). 

## Creating your own Custom Content Workflow
We understand that while our built-in **Content Workflow** may cover most use-cases, sometimes more specific workflows are required. 

Using Agility's **Content Webhooks** and **Content Management API**, you can create your own workflows. 

### Examples to Inspire You:
The following are some examples of automated, custom content workflows:
> - Send a message to a *Slack* channel whenever any content is updated in the CMS
> - When an article is published, post it to your social media channels
> - Check the content for spelling and grammar errors by using a service such as *Grammarly*, flag it and send an email to the person that last modified it
> - Create a version of the content in another language by using the *Google Translate* API
> - Automatically detect usage of `<script>` tags in content or pages, flag them for manual review and send an email
> - Run automated, browser-based unit tests in preview mode to ensure a content update will not break functionality on a page

### Content Webhooks
Whenever the state of a *Page*, *Module*, or *Content Item* changes within the CMS, Agility can notify any endpoint over Http/Https of the change. This allows you to create your own endpoints that will accept this message and proceed to process your custom business logic. 

What logic happens within that endpoint is entirely up to you. 

Agility also supports using Http/Https endpoints from services such as *Zapier*, *IFTT*, *Azure Logic Apps*, *Microsoft Flow* and more. These services allow you to create advanced workflows that integrate with other third-parties without writing any code.

### Content Management API
Once you've received a message in a **Content Webhook**, you can then, based on your logic, also interact with your Content programmatically using our **Content Management API**.

The **Content Management API** allows you to:
- Update the content
- Change the state of the item (i.e. *Publish* an item is approved)
- Create new content
