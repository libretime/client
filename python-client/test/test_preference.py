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

from libretime_client.models.preference import Preference  # noqa: E501

class TestPreference(unittest.TestCase):
    """Preference unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> Preference:
        """Test Preference
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `Preference`
        """
        model = Preference()  # noqa: E501
        if include_optional:
            return Preference(
                id = 56,
                key = '',
                value = '',
                user = 56
            )
        else:
            return Preference(
                id = 56,
                key = '',
                user = 56,
        )
        """

    def testPreference(self):
        """Test Preference"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
