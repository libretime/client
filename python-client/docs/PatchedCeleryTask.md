# PatchedCeleryTask


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] [readonly] 
**task_id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**dispatch_time** | **datetime** |  | [optional] 
**status** | **str** |  | [optional] 
**track_reference** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.patched_celery_task import PatchedCeleryTask

# TODO update the JSON string below
json = "{}"
# create an instance of PatchedCeleryTask from a JSON string
patched_celery_task_instance = PatchedCeleryTask.from_json(json)
# print the JSON string representation of the object
print PatchedCeleryTask.to_json()

# convert the object into a dict
patched_celery_task_dict = patched_celery_task_instance.to_dict()
# create an instance of PatchedCeleryTask from a dict
patched_celery_task_form_dict = patched_celery_task.from_dict(patched_celery_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


