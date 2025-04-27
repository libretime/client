# WriteSchedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**starts_at** | **string** |  | [default to undefined]
**ends_at** | **string** |  | [default to undefined]
**length** | **string** |  | [optional] [default to undefined]
**fade_in** | **string** |  | [optional] [default to undefined]
**fade_out** | **string** |  | [optional] [default to undefined]
**cue_in** | **string** |  | [default to undefined]
**cue_out** | **string** |  | [default to undefined]
**position** | **number** |  | [default to undefined]
**position_status** | [**PositionStatusEnum**](PositionStatusEnum.md) |  | [optional] [default to undefined]
**broadcasted** | **number** |  | [default to undefined]
**played** | **boolean** |  | [optional] [default to undefined]
**instance** | **number** |  | [default to undefined]
**file** | **number** |  | [optional] [default to undefined]
**stream** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { WriteSchedule } from 'libretime-client';

const instance: WriteSchedule = {
    id,
    starts_at,
    ends_at,
    length,
    fade_in,
    fade_out,
    cue_in,
    cue_out,
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
