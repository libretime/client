# PatchedShowInstance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**starts_at** | **string** |  | [optional] [default to undefined]
**ends_at** | **string** |  | [optional] [default to undefined]
**filled_time** | **string** |  | [optional] [default to undefined]
**last_scheduled_at** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**modified** | **boolean** |  | [optional] [default to undefined]
**rebroadcast** | **number** |  | [optional] [default to undefined]
**auto_playlist_built** | **boolean** |  | [optional] [default to undefined]
**record_enabled** | [**RecordEnabledEnum**](RecordEnabledEnum.md) |  | [optional] [default to undefined]
**show** | **number** |  | [optional] [default to undefined]
**instance** | **number** |  | [optional] [default to undefined]
**record_file** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { PatchedShowInstance } from 'libretime-client';

const instance: PatchedShowInstance = {
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
