---
id: paid-chats
title: Paid Chats
---

Paid chats can be used when you want to restrict live help chat sessions to a specific identifier, ensuring that a chat session is only possible if the chat is not closed and only for that identifier. This is similar to chatbox functionality, except it's based on the live help widget instead of a chatbox.

How to enable:

1.  Go to "System configuration" => "Paid chat configuration."
2.  Enable the feature.
3.  You can change the secret hash, which is used for verification.

## New widget

```js
var LHC_API = LHC_API||{};
LHC_API.args = {
...
phash : 'payment_id',    // Payment ID (Optional)
pvhash : '<?php echo sha1('<secret_validation_hash>'.sha1('<secret_validation_hash>'.'payment_id'))?>',  // Payment verify hash (Optional)
...
}
```

## Old widget

If you are using the standard widget (not a page widget), you can generate the value in the live help arguments like this:

```js
<script>
var LHCChatOptions = {};
LHCChatOptions.attr_paid = {phash:'payment_id_hash',pvhash:'<?php echo sha1('<secret_validation_hash>'.sha1('<secret_validation_hash>'.'payment_id_hash'))?>'};
</script>
```

For a page embed code, it can look like this:

```js
<script type="text/javascript">
var LHCChatOptions = {};
LHCChatOptionsPage.attr_paid = {phash:'payment_id_hash',pvhash:'<?php echo sha1('<secret_validation_hash>'.sha1('<secret_validation_hash>'.'payment_id_hash'))?>'};
</script>
```

Now, each live helper chat will be based on the `phash` value. A user will not be able to start a new chat if a chat has already been started.
