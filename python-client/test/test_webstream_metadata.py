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

from libretime_client.models.webstream_metadata import WebstreamMetadata  # noqa: E501

class TestWebstreamMetadata(unittest.TestCase):
    """WebstreamMetadata unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> WebstreamMetadata:
        """Test WebstreamMetadata
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `WebstreamMetadata`
        """
        model = WebstreamMetadata()  # noqa: E501
        if include_optional:
            return WebstreamMetadata(
                id = 56,
                starts_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                data = '',
                schedule = 56
            )
        else:
            return WebstreamMetadata(
                id = 56,
                starts_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                data = '',
                schedule = 56,
        )
        """

    def testWebstreamMetadata(self):
        """Test WebstreamMetadata"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()