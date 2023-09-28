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

from libretime_client.models.smart_block_criteria import SmartBlockCriteria  # noqa: E501

class TestSmartBlockCriteria(unittest.TestCase):
    """SmartBlockCriteria unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> SmartBlockCriteria:
        """Test SmartBlockCriteria
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `SmartBlockCriteria`
        """
        model = SmartBlockCriteria()  # noqa: E501
        if include_optional:
            return SmartBlockCriteria(
                id = 56,
                group = -2147483648,
                criteria = '',
                condition = '',
                value = '',
                extra = '',
                block = 56
            )
        else:
            return SmartBlockCriteria(
                id = 56,
                criteria = '',
                condition = '',
                value = '',
                block = 56,
        )
        """

    def testSmartBlockCriteria(self):
        """Test SmartBlockCriteria"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
