---
id: dialogflow
title: Dialogflow integration
---

# Dialogflow Flight Booking Conversation (curl Example)

This document shows a conceptual flow of a short flight booking conversation using raw `curl` commands to interact with a Dialogflow ES agent's `detectIntent` endpoint.

## Prerequisites

Before running these commands, you need:

* **`ACCESS_TOKEN`**: An active OAuth 2.0 access token obtained using your Google Cloud Service Account Key. These tokens are typically short-lived and may need refreshing.
* **`PROJECT_ID`**: Your Google Cloud Project ID where the Dialogflow agent is configured.
* **`SESSION_ID`**: A unique identifier you generate for this specific conversation (e.g., `user123-conv456`). **You must reuse this exact same ID** for all subsequent requests within the same conversation to maintain context.

## Assumptions

* You have a Dialogflow ES agent configured with intents like `book_flight`, `provide_origin`, `provide_destination`, `provide_date`, `confirmation_yes`.
* The agent is set up to prompt for missing required parameters (origin, destination, date).
* The global Dialogflow API endpoint is used. If your agent is regional, adjust the URL accordingly.
* For resolving relative dates like "Tomorrow", the context date is assumed to be April 10th, 2025.

https://cloud.google.com/dialogflow/es/docs/reference/rest/v2-overview

## The Conversation Flow

---

### Turn 1: User initiates booking

**User Input (`curl` command):**

```bash
# User says: "Book a flight"
# Replace <ACCESS_TOKEN>, <PROJECT_ID>, <SESSION_ID> with actual values
curl -X POST \
-H "Authorization: Bearer <ACCESS_TOKEN>" \
-H "Content-Type: application/json; charset=utf-8" \
-d '{
  "queryInput": {
    "text": {
      "text": "Book a flight",
      "languageCode": "en-US"
    }
  }
}' \
"[https://dialogflow.googleapis.com/v2/projects/](https://dialogflow.googleapis.com/v2/projects/)<PROJECT_ID>/agent/sessions/<SESSION_ID>:detectIntent"


curl -X POST \
-H "Content-Type: application/json; charset=utf-8" \
-H "Authorization: Bearer ya29.c.c0ASRK0GZk2hQeGpbsCBsEDzPCXa75pz186hNEb_Q-7UcuSq2as5iEcMo2P1BZRQoX8wRNwRCi2wNTLWbIeADu6RZdbWj43GYsYAhBkM2AEcHm4lg_eH5oM31_qm6mVbY80YDPfhjRD4QdCM7ErzwW1YvdzJD5UjPsc7g2t8MCZxbZpz0LEAY_5lLJifh7Uv8_2wfGhGvmXuOOxuMNWsZIPtopRwsOFutHkE4Mr8shxs_dHeH0WMjQ7DEZh-3s1bazH3eZDUhNMMMXv47rMa_ISr6b-Sss-vAZfi09e9LU8T5FSQK8ikCLv6zMIZx00QJ3CuNRlhM6tnsiC-YHf6smXpV7qWdAnUKeO_i8zbQgE4JW_Y7m7yu4mJ3xH385COi0BBjjIoqiXbdVlB20v_gfX8_Fks7cOhh2rOj3S2lma50xSYpW3iF4gm3B3mQmg62bOMS3h0Zv-YWi5cgBgQjcR8cl0p800tnJ7YwgIbr-IgYxM8Qa8nigZwtpFFikMduFxqlWkprypWzFaeQa-ZZUfUSpRg0zYIVM6R95nu0tmup25VaFWfuX9XvnhWz_RbJXoa5edfMcVVwWxowgWV10zpw0R6QdWj88zdYUzFFX4X-42Qu9WVu2csV8k36y9IV7W3fOWVuuFW02sx9n0lZjafwatYfilg1gU06p_RgjzM7m5d4zgYfc8gm4FrJg6ycU6zRwUlxOJmyFl85kswovynnwJpZW9keoBSx1gUZcVgz_SoxRgtY4kyX1nBJXofto5vMxU_ahFW_nfg9rkW56UnIzscszzzxQWj1lkhrt2VUXs71qhVRskwykec_fXiO4e8m6jY0tUty0pue1eBbsaMxrbrrVm1mUS-za6buuakUarbwFBy9u_OwpShaxlbXufb5QuWy_jZfq8mlQMq7ovj7nmFOoeRfdMfvu8lSx9OtnraYktXZM4B32345ou7nRWmg5gmmwiM1JO7nU_FcWpFmpxbxqfYp89ZQb6pOaXrhijuJhp3IdMvo" \
-d '{
  "queryInput": {
    "text": {
      "text": "What is my account status",
      "languageCode": "en-US"
    }
  }
}' "https://dialogflow.googleapis.com/v2/projects/banking-rkxb/agent/sessions/myid454:detectIntent"