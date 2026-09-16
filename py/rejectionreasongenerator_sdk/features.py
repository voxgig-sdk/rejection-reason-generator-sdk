# RejectionReasonGenerator SDK feature factory

from rejectionreasongenerator_sdk.feature.base_feature import RejectionReasonGeneratorBaseFeature
from rejectionreasongenerator_sdk.feature.ratelimit_feature import RejectionReasonGeneratorRatelimitFeature
from rejectionreasongenerator_sdk.feature.retry_feature import RejectionReasonGeneratorRetryFeature
from rejectionreasongenerator_sdk.feature.test_feature import RejectionReasonGeneratorTestFeature
from rejectionreasongenerator_sdk.feature.timeout_feature import RejectionReasonGeneratorTimeoutFeature


_FEATURES = {
    "base": lambda: RejectionReasonGeneratorBaseFeature(),
    "ratelimit": lambda: RejectionReasonGeneratorRatelimitFeature(),
    "retry": lambda: RejectionReasonGeneratorRetryFeature(),
    "test": lambda: RejectionReasonGeneratorTestFeature(),
    "timeout": lambda: RejectionReasonGeneratorTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
