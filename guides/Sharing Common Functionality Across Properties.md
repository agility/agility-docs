# Sharing Common Functionality across Properties
Agility’s page, module, and content structure allow you to build a bespoke content schema that addresses your specific sites’ requirements. Usually this means that each Agility instance varies greatly in terms of what modules and functionality are available. 

This is all great, but what happens when you have another website with similar requirements and you want to re-use functionality that was built for an existing site? Do you need to re-create the module from scratch just for this new website, or with proper planning, can we design modules to be website agnostic? 

![We can do that!](https://media.giphy.com/media/8FuMcd7vGO6dRKScnE/giphy-downsized-large.gif)

## Benefits of Sharing Common Functionality
Having the same modules availble to your editors across web properties will not only increase their familiarity with your CMS instance(s), it will also make them more productive.

For developers, this means you can likely limit the amount of modules you develop on a regular basis, as you re-use existing modules with minimal effort. This often leads to an increase in quality as well as developers and QA can spending more time testing and enhancing features, all while increasing the value of these modules across your properties.

![YES!](https://media.giphy.com/media/hZj44bR9FVI3K/giphy.gif)

## Guiding Principals
Whether you have multiple Agility instances, or an instance with multiple channels, the general philosophy is the same. 

1. You have Modules that have the same fields across all web properties and can be added to a page.

2. The source code for these Modules are centralized and distributed using a package manager.

3. Keep these Modules as generic and simple as possible. Tailoring the modules too much to a specific use case can affect its ability to be used in other web properties.

4. Keep all functionality, including HTML, JS and CSS self-contained so it will work on any website *out-of-the-box*.





