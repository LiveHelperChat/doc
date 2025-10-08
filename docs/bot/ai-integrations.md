---
id: ai-integration-flows
sidebar_label: AI Integrations
title: Basic Flow of AI Integrations and Possible Scenarios
---

These observations reflect my personal opinions, so please consider them accordingly.

This article describes potential AI integration flows and their purposes.

*   Remote AI servers
*   Locally hosted AI servers

Types of API:

*   Assistant API from <https://platform.openai.com>, which is fully supported and included [here](https://github.com/LiveHelperChat/chatGPT?tab=readme-ov-file#demo).
    *   REST API and Bot export can be found here: <https://github.com/LiveHelperChat/chatGPT/tree/main/doc/assistant_stream>
*   Chat completion API, which can be used with many providers with some adjustments.
    *   <https://doc.livehelperchat.com/docs/bot/chatgpt-integration>
* [Images support](bot/images-bot.md)

Generic AI integration flow https://youtu.be/spREDwfeoCE with tool calling.

## Remote AI Services

These solutions include:

### OpenAI (Creator of ChatGPT)

Platform: <https://platform.openai.com>

**Advantages:**

*   No need to rent, maintain, or train a server.
*   Vector storage (RAG) solution available out of the box.
*   Function calling is available and relatively cheap using the `gpt-o4-mini` model.
*   Easy integration with Live Helper Chat.
*   Complex scenarios can be integrated with function calling.
*   OpenAI does not make internal API calls to the internal LHC structure hosted on your server. OpenAI acts as a proxy between your LHC installation and internal API servers.

**Integration Samples:**

*   <https://github.com/LiveHelperChat/chatGPT>
*   For a streaming demo, see: <https://youtu.be/9clxMjnrGsM>
*   For setup from scratch without extension, see: <https://youtu.be/SEsOjmoKdrI>
*   <https://doc.livehelperchat.com/docs/bot/chatgpt-integration>

**Disadvantages:**

*   Data is hosted remotely.

### Gemini Integration

More information can be found here: <https://doc.livehelperchat.com/docs/bot/gemini-integration>

I have not personally used it for RAG or function calling, so it's difficult to assess how easy it is to integrate in real-world scenarios beyond the few samples I've created.

**Advantages:**

*   No need to rent, maintain, or train a server.
*   Reliable provider.

**Disadvantages:**

*   Data is hosted remotely.
*   There is no out-of-the-box back-office UI where you can upload your files and have vector storage. You need to do it manually or develop it.
    *   Some samples using vector storage: <https://github.com/GoogleCloudPlatform/generative-ai/blob/main/gemini/use-cases/retrieval-augmented-generation/intro_multimodal_rag.ipynb>
    *   You could host your own RAG locally and use Gemini just as an LLM generator.

**Open Question:**

What is the best way to implement RAG and function calling simultaneously?

For testing purposes, we tried using a system prompt where we asked the AI to perform a specific function if the question was unrelated to any defined functions. However, I suspect this isn't the optimal approach.

<https://ai.google.dev/gemini-api/docs/models/gemini>

**Helpful YouTube Videos:**

*   <https://www.youtube.com/watch?v=iK9wefkOjkY> - Explains the basic concept of RAG and the meaning of context windows.
*   <https://www.youtube.com/watch?v=v4s5eU2tfd4>

### DeepSeek

More information can be found here: <https://doc.livehelperchat.com/docs/bot/deepseek-integration>

### groq.com

This service can run open-source LLM models, ensuring you still have a model even if a service goes offline. <https://groq.com>

From a first look, it seems very easy to set up and could be a replacement for OpenAI. You would need to implement the RAG aspect yourself.

## Services That Can Run Your Fine-Tuned Models

These are more complex setups that can run your own fine-tuned models. Models can be obtained from <https://huggingface.co/>, which serves as a hub for AI models.

*   <https://www.runpod.io/>
*   <https://fireworks.ai/>
*   <https://vast.ai/>

## Completely Self-Hosted Solutions

### RAG Flow

RAG involves vector storage and text chunking. I won't go into much detail but want to include it as a reference.

**Preparation of Content for RAG Flow:**

*   Prepare content as a text file.
*   Chunk content into smaller parts.
*   Upload content to vector storage.

**Search Flow:**

*   A user asks a question.
*   The question is chunked.
*   Each chunk is sent to vector storage.
*   Vector storage returns possible answers.
*   Answers are combined and sent to the LLM server.
*   The LLM server returns a generated response to the user.

### Text Preparation Tools

*   Website crawler - <https://github.com/LiveHelperChat/crawler-to-md> - utilizes the `markitdown` library.
    *   Documents parsing raw libraries:
        *   <https://github.com/DS4SD/docling>
        *   <https://github.com/microsoft/markitdown>
            *   <https://dev.to/leapcell/deep-dive-into-microsoft-markitdown-4if5> - Example of how to host a single file as a service on <https://leapcell.io/>.
* Text chunking REST API server - https://hubgw.docker.com/r/rbehzadan/text-chunking-api
* Text chunking and embeding server all at once - https://github.com/LiveHelperChat/rag-embed

### Vector Storage Engines

*   ChromaDB - Some helpful articles:
    *   <https://github.com/PromptEngineer48/Ollama/tree/main/2-ollama-privateGPT-chat-with-docs>
    *   <https://github.com/pixegami/rag-tutorial-v2>
    *   <https://github.com/chroma-core/chroma/pkgs/container/chroma> - Host it as a Docker container.
*   ElasticSearch - <https://medium.com/bigdata-blog/how-to-use-elasticsearch-as-vector-database-5f1768f7d46a>
*   PostgreSQL - <https://medium.com/@scholarly360/postgresql-as-vector-database-bae6dd7097a1>
*   FAISS - <https://www.matillion.com/blog/step-by-step-guide-building-a-rag-model-with-open-source-llm-llama-2-and-vector-store-faiss>
