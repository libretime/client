# coding: utf-8

"""
    LibreTime API

    Radio Broadcast & Automation Platform

    The version of the OpenAPI document: 2.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest
import datetime

from libretime_client.models.station_podcast import StationPodcast  # noqa: E501

class TestStationPodcast(unittest.TestCase):
    """StationPodcast unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> StationPodcast:
        """Test StationPodcast
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `StationPodcast`
        """
        model = StationPodcast()  # noqa: E501
        if include_optional:
            return StationPodcast(
                id = 56,
                podcast = 56
            )
        else:
            return StationPodcast(
                id = 56,
                podcast = 56,
        )
        """

    def testStationPodcast(self):
        """Test StationPodcast"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
