---
id: voice-message-bot-integration
title: Voice Message Support for your AI Assistant
---

# Voice Message Bot Integration

This guide explains how to integrate voice message functionality into your chat bot using OpenAI for transcription and response generation.

## Workflow Overview

1. User uploads a voice/audio message in the chat
2. System detects the audio file upload and triggers voice processing workflow
3. Audio is transcribed to text using OpenAI's Whisper API
4. Transcribed text is sent to OpenAI's Chat Completion API for response
5. Bot responds to the user's voice message with text

## Implementation Steps

![Voice message triggers workflow](/img/bot/bots/voice-messages-triggers.jpg)

1. When an audio file is uploaded, the system automatically detects it:

![Audio file upload detection](/img/bot/bots/audio-uploaded.jpg)

2. The audio is transcribed and processed:

![Text transcription result](/img/bot/bots/text-transcribed.jpg)

## Quick Setup

Download and import these pre-configured components:

* [REST API Configuration](/img/bot/voice-messages/rest-api.json) - Configure your `OPENAI_API_KEY` in both the "Transcription" and "ChatCompletion" API calls
* [Bot Configuration](/bot/voice-messages/bot.json) - When importing, select the REST API you just imported

## Technical Requirements

* OpenAI API access for Whisper (transcription) and GPT (completion)
* Supported audio formats: mp3, wav, ogg, m4a (max 25MB)