# Develop and Deploy Faster

In order to support your business initiatives you need to be able to react quickly to change. Your CMS integration with your website should be no different.

If *Marketing* needs a new landing page, you shouldn't have to wait for a specialized developer or a release window.

With the right processes and infrastructure in-place, you can greatly decrease the time it takes develop a new feature, and enable more frequent deployments.

Some folks even deploy to production multiple times a day!

## Find the Bottleneck
Bottlnecks can occur throughout development cycle. The key to enabling faster development and deployment is to find and address these in a reasonable way.

A typical cycle for a new feature looks something like this:
1. Development/implementation
2. Quality Assurance and testing
3. Deployment to *UAT*
4. Deployment to *Production*


### Do you have enough Development capacity?
If you have only specialized developers that can work within the website code base, this can be an obvious issue. 

The goal should be to get as many developers as possible to be able to work on your website - not just backend or full-stack developers. Allowing frontend developers to be able to seamlessly contribute to your website codebase is critical. 

#### What if the development environment requires an OS with certain software dependancies or security requirements?
Consider utilizing *virutalization* and *containers* so that all of your developers can work on the same configuration, regardless of their client OS/configuration.

#### What if Frontend developers aren't comfortable working in an IDE such as Visual Studio?
Where possible, avoid building solutions that depend on Visual Studio. Consider using frameworks such as .NET Core, which can be run in any IDE, on any platform.

#### What if the Frontend developers have trouble working with server/backend logic that are contained within their views?
Where possible, seperate the backend and frontend into different applications. When you can't reasonably seperate them into different applications, you can also consider using JavaScript as your view engine and rendering that on the server (i.e. ReactJS.NET).

#### With more developers involved, how do you maintain the code-base and enforce standards?
Use a *Gated Check-In* policy in your source control. Developers should NOT be able to check-in their code unless it has been reviewed and approved in a *Code Review* session by another developer.


### What is your QA Process?
Your QA process should not only test any changes in your code, it should also provide some form of regression testing on existing code across your website. When you deploy to production, you need to be confident in your release.

You can't cut corners here. But, you can put measures in place to speed it up.

#### Are you using any Automated tests in your Code?
A combination of unit and integration tests can go a long way in speeding up your QA testing. These tests can be written by developers and immediately notify you of an issue during the build process - even before the code is released.

#### Cross-browser Automated Testing
Using tools such as *Selenium* can allow you to automate tests across all sorts browsers, devices, and OSs.

#### How long does it take to QA your site?
It's important to get a benchmark for how long this takes. Based on this, you can identify how often you can reasonably deploy to production.

### What is your deployment process to UAT/Production?
Ideally, developers who are checking in code changes should not have to worry about how or when to deploy their changes. It is recommended to have another process for this. This is one area where you want to actually have a closely controlled bottleneck. Afterall, you don't want users pushing to production without your process being followed.

#### How long does it take to deploy?
If you are manually copying files between one or many servers, this is something you'll want to address. Deploying a site should be easy and the steps should be automated. Not only will this speed up deployment, but will also result in more consistent deployments.

## Implement Continuous Delivery


# TODO






