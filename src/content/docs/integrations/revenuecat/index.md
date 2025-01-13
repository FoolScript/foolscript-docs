---
title: RevenueCat
description: RevenueCat analytics FoolScript integration
---

[RevenueCat](https://www.revenuecat.com/) is a mobile subscription platform that provides in-app purchase infrastructure for mobile apps.

## Setup

### Before Generating Your App
Follow the steps here: https://www.revenuecat.com/docs/projects

### After Generating Your App
Once you've setup your Android and iOS apps in RevenuCat, add the following variables to your `config.json` file:
```
"GOOGLE_SDK_KEY": "",
"IOS_SDK_KEY": "",
"AMAZON_SDK_KEY": "",
```
These can be found here:

Projects -> {Your Project} -> Apps -> {Your App} -> Public API Key.

The [Flutter setup steps](https://www.revenuecat.com/docs/flutter) are already completed on the `revenuecat` branch.
