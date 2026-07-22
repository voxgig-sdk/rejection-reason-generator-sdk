# frozen_string_literal: true

# Typed models for the RejectionReasonGenerator SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetRandomRejection entity data model.
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
GetRandomRejection = Struct.new(
  :reason,
  :type,
  keyword_init: true
)

# Request payload for GetRandomRejection#load.
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
GetRandomRejectionLoadMatch = Struct.new(
  :reason,
  :type,
  keyword_init: true
)

# Health entity data model.
#
# @!attribute [rw] status
#   @return [String, nil]
Health = Struct.new(
  :status,
  keyword_init: true
)

# Request payload for Health#load.
#
# @!attribute [rw] status
#   @return [String, nil]
HealthLoadMatch = Struct.new(
  :status,
  keyword_init: true
)

# Help entity data model.
class Help
end

# Request payload for Help#load.
class HelpLoadMatch
end

# Non entity data model.
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Non = Struct.new(
  :reason,
  :type,
  keyword_init: true
)

# Request payload for Non#load.
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
NonLoadMatch = Struct.new(
  :reason,
  :type,
  keyword_init: true
)

# Random entity data model.
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Random = Struct.new(
  :reason,
  :type,
  keyword_init: true
)

# Request payload for Random#load.
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
RandomLoadMatch = Struct.new(
  :reason,
  :type,
  keyword_init: true
)

# Yes entity data model.
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Yes = Struct.new(
  :reason,
  :type,
  keyword_init: true
)

# Request payload for Yes#load.
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
YesLoadMatch = Struct.new(
  :reason,
  :type,
  keyword_init: true
)

