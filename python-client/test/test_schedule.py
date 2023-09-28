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

from libretime_client.models.schedule import Schedule  # noqa: E501

class TestSchedule(unittest.TestCase):
    """Schedule unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> Schedule:
        """Test Schedule
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `Schedule`
        """
        model = Schedule()  # noqa: E501
        if include_optional:
            return Schedule(
                id = 56,
                cue_out = '',
                ends_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                starts_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                length = '',
                fade_in = '',
                fade_out = '',
                cue_in = '',
                position = -2147483648,
                position_status = -1,
                broadcasted = -32768,
                played = True,
                instance = 56,
                file = 56,
                stream = 56
            )
        else:
            return Schedule(
                id = 56,
                cue_out = '',
                ends_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                starts_at = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                cue_in = '',
                position = -2147483648,
                broadcasted = -32768,
                instance = 56,
        )
        """

    def testSchedule(self):
        """Test Schedule"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
