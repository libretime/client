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

from libretime_client.models.patched_playout_history_metadata import PatchedPlayoutHistoryMetadata  # noqa: E501

class TestPatchedPlayoutHistoryMetadata(unittest.TestCase):
    """PatchedPlayoutHistoryMetadata unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PatchedPlayoutHistoryMetadata:
        """Test PatchedPlayoutHistoryMetadata
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PatchedPlayoutHistoryMetadata`
        """
        model = PatchedPlayoutHistoryMetadata()  # noqa: E501
        if include_optional:
            return PatchedPlayoutHistoryMetadata(
                id = 56,
                key = '',
                value = '',
                history = 56
            )
        else:
            return PatchedPlayoutHistoryMetadata(
        )
        """

    def testPatchedPlayoutHistoryMetadata(self):
        """Test PatchedPlayoutHistoryMetadata"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
