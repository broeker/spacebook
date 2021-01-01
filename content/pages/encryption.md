---
title: Password protect your spacebook 
date: 2020-11-20
permalink: /advanced/encryption/index.html
toc: true
eleventyNavigation:
  key: Password protection
  order: 75 
  parent: Advanced settings
---
By default, your spacebook is set up to be [non-discoverable](/privacy) but you can also protect your entire site behind a password. When you enable, your entire site will be encrypted by [Staticrypt](https://github.com/robinmoisson/staticrypt) and all users will need to enter a password to decrypt and view. 

## Demo site
 
**Demo:** [Spacebook](https://deploy-preview-10--spacebook-app.netlify.app/tips-and-tricks/ordering/) (Password = *spacebook*)

::: callout
**Did you know?** Netlify does not allow for basic authentication on their free tier. If you are already on a paid plan or are willing to do so, then it is better to simply set up basic authentication via your dashboard instead of using the instructions below.
:::

## Set a password in Netlify

* Visit your Netlify dashboard and go to **Site settings > Build & deploy > Environment**

* Click **Edit variables** and a new variable with the key **PASSWORD** with the **value** set to the password of your choice for unlocking your site:

![Password example](/static/img/password.png)

If you ever change this password, all of your users will be prevented from accessing your content until they have the new password.

## Enable encryption

In your **_data/site.json** file, set encryption to true:

```
{
  ...
  "enableEncryption": true 👈 set this to true!
  ...
}

```

This will enable a logout button that appears in your header whenever encryption is enabled. 

## Change your build command

Now you need to change the build command in your **netlify.toml** file. Comment out the current **npm run build** command and enable the command directly below it like so:  

```
[build]
  publish = "_site"
  comment this line 👉 #command = "npm run build" 
  uncomment this one 👉 command = "npm run build && set -e && find ./_site -type f -name '*.html' -exec staticrypt -f password_template.html {} $PASSWORD -o {} \\;"
  
```

That's it! 👍

When you deploy your site all of your pages will be encrypted at build time and require a password to access. The passphrase is stored in local storage and users remain logged in for future visits until they click the logout button  (<svg  width="24" height="24"  xmlns='http://www.w3.org/2000/svg' class='ionicon inline text-gray-400 hover:text-red-800' viewBox='0 0 512 512'><title>Close Circle</title><path d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32'/><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M320 320L192 192M192 320l128-128'/></svg>), or an administrator changes the password. 

If you ever want to remove password protection, simply reverse this process and your site will no longer be encrypted at build time.

::: callout
**Did you know?** Because all of your pages are being decrypted on the fly at the time of access, there is a small delay between page loads so you will see a small loading spinner that you won't otherwise see on a spacebook site. 😊
:::
