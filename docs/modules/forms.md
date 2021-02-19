---
id: forms
title: Forms
sidebar_label: Forms
---

Form can work as standalone module or also can be integrated into a new widget. Minimum Live Helper Chat version - 3.64v

## What for is it?

Forms module solves the following problems

* You need a complex forms?
* It has to implemented fast?
* You need export in xls?
* Users should be able to attatch a file?
* You want to embed it in your site directly or have separate url for it?
* Want to have order form for some of your simple services?
* This custom forms module allows to do it all.

### How do I know from what page form was filled?

Just pass additional variable to form `"?identifier=<any_value>"`

More documentation about fields can be found here - https://livehelperchat.com/forms-module-tutorial-306a.html

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

## How do I have my own close button after form is submitted?

You can have something like that. We are checking does your HTML contains `name="ReturnButton"` if it does not. We will render our own return button.

```html
<p>Thank you for your feedback</p>

<input type="button" onclick="closeModal()" class="btn btn-secondary btn-sm" value="Close" name="ReturnButton" />

<script>
function closeModal() {
    parent.postMessage('lhc_load_ext:modal_ext::[{"url":"sd","cmd":"close"}]', '*');
}
</script>
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
function closeModal() {
    parent.postMessage('lhc_load_ext:modal_ext::[{"cmd":"close"}]', '*');
}
```

## How do I pass custom variables

Same way as you are passing variables to a [widget](custom-fields-and-prefill.md)

If you are integrating form into a widget it will automatically will pickup passed variables, and you do **not need** to construct them manually.

I would recommend passing `jsvar[5]` where key is additional chat variable `id`

Additionally, you can also pass them directly by constructing arguments via URL

```
https://demo.livehelperchat.com/index.php/form/fill/1?&name[]=Bet%20ID&encattr[]=f&value[]=bet_id&type[]=text&size[]=6
&req[]=t&sh[]=b&name[]=Transaction%20ID&encattr[]=f &value[]=&type[]=text&size[]=6&req[]=f&sh[]=b&name[]=Bet%20ID%202&encattr[]=f&value[]=bet_id%202
&type[]=hidden&size[]=0&req[]=f&sh[]=b &name[]=Transaction%20ID%202&encattr[]=f&value[]=&type[]=text&size[]=12&req[]=f&sh[]=on
&name[]=EncryptedTwodd&encattr[]=t&value[]=sb29scUd%2FKH2O778oMAGLGqqi7Q9oNflysbpx4X6Dp8%3D&type[]=hidden&size[]=0 
&req[]=f&sh[]=b&prefill[email]=remdex2%40gmail.com&hattr[]=email&prefill[phone]=370454654&prefill[username]=Username%20here
&prefill[question]=Default%20user%20message&value_items_admin[name_surname]=remdex%40gmail.com
&value_items_admin[question]=remdex%40gmail.com&value_items_admin[email]=remdex2%40gmail.com&value_items_admin[username]=remdex2%40gmail.com 
&value_items_admin[dropdopwn]=Siauliai&value_items_admin[textfield]=Text%20field&jsvar[2]=just%20some%20casn&jsvar[3]=Pirmass&jsvar[5]=Replaced%20by%20PROactive%2056
```

## Sample HTML

Content

```html
<button type="button" onclick="closeModal();" class="close float-right" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>

[[input||type=hidden||name=NamePrefill||name_literal=Name||value=prefill|username]]

<div class="row">
	<div class="col-6">
		<label>Name*</label>
		[[input||type=text||name=Name||name_literal=Name||placeholder=Your name||required=required]]
	</div>
	<div class="col-6">
		<label>Surname*</label>
		[[input||type=text||name=Surname||name_literal=Surname||placeholder=Your surname||required=required]]
	</div>
	<div class="col-12">
		<label>Supporter Number</label>
		[[input||type=number||name=SupporterNumber||name_literal=Supporter number]]
	</div>
	<div class="col-6">
		<label>Date of birth*</label>
		<div class="row">
			<div class="col-4">[[combobox||from=1||till=31||name=BirthDay||name_literal=Birth Day||required=required]]</div>
			<div class="col-4">[[input||type=month||name=BirthMonth||name_literal=Month||required=required]]</div>
			<div class="col-4">[[input||type=year||from=1911||name=BirthYear||name_literal=Birth year||required=required]]</div>
		</div>
	</div>
	<div class="col-12">
		<label>Email*</label>
		[[input||type=email||name=Email||name_literal=Email||main=true]]
	</div>		
	<div class="col-6">
		<label>Home phone*</label>
		[[input||type=number||name=HomePhone||name_literal=Home phone||required=required]]
	</div>
	<div class="col-6">
		<label>Mobile*</label>
		[[input||type=number||name=MobilePhone||name_literal=Mobile phone||required=required]]
	</div>
</div>

<div class="row">
	<div class="col-8">
		<label>1st Line of Address*</label>
		[[input||type=text||name=LineOfAddress||name_literal=1st Line of Address||required=required]]


	</div>		
	<div class="col-4">
		<label>Post code*</label>
		[[input||type=text||name=PostCode||name_literal=Post code||required=required]]
	</div>	
</div>

<h5>Mobility</h5>
<label>Wheelchair [[input||type=checkbox||name=Wheelchair||name_literal=Check box name litearal]]</label>
<label>Ambulant [[input||type=checkbox||name=Ambulant||name_literal=Ambulant]]</label>

<h5>Proof Of Disability</h5>
<label>Date on Proof*</label>
<div class="row">
<div class="col-6">
<div class="row">
		<div class="col-4">[[combobox||from=1||till=31||name=DisabilityDay||name_literal=Day||required=required]]</div>
		<div class="col-4">[[input||type=month||name=DisabilityMonth||name_literal=Month||required=required]]</div>
		<div class="col-4">[[input||type=year||from=1911||name=DisabilityYear||name_literal=Year||required=required]]</div>
</div>
</div>
</div>

<label>Attatch Proof document* (zip,doc,docx,pdf,xls,xlsx,jpg,jpeg,png,bmp,rar,7z)</label>
[[input||type=file||name=file||required=required||name_literal=Proof doucument]]

[[input||type=textarea||name=Message||name_literal=Message||placeholder=Message here goes||value=]]

<label>[[input||type=checkbox||name=CheckboxGender||name_literal=Acceptance||required=required]] I can confirm the document I have attatched is an up to date copy of my proof of disability </label>



<div class="pb-1">
            <input type="submit" class="btn btn-secondary btn-sm" value="Submit" name="SubmitForm" />

<input type="button" onclick="closeModal()" class="btn btn-secondary btn-sm" value="Close" name="Close" />

        </div>
<script>
function closeModal(){
parent.postMessage('lhc_load_ext:modal_ext::[{"url":"sd","cmd":"close"}]', '*');
}
</script>
```

Post content

```html
<p>Thank you for your feedback</p>

<input type="button" onclick="closeModal()" class="btn btn-secondary btn-sm" value="Close" name="ReturnButton" />

<script>
function closeModal() {
    parent.postMessage('lhc_load_ext:modal_ext::[{"url":"sd","cmd":"close"}]', '*');
}
</script>
```

## Permissions

> lhform','manage_fm'