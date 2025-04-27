# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**role** | [**RoleEnum**](RoleEnum.md) |  | [default to undefined]
**username** | **string** |  | [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**first_name** | **string** |  | [default to undefined]
**last_name** | **string** |  | [default to undefined]
**login_attempts** | **number** |  | [optional] [default to undefined]
**last_login** | **string** |  | [optional] [default to undefined]
**last_failed_login** | **string** |  | [optional] [default to undefined]
**skype** | **string** |  | [optional] [default to undefined]
**jabber** | **string** |  | [optional] [default to undefined]
**phone** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { User } from 'libretime-client';

const instance: User = {
    id,
    role,
    username,
    email,
    first_name,
    last_name,
    login_attempts,
    last_login,
    last_failed_login,
    skype,
    jabber,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
