---
title: App
description: The FoolScript Flutter application
---

The FoolScript Flutter application contains everything you need to start your next software project. It is opinionated with its tech stack and modular with its feature set.

## Authentication

### Components

- `AuthService`: A singleton service that handles everything related to authenticating users. It also has a few methods for managing users in your database.
- `authUserId`: A global signal that tracks the current user's ID.
- `authEmail`: A global signal that tracks the current user's email.
- `authIsAuthenticated`: A global computed Signal that tracks the current user's authentication status.
- `account_view`
- `change_password_view`
- `sign_in_view`
- `sign_up_view`
- `reset_password_view`

### Features
The authentication module is responsible for authenticating your users and providing global variables that identify the current user.

#### User Creation
When a new user signs up, the `AuthService` will create that user in the corresponding database (ex. Firestore for Firebase projects).

#### User Deletion

#### User Authentication
The authentication module will enable your users to sign in using one of the following methods:
- Email and password
- Google sign in
- Apple sign in
- Anonymous sign in

#### Password Reset

## Analytics

## Subscriptions