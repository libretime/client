"""
    LibreTime API

    Radio Broadcast & Automation Platform  # noqa: E501

    The version of the OpenAPI document: 2.0.0
    Generated by: https://openapi-generator.tech
"""


import unittest

import libretime_client
from libretime_client.api.version_api import VersionApi  # noqa: E501


class TestVersionApi(unittest.TestCase):
    """VersionApi unit test stubs"""

    def setUp(self):
        self.api = VersionApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_version_retrieve(self):
        """Test case for version_retrieve

        """
        pass


if __name__ == '__main__':
    unittest.main()
