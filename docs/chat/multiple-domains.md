---
id: multiple-domains
title: Configuring Different Operators and Widgets for Multiple Domains
sidebar_label: Multiple Domains
---

To configure Live Helper Chat (LHC) to use different operators and widgets for different domains, you can use the following approach:

1.  **Create Departments**:
    1.  example1.com
    2.  example2.com
2.  **Assign Operators**: Assign different operators to each department. This ensures each operator is responsible for a specific department/domain.
3.  **Generate Embed Script**: When generating the embed script, select the appropriate department/domain for which you are creating the code.

### Advantages

This method does not require overriding any files or creating extensions.

### Disadvantages

This approach may partially limit the full use of the departments functionality. In LHC version 2.07 and later, you can generate an embed code with multiple departments selected simultaneously. For example, create four departments: "Support site 1," "Commercial site 1," "Support site 2," and "Commercial site 2." For the first site, select the "Support site 1" and "Commercial site 1" departments. For the second site, select the "Support site 2" and "Commercial site 2" departments. This avoids the previously mentioned disadvantages.

## Using Different Invitation Messages for Different Sites

Use identifiers when generating the embed script and creating new invitations to differentiate invitation messages for each site.
