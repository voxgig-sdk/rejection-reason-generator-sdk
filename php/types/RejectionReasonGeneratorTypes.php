<?php
declare(strict_types=1);

// Typed models for the RejectionReasonGenerator SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** GetRandomRejection entity data model. */
class GetRandomRejection
{
    public ?string $reason = null;
    public ?string $type = null;
}

/** Request payload for GetRandomRejection#load. */
class GetRandomRejectionLoadMatch
{
    public ?string $format = null;
}

/** Health entity data model. */
class Health
{
    public ?string $status = null;
}

/** Request payload for Health#load. */
class HealthLoadMatch
{
    public ?string $status = null;
}

/** Help entity data model. */
class Help
{
}

/** Request payload for Help#load. */
class HelpLoadMatch
{
}

/** Non entity data model. */
class Non
{
    public ?string $reason = null;
    public ?string $type = null;
}

/** Request payload for Non#load. */
class NonLoadMatch
{
    public ?string $format = null;
}

/** Random entity data model. */
class Random
{
    public ?string $reason = null;
    public ?string $type = null;
}

/** Request payload for Random#load. */
class RandomLoadMatch
{
    public ?string $format = null;
}

/** Yes entity data model. */
class Yes
{
    public ?string $reason = null;
    public ?string $type = null;
}

/** Request payload for Yes#load. */
class YesLoadMatch
{
    public ?string $format = null;
}

