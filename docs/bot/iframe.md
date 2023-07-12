---
id: iframe
title: Sourceless Iframe
---

This element allows to have custom response if you want to integrate third party apps.

![](/img/bot/iframe.png)

Your HTML element can have custom class `lhc-iframe-close` and on these buttons click we will close iframe.

Sample response. Paste it in your trigger response body to load.

```json
[
  {
    "_id": "7dsxUBjdJ",
    "type": "iframe",
    "content": {
      "text": "",
      "payload_css": "[{\"rel\":\"stylesheet\",\"href\":\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0\"},\n{\"rel\":\"stylesheet\",\"integrity\":\"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65\", \"crossOrigin\" : \"anonymous\", \"href\" : \"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css\"}]",
      "payload_js": "[{\"src\":\"https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js\", \"async\":false, \"id\": \"script_id\", \"crossOrigin\" : \"anonymous\"}]",
      "iframe_options": {
        "one_per_chat": true,
        "hide_op": true
      },
      "body_html": "<div align=\"center\" class=\"container-fluid\">\n\n<span style=\"cursor: pointer\" id=\"iframe-close-action\" class=\"text-black-50 lhc-iframe-close material-symbols-outlined float-end\">close</span>\n\n<span class=\"text-primary material-symbols-outlined\">mail</span>\n<h4 class=\"text-primary\">Stay in the loop</h4>\n<p class=\"text-primary\">Get the latest coupons, promos, tournaments, and tips delivered string to your inbox.</p>\n\n<div class=\"row\">\n<div class=\"col-6\">\n  <button class=\"btn btn-sm btn-secondary lhc-iframe-close\" type=\"button\">No, thanks</button>\n</div>\n<div class=\"col-6\">\n  <button class=\"btn btn-sm btn-primary\" onclick=\"optIn()\" type=\"button\">Opt-in</button>\n</div>\n\n</div>\n\n</div",
      "iframe_style": "border:0;width:100%;height:200px",
      "payload_js_source": "function optIn() {\nalert('Opt In');\n// Do other actions\n// Close iframe\ndocument.getElementById('iframe-close-action').click();\n}"
    }
  }
]
```