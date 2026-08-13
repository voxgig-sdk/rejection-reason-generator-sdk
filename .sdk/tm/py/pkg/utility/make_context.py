# RejectionReasonGenerator SDK utility: make_context

from projectname_sdk.core.context import RejectionReasonGeneratorContext


def make_context_util(ctxmap, basectx):
    return RejectionReasonGeneratorContext(ctxmap, basectx)
