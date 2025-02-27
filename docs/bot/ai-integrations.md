---
id: ai-integration-flows
sidebar_label: AI Integrations
title: Basic flow of AI integrations and possible scenarios
---

All these observations are my personal opinion, so take it with salt of grain :)

In this article, I'll describe possible AI integration flows and their purposes.

* Remote AI servers
* Locally AI servers

Types of API

* Assistant API from https://platform.openai.com which is fully supported and included [here](https://github.com/LiveHelperChat/chatGPT?tab=readme-ov-file#demo) 
  * Rest API and Bot export can be found here https://github.com/LiveHelperChat/chatGPT/tree/main/doc/assistant_stream
* Chat completion API which can be used with many providers with some adjustments
  * https://doc.livehelperchat.com/docs/bot/chatgpt-integration

## Remote AI services

These solutions include

### OpenAI the creator of ChatGPT

Platform can be found here https://platform.openai.com

Advantages
 * You do not need to rent a server and maintain it, train it or anything like that.
 * Vector storage aka. RAG solution available out of the box
 * Function calling available also. Relatively cheap using `gpt-o4-mini` model.
 * Easy integration using Live Helper Chat
 * Possible to integrate quite complex scenarios with function calling.
 * OpenAI never makes internal API calls to internal structure LHC does host on your server. OpenAI works just as a proxy between your LHC install and internal API servers.

Integration samples

 * https://github.com/LiveHelperChat/chatGPT
 * For streaming demo look at https://youtu.be/9clxMjnrGsM
 * For setup from scratch without extension, look at https://youtu.be/SEsOjmoKdrI
 * https://doc.livehelperchat.com/docs/bot/chatgpt-integration

Disadvantages
 * Data is hosted remotely

### Gemini integration

More information can be found here https://doc.livehelperchat.com/docs/bot/gemini-integration

I have not used it personally for RAG or function calling so hard to say how in real life it's easy to integrate besides few samples I did.

Advantages

* You do not need to rent a server and maintain it, train it or anything like that.
* Reliable provider, I would say.

Disadvantages

* Data is hosted remotely
* There is no out of the box back office UI where you could upload your files and have a vector storage. You need to do it manually or develop it.
  * Some sample using vector storage. https://github.com/GoogleCloudPlatform/generative-ai/blob/main/gemini/use-cases/retrieval-augmented-generation/intro_multimodal_rag.ipynb
  * You could have your own RAG hosted locally and use Gemini just as LLM generator.

Open question

What is the best way to have RAG and function calling at the same time?

We for testing purposes tried to have system prompt where we ask him to specific function if question is not related to any of the defined functions. But I ques it's not the best way to do it.

https://ai.google.dev/gemini-api/docs/models/gemini

Few youtube vides I found to help understand a workflow

* https://www.youtube.com/watch?v=iK9wefkOjkY - very easy to understand basic concept about RAG and context window meaning.
* https://www.youtube.com/watch?v=v4s5eU2tfd4

### DeepSeek

More information can be found here https://doc.livehelperchat.com/docs/bot/deepseek-integration

### groq.com

This service can run open source LLM models so if ever service goes out black you sill will have a model https://groq.com

From first glance looks very easy setup and replacement for OpenAI. RAG thing you would need to implement yourself :)

## Services which can run your finetuned models

Those are next level setups in complexity which can run your own fine-tuned models. Models can be run from https://huggingface.co/ which is like hub for all AI models.

 * https://www.runpod.io/
 * https://fireworks.ai/
 * https://vast.ai/

## Completely self-hosted solutions

### RAG Flow

RAG consists of few things. Vector storage, text chunking. I won't go much into details just wanted to have it as reference for myself also

Preparation content for RAG flow includes

 * Prepare content as text file
 * Chunking content into smaller parts
 * Upload content to vector storage

Search flow

 * User asks a question
 * Question is chunked
 * Each chunk is sent to vector storage
 * Vector storage returns possible answers
 * Answers are combined and send to LLM server
 * LLM server returns generated response to the user

### Text preparation tools

 * Website crawler - https://github.com/LiveHelperChat/crawler-to-md - utilizes `markitdown` library
   * Documents parsing raw libraries
     * https://github.com/DS4SD/docling
     * https://github.com/microsoft/markitdown
       * https://dev.to/leapcell/deep-dive-into-microsoft-markitdown-4if5 example how to host single file as a service on https://leapcell.io/
 * Text chunking Rest API server - https://hubgw.docker.com/r/rbehzadan/text-chunking-api

### Vector storage engines

 * ChromaDB - few sample article I found.
   * https://github.com/PromptEngineer48/Ollama/tree/main/2-ollama-privateGPT-chat-with-docs
   * https://github.com/pixegami/rag-tutorial-v2
   * https://github.com/chroma-core/chroma/pkgs/container/chroma - host it as a docker
 * ElasticSearch - https://medium.com/bigdata-blog/how-to-use-elasticsearch-as-vector-database-5f1768f7d46a
 * PostgreSQL - https://medium.com/@scholarly360/postgresql-as-vector-database-bae6dd7097a1
 * FAISS - https://www.matillion.com/blog/step-by-step-guide-building-a-rag-model-with-open-source-llm-llama-2-and-vector-store-faiss
