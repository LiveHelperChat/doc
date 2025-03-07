---
id: single-sign-on
title: Implementing Login to LHC Using Third-Party Login Providers (SimpleSAMLphp)
sidebar_label: Single Sign-On
---

This article explains how to implement Single Sign-On (SSO). This is useful if you are integrating LHC with third-party systems and want to maintain a single sign-on experience.

The purpose of this extension is to:

*   Create a user upon their first login based on data provided by SimpleSAMLphp.
*   Log in the user if they already exist.
*   Override the default user/login URL with SSO support, while still allowing login via the traditional method using login/loginadmin.
*   Map LHC user attributes upon initial user creation.
*   Provide settings for default department and group assignment for newly created users.

A new extension is available for these scenarios:

[https://github.com/LiveHelperChat/sso-boilerplate](https://github.com/LiveHelperChat/sso-boilerplate)

### Use Cases

*   Are you integrating LHC with third-party systems and want to maintain a single login across all of them? This extension is a perfect solution.
