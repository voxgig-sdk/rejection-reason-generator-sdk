# RejectionReasonGenerator SDK exists test

import pytest
from rejectionreasongenerator_sdk import RejectionReasonGeneratorSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = RejectionReasonGeneratorSDK.test(None, None)
        assert testsdk is not None
