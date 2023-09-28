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

from libretime_client.models.celery_task import CeleryTask  # noqa: E501

class TestCeleryTask(unittest.TestCase):
    """CeleryTask unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> CeleryTask:
        """Test CeleryTask
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `CeleryTask`
        """
        model = CeleryTask()  # noqa: E501
        if include_optional:
            return CeleryTask(
                id = 56,
                task_id = '',
                name = '',
                dispatch_time = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
                status = '',
                track_reference = 56
            )
        else:
            return CeleryTask(
                id = 56,
                task_id = '',
                status = '',
                track_reference = 56,
        )
        """

    def testCeleryTask(self):
        """Test CeleryTask"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
