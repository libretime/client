from libretime_client.paths.api_v2_podcast_episodes_id.get import ApiForget
from libretime_client.paths.api_v2_podcast_episodes_id.put import ApiForput
from libretime_client.paths.api_v2_podcast_episodes_id.delete import ApiFordelete
from libretime_client.paths.api_v2_podcast_episodes_id.patch import ApiForpatch


class ApiV2PodcastEpisodesId(
    ApiForget,
    ApiForput,
    ApiFordelete,
    ApiForpatch,
):
    pass
