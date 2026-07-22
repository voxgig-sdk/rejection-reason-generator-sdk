-- Typed models for the RejectionReasonGenerator SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class GetRandomRejection
---@field reason? string
---@field type? string

---@class GetRandomRejectionLoadMatch
---@field reason? string
---@field type? string

---@class Health
---@field status? string

---@class HealthLoadMatch
---@field status? string

---@class Help

---@class HelpLoadMatch

---@class Non
---@field reason? string
---@field type? string

---@class NonLoadMatch
---@field reason? string
---@field type? string

---@class Random
---@field reason? string
---@field type? string

---@class RandomLoadMatch
---@field reason? string
---@field type? string

---@class Yes
---@field reason? string
---@field type? string

---@class YesLoadMatch
---@field reason? string
---@field type? string

local M = {}

return M
