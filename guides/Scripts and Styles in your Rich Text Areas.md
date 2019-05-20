# Scripts and Styles in your Rich Text Areas

>With great power comes great responsiblity - *Ben Parker, Father of Spiderman*. 

HTML areas in the CMS support `<script>` and `<style>` tags. But, to what extent should you be using these?

A successful CMS implementation should empower your editors and keep them focused on creating content rather than finicking with the presentation layer. They shouldn't be worrying about adding the right *Styles* and *Scripts* to make their content look right.

## When is it Okay to Inject Scripts/Styles in your Rich Text Area?
There are few cases where this is recommended, but we also realize that there are times when you need to make quick changes without having access to the website source code or ability to do releases. These should be few and far between, and should be converted to a *Module* at the earliest opportunity by a developer.


## Side-Effects
Having JS and CSS in *Rich Text Areas* can have the following effects on your CMS implementation for your website:
- Increase in bugs and general website dificiencies
- Increase it time it takes to modify content
- Increased site maintenance costs
- Only web-saavy editors can modify content
- Potential for vulnerabilities with un-approved/un-tested JavaScript being added to the site
- Performance issues


## Where Should CSS and JS be Managed Then?
If certain CSS and JS are essential for content to appear correctly, it should be added to your website code.

Agility has the concept of *Modules*, and they represent the functional components of a page. Developers encapsulate HTML, CSS, and JavaScript so that when a *Module* is added to a page, they can guarantee the right CSS and JavaScript are available to the page automatically. This is the responsibility of the developer.

## Make it a Module
If you are finding yourself adding JS and CSS within a *Rich Text Area* in the CMS, then this code belongs in a *Module*.

*Modules* have code that are rendered when they are requested by a page. That code is comprised of HTML that is rendered by a template engine (`.chstml`, `.jsx`, etc.)

When you move your static HTML from your *Rich Text Area* to a *Module*, you should break down the content into individual fields. Rather than one big HTML area, use a combination of fields to store the structured data.

**Example fields include:**
- Text
- Number
- Long Text
- Image
- File
- YouTube

Then, in code on your website, use a template engine (`.cshtml`, `.jsx`, etc.) to hand-craft your presentation layer which simply outputs the raw data from the CMS and the appropriate HTML, CSS, and JS requried for the desired output.

**Benefits of a Module:**
- Can be re-used on any page in the CMS
- Can be included in dev ops pipeline for approvals and quality assurance (QA, UAT, and Production releases)
- Non web-saavy editors can create pages with rich functionality simply by entering fields on a form
- Lower maintenance costs

### Who can Create a Module?
If you can write HTML/CSS/JS, then you likely have the skills to be able to create a *Module* as well.

## Preventing Scripts and Styles in Rich Text Areas
To ensure that your editors and developers are following best practices, consider implementing these ways to validate your content:

1. Use *Content Worklow* so only approved content (without `<style>` and `<scripts>`) can be published.
2. Use the `onBeforeSave` JavaScript hook within your Content/Module definitions input form script to validate your content before it is allowed to be saved.
3. Consider creating your own custom *Rich Text Area* field using *Custom Field Types* that does not allow editors to use `<script>` or `<style>` tags.

**Tips:**
- Avoid development bottlnecks by involving more people in your dev ops
- Setup your website code in a way that empowers frontend developers to be able to contribute
- Ensure you have a *gated check-in* setup in your source control so that code is reviewed before it is accepted
- Implement QA workflows so code is tested before put into production
- Deploy early and often






