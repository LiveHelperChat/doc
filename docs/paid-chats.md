---
id: paid-chats
title: Paid chats
---

What for it can be used. Let say you want to have live help chat based on some identifier and chat session would be possible only if chat is not closed and only for this identifier. Similar to chatbox functionality except it's based on live help widget not chatbox.

How to enable?

1. Go to "System configuration" => "Paid chat configuration"
2. Enable
3. You can change secret hash, it's used for verification

## New widget

```js
var LHC_API = LHC_API||{};
LHC_API.args = {
...
phash : 'payment_id',    // Payment ID | Optional
pvhash : '<?php echo sha1('<secret_validation_hash>'.sha1('<secret_validation_hash>'.'payment_id'))?>',  // Payment verify hash | Optional
...
}
```

## Old widget

In live help arguments if it's used for standard widget, not page widget value can be generated like

```js
<script>
var LHCChatOptions = {};  
LHCChatOptions.attr_paid = {phash:'payment_id_hash',pvhash:'<?php echo sha1('<secret_validation_hash>'.sha1('<secret_validation_hash>'.'payment_id_hash'))?>'};
</script>
```


For page embed code it can look like

```js
<script type="text/javascript">
var LHCChatOptions = {};
LHCChatOptionsPage.attr_paid = {phash:'payment_id_hash',pvhash:'<?php echo sha1('<secret_validation_hash>'.sha1('<secret_validation_hash>'.'payment_id_hash'))?>'};
</script>
```

So now each live helper chat will be based on phash value. User won't be able to start new chat if chat is already started.