# Go Live Checklist
This guide will walk you through a set of basic steps that you'll need to take prior to launching a JAMstack website that is hosted on Stackpath.


## Pre-Launch Tasks
The following are tasks that should be done prior to proceeding to launch a site.


### Configure your Agility CMS Instance
- [ ] A *Preview* domain has been registered in **Domain Configuration** with `Default Preview` set to `true`
- [ ] A *UAT* domain has been registered in **Domain Configuration** with `Default Preview` set to `false`
- [ ] A *Prod* domain has been registered in the **Domain Configuration** with `Default Preview` set to `false`
- [ ] Required content has been published and is appearing as expected in *UAT/Prod* environments

---

### Configure your SEO on Website Environments
- [ ] There is a `/sitemap.xml` file that accessible in the root that instructs search engines about all the pages on the website
- [ ] The *Preview* environment has a `/robots.txt` file deployed in the root that prevents bots from crawling it
```
User-agent: *
Disallow: /
```
- [ ] The *UAT* environment has a `/robots.txt` file deployed in the root that prevents bots from crawling it
```
User-agent: *
Disallow: /
```
- [ ] The *Prod* environment has a `/robots.txt` file deployed in the root that allows bots to crawl it and points to your `sitemap.xml`
```
Sitemap: http://www.example.com/sitemap.xml
User-agent:*
Disallow:
```
- [ ] All pages rendered from Agility CMS have proper `<title>` and `<meta>` attributes that are controlled by the *SEO* fields on the Page in Agility CMS

---

### Audit your Site Performance
- [ ] Run an audit using [Lighthouse](https://developers.google.com/web/tools/lighthouse#devtools) in Chrome Dev Tools
- [ ] You have a Lighthouse score of at least **90** in each category (*Performance*, *Accessibility*, *Best Practices*, *SEO*)
- [ ] **BONUS**: Add [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/getting-started.md) to run a Lighthouse audit automatically in your Dev Ops pipeline

---

### Prepare Delivery Domains
- [ ] Determine what domain(s), including any sub-domains that need to be mapped to the production website - these can be pre-mapped  in Stackpath as *Delivery Domains* by Agility CMS
- [ ] DNS verification records have been created so that SSL certificates can be generated on your behalf in Stackpath CDN
- [ ] All public-facing domains have an SSL certificate installed 
- [ ] The TTL (Time-To-Live) has been set to 15 minutes or less - this is helpful so that when you do change your DNS settings on launch day the change takes effect quickly

### Security
- [ ] Stackpath CDN is configured to auto upgrade non-https traffic to https
- [ ] TLS 1.2 is enabled in Stackpath CDN

### Test DNS
- [ ] Test that all of your *Delivery Domains* are resolving to Stackpath by editing your local DNS Zone file, and point it to the A Record or CNAME for Stackpath - this allows you to test DNS before making the real change in your DNS provider
```
//example only
150.133.124.10 sitetogolive.com
fkykj4c6.stackpathcdn.com www.sitetogolive.com
```

---

## Launch Tasks
The following tasks are what should be done on launch day.

### Change your DNS Entries
You will be provided an **IP Address** (for root domains) and a **CNAME Record** for your sub-domains to point to Stackpath CDN.
```
//example for `sitetogolive.com`
Type      Name          Value
---       ----          -----
A         @             150.133.124.10
CNAME     www           fkykj4c6.stackpathcdn.com
```
- [ ] You have set the A/CNAME records that were provided to you - **WARNING**: This will make your site LIVE!
- [ ] Change your TTL back to the original value - usually, 24hrs is recommended

### Add a Redirect for your Stackpath Alias Domain
- [ ] Add a redirect that will automatically redirect traffic from `{yourProdID}.stackpathcdn.com` to your primary public domain - this will ensure the Stackpath domain doesn't get crawled and considered a separate website
