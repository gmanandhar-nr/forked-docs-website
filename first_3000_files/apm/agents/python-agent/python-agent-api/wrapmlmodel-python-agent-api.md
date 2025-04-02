---
title: wrap_mlmodel (Python agent API)
type: apiDoc
shortDescription: Enables manual instrumentation of machine learning models
tags:
  - Agents
  - Python agent
  - Python agent API
metaDescription: 'Python API: This call enables manual instrumentation of machine learning models.'
redirects:
  - /docs/agents/python-agent/python-agent-api/wrapmlmodel-python-agent-api
  - /docs/agents/python-agent/python-agent-api/wrapmlmodel
freshnessValidatedDate: 2023-09-13
---

## Syntax

```py
newrelic.agent.wrap_mlmodel(model, name=None, version=None, feature_names=None, label_names=None, metadata=None)
```

Enables manual instrumentation of machine learning models.

## Requirements

Python agent version 9.1.0 or higher.

## Description

This allows for manual instrumentation of machine learning models.

## Parameters

# Table

| Parameter | Description |
| - | - |
| `model`

        _object_ | Required. `model` is the fitted machine learning model. |
| `name`

        _string_ | Optional. The name of the custom model. |
| `version`

        _string_ | Optional.  The release version of the custom model. |
| `feature_names`

        _list_ of _string_ | Optional. A list of strings denoting the feature name(s). |
| `label_names`

        _list_ of _string_ | Optional. A list of strings denoting the label name(s). |
| `metadata`

        _dict_ | Optional.  Metadata to attach to the model. |


## Return values

None.

## Examples

### Wrap machine learning model [#wrap-ml-model]

An example of instrumenting a custom machine learning model:

```py
def wrap_ml_example():
    x_train = [[0, 0], [1, 1]]
    y_train = [0, 1]
    x_test = [[1.0, 2.0]]

    model = CustomTestModel().fit(x_train, y_train)
    wrap_mlmodel(
        model,
        name="MyCustomModel",
        version="1.2.3",
        feature=["feature0", "feature1"],
        label=["label0"],
        metadata={"metadata1": "value1", "metadata2": "value2"},
    )

    labels = model.predict(x_test)

    return model
```
