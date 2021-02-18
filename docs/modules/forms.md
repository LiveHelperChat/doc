---
id: forms
title: Forms
sidebar_label: Forms
---

Form can work as standalone module or also can be integrated into a new widget. Minimum Live Helper Chat version - 3.64v

## URL's

There is two URLs which can be used

* Widget `https://demo.livehelperchat.com/index.php/form/formwidget/1`
* Full page layout - `https://demo.livehelperchat.com/index.php/form/fill/1`

Widget integration should always use first one.

## Integration into a new widget

Forms can be called either from website either form pre-chat html

### Integration from a website

Form in the widget can be called from website itself by executing this URL.

You have to provide full url to a form

```js
window.$_LHC.eventListener.emitEvent('sendChildExtEvent',[{'cmd':'modal_ext','arg':{'url' : 'https://demo.livehelperchat.com/index.php/form/formwidget/1'}}]);
window.$_LHC.eventListener.emitEvent('showWidget');
```

### Integration from a pre-chat HTML

HTML in pre-chat can look like

```html
<button class="btn btn-sm btn-secondary" onclick="window.lhcHelperfunctions.emitEvent('extensionExecute',['modal_ext',[{'url':'https://demo.livehelperchat.com/index.php/form/formwidget/1'}]])">Show form</button>
```

### How do I show a form using chat command?

One of usefull option is to show a form while chat is going.

This can be done by using command. There is 3 seconds delay between message is shown and form is shown.

```
!modal <form_id> <explain text>
```

Examples

With form ID **1** and explain text

```
!modal 1 We are baking form for you!
```

With form ID **1** and without explain. Default text will be used `We will show a form in a moment!`

```
!modal 1
```

With custom form URL where URL can be any URL

```
!modal https://example.com/iframe_url
```

### How do I show a form from a bot?

Your trigger can look like this

​![](/img/bot/modal-from-bot.png)

* Script identifier `modal_ext`
* Arguments `{"delay":3,"url":"https://demo.livehelperchat.com/index.php/form/formwidget/1"}`

## How do I have my own submit button in a form?

Live helper chat is checking does your form HTML has `name="SubmitForm"` string. If it's found we do not render our own submit button.

```html
<input type="submit" class="btn btn-secondary btn-sm" value="Submit" name="SubmitForm" />
```

## How do I close form from a form page?

Sample button which closes a form

```html
<input type="button" onclick="closeModal()" class="btn btn-secondary btn-sm" value="Close" name="Close" />
```

or at the top of form HTML something like this can be shown

```html
<button type="button" onclick="closeModal()" class="close float-right" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
```

Javascript function itself should look like this

```js
function closeModal(){
    parent.postMessage('lhc_load_ext:modal_ext::[{"cmd":"close"}]', '*');
}

```

## Permissions

> lhform','manage_fm'