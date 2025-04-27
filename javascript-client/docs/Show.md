# Show


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**genre** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**image** | **string** |  | [optional] [default to undefined]
**foreground_color** | **string** |  | [optional] [default to undefined]
**background_color** | **string** |  | [optional] [default to undefined]
**live_enabled** | **boolean** |  | [readonly] [default to undefined]
**linked** | **boolean** |  | [default to undefined]
**linkable** | **boolean** |  | [default to undefined]
**auto_playlist** | **number** |  | [optional] [default to undefined]
**auto_playlist_enabled** | **boolean** |  | [default to undefined]
**auto_playlist_repeat** | **boolean** |  | [default to undefined]
**intro_playlist** | **number** |  | [optional] [default to undefined]
**override_intro_playlist** | **boolean** |  | [default to undefined]
**outro_playlist** | **number** |  | [optional] [default to undefined]
**override_outro_playlist** | **boolean** |  | [default to undefined]

## Example

```typescript
import { Show } from 'libretime-client';

const instance: Show = {
    id,
    name,
    description,
    genre,
    url,
    image,
    foreground_color,
    background_color,
    live_enabled,
    linked,
    linkable,
    auto_playlist,
    auto_playlist_enabled,
    auto_playlist_repeat,
    intro_playlist,
    override_intro_playlist,
    outro_playlist,
    override_outro_playlist,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
