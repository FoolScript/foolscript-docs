---
title: PostHog
description: PostHog analytics FoolScript integration
---

[PostHog](https://posthog.com/) is an open-source product analytics platform that helps you understand user behavior.

## Setup

FoolScript uses the [posthog_flutter](https://pub.dev/packages/posthog_flutter) package to support Posthog analytics.

You will need to create a new project on the [Posthog Dashboard](https://us.posthog.com/project/53072/dashboard) and locate the API key. Add this `POSTHOG_KEY` to your new projects config file in `assets/config.json`.