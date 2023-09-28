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

from libretime_client.models.patched_show_host import PatchedShowHost  # noqa: E501

class TestPatchedShowHost(unittest.TestCase):
    """PatchedShowHost unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PatchedShowHost:
        """Test PatchedShowHost
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PatchedShowHost`
        """
        model = PatchedShowHost()  # noqa: E501
        if include_optional:
            return PatchedShowHost(
                id = 56,
                show = 56,
                user = 56
            )
        else:
            return PatchedShowHost(
        )
        """

    def testPatchedShowHost(self):
        """Test PatchedShowHost"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
