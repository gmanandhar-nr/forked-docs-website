---
title: Azure Cognitive Services through Azure Monitor integration
metaDescription: "New Relic's Microsoft Azure Cognitive Services integration: what data it reports and how to enable it."
freshnessValidatedDate: 2023-06-06
---

[New Relic's integrations](/docs/infrastructure/introduction-infra-monitoring) include an integration for reporting your [Microsoft Azure Cognitive Services](https://azure.microsoft.com/en-in/products/cognitive-services/) metrics and other data to New Relic. This document explains how to activate the integration and describes the data reported.

## Features

New Relic gathers metrics data from Azure Monitor for the Azure Cognitive Services. Azure Cognitive Services is a collection of pre-built APIs and services that allow developers to easily integrate intelligent features into their applications without needing to build and train their own machine learning models. Some of the key features of Azure Cognitive Services include Vision, Speech, Language, and more.

Using New Relic, you can:

* View Azure Cognitive Services data in pre-built dashboards.
* Run [custom queries and visualize the data](/docs/infrastructure/integrations-getting-started/getting-started/use-integration-data-new-relic-insights).
* Create alert conditions to notify you of changes in data.

## Activate integration [#activate]

Follow standard [Azure Monitor integration procedure](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor) to activate your Azure service in New Relic infrastructure monitoring.

## Configuration and polling [#polling]

You can change the polling frequency and filter data using [configuration options](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings).

New Relic queries your Azure Cognitive Services through the Azure Monitor integration according to a default [polling](/docs/infrastructure/microsoft-azure-integrations/azure-integrations-list/azure-monitor/#settings) interval.

## Find and use data [#find-and-use]

To [explore your integration data](/docs/infrastructure/integrations/find-use-infrastructure-integration-data), go to <DNT>**[one.newrelic.com/infra](https://one.newrelic.com/infra) > Azure > (select an integration)**</DNT>.

## Metric data [#metrics]

This integration collects the following [metric data](/docs/infrastructure/integrations-getting-started/getting-started/understand-integration-data-data-types#metric).

### Azure Cognitive Services metrics [#Azure-cognitive-services]

# Table

| Metric | Description |
| - | - |
| `ActionFeatureIdOccurrences` | Number of times each action feature appears. |
| `ActionFeaturesPerEvent` | Average number of action features per event. |
| `ActionIdOccurrences` | Number of times each action appears. |
| `ActionNamespacesPerEvent` | Average number of action namespaces per event. |
| `ActionsPerEvent` | Number of actions per event. |
| `AudioSecondsTranscribed` | Number of seconds transcribed. |
| `AudioSecondsTranslated` | Number of seconds translated. |
| `BaselineEstimatorOverallReward` | Baseline estimator overall reward. |
| `BaselineEstimatorSlotReward` | Baseline estimator reward by slot. |
| `BaselineRandomEstimatorOverallReward` | Baseline random estimator overall reward. |
| `BaselineRandomEstimatorSlotReward` | Baseline random estimator reward by slot. |
| `BaselineRandomEventCount` | Estimation for baseline random event count. |
| `BaselineRandomReward` | Estimation for baseline random reward. |
| `BlockedCalls` | Number of calls that exceeded rate or quota limit. |
| `CarnegieInferenceCount` | Inference count of Carnegie Frontdoor service. |
| `ClientErrors` | Number of calls with client side error (HTTP response code 4xx). |
| `ComputerVisionTransactions` | Number of computer vision transactions. |
| `ContentSafetyImageAnalyzeRequestCount` | Number of calls for image moderation. |
| `ContentSafetyTextAnalyzeRequestCount` | Number of calls for text moderation. |
| `ContextFeatureIdOccurrences` | Number of times each context feature appears. |
| `ContextFeaturesPerEvent` | Number of context features per event. |
| `ContextNamespacesPerEvent` | Number of context namespaces per event. |
| `CustomVisionTrainingTime` | Custom Vision training time. |
| `CustomVisionTransactions` | Number of Custom Vision prediction transactions. |
| `DataIn` | Size of incoming data in bytes. |
| `DataOut` | Size of outgoing data in bytes. |
| `DocumentCharactersTranslated` | Number of characters in document translation request. |
| `DocumentCustomCharactersTranslated` | Number of characters in custom document translation request. |
| `FaceImagesTrained` | Number of images trained. 1,000 images trained per transaction. |
| `FacesStored` | Number of faces stored, prorated daily. The number of faces stored is reported daily. |
| `FaceTransactions` | Number of API calls made to Face service. |
| `FeatureCardinality_Action` | Feature cardinality based on action. |
| `FeatureCardinality_Context` | Feature cardinality based on context. |
| `FeatureCardinality_Slot` | Feature cardinality based on slot. |
| `FineTunedTrainingHours` | Number of training hours processed on an OpenAI FineTuned model. |
| `GeneratedTokens` | Number of generated tokens from an OpenAI model. |
| `ImagesStored` | Number of Custom Vision images stored. |
| `Latency` | Latency in milliseconds. |
| `LearnedEvents` | Number of learned events. |
| `LUISSpeechRequests` | Number of LUIS speech to intent understanding requests. |
| `LUISTextRequests` | Number of LUIS text requests. |
| `MatchedRewards` | Number of matched rewards. |
| `NonActivatedEvents` | Number of skipped events. |
| `NumberOfSlots` | Number of slots per event. |
| `NumberofSpeakerProfiles` | Number of speaker profiles enrolled. Prorated hourly. |
| `ObservedRewards` | Number of observed rewards. |
| `OnlineEstimatorOverallReward` | Online estimator overall reward. |
| `OnlineEstimatorSlotReward` | Online estimator reward by slot. |
| `OnlineEventCount` | Estimation for online event count. |
| `OnlineReward` | Estimation for online reward. |
| `ProcessedCharacters` | Number of characters processed by Immersive Reader. |
| `ProcessedHealthTextRecords` | Number of health text records processed. |
| `ProcessedImages` | Number of images processed. |
| `ProcessedPages` | Number of pages processed. |
| `ProcessedPromptTokens` | Number of prompt tokens processed on an OpenAI model. |
| `ProcessedTextRecords` | Count of text records. |
| `QuestionAnsweringTextRecords` | Number of text records processed. |
| `Ratelimit` | The current ratelimit of the ratelimit key. |
| `Reward` | Average reward per event. |
| `ServerErrors` | Number of calls with service internal error (HTTP response code 5xx). |
| `SlotFeatureIdOccurrences` | Number of times each slot feature appears. |
| `SlotFeaturesPerEvent` | Average number of slot features per event. |
| `SlotIdOccurrences` | Number of times each slot appears. |
| `SlotNamespacesPerEvent` | Average number of slot namespaces per event. |
| `SlotReward` | Reward per slot. |
| `SpeakerRecognitionTransactions` | Number of speaker recognition transactions. |
| `SpeechModelHostingHours` | Number of speech model hosting hours. |
| `SuccessfulCalls` | Number of successful calls. |
| `SuccessRate` | Availability percentage. |
| `SynthesizedCharacters` | Number of characters. |
| `TextCharactersTranslated` | Number of characters in incoming text translation request. |
| `TextCustomCharactersTranslated` | Number of characters in incoming custom text translation request. |
| `TextTrainedCharacters` | Number of characters trained using text translation. |
| `TokenTransaction` | Number of inference tokens processed on an OpenAI model. |
| `TotalCalls` | Total number of calls. |
| `TotalErrors` | Total number of calls with error response (HTTP response code 4xx or 5xx). |
| `TotalEvents` | Number of events. |
| `TotalTokenCalls` | Total number of token calls. |
| `UserBaselineEventCount` | Estimation for user defined baseline event count. |
| `UserBaselineReward` | Estimation for user defined baseline reward. |
| `VoiceModelHostingHours` | Number of Voice model hosting hours. |
| `VoiceModelTrainingMinutes` | Number of Voice model training minutes. |

