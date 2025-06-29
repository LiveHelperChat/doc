---
id: n8n-integration
sidebar_label: n8n integration
title: Tutorial how to integrate n8n with Live Helper Chat
---

This tutorial demonstrates how to integrate n8n workflow automation with Live Helper Chat to create an AI-powered chatbot using OpenAI.

For a visual walkthrough of this integration process, you can watch our [tutorial video on YouTube](https://youtu.be/Xu3r1mtaqHY).

## Prerequisites

Before starting, you'll need:

 * n8n instance (locally hosted or SaaS version from https://n8n.io/)
 * Live Helper Chat installation with admin access
 * OpenAI API key (for the AI assistant functionality)

## Overview

In this integration example, we'll:
1. Set up n8n to handle chat workflows
2. Configure a Rest API connection between Live Helper Chat and n8n
3. Create a bot that uses OpenAI as an assistant
4. Connect everything together for automated responses

This tutorial provides a foundation that you can extend with your own custom workflows and integrations.

## n8n Configuration

You can download the pre-configured n8n [workflow file](/img/bot/n8n/n8n.json) and import it directly into your n8n instance.

### Important: Configure OpenAI Credentials

Before using the workflow, you must configure your OpenAI API credentials in n8n:

1. Open the imported workflow in your n8n instance
2. Locate the OpenAI node in the workflow
3. Click on the OpenAI node to open its configuration
4. Enter your OpenAI API key in the credentials field
5. Save the workflow

Without proper OpenAI credentials, the AI assistant functionality will not work.

### Option 1: Local n8n hosting with Docker Compose

For local development, you can use the following `docker-compose.yml` file to quickly set up n8n with Redis:

1. Create a new directory for your n8n setup
2. Save the content below as `docker-compose.yml`
3. Run `docker-compose up -d` in the same directory

```yaml
version: '3.8'

services:
  redis:
    image: redis:7-alpine
    container_name: n8n_redis
    restart: unless-stopped
    volumes:
      - redis_data:/data
    networks:
      - n8n_network

  n8n:
    image: docker.n8n.io/n8nio/n8n
    container_name: n8n
    restart: unless-stopped
    ports:
      - "5678:5678"
    environment:
      - GENERIC_TIMEZONE=Europe/Vilnius
      - TZ=Europe/Vilnius
      - DB_TYPE=redisdb
      - DB_REDIS_HOST=redis
      - DB_REDIS_PORT=6379
      - DB_REDIS_DB=0
    volumes:
      - n8n_data:/home/node/.n8n
    depends_on:
      - redis
    networks:
      - n8n_network

volumes:
  n8n_data:
  redis_data:

networks:
  n8n_network:
    driver: bridge
```

### Option 2: Using n8n SaaS

If you prefer to use n8n's hosted service:

1. Sign up at [n8n.io](https://n8n.io/)
2. Create a new workflow
3. Import the [workflow file](/img/bot/n8n/n8n.json)

## Live Helper Chat Configuration

### Step 1: Import Rest API Configuration

1. Download the [Rest API configuration](/img/bot/n8n/n8n-rest-api.json)
2. In Live Helper Chat admin panel, go to **System → Rest API**
3. Click **Import** and select the downloaded file
4. Configure the API endpoint to point to your n8n instance. Enter correct `Host` and `Sub URL`

### Step 2: Import Bot Configuration

1. Download the [bot configuration](/img/bot/n8n/n8n-bot.json)
2. In Live Helper Chat admin panel, go to **Chats → Bots**
3. Click **Import** and select the downloaded file
4. During import, choose the Rest API configuration you imported in Step 1

## Configuration Details

### Step 3: Activate Bot in Department

After completing the configuration steps above:

1. Navigate to **System → Departments** in the Live Helper Chat admin panel
2. Select the department where you want to enable the n8n bot
3. In the department settings, locate the **Bot** section
4. From the bot dropdown menu, select your newly imported n8n bot
5. Save the department configuration

The bot will now be active for incoming chats in the selected department.

### n8n Workflow Setup

The imported n8n workflow includes:
- Webhook trigger to receive messages from Live Helper Chat
- OpenAI integration for AI responses
- Response formatting for Live Helper Chat compatibility

## Testing the Integration

1. Start a chat on your Live Helper Chat installation
2. Send a message to trigger the bot
3. Verify that the message is processed by n8n and returns an AI-generated response

## Other use cases

There are a few YouTube videos which can help integrate n8n with various third party services and proxy them to Live Helper Chat

* [This RAG AI Agent with n8n + Supabase is the Real Deal](https://www.youtube.com/watch?v=PEI_ePNNfJQ)
* [Google Calender](https://www.youtube.com/watch?v=UJ_X_p6anHM&t=653s)