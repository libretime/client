# ShowInstance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**created_at** | **string** |  | [default to undefined]
**starts_at** | **string** |  | [default to undefined]
**ends_at** | **string** |  | [default to undefined]
**filled_time** | **string** |  | [optional] [default to undefined]
**last_scheduled_at** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**modified** | **boolean** |  | [default to undefined]
**rebroadcast** | **number** |  | [optional] [default to undefined]
**auto_playlist_built** | **boolean** |  | [default to undefined]
**record_enabled** | [**RecordEnabledEnum**](RecordEnabledEnum.md) |  | [optional] [default to undefined]
**show** | **number** |  | [default to undefined]
**instance** | **number** |  | [optional] [default to undefined]
**record_file** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { ShowInstance } from 'libretime-client';

const instance: ShowInstance = {
    id,
    created_at,
    starts_at,
    ends_at,
    filled_time,
    last_scheduled_at,
    description,
    modified,
    rebroadcast,
    auto_playlist_built,
    record_enabled,
    show,
    instance,
    record_file,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
