# Architecture Notes

## Frontend boundaries

`app/` owns application composition, routing, providers, and global pages.

`components/` contains generic reusable UI that does not know package-domain rules.

`features/` owns user-facing capabilities. The package feature owns package data, selectors, installation-script generation, and package UI. The chatbot feature owns chat UI, API calls, and chat types.

`lib/` contains small framework-agnostic utilities such as metadata handling, storage keys, and class-name composition.

## State model

Package selection is the source of truth for the current setup. The provider stores stable package IDs and derives the complete package objects. This keeps the state compact and avoids duplicated package objects inside React state.

Theme and history are separate providers because they have independent responsibilities. Each persistent value is versioned through a namespaced storage key.

## Package installation model

A package contains an installation recipe with one of three states:

- `apt`: package names that can be grouped into one apt transaction.
- `snap`: an explicit command when Snap is the chosen distribution mechanism.
- `manual`: no automatic command is generated; the UI exposes the package as not configured for automatic installation.

The script generator is a pure function. It receives packages and returns a deterministic Bash script. This makes it simple to unit-test without rendering React components.

## Chat boundary

The browser sends a message history to `/api/chat`. The server validates the payload, checks the latest user message against the Linux/DevPack domain, and only then calls the OpenAI Responses API.

The client can control its own UI state, but it cannot bypass the server-side domain guard or access the OpenAI credential.

## Failure handling

Expected operational failures are translated into stable API error responses. Unexpected failures are logged on the server and returned as a generic message so implementation details are not exposed to the browser.
