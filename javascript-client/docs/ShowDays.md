# ShowDays


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**first_show_on** | **string** |  | [default to undefined]
**last_show_on** | **string** |  | [optional] [default to undefined]
**start_time** | **string** |  | [default to undefined]
**timezone** | **string** |  | [default to undefined]
**duration** | **string** |  | [default to undefined]
**record_enabled** | [**RecordEnabledEnum**](RecordEnabledEnum.md) |  | [optional] [default to undefined]
**week_day** | [**WeekDayEnum**](WeekDayEnum.md) |  | [optional] [default to undefined]
**repeat_kind** | [**RepeatKindEnum**](RepeatKindEnum.md) |  | [default to undefined]
**repeat_next_on** | **string** |  | [optional] [default to undefined]
**show** | **number** |  | [default to undefined]

## Example

```typescript
import { ShowDays } from 'libretime-client';

const instance: ShowDays = {
    id,
    first_show_on,
    last_show_on,
    start_time,
    timezone,
    duration,
    record_enabled,
    week_day,
    repeat_kind,
    repeat_next_on,
    show,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
