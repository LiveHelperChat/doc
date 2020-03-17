---
id: single-sign-on
title: How to implement login to LHC using third party logins providers (SimpleSAMLphp)?
sidebar_label: Single Sign On
---

This article explain how to implement Single Sign On. This is usefull if you are integrating LHC to third party systems and want to keep single Sing On

So purpose of this extension is

*   Extension upon first login should create a user based on SimpleSAMLphp provided data
*   If user exists it should login user
*   Extension should override default user/login url with SSO support and should keep possible to login old way using login/loginadmin
*   There should be mapping for lhc user attributes upon first time user creation
*   There should be setting for default department and group for newly created users

For all these cases there is new extension

[https://github.com/LiveHelperChat/livehelperchat-extensions/tree/master/singlesignon](https://github.com/LiveHelperChat/livehelperchat-extensions/tree/master/singlesignon)

### Where this extension can be used?

*   You are integrating LHC in third party systems and want to keep single login everywhere? That's perfect use case for this extension