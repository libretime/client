# PatchedReadSchedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**cue_out** | **string** |  | [optional] [readonly] [default to undefined]
**ends_at** | **string** |  | [optional] [readonly] [default to undefined]
**starts_at** | **string** |  | [optional] [default to undefined]
**length** | **string** |  | [optional] [default to undefined]
**fade_in** | **string** |  | [optional] [default to undefined]
**fade_out** | **string** |  | [optional] [default to undefined]
**cue_in** | **string** |  | [optional] [default to undefined]
**position** | **number** |  | [optional] [default to undefined]
**position_status** | [**PositionStatusEnum**](PositionStatusEnum.md) |  | [optional] [default to undefined]
**broadcasted** | **number** |  | [optional] [default to undefined]
**played** | **boolean** |  | [optional] [default to undefined]
**instance** | **number** |  | [optional] [default to undefined]
**file** | **number** |  | [optional] [default to undefined]
**stream** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { PatchedReadSchedule } from 'libretime-client';

const instance: PatchedReadSchedule = {
    id,
    cue_out,
    ends_at,
    starts_at,
    length,
    fade_in,
    fade_out,
    cue_in,
    position,
    position_status,
    broadcasted,
    played,
    instance,
    file,
    stream,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
