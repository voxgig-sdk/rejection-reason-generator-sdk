# RejectionReasonGenerator SDK feature factory

from rejectionreasongenerator_sdk.feature.base_feature import RejectionReasonGeneratorBaseFeature
from rejectionreasongenerator_sdk.feature.test_feature import RejectionReasonGeneratorTestFeature


def _make_feature(name):
    features = {
        "base": lambda: RejectionReasonGeneratorBaseFeature(),
        "test": lambda: RejectionReasonGeneratorTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
