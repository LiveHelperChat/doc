---
id: send-predefined-block
title: Send predefined block
---

## Introduction

The **Send Predefined Block** action allows you to execute another bot trigger from within your current trigger. This is a powerful feature for creating reusable bot workflows and managing complex conversation flows by breaking them into smaller, manageable components.

This action type is handled by the `erLhcoreClassGenericBotActionPredefined` class in the Live Helper Chat codebase.

## Use Cases

The Send Predefined Block action is useful for:

* **Reusable Workflows**: Create common conversation flows (like greeting messages, data collection forms, or FAQs) that can be called from multiple triggers
* **Modular Bot Design**: Break down complex bot logic into smaller, maintainable trigger blocks
* **Conditional Flow Control**: Execute different trigger blocks based on user input or chat state
* **Dynamic Responses**: Chain multiple triggers together to create sophisticated conversation flows
* **Code Reusability**: Avoid duplicating bot responses by calling shared trigger blocks

## How It Works

When a Send Predefined Block action is executed, it:

1. Retrieves the specified trigger by its ID (payload)
2. Dispatches a `chat.genericbot_chat_predefined` event, allowing extensions to modify the behavior
3. Executes the target trigger using `erLhcoreClassGenericBotWorkflow::processTrigger()` or `processTriggerPreview()` depending on the context
4. Passes along the current chat context and parameters to the new trigger

## Configuration

### Payload

The main configuration parameter is the **payload**, which should contain the numeric ID of the trigger you want to execute.

**Example:**
```json
{
  "content": {
    "payload": 123
  }
}
```

Where `123` is the ID of the trigger you want to call.

## Parameters Passed to Target Trigger

When executing a predefined block, the following parameters are automatically passed:

* `predefined_trigger` - The trigger that initiated the predefined block call
* `current_trigger` - The currently executing trigger (same as predefined_trigger initially)
* `first_trigger` - The very first trigger in the execution chain (useful for tracking the conversation origin)
* `args` - All arguments from the parent trigger are passed to the child trigger

### Parameter Flow Example

```
Trigger A (first_trigger)
  └─> Calls Predefined Block → Trigger B (current_trigger, predefined_trigger)
      └─> Calls Predefined Block → Trigger C (current_trigger)
          - first_trigger = Trigger A
          - predefined_trigger = Trigger B
          - current_trigger = Trigger C
```

## Accessing Trigger Information

Within your bot responses, you can access trigger information using these variables:

* `{args.current_trigger.id}` - Current trigger ID
* `{args.current_trigger.name}` - Current trigger name
* `{args.first_trigger.id}` - First trigger ID in the chain
* `{args.first_trigger.name}` - First trigger name in the chain
* `{args.predefined_trigger.id}` - Predefined trigger ID (if called from another trigger)
* `{args.predefined_trigger.name}` - Predefined trigger name (if called from another trigger)

## Preview Mode

The action supports preview mode, controlled by the `do_not_save` parameter:

* When `do_not_save` is `false` (default): The trigger is processed normally and changes are saved
* When `do_not_save` is `true`: The trigger is processed in preview mode using `processTriggerPreview()`, which doesn't save changes

This is useful for testing triggers without affecting the actual chat state.

## Extension Hook

Developers can intercept and modify the predefined block execution using the `chat.genericbot_chat_predefined` event:

```php
$handler = erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.genericbot_chat_predefined', array(
    'action' => $action,
    'chat' => & $chat,
));

if ($handler !== false) {
    $trigger = $handler['trigger'];
} else {
    $trigger = erLhcoreClassModelGenericBotTrigger::fetch($action['content']['payload']);
}
```

This allows extensions to:
* Override which trigger gets executed
* Add custom logging or analytics
* Implement dynamic trigger selection based on business logic
* Modify chat state before trigger execution

## Best Practices

### 1. Naming Convention

Use clear, descriptive names for your triggers to make them easy to identify when selecting predefined blocks:

* ✅ Good: "Collect Customer Email", "FAQ - Pricing Info", "Transfer to Sales Department"
* ❌ Bad: "Trigger 1", "Test", "abc"

### 2. Modular Design

Break down complex workflows into logical, reusable components:

```
Main Welcome Trigger
├─> Language Selection Block
├─> Customer Type Identification Block
└─> Route to Appropriate Department Block
```

### 3. Avoid Circular References

Be careful not to create infinite loops by having triggers call each other in a circular manner:

```
❌ Avoid:
Trigger A → Calls Trigger B
Trigger B → Calls Trigger A
```

### 4. Document Dependencies

When creating triggers that call other triggers, document these dependencies clearly so other administrators understand the flow.

### 5. Parameter Passing

Remember that all parameters from the parent trigger are available in the child trigger, so you can use this for passing context:

```json
{
  "chat_variables": {
    "customer_type": "premium",
    "priority": "high"
  }
}
```

### 6. Send predefined and Check for conditions to proceed flow

If you have a main trigger which consists of

Trigger A → `Send Predefined Block` → Trigger B → Has `Check for conditions to proceed` trigger and conditions are met
          → ❌ `Send Predefined Block` → Trigger C → Has `Check for conditions to proceed` trigger and conditions are met

Bottom block won't be executed unless in `Trigger B` → block `Check for conditions to proceed` is checked `If conditions are matched continue executing responses.`

## Example Workflow

Here's a practical example of using predefined blocks:

### Trigger 1: Main Menu (ID: 100)
```
Welcome! What can I help you with?

[Button: Check Order Status] → Calls Trigger 200
[Button: Contact Support] → Calls Trigger 300
[Button: FAQ] → Calls Trigger 400
```

### Trigger 200: Order Status
```
Please enter your order number:
[Collect input]
[Execute predefined block: Trigger 500 - Process Order Lookup]
```

### Trigger 300: Contact Support
```
[Execute predefined block: Trigger 600 - Collect User Info]
[Transfer to human operator]
```

### Trigger 500: Process Order Lookup (Reusable)
```
[REST API call to check order]
[Display results]
```

### Trigger 600: Collect User Info (Reusable)
```
What's your name?
[Collect name]
What's your email?
[Collect email]
```

In this example, Triggers 500 and 600 are reusable components that can be called from multiple places in your bot workflow.

## Related Actions

* [Update Current Chat](bot/update-current-chat.md) - Modify chat attributes and state
* [Execute Trigger](bot/triggers.md) - Learn more about bot triggers
* [Text Message](bot/text.md) - Basic text responses
* [Buttons](bot/text.md#buttons) - Interactive button responses

## Technical Details

### Class Information

* **Class Name**: `erLhcoreClassGenericBotActionPredefined`
* **File Location**: `lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionpredefined.php`
* **GitHub**: [View source code](https://github.com/LiveHelperChat/livehelperchat/blob/master/lhc_web/lib/core/lhgenericbot/actionTypes/lhgenericbotactionpredefined.php)

### Method: process()

```php
public static function process($chat, $action, $trigger, $params = array())
```

**Parameters:**
* `$chat` - The current chat object (`erLhcoreClassModelChat`)
* `$action` - The action configuration array containing the payload
* `$trigger` - The current trigger object (`erLhcoreClassModelGenericBotTrigger`)
* `$params` - Additional parameters passed through the execution chain

**Returns:**
* Result from `erLhcoreClassGenericBotWorkflow::processTrigger()` or `processTriggerPreview()`

## Troubleshooting

### Predefined Block Not Executing

**Problem**: The predefined block action doesn't seem to trigger the target trigger.

**Solutions**:
1. Verify the trigger ID (payload) is correct
2. Check that the target trigger is active and not disabled
3. Ensure the target trigger conditions are met
4. Check for any permission issues or access restrictions

### Parameters Not Passing

**Problem**: Variables from the parent trigger aren't available in the child trigger.

**Solutions**:
1. Ensure you're using the correct variable syntax: `{args.chat.*}` or `{args.msg.*}`
2. Check that the variables are set before calling the predefined block
3. Use the Debug mode to inspect the `$params` array

### Infinite Loop Detection

**Problem**: Bot seems to hang or timeout.

**Solutions**:
1. Review your trigger chain for circular references
2. Implement loop counters in chat variables
3. Add maximum depth checks in your workflow design

## See Also

* [Bot Triggers Overview](bot/triggers.md)
* [Bot Workflow Design](how-to-use-bot.md)
* [Chat Variables](bot/update-current-chat.md#set-chat-variable-not-visible-by-operator)
* [Extension Development](hooks.md)

