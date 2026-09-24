# Typed models for the RejectionReasonGenerator SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class GetRandomRejection(TypedDict, total=False):
    reason: str
    type: str


class GetRandomRejectionLoadMatch(TypedDict, total=False):
    format: str


class Health(TypedDict, total=False):
    status: str


class HealthLoadMatch(TypedDict, total=False):
    status: str


class Help(TypedDict):
    pass


class HelpLoadMatch(TypedDict):
    pass


class Non(TypedDict, total=False):
    reason: str
    type: str


class NonLoadMatch(TypedDict, total=False):
    format: str


class Random(TypedDict, total=False):
    reason: str
    type: str


class RandomLoadMatch(TypedDict, total=False):
    format: str


class Yes(TypedDict, total=False):
    reason: str
    type: str


class YesLoadMatch(TypedDict, total=False):
    format: str
