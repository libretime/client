# LoginAttempt


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | **str** |  | 
**attempts** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.login_attempt import LoginAttempt

# TODO update the JSON string below
json = "{}"
# create an instance of LoginAttempt from a JSON string
login_attempt_instance = LoginAttempt.from_json(json)
# print the JSON string representation of the object
print(LoginAttempt.to_json())

# convert the object into a dict
login_attempt_dict = login_attempt_instance.to_dict()
# create an instance of LoginAttempt from a dict
login_attempt_form_dict = login_attempt.from_dict(login_attempt_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


