<?php
declare(strict_types=1);

// RejectionReasonGenerator SDK base feature

class RejectionReasonGeneratorBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(RejectionReasonGeneratorContext $ctx, array $options): void {}
    public function PostConstruct(RejectionReasonGeneratorContext $ctx): void {}
    public function PostConstructEntity(RejectionReasonGeneratorContext $ctx): void {}
    public function SetData(RejectionReasonGeneratorContext $ctx): void {}
    public function GetData(RejectionReasonGeneratorContext $ctx): void {}
    public function GetMatch(RejectionReasonGeneratorContext $ctx): void {}
    public function SetMatch(RejectionReasonGeneratorContext $ctx): void {}
    public function PrePoint(RejectionReasonGeneratorContext $ctx): void {}
    public function PreSpec(RejectionReasonGeneratorContext $ctx): void {}
    public function PreRequest(RejectionReasonGeneratorContext $ctx): void {}
    public function PreResponse(RejectionReasonGeneratorContext $ctx): void {}
    public function PreResult(RejectionReasonGeneratorContext $ctx): void {}
    public function PreDone(RejectionReasonGeneratorContext $ctx): void {}
    public function PreUnexpected(RejectionReasonGeneratorContext $ctx): void {}
}
