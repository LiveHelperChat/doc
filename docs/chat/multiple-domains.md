---
id: multiple-domains
title: How do I configure LHC to have different operators and widgets for different domains?
sidebar_label: Multiple domains
---

To have this functionality you can do the following trick, which should work just fine.

1.  Create two departments
    1.  example1.com
    2.  example2.com
2.  Assign different operators to different departments. So each operator will be responsible for different department/domain.
3.  During embed script generation choose for what department/domain you are generating a code.

### Advantages

No need to override any file or create a extension.

### Disadvantages

Partly we loose departments functionality. In LHC since 2.07 you can generated embed code with multiple departments selected at once. So if you create four departments. Let say "Support site 1","Commercial site 1","Support site 2","Commercial site 2" So for one site you can choose first and second department. For second site you chose third and fourth departments. So basically we avoid previous disatvantages.

## How can we have a different invitation messages to chat for different sites?

Just use identifiers while generating embed script and creating new invitations. By identifier you can separate invitations.