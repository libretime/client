# File


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [readonly] 
**import_status** | [**FileImportStatusEnum**](FileImportStatusEnum.md) |  | [optional] 
**filepath** | **str** |  | [optional] 
**size** | **int** |  | 
**exists** | **bool** |  | [optional] 
**mime** | **str** |  | 
**md5** | **str** |  | [optional] 
**hidden** | **bool** |  | [optional] 
**accessed** | **int** |  | 
**scheduled** | **bool** |  | [optional] 
**part_of_list** | **bool** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 
**last_played_at** | **datetime** |  | [optional] 
**bit_rate** | **int** |  | [optional] 
**sample_rate** | **int** |  | [optional] 
**format** | **str** |  | [optional] 
**channels** | **int** |  | [optional] 
**length** | **str** |  | [optional] 
**bpm** | **int** |  | [optional] 
**replay_gain** | **decimal.Decimal** |  | [optional] 
**cue_in** | **str** |  | [optional] 
**cue_out** | **str** |  | [optional] 
**name** | **str** |  | 
**description** | **str** |  | [optional] 
**artwork** | **str** |  | [optional] 
**artist_name** | **str** |  | [optional] 
**artist_url** | **str** |  | [optional] 
**original_artist** | **str** |  | [optional] 
**album_title** | **str** |  | [optional] 
**track_title** | **str** |  | [optional] 
**genre** | **str** |  | [optional] 
**mood** | **str** |  | [optional] 
**var_date** | **str** |  | [optional] 
**track_number** | **int** |  | [optional] 
**disc_number** | **str** |  | [optional] 
**comment** | **str** |  | [optional] 
**language** | **str** |  | [optional] 
**label** | **str** |  | [optional] 
**copyright** | **str** |  | [optional] 
**composer** | **str** |  | [optional] 
**conductor** | **str** |  | [optional] 
**orchestra** | **str** |  | [optional] 
**encoder** | **str** |  | [optional] 
**encoded_by** | **str** |  | [optional] 
**isrc** | **str** |  | [optional] 
**lyrics** | **str** |  | [optional] 
**lyricist** | **str** |  | [optional] 
**original_lyricist** | **str** |  | [optional] 
**subject** | **str** |  | [optional] 
**contributor** | **str** |  | [optional] 
**rating** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**info_url** | **str** |  | [optional] 
**audio_source_url** | **str** |  | [optional] 
**buy_this_url** | **str** |  | [optional] 
**catalog_number** | **str** |  | [optional] 
**radio_station_name** | **str** |  | [optional] 
**radio_station_url** | **str** |  | [optional] 
**report_datetime** | **str** |  | [optional] 
**report_location** | **str** |  | [optional] 
**report_organization** | **str** |  | [optional] 
**library** | **int** |  | [optional] 
**owner** | **int** |  | [optional] 
**edited_by** | **int** |  | [optional] 

## Example

```python
from libretime_client.models.file import File

# TODO update the JSON string below
json = "{}"
# create an instance of File from a JSON string
file_instance = File.from_json(json)
# print the JSON string representation of the object
print(File.to_json())

# convert the object into a dict
file_dict = file_instance.to_dict()
# create an instance of File from a dict
file_from_dict = File.from_dict(file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


