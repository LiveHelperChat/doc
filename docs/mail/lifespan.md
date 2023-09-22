---
id: lifespan
title: Mail lifespan
sidebar_label: Lifespan
---

Just quick lifespan of mail conversations and various options regarding it. 

* When new mail comes we check does it has `Reply-To` or `References` value
  * if `Use only In-Reply value as reference to the thread. Otherwise Reference attribute also would be used.` option in mailbox configuration is not checked we also check is there any previous conversation.
  * We check do we have any previous conversations which matches `Reply-To` values
* If conversation is not found we create a new one.
* If conversation is found and it is
  * `CLOSED` - 
    * We check `Timeout in days after last response before we create a new issue` if this value is set and it matches we create a new conversation
      * We set ticket owner to previous ticket owner if `Assign follow-up e-mail to the previous thread owner` is set 
      * Otherwise owner is not set.
    * If `Timeout in days after last response before we create a new issue` if this value is NOT set
      * We just reopen ticket and keep previous operator.
  * If conversation is not `CLOSED` we just reopen it and keep owner as it was.
* If you want owner to be reset each time `CLOSED` conversation is opened you can just set department auto assignment section and set `Automatically assign mail to another operator if operator did not accepted mail in seconds, 0 - disabled`.