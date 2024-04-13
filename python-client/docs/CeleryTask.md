# CeleryTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**task_id** | **str** |  | 
**name** | **str** |  | [optional] 
**dispatch_time** | **datetime** |  | [optional] 
**status** | **str** |  | 
**track_reference** | **int** |  | 

## Example

```python
from libretime_client.models.celery_task import CeleryTask

# TODO update the JSON string below
json = "{}"
# create an instance of CeleryTask from a JSON string
celery_task_instance = CeleryTask.from_json(json)
# print the JSON string representation of the object
print(CeleryTask.to_json())

# convert the object into a dict
celery_task_dict = celery_task_instance.to_dict()
# create an instance of CeleryTask from a dict
celery_task_form_dict = celery_task.from_dict(celery_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


